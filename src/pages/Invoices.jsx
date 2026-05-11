import { useState } from 'react';
import { Download, Plus, DollarSign, CheckCircle, AlertTriangle, Clock } from 'lucide-react';
import StatCard from '../components/StatCard';
import StatusBadge from '../components/StatusBadge';
import DataTable from '../components/DataTable';
import { invoices } from '../data/mockData';

const kpis = [
  { icon: DollarSign,    label: 'Total Invoiced',  value: 'R223,500', color: 'brand' },
  { icon: CheckCircle,   label: 'Paid',            value: 'R161,000', color: 'accent' },
  { icon: AlertTriangle, label: 'Overdue',         value: 'R35,500',  color: 'red' },
  { icon: Clock,         label: 'Pending',         value: 'R20,500',  color: 'amber' },
];

const columns = [
  { key: 'id',       label: 'Invoice #' },
  { key: 'tenant',   label: 'Tenant' },
  { key: 'period',   label: 'Period' },
  { key: 'amount',   label: 'Amount', render: v => `R${v.toLocaleString()}` },
  { key: 'due',      label: 'Due Date' },
  { key: 'status',   label: 'Status', render: v => <StatusBadge status={v} /> },
  { key: 'paidDate', label: 'Paid Date', render: v => v || '—' },
  { key: 'action',   label: 'Action',    render: (_, row) => (
      <button className="btn-ghost text-xs py-1" key={row.id}>
        <Download className="w-3.5 h-3.5" /> Export
      </button>
    )
  },
];

const ALL = 'All';
const statusOptions = [ALL, 'Paid', 'Overdue', 'Pending', 'Partial'];

export default function Invoices() {
  const [filter, setFilter] = useState(ALL);
  const filtered = filter === ALL ? invoices : invoices.filter(i => i.status === filter);

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <h1 className="page-title">Invoice Tracking</h1>
        <button className="btn-primary"><Plus className="w-4 h-4" /> New Invoice</button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {kpis.map(k => <StatCard key={k.label} {...k} />)}
      </div>

      <div className="flex gap-2 flex-wrap">
        {statusOptions.map(s => (
          <button
            key={s}
            onClick={() => setFilter(s)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors ${
              filter === s ? 'bg-brand-600 text-white border-brand-600' : 'bg-white text-navy border-surface-border hover:bg-surface'
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      <div className="card p-0 overflow-hidden">
        <DataTable columns={columns} data={filtered} />
      </div>
    </div>
  );
}
