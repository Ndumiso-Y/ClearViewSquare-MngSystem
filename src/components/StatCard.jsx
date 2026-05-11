export default function StatCard({ icon: Icon, label, value, sub, color = 'brand', trend }) {
  const colors = {
    brand:  { bg: 'bg-brand-50',  icon: 'text-brand-600',  border: 'border-brand-100' },
    accent: { bg: 'bg-accent-50', icon: 'text-accent-600', border: 'border-accent-100' },
    red:    { bg: 'bg-red-50',    icon: 'text-red-500',    border: 'border-red-100' },
    amber:  { bg: 'bg-amber-50',  icon: 'text-amber-600',  border: 'border-amber-100' },
    purple: { bg: 'bg-purple-50', icon: 'text-purple-600', border: 'border-purple-100' },
  };
  const c = colors[color] || colors.brand;
  return (
    <div className="stat-card flex items-start gap-4">
      <div className={`${c.bg} ${c.border} border rounded-xl p-3 flex-shrink-0`}>
        <Icon className={`w-5 h-5 ${c.icon}`} />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs font-medium text-surface-muted uppercase tracking-wide truncate">{label}</p>
        <p className="text-2xl font-bold text-navy mt-0.5">{value}</p>
        {sub && <p className="text-xs text-surface-muted mt-0.5">{sub}</p>}
        {trend && (
          <p className={`text-xs font-medium mt-1 ${trend.up ? 'text-accent-600' : 'text-red-500'}`}>
            {trend.up ? '▲' : '▼'} {trend.label}
          </p>
        )}
      </div>
    </div>
  );
}
