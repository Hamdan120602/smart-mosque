"use client";

import { Clock3, Heart, QrCode } from "lucide-react";
import { useEffect, useState } from "react";

export default function Footer(){

const [time,setTime]=useState("");

useEffect(()=>{

const update=()=>{

setTime(
new Date().toLocaleTimeString("id-ID")
);

};

update();

const timer=setInterval(update,1000);

return()=>clearInterval(timer);

},[]);


return (

<footer className="
mt-16
bg-gradient-to-r
from-emerald-600
to-teal-500
text-white
rounded-t-[40px]
px-8
py-10
">

<div className="
max-w-7xl
mx-auto
grid
md:grid-cols-3
gap-8
">


<div>

<h2 className="
text-2xl
font-black
">
🕌 Smart Mosque
</h2>

<p className="
mt-3
text-white/80
">
Sistem manajemen masjid digital modern.
</p>

</div>



<div>

<div className="
flex
items-center
gap-2
font-bold
">
<Clock3 size={20}/>
Waktu Sekarang
</div>

<p className="
text-3xl
font-black
mt-3
">
{time}
</p>

</div>



<div>

<div className="
flex
items-center
gap-2
font-bold
">
<QrCode size={20}/>
QRIS Donasi
</div>

<div className="
mt-3
h-24
w-24
bg-white
rounded-xl
flex
items-center
justify-center
text-emerald-600
font-black
">
QRIS
</div>

</div>


</div>


<div className="
border-t
border-white/20
mt-8
pt-6
text-center
text-sm
flex
justify-center
items-center
gap-2
">

Created by Hamdan Mahmud
<Heart size={15} fill="currentColor"/>

</div>


</footer>

);

}
