import { useQuery } from '@tanstack/react-query';
import api from '../../../api/axios';
import { DataTable } from '../../../components/DataTable';

export const CostingMaster = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['costing-rates'],
    queryFn: () => api.get('/costing-rates').then((res: any) => res.data)
  });

  const columns = [
    { header: 'Component', accessor: 'componentType' },
    { header: 'Standard Rate', accessor: 'standardRate' },
    { header: 'Unit', accessor: 'unitOfMeasure' },
    { header: 'Active', accessor: 'active', render: (v: boolean) => (v ? 'Yes' : 'No') }
  ];

  return (
    <div>
      <div className="page-header flex justify-between mb-6">
        <h2 className="text-2xl font-bold">Costing Master Rates</h2>
      </div>
      {isLoading ? <p>Loading...</p> : <DataTable columns={columns} data={data?.data || []} />}
    </div>
  );
};
