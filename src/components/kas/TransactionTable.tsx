"use client";

import { ArrowDownLeft, ArrowUpRight, Trash2 } from "lucide-react";

export interface Transaction {
  id: number;
  title: string;
  category: string;
  type: "income" | "expense";
  amount: number;
  description?: string;
  created_at?: string;
}

interface Props {
  transactions: Transaction[];
  onDelete?: (id: number) => void;
}

export default function TransactionTable({
  transactions,
  onDelete,
}: Props) {
  return (
    <div className="premium-card overflow-hidden rounded-3xl">
      <div className="flex items-center justify-between border-b p-6">
        <div>
          <h2 className="text-2xl font-black">Daftar Transaksi</h2>
          <p className="mt-1 text-sm opacity-60">
            Riwayat pemasukan dan pengeluaran kas
          </p>
        </div>

        <span
          className="rounded-xl px-4 py-2 text-sm font-semibold text-white"
          style={{
            background:
              "linear-gradient(135deg,var(--primary),var(--secondary))",
          }}
        >
          {transactions.length} Transaksi
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-slate-50 text-left">
            <tr>
              <th className="px-6 py-4">Transaksi</th>
              <th className="px-6 py-4">Kategori</th>
              <th className="px-6 py-4">Jenis</th>
              <th className="px-6 py-4 text-right">Nominal</th>
              <th className="px-6 py-4 text-center">Aksi</th>
            </tr>
          </thead>

          <tbody>
            {transactions.length === 0 ? (
              <tr>
                <td
                  colSpan={5}
                  className="py-16 text-center text-slate-500"
                >
                  Belum ada transaksi.
                </td>
              </tr>
            ) : (
              transactions.map((item) => {
                const income = item.type === "income";

                return (
                  <tr
                    key={item.id}
                    className="border-t hover:bg-slate-50 transition"
                  >
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-4">
                        <div
                          className="flex h-11 w-11 items-center justify-center rounded-2xl text-white"
                          style={{
                            background: income
                              ? "linear-gradient(135deg,#16a34a,#22c55e)"
                              : "linear-gradient(135deg,#dc2626,#ef4444)",
                          }}
                        >
                          {income ? (
                            <ArrowDownLeft size={20} />
                          ) : (
                            <ArrowUpRight size={20} />
                          )}
                        </div>

                        <div>
                          <h3 className="font-semibold">{item.title}</h3>

                          {item.description && (
                            <p className="text-xs text-slate-500">
                              {item.description}
                            </p>
                          )}
                        </div>
                      </div>
                    </td>

                    <td className="px-6 py-5">
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-sm">
                        {item.category}
                      </span>
                    </td>

                    <td className="px-6 py-5">
                      <span
                        className={`rounded-full px-3 py-1 text-sm font-semibold ${
                          income
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {income ? "Pemasukan" : "Pengeluaran"}
                      </span>
                    </td>

                    <td
                      className={`px-6 py-5 text-right font-bold ${
                        income ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {income ? "+" : "-"} Rp{" "}
                      {Number(item.amount).toLocaleString("id-ID")}
                    </td>

                    <td className="px-6 py-5 text-center">
                      <button
                        onClick={() => onDelete?.(item.id)}
                        className="rounded-xl p-2 text-red-500 transition hover:bg-red-50"
                      >
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
