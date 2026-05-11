import { DollarSign, TrendingUp, TrendingDown, ArrowUpRight } from 'lucide-react';
import StatCard from '../components/StatCard';
import { AreaChartCard, PieChartCard } from '../components/ChartCard';
import DataTable from '../components/DataTable';
import StatusBadge from '../components/StatusBadge';
import { monthlyFinance, expenseBreakdown, transactions } from '../data/mockData';

const kpis = [
  { icon: TrendingUp,   label: 'Total Income (Apr)',   value: 'R186,500', color: 'accent' },
  { icon: TrendingDown, label: 'Total Expenses (Apr)',  value: 'R111,850', color: 'red' },
  { icon: DollarSign,   label: 'Net Position',          value: 'R74,650',  color: 'brand' },
  { icon: ArrowUpRight, label: 'Rent Collected',        value: 'R161,800', color: 'accent' },
  { icon: DollarSign,   label: 'Outstanding Rent',      value: 'R24,700',  color: 'red' },
  { icon: TrendingDown, label: 'Maintenance Spend',     value: 'R7,300',   color: 'amber' },
  { icon: TrendingDown, label: 'Security Spend',        value: 'R28,000',  color: 'purple' },
  { icon: TrendingDown, label: 'Cleaning Spend',        value: 'R18,500',  color: 'brand' },
];

const columns = [
  { key: 'date',        label: 'Date' },
  { key: 'description', label: 'Description' },
  { key: 'category',    label: 'Category' },
  { key: 'amount',      label: 'Amount', render: (v, row) => (
      <span className={row.type === 'Income' ? 'text-accent-600 font-semibold' : 'text-red-500 font-semibold'}>
        {row.type === 'Income' ? '+' : '-'}R{v.toLocaleString()}
      </span>
    )
  },
  { key: 'type',   label: 'Type', render: (v) => <StatusBadge status={v === 'Income' ? 'Paid' : 'Pending'} /> },
  { key: 'status', label: 'Status', render: (v) => <StatusBadge status={v} /> },
];

export default function Finance() {
  return (
    <div className="space-y-5">
      <h1 className="page-title">Finance Overview</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {kpis.map(k => <StatCard key={k.label} {...k} />)}
      </div>

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
        <PieChartCard title="Expense Breakdown" data={expenseBreakdown} />
      </div>

      <div className="card p-0 overflow-hidden">
        <div className="px-6 py-4 border-b border-surface-border">
          <h3 className="text-base font-semibold text-navy">Recent Transactions</h3>
        </div>
        <DataTable columns={columns} data={transactions} />
      </div>
    </div>
  );
}
