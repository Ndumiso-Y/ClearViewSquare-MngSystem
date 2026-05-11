import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import Login          from './pages/Login';
import Dashboard      from './pages/Dashboard';
import Tenants        from './pages/Tenants';
import Finance        from './pages/Finance';
import Invoices       from './pages/Invoices';
import Maintenance    from './pages/Maintenance';
import Inventory      from './pages/Inventory';
import Staff          from './pages/Staff';
import Compliance     from './pages/Compliance';
import Reports        from './pages/Reports';
import PackagePreview from './pages/PackagePreview';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/"      element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard"       element={<Dashboard />} />
          <Route path="/tenants"         element={<Tenants />} />
          <Route path="/finance"         element={<Finance />} />
          <Route path="/invoices"        element={<Invoices />} />
          <Route path="/maintenance"     element={<Maintenance />} />
          <Route path="/inventory"       element={<Inventory />} />
          <Route path="/staff"           element={<Staff />} />
          <Route path="/compliance"      element={<Compliance />} />
          <Route path="/reports"         element={<Reports />} />
          <Route path="/package-preview" element={<PackagePreview />} />
        </Route>
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </HashRouter>
  );
}
