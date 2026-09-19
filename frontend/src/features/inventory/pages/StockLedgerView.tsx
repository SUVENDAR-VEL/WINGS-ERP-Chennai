import { useQuery } from '@tanstack/react-query';
import api from '../../../api/axios';
import { useParams, Link } from 'react-router-dom';
import { DataTable } from '../../../components/DataTable';
import { ArrowLeft } from 'lucide-react';

export const StockLedgerView = () => {
  const { itemId } = useParams();

  const { data: item } = useQuery({
    queryKey: ['item', itemId],
    queryFn: () => api.get(`/inventory/items/${itemId}`).then((res: any) => res.data)
  });

  const { data: ledger, isLoading } = useQuery({
    queryKey: ['ledger', itemId],
    queryFn: () => api.get(`/inventory/transactions/ledger/${itemId}`).then((res: any) => res.data)
  });

  const columns = [
    { header: 'Date', accessor: 'transactionDate', render: (val: any) => new Date(val).toLocaleString() },
    { header: 'Type', accessor: 'transactionType' },
    { header: 'Reference', accessor: 'referenceNumber' },
    { 
      header: 'Quantity', 
      accessor: 'quantity',
      render: (_: any, row: any) => (
        <span className={['ISSUE', 'CONSUMPTION', 'SCRAP'].includes(row.transactionType) ? 'text-red-600 font-bold' : 'text-green-600 font-bold'}>
          {['ISSUE', 'CONSUMPTION', 'SCRAP'].includes(row.transactionType) ? '-' : '+'}{row.quantity} {row.uom}
        </span>
      )
    },
    { header: 'Remarks', accessor: 'remarks' }
  ];

  return (
    <div>
      <div className="mb-4">
        <Link to="/inventory/items" className="text-blue-500 hover:underline flex items-center">
          <ArrowLeft size={16} className="mr-1" /> Back to Items
        </Link>
      </div>
      
      <div className="page-header mb-6 border-b pb-4">
        <h2 className="text-2xl font-bold">Stock Ledger: {item?.itemName} ({item?.itemCode})</h2>
        <p className="text-gray-600">Current Stock: <span className="font-bold text-gray-900">{item?.currentStock} {item?.unitOfMeasure}</span></p>
      </div>

      {isLoading ? (
        <p>Loading ledger...</p>
      ) : (
        <DataTable columns={columns} data={ledger || []} />
      )}
    </div>
  );
};
