"use client";

import { useState } from "react";
import { X, Plus } from "lucide-react";
import { addTransaction } from "@/app/dashboard/kas/actions";

export default function TransactionModal(){

const [open,setOpen]=useState(false);

return (

<>

<button
onClick={()=>setOpen(true)}
className="
btn-premium
flex
items-center
gap-2
"
>
<Plus size={18}/>
Tambah Transaksi
</button>


{
open &&

<div
className="
fixed
inset-0
z-50
flex
items-center
justify-center
bg-black/40
backdrop-blur-sm
p-5
"
>


<div
className="
w-full
max-w-xl
rounded-3xl
bg-white
p-8
shadow-2xl
"
>


<div
className="
flex
justify-between
items-center
mb-6
"
>

<h2 className="text-2xl font-black">
Transaksi Baru
</h2>


<button
onClick={()=>setOpen(false)}
>
<X/>
</button>


</div>



<form

action={async(formData)=>{

await addTransaction(formData);

setOpen(false);

}}

className="space-y-5"

>


<input

name="title"

placeholder="Nama transaksi"

className="
w-full
rounded-2xl
border
p-4
outline-none
focus:ring-2
"

required

/>




<div className="grid md:grid-cols-2 gap-4">


<input

name="category"

placeholder="Kategori"

className="
rounded-2xl
border
p-4
"

required

/>



<select

name="type"

className="
rounded-2xl
border
p-4
"

>

<option value="income">
Pemasukan
</option>


<option value="expense">
Pengeluaran
</option>


</select>


</div>




<input

name="amount"

type="number"

placeholder="Jumlah Rupiah"

className="
w-full
rounded-2xl
border
p-4
"

required

/>




<textarea

name="description"

placeholder="Keterangan"

rows={4}

className="
w-full
rounded-2xl
border
p-4
"

/>





<button

className="
btn-premium
flex
items-center
gap-2
"

>

<Plus size={18}/>

Simpan Transaksi

</button>



</form>



</div>


</div>


}


</>

)

}
