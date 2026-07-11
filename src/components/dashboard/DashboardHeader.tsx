"use client";


import {
Bell,
Search,
Sparkles
} from "lucide-react";



export default function DashboardHeader(){


return (

<div

className="

flex

flex-col

gap-5

lg:flex-row

lg:items-center

lg:justify-between

"

>


<div>


<div

className="

flex

items-center

gap-3

"

>


<div

className="

h-12

w-12

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

<Sparkles size={22}/>

</div>




<div>


<h1

className="

text-3xl

font-black

tracking-tight

"

>

Dashboard

</h1>


<p

className="

mt-1

text-sm

opacity-60

"

>

Pusat kontrol Smart Mosque Management System

</p>



</div>


</div>



</div>







<div

className="

flex

items-center

gap-3

"

>



<div

className="

relative

"

>


<Search

className="

absolute

left-4

top-1/2

-translate-y-1/2

opacity-40

"

size={18}

/>


<input

placeholder="Cari data..."

className="

h-12

w-full

lg:w-72

rounded-2xl

border

bg-white/50

pl-11

pr-4

outline-none

focus:ring-2

"

style={{

borderColor:"var(--primary)"

}}

/>


</div>




<button

className="

h-12

w-12

rounded-2xl

border

flex

items-center

justify-center

bg-white/50

hover:shadow-lg

transition

"

>


<Bell size={20}/>


</button>



</div>




</div>

)

}
