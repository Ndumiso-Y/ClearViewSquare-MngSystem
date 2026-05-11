import { CheckCircle, Clock, AlertTriangle, XCircle, Info } from 'lucide-react';

const variants = {
  Paid:       { bg: 'bg-accent-100 text-accent-700', dot: 'bg-accent-500' },
  Compliant:  { bg: 'bg-accent-100 text-accent-700', dot: 'bg-accent-500' },
  'In Stock': { bg: 'bg-accent-100 text-accent-700', dot: 'bg-accent-500' },
  Completed:  { bg: 'bg-accent-100 text-accent-700', dot: 'bg-accent-500' },
  Present:    { bg: 'bg-accent-100 text-accent-700', dot: 'bg-accent-500' },
  Cleared:    { bg: 'bg-accent-100 text-accent-700', dot: 'bg-accent-500' },

  Pending:           { bg: 'bg-blue-100 text-blue-700', dot: 'bg-blue-500' },
  'In Progress':     { bg: 'bg-blue-100 text-blue-700', dot: 'bg-blue-500' },
  'Awaiting Contractor': { bg: 'bg-purple-100 text-purple-700', dot: 'bg-purple-500' },

  Overdue:           { bg: 'bg-red-100 text-red-700', dot: 'bg-red-500' },
  Missing:           { bg: 'bg-red-100 text-red-700', dot: 'bg-red-500' },
  'Missing Docs':    { bg: 'bg-red-100 text-red-700', dot: 'bg-red-500' },
  'Reorder Needed':  { bg: 'bg-red-100 text-red-700', dot: 'bg-red-500' },
  'Replacement Needed': { bg: 'bg-red-100 text-red-700', dot: 'bg-red-500' },
  'Off Duty':        { bg: 'bg-gray-100 text-gray-600', dot: 'bg-gray-400' },

  Partial:          { bg: 'bg-orange-100 text-orange-700', dot: 'bg-orange-500' },
  'Low Stock':      { bg: 'bg-amber-100 text-amber-700', dot: 'bg-amber-500' },
  'Expiring Soon':  { bg: 'bg-amber-100 text-amber-700', dot: 'bg-amber-500' },
  Reported:         { bg: 'bg-amber-100 text-amber-700', dot: 'bg-amber-500' },
  Late:             { bg: 'bg-amber-100 text-amber-700', dot: 'bg-amber-500' },
};

const priorityVariants = {
  Urgent: 'bg-red-100 text-red-700',
  High:   'bg-orange-100 text-orange-700',
  Medium: 'bg-yellow-100 text-yellow-700',
  Low:    'bg-gray-100 text-gray-600',
};

export default function StatusBadge({ status, type = 'status' }) {
  if (type === 'priority') {
    const cls = priorityVariants[status] || 'bg-gray-100 text-gray-600';
    return <span className={`badge ${cls}`}>{status}</span>;
  }
  const v = variants[status] || { bg: 'bg-gray-100 text-gray-600', dot: 'bg-gray-400' };
  return (
    <span className={`badge ${v.bg}`}>
      <span className={`inline-block w-1.5 h-1.5 rounded-full ${v.dot}`} />
      {status}
    </span>
  );
}
