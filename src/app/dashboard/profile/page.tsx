"use client";

import {
useEffect,
useState
} from "react";

import {
Camera,
Mail,
ShieldCheck
} from "lucide-react";


export default function ProfilePage(){


const [avatar,setAvatar]=useState("");

const [file,setFile]=useState<File|null>(null);


useEffect(()=>{

const saved =
localStorage.getItem("profile_avatar");

if(saved){

setAvatar(saved);

}

},[]);





function uploadPhoto(){


if(!file)
return;



const reader =
new FileReader();



reader.onload=()=>{


const image =
reader.result as string;


localStorage.setItem(
"profile_avatar",
image
);


setAvatar(image);


alert("Foto profil berhasil disimpan");


};



reader.readAsDataURL(file);



}





return (

<div className="space-y-8">


<h1 className="
text-4xl
font-black
">

Profil Saya

</h1>



<div

className="
max-w-2xl
rounded-[40px]
bg-white
shadow-2xl
overflow-hidden
"

>


<div

className="
bg-gradient-to-br
from-emerald-600
to-teal-700
p-10
text-white
"

>


<div className="flex items-center gap-6">


{

avatar

?

<img

src={avatar}

className="
h-32
w-32
rounded-full
object-cover
border-4
border-white
shadow-xl
"

/>


:

<div

className="
h-32
w-32
rounded-full
bg-white/20
flex
items-center
justify-center
text-5xl
font-black
"

>

H

</div>


}


<div>

<h2 className="
text-3xl
font-black
">

Hamdan Mahmud

</h2>


<p>

Administrator Smart Mosque

</p>

</div>


</div>


</div>





<div className="
p-8
space-y-6
">


<div className="
flex
gap-4
items-center
rounded-3xl
bg-slate-50
p-5
">

<Mail/>

<div>

<p className="text-sm opacity-60">

Email

</p>

<p className="font-bold">

admin@smartmosque.com

</p>

</div>


</div>





<div className="
flex
gap-4
items-center
rounded-3xl
bg-slate-50
p-5
">

<ShieldCheck/>

<div>

<p className="text-sm opacity-60">

Role

</p>


<p className="font-bold">

Takmir Masjid

</p>

</div>


</div>





<div>


<label className="
font-bold
block
mb-3
">

Upload Foto Profil

</label>


<input

type="file"

accept="image/*"

onChange={(e)=>

setFile(
e.target.files?.[0] || null
)

}

className="
border
rounded-2xl
p-3
w-full
"

/>




<button

onClick={uploadPhoto}

className="
mt-5
flex
items-center
gap-3
rounded-3xl
bg-emerald-600
text-white
px-8
py-4
font-black
shadow-xl
"

>

<Camera size={20}/>

Simpan Foto

</button>



</div>



</div>


</div>


</div>

)

}
