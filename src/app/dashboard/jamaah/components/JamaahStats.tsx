"use client";


import {

Users,
UserCheck,
UserX,
UserRound,
UserRoundCheck

} from "lucide-react";



interface Props{

statistics:any;

}





export default function JamaahStats({

statistics

}:Props){



const cards=[


{

title:"Total Jamaah",

value:statistics.total,

desc:"Seluruh anggota",

icon:Users

},



{

title:"Jamaah Aktif",

value:statistics.active,

desc:"Masih aktif",

icon:UserCheck

},



{

title:"Tidak Aktif",

value:statistics.inactive,

desc:"Status nonaktif",

icon:UserX

},



{

title:"Laki-laki",

value:statistics.male,

desc:"Jumlah jamaah pria",

icon:UserRound

},



{

title:"Perempuan",

value:statistics.female,

desc:"Jumlah jamaah wanita",

icon:UserRoundCheck

}



];





return (

<div className="
grid
grid-cols-1
sm:grid-cols-2
xl:grid-cols-5
gap-5
">



{

cards.map(card=>(


<div

key={card.title}

className="
rounded-3xl
border
bg-white
p-6
shadow-sm
transition
hover:-translate-y-1
hover:shadow-xl
"

>



<div className="
flex
items-center
justify-between
">


<div className="
rounded-2xl
bg-emerald-100
p-3
text-emerald-700
">

<card.icon size={24}/>

</div>


</div>





<h2 className="
mt-5
text-3xl
font-bold
">

{card.value}

</h2>




<p className="
mt-1
font-semibold
">

{card.title}

</p>




<p className="
text-sm
text-gray-500
">

{card.desc}

</p>




</div>


))


}


</div>


);


}
