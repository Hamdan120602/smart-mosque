"use client";


import {
MoreVertical
}
from "lucide-react";


const data=[
{
name:"Infak Jumat",
type:"Pemasukan",
money:"Rp 2.500.000"
},
{
name:"Listrik Masjid",
type:"Pengeluaran",
money:"Rp 450.000"
},
{
name:"Donasi Renovasi",
type:"Pemasukan",
money:"Rp 10.000.000"
}
];


export default function TransactionTable(){


return (

<div
className="
rounded-3xl
bg-white
border
shadow-[0_20px_50px_rgba(0,0,0,0.06)]
overflow-hidden
"
>


<div className="
p-7
flex
justify-between
"
>

<h2 className="
text-xl
font-bold
">
Transaksi Terbaru
</h2>


<button
className="
rounded-xl
bg-slate-900
text-white
px-5
py-3
font-medium
"
>
+ Tambah
</button>


</div>



<table
className="
w-full
"
>


<thead
className="
bg-slate-50
text-slate-500
"
>

<tr>

<th className="text-left p-5">
Nama
</th>

<th>
Kategori
</th>

<th>
Nominal
</th>

<th>
Aksi
</th>

</tr>

</thead>



<tbody>


{
data.map((item)=>(


<tr
key={item.name}
className="
border-t
hover:bg-slate-50
transition
"
>


<td className="p-5 font-medium">
{item.name}
</td>


<td>

<span
className="
px-4
py-2
rounded-full
bg-emerald-100
text-emerald-700
text-sm
"
>
{item.type}
</span>

</td>


<td className="font-semibold">
{item.money}
</td>


<td>
<MoreVertical/>
</td>


</tr>


))

}


</tbody>


</table>


</div>


)

}
