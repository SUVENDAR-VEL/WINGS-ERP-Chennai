import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import api from '../../../api/axios';
import { useNavigate } from 'react-router-dom';

export const StockTransactionForm = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [formData, setFormData] = useState({
    itemId: '',
    type: 'ISSUE',
    quantity: '',
    referenceNumber: '',
    remarks: ''
  });
  const [error, setError] = useState('');

  const { data: items } = useQuery({
    queryKey: ['items'],
    queryFn: () => api.get('/inventory/items').then((res: any) => res.data)
  });

  const transactionTypes = ['ISSUE', 'CONSUMPTION', 'ADJUSTMENT', 'SCRAP'];

  const mutation = useMutation({
    mutationFn: (data: any) => api.post('/inventory/transactions', data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['items'] });
      queryClient.invalidateQueries({ queryKey: ['ledger'] });
      navigate('/inventory/items');
    },
    onError: (err: any) => {
      setError(err.response?.data?.message || err.message || 'Failed to process transaction');
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    const selectedItem = items?.find((i: any) => i.id.toString() === formData.itemId);
    if (!selectedItem) {
      setError('Please select an item');
      return;
    }

    mutation.mutate({
      ...formData,
      itemId: Number(formData.itemId),
      quantity: Number(formData.quantity),
      uom: selectedItem.unitOfMeasure
    });
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <h2 className="text-2xl font-bold mb-6">New Stock Transaction</h2>
      
      {error && (
        <div className="bg-red-50 text-red-600 p-4 rounded-md mb-6 border border-red-200">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Item</label>
          <select 
            className="input" 
            required 
            value={formData.itemId}
            onChange={(e) => setFormData({...formData, itemId: e.target.value})}
          >
            <option value="">Select Item</option>
            {items?.map((item: any) => (
              <option key={item.id} value={item.id}>
                {item.itemCode} - {item.itemName} (Stock: {item.currentStock} {item.unitOfMeasure})
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Transaction Type</label>
          <select 
            className="input" 
            required
            value={formData.type}
            onChange={(e) => setFormData({...formData, type: e.target.value})}
          >
            {transactionTypes.map(t => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Quantity {formData.type === 'ADJUSTMENT' ? '(Use negative to reduce)' : ''}
          </label>
          <input 
            type="number" 
            step="0.0001"
            className="input" 
            required
            value={formData.quantity}
            onChange={(e) => setFormData({...formData, quantity: e.target.value})}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Reference Number</label>
          <input 
            type="text" 
            className="input"
            value={formData.referenceNumber}
            onChange={(e) => setFormData({...formData, referenceNumber: e.target.value})}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Remarks</label>
          <textarea 
            className="input" 
            rows={3}
            value={formData.remarks}
            onChange={(e) => setFormData({...formData, remarks: e.target.value})}
          ></textarea>
        </div>

        <div className="flex justify-end pt-4">
          <button 
            type="button" 
            className="btn btn-secondary mr-2"
            onClick={() => navigate('/inventory/dashboard')}
          >
            Cancel
          </button>
          <button 
            type="submit" 
            className="btn btn-primary"
            disabled={mutation.isPending}
          >
            {mutation.isPending ? 'Processing...' : 'Submit Transaction'}
          </button>
        </div>
      </form>
    </div>
  );
};
