"use client";


import {
CalendarDays,
ChevronLeft,
ChevronRight
} from "lucide-react";


import { Agenda } from "../types";



interface Props{

agenda:Agenda[];

}



export default function AgendaCalendar({

agenda

}:Props){



const today=new Date();


const month=today.toLocaleString(
"id-ID",
{
month:"long"
}
);


const year=today.getFullYear();



const days=
Array.from(
{
length:31
},
(_,i)=>i+1
);



function getAgenda(day:number){


return agenda.filter(item=>{


const date=new Date(item.date);


return date.getDate()===day
&&
date.getMonth()===today.getMonth()
&&
date.getFullYear()===year;


});


}





return (

<div className="
rounded-3xl
bg-white
border
shadow-sm
p-6
">


<div className="
flex
items-center
justify-between
mb-6
">


<div>


<h2 className="
text-xl
font-bold
flex
items-center
gap-2
">

<CalendarDays
className="text-emerald-600"
/>


Kalender Agenda


</h2>


<p className="
text-gray-500
capitalize
">

{month} {year}

</p>


</div>



<div className="
flex
gap-2
">


<button

className="
rounded-xl
border
p-2
hover:bg-gray-100
"

>

<ChevronLeft size={18}/>

</button>


<button

className="
rounded-xl
border
p-2
hover:bg-gray-100
"

>

<ChevronRight size={18}/>

</button>


</div>


</div>





<div className="
grid
grid-cols-7
gap-3
text-center
">


{

[
"Min",
"Sen",
"Sel",
"Rab",
"Kam",
"Jum",
"Sab"

].map(day=>(


<div

key={day}

className="
text-sm
font-semibold
text-gray-400
"

>

{day}

</div>


))

}




{

days.map(day=>{


const events=getAgenda(day);



return (

<div

key={day}

className="
min-h-[90px]
rounded-2xl
border
p-2
text-left
hover:bg-gray-50
transition
"


>


<div className="
font-bold
text-gray-700
">

{day}

</div>





{

events.map(event=>(


<div

key={event.id}

className="
mt-2
rounded-xl
bg-emerald-100
px-2
py-1
text-xs
font-semibold
text-emerald-700
truncate
"

>

{event.title}


</div>


))


}



</div>


)


})

}


</div>



</div>


);


}
