import { BarChart3, LineChart, PieChart, TrendingUp, Truck } from 'lucide-react';
import { cn } from '../../utils/helpers';

const covers = {
  dashboard: {
    gradient: 'from-amber-400/30 via-brand-500/40 to-violet-600/35',
    mesh: 'radial-gradient(circle at 20% 80%, rgba(251,191,36,0.25), transparent 50%)',
    Icon: BarChart3,
    label: 'Dashboard',
  },
  eda: {
    gradient: 'from-cyan-400/25 via-brand-500/35 to-violet-500/40',
    mesh: 'radial-gradient(circle at 80% 20%, rgba(34,211,238,0.2), transparent 45%)',
    Icon: LineChart,
    label: 'EDA',
  },
  predictive: {
    gradient: 'from-violet-500/35 via-brand-500/30 to-indigo-600/35',
    mesh: 'radial-gradient(circle at 50% 50%, rgba(139,92,246,0.3), transparent 55%)',
    Icon: TrendingUp,
    label: 'Predictive',
  },
  logistics: {
    gradient: 'from-emerald-400/20 via-brand-500/35 to-blue-600/30',
    mesh: 'radial-gradient(circle at 30% 30%, rgba(52,211,153,0.2), transparent 50%)',
    Icon: Truck,
    label: 'Analytics',
  },
};

export default function ProjectCover({ cover = 'eda', title, className }) {
  const theme = covers[cover] || covers.eda;
  const { Icon, gradient, mesh, label } = theme;

  return (
    <div
      className={cn(
        'relative h-40 w-full overflow-hidden rounded-t-2xl border-b border-slate-200/50 dark:border-slate-700/50',
        className
      )}
    >
      <div className={cn('absolute inset-0 bg-gradient-to-br', gradient)} />
      <div className="absolute inset-0 opacity-80" style={{ background: mesh }} />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_40%,rgba(255,255,255,0.08)_50%,transparent_60%)]" />

      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.9) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.9) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative h-full flex items-center justify-between px-5 py-4">
        <div className="flex flex-col justify-between h-full py-1">
          <span className="text-[10px] font-semibold uppercase tracking-widest text-white/70">
            {label}
          </span>
          <div className="flex items-end gap-1 h-10 opacity-50">
            {[40, 65, 45, 80, 55, 70].map((h, i) => (
              <div
                key={i}
                className="w-1 rounded-full bg-white/90"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col items-end gap-2">
          <div className="p-3 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/20 shadow-lg">
            <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
          </div>
          <PieChart className="w-5 h-5 text-white/30" strokeWidth={1.5} />
        </div>
      </div>

      {title && (
        <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-gradient-to-t from-slate-900/60 to-transparent">
          <p className="text-xs text-white/90 font-medium truncate">{title}</p>
        </div>
      )}
    </div>
  );
}
