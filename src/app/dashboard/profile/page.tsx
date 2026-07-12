"use client";

import {
useEffect,
useState
} from "react";

import {
supabase
} from "@/lib/supabase";



export default function ProfilePage(){


const [user,setUser]=useState<any>(null);

const [avatar,setAvatar]=useState("");

const [file,setFile]=useState<File|null>(null);

const [loading,setLoading]=useState(false);



useEffect(()=>{


async function load(){

const {
data
}=await supabase.auth.getUser();


setUser(data.user);


setAvatar(

data.user?.user_metadata?.avatar || ""

);


}


load();


},[]);





async function uploadAvatar(){


if(!file || !user)
return;


setLoading(true);



const filename =

`${Date.now()}-${file.name}`;



const {

error

}=await supabase.storage

.from("avatars")

.upload(
filename,
file,
{
upsert:true
}
);



if(error){

alert(error.message);

setLoading(false);

return;

}



const {

data

}=supabase.storage

.from("avatars")

.getPublicUrl(filename);




await supabase.auth.updateUser({

data:{
avatar:data.publicUrl
}

});



setAvatar(data.publicUrl);


setLoading(false);


alert("Foto profil berhasil diganti");


}



return (

<div className="space-y-8">


<h1 className="
text-3xl
font-black
">

Profil Admin

</h1>



<div className="
rounded-3xl
bg-white
shadow-xl
p-8
max-w-xl
">


<div className="flex items-center gap-6">


{

avatar

?

<img

src={avatar}

className="
h-28
w-28
rounded-full
object-cover
shadow
"

/>

:

<div

className="
h-28
w-28
rounded-full
bg-emerald-600
text-white
flex
items-center
justify-center
text-4xl
font-black
"

>

{

user?.email
?.charAt(0)
.toUpperCase()

}

</div>


}



<div>

<h2 className="font-bold text-xl">

{
user?.email
}

</h2>


<p className="text-sm text-slate-500">

Administrator Masjid

</p>


</div>


</div>



<div className="mt-8">


<input

type="file"

accept="image/*"

onChange={(e)=>

setFile(
e.target.files?.[0] || null
)

}

className="
block
w-full
border
rounded-2xl
p-3
"

/>



<button

onClick={uploadAvatar}

disabled={loading}

className="
mt-4
rounded-2xl
bg-emerald-600
text-white
px-6
py-3
font-bold
"

>

{

loading

?

"Menyimpan..."

:

"Ganti Foto Profil"

}

</button>


</div>


</div>


</div>

)

}
