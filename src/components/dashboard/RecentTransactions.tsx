"use client";

import {
  ArrowDownLeft,
  ArrowUpRight,
  ReceiptText
} from "lucide-react";

interface Transaction {
  id: number;
  title: string;
  category: string;
  type: string;
  amount: number;
  description?: string;
}

interface Props {
  transactions?: Transaction[];
}

export default function RecentTransactions({
  transactions = []
}: Props) {

  return (

    <div className="premium-card p-6">

      <div className="flex items-center gap-3 mb-6">

        <div
          className="h-11 w-11 rounded-2xl flex items-center justify-center text-white"
          style={{
            background:
              "linear-gradient(135deg,var(--primary),var(--secondary))"
          }}
        >
          <ReceiptText size={22} />
        </div>

        <div>
          <h2 className="text-xl font-bold">
            Transaksi Terbaru
          </h2>

          <p className="text-sm opacity-60">
            Aktivitas keuangan terakhir
          </p>
        </div>

      </div>

      {transactions.length === 0 ? (

        <div className="py-10 text-center opacity-60">
          Belum ada transaksi
        </div>

      ) : (

        <div className="space-y-3">

          {transactions.map((item) => {

            const income = item.type === "income";

            return (

              <div
                key={item.id}
                className="flex items-center justify-between rounded-2xl border p-4 hover:shadow-lg transition"
              >

                <div className="flex items-center gap-4">

                  <div
                    className="h-10 w-10 rounded-xl flex items-center justify-center text-white"
                    style={{
                      background: income
                        ? "linear-gradient(135deg,#16a34a,#22c55e)"
                        : "linear-gradient(135deg,#dc2626,#f97316)"
                    }}
                  >
                    {income ? (
                      <ArrowDownLeft size={18} />
                    ) : (
                      <ArrowUpRight size={18} />
                    )}
                  </div>

                  <div>
                    <h3 className="font-semibold">
                      {item.title}
                    </h3>

                    <p className="text-xs opacity-60">
                      {item.category}
                    </p>
                  </div>

                </div>

                <div className="text-right">

                  <p
                    className={
                      income
                        ? "font-bold text-green-600"
                        : "font-bold text-red-600"
                    }
                  >
                    {income ? "+" : "-"} Rp{" "}
                    {item.amount.toLocaleString("id-ID")}
                  </p>

                  <p className="text-xs opacity-50">
                    {income ? "Pemasukan" : "Pengeluaran"}
                  </p>

                </div>

              </div>

            );

          })}

        </div>

      )}

    </div>

  );

}
