"use client";

import {
  CalendarRange,
  Filter,
  RotateCcw,
  FileSpreadsheet,
  Printer
} from "lucide-react";

import { exportExcel } from "@/lib/export/excel";


interface Props {

  month:string;

  type:string;

  category:string;

  setMonth:(value:string)=>void;

  setType:(value:string)=>void;

  setCategory:(value:string)=>void;

  onReset?:()=>void;

  data:any[];

}



export default function FilterBar({

  month,

  type,

  category,

  setMonth,

  setType,

  setCategory,

  onReset,

  data

}:Props){



function printReport(){

  window.print();

}



return (

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

value={month}

onChange={(e)=>setMonth(e.target.value)}

className="w-full rounded-2xl border pl-11 pr-4 py-3"

/>


</div>


</div>




<div>


<label className="mb-2 block text-sm font-semibold">

Jenis

</label>


<select

value={type}

onChange={(e)=>setType(e.target.value)}

className="w-full rounded-2xl border p-3"

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

value={category}

onChange={(e)=>setCategory(e.target.value)}

className="w-full rounded-2xl border p-3"

>


<option value="">

Semua

</option>


<option value="donasi">

Donasi

</option>


<option value="infaq">

Infaq

</option>


<option value="operasional">

Operasional

</option>


<option value="listrik">

Listrik

</option>


</select>


</div>





<div className="flex items-end">


<button

className="
flex
w-full
items-center
justify-center
gap-2
rounded-2xl
bg-slate-900
py-3
text-white
"

>

<Filter size={18}/>

Filter

</button>


</div>





<div className="flex items-end gap-2">


<button

onClick={onReset}

className="rounded-2xl border p-3 hover:bg-slate-100"

title="Reset"

>

<RotateCcw size={18}/>

</button>




<button

onClick={()=>exportExcel(data)}

className="rounded-2xl border p-3 hover:bg-slate-100"

title="Export Excel"

>

<FileSpreadsheet size={18}/>

</button>





<button

onClick={printReport}

className="rounded-2xl border p-3 hover:bg-slate-100"

title="Print"

>

<Printer size={18}/>

</button>



</div>


</div>


</div>


);

}
