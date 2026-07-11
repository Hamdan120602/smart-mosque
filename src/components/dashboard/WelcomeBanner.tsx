'use client';

import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function WelcomeBanner() {
  return (
    <Card className="overflow-hidden border-0 bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500">

      <div className="relative px-8 py-8">

        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -left-16 bottom-0 h-40 w-40 rounded-full bg-white/5 blur-2xl" />

        <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

          <div>

            <div className="inline-flex items-center gap-2 rounded-md bg-white/15 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur">
              <Sparkles size={14} />
              Smart Mosque Management
            </div>

            <h1 className="mt-5 text-4xl font-bold tracking-tight text-white">
              Assalamu'alaikum 👋
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-emerald-50">
              Selamat datang kembali di Dashboard Takmir.
              Pantau kondisi keuangan, kegiatan, inventaris,
              dan seluruh aktivitas masjid dalam satu tempat.
            </p>

          </div>

          <Button className="bg-white text-emerald-700 hover:bg-slate-100">
            Lihat Laporan
            <ArrowRight size={18} className="ml-2" />
          </Button>

        </div>

      </div>

    </Card>
  );
}
