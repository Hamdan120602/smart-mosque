"use client";

import {
  Clock,
  Moon,
  Sun,
  Wallet,
  Users,
  CalendarDays,
  Sparkles
} from "lucide-react";

import { QRCodeSVG } from "qrcode.react";
import { useEffect, useState } from "react";


const QRIS_DATA =
"00020101021126630013ID.CO.BRI.WWW01189360000201100062010215201000620102150303UME51440014ID.CO.QRIS.WWW0215ID10243176718900303UME5204731153033605802ID5915RM PADANG MURAH6013KOTA JAKARTA P61051034062070703A01";


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
"min-h-screen bg-gradient-to-br from-emerald-100 via-white to-cyan-100 text-slate-900"
}
>


<header className="flex justify-between items-center px-8 py-6">

<div>

<h1 className="text-3xl font-black">
🕌 Smart Mosque
</h1>

<p className="opacity-60">
Management System
</p>

</div>


<button
onClick={()=>setDark(!dark)}
className="p-3 rounded-2xl bg-white/30 shadow"
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




<section className="max-w-7xl mx-auto px-8 py-16 grid lg:grid-cols-2 gap-12">


<div>


<div className="inline-flex gap-2 bg-emerald-500/10 text-emerald-600 px-5 py-2 rounded-full">

<Sparkles size={18}/>

Sistem Masjid Digital

</div>



<h2 className="mt-8 text-6xl font-black leading-tight">

Kelola Masjid

<span className="block text-emerald-500">
Lebih Modern
</span>

</h2>



<p className="mt-6 text-xl opacity-70">

Kelola kas, jamaah, agenda dan laporan
masjid dalam satu sistem profesional.

</p>



<div className="mt-10 flex gap-5 items-center">


<a
href="/auth/login"
className="px-8 py-4 rounded-2xl bg-emerald-500 text-white font-bold shadow-xl"
>
Masuk Dashboard
</a>



<div className="px-5 py-4 rounded-2xl bg-white/50 shadow flex gap-2">

<Clock/>

{time}

</div>


</div>


</div>





<div className="space-y-6">


<div className="rounded-[32px] p-8 bg-white/70 shadow-xl border backdrop-blur">


<h3 className="text-2xl font-black mb-5">
QRIS Donasi Masjid
</h3>


<div className="bg-white p-5 rounded-3xl w-fit mx-auto">

<QRCodeSVG
value={QRIS_DATA}
size={220}
/>

</div>


<p className="text-center mt-5 opacity-60">
Scan QR untuk donasi digital
</p>


</div>




<div className="grid grid-cols-3 gap-4">


<div className="rounded-3xl p-5 bg-white/70 shadow">

<Wallet/>

<p className="font-bold mt-3">
Kas
</p>

</div>



<div className="rounded-3xl p-5 bg-white/70 shadow">

<Users/>

<p className="font-bold mt-3">
Jamaah
</p>

</div>




<div className="rounded-3xl p-5 bg-white/70 shadow">

<CalendarDays/>

<p className="font-bold mt-3">
Agenda
</p>

</div>


</div>


</div>



</section>





<footer className="text-center py-10 opacity-70">

<p>
Smart Mosque Management System
</p>

<p className="font-bold mt-2">
Created by Hamdan Mahmud
</p>

<p className="text-sm">
© 2026 All Rights Reserved
</p>


</footer>



</main>

)

}
