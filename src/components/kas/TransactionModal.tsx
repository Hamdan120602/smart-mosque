"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Plus } from "lucide-react";
import { createTransaction } from "@/app/dashboard/kas/actions";


export default function TransactionModal(){

const [open,setOpen] = useState(false);


const [form,setForm] = useState({

title:"",
category:"PEMASUKAN",
amount:"",
description:""

});



async function save(){

if(!form.title || !form.amount){
return;
}


await createTransaction({

title:form.title,

category:
form.category as "PEMASUKAN" | "PENGELUARAN",

amount:Number(form.amount),

description:form.description

});


setForm({

title:"",
category:"PEMASUKAN",
amount:"",
description:""

});


setOpen(false);

}



return (

<>

<button

onClick={()=>setOpen(true)}

className="
flex
items-center
gap-2
rounded-2xl
bg-slate-900
px-6
py-4
text-white
font-semibold
shadow-xl
hover:scale-105
transition
"

>

<Plus size={20}/>

Tambah Transaksi

</button>



<AnimatePresence>


{

open && (

<motion.div

initial={{
opacity:0
}}

animate={{
opacity:1
}}

exit={{
opacity:0
}}

className="
fixed
inset-0
z-50
flex
items-center
justify-center
bg-black/40
backdrop-blur-sm
"

>


<motion.div

initial={{
scale:.9,
y:30
}}

animate={{
scale:1,
y:0
}}

exit={{
scale:.9,
y:30
}}

className="
w-full
max-w-lg
rounded-3xl
bg-white
p-8
shadow-2xl
"

>


<div className="
flex
items-center
justify-between
mb-6
">

<h2 className="
text-2xl
font-bold
">

Tambah Transaksi

</h2>


<button
onClick={()=>setOpen(false)}
>

<X/>

</button>


</div>



<div className="
space-y-4
">


<input

className="
w-full
rounded-xl
border
px-4
py-3
"

placeholder="Nama transaksi"

value={form.title}

onChange={(e)=>
setForm({
...form,
title:e.target.value
})
}

/>



<select

className="
w-full
rounded-xl
border
px-4
py-3
"

value={form.category}

onChange={(e)=>
setForm({
...form,
category:e.target.value
})
}

>

<option value="PEMASUKAN">
Pemasukan
</option>


<option value="PENGELUARAN">
Pengeluaran
</option>


</select>




<input

type="number"

className="
w-full
rounded-xl
border
px-4
py-3
"

placeholder="Nominal"

value={form.amount}

onChange={(e)=>
setForm({
...form,
amount:e.target.value
})
}

/>




<textarea

className="
w-full
rounded-xl
border
px-4
py-3
"

placeholder="Keterangan"

value={form.description}

onChange={(e)=>
setForm({
...form,
description:e.target.value
})
}

/>



<button

onClick={save}

className="
w-full
rounded-xl
bg-emerald-600
py-3
font-bold
text-white
hover:bg-emerald-700
transition
"

>

Simpan Transaksi

</button>



</div>



</motion.div>


</motion.div>

)

}


</AnimatePresence>


</>

)

}
