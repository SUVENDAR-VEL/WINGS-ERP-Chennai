

export const QualityAndInfraSection = () => {
  return (
    <section id="quality" className="py-20 bg-slate-50">
      <div className="max-w-[1600px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Column 1: Industries */}
          <div>
            <div className="text-slate-500 font-bold tracking-widest text-xs uppercase mb-2">
              Industries We Serve
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900 mb-6">
              Precision Components Across Industrial Applications
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-4 mb-8">
              {[
                { name: 'Automotive', icon: '🚗' },
                { name: 'Industrial Machinery', icon: '⚙️' },
                { name: 'Engineering', icon: '📐' },
                { name: 'Hydraulics & Pneumatic', icon: '💧' },
                { name: 'Pumps & Valves', icon: '🔧' },
                { name: 'General Manufacturing', icon: '🏭' },
              ].map(ind => (
                <div key={ind.name} className="bg-white border border-slate-200 p-4 flex flex-col items-center justify-center text-center gap-2 rounded hover:border-blue-500 transition-colors">
                  <div className="text-2xl">{ind.icon}</div>
                  <div className="text-xs font-semibold text-slate-700">{ind.name}</div>
                </div>
              ))}
            </div>
            <a href="#industries" className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center gap-2">
              View All Industries →
            </a>
          </div>

          {/* Column 2: Quality */}
          <div className="bg-slate-900 text-white p-8 rounded-lg shadow-xl h-full flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-extrabold uppercase mb-6 tracking-wide">
                Quality is Built Into The Process
              </h2>
              <ul className="space-y-6">
                <li className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full border border-blue-500 flex items-center justify-center text-blue-400">🔍</div>
                  <span className="font-medium text-sm">Incoming Material</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full border border-blue-500 flex items-center justify-center text-blue-400">📏</div>
                  <span className="font-medium text-sm">Process Inspection</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full border border-blue-500 flex items-center justify-center text-blue-400">⚙️</div>
                  <span className="font-medium text-sm">Dimensional Verification</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full border border-blue-500 flex items-center justify-center text-blue-400">✅</div>
                  <span className="font-medium text-sm">Final Inspection</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full border border-blue-500 flex items-center justify-center text-blue-400">📦</div>
                  <span className="font-medium text-sm">Dispatch Approval</span>
                </li>
              </ul>
            </div>
            <div className="mt-8 pt-6 border-t border-slate-800">
               <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Quality Capabilities</div>
               <ul className="text-xs text-slate-300 space-y-2">
                 <li>✓ Drawing based inspection</li>
                 <li>✓ Dimensional measurement</li>
                 <li>✓ Tolerance verification</li>
                 <li>✓ First-piece inspection</li>
                 <li>✓ In-process inspection</li>
                 <li>✓ Final inspection</li>
               </ul>
               <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white text-xs px-4 py-2 rounded transition-colors w-full">
                 Our Quality Process →
               </button>
            </div>
          </div>

          {/* Column 3: Infrastructure */}
          <div id="infrastructure" className="flex flex-col h-full">
            <div className="text-blue-600 font-bold tracking-widest text-xs uppercase mb-2">
              Our Infrastructure
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900 mb-6">
              Modern Machines.<br/>Superior Results.
            </h2>
            <div className="grid grid-cols-2 gap-4 flex-1">
              {[
                { name: 'CNC Machines', img: '/images/cnc-turning.jpg' },
                { name: 'Honing Machines', img: '/images/cnc-turning.jpg' },
                { name: 'Grinding Machines', img: '/images/cnc-turning.jpg' },
                { name: 'Inspection Equipment', img: '/images/cnc-turning.jpg' },
                { name: 'Production Facility', img: '/images/cnc-turning.jpg' },
                { name: 'Machined Components', img: '/images/cnc-turning.jpg' },
              ].map(infra => (
                <div key={infra.name} className="group overflow-hidden rounded relative">
                   <img src={infra.img} alt={infra.name} className="w-full aspect-[4/3] object-cover group-hover:scale-110 transition-transform duration-500" />
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-3">
                     <span className="text-white text-xs font-semibold">{infra.name}</span>
                   </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Why choose wings section below the columns */}
        <div className="mt-20 border-t border-slate-200 pt-12">
          <div className="text-slate-500 font-bold tracking-widest text-xs uppercase mb-8">
            Why Choose Wings Engineers
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { num: '01', title: 'Precision Focused Manufacturing' },
              { num: '02', title: 'CNC + Honing + Grinding Capability' },
              { num: '03', title: 'Drawing & Specification Driven Production' },
              { num: '04', title: 'Process-Based Quality Control' },
              { num: '05', title: 'Production & Delivery Tracking' },
              { num: '06', title: 'Customer-Focused Job Work' },
            ].map(item => (
              <div key={item.num} className="border-l-2 border-blue-500 pl-4">
                <div className="text-blue-600 font-bold text-sm mb-1">{item.num}</div>
                <div className="text-slate-800 text-sm font-semibold leading-tight">{item.title}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
