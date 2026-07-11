"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X } from "lucide-react";
import { addTransaction } from "@/app/dashboard/kas/actions";


export default function TransactionModal(){

const [open,setOpen] = useState(false);


const [form,setForm] = useState({

title:"",
category:"PEMASUKAN",
amount:"",
description:""

});



function handleChange(
e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
){

setForm({
...form,
[e.target.name]:e.target.value
});

}



async function save(){

if(!form.title || !form.amount){
return;
}


const data = new FormData();

data.append("title",form.title);
data.append("category",form.category);
data.append("amount",form.amount);
data.append("description",form.description);


await addTransaction(data);



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
bg-black/50
"

>


<motion.div

initial={{
scale:0.9
}}

animate={{
scale:1
}}

className="
bg-white
rounded-3xl
p-6
w-full
max-w-md
space-y-4
"

>


<div className="flex justify-between items-center">

<h2 className="text-xl font-bold">
Tambah Transaksi
</h2>


<button
onClick={()=>setOpen(false)}
>

<X/>

</button>

</div>



<input

name="title"

value={form.title}

onChange={handleChange}

placeholder="Judul transaksi"

className="
border
rounded-xl
p-3
w-full
"

/>




<select

name="category"

value={form.category}

onChange={handleChange}

className="
border
rounded-xl
p-3
w-full
"

>

<option value="PEMASUKAN">
Pemasukan
</option>


<option value="PENGELUARAN">
Pengeluaran
</option>


</select>




<input

name="amount"

value={form.amount}

onChange={handleChange}

placeholder="Jumlah"

type="number"

className="
border
rounded-xl
p-3
w-full
"

/>




<textarea

name="description"

value={form.description}

onChange={handleChange}

placeholder="Keterangan"

className="
border
rounded-xl
p-3
w-full
"

/>




<button

onClick={save}

className="
bg-blue-600
text-white
rounded-xl
px-5
py-3
w-full
"

>

Simpan

</button>



</motion.div>


</motion.div>

)

}

</AnimatePresence>


</>

);

}
