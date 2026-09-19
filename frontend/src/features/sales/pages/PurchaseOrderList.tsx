import { useQuery } from '@tanstack/react-query';
import api from '../../../api/axios';
import { DataTable } from '../../../components/DataTable';
import { Plus } from 'lucide-react';

export const PurchaseOrderList = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['purchase-orders'],
    queryFn: () => api.get('/purchase-orders').then((res: any) => res.data)
  });

  const columns = [
    { header: 'PO Number', accessor: 'poNumber' },
    { header: 'PO Date', accessor: 'poDate' },
    { header: 'Customer Reference', accessor: 'customerReference' },
  ];

  return (
    <div>
      <div className="page-header flex justify-between mb-6">
        <h2 className="text-2xl font-bold">Customer Purchase Orders</h2>
        <button className="btn btn-primary"><Plus size={16} className="mr-2"/> Register PO</button>
      </div>

      {isLoading ? <p>Loading...</p> : <DataTable columns={columns} data={data?.data || []} />}
    </div>
  );
};
