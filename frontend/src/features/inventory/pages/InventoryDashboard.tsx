import { useQuery } from '@tanstack/react-query';
import api from '../../../api/axios';
import { Package, AlertTriangle, TrendingDown, ArrowRightLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export const InventoryDashboard = () => {
  const { data: items } = useQuery({
    queryKey: ['items'],
    queryFn: () => api.get('/inventory/items').then((res: any) => res.data)
  });

  const lowStockItems = items?.filter((item: any) => item.currentStock <= item.minimumStock) || [];
  
  const categories = ['RAW_MATERIAL', 'WIP', 'FINISHED_GOODS', 'TOOLS', 'CONSUMABLES', 'SCRAP'];
  
  return (
    <div>
      <div className="page-header mb-6">
        <h2 className="text-2xl font-bold">Inventory Dashboard</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="stat-card p-6 bg-white rounded-lg shadow-sm border border-gray-100 flex items-center">
          <div className="p-4 bg-blue-50 text-blue-600 rounded-full mr-4">
            <Package size={24} />
          </div>
          <div>
            <p className="text-sm text-gray-500">Total Items</p>
            <p className="text-2xl font-bold">{items?.length || 0}</p>
          </div>
        </div>
        
        <div className="stat-card p-6 bg-white rounded-lg shadow-sm border border-gray-100 flex items-center">
          <div className="p-4 bg-red-50 text-red-600 rounded-full mr-4">
            <AlertTriangle size={24} />
          </div>
          <div>
            <p className="text-sm text-gray-500">Low Stock Alerts</p>
            <p className="text-2xl font-bold">{lowStockItems.length}</p>
          </div>
        </div>

        <div className="stat-card p-6 bg-white rounded-lg shadow-sm border border-gray-100 flex items-center">
          <div className="p-4 bg-purple-50 text-purple-600 rounded-full mr-4">
            <ArrowRightLeft size={24} />
          </div>
          <div>
            <p className="text-sm text-gray-500">Quick Transaction</p>
            <Link to="/inventory/transactions" className="text-purple-600 font-semibold hover:underline mt-1 inline-block">New Entry</Link>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold mb-4 flex items-center"><TrendingDown size={18} className="mr-2 text-red-500" /> Low Stock Items</h3>
          {lowStockItems.length === 0 ? (
            <p className="text-gray-500">All items are sufficiently stocked.</p>
          ) : (
            <table className="w-full text-left">
              <thead>
                <tr className="border-b">
                  <th className="pb-2">Item Code</th>
                  <th className="pb-2">Name</th>
                  <th className="pb-2">Stock</th>
                  <th className="pb-2">Min Stock</th>
                </tr>
              </thead>
              <tbody>
                {lowStockItems.map((item: any) => (
                  <tr key={item.id} className="border-b last:border-0">
                    <td className="py-2">{item.itemCode}</td>
                    <td className="py-2">{item.itemName}</td>
                    <td className="py-2 text-red-600 font-bold">{item.currentStock} {item.unitOfMeasure}</td>
                    <td className="py-2">{item.minimumStock}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
           <h3 className="text-lg font-bold mb-4">Stock by Category</h3>
           <div className="space-y-4">
             {categories.map(cat => {
               const count = items?.filter((i: any) => i.category === cat).length || 0;
               return (
                 <div key={cat} className="flex justify-between items-center border-b pb-2 last:border-0">
                   <span className="text-gray-700">{cat.replace('_', ' ')}</span>
                   <span className="font-bold bg-gray-100 px-3 py-1 rounded-full text-sm">{count} Items</span>
                 </div>
               )
             })}
           </div>
        </div>
      </div>
    </div>
  );
};
