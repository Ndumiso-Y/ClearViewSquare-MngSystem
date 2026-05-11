import { useState } from 'react';
import { Search, Plus, Package } from 'lucide-react';
import StatusBadge from '../components/StatusBadge';
import DataTable from '../components/DataTable';
import StatCard from '../components/StatCard';
import { inventory } from '../data/mockData';
import { CheckCircle, AlertTriangle, RefreshCw, Trash2 } from 'lucide-react';

const kpis = [
  { icon: CheckCircle,  label: 'In Stock',        value: '8',  color: 'accent' },
  { icon: AlertTriangle,label: 'Low Stock',        value: '5',  color: 'amber' },
  { icon: RefreshCw,    label: 'Reorder Needed',   value: '5',  color: 'red' },
  { icon: Trash2,       label: 'Replacement Needed',value: '2', color: 'purple' },
];

const columns = [
  { key: 'item',         label: 'Item Name' },
  { key: 'category',     label: 'Category' },
  { key: 'stock',        label: 'Current Stock', render: (v, row) => (
      <span className={v < row.minRequired ? 'text-red-600 font-bold' : 'text-navy font-semibold'}>{v}</span>
    )
  },
  { key: 'minRequired',  label: 'Min Required' },
  { key: 'supplier',     label: 'Supplier' },
  { key: 'lastPurchased',label: 'Last Purchased' },
  { key: 'status',       label: 'Status', render: v => <StatusBadge status={v} /> },
];

const ALL = 'All';
const statusOpts = [ALL, 'In Stock', 'Low Stock', 'Reorder Needed', 'Replacement Needed'];

export default function Inventory() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState(ALL);

  const filtered = inventory.filter(item => {
    const matchSearch = item.item.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === ALL || item.status === filter;
    return matchSearch && matchFilter;
  });

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <h1 className="page-title">Inventory & Assets</h1>
        <button className="btn-primary"><Plus className="w-4 h-4" /> Add Item</button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {kpis.map(k => <StatCard key={k.label} {...k} />)}
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-surface-muted" />
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search items…" className="input-base w-full pl-9" />
        </div>
        <div className="flex gap-2 flex-wrap">
          {statusOpts.map(s => (
            <button key={s} onClick={() => setFilter(s)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors ${filter === s ? 'bg-brand-600 text-white border-brand-600' : 'bg-white text-navy border-surface-border hover:bg-surface'}`}>
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
