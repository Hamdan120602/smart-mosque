"use client";


import {
useState
} from "react";


import {

Plus,
Search,
CalendarDays

} from "lucide-react";


import AgendaHeader from "./components/AgendaHeader";

import AgendaStats from "./components/AgendaStats";

import AgendaForm from "./components/AgendaForm";

import AgendaCard from "./components/AgendaCard";


import {

useAgenda

} from "./hooks/useAgenda";


import {

Agenda

} from "./types";





export default function AgendaPage(){



const {


agenda,

loading,

createAgenda,

updateAgenda,

deleteAgenda,

duplicateAgenda,

changeStatus,

statistics

}=useAgenda();





const [openForm,setOpenForm]=useState(false);


const [selected,setSelected]=useState<Agenda|null>(null);


const [search,setSearch]=useState("");



const [category,setCategory]=useState("ALL");






function openCreate(){

setSelected(null);

setOpenForm(true);

}





function openEdit(item:Agenda){

setSelected(item);

setOpenForm(true);

}





function submit(data:any){



if(selected){


updateAgenda(

selected.id,

data

);


}else{


createAgenda(data);


}


}





const filtered=agenda.filter(item=>{


const matchSearch=

item.title
.toLowerCase()
.includes(
search.toLowerCase()
);



const matchCategory=

category==="ALL"
||
item.category===category;



return matchSearch && matchCategory;


});







if(loading){


return (

<div className="
flex
h-96
items-center
justify-center
">


<div className="
animate-pulse
text-xl
font-semibold
text-gray-500
">

Memuat Agenda...

</div>


</div>


);


}





return (

<div className="
space-y-8
">





<AgendaHeader

onAdd={openCreate}

/>






<AgendaStats

statistics={statistics}

/>







<div className="
rounded-3xl
bg-white
p-6
shadow-sm
border
">



<div className="
flex
flex-col
gap-4
lg:flex-row
lg:items-center
lg:justify-between
">





<div className="
relative
flex-1
">



<Search

className="
absolute
left-4
top-3.5
text-gray-400
"

size={20}

/>



<input

className="
w-full
rounded-2xl
border
py-3
pl-12
pr-4
outline-none
focus:ring-2
focus:ring-emerald-500
"

placeholder="Cari agenda..."

value={search}

onChange={
e=>setSearch(
e.target.value
)
}

/>



</div>






<div className="
flex
gap-3
">


<select

className="
rounded-2xl
border
px-5
py-3
"

value={category}

onChange={
e=>setCategory(
e.target.value
)
}

>


<option value="ALL">

Semua Kategori

</option>


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






<button

onClick={openCreate}

className="
flex
items-center
gap-2
rounded-2xl
bg-emerald-600
px-5
py-3
font-semibold
text-white
hover:bg-emerald-700
"

>


<Plus size={18}/>

Agenda Baru


</button>



</div>



</div>



</div>








{

filtered.length===0

?

(


<div className="
flex
flex-col
items-center
justify-center
rounded-3xl
border
bg-white
py-20
">


<div className="
rounded-full
bg-emerald-100
p-5
text-emerald-700
">

<CalendarDays size={45}/>

</div>



<h2 className="
mt-5
text-xl
font-bold
">

Belum ada agenda

</h2>



<p className="
mt-2
text-gray-500
">

Tambahkan kegiatan masjid pertama

</p>



</div>


)


:

(



<div className="
grid
gap-6
md:grid-cols-2
xl:grid-cols-3
">


{

filtered.map(item=>(


<AgendaCard

key={item.id}

item={item}

onEdit={openEdit}

onDelete={deleteAgenda}

onDuplicate={duplicateAgenda}

onStatus={changeStatus}

/>


))


}


</div>



)



}








<AgendaForm

open={openForm}

onClose={()=>setOpenForm(false)}

onSubmit={submit}

initialData={selected}

/>







</div>


);


}
