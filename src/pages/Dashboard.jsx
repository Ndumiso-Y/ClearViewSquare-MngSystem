import { Users, TrendingUp, DollarSign, FileText, Wrench, ShieldCheck, Package, UserCheck, AlertTriangle, Clock, ChevronRight } from 'lucide-react';
import StatCard from '../components/StatCard';
import StatusBadge from '../components/StatusBadge';
import { AreaChartCard, BarChartCard, PieChartCard } from '../components/ChartCard';
import { monthlyFinance, maintenanceByStatus, invoiceOverview, maintenance, invoices, tenants } from '../data/mockData';

const kpis = [
  { icon: Users,       label: 'Total Tenants',           value: '26',        sub: '96% occupancy', color: 'brand' },
  { icon: TrendingUp,  label: 'Occupancy Rate',          value: '96%',       sub: '25 of 26 units active', color: 'accent' },
  { icon: DollarSign,  label: 'Monthly Rental Income',   value: 'R186,500',  sub: 'April 2024', color: 'accent' },
  { icon: FileText,    label: 'Outstanding Invoices',    value: 'R24,800',   sub: '3 overdue accounts', color: 'red' },
  { icon: Wrench,      label: 'Open Maintenance Tickets',value: '9',         sub: '2 urgent items', color: 'amber' },
  { icon: ShieldCheck, label: 'Compliance Score',        value: '82%',       sub: '2 items overdue', color: 'purple' },
  { icon: Package,     label: 'Inventory Alerts',        value: '6',         sub: 'Items need reorder', color: 'red' },
  { icon: UserCheck,   label: 'Staff On Duty',           value: '14',        sub: 'Active today', color: 'brand' },
];

const recentMaintenance = maintenance.filter(m => m.status !== 'Completed').slice(0, 5);
const overdueInvoices   = invoices.filter(i => i.status === 'Overdue');
const upcomingLeases    = tenants
  .filter(t => new Date(t.leaseEnd) < new Date('2025-12-31'))
  .sort((a, b) => new Date(a.leaseEnd) - new Date(b.leaseEnd))
  .slice(0, 5);

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Welcome */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div>
          <h1 className="page-title">Good morning, Nomvula 👋</h1>
          <p className="text-surface-muted text-sm mt-0.5">Here's your complex overview for April 2024.</p>
        </div>
        <span className="text-xs text-surface-muted bg-white border border-surface-border px-3 py-1.5 rounded-lg">
          Last updated: Today, 08:14
        </span>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {kpis.map((k) => <StatCard key={k.label} {...k} />)}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <AreaChartCard
            title="Monthly Income vs Expenses"
            data={monthlyFinance}
            keys={[
              { key: 'income',   name: 'Income' },
              { key: 'expenses', name: 'Expenses' },
            ]}
          />
        </div>
        <PieChartCard title="Invoice Payment Overview" data={invoiceOverview} />
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Maintenance snapshot */}
        <div className="card lg:col-span-1">
          <h3 className="section-title flex items-center gap-2">
            <Wrench className="w-4 h-4 text-amber-500" /> Recent Maintenance
          </h3>
          <div className="space-y-3">
            {recentMaintenance.map(m => (
              <div key={m.id} className="flex items-start gap-3 p-2 rounded-lg hover:bg-surface transition-colors">
                <AlertTriangle className={`w-4 h-4 mt-0.5 flex-shrink-0 ${m.priority === 'Urgent' ? 'text-red-500' : m.priority === 'High' ? 'text-orange-500' : 'text-amber-400'}`} />
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-navy truncate">{m.issue}</p>
                  <p className="text-[10px] text-surface-muted">{m.location}</p>
                </div>
                <StatusBadge status={m.status} />
              </div>
            ))}
          </div>
        </div>

        {/* Overdue invoices */}
        <div className="card lg:col-span-1">
          <h3 className="section-title flex items-center gap-2">
            <FileText className="w-4 h-4 text-red-500" /> Overdue Invoices
          </h3>
          <div className="space-y-3">
            {overdueInvoices.map(inv => (
              <div key={inv.id} className="flex items-center justify-between p-2 rounded-lg hover:bg-surface transition-colors">
                <div>
                  <p className="text-xs font-semibold text-navy">{inv.tenant}</p>
                  <p className="text-[10px] text-surface-muted">{inv.id} · Due {inv.due}</p>
                </div>
                <p className="text-sm font-bold text-red-600">R{inv.amount.toLocaleString()}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming lease expiries */}
        <div className="card lg:col-span-1">
          <h3 className="section-title flex items-center gap-2">
            <Clock className="w-4 h-4 text-brand-600" /> Upcoming Lease Expiries
          </h3>
          <div className="space-y-3">
            {upcomingLeases.map(t => (
              <div key={t.id} className="flex items-center justify-between p-2 rounded-lg hover:bg-surface transition-colors">
                <div>
                  <p className="text-xs font-semibold text-navy">{t.store}</p>
                  <p className="text-[10px] text-surface-muted">Unit {t.unit}</p>
                </div>
                <p className="text-xs font-semibold text-brand-600">{t.leaseEnd}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Maintenance by status bar chart */}
      <BarChartCard
        title="Maintenance Tickets by Status"
        data={maintenanceByStatus}
        dataKey="count"
        nameKey="status"
        color="#3168f0"
      />
    </div>
  );
}
