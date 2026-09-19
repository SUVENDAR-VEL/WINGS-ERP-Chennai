import { useParams } from 'react-router-dom';

export const SalesOrderDashboard = () => {
  const { id } = useParams();

  // Placeholder for individual order fetching. Static layout to demonstrate progress bars.
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Sales Order Dashboard {id ? `- ${id}` : ''}</h2>
      
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h3 className="text-lg font-semibold mb-4">Production Progress</h3>
        
        {/* Progress Bar (Visual representation) */}
        <div className="w-full bg-gray-200 rounded-full h-4 flex overflow-hidden">
           <div className="bg-green-500 h-4" style={{ width: '40%' }} title="Delivered"></div>
           <div className="bg-yellow-400 h-4" style={{ width: '20%' }} title="Produced (Not Delivered)"></div>
           <div className="bg-gray-300 h-4" style={{ width: '40%' }} title="Balance"></div>
        </div>
        
        <div className="flex justify-between mt-2 text-sm text-gray-600 font-medium">
           <span className="text-green-600">Delivered: 40%</span>
           <span className="text-yellow-600">Produced Buffer: 20%</span>
           <span className="text-gray-500">Pending Balance: 40%</span>
        </div>
      </div>
    </div>
  );
};
