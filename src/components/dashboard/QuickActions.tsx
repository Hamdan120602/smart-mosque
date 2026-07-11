"use client";


import Link from "next/link";

import {
WalletCards,
Users,
CalendarPlus,
FileText,
ArrowRight
} from "lucide-react";



const actions=[

{
title:"Tambah Transaksi",
desc:"Kelola pemasukan dan pengeluaran",
href:"/dashboard/kas",
icon:WalletCards
},


{
title:"Tambah Jamaah",
desc:"Data anggota masjid",
href:"/dashboard/jamaah",
icon:Users
},


{
title:"Buat Agenda",
desc:"Jadwal kegiatan masjid",
href:"/dashboard/agenda",
icon:CalendarPlus
},


{
title:"Laporan",
desc:"Ringkasan aktivitas",
href:"/dashboard/laporan",
icon:FileText
}

];





export default function QuickActions(){


return (


<div className="premium-card p-6">


<div className="mb-6">


<h2 className="text-xl font-bold">

Aksi Cepat

</h2>


<p className="text-sm opacity-60 mt-1">

Akses fitur utama dengan cepat

</p>


</div>






<div

className="

grid

sm:grid-cols-2

gap-4

"

>


{

actions.map((item)=>{


const Icon=item.icon;



return (

<Link

key={item.href}

href={item.href}

className="

group

rounded-3xl

border

p-5

transition

hover:-translate-y-1

hover:shadow-xl

bg-white/40

"

>


<div

className="

flex

items-center

justify-between

"

>


<div

className="

h-11

w-11

rounded-2xl

flex

items-center

justify-center

text-white

shadow-lg

"

style={{

background:

"linear-gradient(135deg,var(--primary),var(--secondary))"

}}

>


<Icon size={21}/>


</div>



<ArrowRight

size={18}

className="

opacity-40

group-hover:translate-x-1

transition

"

/>



</div>




<h3

className="

mt-5

font-bold

"

>

{item.title}

</h3>



<p

className="

mt-1

text-sm

opacity-60

"

>

{item.desc}

</p>



</Link>


)


})

}


</div>



</div>


)

}
