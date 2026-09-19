import { useQuery } from '@tanstack/react-query';
import api from '../../../api/axios';
import { DataTable } from '../../../components/DataTable';
import { StatusBadge } from '../../../components/StatusBadge';
import { Plus, List } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ItemMasterList = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['items'],
    queryFn: () => api.get('/inventory/items').then((res: any) => res.data)
  });

  const columns = [
    { header: 'Code', accessor: 'itemCode' },
    { header: 'Item Name', accessor: 'itemName' },
    { header: 'Category', accessor: 'category' },
    { header: 'Current Stock', accessor: 'currentStock', render: (_: any, row: any) => `${row.currentStock} ${row.unitOfMeasure}` },
    { header: 'Status', accessor: 'status', render: (val: string) => <StatusBadge status={val} /> },
    { 
      header: 'Actions', 
      accessor: 'id', 
      render: (id: number) => (
        <Link to={`/inventory/ledger/${id}`} className="text-blue-500 hover:underline flex items-center">
          <List size={16} className="mr-1" /> Ledger
        </Link>
      ) 
    }
  ];

  return (
    <div>
      <div className="page-header flex justify-between mb-6">
        <h2 className="text-2xl font-bold">Item Master</h2>
        <button className="btn btn-primary"><Plus size={16} className="mr-2"/> Add Item</button>
      </div>

      {isLoading ? (
        <p>Loading items...</p>
      ) : (
        <DataTable columns={columns} data={data || []} />
      )}
    </div>
  );
};
