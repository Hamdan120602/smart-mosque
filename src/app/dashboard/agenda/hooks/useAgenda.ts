"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Agenda,
  AgendaCategory,
  AgendaPriority,
  AgendaStatus
} from "../types";


const STORAGE_KEY = "smart-mosque-agenda";


const initialAgenda:Agenda[] = [

{
 id:1,
 title:"Kajian Ahad Pagi",
 description:"Kajian rutin bersama jamaah setelah shalat Subuh",
 category:"KAJIAN",
 date:"2026-07-12",
 startTime:"05:30",
 endTime:"07:00",
 location:"Masjid Utama",
 coordinator:"Ustadz Ahmad",
 participants:120,
 status:"SCHEDULED",
 priority:"HIGH",
 createdAt:new Date().toISOString()
},

{
 id:2,
 title:"Rapat Pengurus Masjid",
 description:"Evaluasi program kerja bulanan",
 category:"RAPAT",
 date:"2026-07-15",
 startTime:"19:30",
 endTime:"21:00",
 location:"Ruang Meeting",
 coordinator:"Ketua DKM",
 participants:15,
 status:"SCHEDULED",
 priority:"MEDIUM",
 createdAt:new Date().toISOString()
}

];



export function useAgenda(){


const [agenda,setAgenda]=useState<Agenda[]>([]);

const [loading,setLoading]=useState(true);



useEffect(()=>{

const saved=
localStorage.getItem(STORAGE_KEY);


if(saved){

setAgenda(
JSON.parse(saved)
);

}else{

setAgenda(initialAgenda);

localStorage.setItem(
STORAGE_KEY,
JSON.stringify(initialAgenda)
);

}


setLoading(false);


},[]);




function save(data:Agenda[]){

setAgenda(data);

localStorage.setItem(
STORAGE_KEY,
JSON.stringify(data)
);

}





function createAgenda(
item:Omit<Agenda,"id"|"createdAt">
){


const newAgenda:Agenda={

...item,

id:Date.now(),

createdAt:new Date().toISOString()

};



save([

newAgenda,

...agenda

]);


}




function updateAgenda(
id:number,
item:Partial<Agenda>
){


save(

agenda.map(
agendaItem=>

agendaItem.id===id

?

{
...agendaItem,
...item
}

:

agendaItem

)

);


}





function deleteAgenda(id:number){


save(

agenda.filter(
item=>item.id!==id
)

);


}





function changeStatus(
id:number,
status:AgendaStatus
){


updateAgenda(
id,
{
status
}
);


}





function duplicateAgenda(id:number){


const target=
agenda.find(
item=>item.id===id
);



if(!target)return;



createAgenda({

title:
target.title+" (Copy)",

description:
target.description,

category:
target.category,

date:
target.date,

startTime:
target.startTime,

endTime:
target.endTime,

location:
target.location,

coordinator:
target.coordinator,

participants:
target.participants,

status:
"DRAFT",

priority:
target.priority

});


}





const statistics=useMemo(()=>{


return {

total:agenda.length,


scheduled:
agenda.filter(
x=>x.status==="SCHEDULED"
).length,


ongoing:
agenda.filter(
x=>x.status==="ONGOING"
).length,


done:
agenda.filter(
x=>x.status==="DONE"
).length,


cancelled:
agenda.filter(
x=>x.status==="CANCELLED"
).length,


highPriority:
agenda.filter(
x=>x.priority==="HIGH"
).length


};


},[agenda]);





function searchAgenda(
keyword:string
){


return agenda.filter(item=>

item.title
.toLowerCase()
.includes(
keyword.toLowerCase()
)

);


}





function filterCategory(
category:AgendaCategory
){


return agenda.filter(
item=>
item.category===category
);


}





return {


agenda,

loading,


createAgenda,

updateAgenda,

deleteAgenda,

changeStatus,

duplicateAgenda,


statistics,


searchAgenda,

filterCategory

};



}
