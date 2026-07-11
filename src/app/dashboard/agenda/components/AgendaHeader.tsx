"use client";


import {
 CalendarDays,
 Plus,
 Sparkles
} from "lucide-react";



interface Props{

onAdd:()=>void;

}



export default function AgendaHeader({
onAdd
}:Props){



return (

<div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 p-8 text-white shadow-xl">


<div className="absolute right-10 top-5 opacity-20">

<CalendarDays size={140}/>

</div>



<div className="relative z-10">


<div className="flex items-center gap-2 mb-4">


<div className="bg-white/20 p-2 rounded-xl">

<Sparkles size={22}/>

</div>


<span className="text-sm font-medium">
Smart Mosque Management
</span>


</div>



<h1 className="text-4xl font-bold">

Manajemen Agenda Masjid

</h1>



<p className="mt-3 max-w-xl text-white/80">

Kelola seluruh kegiatan masjid,
kajian, rapat pengurus, acara sosial,
dan agenda jamaah dalam satu sistem.

</p>




<button

onClick={onAdd}

className="
mt-6
flex
items-center
gap-2
rounded-2xl
bg-white
px-6
py-3
font-semibold
text-emerald-700
shadow-lg
transition
hover:scale-105
"

>


<Plus size={20}/>

Tambah Agenda


</button>


</div>


</div>


);


}
