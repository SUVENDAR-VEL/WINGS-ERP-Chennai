

export const PartsGallery = () => {
  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-[1600px] mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
          <h2 className="text-2xl font-extrabold text-slate-900">
            From Drawing to Finished Component
          </h2>
          <a href="#portfolio" className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center gap-2">
            View More →
          </a>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {[
            { name: 'Shaft', sub: 'Precision Component' },
            { name: 'Bush', sub: 'CNC + Honing' },
            { name: 'Precision Part', sub: 'Grinding' },
            { name: 'CNC Part', sub: 'Machining' },
            { name: 'Ground Part', sub: 'Precision Finish' },
            { name: 'Finished Part', sub: 'Quality Assured' },
          ].map(part => (
            <div key={part.name} className="group">
              <div className="bg-slate-50 border border-slate-200 rounded-lg overflow-hidden mb-3 aspect-square flex items-center justify-center p-4">
                <img src="/images/cnc-turning.jpg" alt={part.name} className="max-h-full object-contain group-hover:scale-110 transition-transform duration-300 mix-blend-multiply" />
              </div>
              <div className="text-sm font-bold text-slate-800">{part.name}</div>
              <div className="text-xs text-slate-500">{part.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
