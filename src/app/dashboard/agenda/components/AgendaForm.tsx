"use client";

import { useEffect, useState } from "react";
import {
  CalendarDays,
  Clock,
  MapPin,
  User,
  Users,
  X,
  Save
} from "lucide-react";

import {
  Agenda,
  AgendaCategory,
  AgendaPriority,
  AgendaStatus
} from "../types";



interface Props {

open:boolean;

onClose:()=>void;

onSubmit:(data:Omit<Agenda,"id"|"createdAt">)=>void;

initialData?:Agenda|null;

}



const defaultForm = {

title:"",

description:"",

category:"IBADAH" as AgendaCategory,

date:"",

startTime:"",

endTime:"",

location:"",

coordinator:"",

participants:0,

status:"SCHEDULED" as AgendaStatus,

priority:"MEDIUM" as AgendaPriority

};





export default function AgendaForm({

open,

onClose,

onSubmit,

initialData

}:Props){



const [form,setForm]=useState(defaultForm);



useEffect(()=>{


if(initialData){

setForm({

title:initialData.title,

description:initialData.description,

category:initialData.category,

date:initialData.date,

startTime:initialData.startTime,

endTime:initialData.endTime,

location:initialData.location,

coordinator:initialData.coordinator,

participants:initialData.participants,

status:initialData.status,

priority:initialData.priority

});


}else{


setForm(defaultForm);


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
!form.title ||
!form.date ||
!form.location
){

alert(
"Judul, tanggal dan lokasi wajib diisi"
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
max-w-3xl
max-h-[90vh]
overflow-y-auto
rounded-3xl
bg-white
shadow-2xl
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
"Edit Agenda"
:
"Tambah Agenda"

}

</h2>


<p className="
text-sm
text-gray-500
">

Lengkapi informasi kegiatan masjid

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



<div>


<label className="text-sm font-semibold">

Nama Kegiatan

</label>


<input

className="
mt-2
w-full
rounded-xl
border
p-3
outline-none
focus:ring-2
focus:ring-emerald-500
"

placeholder="Contoh: Kajian Subuh Minggu"

value={form.title}

onChange={
e=>update(
"title",
e.target.value
)
}

/>


</div>





<div>


<label className="text-sm font-semibold">

Deskripsi

</label>


<textarea

className="
mt-2
w-full
rounded-xl
border
p-3
h-28
"

placeholder="Detail kegiatan"

value={form.description}

onChange={
e=>update(
"description",
e.target.value
)
}

/>


</div>







<div className="
grid
md:grid-cols-2
gap-4
">



<div>

<label className="text-sm font-semibold flex gap-2">

<CalendarDays size={16}/>

Tanggal

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

value={form.date}

onChange={
e=>update(
"date",
e.target.value
)
}

/>


</div>





<div>

<label className="text-sm font-semibold flex gap-2">

<Clock size={16}/>

Waktu

</label>



<div className="flex gap-2 mt-2">


<input

type="time"

className="
w-full
rounded-xl
border
p-3
"

value={form.startTime}

onChange={
e=>update(
"startTime",
e.target.value
)
}

/>



<input

type="time"

className="
w-full
rounded-xl
border
p-3
"

value={form.endTime}

onChange={
e=>update(
"endTime",
e.target.value
)
}

/>



</div>


</div>



</div>







<div className="
grid
md:grid-cols-2
gap-4
">



<div>

<label className="text-sm font-semibold">

Kategori

</label>


<select

className="
mt-2
w-full
rounded-xl
border
p-3
"

value={form.category}

onChange={
e=>update(
"category",
e.target.value
)
}

>

<option value="IBADAH">
Ibadah
</option>

<option value="KAJIAN">
Kajian
</option>

<option value="SOSIAL">
Sosial
</option>

<option value="RAPAT">
Rapat
</option>

<option value="LAINNYA">
Lainnya
</option>


</select>


</div>





<div>

<label className="text-sm font-semibold">

Prioritas

</label>


<select

className="
mt-2
w-full
rounded-xl
border
p-3
"

value={form.priority}

onChange={
e=>update(
"priority",
e.target.value
)
}

>


<option value="LOW">
Rendah
</option>


<option value="MEDIUM">
Sedang
</option>


<option value="HIGH">
Tinggi
</option>


</select>


</div>



</div>







<div className="
grid
md:grid-cols-3
gap-4
">



<div>


<label className="text-sm font-semibold flex gap-2">

<MapPin size={16}/>

Lokasi

</label>


<input

className="
mt-2
w-full
rounded-xl
border
p-3
"

value={form.location}

onChange={
e=>update(
"location",
e.target.value
)
}

/>


</div>





<div>


<label className="text-sm font-semibold flex gap-2">

<User size={16}/>

Penanggung Jawab

</label>


<input

className="
mt-2
w-full
rounded-xl
border
p-3
"

value={form.coordinator}

onChange={
e=>update(
"coordinator",
e.target.value
)
}

/>


</div>





<div>


<label className="text-sm font-semibold flex gap-2">

<Users size={16}/>

Peserta

</label>


<input

type="number"

className="
mt-2
w-full
rounded-xl
border
p-3
"

value={form.participants}

onChange={
e=>update(
"participants",
Number(e.target.value)
)
}

/>


</div>



</div>





<div>

<label className="text-sm font-semibold">

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

<option value="DRAFT">
Draft
</option>

<option value="SCHEDULED">
Terjadwal
</option>

<option value="ONGOING">
Berlangsung
</option>

<option value="DONE">
Selesai
</option>

<option value="CANCELLED">
Dibatalkan
</option>


</select>


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

Simpan Agenda


</button>



</div>





</div>


</div>


);


}
