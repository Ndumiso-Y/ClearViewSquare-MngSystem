import { useState } from 'react';
import { Plus, Wrench } from 'lucide-react';
import StatusBadge from '../components/StatusBadge';
import DataTable from '../components/DataTable';
import { maintenance } from '../data/mockData';
import StatCard from '../components/StatCard';
import { AlertTriangle, CheckCircle, Clock, Activity } from 'lucide-react';

const kpis = [
  { icon: Activity,      label: 'Total Tickets',     value: '12', color: 'brand' },
  { icon: AlertTriangle, label: 'Open / In Progress', value: '9',  color: 'amber' },
  { icon: Clock,         label: 'Awaiting Contractor',value: '2',  color: 'purple' },
  { icon: CheckCircle,   label: 'Completed',          value: '3',  color: 'accent' },
];

const ALL = 'All';
const statusOpts = [ALL, 'Reported', 'In Progress', 'Awaiting Contractor', 'Completed'];
const priorityOpts = [ALL, 'Urgent', 'High', 'Medium', 'Low'];

const columns = [
  { key: 'id',          label: 'Ticket ID' },
  { key: 'issue',       label: 'Issue', render: (v) => <span className="max-w-xs block truncate text-xs">{v}</span> },
  { key: 'location',    label: 'Location' },
  { key: 'priority',    label: 'Priority', render: (v) => <StatusBadge status={v} type="priority" /> },
  { key: 'assignedTo',  label: 'Assigned To' },
  { key: 'status',      label: 'Status', render: (v) => <StatusBadge status={v} /> },
  { key: 'cost',        label: 'Est. Cost', render: (v) => `R${v.toLocaleString()}` },
  { key: 'date',        label: 'Date' },
];

export default function Maintenance() {
  const [statusFilter, setStatusFilter]   = useState(ALL);
  const [priorityFilter, setPriorityFilter] = useState(ALL);

  const filtered = maintenance.filter(m => {
    const s = statusFilter === ALL   || m.status   === statusFilter;
    const p = priorityFilter === ALL || m.priority === priorityFilter;
    return s && p;
  });

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <h1 className="page-title">Maintenance & Repairs</h1>
        <button className="btn-primary"><Plus className="w-4 h-4" /> New Ticket</button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {kpis.map(k => <StatCard key={k.label} {...k} />)}
      </div>

      <div className="flex flex-wrap gap-2 items-center">
        <span className="text-xs text-surface-muted font-semibold">Status:</span>
        {statusOpts.map(s => (
          <button key={s} onClick={() => setStatusFilter(s)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors ${statusFilter === s ? 'bg-brand-600 text-white border-brand-600' : 'bg-white text-navy border-surface-border hover:bg-surface'}`}>
            {s}
          </button>
        ))}
        <span className="text-xs text-surface-muted font-semibold ml-2">Priority:</span>
        {priorityOpts.map(p => (
          <button key={p} onClick={() => setPriorityFilter(p)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors ${priorityFilter === p ? 'bg-amber-500 text-white border-amber-500' : 'bg-white text-navy border-surface-border hover:bg-surface'}`}>
            {p}
          </button>
        ))}
      </div>

      <div className="card p-0 overflow-hidden">
        <DataTable columns={columns} data={filtered} />
      </div>
    </div>
  );
}
