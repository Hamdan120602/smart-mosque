import Card from '@/components/ui/Card';

export default function CashFlowCard() {
  return (
    <Card className="p-6 h-[360px]">

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-lg font-semibold text-slate-900">
            Arus Kas
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Grafik pemasukan dan pengeluaran
          </p>

        </div>

        <span className="rounded-md bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
          LIVE
        </span>

      </div>

      <div className="mt-8 flex h-[240px] items-center justify-center rounded-lg border border-dashed border-slate-300 bg-slate-50">

        <span className="text-sm text-slate-400">
          Chart akan dihubungkan ke Recharts
        </span>

      </div>

    </Card>
  );
}
