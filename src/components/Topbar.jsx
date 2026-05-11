import { Menu, Bell, Search, ChevronDown } from 'lucide-react';
import logo from '../assets/clearview-logo.png';

export default function Topbar({ onMenuClick, pageTitle }) {
  return (
    <header className="h-16 bg-white border-b border-surface-border flex items-center px-4 gap-4 sticky top-0 z-10">
      {/* Hamburger (mobile) */}
      <button
        onClick={onMenuClick}
        className="text-navy hover:text-brand-600 transition-colors lg:hidden"
        aria-label="Open sidebar"
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Page title */}
      <h1 className="text-base font-semibold text-navy hidden sm:block">{pageTitle}</h1>

      {/* Search */}
      <div className="flex-1 max-w-sm ml-auto lg:ml-0">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-surface-muted" />
          <input
            type="text"
            placeholder="Search…"
            className="input-base w-full pl-9 py-1.5 text-sm"
          />
        </div>
      </div>

      <div className="flex items-center gap-3 ml-auto">
        {/* Notification bell */}
        <button className="relative text-surface-muted hover:text-navy transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-white text-[9px] font-bold flex items-center justify-center">6</span>
        </button>

        {/* Profile */}
        <div className="flex items-center gap-2 cursor-pointer group">
          <div className="w-8 h-8 rounded-full bg-brand-600 flex items-center justify-center text-white text-xs font-bold">
            NS
          </div>
          <div className="hidden sm:block text-right leading-tight">
            <p className="text-xs font-semibold text-navy">Nomvula Sithole</p>
            <p className="text-[10px] text-surface-muted">Centre Manager</p>
          </div>
          <ChevronDown className="w-3.5 h-3.5 text-surface-muted group-hover:text-navy transition-colors" />
        </div>
      </div>
    </header>
  );
}
