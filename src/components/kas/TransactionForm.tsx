"use client";

import { Plus } from "lucide-react";
import { addTransaction } from "@/app/dashboard/kas/actions";


export default function TransactionForm(){


return (

<form

action={addTransaction}

className="space-y-5"

>


<div>

<label className="mb-2 block text-sm font-semibold">

Nama Transaksi

</label>

<input

name="title"

placeholder="Contoh: Donasi Jumat"

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

</div>





<div className="grid gap-5 md:grid-cols-2">


<div>

<label className="mb-2 block text-sm font-semibold">

Kategori

</label>


<input

name="category"

placeholder="Contoh: Donasi"

className="
w-full
rounded-2xl
border
p-4
"

required

/>

</div>





<div>

<label className="mb-2 block text-sm font-semibold">

Jenis Transaksi

</label>


<select

name="type"

className="
w-full
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


</div>





<div>

<label className="mb-2 block text-sm font-semibold">

Jumlah

</label>


<input

name="amount"

type="number"

placeholder="50000"

className="
w-full
rounded-2xl
border
p-4
"

required

/>


</div>





<div>

<label className="mb-2 block text-sm font-semibold">

Keterangan

</label>


<textarea

name="description"

rows={4}

placeholder="Keterangan transaksi"

className="
w-full
rounded-2xl
border
p-4
"

/>


</div>





<button

type="submit"

className="
btn-premium
flex
items-center
gap-2
rounded-2xl
px-6
py-3
"

>


<Plus size={18}/>

Simpan Transaksi


</button>



</form>


);

}
