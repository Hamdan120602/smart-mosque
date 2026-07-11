"use client";

import {
LucideIcon,
TrendingUp
} from "lucide-react";


interface Props{

title:string;

value:string | number;

icon:LucideIcon;

description?:string;

}



export default function StatsCard({

title,

value,

icon:Icon,

description

}:Props){



return (

<div

className="

premium-card

relative

overflow-hidden

p-6

"

>



{/* glow */}

<div

className="

absolute

right-0

top-0

h-32

w-32

rounded-full

blur-3xl

opacity-20

"

style={{

background:"var(--primary)"

}}

/>





<div

className="

relative

flex

items-start

justify-between

"

>



<div>


<div

className="

flex

items-center

gap-3

mb-5

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


<Icon size={24}/>


</div>



<div>


<p

className="

text-sm

font-medium

opacity-60

"

>

{title}

</p>


</div>


</div>





<h2

className="

text-3xl

font-black

tracking-tight

"

>

{value}

</h2>




{description && (

<div

className="

mt-4

flex

items-center

gap-2

text-sm

opacity-70

"

>


<TrendingUp

size={16}

style={{

color:"var(--primary)"

}}

/>


<span>

{description}

</span>


</div>


)}



</div>



</div>



</div>


)

}
