"use client";


import {
useEffect,
useMemo,
useState
} from "react";


import {
Jamaah,
JamaahStatus
} from "../types";



const STORAGE_KEY =
"smart-mosque-jamaah";



const demoData:Jamaah[]=[


{

id:1,

name:"Ahmad Fauzi",

nik:"3273010101010001",

gender:"LAKI-LAKI",

birthDate:"1990-01-01",

phone:"08123456789",

address:"Jl. Masjid Raya",

occupation:"Pedagang",

group:"Kajian Subuh",

status:"AKTIF",

joinDate:"2025-01-10",

notes:"Aktif mengikuti kajian",

createdAt:new Date().toISOString()

}


];





export function useJamaah(){


const [jamaah,setJamaah]=useState<Jamaah[]>([]);


const [loading,setLoading]=useState(true);





useEffect(()=>{


const data=
localStorage.getItem(
STORAGE_KEY
);



if(data){

setJamaah(
JSON.parse(data)
);


}else{


setJamaah(demoData);


localStorage.setItem(
STORAGE_KEY,
JSON.stringify(demoData)
);


}



setLoading(false);


},[]);





function save(data:Jamaah[]){


setJamaah(data);


localStorage.setItem(
STORAGE_KEY,
JSON.stringify(data)
);


}







function createJamaah(

data:Omit<Jamaah,"id"|"createdAt">

){


const item:Jamaah={


...data,


id:Date.now(),


createdAt:new Date().toISOString()


};



save([

item,

...jamaah

]);


}






function updateJamaah(

id:number,

data:Partial<Jamaah>

){


save(

jamaah.map(item=>

item.id===id

?

{
...item,
...data
}

:

item

)

);


}






function deleteJamaah(
id:number
){


save(

jamaah.filter(
item=>item.id!==id
)

);


}







function changeStatus(

id:number,

status:JamaahStatus

){


updateJamaah(

id,

{
status
}

);


}







const statistics=useMemo(()=>{


return {


total:jamaah.length,


active:

jamaah.filter(
x=>x.status==="AKTIF"
).length,


inactive:

jamaah.filter(
x=>x.status==="NONAKTIF"
).length,


male:

jamaah.filter(
x=>x.gender==="LAKI-LAKI"
).length,


female:

jamaah.filter(
x=>x.gender==="PEREMPUAN"
).length


};


},[jamaah]);








return {


jamaah,

loading,


createJamaah,

updateJamaah,

deleteJamaah,

changeStatus,


statistics


};


}
