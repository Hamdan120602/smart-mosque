"use client";

import { FileText, Download, Printer } from "lucide-react";

export default function ReportHeader() {
  return (
    <div
      className="rounded-3xl p-8 text-white shadow-xl"
      style={{
        background:
          "linear-gradient(135deg,var(--primary),var(--secondary))",
      }}
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-white/20 p-3">
              <FileText size={26} />
            </div>

            <div>
              <h1 className="text-4xl font-black">
                Laporan Keuangan
              </h1>

              <p className="mt-2 opacity-90">
                Ringkasan keuangan Smart Mosque
              </p>
            </div>
          </div>
        </div>

        <div className="flex gap-3">

          <button className="rounded-2xl bg-white/20 px-5 py-3 transition hover:bg-white/30">
            <Download className="inline mr-2" size={18} />
            PDF
          </button>

          <button className="rounded-2xl bg-white/20 px-5 py-3 transition hover:bg-white/30">
            <Printer className="inline mr-2" size={18} />
            Print
          </button>

        </div>
      </div>
    </div>
  );
}
