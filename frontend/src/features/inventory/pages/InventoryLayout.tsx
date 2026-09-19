import { Outlet, NavLink } from 'react-router-dom';

export const InventoryLayout = () => {
  const tabs = [
    { name: 'Dashboard', path: '/inventory/dashboard' },
    { name: 'Item Master', path: '/inventory/items' },
    { name: 'Receipts', path: '/inventory/receipts' },
    { name: 'Transactions', path: '/inventory/transactions' },
  ];

  return (
    <div className="p-6">
      <div className="mb-6 border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {tabs.map((tab) => (
            <NavLink
              key={tab.name}
              to={tab.path}
              className={({ isActive }) =>
                `whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm ${
                  isActive
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`
              }
            >
              {tab.name}
            </NavLink>
          ))}
        </nav>
      </div>
      <Outlet />
    </div>
  );
};
