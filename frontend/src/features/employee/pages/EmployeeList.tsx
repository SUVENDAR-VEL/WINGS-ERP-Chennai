import { 
  Users, UserPlus, Search, ChevronDown, 
  MoreVertical, Edit, Eye, UserCheck, UserX, Shield, ArrowUp, ArrowDown
} from 'lucide-react';
import { useState } from 'react';

const mockEmployees = [
  { id: 1, name: 'Ravi Kumar', code: 'RK123', mobile: '+91 98765 43210', email: 'ravi.kumar@twosyntax.com', role: 'Software Developer', status: 'Active', joiningDate: '15 Aug 2025', initials: 'RK', img: 'https://i.pravatar.cc/150?u=1' },
  { id: 2, name: 'Priya Sharma', code: 'PS456', mobile: '+91 87654 32109', email: 'priya.sharma@twosyntax.com', role: 'UI/UX Designer', status: 'Active', joiningDate: '10 Aug 2025', initials: 'PS', img: 'https://i.pravatar.cc/150?u=2' },
  { id: 3, name: 'Arun S', code: 'AS789', mobile: '+91 93456 78123', email: 'arun.s@twosyntax.com', role: 'Project Manager', status: 'Active', joiningDate: '05 Aug 2025', initials: 'AS', img: 'https://i.pravatar.cc/150?u=3' },
  { id: 4, name: 'Sneha R', code: 'SR321', mobile: '+91 91234 56789', email: 'sneha.r@twosyntax.com', role: 'QA Engineer', status: 'Active', joiningDate: '28 Jul 2025', initials: 'SR', img: 'https://i.pravatar.cc/150?u=4' },
  { id: 5, name: 'Vignesh M', code: 'VM654', mobile: '+91 99887 66554', email: 'vignesh.m@twosyntax.com', role: 'DevOps Engineer', status: 'Active', joiningDate: '20 Jul 2025', initials: 'VM', img: 'https://i.pravatar.cc/150?u=5' },
  { id: 6, name: 'Kavya S', code: 'KS987', mobile: '+91 90123 45678', email: 'kavya.s@twosyntax.com', role: 'HR Executive', status: 'Active', joiningDate: '12 Jul 2025', initials: 'KS', img: 'https://i.pravatar.cc/150?u=6' },
  { id: 7, name: 'Abhishek B', code: 'AB159', mobile: '+91 88776 55443', email: 'abhishek.b@twosyntax.com', role: 'Full Stack Developer', status: 'Inactive', joiningDate: '02 Jul 2025', initials: 'AB', img: null },
  { id: 8, name: 'Deepak T', code: 'DT753', mobile: '+91 77665 44332', email: 'deepak.t@twosyntax.com', role: 'Support Engineer', status: 'Active', joiningDate: '25 Jun 2025', initials: 'DT', img: 'https://i.pravatar.cc/150?u=8' },
];

const RoleBadge = ({ role }: { role: string }) => {
  let styles = '';
  switch(role) {
    case 'Software Developer': styles = 'bg-blue-50 text-blue-600'; break;
    case 'UI/UX Designer': styles = 'bg-purple-50 text-purple-600'; break;
    case 'Project Manager': styles = 'bg-orange-50 text-orange-600'; break;
    case 'QA Engineer': styles = 'bg-emerald-50 text-emerald-600'; break;
    case 'DevOps Engineer': styles = 'bg-fuchsia-50 text-fuchsia-600'; break;
    case 'HR Executive': styles = 'bg-rose-50 text-rose-600'; break;
    case 'Full Stack Developer': styles = 'bg-blue-50 text-blue-600'; break;
    case 'Support Engineer': styles = 'bg-indigo-50 text-indigo-600'; break;
    default: styles = 'bg-slate-50 text-slate-600';
  }
  return (
    <span className={`px-3 py-1 rounded-full text-[11px] font-bold ${styles}`}>
      {role}
    </span>
  );
};

export const EmployeeList = () => {
  const [employees] = useState(mockEmployees);

  return (
    <div className="max-w-[1600px] mx-auto pb-10 space-y-8">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-blue-600 shadow-sm border border-slate-200">
            <Users size={24} />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-[#0b1325]">Employees</h1>
            <p className="text-sm text-slate-500 font-medium mt-0.5">Manage your team and their information</p>
          </div>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-semibold flex items-center gap-2 transition-colors shadow-sm">
          <UserPlus size={18} />
          Add Employee
        </button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Employees */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex items-center gap-5">
          <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
            <Users size={20} />
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-500 mb-1">Total Employees</p>
            <div className="flex items-baseline gap-3">
              <h3 className="text-2xl font-bold text-slate-800 leading-none">86</h3>
              <span className="text-[10px] font-bold text-emerald-500 flex items-center">
                <ArrowUp size={10} className="mr-0.5" /> +5% <span className="text-slate-400 font-medium ml-1">from last month</span>
              </span>
            </div>
          </div>
        </div>

        {/* Active Employees */}
        <div className="bg-emerald-50/50 rounded-2xl p-6 border border-emerald-100 shadow-sm flex items-center gap-5">
          <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
            <UserCheck size={20} />
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-500 mb-1">Active Employees</p>
            <div className="flex items-baseline gap-3">
              <h3 className="text-2xl font-bold text-slate-800 leading-none">78</h3>
              <span className="text-[10px] font-bold text-emerald-500 flex items-center">
                <ArrowUp size={10} className="mr-0.5" /> +6% <span className="text-slate-400 font-medium ml-1">from last month</span>
              </span>
            </div>
          </div>
        </div>

        {/* Inactive Employees */}
        <div className="bg-rose-50/50 rounded-2xl p-6 border border-rose-100 shadow-sm flex items-center gap-5">
          <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 shrink-0">
            <UserX size={20} />
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-500 mb-1">Inactive Employees</p>
            <div className="flex items-baseline gap-3">
              <h3 className="text-2xl font-bold text-slate-800 leading-none">8</h3>
              <span className="text-[10px] font-bold text-rose-500 flex items-center">
                <ArrowDown size={10} className="mr-0.5" /> -2% <span className="text-slate-400 font-medium ml-1">from last month</span>
              </span>
            </div>
          </div>
        </div>

        {/* Roles */}
        <div className="bg-purple-50/50 rounded-2xl p-6 border border-purple-100 shadow-sm flex items-center gap-5">
          <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 shrink-0">
            <Shield size={20} />
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-500 mb-1">Roles</p>
            <div className="flex items-baseline gap-3">
              <h3 className="text-2xl font-bold text-slate-800 leading-none">6</h3>
              <span className="text-xs text-slate-400 font-medium">Total Roles</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area: Filters + Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
        
        {/* Filters Bar */}
        <div className="p-4 border-b border-slate-200 flex flex-col lg:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
            {/* Search */}
            <div className="relative w-full sm:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <input 
                type="text" 
                placeholder="Search by name, email, mobile or role..." 
                className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300 transition-all placeholder:text-slate-400"
              />
            </div>
            
            {/* Roles Filter */}
            <div className="relative w-full sm:w-40">
              <select className="w-full appearance-none bg-white border border-slate-200 rounded-xl px-4 py-2 pr-10 text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-100 cursor-pointer">
                <option>All Roles</option>
                <option>Software Developer</option>
                <option>UI/UX Designer</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
            </div>

            {/* Status Filter */}
            <div className="relative w-full sm:w-40">
              <select className="w-full appearance-none bg-white border border-slate-200 rounded-xl px-4 py-2 pr-10 text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-100 cursor-pointer">
                <option>All Status</option>
                <option>Active</option>
                <option>Inactive</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
            </div>
          </div>

          {/* Sort By */}
          <div className="relative w-full lg:w-auto shrink-0">
             <button className="w-full lg:w-auto flex items-center justify-between gap-2 bg-white border border-slate-200 rounded-xl px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors">
               <span className="flex items-center gap-1.5"><span className="text-slate-400">Sort by:</span> Joining Date (Newest First)</span>
               <ChevronDown className="text-slate-400" size={16} />
             </button>
          </div>
        </div>

        {/* Data Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-semibold">
              <tr>
                <th className="px-6 py-4 w-16 text-center">#</th>
                <th className="px-6 py-4">Employee</th>
                <th className="px-6 py-4">Mobile</th>
                <th className="px-6 py-4">Email ID</th>
                <th className="px-6 py-4">Role</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Joining Date</th>
                <th className="px-6 py-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700 font-medium">
              {employees.map((emp, index) => (
                <tr key={emp.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-6 py-4 text-center text-slate-400 font-semibold">{index + 1}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      {emp.img ? (
                        <img src={emp.img} alt={emp.name} className="w-10 h-10 rounded-full object-cover border border-slate-200" />
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-sm font-bold text-slate-500">
                          {emp.initials}
                        </div>
                      )}
                      <div className="flex flex-col">
                        <span className="text-slate-900 font-bold">{emp.name}</span>
                        <span className="text-[11px] text-slate-400 font-semibold">({emp.code})</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-slate-600">{emp.mobile}</td>
                  <td className="px-6 py-4 text-slate-600">{emp.email}</td>
                  <td className="px-6 py-4">
                    <RoleBadge role={emp.role} />
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${emp.status === 'Active' ? 'bg-emerald-500' : 'bg-rose-500'}`}></span>
                      <span className={`text-[13px] font-bold ${emp.status === 'Active' ? 'text-emerald-600' : 'text-rose-600'}`}>{emp.status}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-slate-600">{emp.joiningDate}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-2">
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5 shadow-sm">
                        <Eye size={14} /> View
                      </button>
                      <button className="bg-white hover:bg-slate-50 border border-slate-200 text-blue-600 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5 shadow-sm">
                        <Edit size={14} /> Edit
                      </button>
                      <button className="text-slate-400 hover:text-slate-600 p-1 rounded-lg transition-colors">
                        <MoreVertical size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Footer */}
        <div className="px-6 py-4 border-t border-slate-200 flex items-center justify-between">
          <div className="text-sm font-medium text-slate-500">
            Showing 1 to 8 of 86 employees
          </div>
          <div className="flex items-center gap-1">
            <button className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:bg-slate-100 transition-colors">
              <ChevronDown size={16} className="rotate-90" />
            </button>
            <button className="w-8 h-8 rounded-lg flex items-center justify-center bg-blue-600 text-white font-semibold text-sm shadow-sm">
              1
            </button>
            <button className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-600 hover:bg-slate-100 font-semibold text-sm transition-colors">
              2
            </button>
            <button className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-600 hover:bg-slate-100 font-semibold text-sm transition-colors">
              3
            </button>
            <button className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-600 hover:bg-slate-100 font-semibold text-sm transition-colors">
              4
            </button>
            <button className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-600 hover:bg-slate-100 font-semibold text-sm transition-colors">
              5
            </button>
            <button className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:bg-slate-100 transition-colors">
              <ChevronDown size={16} className="-rotate-90" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
