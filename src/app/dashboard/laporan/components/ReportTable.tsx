"use client";

import {
ArrowDownLeft,
ArrowUpRight,
CalendarDays,
Tag
} from "lucide-react";

export interface ReportItem{
id:number;
title:string;
category:string;
type:"income"|"expense";
amount:number;
created_at?:string;
description?:string;
}

interface Props{
data:ReportItem[];
}

function rupiah(v:number){
return "Rp "+v.toLocaleString("id-ID");
}

export default function ReportTable({
data
}:Props){

return(

<div className="premium-card overflow-hidden">

<div className="flex items-center justify-between border-b p-6">

<div>

<h2 className="text-2xl font-black">
Riwayat Transaksi
</h2>

<p className="mt-1 text-sm text-slate-500">
Seluruh transaksi keuangan masjid
</p>

</div>

<span className="rounded-xl bg-slate-100 px-4 py-2 text-sm font-semibold">
{data.length} Transaksi
</span>

</div>

<div className="overflow-x-auto">

<table className="w-full">

<thead className="bg-slate-50">

<tr>

<th className="px-6 py-4 text-left">
Transaksi
</th>

<th className="px-6 py-4">
Kategori
</th>

<th className="px-6 py-4">
Tanggal
</th>

<th className="px-6 py-4 text-right">
Nominal
</th>

</tr>

</thead>

<tbody>

{
data.length===0?

<tr>

<td
colSpan={4}
className="py-16 text-center text-slate-500"
>

Belum ada transaksi

</td>

</tr>

:

data.map(item=>{

const income=item.type==="income";

return(

<tr
key={item.id}
className="border-t hover:bg-slate-50 transition"
>

<td className="px-6 py-5">

<div className="flex items-center gap-4">

<div
className={`flex h-11 w-11 items-center justify-center rounded-2xl text-white ${
income
?
"bg-green-500"
:
"bg-red-500"
}`}
>

{
income
?
<ArrowDownLeft size={18}/>
:
<ArrowUpRight size={18}/>
}

</div>

<div>

<p className="font-semibold">
{item.title}
</p>

{
item.description&&

<p className="text-xs text-slate-500">
{item.description}
</p>

}

</div>

</div>

</td>

<td className="px-6 py-5">

<div className="flex items-center gap-2">

<Tag size={16}/>

{item.category}

</div>

</td>

<td className="px-6 py-5">

<div className="flex items-center gap-2">

<CalendarDays size={16}/>

{
item.created_at
?
new Date(item.created_at).toLocaleDateString("id-ID")
:
"-"
}

</div>

</td>

<td
className={`px-6 py-5 text-right font-bold ${
income
?
"text-green-600"
:
"text-red-600"
}`}
>

{income?"+":"-"}

{rupiah(item.amount)}

</td>

</tr>

);

})

}

</tbody>

</table>

</div>

</div>

);

}
