import { Settings, Droplets, Target, Layout, ShieldCheck, Wrench } from 'lucide-react';

export const ManufacturingCapabilities = () => {
  const capabilities = [
    {
      title: 'CNC Machining',
      description: 'CNC turning and machining for precision industrial components.',
      icon: Settings,
      image: '/images/cnc-turning.jpg'
    },
    {
      title: 'Honing',
      description: 'Precision internal finishing for critical bore applications.',
      icon: Droplets,
      image: '/images/cnc-turning.jpg'
    },
    {
      title: 'Cylindrical Grinding',
      description: 'Controlled dimensional finishing for shafts, pins and precision components.',
      icon: Target,
      image: '/images/cnc-turning.jpg'
    },
    {
      title: 'Surface Grinding',
      description: 'Precision surface finishing for components requiring tight dimensional control.',
      icon: Layout,
      image: '/images/cnc-turning.jpg'
    },
    {
      title: 'Inspection & Quality',
      description: 'Dimensional inspection and process quality verification.',
      icon: ShieldCheck,
      image: '/images/cnc-turning.jpg'
    },
    {
      title: 'Job Work Manufacturing',
      description: 'Component manufacturing based on customer drawings and specifications.',
      icon: Wrench,
      image: '/images/cnc-turning.jpg'
    }
  ];

  return (
    <section id="capabilities" className="py-24 bg-[#f8fafc]">
      <div className="max-w-[1600px] mx-auto px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="text-blue-500 font-bold tracking-widest text-[11px] uppercase mb-3">
              Our Core Capabilities
            </div>
            <h2 className="text-[2rem] font-bold text-slate-900 mb-2 leading-tight">
              Manufacturing Capabilities
            </h2>
            <p className="text-slate-500 text-[15px]">
              From raw material to precision-finished components.
            </p>
          </div>
          <a href="#all-capabilities" className="text-blue-600 hover:text-blue-700 font-bold text-sm flex items-center gap-1 transition-colors">
            View All Capabilities <span className="text-lg leading-none">→</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((cap) => {
            const Icon = cap.icon;
            return (
              <div key={cap.title} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="h-[200px] overflow-hidden relative">
                  <img 
                    src={cap.image} 
                    alt={cap.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Icon badge overlaying the image bottom left */}
                  <div className="absolute -bottom-4 left-6 w-12 h-12 bg-white rounded flex items-center justify-center shadow-lg text-blue-600 border border-slate-100 z-10">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                </div>
                <div className="pt-8 pb-8 px-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{cap.title}</h3>
                  <p className="text-slate-500 text-[14px] mb-5 line-clamp-2 leading-relaxed">
                    {cap.description}
                  </p>
                  <a href={`#${cap.title.toLowerCase().replace(/\s+/g, '-')}`} className="text-[#0057b7] text-[14px] font-bold flex items-center gap-2 group/link hover:text-blue-700">
                    Explore Capability 
                    <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
