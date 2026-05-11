import StatusBadge from '../components/StatusBadge';
import DataTable from '../components/DataTable';
import StatCard from '../components/StatCard';
import { staff } from '../data/mockData';
import { UserCheck, Users, Clock, AlertTriangle, Plus } from 'lucide-react';

const onDuty  = staff.filter(s => s.attendance === 'Present');
const offDuty = staff.filter(s => s.attendance !== 'Present');

const kpis = [
  { icon: Users,     label: 'Total Staff',  value: String(staff.length), color: 'brand' },
  { icon: UserCheck, label: 'On Duty',      value: String(onDuty.length), color: 'accent' },
  { icon: Clock,     label: 'Late / Off',   value: String(offDuty.length), color: 'amber' },
  { icon: AlertTriangle, label: 'Pending Tasks', value: '8', color: 'red' },
];

const columns = [
  { key: 'name',       label: 'Staff Member' },
  { key: 'role',       label: 'Role' },
  { key: 'dept',       label: 'Department' },
  { key: 'shift',      label: 'Shift' },
  { key: 'phone',      label: 'Contact' },
  { key: 'attendance', label: 'Status', render: v => <StatusBadge status={v} /> },
  { key: 'tasks',      label: 'Assigned Tasks', render: (v) => (
      <div className="flex flex-wrap gap-1">
        {v.slice(0, 2).map((t, i) => (
          <span key={i} className="text-[10px] bg-brand-50 text-brand-700 rounded px-1.5 py-0.5">{t}</span>
        ))}
        {v.length > 2 && <span className="text-[10px] text-surface-muted">+{v.length - 2} more</span>}
      </div>
    )
  },
];

export default function Staff() {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <h1 className="page-title">Staff / HR</h1>
        <button className="btn-primary"><Plus className="w-4 h-4" /> Add Staff</button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {kpis.map(k => <StatCard key={k.label} {...k} />)}
      </div>

      {/* On duty today */}
      <div className="card">
        <h3 className="section-title flex items-center gap-2">
          <UserCheck className="w-4 h-4 text-accent-600" /> On Duty Today
        </h3>
        <div className="flex flex-wrap gap-2">
          {onDuty.map(s => (
            <div key={s.id} className="flex items-center gap-2 bg-accent-50 border border-accent-100 rounded-xl px-3 py-2">
              <div className="w-7 h-7 rounded-full bg-accent-600 flex items-center justify-center text-white text-[10px] font-bold">
                {s.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
              </div>
              <div>
                <p className="text-xs font-semibold text-navy">{s.name}</p>
                <p className="text-[10px] text-surface-muted">{s.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="card p-0 overflow-hidden">
        <div className="px-6 py-4 border-b border-surface-border">
          <h3 className="text-base font-semibold text-navy">All Staff Records</h3>
        </div>
        <DataTable columns={columns} data={staff} />
      </div>
    </div>
  );
}
