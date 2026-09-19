import { useQuery } from '@tanstack/react-query';
import api from '../../../api/axios';
import { DataTable } from '../../../components/DataTable';
import { StatusBadge } from '../../../components/StatusBadge';
import { Plus } from 'lucide-react';

export const SalesOrderList = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['sales-orders'],
    queryFn: () => api.get('/sales-orders').then((res: any) => res.data)
  });

  const columns = [
    { header: 'Order No', accessor: 'salesOrderNumber' },
    { header: 'Date', accessor: 'orderDate' },
    { header: 'Priority', accessor: 'priority' },
    { header: 'Status', accessor: 'status', render: (val: string) => <StatusBadge status={val} /> },
  ];

  return (
    <div>
      <div className="page-header flex justify-between mb-6">
        <h2 className="text-2xl font-bold">Sales Orders</h2>
        <button className="btn btn-primary"><Plus size={16} className="mr-2"/> Create Order</button>
      </div>

      {isLoading ? <p>Loading...</p> : <DataTable columns={columns} data={data?.data || []} />}
    </div>
  );
};
