import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';

export const LoginPage = () => {
  const { login, isLoading, error } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login({ username, password });
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center relative bg-[#050b14] overflow-hidden font-sans">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-screen"
        style={{ backgroundImage: `url('/images/hero-cnc.png')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-tr from-[#050b14] via-[#0b1325]/90 to-[#0057b7]/10" />

      {/* Decorative Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0057b7] rounded-full mix-blend-screen filter blur-[128px] opacity-20" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#1e2a4a] rounded-full mix-blend-screen filter blur-[128px] opacity-40" />

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md px-8 py-10 mx-4 bg-[#0a1122]/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.5)]">
        
        {/* Logo Section */}
        <div className="flex flex-col items-center justify-center mb-10">
          <svg width="45" height="35" viewBox="0 0 100 80" fill="none" stroke="currentColor" strokeWidth="5" className="text-white mb-4">
            <path d="M5 25 L25 80" strokeLinecap="round" />
            <path d="M12 25 L30 80" strokeLinecap="round" opacity="0.7" />
            <path d="M20 25 L35 80 L50 40 L65 80 L80 25" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M88 25 L70 80" strokeLinecap="round" opacity="0.7" />
            <path d="M95 25 L75 80" strokeLinecap="round" />
          </svg>
          <h2 className="text-2xl font-bold text-white tracking-wide">WINGS ERP</h2>
          <p className="text-slate-400 text-sm mt-2 text-center">Secure Access Portal</p>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded text-sm mb-6 flex items-center justify-center">
            {(error as any).message || 'Invalid credentials. Please try again.'}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Username</label>
            <input
              id="username"
              type="text"
              className="w-full bg-[#050b14]/50 border border-slate-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-[#0057b7] focus:ring-1 focus:ring-[#0057b7] transition-all placeholder:text-slate-600"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Password</label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                className="w-full bg-[#050b14]/50 border border-slate-700 text-white px-4 py-3 pr-12 rounded-lg focus:outline-none focus:border-[#0057b7] focus:ring-1 focus:ring-[#0057b7] transition-all placeholder:text-slate-600"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors p-1"
                tabIndex={-1}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <button 
            type="submit" 
            className="w-full bg-gradient-to-r from-[#0057b7] to-[#004494] hover:from-[#004494] hover:to-[#00367a] text-white font-semibold py-3.5 rounded-lg shadow-lg shadow-blue-900/20 transition-all flex items-center justify-center gap-2 mt-2"
            disabled={isLoading}
          >
            {isLoading ? 'Authenticating...' : 'Sign In to ERP'}
            {!isLoading && <span>→</span>}
          </button>
        </form>

        <div className="mt-8 text-center text-xs text-slate-500">
          <a href="/" className="hover:text-slate-300 transition-colors">← Back to Main Website</a>
        </div>
      </div>
    </div>
  );
};
