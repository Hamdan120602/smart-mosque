"use client";

import {
Clock,
Moon,
Sun,
Wallet,
Users,
CalendarDays,
Sparkles,
ShieldCheck
} from "lucide-react";

import {
useEffect,
useState
} from "react";


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


<header

className="
max-w-7xl
mx-auto
flex
items-center
justify-between
px-8
py-8
"

>


<div className="flex items-center gap-4">


<img

src="/icon-512.png"

className="
h-14
w-14
rounded-3xl
shadow-xl
object-cover
"

/>


<div>

<h1 className="
font-black
text-2xl
">

Smart Mosque

</h1>


<p className="
text-sm
opacity-60
">

Digital Mosque Management

</p>


</div>


</div>



<button

onClick={()=>setDark(!dark)}

className="
rounded-3xl
p-4
bg-white/40
backdrop-blur
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
py-10
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
rounded-full
bg-emerald-500/10
px-5
py-3
text-emerald-600
font-bold
"

>

<Sparkles size={18}/>

Sistem Masjid Digital

</div>




<h2

className="
mt-8
text-5xl
lg:text-7xl
font-black
leading-tight
"

>

Kelola Masjid

<span className="
block
text-emerald-500
">

Lebih Modern

</span>


</h2>



<p

className="
mt-6
text-lg
opacity-70
max-w-xl
"

>

Platform manajemen masjid untuk mengelola
keuangan, jamaah, agenda, dan laporan
secara cepat, aman, dan profesional.

</p>




<div

className="
mt-10
flex
gap-4
flex-wrap
"

>


<a

href="/auth/login"

className="
rounded-3xl
bg-emerald-600
px-8
py-4
text-white
font-black
shadow-xl
hover:scale-105
transition
"

>

Masuk Dashboard

</a>




<div

className="
rounded-3xl
bg-white/60
backdrop-blur
px-6
py-4
shadow
flex
items-center
gap-3
"

>

<Clock/>

{time}

</div>


</div>



</div>






<div

className="
space-y-6
"

>


<div

className="
rounded-[40px]
bg-white/70
backdrop-blur-xl
shadow-2xl
p-8
border
"

>


<div className="
flex
items-center
gap-3
"

>

<ShieldCheck
className="text-emerald-600"
/>

<h3 className="
text-2xl
font-black
">

Aman & Profesional

</h3>

</div>


<p className="
mt-4
opacity-60
">

Sistem digital untuk membantu
pengurus masjid bekerja lebih efektif.

</p>


</div>




<div

className="
grid
grid-cols-3
gap-4
"

>


<Card

icon={<Wallet/>}

title="Kas"

/>


<Card

icon={<Users/>}

title="Jamaah"

/>



<Card

icon={<CalendarDays/>}

title="Agenda"

/>



</div>



</div>


</section>





<footer

className="
text-center
py-12
opacity-70
"

>

<p className="font-bold">

Smart Mosque Management System

</p>


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




function Card({

icon,

title

}:{

icon:React.ReactNode;

title:string;

}){


return (

<div

className="
rounded-3xl
bg-white/70
backdrop-blur
shadow-xl
p-5
text-center
"

>

<div className="
flex
justify-center
text-emerald-600
">

{icon}

</div>


<p className="
mt-3
font-black
">

{title}

</p>


</div>

)

}
