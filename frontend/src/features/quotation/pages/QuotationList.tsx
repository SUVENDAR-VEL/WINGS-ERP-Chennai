import { useQuery } from '@tanstack/react-query';
import api from '../../../api/axios';
import { DataTable } from '../../../components/DataTable';
import { StatusBadge } from '../../../components/StatusBadge';
import { Plus } from 'lucide-react';

export const QuotationList = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['quotations'],
    queryFn: () => api.get('/quotations').then((res: any) => res.data)
  });

  const columns = [
    { header: 'Quotation No', accessor: 'quotationNumber' },
    { header: 'Version', accessor: 'version' },
    { header: 'Date', accessor: 'quotationDate' },
    { header: 'Status', accessor: 'status', render: (val: string) => <StatusBadge status={val} /> },
  ];

  return (
    <div>
      <div className="page-header flex justify-between mb-6">
        <h2 className="text-2xl font-bold">Quotations</h2>
        <button className="btn btn-primary"><Plus size={16} className="mr-2"/> Create Quotation</button>
      </div>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <DataTable columns={columns} data={data?.data || []} />
      )}
    </div>
  );
};
