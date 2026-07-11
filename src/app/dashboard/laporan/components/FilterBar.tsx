"use client";

import {
CalendarRange,
Filter,
RotateCcw,
FileSpreadsheet,
FileText
} from "lucide-react";

interface Props{
onReset?:()=>void;
}

export default function FilterBar({
onReset
}:Props){

return(

<div className="premium-card p-6">

<div className="grid gap-4 lg:grid-cols-6">

<div className="lg:col-span-2">

<label className="mb-2 block text-sm font-semibold">
Periode
</label>

<div className="relative">

<CalendarRange
size={18}
className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
/>

<input
type="month"
className="w-full rounded-2xl border pl-11 pr-4 py-3 outline-none focus:ring-2"
 />

</div>

</div>

<div>

<label className="mb-2 block text-sm font-semibold">
Jenis
</label>

<select
className="w-full rounded-2xl border p-3 outline-none focus:ring-2"
>

<option value="">
Semua
</option>

<option value="income">
Pemasukan
</option>

<option value="expense">
Pengeluaran
</option>

</select>

</div>

<div>

<label className="mb-2 block text-sm font-semibold">
Kategori
</label>

<select
className="w-full rounded-2xl border p-3 outline-none focus:ring-2"
>

<option>
Semua
</option>

<option>
Infaq
</option>

<option>
Donasi
</option>

<option>
Operasional
</option>

<option>
Listrik
</option>

</select>

</div>

<div className="flex items-end">

<button
className="flex w-full items-center justify-center gap-2 rounded-2xl border py-3 font-semibold hover:bg-slate-50"
>

<Filter size={18}/>

Filter

</button>

</div>

<div className="flex items-end gap-2">

<button
onClick={onReset}
className="rounded-2xl border p-3 hover:bg-slate-50"
>

<RotateCcw size={18}/>

</button>

<button
className="rounded-2xl border p-3 hover:bg-slate-50"
title="Export Excel"
>

<FileSpreadsheet size={18}/>

</button>

<button
className="rounded-2xl border p-3 hover:bg-slate-50"
title="Export PDF"
>

<FileText size={18}/>

</button>

</div>

</div>

</div>

);

}
