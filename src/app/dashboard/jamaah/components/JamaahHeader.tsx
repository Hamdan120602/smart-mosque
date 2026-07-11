"use client";


import {
Users,
Plus,
Sparkles
} from "lucide-react";



interface Props{

onAdd:()=>void;

}



export default function JamaahHeader({

onAdd

}:Props){



return (

<div className="
relative
overflow-hidden
rounded-3xl
bg-gradient-to-br
from-emerald-700
via-green-600
to-teal-700
p-8
text-white
shadow-xl
">



<div className="
absolute
right-10
top-5
opacity-20
">

<Users size={150}/>

</div>





<div className="
relative
z-10
">



<div className="
mb-4
flex
items-center
gap-2
">


<div className="
rounded-xl
bg-white/20
p-2
">

<Sparkles size={22}/>

</div>



<span className="
text-sm
font-medium
">

Smart Mosque Management

</span>


</div>






<h1 className="
text-4xl
font-bold
">

Manajemen Data Jamaah

</h1>





<p className="
mt-3
max-w-xl
text-white/80
">

Kelola data jamaah,
keanggotaan masjid,
kelompok kajian,
dan informasi warga secara terstruktur.

</p>






<button

onClick={onAdd}

className="
mt-6
flex
items-center
gap-2
rounded-2xl
bg-white
px-6
py-3
font-semibold
text-emerald-700
shadow-lg
transition
hover:scale-105
"

>


<Plus size={20}/>

Tambah Jamaah


</button>




</div>


</div>


);


}
