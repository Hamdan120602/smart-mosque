'use client';

import { Bell, Search } from 'lucide-react';

export default function DashboardHeader() {
  return (
    <div className="flex items-center justify-between">

      <div>

        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Dashboard
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Ringkasan aktivitas dan statistik Masjid hari ini.
        </p>

      </div>

      <div className="flex items-center gap-3">

        <div className="relative">

          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            placeholder="Cari..."
            className="
              h-10
              w-72
              rounded-lg
              border
              border-slate-200
              bg-white
              pl-10
              pr-4
              text-sm
              outline-none
              transition
              focus:border-emerald-500
            "
          />

        </div>

        <button
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-lg
            border
            border-slate-200
            bg-white
            hover:bg-slate-50
          "
        >
          <Bell size={18} />
        </button>

      </div>

    </div>
  );
}
