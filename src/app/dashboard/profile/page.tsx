"use client";

import {
  useEffect,
  useState
} from "react";

import {
  supabase
} from "@/lib/supabase";

import {
  Camera,
  Save,
  LogOut
} from "lucide-react";

import {
  useRouter
} from "next/navigation";


export default function ProfilePage(){

const router = useRouter();


const [name,setName]=useState("");

const [role,setRole]=useState("Takmir");

const [avatar,setAvatar]=useState("");

const [file,setFile]=useState<File|null>(null);

const [loading,setLoading]=useState(false);



useEffect(()=>{

async function loadUser(){

const {
data
}=await supabase.auth.getUser();


const user=data.user;


if(user){

setName(
user.user_metadata?.name || 
user.email?.split("@")[0] ||
"Admin"
);


setRole(
user.user_metadata?.role ||
"Takmir"
);


setAvatar(
user.user_metadata?.avatar ||
""
);

}

}


loadUser();


},[]);





async function uploadAvatar(){

if(!file) return avatar;


const filename =
`${Date.now()}-${file.name}`;


const {
error
}=await supabase.storage

.from("avatars")

.upload(
filename,
file
);



if(error){

console.log(error);

return avatar;

}



const {
data
}=supabase.storage

.from("avatars")

.getPublicUrl(filename);



return data.publicUrl;


}







async function saveProfile(){

setLoading(true);


let avatarUrl=avatar;


if(file){

avatarUrl=await uploadAvatar();

}



const {
error
}=await supabase.auth.updateUser({

data:{

name,

role,

avatar:avatarUrl

}

});



if(error){

alert(error.message);

setLoading(false);

return;

}



setAvatar(avatarUrl);


setLoading(false);


alert(
"Profil berhasil disimpan"
);


}






async function logout(){

await supabase.auth.signOut();

router.push("/auth/login");

router.refresh();

}






return (

<div className="
p-6
lg:p-10
space-y-8
">


<div>

<h1 className="
text-3xl
font-black
text-slate-800
">

Profil Pengguna

</h1>


<p className="
text-slate-500
mt-1
">

Kelola akun Smart Mosque

</p>


</div>







<div className="
max-w-xl
bg-white
rounded-3xl
shadow-xl
border
p-8
space-y-6
">





<div className="
flex
items-center
gap-5
">


<div className="
relative
">

{

avatar ?

<img

src={avatar}

className="
h-24
w-24
rounded-3xl
object-cover
"

/>

:

<div

className="
h-24
w-24
rounded-3xl
bg-emerald-600
text-white
flex
items-center
justify-center
text-3xl
font-bold
"

>

{name.charAt(0).toUpperCase()}

</div>

}



<label

className="
absolute
right-0
bottom-0
bg-white
shadow
rounded-full
p-2
cursor-pointer
"

>

<Camera size={18}/>


<input

type="file"

hidden

accept="image/*"

onChange={
e=>
setFile(
e.target.files?.[0] || null
)
}

/>


</label>


</div>


</div>








<div>


<label className="
text-sm
font-bold
"

>

Nama

</label>


<input

value={name}

onChange={
e=>setName(e.target.value)
}

className="
mt-2
w-full
rounded-2xl
border
p-4
"

/>


</div>








<div>


<label className="
text-sm
font-bold
"

>

Role

</label>


<input

value={role}

onChange={
e=>setRole(e.target.value)
}

className="
mt-2
w-full
rounded-2xl
border
p-4
"

/>


</div>








<button

onClick={saveProfile}

disabled={loading}

className="
w-full
rounded-2xl
bg-emerald-600
hover:bg-emerald-700
py-4
text-white
font-bold
flex
items-center
justify-center
gap-2
"

>


<Save size={20}/>


{

loading
?
"Menyimpan..."
:
"Simpan Profil"

}


</button>








<button

onClick={logout}

className="
w-full
rounded-2xl
border
py-4
text-red-600
font-bold
flex
items-center
justify-center
gap-2
hover:bg-red-50
"

>

<LogOut size={20}/>

Logout

</button>







</div>


</div>


);


}
