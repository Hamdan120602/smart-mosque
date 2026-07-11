import {
  Wallet,
  Landmark,
  Users,
  CalendarDays,
} from 'lucide-react';

import StatsCard from '@/components/dashboard/StatsCard';
import SectionTitle from '@/components/ui/SectionTitle';
import CashFlowCard from '@/components/dashboard/CashFlowCard';
import ActivityCard from '@/components/dashboard/ActivityCard';

export default function DashboardPage() {
  return (
    <div className="space-y-8">

      <SectionTitle
        title="Dashboard"
        subtitle="Ringkasan operasional masjid hari ini."
      />

      <section className="grid gap-6 xl:grid-cols-4">

        <StatsCard
          title="Saldo Kas"
          value="Rp18.750.000"
          change="+12%"
          icon={Wallet}
        />

        <StatsCard
          title="Pemasukan"
          value="Rp5.320.000"
          change="+8%"
          icon={Landmark}
        />

        <StatsCard
          title="Jamaah"
          value="1.284"
          change="+5%"
          icon={Users}
        />

        <StatsCard
          title="Agenda"
          value="18"
          positive={false}
          change="-2%"
          icon={CalendarDays}
        />

      </section>

      <section className="grid gap-6 xl:grid-cols-3">

        <div className="xl:col-span-2">
          <CashFlowCard />
        </div>

        <ActivityCard />

      </section>

    </div>
  );
}
