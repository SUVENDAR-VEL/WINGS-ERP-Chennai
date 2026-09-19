import { useQuery } from '@tanstack/react-query';
import api from '../../../api/axios';
import { DataTable } from '../../../components/DataTable';
import { StatusBadge } from '../../../components/StatusBadge';
import { Plus } from 'lucide-react';

export const RawMaterialReceiptList = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['receipts'],
    queryFn: () => api.get('/inventory/receipts').then((res: any) => res.data)
  });

  const columns = [
    { header: 'Receipt No', accessor: 'receiptNumber' },
    { header: 'Date', accessor: 'receiptDate', render: (val: any) => new Date(val).toLocaleDateString() },
    { header: 'Supplier', accessor: 'supplier' },
    { header: 'Item', accessor: 'item', render: (val: any) => val?.itemName },
    { header: 'Quantity', accessor: 'quantity', render: (_: any, row: any) => `${row.quantity} ${row.uom}` },
    { header: 'Status', accessor: 'inspectionStatus', render: (val: string) => <StatusBadge status={val} /> },
  ];

  return (
    <div>
      <div className="page-header flex justify-between mb-6">
        <h2 className="text-2xl font-bold">Raw Material Receipts</h2>
        <button className="btn btn-primary"><Plus size={16} className="mr-2"/> New Receipt</button>
      </div>

      {isLoading ? (
        <p>Loading receipts...</p>
      ) : (
        <DataTable columns={columns} data={data || []} />
      )}
    </div>
  );
};
