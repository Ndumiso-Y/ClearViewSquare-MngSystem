import { ResponsiveContainer, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const COLORS = ['#3168f0', '#04d474', '#f59e0b', '#ef4444', '#8b5cf6'];

const fmt = (v) => `R${(v / 1000).toFixed(0)}k`;

export function AreaChartCard({ title, data, keys }) {
  return (
    <div className="card">
      <h3 className="section-title">{title}</h3>
      <ResponsiveContainer width="100%" height={220}>
        <AreaChart data={data} margin={{ top: 4, right: 8, left: 0, bottom: 0 }}>
          <defs>
            {keys.map((k, i) => (
              <linearGradient key={k.key} id={`grad${i}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={COLORS[i]} stopOpacity={0.18} />
                <stop offset="95%" stopColor={COLORS[i]} stopOpacity={0} />
              </linearGradient>
            ))}
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#e4e9f2" />
          <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#8a94a6' }} axisLine={false} tickLine={false} />
          <YAxis tickFormatter={fmt} tick={{ fontSize: 11, fill: '#8a94a6' }} axisLine={false} tickLine={false} />
          <Tooltip formatter={(v) => [`R${v.toLocaleString()}`, '']} contentStyle={{ borderRadius: 10, border: '1px solid #e4e9f2', fontSize: 12 }} />
          <Legend wrapperStyle={{ fontSize: 12 }} />
          {keys.map((k, i) => (
            <Area key={k.key} type="monotone" dataKey={k.key} name={k.name} stroke={COLORS[i]} strokeWidth={2} fill={`url(#grad${i})`} />
          ))}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export function BarChartCard({ title, data, dataKey, nameKey = 'status', color = '#3168f0' }) {
  return (
    <div className="card">
      <h3 className="section-title">{title}</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={data} margin={{ top: 4, right: 8, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e4e9f2" vertical={false} />
          <XAxis dataKey={nameKey} tick={{ fontSize: 11, fill: '#8a94a6' }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 11, fill: '#8a94a6' }} axisLine={false} tickLine={false} />
          <Tooltip contentStyle={{ borderRadius: 10, border: '1px solid #e4e9f2', fontSize: 12 }} />
          <Bar dataKey={dataKey} fill={color} radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function PieChartCard({ title, data }) {
  return (
    <div className="card">
      <h3 className="section-title">{title}</h3>
      <ResponsiveContainer width="100%" height={220}>
        <PieChart>
          <Pie data={data} cx="50%" cy="50%" outerRadius={80} dataKey="value" nameKey="name" label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`} labelLine={false}>
            {data.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
          </Pie>
          <Tooltip formatter={(v) => `R${v.toLocaleString()}`} contentStyle={{ borderRadius: 10, border: '1px solid #e4e9f2', fontSize: 12 }} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
