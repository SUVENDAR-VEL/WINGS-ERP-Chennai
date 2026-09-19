import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export const PublicFooter = () => {
  return (
    <footer id="contact" className="bg-slate-900 text-slate-300">
      {/* CTA Section */}
      <div className="bg-slate-800 py-12">
        <div className="max-w-[1600px] mx-auto px-8 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-full overflow-hidden hidden md:block border-2 border-slate-700">
              <img src="/images/cnc-turning.jpg" alt="Component" className="w-full h-full object-cover" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">Have a Component to Manufacture?</h2>
              <p className="text-slate-400">Share your drawing, component requirement or production enquiry with our engineering team.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded font-medium transition-colors">
              Send an Enquiry →
            </button>
            <button className="border border-slate-600 hover:border-slate-400 text-white px-6 py-3 rounded font-medium transition-colors">
              Contact Engineering Team
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Let's Discuss Your Manufacturing Requirement</h3>
            <p className="text-slate-400 mb-8">We are ready to assist you with precision CNC machining, honing and grinding.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="flex gap-4">
                <div className="text-blue-500 mt-1"><Phone size={20} /></div>
                <div>
                  <div className="font-semibold text-white mb-1">+91 98765 43210</div>
                  <div className="text-sm text-slate-400">Call Us</div>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-blue-500 mt-1"><Mail size={20} /></div>
                <div>
                  <div className="font-semibold text-white mb-1">info@wingsengineers.com</div>
                  <div className="text-sm text-slate-400">Email Us</div>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-blue-500 mt-1"><MapPin size={20} /></div>
                <div>
                  <a 
                    href="https://www.google.com/search?sca_esv=18fcc9f3899b33e6&sxsrf=APpeQntn5snhY-gxP9LuuLkmo3VKDXOmfg:1789723260200&q=wings+engineers+chennai+address&ludocid=2517036010612801770&sa=X&ved=2ahUKEwjJka7Z5veWAxXXjuEIHQqzELwQ6BN6BAgnEAI" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition-colors"
                  >
                    <div className="font-semibold text-white mb-1 hover:text-blue-400 transition-colors">15/85, Galaxy Rd, Ayanambakkam</div>
                    <div className="text-sm text-slate-400">Ponniaman Nagar, Kil Ayanambakkam, Chennai,<br/>Thiruverkadu, Tamil Nadu 600095</div>
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-blue-500 mt-1"><Clock size={20} /></div>
                <div>
                  <div className="font-semibold text-white mb-1">Mon - Sat: 9:00 AM - 6:00 PM</div>
                  <div className="text-sm text-slate-400">Sunday: Closed</div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-2 mb-8 border-t border-slate-800 pt-8">
              <span className="text-blue-500 text-2xl font-bold">W</span> 
              <div className="flex flex-col leading-none">
                <span className="text-white font-bold tracking-wider">WINGS ENGINEERS</span>
                <span className="text-[0.5rem] text-slate-500 uppercase tracking-widest">Precision Engineering</span>
              </div>
            </div>
            
            <div className="text-sm text-slate-500 flex gap-4">
              <a href="/login" className="hover:text-blue-400 transition-colors">Employee Login</a>
              <a href="#privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
            </div>
          </div>
          
          {/* Right: Form */}
          <div className="bg-white rounded-lg p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-6">Send Your Enquiry</h3>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Name *</label>
                <input type="text" className="w-full border border-slate-300 rounded p-2 text-sm text-slate-900 focus:outline-none focus:border-blue-500" placeholder="Your Name" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Company Name *</label>
                <input type="text" className="w-full border border-slate-300 rounded p-2 text-sm text-slate-900 focus:outline-none focus:border-blue-500" placeholder="Company Name" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Email *</label>
                <input type="email" className="w-full border border-slate-300 rounded p-2 text-sm text-slate-900 focus:outline-none focus:border-blue-500" placeholder="Email Address" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Contact Number *</label>
                <input type="tel" className="w-full border border-slate-300 rounded p-2 text-sm text-slate-900 focus:outline-none focus:border-blue-500" placeholder="Phone Number" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs font-semibold text-slate-600 mb-1">Message *</label>
                <textarea rows={4} className="w-full border border-slate-300 rounded p-2 text-sm text-slate-900 focus:outline-none focus:border-blue-500" placeholder="Your requirement details..."></textarea>
              </div>
              <div className="md:col-span-2 mt-4">
                <button type="button" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded transition-colors text-sm">
                  Submit Enquiry →
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      <div className="border-t border-slate-800 py-6">
        <div className="max-w-[1600px] mx-auto px-8 text-xs text-slate-500 flex justify-between items-center">
          <div>© 2026 WINGS ENGINEERS. All rights reserved.</div>
          <div className="hidden md:block">Precision Engineering • Reliable Manufacturing</div>
        </div>
      </div>
    </footer>
  );
};
