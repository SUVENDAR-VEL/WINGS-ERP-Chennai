import { useQuery } from '@tanstack/react-query';
import api from '../../../api/axios';
import { DataTable } from '../../../components/DataTable';
import { StatusBadge } from '../../../components/StatusBadge';
import { Plus } from 'lucide-react';

export const CustomerList = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['customers'],
    queryFn: () => api.get('/customers').then((res: any) => res.data)
  });

  const columns = [
    { header: 'Code', accessor: 'customerCode' },
    { header: 'Company Name', accessor: 'companyName' },
    { header: 'Contact Person', accessor: 'contactPerson' },
    { header: 'Mobile', accessor: 'mobile' },
    { header: 'Status', accessor: 'status', render: (val: string) => <StatusBadge status={val} /> },
  ];

  return (
    <div>
      <div className="page-header flex justify-between mb-6">
        <h2 className="text-2xl font-bold">Customers</h2>
        <button className="btn btn-primary"><Plus size={16} className="mr-2"/> Add Customer</button>
      </div>

      {isLoading ? (
        <p>Loading customers...</p>
      ) : (
        <DataTable columns={columns} data={data?.data || []} />
      )}
    </div>
  );
};
