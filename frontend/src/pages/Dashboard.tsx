import { 
  ShoppingCart, Package, Users, BarChart3, 
  TrendingUp, Calendar, ChevronDown, CheckCircle2, 
  Clock, ArrowRight, Settings, ShieldCheck, Truck, PlusCircle
} from 'lucide-react';
import { 
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, LineChart, Line
} from 'recharts';

const barData = [
  { name: 'Sep 05', value: 45 },
  { name: 'Sep 06', value: 60 },
  { name: 'Sep 07', value: 45 },
  { name: 'Sep 08', value: 60 },
  { name: 'Sep 09', value: 50 },
  { name: 'Sep 10', value: 70 },
  { name: 'Sep 11', value: 85 },
];

const pieData = [
  { name: 'Completed', value: 26, color: '#10b981' },
  { name: 'In Progress', value: 12, color: '#3b82f6' },
  { name: 'Pending', value: 7, color: '#f59e0b' },
];

const sparklineData1 = [{v: 10}, {v: 12}, {v: 11}, {v: 15}, {v: 14}, {v: 18}, {v: 20}];
const sparklineData2 = [{v: 20}, {v: 22}, {v: 21}, {v: 25}, {v: 24}, {v: 28}, {v: 30}];
const sparklineData3 = [{v: 5}, {v: 7}, {v: 6}, {v: 10}, {v: 9}, {v: 12}, {v: 15}];
const sparklineData4 = [{v: 15}, {v: 12}, {v: 14}, {v: 11}, {v: 16}, {v: 18}, {v: 20}];

const recentActivity = [
  { id: 1, title: 'Production order #PRD-0457', desc: 'Moved to In Progress', time: '10:32 AM', icon: Package, color: 'text-emerald-500', bg: 'bg-emerald-100' },
  { id: 2, title: 'Sales order #SO-1024', desc: 'Created successfully', time: '09:48 AM', icon: ShoppingCart, color: 'text-blue-500', bg: 'bg-blue-100' },
  { id: 3, title: 'Quality check #QC-0032', desc: 'Marked as Pending', time: '09:15 AM', icon: ShieldCheck, color: 'text-rose-500', bg: 'bg-rose-100' },
  { id: 4, title: 'Dispatch #DSP-0078', desc: 'Shipped to customer', time: '08:42 AM', icon: Truck, color: 'text-blue-500', bg: 'bg-blue-100' },
  { id: 5, title: 'New employee added', desc: 'Rahul Kumar - Production', time: '08:20 AM', icon: Users, color: 'text-slate-500', bg: 'bg-slate-200' },
];

export const Dashboard = () => {
  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-10">
      
      {/* Top Banner Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Welcome Banner */}
        <div className="lg:col-span-2 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 relative overflow-hidden border border-blue-200 shadow-sm flex items-center">
          <div className="relative z-10 max-w-md">
            <h2 className="text-xs font-bold text-slate-500 tracking-widest uppercase mb-2">Good Morning,</h2>
            <h1 className="text-3xl font-bold text-slate-800 mb-4 leading-tight">
              Welcome to <span className="text-blue-600">WINGS ENGINEERS ERP</span>
            </h1>
            <p className="text-sm font-semibold text-slate-700 mb-1">Track. Manage. Grow.</p>
            <p className="text-sm text-slate-500">Your complete business operations at one place.</p>
          </div>
          {/* Abstract Laptop Illustration (Using CSS shapes as placeholder) */}
          <div className="absolute right-0 bottom-0 top-0 w-1/3 min-w-[200px] hidden sm:flex items-end justify-end p-6 opacity-90">
             <div className="w-full max-w-[240px] aspect-video bg-white rounded-t-xl border-4 border-slate-200 shadow-xl relative flex items-center justify-center overflow-hidden">
                <div className="absolute top-2 left-2 right-2 flex gap-2">
                  <div className="w-12 h-10 bg-blue-100 rounded-md"></div>
                  <div className="w-8 h-10 bg-emerald-100 rounded-md"></div>
                </div>
                <div className="absolute bottom-2 left-2 right-2 h-10 bg-slate-50 rounded-md flex items-end gap-1 p-1">
                   <div className="w-4 bg-blue-500 h-[30%]"></div>
                   <div className="w-4 bg-blue-500 h-[50%]"></div>
                   <div className="w-4 bg-blue-500 h-[80%]"></div>
                   <div className="w-4 bg-blue-500 h-[40%]"></div>
                </div>
             </div>
          </div>
        </div>

        {/* Date & Status Card */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-center relative">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-600">
              <Calendar size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-800">Wed, 11 Sep 2025</h3>
              <p className="text-xs text-slate-500 mt-0.5">Last updated: 10:42 AM</p>
            </div>
          </div>
          <div className="absolute top-6 right-6 flex items-center gap-2 bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-xs font-semibold border border-emerald-100">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            System Online
          </div>
        </div>
      </div>

      {/* KPI Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Sales Orders */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm relative overflow-hidden group hover:border-blue-300 transition-colors">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-indigo-500 flex items-center justify-center text-white shadow-sm">
                <ShoppingCart size={20} />
              </div>
              <h3 className="font-semibold text-slate-700 text-sm">Sales Orders</h3>
            </div>
            <button className="text-slate-400 hover:text-slate-600">
              <Settings size={16} />
            </button>
          </div>
          <div className="flex justify-between items-end">
            <div>
              <div className="text-3xl font-bold text-slate-800 mb-1">124</div>
              <div className="flex items-center gap-1 text-emerald-500 text-xs font-bold">
                <TrendingUp size={14} />
                <span>+12%</span>
              </div>
              <div className="text-[10px] text-slate-400 mt-1">vs last week</div>
            </div>
            <div className="w-24 h-12">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={sparklineData1}>
                  <Line type="monotone" dataKey="v" stroke="#4f46e5" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Production */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm relative overflow-hidden group hover:border-emerald-300 transition-colors">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-600 flex items-center justify-center text-white shadow-sm">
                <Package size={20} />
              </div>
              <h3 className="font-semibold text-slate-700 text-sm">Production</h3>
            </div>
            <button className="text-slate-400 hover:text-slate-600">
              <Settings size={16} />
            </button>
          </div>
          <div className="flex justify-between items-end">
            <div>
              <div className="text-3xl font-bold text-slate-800 mb-1 flex items-baseline gap-2">
                45 <span className="text-sm font-semibold text-slate-500">Active</span>
              </div>
              <div className="flex items-center gap-1 text-emerald-500 text-xs font-bold">
                <TrendingUp size={14} />
                <span>+8%</span>
              </div>
              <div className="text-[10px] text-slate-400 mt-1">vs last week</div>
            </div>
            <div className="w-24 h-12">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={sparklineData2}>
                  <Line type="monotone" dataKey="v" stroke="#10b981" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Employees */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm relative overflow-hidden group hover:border-amber-300 transition-colors">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-500 flex items-center justify-center text-white shadow-sm">
                <Users size={20} />
              </div>
              <h3 className="font-semibold text-slate-700 text-sm">Employees</h3>
            </div>
            <button className="text-slate-400 hover:text-slate-600">
              <Settings size={16} />
            </button>
          </div>
          <div className="flex justify-between items-end">
            <div>
              <div className="text-3xl font-bold text-slate-800 mb-1">86</div>
              <div className="flex items-center gap-1 text-emerald-500 text-xs font-bold">
                <TrendingUp size={14} />
                <span>+5%</span>
              </div>
              <div className="text-[10px] text-slate-400 mt-1">vs last month</div>
            </div>
            <div className="w-24 h-12">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={sparklineData3}>
                  <Line type="monotone" dataKey="v" stroke="#f59e0b" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Quality Checks */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm relative overflow-hidden group hover:border-rose-300 transition-colors">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-rose-500 flex items-center justify-center text-white shadow-sm">
                <BarChart3 size={20} />
              </div>
              <h3 className="font-semibold text-slate-700 text-sm">Quality Checks</h3>
            </div>
            <button className="text-slate-400 hover:text-slate-600">
              <Settings size={16} />
            </button>
          </div>
          <div className="flex justify-between items-end">
            <div>
              <div className="text-3xl font-bold text-slate-800 mb-1 flex items-baseline gap-2">
                12 <span className="text-sm font-semibold text-slate-500">Pending</span>
              </div>
              <div className="flex items-center gap-1 text-rose-500 text-xs font-bold">
                <TrendingUp size={14} />
                <span>+4%</span>
              </div>
              <div className="text-[10px] text-slate-400 mt-1">vs last week</div>
            </div>
            <div className="w-24 h-12">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={sparklineData4}>
                  <Line type="monotone" dataKey="v" stroke="#f43f5e" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Middle Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Bar Chart */}
        <div className="lg:col-span-5 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <BarChart3 size={18} className="text-blue-500" />
              <h3 className="font-bold text-slate-800">Sales Order Summary</h3>
            </div>
            <button className="flex items-center gap-1 text-xs font-medium text-slate-500 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg hover:bg-slate-100 transition-colors">
              Last 7 Days <ChevronDown size={14} />
            </button>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#64748b' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#64748b' }} />
                <Tooltip cursor={{fill: '#f8fafc'}} contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}} />
                <Bar dataKey="value" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={28} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Donut Chart */}
        <div className="lg:col-span-3 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
          <h3 className="font-bold text-slate-800 mb-6">Production Status</h3>
          <div className="flex flex-col items-center">
            <div className="h-40 w-40 relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={70}
                    paddingAngle={2}
                    dataKey="value"
                    stroke="none"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="text-2xl font-bold text-slate-800 leading-none">45</span>
                <span className="text-xs text-slate-500">Total</span>
              </div>
            </div>
            
            <div className="w-full mt-6 space-y-3">
              {pieData.map((item) => (
                <div key={item.name} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full" style={{backgroundColor: item.color}}></span>
                    <span className="font-medium text-slate-700">{item.name}</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-bold text-slate-800">{item.value}</span>
                    <span className="text-slate-400 w-10 text-right">({Math.round((item.value / 45) * 100)}%)</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="lg:col-span-4 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Clock size={18} className="text-blue-500" />
              <h3 className="font-bold text-slate-800">Recent Activity</h3>
            </div>
            <a href="#" className="text-xs font-semibold text-blue-600 flex items-center gap-1 hover:text-blue-700">
              View All <ArrowRight size={12} />
            </a>
          </div>
          <div className="space-y-5 flex-1">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex gap-4">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${activity.bg} ${activity.color}`}>
                  <activity.icon size={16} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-slate-800 truncate">{activity.title}</p>
                  <p className="text-xs text-slate-500 truncate mt-0.5">{activity.desc}</p>
                </div>
                <div className="text-xs font-medium text-slate-400 shrink-0">
                  {activity.time}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Mini Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-emerald-50 rounded-2xl p-5 border border-emerald-100 shadow-sm flex items-center justify-between">
          <div className="flex items-center gap-4">
             <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
               <CheckCircle2 size={20} />
             </div>
             <div>
               <p className="text-xs font-medium text-emerald-700 mb-0.5">Focus Today</p>
               <h4 className="text-sm font-bold text-slate-800">Complete Pending Quality Checks</h4>
             </div>
          </div>
          <button className="w-8 h-8 bg-emerald-100 hover:bg-emerald-200 text-emerald-700 rounded-full flex items-center justify-center transition-colors shrink-0">
            <ArrowRight size={16} />
          </button>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex items-center justify-between">
          <div className="flex items-center gap-4">
             <div className="w-10 h-10 bg-blue-50 border border-blue-100 rounded-lg flex items-center justify-center text-blue-500">
               <Settings size={20} />
             </div>
             <div>
               <p className="text-xs font-medium text-slate-500 mb-0.5">Total Orders</p>
               <div className="flex items-baseline gap-2">
                 <h4 className="text-lg font-bold text-slate-800 leading-none">124</h4>
                 <span className="text-xs font-bold text-emerald-500 flex items-center"><TrendingUp size={10} className="mr-0.5" /> +12%</span>
               </div>
             </div>
          </div>
          <div className="w-16 h-8 opacity-50">
             <ResponsiveContainer width="100%" height="100%">
                <LineChart data={sparklineData1}>
                  <Line type="monotone" dataKey="v" stroke="#3b82f6" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex items-center justify-between">
          <div className="flex items-center gap-4">
             <div className="w-10 h-10 bg-amber-50 border border-amber-100 rounded-lg flex items-center justify-center text-amber-500">
               <Users size={20} />
             </div>
             <div>
               <p className="text-xs font-medium text-slate-500 mb-0.5">Team Performance</p>
               <div className="flex items-baseline gap-2">
                 <h4 className="text-lg font-bold text-slate-800 leading-none">86 <span className="text-xs text-slate-500 font-medium">Employees</span></h4>
                 <span className="text-xs font-bold text-emerald-500 flex items-center"><TrendingUp size={10} className="mr-0.5" /> +5%</span>
               </div>
             </div>
          </div>
          <div className="w-16 h-8 opacity-50">
             <ResponsiveContainer width="100%" height="100%">
                <LineChart data={sparklineData3}>
                  <Line type="monotone" dataKey="v" stroke="#f59e0b" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
          </div>
        </div>
      </div>

    </div>
  );
};
