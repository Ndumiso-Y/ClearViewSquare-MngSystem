import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Mail, Eye, EyeOff, Building2 } from 'lucide-react';
import logo from '../assets/clearview-logo.png';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => navigate('/dashboard'), 800);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left panel */}
      <div className="hidden lg:flex lg:w-1/2 sidebar-gradient flex-col justify-between p-12">
        <div>
          <img src={logo} alt="ClearView Square" className="h-14 w-auto object-contain" />
        </div>
        <div>
          <h2 className="text-4xl font-bold text-white leading-tight mb-4">
            Complete control<br />of your complex.
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            Manage tenants, invoices, maintenance, staff, compliance,
            and operations — from one professional system.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-4">
            {[
              { label: 'Tenants', val: '26+' },
              { label: 'Parking Bays', val: '250+' },
              { label: 'Open 7 Days', val: '07:00–20:00' },
              { label: 'Location', val: 'Rustenburg' },
            ].map(({ label, val }) => (
              <div key={label} className="bg-white/10 rounded-xl p-4">
                <p className="text-slate-400 text-xs font-medium">{label}</p>
                <p className="text-white font-bold text-lg mt-0.5">{val}</p>
              </div>
            ))}
          </div>
        </div>
        <p className="text-slate-600 text-xs">© 2024 ClearView Square, Rustenburg. All rights reserved.</p>
      </div>

      {/* Right panel – login form */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 bg-surface">
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <div className="flex flex-col items-center mb-8 lg:hidden">
            <img src={logo} alt="ClearView Square" className="h-12 w-auto object-contain mb-3" />
            <p className="text-surface-muted text-sm">Management System</p>
          </div>

          <div className="card">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-navy">Sign in</h1>
              <p className="text-surface-muted text-sm mt-1">Management portal for complex operations</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-navy mb-1.5">Email address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-surface-muted" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="admin@clearviewsquare.co.za"
                    className="input-base w-full pl-9"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-navy mb-1.5">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-surface-muted" />
                  <input
                    type={showPass ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="input-base w-full pl-9 pr-9"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPass(!showPass)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-surface-muted hover:text-navy"
                  >
                    {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full justify-center py-2.5 text-base"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                    </svg>
                    Signing in…
                  </span>
                ) : 'Sign In'}
              </button>
            </form>

            {/* Demo credentials */}
            <div className="mt-5 p-3 bg-brand-50 border border-brand-100 rounded-lg">
              <p className="text-xs font-semibold text-brand-700 mb-1">Demo Credentials</p>
              <p className="text-xs text-brand-600">Email: <span className="font-mono">admin@clearviewsquare.co.za</span></p>
              <p className="text-xs text-brand-600">Password: <span className="font-mono">demo123</span></p>
            </div>
          </div>

          <p className="text-center text-xs text-surface-muted mt-6">
            Phase 1 — Front-end demo. No real data is stored.
          </p>
        </div>
      </div>
    </div>
  );
}
