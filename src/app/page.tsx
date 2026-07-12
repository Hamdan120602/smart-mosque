"use client";

import {
  Clock,
  Moon,
  Sun,
  Wallet,
  Users,
  CalendarDays,
  Sparkles,
  ShieldCheck,
  BarChart3
} from "lucide-react";

import Image from "next/image";
import {useEffect,useState} from "react";


export default function HomePage(){

const [dark,setDark]=useState(false);
const [time,setTime]=useState("");

useEffect(()=>{

const timer=setInterval(()=>{

setTime(
new Date().toLocaleTimeString("id-ID")
);

},1000);

return()=>clearInterval(timer);

},[]);



return (

<main
className={
dark
?
"min-h-screen bg-slate-950 text-white"
:
"min-h-screen bg-gradient-to-br from-emerald-50 via-white to-cyan-100 text-slate-900"
}
>


<header className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">

<div className="flex items-center gap-4">

<Image
src="/icon-192.png"
width={55}
height={55}
alt="masjid"
className="rounded-2xl shadow-lg"
/>

<div>

<h1 className="text-3xl font-black">
Smart Mosque
</h1>

<p className="opacity-60">
Digital Mosque Management System
</p>

</div>

</div>



<button
onClick={()=>setDark(!dark)}
className="p-4 rounded-2xl bg-white/30 backdrop-blur shadow-xl"
>

{
dark
?
<Sun/>
:
<Moon/>
}

</button>


</header>




<section className="max-w-7xl mx-auto px-8 py-16 grid lg:grid-cols-2 gap-16 items-center">


<div>


<div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-600 px-5 py-3 rounded-full">

<Sparkles size={18}/>

Sistem Masjid Masa Depan

</div>



<h2 className="mt-8 text-6xl font-black leading-tight">

Kelola Masjid

<span className="block text-emerald-500">
Lebih Cerdas
</span>

Lebih Modern

</h2>



<p className="mt-6 text-xl opacity-70 leading-relaxed">

Platform digital untuk mengelola
keuangan, jamaah, agenda dan laporan
masjid dalam satu sistem profesional.

</p>




<div className="flex gap-5 mt-10">


<a
href="/auth/login"
className="
px-8 py-4
rounded-2xl
bg-emerald-600
text-white
font-bold
shadow-2xl
hover:scale-105
transition
"
>

Masuk Dashboard

</a>



<div
className="
flex items-center gap-3
px-6 py-4
rounded-2xl
bg-white/50
backdrop-blur
shadow
"
>

<Clock/>

{time}

</div>


</div>




<div className="grid grid-cols-3 gap-4 mt-12">


<div className="rounded-3xl p-5 bg-white/60 shadow-xl">

<Wallet/>

<p className="mt-3 font-bold">
Kas Digital
</p>

</div>



<div className="rounded-3xl p-5 bg-white/60 shadow-xl">

<Users/>

<p className="mt-3 font-bold">
Data Jamaah
</p>

</div>



<div className="rounded-3xl p-5 bg-white/60 shadow-xl">

<CalendarDays/>

<p className="mt-3 font-bold">
Agenda
</p>

</div>


</div>


</div>






<div className="space-y-6">



<div className="
rounded-[40px]
p-8
bg-white/70
backdrop-blur-xl
shadow-2xl
border
">


<h3 className="text-2xl font-black mb-5">

QRIS Donasi Masjid

</h3>


<div className="flex justify-center">

<Image

src="/qris.png"

width={300}

height={300}

alt="QRIS"

className="
rounded-3xl
shadow-xl
"

 />

</div>


<p className="text-center mt-5 opacity-60">

Scan untuk melakukan donasi digital

</p>


</div>





<div className="
grid grid-cols-2 gap-5
">


<div className="
rounded-3xl
p-6
bg-gradient-to-br from-emerald-500 to-green-400
text-white
shadow-xl
">

<ShieldCheck/>

<h3 className="font-bold mt-3">
Aman
</h3>

<p className="text-sm">
Data tersimpan aman
</p>

</div>



<div className="
rounded-3xl
p-6
bg-gradient-to-br from-cyan-500 to-blue-500
text-white
shadow-xl
">

<BarChart3/>

<h3 className="font-bold mt-3">
Laporan
</h3>

<p className="text-sm">
Monitoring cepat
</p>

</div>


</div>



</div>



</section>





<footer className="text-center py-12 opacity-70">


<h3 className="font-bold text-lg">
Smart Mosque Management System
</h3>


<p className="mt-2">
Created by Hamdan Mahmud
</p>


<p className="text-sm mt-2">
© 2026 All Rights Reserved
</p>


</footer>



</main>

)

}
