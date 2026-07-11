'use client';

import Card from '@/components/ui/Card';

export default function RevenueChart() {
  const data = [
    { month: 'Jan', value: 45 },
    { month: 'Feb', value: 62 },
    { month: 'Mar', value: 58 },
    { month: 'Apr', value: 80 },
    { month: 'Mei', value: 92 },
    { month: 'Jun', value: 87 },
    { month: 'Jul', value: 110 },
  ];

  const max = Math.max(...data.map((d) => d.value));

  return (
    <Card className="p-6">

      <div className="mb-8 flex items-center justify-between">

        <div>

          <h2 className="text-lg font-semibold text-slate-900">
            Grafik Pemasukan
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            7 bulan terakhir
          </p>

        </div>

        <span className="rounded-md bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
          +18%
        </span>

      </div>

      <div className="flex h-72 items-end gap-4">

        {data.map((item) => (

          <div
            key={item.month}
            className="flex flex-1 flex-col items-center"
          >

            <div
              className="w-full rounded-t-lg bg-emerald-500 transition-all duration-300 hover:bg-emerald-600"
              style={{
                height: `${(item.value / max) * 220}px`,
              }}
            />

            <span className="mt-3 text-xs text-slate-500">
              {item.month}
            </span>

          </div>

        ))}

      </div>

    </Card>
  );
}
