import { useState } from 'react';
import { Check, Lock, Star, ArrowRight, Info } from 'lucide-react';
import { tiers, comparisonFeatures } from '../data/tierData';

function FeatureItem({ text, locked = false, star = false }) {
  return (
    <li className="flex items-start gap-2.5 py-1.5">
      {locked ? (
        <Lock className="w-4 h-4 text-surface-muted mt-0.5 flex-shrink-0" />
      ) : (
        <Check className="w-4 h-4 text-accent-600 mt-0.5 flex-shrink-0" />
      )}
      <span className={`text-sm leading-snug ${locked ? 'text-surface-muted line-through' : 'text-navy'}`}>{text}</span>
      {star && !locked && <Star className="w-3.5 h-3.5 text-amber-400 flex-shrink-0 mt-0.5" />}
    </li>
  );
}

function CellIcon({ val }) {
  if (val === 'check') return <Check className="w-4 h-4 text-accent-600 mx-auto" />;
  if (val === 'lock')  return <Lock  className="w-4 h-4 text-surface-muted mx-auto" />;
  return null;
}

export default function PackagePreview() {
  const [active, setActive] = useState(0);
  const tier = tiers[active];

  const tierColors = [
    { tab: 'bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-200', active: 'bg-brand-600 text-white border-brand-600 shadow-sm' },
    { tab: 'bg-slate-100 text-slate-600 border-slate-200 hover:bg-amber-50', active: 'bg-amber-500 text-white border-amber-500 shadow-sm' },
    { tab: 'bg-slate-100 text-slate-600 border-slate-200 hover:bg-purple-50', active: 'bg-purple-600 text-white border-purple-600 shadow-sm' },
  ];

  const cardColors = ['border-brand-200', 'border-amber-300', 'border-purple-200'];
  const badgeColors = ['bg-brand-600', 'bg-amber-500', 'bg-purple-600'];

  return (
    <div className="space-y-6 max-w-5xl">
      {/* Header note */}
      <div className="flex items-start gap-3 p-4 bg-brand-50 border border-brand-100 rounded-xl">
        <Info className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
        <p className="text-sm text-brand-700">
          <strong>Package Preview</strong> is included for demonstration purposes only. It shows how the ClearView Square Management System can scale across different implementation tiers.
        </p>
      </div>

      <div>
        <h1 className="page-title">Package Preview</h1>
        <p className="text-surface-muted text-sm mt-1">Select a tier to see what's included.</p>
      </div>

      {/* Tier Tabs */}
      <div className="flex flex-col sm:flex-row gap-3">
        {tiers.map((t, i) => (
          <button
            key={t.id}
            onClick={() => setActive(i)}
            className={`relative flex-1 px-4 py-3 rounded-xl border text-sm font-semibold transition-all duration-200 text-left ${
              active === i ? tierColors[i].active : tierColors[i].tab
            }`}
          >
            {t.badge && (
              <span className="absolute -top-2.5 left-3 bg-amber-400 text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
                ★ {t.badge}
              </span>
            )}
            <p className="text-xs opacity-75 mb-0.5">{t.price}</p>
            <p>{t.name}</p>
          </button>
        ))}
      </div>

      {/* Tier Detail Card */}
      <div className={`card border-2 ${cardColors[active]} transition-all duration-300`}>
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h2 className="text-xl font-bold text-navy">{tier.name}</h2>
              {tier.badge && (
                <span className={`badge ${badgeColors[active]} text-white px-3 py-1 text-xs`}>
                  ★ {tier.badge}
                </span>
              )}
            </div>
            <p className="text-3xl font-extrabold text-navy mt-1">{tier.price}</p>
            <p className="text-sm text-surface-muted mt-1">Best for: {tier.bestFor}</p>
          </div>
          <div className="flex flex-col gap-2">
            <button className="btn-primary">
              Get Started <ArrowRight className="w-4 h-4" />
            </button>
            <button className="btn-secondary justify-center">Request Quote</button>
          </div>
        </div>

        {/* Tagline */}
        <div className="p-4 bg-surface rounded-xl mb-6 border border-surface-border">
          <p className="text-sm text-navy italic">"{tier.tagline}"</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Included */}
          <div>
            <h3 className="text-sm font-bold text-navy mb-2 flex items-center gap-2">
              <Check className="w-4 h-4 text-accent-600" /> What's Included
            </h3>
            <ul className="divide-y divide-surface-border">
              {tier.included.map((item) => (
                <FeatureItem key={item} text={item} />
              ))}
            </ul>
          </div>

          {/* Locked */}
          <div>
            {tier.locked.length > 0 && (
              <>
                <h3 className="text-sm font-bold text-surface-muted mb-2 flex items-center gap-2">
                  <Lock className="w-4 h-4" /> Future / Locked Features
                </h3>
                <ul className="divide-y divide-surface-border">
                  {tier.locked.map((item) => (
                    <FeatureItem key={item} text={item} locked />
                  ))}
                </ul>
              </>
            )}

            {/* Business Value */}
            <div className="mt-4 p-4 bg-surface rounded-xl border border-surface-border">
              <h3 className="text-sm font-bold text-navy mb-2">Key Business Value</h3>
              <ul className="space-y-1.5">
                {tier.value.map((v) => (
                  <li key={v} className="flex items-start gap-2 text-xs text-navy">
                    <Star className="w-3.5 h-3.5 text-amber-400 flex-shrink-0 mt-0.5" />
                    {v}
                  </li>
                ))}
              </ul>
            </div>

            {/* Next step */}
            <div className="mt-3 p-3 bg-brand-50 border border-brand-100 rounded-xl">
              <p className="text-xs font-semibold text-brand-700 mb-1">Recommended Next Step</p>
              <p className="text-xs text-brand-600">{tier.nextStep}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="card p-0 overflow-hidden">
        <div className="px-6 py-4 border-b border-surface-border">
          <h3 className="text-base font-semibold text-navy">Feature Comparison Table</h3>
          <p className="text-xs text-surface-muted mt-0.5">Compare all three tiers side by side.</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-surface">
              <tr>
                <th className="table-th">Feature</th>
                <th className="table-th text-center text-brand-600">Tier 1 · R22,000</th>
                <th className="table-th text-center text-amber-600">Tier 2 · R38,000 ★</th>
                <th className="table-th text-center text-purple-600">Tier 3 · R65,000+</th>
              </tr>
            </thead>
            <tbody>
              {comparisonFeatures.map((row, i) => (
                <tr key={i} className="table-row">
                  <td className="table-td font-medium">{row.feature}</td>
                  <td className="table-td text-center"><CellIcon val={row.t1} /></td>
                  <td className="table-td text-center bg-amber-50/40"><CellIcon val={row.t2} /></td>
                  <td className="table-td text-center"><CellIcon val={row.t3} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
