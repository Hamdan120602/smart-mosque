"use client";


import {

CalendarCheck,
Clock3,
CheckCircle2,
XCircle,
Flame

} from "lucide-react";




interface Props{

statistics:any;

}



export default function AgendaStats({
statistics
}:Props){



const cards=[


{

title:"Total Agenda",

value:statistics.total,

icon:CalendarCheck,

desc:"Seluruh kegiatan"


},


{

title:"Terjadwal",

value:statistics.scheduled,

icon:Clock3,

desc:"Menunggu pelaksanaan"


},


{

title:"Selesai",

value:statistics.done,

icon:CheckCircle2,

desc:"Agenda selesai"


},


{

title:"Dibatalkan",

value:statistics.cancelled,

icon:XCircle,

desc:"Agenda batal"


},


{

title:"Prioritas Tinggi",

value:statistics.highPriority,

icon:Flame,

desc:"Agenda penting"

}


];





return (

<div className="
grid
grid-cols-1
sm:grid-cols-2
xl:grid-cols-5
gap-5
">


{

cards.map((card)=>(


<div

key={card.title}

className="
group
rounded-3xl
bg-white
p-6
shadow-sm
border
transition
hover:-translate-y-1
hover:shadow-xl
"


>


<div className="
flex
items-center
justify-between
">


<div className="
rounded-2xl
bg-emerald-100
p-3
text-emerald-700
">


<card.icon size={24}/>


</div>



</div>




<h2 className="
mt-5
text-3xl
font-bold
text-gray-900
">

{card.value}

</h2>



<p className="
mt-1
font-semibold
text-gray-700
">

{card.title}

</p>



<p className="
text-sm
text-gray-500
">

{card.desc}

</p>



</div>


))


}



</div>

);


}
