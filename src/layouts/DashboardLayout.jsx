import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';

const pageTitles = {
  '/dashboard':       'Dashboard',
  '/tenants':         'Tenant Management',
  '/finance':         'Finance Overview',
  '/invoices':        'Invoice Tracking',
  '/maintenance':     'Maintenance & Repairs',
  '/inventory':       'Inventory & Assets',
  '/staff':           'Staff / HR',
  '/compliance':      'Compliance Management',
  '/reports':         'Reports',
  '/package-preview': 'Package Preview',
};

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { pathname } = useLocation();
  const title = pageTitles[pathname] || 'ClearView Square';

  return (
    <div className="flex h-screen overflow-hidden bg-surface">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Topbar onMenuClick={() => setSidebarOpen(true)} pageTitle={title} />
        <main className="flex-1 overflow-y-auto">
          <div className="page-enter p-6 max-w-screen-2xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
