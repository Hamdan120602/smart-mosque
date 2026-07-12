"use client";

import {
Menu,
Bell,
Search,
Moon,
Sun,
ChevronDown,
User,
Settings,
LogOut
} from "lucide-react";

import {
useState,
useEffect
} from "react";

import {
useRouter
} from "next/navigation";

import {
supabase
} from "@/lib/supabase";

import {
useTheme
} from "@/context/ThemeContext";



interface HeaderProps {

collapsed:boolean;

setCollapsed:React.Dispatch<
React.SetStateAction<boolean>
>;

setMobileOpen:React.Dispatch<
React.SetStateAction<boolean>
>;

}



export default function Header({

collapsed,

setCollapsed,

setMobileOpen

}:HeaderProps){


const router=useRouter();


const {
theme,
setTheme
}=useTheme();



const [user,setUser]=useState<any>(null);

const [search,setSearch]=useState("");

const [notify,setNotify]=useState(false);

const [open,setOpen]=useState(false);


const [notifications,setNotifications]=useState<any[]>([]);



useEffect(()=>{


async function load(){

const {
data
}=await supabase.auth.getUser();


setUser(data.user);



const old=
localStorage.getItem(
"notifications"
);



if(old){

setNotifications(
JSON.parse(old)
);

}

else{

const data=[

{
title:"Selamat Datang",
text:"Smart Mosque siap digunakan"
},

{
title:"Informasi",
text:"Lengkapi data jamaah"
}

];


setNotifications(data);


localStorage.setItem(
"notifications",
JSON.stringify(data)
);


}


}


load();


},[]);





function searchMenu(){


const value=
search.toLowerCase();



const menus=[

{
key:"dashboard",
url:"/dashboard"
},

{
key:"jamaah",
url:"/dashboard/jamaah"
},

{
key:"kas",
url:"/dashboard/kas"
},

{
key:"agenda",
url:"/dashboard/agenda"
},

{
key:"laporan",
url:"/dashboard/laporan"
},

{
key:"profil",
url:"/dashboard/profile"
},

{
key:"pengaturan",
url:"/dashboard/settings"
}

];



const found =
menus.find(

item=>

item.key.includes(value)

);



if(found){

router.push(found.url);

setSearch("");

}

else{

alert("Menu tidak ditemukan");

}


}





async function logout(){

await supabase.auth.signOut();

router.push("/auth/login");

}




return(


<header

className="
relative
z-40
h-20
mx-4
mt-4
bg-white/90
backdrop-blur-xl
border
border-slate-200
rounded-3xl
shadow-lg
flex
items-center
justify-between
px-6
"

>


<div className="flex items-center gap-4">


<button

onClick={()=>setMobileOpen(true)}

className="md:hidden p-2 rounded-xl"

>

<Menu/>

</button>



<button

onClick={()=>setCollapsed(!collapsed)}

className="hidden md:block p-2 rounded-xl"

>

<Menu/>

</button>


<h1 className="font-black text-xl">

🕌 Smart Mosque

</h1>


</div>




<div className="flex items-center gap-3">



<div className="
hidden
md:flex
bg-slate-100
rounded-2xl
px-4
items-center
">


<Search size={18}/>


<input

value={search}

onChange={(e)=>
setSearch(e.target.value)
}

onKeyDown={(e)=>{

if(e.key==="Enter")
searchMenu();

}}

placeholder="Cari menu..."

className="
bg-transparent
outline-none
p-3
w-44
"

/>


</div>





<button

onClick={()=>{

setTheme(

theme==="emerald"

?

"royal"

:

"emerald"

)

}}

className="
p-3
rounded-2xl
hover:bg-slate-100
"

>

{

theme==="emerald"

?

<Moon/>

:

<Sun/>

}

</button>




<div className="relative">


<button

onClick={()=>setNotify(!notify)}

className="
p-3
rounded-2xl
hover:bg-slate-100
relative
"

>

<Bell/>


{

notifications.length>0 &&

<span

className="
absolute
top-2
right-2
bg-red-500
w-2
h-2
rounded-full
"

/>

}


</button>



{

notify &&

<div

className="
absolute
right-0
mt-3
w-72
bg-white
rounded-3xl
shadow-xl
border
p-4
"

>

<h3 className="font-black mb-3">

Notifikasi

</h3>


{

notifications.map((n,i)=>(

<div

key={i}

className="
py-3
border-b
"

>

<p className="font-bold text-sm">

{n.title}

</p>

<p className="text-xs">

{n.text}

</p>


</div>

))


}


</div>


}


</div>






<div className="relative">


<button

onClick={()=>setOpen(!open)}

className="
flex
items-center
gap-3
rounded-3xl
hover:bg-slate-100
p-2
"

>


<div

className="
w-10
h-10
rounded-full
bg-emerald-600
text-white
flex
items-center
justify-center
font-black
"

>

{

(user?.email?.[0]||"A")
.toUpperCase()

}

</div>


<ChevronDown/>


</button>



{

open &&

<div

className="
absolute
right-0
mt-3
w-64
bg-white
rounded-3xl
shadow-xl
border
p-3
"

>


<button

onClick={()=>router.push("/dashboard/profile")}

className="
w-full
flex
gap-3
p-3
rounded-xl
hover:bg-slate-100
"

>

<User/>

Profil

</button>



<button

onClick={()=>router.push("/dashboard/settings")}

className="
w-full
flex
gap-3
p-3
rounded-xl
hover:bg-slate-100
"

>

<Settings/>

Pengaturan

</button>



<button

onClick={logout}

className="
w-full
flex
gap-3
p-3
rounded-xl
text-red-600
hover:bg-red-50
"

>

<LogOut/>

Keluar

</button>


</div>


}



</div>



</div>


</header>


)

}
