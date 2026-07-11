"use client";

import Card from "@/components/ui/Card";

export default function ExpenseChart() {

  const data = [
    { month: "Jan", value: 30 },
    { month: "Feb", value: 42 },
    { month: "Mar", value: 38 },
    { month: "Apr", value: 55 },
    { month: "Mei", value: 48 },
    { month: "Jun", value: 60 },
    { month: "Jul", value: 53 },
  ];

  const max = Math.max(...data.map((d) => d.value));

  return (
    <Card className="p-6">

      <div className="mb-8 flex items-center justify-between">

        <div>

          <h2 className="text-lg font-semibold text-slate-900">
            Grafik Pengeluaran
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            7 bulan terakhir
          </p>

        </div>

        <span className="rounded-md bg-red-100 px-3 py-1 text-xs font-semibold text-red-700">
          +6%
        </span>

      </div>

      <div className="flex h-72 items-end gap-4">

        {data.map((item) => (

          <div
            key={item.month}
            className="flex flex-1 flex-col items-center"
          >

            <div
              className="w-full rounded-t-lg bg-red-500 transition-all duration-300 hover:bg-red-600"
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
