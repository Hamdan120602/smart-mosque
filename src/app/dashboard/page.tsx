"use client";

import {
  WalletCards,
  Users,
  CalendarDays,
  TrendingUp,
} from "lucide-react";

import DashboardHeader from "@/components/dashboard/DashboardHeader";
import WelcomeBanner from "@/components/dashboard/WelcomeBanner";
import RevenueChart from "@/components/dashboard/RevenueChart";
import ExpenseChart from "@/components/dashboard/ExpenseChart";
import StatsCard from "@/components/dashboard/StatsCard";
import RecentTransactions from "@/components/dashboard/RecentTransactions";
import AgendaCard from "@/components/dashboard/AgendaCard";
import ActivityTimeline from "@/components/dashboard/ActivityTimeline";
import { useDashboard } from "./hooks/useDashboard";

export default function DashboardPage() {
  const data = useDashboard();

  return (
    <div className="space-y-8 p-6 lg:p-10">
      <DashboardHeader />

      <WelcomeBanner />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatsCard
          title="Total Saldo"
          value={`Rp ${data.saldo.toLocaleString("id-ID")}`}
          icon={WalletCards}
          description="Saldo Saat Ini"
        />

        <StatsCard
          title="Jumlah Jamaah"
          value={data.jamaah}
          icon={Users}
          description="Data Jamaah"
        />

        <StatsCard
          title="Agenda Aktif"
          value={data.agenda}
          icon={CalendarDays}
          description="Agenda Terdaftar"
        />

        <StatsCard
          title="Total Pemasukan"
          value={`Rp ${data.pemasukan.toLocaleString("id-ID")}`}
          icon={TrendingUp}
          description="Akumulasi Pemasukan"
        />
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <RevenueChart />
        <ExpenseChart />
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <RecentTransactions
          transactions={data.transactions}
        />

        <AgendaCard
          agenda={data.agendaList}
        />
      </div>

      <ActivityTimeline
        items={[
          {
            id: 1,
            title: "Dashboard Aktif",
            description: "Data berhasil dimuat dari Supabase",
            time: "Realtime",
          },
          {
            id: 2,
            title: "Sinkronisasi",
            description: "Refresh otomatis setiap 10 detik",
            time: "Otomatis",
          },
        ]}
      />
    </div>
  );
}
