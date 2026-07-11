"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
Search,
Plus,
Pencil,
Trash2,
Users
} from "lucide-react";

import {
deleteJamaah,
getJamaah,
Jamaah
} from "@/lib/jamaah";



export default function JamaahPage(){


const [jamaah,setJamaah]=useState<Jamaah[]>([]);

const [loading,setLoading]=useState(true);

const [search,setSearch]=useState("");



async function loadData(){

setLoading(true);

try{

const data=await getJamaah();

setJamaah(data || []);

}

catch(error){

console.error(error);

}

finally{

setLoading(false);

}

}



useEffect(()=>{

loadData();

},[]);





const filtered=useMemo(()=>{

return jamaah.filter((j)=>

[

j.name,

j.nik,

j.phone,

j.address

]

.join(" ")

.toLowerCase()

.includes(

search.toLowerCase()

)

);


},[jamaah,search]);





const total=jamaah.length;

const aktif=jamaah.filter(
j=>j.status==="AKTIF"
).length;

const laki=jamaah.filter(
j=>j.gender==="LAKI-LAKI"
).length;

const perempuan=jamaah.filter(
j=>j.gender==="PEREMPUAN"
).length;




async function hapus(id:number){

if(!confirm("Hapus data jamaah ini?")) return;


await deleteJamaah(id);


loadData();

}





return(


<div className="flex flex-col gap-6 p-6 lg:p-10">


{/* HEADER */}

<div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">


<div>

<h1 className="text-3xl font-black">

Data Jamaah

</h1>


<p className="text-slate-500 mt-2">

Kelola data jamaah masjid

</p>


</div>



<Link

href="/dashboard/jamaah/tambah"

className="inline-flex w-fit items-center gap-2 rounded-2xl bg-emerald-600 px-5 py-3 font-semibold text-white hover:bg-emerald-700"

>

<Plus size={18}/>

Tambah Jamaah

</Link>



</div>





{/* STATISTIC */}


<div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">


<Card title="Total Jamaah" value={total}/>

<Card title="Aktif" value={aktif}/>

<Card title="Laki-laki" value={laki}/>

<Card title="Perempuan" value={perempuan}/>


</div>






{/* TABLE */}


<div className="rounded-3xl bg-white shadow border border-slate-100 overflow-hidden">


<div className="p-6 border-b">


<div className="relative">


<Search

className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"

size={18}

/>



<input

value={search}

onChange={(e)=>setSearch(e.target.value)}

placeholder="Cari nama, NIK, nomor HP..."

className="w-full rounded-2xl border px-12 py-3 outline-none focus:ring-2"

/>


</div>


</div>





<div className="overflow-x-auto">


<table className="w-full min-w-[700px]">


<thead className="bg-slate-50">


<tr>

<th className="p-5 text-left">
Nama
</th>

<th className="p-5 text-left">
NIK
</th>

<th className="p-5 text-left">
HP
</th>

<th className="p-5">
Status
</th>

<th className="p-5">
Aksi
</th>

</tr>


</thead>



<tbody>


{loading &&

<tr>

<td
colSpan={5}
className="p-10 text-center"
>

Memuat data...

</td>

</tr>

}





{!loading && filtered.length===0 &&

<tr>

<td
colSpan={5}
className="p-10 text-center text-slate-500"
>

Belum ada data jamaah

</td>

</tr>

}







{filtered.map((j)=>(


<tr

key={j.id}

className="border-t hover:bg-slate-50"

>


<td className="p-5">


<div className="flex items-center gap-3">


<div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-100">

<Users size={20}/>

</div>


{j.name}


</div>


</td>



<td className="p-5">

{j.nik}

</td>



<td className="p-5">

{j.phone}

</td>



<td className="p-5 text-center">


<span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">

{j.status}

</span>


</td>




<td className="p-5">


<div className="flex justify-center gap-4">


<Link

href={`/dashboard/jamaah/edit/${j.id}`}

>

<Pencil

size={18}

className="text-blue-600"

/>


</Link>



<button

onClick={()=>hapus(j.id!)}

>

<Trash2

size={18}

className="text-red-600"

/>


</button>



</div>


</td>


</tr>


))}



</tbody>


</table>


</div>


</div>



</div>


)

}






function Card({

title,

value

}:{

title:string;

value:number;

}){


return(

<div className="rounded-3xl bg-white p-6 shadow border border-slate-100">


<p className="text-slate-500">

{title}

</p>


<h2 className="mt-2 text-4xl font-black">

{value}

</h2>


</div>


)

}
