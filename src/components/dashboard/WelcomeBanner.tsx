"use client";


import {

Landmark,

ArrowRight

} from "lucide-react";



export default function WelcomeBanner(){


return (


<div

className="

relative

overflow-hidden

rounded-[32px]

p-8

text-white

shadow-2xl

"

style={{

background:

"linear-gradient(135deg,var(--primary),var(--secondary))"

}}

>


<div

className="

absolute

right-10

top-5

text-[120px]

opacity-20

"

>

🕌

</div>




<div className="relative">


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

bg-white/20

flex

items-center

justify-center

"

>

<Landmark/>

</div>


<h2

className="

text-3xl

font-black

"

>

Selamat Datang

</h2>


</div>





<p

className="

max-w-xl

opacity-90

leading-relaxed

"

>

Kelola keuangan, jamaah, agenda,
dan aktivitas masjid dalam satu sistem
digital yang modern.

</p>






<button

className="

mt-6

flex

items-center

gap-2

rounded-2xl

bg-white

px-5

py-3

font-bold

"

style={{

color:"var(--primary)"

}}

>

Mulai Kelola

<ArrowRight size={18}/>

</button>



</div>



</div>


)

}
