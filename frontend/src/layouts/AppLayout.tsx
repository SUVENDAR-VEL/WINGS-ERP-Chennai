import { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { useAuth } from '../features/auth/hooks/useAuth';
import {
  LayoutDashboard, ShoppingCart, Calculator, Package,
  Factory, CheckCircle, Truck, FileText,
  Settings, Users, BarChart3, Shield, Menu, Bell, Search, ChevronDown
} from 'lucide-react';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Sales', href: '/sales', icon: ShoppingCart, hasDropdown: true },
  { name: 'Costing', href: '/costing', icon: Calculator },
  { name: 'Inventory', href: '/inventory', icon: Package, hasDropdown: true },
  { name: 'Production', href: '/production', icon: Factory, hasDropdown: true },
  { name: 'Quality', href: '/quality', icon: CheckCircle, hasDropdown: true },
  { name: 'Dispatch', href: '/dispatch', icon: Truck, hasDropdown: true },
  { name: 'Accounts', href: '/accounts', icon: FileText, hasDropdown: true },
  { name: 'Machines', href: '/machines', icon: Settings },
  { name: 'Employees', href: '/employees', icon: Users },
  { name: 'Reports', href: '/reports', icon: BarChart3, hasDropdown: true },
  { name: 'Administration', href: '/admin', icon: Shield, hasDropdown: true },
];

export const AppLayout = () => {
  const { logout } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const userName = user.username || 'unithead';
  const userRole = user.roles?.[0]?.replace('ROLE_', '') || 'UNIT_HEAD';

  return (
    <div className="flex h-screen bg-slate-50 font-sans overflow-hidden">
      {/* Sidebar */}
      <aside
        className={`${sidebarOpen ? 'w-[260px]' : 'w-0'} flex flex-col bg-[#0b1325] transition-all duration-300 ease-in-out shrink-0 overflow-hidden relative`}
      >
        <div className="flex items-center px-6 h-20 shrink-0">
          <div className="flex items-center gap-3">
            {/* Custom stylized butterfly logo from mockup */}
            <svg width="32" height="32" viewBox="0 0 100 100" fill="none" className="text-blue-500">
              <path d="M50 50L30 20L10 40L30 60L50 50Z" fill="currentColor" opacity="0.8" />
              <path d="M50 50L70 20L90 40L70 60L50 50Z" fill="currentColor" />
              <path d="M50 50L30 80L10 60L30 40L50 50Z" fill="currentColor" opacity="0.6" />
              <path d="M50 50L70 80L90 60L70 40L50 50Z" fill="currentColor" opacity="0.4" />
            </svg>
            <span className="text-xl font-bold tracking-wide text-white">WINGS <span className="text-blue-400">ERP</span></span>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto px-4 py-4 space-y-1.5 scrollbar-hide z-10">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) =>
                `flex items-center justify-between px-3 py-2.5 rounded-xl transition-colors ${isActive
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-300 hover:bg-[#152343] hover:text-white'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <div className="flex items-center gap-3">
                    <item.icon size={18} strokeWidth={isActive ? 2 : 1.5} />
                    <span className={`text-sm ${isActive ? 'font-medium' : 'font-normal'}`}>{item.name}</span>
                  </div>
                  {item.hasDropdown && (
                    <ChevronDown size={14} className="opacity-70" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Sidebar Footer with Wave */}
        <div className="relative p-6 shrink-0 z-10 mt-auto">
          <p className="text-[11px] leading-tight text-white/70 font-medium z-10 relative">
            Smarter Operations<br />Bigger Tomorrow
          </p>
        </div>

        {/* Background Wave */}
        <div className="absolute bottom-0 left-0 right-0 h-32 opacity-30 pointer-events-none z-0">
          <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-full">
            <path fill="#3b82f6" fillOpacity="1" d="M0,256L48,229.3C96,203,192,149,288,154.7C384,160,480,224,576,218.7C672,213,768,139,864,128C960,117,1056,171,1152,197.3C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navbar */}
        <header className="bg-white h-16 shrink-0 flex items-center justify-between px-6 border-b border-slate-200">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-slate-500 hover:text-slate-800 transition-colors"
            >
              <Menu size={22} />
            </button>
            <div className="text-[13px] font-semibold text-slate-700 tracking-wide">
              WINGS / <span className="text-slate-500 font-medium">Dashboard</span>
            </div>
          </div>

          <div className="flex-1 max-w-md mx-8 hidden md:block">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <input
                type="text"
                placeholder="Search anything..."
                className="w-full bg-slate-50 border border-slate-200 rounded-xl py-1.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300 transition-all placeholder:text-slate-400"
              />
            </div>
          </div>

          <div className="flex items-center gap-6 shrink-0">
            <button className="relative text-slate-500 hover:text-slate-800 transition-colors">
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-[9px] font-bold text-white border-2 border-white">
                3
              </span>
            </button>

            <div className="flex items-center gap-3 cursor-pointer" onClick={logout}>
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white text-sm font-semibold shadow-sm">
                {userName.charAt(0).toUpperCase()}
              </div>
              <div className="flex flex-col hidden sm:flex">
                <span className="text-sm font-bold text-slate-700 leading-tight">{userName}</span>
                <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">{userRole}</span>
              </div>
              <ChevronDown size={14} className="text-slate-400 hidden sm:block" />
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto bg-slate-50 p-6 md:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
