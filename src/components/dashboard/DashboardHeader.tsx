"use client";


import {
Sparkles
} from "lucide-react";



export default function DashboardHeader(){


return (

<div

className="

flex

items-center

justify-between

rounded-3xl

bg-white

border

shadow-sm

p-6

"

>


<div>


<div

className="

flex

items-center

gap-4

"

>


<div

className="

h-14

w-14

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

<Sparkles size={26}/>

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


</div>

)

}
