"use client";


import DashboardHeader 
from "@/components/dashboard/DashboardHeader";


import WelcomeBanner
from "@/components/dashboard/WelcomeBanner";


import RevenueChart
from "@/components/dashboard/RevenueChart";


import ExpenseChart
from "@/components/dashboard/ExpenseChart";


import StatsCard
from "@/components/dashboard/StatsCard";


import RecentTransactions
from "@/components/dashboard/RecentTransactions";


import AgendaCard
from "@/components/dashboard/AgendaCard";


import ActivityTimeline
from "@/components/dashboard/ActivityTimeline";



import {

WalletCards,
Users,
CalendarDays,
TrendingUp

} from "lucide-react";





export default function DashboardPage(){



return (


<div

className="

space-y-8

p-6

lg:p-10

"

>



<DashboardHeader/>




<WelcomeBanner/>






<div

className="

grid

gap-6

md:grid-cols-2

xl:grid-cols-4

"

>


<StatsCard

title="Total Saldo"

value="Rp 25.400.000"

icon={WalletCards}

/>



<StatsCard

title="Jumlah Jamaah"

value="1.240"

icon={Users}

/>




<StatsCard

title="Agenda Aktif"

value="12"

icon={CalendarDays}

/>




<StatsCard

title="Pertumbuhan"

value="+18%"

icon={TrendingUp}

/>



</div>







<div

className="

grid

gap-6

xl:grid-cols-2

"

>


<RevenueChart/>


<ExpenseChart/>


</div>








<div

className="

grid

gap-6

xl:grid-cols-2

"

>


<RecentTransactions/>


<AgendaCard/>


</div>







<ActivityTimeline

items={[


{

id:1,

title:"Transaksi baru",

description:"Donasi jamaah berhasil dicatat",

time:"Hari ini"

},


{

id:2,

title:"Agenda dibuat",

description:"Kajian malam Jumat ditambahkan",

time:"Kemarin"

}



]}

/>






</div>


)


}
