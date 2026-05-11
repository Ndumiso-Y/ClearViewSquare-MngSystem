import { useState } from 'react';
import { Search, Plus, Eye } from 'lucide-react';
import StatusBadge from '../components/StatusBadge';
import DataTable from '../components/DataTable';
import { tenants } from '../data/mockData';

const ALL = 'All';
const statusOptions = [ALL, 'Paid', 'Overdue', 'Pending', 'Partial'];

export default function Tenants() {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState(ALL);

  const filtered = tenants.filter(t => {
    const matchSearch = t.store.toLowerCase().includes(search.toLowerCase()) ||
      t.unit.toLowerCase().includes(search.toLowerCase()) ||
      t.category.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === ALL || t.payStatus === statusFilter;
    return matchSearch && matchStatus;
  });

  const columns = [
    { key: 'store',      label: 'Store Name' },
    { key: 'unit',       label: 'Unit' },
    { key: 'category',   label: 'Category' },
    { key: 'contact',    label: 'Contact Person' },
    { key: 'rent',       label: 'Monthly Rent', render: (v) => `R${v.toLocaleString()}` },
    { key: 'leaseEnd',   label: 'Lease End' },
    { key: 'payStatus',  label: 'Payment', render: (v) => <StatusBadge status={v} /> },
    { key: 'compStatus', label: 'Compliance', render: (v) => <StatusBadge status={v} /> },
    { key: 'id',         label: 'Action', render: () => (
        <button className="btn-ghost text-xs py-1">
          <Eye className="w-3.5 h-3.5" /> View
        </button>
      )
    },
  ];

  return (
    <div className="space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 justify-between">
        <div>
          <h1 className="page-title">Tenant Management</h1>
          <p className="text-surface-muted text-sm mt-0.5">{tenants.length} tenants · {filtered.length} shown</p>
        </div>
        <button className="btn-primary self-start sm:self-auto">
          <Plus className="w-4 h-4" /> Add Tenant
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-surface-muted" />
          <input
            type="text"
            placeholder="Search store, unit, category…"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="input-base w-full pl-9"
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          {statusOptions.map(s => (
            <button
              key={s}
              onClick={() => setStatusFilter(s)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors ${
                statusFilter === s
                  ? 'bg-brand-600 text-white border-brand-600'
                  : 'bg-white text-navy border-surface-border hover:bg-surface'
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="card p-0 overflow-hidden">
        <DataTable columns={columns} data={filtered} />
      </div>
    </div>
  );
}
