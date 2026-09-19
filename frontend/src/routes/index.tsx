import { createBrowserRouter, Navigate } from 'react-router-dom';
import { AppLayout } from '../layouts/AppLayout';
import { AuthLayout } from '../layouts/AuthLayout';
import { LoginPage } from '../features/auth/pages/LoginPage';
import { Dashboard } from '../pages/Dashboard';
import { EmployeeList } from '../features/employee/pages/EmployeeList';
import { CustomerList } from '../features/customer/pages/CustomerList';
import { EnquiryList } from '../features/enquiry/pages/EnquiryList';
import { QuotationList } from '../features/quotation/pages/QuotationList';
import { CostingMaster } from '../features/costing/pages/CostingMaster';
import { PurchaseOrderList } from '../features/sales/pages/PurchaseOrderList';
import { SalesOrderList } from '../features/sales/pages/SalesOrderList';
import { SalesOrderDashboard } from '../features/sales/pages/SalesOrderDashboard';
import { InventoryDashboard } from '../features/inventory/pages/InventoryDashboard';
import { ItemMasterList } from '../features/inventory/pages/ItemMasterList';
import { StockLedgerView } from '../features/inventory/pages/StockLedgerView';
import { StockTransactionForm } from '../features/inventory/pages/StockTransactionForm';
import { RawMaterialReceiptList } from '../features/inventory/pages/RawMaterialReceiptList';
import { InventoryLayout } from '../features/inventory/pages/InventoryLayout';

import { LandingPage } from '../pages/landing/LandingPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />
  },
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    element: <AuthLayout />,
    children: [
      {
        element: <AppLayout />,
        children: [
          {
            path: 'dashboard',
            element: <Dashboard />
          },
          {
            path: 'employees',
            element: <EmployeeList />
          },
          {
            path: 'sales',
            element: <div className="p-6">Sales Module</div>,
            children: [
              { path: 'customers', element: <CustomerList /> },
              { path: 'enquiries', element: <EnquiryList /> },
              { path: 'quotations', element: <QuotationList /> },
              { path: 'purchase-orders', element: <PurchaseOrderList /> },
              { path: 'orders', element: <SalesOrderList /> },
              { path: 'orders/:id', element: <SalesOrderDashboard /> }
            ]
          },
          { 
            path: 'costing', 
            element: <div className="p-6">Costing Module</div>,
            children: [
              { path: 'rates', element: <CostingMaster /> }
            ] 
          },
          { 
            path: 'inventory',
            element: <InventoryLayout />,
            children: [
              { index: true, element: <Navigate to="dashboard" replace /> },
              { path: 'dashboard', element: <InventoryDashboard /> },
              { path: 'items', element: <ItemMasterList /> },
              { path: 'ledger/:itemId', element: <StockLedgerView /> },
              { path: 'transactions', element: <StockTransactionForm /> },
              { path: 'receipts', element: <RawMaterialReceiptList /> }
            ]
          },
          { path: 'production', element: <div className="p-6">Production Module Placeholder</div> },
          { path: 'quality', element: <div className="p-6">Quality Module Placeholder</div> },
          { path: 'dispatch', element: <div className="p-6">Dispatch Module Placeholder</div> },
          { path: 'accounts', element: <div className="p-6">Accounts Module Placeholder</div> },
          { path: 'machines', element: <div className="p-6">Machines Module Placeholder</div> },
          { path: 'reports', element: <div className="p-6">Reports Placeholder</div> },
          { path: 'admin', element: <div className="p-6">Administration Placeholder</div> },
        ]
      }
    ]
  }
]);

