"use client";


import {

CalendarDays,
Clock,
MapPin,
User,
Users,
Edit3,
Trash2,
Copy,
CheckCircle2,
PlayCircle,
XCircle,
FileText

} from "lucide-react";


import { Agenda } from "../types";



interface Props {

item:Agenda;

onEdit:(item:Agenda)=>void;

onDelete:(id:number)=>void;

onDuplicate:(id:number)=>void;

onStatus:(id:number,status:any)=>void;

}





const statusConfig:any={


DRAFT:{

label:"Draft",

icon:FileText,

style:"bg-gray-100 text-gray-700"

},


SCHEDULED:{

label:"Terjadwal",

icon:Clock,

style:"bg-blue-100 text-blue-700"

},


ONGOING:{

label:"Berlangsung",

icon:PlayCircle,

style:"bg-orange-100 text-orange-700"

},


DONE:{

label:"Selesai",

icon:CheckCircle2,

style:"bg-green-100 text-green-700"

},


CANCELLED:{

label:"Dibatalkan",

icon:XCircle,

style:"bg-red-100 text-red-700"

}



};





const priority:any={


LOW:
"bg-gray-100 text-gray-600",


MEDIUM:
"bg-yellow-100 text-yellow-700",


HIGH:
"bg-red-100 text-red-700"


};





export default function AgendaCard({

item,

onEdit,

onDelete,

onDuplicate,

onStatus

}:Props){



const StatusIcon =
statusConfig[item.status].icon;



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
justify-between
gap-4
">



<div>


<div className="
flex
flex-wrap
gap-2
mb-3
">


<span className="
rounded-full
bg-emerald-100
px-3
py-1
text-xs
font-semibold
text-emerald-700
">

{item.category}

</span>




<span className={`
rounded-full
px-3
py-1
text-xs
font-semibold
${priority[item.priority]}
`}>

Prioritas {item.priority}

</span>



</div>






<h2 className="
text-xl
font-bold
text-gray-900
">

{item.title}

</h2>


<p className="
mt-2
line-clamp-2
text-sm
text-gray-500
">

{item.description}

</p>


</div>






<div className={`
flex
items-center
gap-2
rounded-full
px-3
py-2
text-xs
font-semibold
${statusConfig[item.status].style}
`}>



<StatusIcon size={15}/>


{statusConfig[item.status].label}



</div>





</div>







<div className="
mt-6
grid
gap-3
text-sm
text-gray-600
">



<div className="
flex
items-center
gap-3
">

<CalendarDays
size={18}
className="text-emerald-600"
/>


<span>

{item.date}

</span>


</div>





<div className="
flex
items-center
gap-3
">

<Clock
size={18}
className="text-emerald-600"
/>


<span>

{item.startTime}
-
{item.endTime}

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


<span>

{item.location}

</span>


</div>





<div className="
flex
items-center
gap-3
">

<User
size={18}
className="text-emerald-600"
/>


<span>

{item.coordinator}

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

{item.participants} Jamaah

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

onClick={()=>onDuplicate(item.id)}

className="
flex
items-center
gap-2
rounded-xl
bg-purple-50
px-4
py-2
text-sm
font-semibold
text-purple-700
hover:bg-purple-100
"

>


<Copy size={16}/>

Copy


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




</div>







<div className="
mt-4
flex
gap-2
">


<button

onClick={()=>onStatus(item.id,"ONGOING")}

className="
rounded-xl
bg-orange-50
px-3
py-2
text-xs
font-semibold
text-orange-700
"

>

Mulai

</button>



<button

onClick={()=>onStatus(item.id,"DONE")}

className="
rounded-xl
bg-green-50
px-3
py-2
text-xs
font-semibold
text-green-700
"

>

Selesai

</button>




</div>





</div>


);


}
