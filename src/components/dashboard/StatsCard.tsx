import { LucideIcon, TrendingDown, TrendingUp } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  positive?: boolean;
  icon: LucideIcon;
}

export default function StatsCard({
  title,
  value,
  change,
  positive = true,
  icon: Icon,
}: StatsCardProps) {
  return (
    <div
      className="
      group
      rounded-xl
      border
      border-slate-200
      bg-white
      p-6
      shadow-sm
      transition-all
      duration-300
      hover:-translate-y-1
      hover:shadow-lg
    "
    >
      <div className="flex items-start justify-between">

        <div>

          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
            {title}
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
            {value}
          </h2>

        </div>

        <div
          className="
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-lg
          bg-emerald-50
          text-emerald-600
        "
        >
          <Icon size={24} />
        </div>

      </div>

      <div className="mt-6 flex items-center gap-2">

        {positive ? (
          <TrendingUp size={16} className="text-emerald-600" />
        ) : (
          <TrendingDown size={16} className="text-red-600" />
        )}

        <span
          className={
            positive
              ? 'text-sm font-medium text-emerald-600'
              : 'text-sm font-medium text-red-600'
          }
        >
          {change}
        </span>

        <span className="text-sm text-slate-400">
          dibanding bulan lalu
        </span>

      </div>

    </div>
  );
}
