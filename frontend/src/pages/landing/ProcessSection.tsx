
import { CheckCircle2 } from 'lucide-react';

export const ProcessSection = () => {
  return (
    <>
      {/* Dark CNC Machining Section */}
      <section className="bg-slate-900 text-white pt-20 pb-0 overflow-hidden relative">
        <div className="max-w-[1600px] mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-0">
            <div className="pb-20">
              <div className="text-blue-500 font-bold tracking-widest text-xs uppercase mb-2">
                Our Capabilities
              </div>
              <h2 className="text-4xl font-extrabold mb-4 uppercase tracking-wider">
                CNC Machining
              </h2>
              <p className="text-slate-300 text-lg mb-8">
                Precision starts with controlled machining.
              </p>
              
              <ul className="space-y-4 mb-10">
                {[
                  'CNC Turning',
                  'CNC Machining',
                  'Component Production',
                  'Batch Manufacturing',
                  'Drawing-Based Manufacturing'
                ].map(item => (
                  <li key={item} className="flex items-center gap-3 text-slate-300">
                    <CheckCircle2 className="text-blue-500 w-5 h-5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <a href="#contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors">
                Talk to Our Engineering Team →
              </a>
            </div>
            
            {/* DMG Mori Image placeholder */}
            <div className="relative h-full flex items-end justify-end translate-y-10">
              <img 
                src="/images/cnc-turning.jpg" 
                alt="DMG MORI CNC Machine" 
                className="w-full max-w-2xl rounded-t-xl shadow-2xl border-t border-l border-r border-slate-700/50 opacity-80"
              />
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 flex flex-col gap-8 hidden xl:flex">
                 <div className="text-slate-600 font-bold tracking-widest text-sm" style={{ writingMode: 'vertical-rl' }}>PRECISION</div>
                 <div className="text-slate-600 font-bold tracking-widest text-sm" style={{ writingMode: 'vertical-rl' }}>PROCESS</div>
                 <div className="text-slate-600 font-bold tracking-widest text-sm" style={{ writingMode: 'vertical-rl' }}>CONTROL</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Honing & Grinding Blocks */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-[1600px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Honing */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 flex flex-col sm:flex-row gap-6 items-center">
              <img src="/images/cnc-turning.jpg" alt="Honing" className="w-full sm:w-1/2 aspect-video object-cover rounded" />
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 uppercase">Honing</h3>
                <p className="text-slate-600 text-sm mb-4">
                  Precision bore finishing for critical applications.
                </p>
                <a href="#honing" className="text-slate-900 hover:text-blue-600 text-sm font-semibold border border-slate-300 px-4 py-2 rounded transition-colors inline-block">
                  Explore Honing →
                </a>
              </div>
            </div>

            {/* Grinding */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 flex flex-col sm:flex-row gap-6 items-center">
              <img src="/images/cnc-turning.jpg" alt="Grinding" className="w-full sm:w-1/2 aspect-video object-cover rounded" />
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 uppercase">Grinding</h3>
                <p className="text-slate-600 text-sm mb-4">
                  Dimensional finishing for high-precision components.
                </p>
                <a href="#grinding" className="text-slate-900 hover:text-blue-600 text-sm font-semibold border border-slate-300 px-4 py-2 rounded transition-colors inline-block">
                  Explore Grinding →
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* How We Work (Timeline) */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-[1600px] mx-auto px-8">
          <div className="text-slate-500 font-bold tracking-widest text-xs uppercase mb-2">
            Our Process
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 mb-12">
            How We Work
          </h2>
          
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-8 left-0 right-0 h-0.5 bg-slate-200 hidden md:block" />
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {[
                { step: '01', title: 'Customer Enquiry' },
                { step: '02', title: 'Drawing & Requirement Review' },
                { step: '03', title: 'Process Planning' },
                { step: '04', title: 'CNC Machining' },
                { step: '05', title: 'Honing / Grinding' },
                { step: '06', title: 'Quality Inspection' },
                { step: '07', title: 'Final Dispatch' },
              ].map((item) => (
                <div key={item.step} className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center mb-4 text-slate-400">
                    <span className="text-xl">⚙️</span>
                  </div>
                  <div className="text-xs font-bold text-slate-400 mb-1">{item.step}</div>
                  <div className="text-sm font-semibold text-slate-800 leading-tight">
                    {item.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
