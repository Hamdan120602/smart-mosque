"use client";

import {
  Users,
  UserCheck,
  User,
  UserRound
} from "lucide-react";

interface Props{
  total:number;
  aktif:number;
  laki:number;
  perempuan:number;
}

export default function JamaahStats({
  total,
  aktif,
  laki,
  perempuan
}:Props){

const cards=[
{
title:"Total Jamaah",
value:total,
icon:Users,
color:"bg-blue-500"
},
{
title:"Jamaah Aktif",
value:aktif,
icon:UserCheck,
color:"bg-emerald-500"
},
{
title:"Laki-laki",
value:laki,
icon:User,
color:"bg-indigo-500"
},
{
title:"Perempuan",
value:perempuan,
icon:UserRound,
color:"bg-pink-500"
}
];

return(

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

{cards.map((item)=>{

const Icon=item.icon;

return(

<div
key={item.title}
className="bg-white rounded-2xl shadow border border-slate-100 p-6 hover:shadow-lg transition"
>

<div className="flex justify-between items-center">

<div>

<p className="text-slate-500 text-sm">

{item.title}

</p>

<h2 className="text-4xl font-bold mt-2">

{item.value}

</h2>

</div>

<div className={`${item.color} w-14 h-14 rounded-xl flex items-center justify-center text-white`}>

<Icon size={28}/>

</div>

</div>

</div>

);

})}

</div>

);

}
