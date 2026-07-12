"use client";

import {
  Moon,
  Sun,
  WalletCards,
  Users,
  CalendarDays,
  FileText,
  ShieldCheck,
  Clock,
  ArrowRight
} from "lucide-react";

import Image from "next/image";
import { useEffect, useState } from "react";


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



  const features=[

    {
      icon:WalletCards,
      title:"Manajemen Kas",
      desc:"Catat pemasukan dan pengeluaran masjid secara transparan."
    },

    {
      icon:Users,
      title:"Data Jamaah",
      desc:"Kelola database jamaah secara cepat dan terstruktur."
    },

    {
      icon:CalendarDays,
      title:"Agenda Masjid",
      desc:"Atur kegiatan, kajian dan acara masjid."
    },

    {
      icon:FileText,
      title:"Laporan Digital",
      desc:"Buat laporan keuangan dengan mudah."
    }

  ];


return(

<main
className={
dark
?
"min-h-screen bg-[#07130f] text-white"
:
"min-h-screen bg-gradient-to-br from-emerald-50 via-white to-cyan-50 text-slate-900"
}
>


<header className="
max-w-7xl mx-auto
flex justify-between items-center
px-8 py-6
">


<div className="flex items-center gap-4">

<Image
src="/icon-192.png"
width={55}
height={55}
alt="Smart Mosque"
className="rounded-2xl shadow-xl"
/>


<div>

<h1 className="text-2xl font-black">
Smart Mosque
</h1>

<p className="text-sm opacity-60">
Digital Mosque Management
</p>

</div>


</div>



<button

onClick={()=>setDark(!dark)}

className="
p-3
rounded-2xl
backdrop-blur
bg-white/30
shadow-lg
"

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





<section
className="
max-w-7xl
mx-auto
px-8
py-20
grid
lg:grid-cols-2
gap-16
items-center
"
>


<div>


<div
className="
inline-flex
items-center
gap-2
px-5
py-2
rounded-full
bg-emerald-500/10
text-emerald-600
font-semibold
"
>

<ShieldCheck size={18}/>

Sistem Masjid Modern

</div>




<h2
className="
mt-8
text-6xl
font-black
leading-tight
"
>

Kelola Masjid

<span
className="
block
text-emerald-500
"
>
Dengan Teknologi Digital
</span>


</h2>




<p
className="
mt-6
text-lg
opacity-70
max-w-xl
leading-relaxed
"
>

Platform manajemen masjid untuk mengelola
keuangan, jamaah, agenda dan laporan
dalam satu sistem yang cepat, aman dan profesional.

</p>




<div className="mt-10 flex gap-5 flex-wrap">


<a

href="/auth/login"

className="
flex
items-center
gap-3
rounded-2xl
bg-emerald-500
px-8
py-4
text-white
font-bold
shadow-xl
hover:scale-105
transition
"

>

Masuk Dashboard

<ArrowRight size={18}/>

</a>




<div

className="
flex
items-center
gap-3
rounded-2xl
px-6
py-4
bg-white/50
backdrop-blur
shadow
"

>

<Clock/>

{time}

</div>


</div>


</div>






<div

className="
relative
"

>


<div

className="
rounded-[40px]
p-10
bg-white/40
backdrop-blur-xl
border
shadow-2xl
"

>


<div
className="
flex
justify-center
mb-8
"
>

<Image

src="/icon-512.png"

width={180}

height={180}

alt="Masjid"

className="
rounded-[40px]
shadow-2xl
"

/>

</div>



<h3
className="
text-3xl
font-black
text-center
"
>

Smart Mosque

</h3>



<p
className="
text-center
opacity-60
mt-3
"
>

Solusi digital untuk pengurus masjid masa kini

</p>


</div>



</div>


</section>






<section

className="
max-w-7xl
mx-auto
px-8
pb-20
grid
md:grid-cols-2
xl:grid-cols-4
gap-6
"

>


{
features.map((item,index)=>{

const Icon=item.icon;


return(

<div

key={index}

className="
rounded-3xl
p-7
bg-white/60
backdrop-blur
border
shadow-lg
hover:-translate-y-2
transition
"

>


<div
className="
h-14
w-14
rounded-2xl
bg-emerald-500
text-white
flex
items-center
justify-center
mb-5
"
>

<Icon/>

</div>



<h3
className="
font-black
text-xl
"
>

{item.title}

</h3>



<p
className="
mt-3
opacity-60
text-sm
leading-relaxed
"
>

{item.desc}

</p>


</div>

)

})
}


</section>





<footer

className="
text-center
py-10
border-t
opacity-70
"

>


<h3 className="font-bold">

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
