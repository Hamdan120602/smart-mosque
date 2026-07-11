"use client";


import {
Bell,
Search,
CalendarDays,
Sparkles
} from "lucide-react";


import { useEffect, useState } from "react";



export default function DashboardHeader(){


const [date,setDate]=useState("");



useEffect(()=>{


setDate(

new Intl.DateTimeFormat(
"id-ID",
{
weekday:"long",
day:"numeric",
month:"long",
year:"numeric"
}
).format(new Date())

);


},[]);





return (

<div className="space-y-6">





{/* HERO HEADER */}


<div

className="
theme-header
relative
overflow-hidden
p-8
flex
flex-col
lg:flex-row
lg:items-center
lg:justify-between
gap-6
"


>


{/* decoration */}


<div

className="
absolute
-right-10
-top-10
text-[160px]
opacity-10
"

>

🕌

</div>




<div className="relative z-10">


<div

className="
flex
items-center
gap-2
mb-3
opacity-90
"

>

<Sparkles size={18}/>

<span className="text-sm font-semibold">

Smart Mosque Management

</span>


</div>





<h1

className="
text-4xl
font-black
tracking-tight
"

>

Dashboard

</h1>




<p

className="
mt-3
max-w-xl
opacity-90
"

>

Pantau aktivitas masjid,
keuangan, jamaah dan agenda
dalam satu pusat kendali modern.

</p>



<div

className="
flex
items-center
gap-2
mt-5
text-sm
opacity-90
"

>


<CalendarDays size={18}/>

{date}


</div>



</div>







{/* ACTION AREA */}



<div

className="
relative
z-10
flex
items-center
gap-3
"

>



<div

className="
hidden
md:flex
items-center
bg-white/20
backdrop-blur-xl
rounded-2xl
px-4
h-12
border
border-white/20
"

>


<Search
size={18}
/>


<input

placeholder="Cari menu..."

className="
ml-3
bg-transparent
outline-none
placeholder:text-white/70
w-56
text-sm
"

/>


</div>






<button

className="
h-12
w-12
rounded-2xl
bg-white/20
backdrop-blur-xl
border
border-white/20
flex
items-center
justify-center
hover:bg-white/30
transition
"

>


<Bell
size={20}
/>


</button>




</div>





</div>





{/* MOBILE SEARCH */}


<div

className="
md:hidden
theme-card
flex
items-center
gap-3
px-4
h-12
"

>


<Search size={18}/>


<input

placeholder="Cari..."

className="
bg-transparent
outline-none
w-full
"

/>


</div>



</div>


)

}
