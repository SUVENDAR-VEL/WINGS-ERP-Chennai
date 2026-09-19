

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative w-full h-[650px] flex items-center bg-[#0b1325] overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/images/hero-cnc.png')` }}
      />
      {/* Gradient overlay: solid dark blue on the left to read text, fading to transparent on the right to show the machine */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b1325] via-[#0b1325]/80 to-transparent" />

      <div className="relative z-10 max-w-[1600px] mx-auto px-8 w-full">
        <div className="max-w-3xl">
          <p className="text-slate-300 font-medium tracking-widest text-xs uppercase mb-4 opacity-80">
            Precision Engineering for a Stronger Tomorrow
          </p>
          <h1 className="text-5xl md:text-[4rem] font-bold text-white leading-tight mb-1">
            Precision Machining.
          </h1>
          <h1 className="text-5xl md:text-[4rem] font-bold text-[#0066cc] leading-tight mb-8">
            Engineered for Performance.
          </h1>
          <p className="text-xl text-slate-300 mb-10 max-w-xl leading-relaxed font-light">
            CNC machining, honing and precision grinding solutions for critical industrial components.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-16">
            <a href="#contact" className="bg-[#0057b7] hover:bg-blue-600 text-white px-8 py-3.5 rounded text-sm font-semibold transition-colors flex items-center gap-2">
              Request an Enquiry <span>→</span>
            </a>
            <a href="#capabilities" className="border border-slate-500 hover:border-white text-white px-8 py-3.5 rounded text-sm font-semibold transition-colors">
              Explore Our Capabilities
            </a>
          </div>

          <div className="flex items-center mt-6">
            <div className="pr-10">
              <div className="text-4xl font-bold text-white mb-1">20+</div>
              <div className="text-[10px] text-slate-400 uppercase tracking-widest">Years Experience</div>
            </div>
            <div className="px-10 border-l border-slate-700/80 h-12 flex flex-col justify-center">
              <div className="text-4xl font-bold text-white mb-1">15+</div>
              <div className="text-[10px] text-slate-400 uppercase tracking-widest">Advanced Machines</div>
            </div>
            <div className="pl-10 border-l border-slate-700/80 h-12 flex flex-col justify-center">
              <div className="text-4xl font-bold text-white mb-1">99%+</div>
              <div className="text-[10px] text-slate-400 uppercase tracking-widest">Quality Focus</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right side floating box */}
      <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 border border-[#1e2a4a] bg-[#051024]/90 backdrop-blur-sm p-8 rounded shadow-2xl w-80">
        <h3 className="text-white font-bold mb-8 text-[11px] uppercase tracking-widest text-center">Precision Manufacturing</h3>
        <ul className="space-y-6">
          <li className="flex items-center gap-4 text-slate-300">
            <div className="w-9 h-9 rounded-full bg-[#1e2a4a]/50 border border-[#1e2a4a] flex items-center justify-center text-blue-400 text-sm">⚙️</div>
            <span className="font-bold text-[11px] tracking-wider">CNC MACHINING</span>
          </li>
          <li className="flex items-center gap-4 text-slate-300">
            <div className="w-9 h-9 rounded-full bg-[#1e2a4a]/50 border border-[#1e2a4a] flex items-center justify-center text-blue-400 text-sm">🔧</div>
            <span className="font-bold text-[11px] tracking-wider">HONING</span>
          </li>
          <li className="flex items-center gap-4 text-slate-300">
            <div className="w-9 h-9 rounded-full bg-[#1e2a4a]/50 border border-[#1e2a4a] flex items-center justify-center text-blue-400 text-sm">🔄</div>
            <span className="font-bold text-[11px] tracking-wider">PRECISION GRINDING</span>
          </li>
          <li className="flex items-center gap-4 text-slate-300">
            <div className="w-9 h-9 rounded-full bg-[#1e2a4a]/50 border border-[#1e2a4a] flex items-center justify-center text-blue-400 text-sm">🔍</div>
            <span className="font-bold text-[11px] tracking-wider">INSPECTION</span>
          </li>
        </ul>
      </div>
    </section>
  );
};
