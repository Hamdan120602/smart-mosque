"use client";


import {

Wallet,
Landmark,
Users,
CalendarDays

} from "lucide-react";


import StatsCard
from "@/components/dashboard/StatsCard";


import SectionTitle
from "@/components/ui/SectionTitle";


import CashFlowCard
from "@/components/dashboard/CashFlowCard";


import ActivityCard
from "@/components/dashboard/ActivityCard";


import {
useDashboard
} from "./hooks/useDashboard";





export default function DashboardPage(){



const data =
useDashboard();





return (

<div className="space-y-8">



<SectionTitle

title="Dashboard"

subtitle="Pusat kontrol operasional masjid."

/>






<section className="
grid
gap-6
xl:grid-cols-4
">





<StatsCard

title="Saldo Kas"

value={
`Rp ${data.saldo.toLocaleString("id-ID")}`
}

change="Realtime"

icon={Wallet}

/>





<StatsCard

title="Pemasukan"

value={
`Rp ${data.pemasukan.toLocaleString("id-ID")}`
}

change="Data Kas"

icon={Landmark}

/>






<StatsCard

title="Jamaah"

value={
String(data.jamaah)
}

change="Anggota"

icon={Users}

/>






<StatsCard

title="Agenda"

value={
String(data.agenda)
}

change="Kegiatan"

icon={CalendarDays}

/>





</section>







<section className="
grid
gap-6
xl:grid-cols-3
">



<div className="xl:col-span-2">

<CashFlowCard/>

</div>



<ActivityCard/>




</section>






</div>


);


}
