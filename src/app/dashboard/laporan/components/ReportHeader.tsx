"use client";


import {
FileText,
Download,
Printer
} from "lucide-react";


import { exportPDF } from "@/lib/export/pdf";

import { exportExcel } from "@/lib/export/excel";



interface Props{

data:any[];

}



export default function ReportHeader({

data

}:Props){



return (

<div

className="rounded-3xl p-8 text-white shadow-xl"

style={{

background:

"linear-gradient(135deg,var(--primary),var(--secondary))"

}}

>


<div className="flex flex-col gap-6 lg:flex-row lg:justify-between">


<div>

<h1 className="text-4xl font-black">

Laporan Keuangan

</h1>


<p className="mt-2 opacity-90">

Ringkasan keuangan Smart Mosque

</p>


</div>





<div className="flex gap-3">


<button

onClick={()=>exportPDF(data)}

className="rounded-2xl bg-white/20 px-5 py-3"

>

<FileText

className="inline mr-2"

size={18}

/>

PDF

</button>






<button

onClick={()=>exportExcel(data)}

className="rounded-2xl bg-white/20 px-5 py-3"

>

<Download

className="inline mr-2"

size={18}

/>

Excel

</button>






<button

onClick={()=>window.print()}

className="rounded-2xl bg-white/20 px-5 py-3"

>

<Printer

className="inline mr-2"

size={18}

/>

Print

</button>



</div>


</div>


</div>


)


}
