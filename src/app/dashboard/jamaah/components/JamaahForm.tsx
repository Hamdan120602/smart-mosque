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

gender:"LAKI_LAKI" as JamaahGender,

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
key:string,
value:any
){


setForm(prev=>({

...prev,

[key]:value

}));



}





function submit(){


if(
!form.name ||
!form.phone
){

alert(
"Nama dan nomor HP wajib diisi"
);

return;

}



onSubmit(form);


onClose();


}





if(!open)
return null;






return (

<div className="
fixed
inset-0
z-50
flex
items-center
justify-center
bg-black/40
backdrop-blur-sm
p-4
">



<div className="
w-full
max-w-4xl
rounded-3xl
bg-white
shadow-2xl
overflow-hidden
">





<div className="
flex
items-center
justify-between
border-b
p-6
">


<div>

<h2 className="
text-2xl
font-bold
">

{

initialData
?
"Edit Data Jamaah"
:
"Tambah Jamaah"

}

</h2>


<p className="
text-sm
text-gray-500
">

Lengkapi informasi jamaah masjid

</p>


</div>




<button

onClick={onClose}

className="
rounded-xl
p-2
hover:bg-gray-100
"

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

<label className="
flex
items-center
gap-2
text-sm
font-semibold
">

<User size={16}/>

Nama Lengkap

</label>


<input

className="
mt-2
w-full
rounded-xl
border
p-3
"

placeholder="Nama jamaah"

value={form.name}

onChange={
e=>update(
"name",
e.target.value
)
}

/>


</div>





<div>

<label className="
text-sm
font-semibold
">

NIK

</label>


<input

className="
mt-2
w-full
rounded-xl
border
p-3
"

placeholder="Nomor NIK"

value={form.nik}

onChange={
e=>update(
"nik",
e.target.value
)
}

/>


</div>



</div>







<div className="
grid
md:grid-cols-3
gap-4
">



<div>

<label className="
text-sm
font-semibold
">

Jenis Kelamin

</label>


<select

className="
mt-2
w-full
rounded-xl
border
p-3
"

value={form.gender}

onChange={
e=>update(
"gender",
e.target.value
)
}

>


<option value="LAKI_LAKI">

Laki-laki

</option>


<option value="PEREMPUAN">

Perempuan

</option>


</select>


</div>





<div>

<label className="
text-sm
font-semibold
">

Tanggal Lahir

</label>


<input

type="date"

className="
mt-2
w-full
rounded-xl
border
p-3
"

value={form.birthDate}

onChange={
e=>update(
"birthDate",
e.target.value
)
}

/>


</div>





<div>

<label className="
flex
items-center
gap-2
text-sm
font-semibold
">

<Phone size={16}/>

Nomor HP

</label>


<input

className="
mt-2
w-full
rounded-xl
border
p-3
"

placeholder="08xxxx"

value={form.phone}

onChange={
e=>update(
"phone",
e.target.value
)
}

/>


</div>




</div>








<div className="
grid
md:grid-cols-2
gap-4
">



<div>

<label className="
flex
items-center
gap-2
text-sm
font-semibold
">

<MapPin size={16}/>

Alamat

</label>


<textarea

className="
mt-2
h-28
w-full
rounded-xl
border
p-3
"

value={form.address}

onChange={
e=>update(
"address",
e.target.value
)
}

/>


</div>






<div>


<label className="
flex
items-center
gap-2
text-sm
font-semibold
">

<Briefcase size={16}/>

Pekerjaan

</label>



<input

className="
mt-2
w-full
rounded-xl
border
p-3
"

value={form.occupation}

onChange={
e=>update(
"occupation",
e.target.value
)
}

/>



<label className="
mt-4
flex
items-center
gap-2
text-sm
font-semibold
">

<Users size={16}/>

Kelompok Kajian

</label>



<input

className="
mt-2
w-full
rounded-xl
border
p-3
"

value={form.group}

onChange={
e=>update(
"group",
e.target.value
)
}

/>


</div>




</div>







<div className="
grid
md:grid-cols-3
gap-4
">



<div>

<label className="
text-sm
font-semibold
">

Status

</label>


<select

className="
mt-2
w-full
rounded-xl
border
p-3
"

value={form.status}

onChange={
e=>update(
"status",
e.target.value
)
}

>


<option value="AKTIF">

Aktif

</option>


<option value="NONAKTIF">

Tidak Aktif

</option>


</select>


</div>





<div>

<label className="
text-sm
font-semibold
">

Tanggal Bergabung

</label>


<input

type="date"

className="
mt-2
w-full
rounded-xl
border
p-3
"

value={form.joinDate}

onChange={
e=>update(
"joinDate",
e.target.value
)
}

/>


</div>




</div>







<div>

<label className="
text-sm
font-semibold
">

Catatan

</label>


<textarea

className="
mt-2
h-24
w-full
rounded-xl
border
p-3
"

value={form.notes}

onChange={
e=>update(
"notes",
e.target.value
)
}

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
font-semibold
text-white
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
