import { Settings, Droplets, Target, Layout, ShieldCheck } from 'lucide-react';

export const CapabilitiesBanner = () => {
  const capabilities = [
    { name: 'PRECISION CNC MACHINING', icon: Settings },
    { name: 'HONING', icon: Droplets },
    { name: 'CYLINDRICAL GRINDING', icon: Target },
    { name: 'SURFACE GRINDING', icon: Layout },
    { name: 'QUALITY INSPECTION', icon: ShieldCheck },
  ];

  return (
    <div className="bg-white border-b border-slate-200">
      <div className="max-w-[1600px] mx-auto px-8 py-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <div key={cap.name} className="flex-1 flex items-center justify-center relative">
                <div className="flex flex-col items-center justify-center gap-3 cursor-pointer group w-full">
                  <div className="w-12 h-12 rounded-full border border-slate-300 flex items-center justify-center text-[#0b1325] group-hover:border-[#0057b7] group-hover:text-[#0057b7] transition-colors">
                    <Icon size={20} strokeWidth={1.5} />
                  </div>
                  <span className="text-[11px] font-bold text-slate-800 tracking-wider text-center">{cap.name}</span>
                </div>
                {idx < capabilities.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-slate-200" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
