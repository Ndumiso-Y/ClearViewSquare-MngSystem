import { Download, BarChart2, FileText, Users, Wrench, ShieldCheck, Package, UserCheck } from 'lucide-react';
import { AreaChartCard } from '../components/ChartCard';
import { monthlyFinance } from '../data/mockData';

const reports = [
  { icon: BarChart2,   name: 'Monthly Financial Report',    desc: 'Income, expenses, rent collection and net position summary.', last: '2024-04-01', color: 'brand' },
  { icon: Users,       name: 'Tenant Occupancy Report',     desc: 'Occupancy rates, lease statuses and tenant payment overview.', last: '2024-04-01', color: 'accent' },
  { icon: FileText,    name: 'Invoice Aging Report',        desc: 'Aging analysis of outstanding and overdue invoices.',          last: '2024-04-03', color: 'red' },
  { icon: Wrench,      name: 'Maintenance Summary Report',  desc: 'Open, in-progress and completed maintenance tickets.',         last: '2024-04-04', color: 'amber' },
  { icon: ShieldCheck, name: 'Compliance Status Report',    desc: 'Compliance health, expiring documents and overdue items.',     last: '2024-04-02', color: 'purple' },
  { icon: UserCheck,   name: 'Staff Attendance Report',     desc: 'Staff on duty, late arrivals and task completion overview.',   last: '2024-04-05', color: 'brand' },
  { icon: Package,     name: 'Inventory Reorder Report',    desc: 'Low stock and reorder-needed items across all categories.',    last: '2024-04-05', color: 'amber' },
];

const colorMap = {
  brand:  'bg-brand-50 text-brand-600',
  accent: 'bg-accent-50 text-accent-600',
  red:    'bg-red-50 text-red-500',
  amber:  'bg-amber-50 text-amber-600',
  purple: 'bg-purple-50 text-purple-600',
};

export default function Reports() {
  return (
    <div className="space-y-5">
      <h1 className="page-title">Reports</h1>

      {/* Report cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {reports.map((r) => {
          const Icon = r.icon;
          const iconCls = colorMap[r.color] || colorMap.brand;
          return (
            <div key={r.name} className="card flex flex-col gap-4 hover:shadow-card-hover transition-shadow">
              <div className="flex items-start gap-3">
                <div className={`${iconCls} p-3 rounded-xl`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-navy">{r.name}</h3>
                  <p className="text-xs text-surface-muted mt-0.5 leading-relaxed">{r.desc}</p>
                </div>
              </div>
              <div className="flex items-center justify-between mt-auto">
                <p className="text-[10px] text-surface-muted">Last generated: {r.last}</p>
                <button className="btn-ghost text-xs py-1">
                  <Download className="w-3.5 h-3.5" /> Export
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Trend chart */}
      <AreaChartCard
        title="Monthly Operational Trend — Income vs Expenses"
        data={monthlyFinance}
        keys={[
          { key: 'income',   name: 'Income' },
          { key: 'expenses', name: 'Expenses' },
        ]}
      />
    </div>
  );
}
