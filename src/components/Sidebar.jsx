import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard, Users, DollarSign, FileText, Wrench,
  Package, UserCheck, ShieldCheck, BarChart2, Package2, X, Menu,
} from 'lucide-react';
import logo from '../assets/clearview-logo.png';

const nav = [
  { to: '/dashboard',       label: 'Dashboard',      icon: LayoutDashboard },
  { to: '/tenants',         label: 'Tenants',        icon: Users },
  { to: '/finance',         label: 'Finance',        icon: DollarSign },
  { to: '/invoices',        label: 'Invoices',       icon: FileText },
  { to: '/maintenance',     label: 'Maintenance',    icon: Wrench },
  { to: '/inventory',       label: 'Inventory',      icon: Package },
  { to: '/staff',           label: 'Staff / HR',     icon: UserCheck },
  { to: '/compliance',      label: 'Compliance',     icon: ShieldCheck },
  { to: '/reports',         label: 'Reports',        icon: BarChart2 },
  { to: '/package-preview', label: 'Package Preview',icon: Package2 },
];

export default function Sidebar({ open, onClose }) {
  return (
    <>
      {/* Overlay for mobile */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`
          fixed top-0 left-0 h-full w-64 sidebar-gradient z-30 flex flex-col
          transition-transform duration-300
          ${open ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0 lg:static lg:flex
        `}
      >
        {/* Logo */}
        <div className="flex items-center gap-3 px-5 py-5 border-b border-white/10">
          <img src={logo} alt="ClearView Square" className="h-9 w-auto object-contain" />
          <div className="leading-tight">
            <p className="text-white font-bold text-sm leading-none">ClearView</p>
            <p className="text-slate-300 text-[10px] font-medium mt-0.5">Management System</p>
          </div>
          <button
            onClick={onClose}
            className="ml-auto text-slate-400 hover:text-white lg:hidden"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-4 overflow-y-auto space-y-0.5">
          {nav.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              onClick={onClose}
              className={({ isActive }) =>
                `sidebar-link ${isActive ? 'active' : ''}`
              }
            >
              <Icon className="w-4 h-4 flex-shrink-0" />
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>

        {/* Footer */}
        <div className="px-5 py-4 border-t border-white/10">
          <p className="text-[10px] text-slate-500">ClearView Square, Rustenburg</p>
          <p className="text-[10px] text-slate-600 mt-0.5">Phase 1 — Front-end Demo</p>
        </div>
      </aside>
    </>
  );
}
