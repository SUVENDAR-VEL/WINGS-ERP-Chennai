

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-[1600px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/3] rounded overflow-hidden shadow-2xl relative z-10 border border-slate-100">
              <img 
                src="/images/about-engineer.jpg" 
                alt="Engineer operating CNC machine" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative block */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#e0e7ff] rounded -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#f1f5f9] rounded -z-10" />
          </div>
          
          <div className="pl-0 lg:pl-10">
            <div className="text-[#6b8bb8] font-bold tracking-widest text-[11px] uppercase mb-4">
              About Wings Engineers
            </div>
            <h2 className="text-[2.2rem] font-bold text-slate-900 leading-[1.1] mb-6">
              Precision Manufacturing Built Around Your Requirements
            </h2>
            <div className="text-slate-600 mb-8 space-y-4 text-[15px] leading-relaxed">
              <p>
                <strong className="text-slate-900">WINGS ENGINEERS</strong> provides precision manufacturing and job-work solutions for industrial components, with a focus on CNC machining, honing, grinding and quality inspection.
              </p>
              <p>
                We combine manufacturing capability, process control and inspection discipline to deliver components that meet customer drawings, specifications and quality requirements.
              </p>
            </div>
            
            <a href="#about-more" className="inline-flex items-center gap-2 bg-[#0057b7] hover:bg-blue-600 text-white px-7 py-3 rounded text-sm font-semibold transition-colors">
              More About Us <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
