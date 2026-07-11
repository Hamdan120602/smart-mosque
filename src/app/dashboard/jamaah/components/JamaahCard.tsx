"use client";


import {

Phone,
MapPin,
Briefcase,
Users,
Edit3,
Trash2,
UserCheck,
UserX

} from "lucide-react";


import {
Jamaah
} from "../types";





interface Props{


item:Jamaah;


onEdit:(item:Jamaah)=>void;


onDelete:(id:number)=>void;


onStatus:(id:number,status:any)=>void;


}





export default function JamaahCard({

item,

onEdit,

onDelete,

onStatus

}:Props){





const initial=

item.name
.charAt(0)
.toUpperCase();





return (

<div className="
group
rounded-3xl
border
bg-white
p-6
shadow-sm
transition
hover:-translate-y-1
hover:shadow-xl
">





<div className="
flex
items-start
justify-between
gap-4
">





<div className="
flex
items-center
gap-4
">



<div className="
flex
h-16
w-16
items-center
justify-center
rounded-2xl
bg-emerald-600
text-2xl
font-bold
text-white
">

{initial}

</div>






<div>


<h2 className="
text-xl
font-bold
">

{item.name}

</h2>



<p className="
text-sm
text-gray-500
">

{item.gender==="LAKI_LAKI"
?
"Laki-laki"
:
"Perempuan"}

</p>


</div>



</div>







<span className={`

rounded-full

px-3

py-1

text-xs

font-semibold

${
item.status==="AKTIF"

?

"bg-green-100 text-green-700"

:

"bg-red-100 text-red-700"

}

`}>

{item.status}

</span>






</div>








<div className="
mt-6
space-y-3
text-sm
text-gray-600
">





<div className="
flex
items-center
gap-3
">

<Phone

size={18}

className="text-emerald-600"

/>


<span>

{item.phone}

</span>


</div>







<div className="
flex
items-center
gap-3
">

<MapPin

size={18}

className="text-emerald-600"

/>


<span className="
line-clamp-1
">

{item.address || "-"

}

</span>


</div>








<div className="
flex
items-center
gap-3
">

<Briefcase

size={18}

className="text-emerald-600"

/>


<span>

{item.occupation || "-"}

</span>


</div>








<div className="
flex
items-center
gap-3
">

<Users

size={18}

className="text-emerald-600"

/>


<span>

{item.group || "Belum ada kelompok"}

</span>


</div>






</div>








<div className="
mt-6
flex
flex-wrap
gap-2
border-t
pt-5
">





<button

onClick={()=>onEdit(item)}

className="
flex
items-center
gap-2
rounded-xl
bg-blue-50
px-4
py-2
text-sm
font-semibold
text-blue-700
hover:bg-blue-100
"

>


<Edit3 size={16}/>

Edit


</button>






<button

onClick={()=>onDelete(item.id)}

className="
flex
items-center
gap-2
rounded-xl
bg-red-50
px-4
py-2
text-sm
font-semibold
text-red-700
hover:bg-red-100
"

>


<Trash2 size={16}/>

Hapus


</button>







{

item.status==="AKTIF"

?


<button

onClick={()=>onStatus(item.id,"NONAKTIF")}

className="
flex
items-center
gap-2
rounded-xl
bg-orange-50
px-4
py-2
text-sm
font-semibold
text-orange-700
"

>


<UserX size={16}/>

Nonaktifkan


</button>


:


<button

onClick={()=>onStatus(item.id,"AKTIF")}

className="
flex
items-center
gap-2
rounded-xl
bg-green-50
px-4
py-2
text-sm
font-semibold
text-green-700
"

>


<UserCheck size={16}/>

Aktifkan


</button>


}



</div>






</div>


);


}
