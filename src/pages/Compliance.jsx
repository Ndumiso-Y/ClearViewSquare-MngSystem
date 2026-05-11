import { useState } from 'react';
import StatusBadge from '../components/StatusBadge';
import DataTable from '../components/DataTable';
import StatCard from '../components/StatCard';
import { compliance } from '../data/mockData';
import { ShieldCheck, AlertTriangle, Clock, XCircle, Plus } from 'lucide-react';

const score = Math.round((compliance.filter(c => c.status === 'Compliant').length / compliance.length) * 100);

const kpis = [
  { icon: ShieldCheck,  label: 'Overall Compliance Score', value: `${score}%`,  color: 'accent' },
  { icon: XCircle,      label: 'Documents Missing',         value: '1',          color: 'red' },
  { icon: Clock,        label: 'Expiring Soon',             value: '3',          color: 'amber' },
  { icon: AlertTriangle,label: 'Overdue Items',             value: '1',          color: 'red' },
];

const ALL = 'All';
const statusOpts = [ALL, 'Compliant', 'Expiring Soon', 'Missing', 'Overdue'];

const columns = [
  { key: 'item',        label: 'Compliance Item' },
  { key: 'relatedTo',   label: 'Related To' },
  { key: 'category',    label: 'Category' },
  { key: 'expiry',      label: 'Expiry Date' },
  { key: 'status',      label: 'Status', render: v => <StatusBadge status={v} /> },
  { key: 'responsible', label: 'Responsible Person' },
];

export default function Compliance() {
  const [filter, setFilter] = useState(ALL);
  const filtered = filter === ALL ? compliance : compliance.filter(c => c.status === filter);

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <h1 className="page-title">Compliance Management</h1>
        <button className="btn-primary"><Plus className="w-4 h-4" /> Add Item</button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {kpis.map(k => <StatCard key={k.label} {...k} />)}
      </div>

      {/* Progress bar */}
      <div className="card">
        <div className="flex items-center justify-between mb-2">
          <p className="text-sm font-semibold text-navy">Overall Compliance Health</p>
          <p className="text-sm font-bold text-accent-600">{score}%</p>
        </div>
        <div className="w-full h-3 bg-surface-border rounded-full overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-accent-500 to-brand-500 transition-all duration-700"
            style={{ width: `${score}%` }}
          />
        </div>
        <p className="text-xs text-surface-muted mt-2">
          {compliance.filter(c => c.status === 'Compliant').length} of {compliance.length} items are fully compliant.
        </p>
      </div>

      <div className="flex gap-2 flex-wrap">
        {statusOpts.map(s => (
          <button key={s} onClick={() => setFilter(s)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors ${filter === s ? 'bg-brand-600 text-white border-brand-600' : 'bg-white text-navy border-surface-border hover:bg-surface'}`}>
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
