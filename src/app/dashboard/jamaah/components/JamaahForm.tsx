"use client";

import { useEffect, useState } from "react";
import {
  X,
  Save,
  User,
  Phone,
  MapPin,
  Briefcase,
  Users
} from "lucide-react";

import {
  Jamaah,
  JamaahGender,
  JamaahStatus
} from "../types";


interface Props {

  open:boolean;

  onClose:()=>void;

  onSubmit:(data:Omit<Jamaah,"id"|"createdAt">)=>void;

  initialData?:Jamaah|null;

}


const initialForm = {

  name:"",

  nik:"",

  gender:"LAKI-LAKI" as JamaahGender,

  birthDate:"",

  phone:"",

  address:"",

  occupation:"",

  group:"",

  status:"AKTIF" as JamaahStatus,

  joinDate:"",

  notes:""

};



export default function JamaahForm({

open,

onClose,

onSubmit,

initialData

}:Props){


const [form,setForm]=useState(initialForm);



useEffect(()=>{

if(initialData){

setForm({

name:initialData.name,

nik:initialData.nik,

gender:initialData.gender,

birthDate:initialData.birthDate,

phone:initialData.phone,

address:initialData.address,

occupation:initialData.occupation,

group:initialData.group,

status:initialData.status,

joinDate:initialData.joinDate,

notes:initialData.notes

});

}else{

setForm(initialForm);

}

},[initialData,open]);



function update(
key:keyof typeof form,
value:string
){

setForm(prev=>({

...prev,

[key]:value

}));

}



function submit(){

if(!form.name || !form.phone){

alert(
"Nama dan nomor HP wajib diisi"
);

return;

}


// kirim sesuai constraint database

onSubmit({

...form,

gender:
form.gender==="LAKI-LAKI"
?
"LAKI-LAKI"
:
"PEREMPUAN"

});


onClose();

}



if(!open)
return null;



return (

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
p-4
overflow-y-auto
">


<div
className="
w-full
max-w-4xl
rounded-3xl
bg-white
shadow-2xl
my-10
overflow-hidden
">


<div
className="
flex
justify-between
items-center
border-b
p-6
">

<div>

<h2 className="text-2xl font-bold">

{
initialData
?
"Edit Data Jamaah"
:
"Tambah Jamaah"
}

</h2>

<p className="text-sm text-gray-500">

Lengkapi informasi jamaah masjid

</p>

</div>


<button
onClick={onClose}
className="rounded-xl p-2 hover:bg-gray-100"
>

<X/>

</button>


</div>



<div className="
grid
gap-5
p-6
">


<div className="
grid
md:grid-cols-2
gap-4
">


<div>

<label className="flex gap-2 font-semibold">

<User size={16}/>

Nama Lengkap

</label>


<input

value={form.name}

onChange={
e=>update(
"name",
e.target.value
)
}

className="
mt-2
w-full
rounded-xl
border
p-3
"

placeholder="Nama jamaah"

/>

</div>



<div>

<label className="font-semibold">

NIK

</label>


<input

value={form.nik}

onChange={
e=>update(
"nik",
e.target.value
)
}

className="
mt-2
w-full
rounded-xl
border
p-3
"

/>

</div>


</div>



<div className="
grid
md:grid-cols-3
gap-4
">


<div>

<label className="font-semibold">

Jenis Kelamin

</label>


<select

value={form.gender}

onChange={
e=>update(
"gender",
e.target.value
)
}

className="
mt-2
w-full
rounded-xl
border
p-3
"

>


<option value="LAKI-LAKI">

Laki-laki

</option>


<option value="PEREMPUAN">

Perempuan

</option>


</select>


</div>



<div>

<label className="font-semibold">

Tanggal Lahir

</label>


<input

type="date"

value={form.birthDate}

onChange={
e=>update(
"birthDate",
e.target.value
)
}

className="
mt-2
w-full
rounded-xl
border
p-3
"

/>

</div>



<div>

<label className="flex gap-2 font-semibold">

<Phone size={16}/>

Nomor HP

</label>


<input

value={form.phone}

onChange={
e=>update(
"phone",
e.target.value
)
}

className="
mt-2
w-full
rounded-xl
border
p-3
"

/>

</div>


</div>



<div className="
grid
md:grid-cols-2
gap-4
">


<div>

<label className="flex gap-2 font-semibold">

<MapPin size={16}/>

Alamat

</label>


<textarea

value={form.address}

onChange={
e=>update(
"address",
e.target.value
)
}

className="
mt-2
w-full
h-28
rounded-xl
border
p-3
"

/>

</div>



<div>

<label className="flex gap-2 font-semibold">

<Briefcase size={16}/>

Pekerjaan

</label>


<input

value={form.occupation}

onChange={
e=>update(
"occupation",
e.target.value
)
}

className="
mt-2
w-full
rounded-xl
border
p-3
"

/>


<label className="flex gap-2 font-semibold mt-4">

<Users size={16}/>

Kelompok

</label>


<input

value={form.group}

onChange={
e=>update(
"group",
e.target.value
)
}

className="
mt-2
w-full
rounded-xl
border
p-3
"

/>


</div>


</div>



<div>

<label className="font-semibold">

Catatan

</label>


<textarea

value={form.notes}

onChange={
e=>update(
"notes",
e.target.value
)
}

className="
mt-2
w-full
h-24
rounded-xl
border
p-3
"

/>


</div>



</div>



<div className="
flex
justify-end
gap-3
border-t
p-6
">


<button

onClick={onClose}

className="
rounded-xl
bg-gray-100
px-5
py-3
"

>

Batal

</button>



<button

onClick={submit}

className="
flex
items-center
gap-2
rounded-xl
bg-emerald-600
px-6
py-3
text-white
font-semibold
"

>

<Save size={18}/>

Simpan Jamaah

</button>


</div>


</div>


</div>

);


}
