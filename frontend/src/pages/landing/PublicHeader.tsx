

export const PublicHeader = () => {
  return (
    <header className="bg-[#0b1325] text-white sticky top-0 z-50">
      <div className="max-w-[1600px] mx-auto px-8 lg:px-12 py-5 flex items-center justify-between w-full">
        <div className="flex items-center gap-4 cursor-pointer shrink-0">
          {/* Stylized Logo W with Wings */}
          <svg width="45" height="35" viewBox="0 0 100 80" fill="none" stroke="currentColor" strokeWidth="5" className="text-white shrink-0">
            {/* Left wing lines */}
            <path d="M5 25 L25 80" strokeLinecap="round" />
            <path d="M12 25 L30 80" strokeLinecap="round" opacity="0.7" />
            {/* The W shape */}
            <path d="M20 25 L35 80 L50 40 L65 80 L80 25" strokeLinecap="round" strokeLinejoin="round" />
            {/* Right wing lines */}
            <path d="M88 25 L70 80" strokeLinecap="round" opacity="0.7" />
            <path d="M95 25 L75 80" strokeLinecap="round" />
          </svg>
          <div className="flex flex-col leading-tight whitespace-nowrap">
            <span className="text-[22px] font-bold tracking-wide">WINGS ENGINEERS</span>
            <span className="text-[9px] text-slate-400 font-medium tracking-widest uppercase mt-0.5">Precision Engineering & CNC Machining</span>
          </div>
        </div>
        
        <nav className="hidden xl:flex items-center gap-8 text-[13px] font-medium tracking-wide mx-4">
          <a href="#home" className="text-blue-500">Home</a>
          <a href="#about" className="text-slate-300 hover:text-white transition-colors">About Us</a>
          <a href="#capabilities" className="text-slate-300 hover:text-white transition-colors flex items-center gap-1">Capabilities <span className="text-[10px]">▼</span></a>
          <a href="#industries" className="text-slate-300 hover:text-white transition-colors">Industries</a>
          <a href="#quality" className="text-slate-300 hover:text-white transition-colors">Quality</a>
          <a href="#infrastructure" className="text-slate-300 hover:text-white transition-colors">Infrastructure</a>
          <a href="#contact" className="text-slate-300 hover:text-white transition-colors">Contact</a>
        </nav>

        <div className="flex items-center gap-6 shrink-0">
          <a href="/login" className="text-slate-300 hover:text-white text-[13px] font-semibold tracking-wide transition-colors">
            Login
          </a>
          <a href="#contact" className="bg-[#0066cc] hover:bg-blue-600 text-white px-6 py-2.5 rounded text-sm font-semibold transition-colors flex items-center gap-2 whitespace-nowrap">
            Request an Enquiry <span>→</span>
          </a>
        </div>
      </div>
    </header>
  );
};
