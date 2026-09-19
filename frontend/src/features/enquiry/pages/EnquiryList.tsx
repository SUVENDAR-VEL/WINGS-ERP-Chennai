import { useQuery } from '@tanstack/react-query';
import api from '../../../api/axios';
import { DataTable } from '../../../components/DataTable';
import { StatusBadge } from '../../../components/StatusBadge';
import { Plus } from 'lucide-react';

export const EnquiryList = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['enquiries'],
    queryFn: () => api.get('/enquiries').then((res: any) => res.data)
  });

  const columns = [
    { header: 'Enquiry No', accessor: 'enquiryNumber' },
    { header: 'Date', accessor: 'enquiryDate' },
    { header: 'Priority', accessor: 'priority' },
    { header: 'Status', accessor: 'status', render: (val: string) => <StatusBadge status={val} /> },
  ];

  return (
    <div>
      <div className="page-header flex justify-between mb-6">
        <h2 className="text-2xl font-bold">Customer Enquiries</h2>
        <button className="btn btn-primary"><Plus size={16} className="mr-2"/> New Enquiry</button>
      </div>

      {isLoading ? (
        <p>Loading enquiries...</p>
      ) : (
        <DataTable columns={columns} data={data?.data || []} />
      )}
    </div>
  );
};
