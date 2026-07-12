"use client";

import {
Menu,
Bell,
Search,
Sun,
Moon,
ChevronDown,
User,
Settings,
LogOut
} from "lucide-react";

import {
useEffect,
useState
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


interface HeaderProps{

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

const [open,setOpen]=useState(false);

const [search,setSearch]=useState("");

const [notify,setNotify]=useState(false);

const [notifications,setNotifications]=useState<any[]>([]);



useEffect(()=>{


async function load(){


const {

data

}=await supabase.auth.getUser();


setUser(data.user);




const agenda =
await supabase

.from("agenda")

.select("*")

.order("date",
{
ascending:false
})

.limit(3);



const transaksi =
await supabase

.from("transactions")

.select("*")

.order("created_at",
{
ascending:false
})

.limit(3);



const result=[

...(agenda.data||[]).map((x:any)=>({

title:"Agenda baru",

text:x.title

})),


...(transaksi.data||[]).map((x:any)=>({

title:"Transaksi",

text:x.title

}))

];


setNotifications(result);


}


load();


},[]);





function searchMenu(){


const value=
search.toLowerCase();



const menus=[

{
name:"dashboard",
url:"/dashboard"
},

{
name:"jamaah",
url:"/dashboard/jamaah"
},

{
name:"kas",
url:"/dashboard/kas"
},

{
name:"agenda",
url:"/dashboard/agenda"
},

{
name:"laporan",
url:"/dashboard/laporan"
},

{
name:"profil",
url:"/dashboard/profile"
},

{
name:"pengaturan",
url:"/dashboard/settings"
}

];



const found =
menus.find(x=>

x.name.includes(value)

);



if(found){

router.push(found.url);

setSearch("");

}


}





async function logout(){

await supabase.auth.signOut();

router.push("/auth/login");

}





const name=

user?.email
?.split("@")[0]
||
"Admin";





return(


<header

className="
fixed
top-0
left-0
right-0
z-50
h-20
bg-white/90
backdrop-blur-xl
border-b
flex
items-center
justify-between
px-6
"

>


<div className="flex items-center gap-4">


<button

onClick={()=>setMobileOpen(true)}

className="md:hidden p-3 rounded-2xl"

>

<Menu/>

</button>



<button

onClick={()=>setCollapsed(!collapsed)}

className="hidden md:block p-3 rounded-2xl"

>

<Menu/>

</button>




<h1 className="font-black text-xl">

🕌 Smart Mosque

</h1>


</div>





<div className="flex items-center gap-3">


<div

className="
hidden
md:flex
items-center
bg-slate-100
rounded-2xl
px-4
"

>


<Search size={18}/>


<input

value={search}

onChange={(e)=>setSearch(e.target.value)}

onKeyDown={(e)=>{

if(e.key==="Enter")
searchMenu();

}}

placeholder="Cari menu..."

className="
bg-transparent
outline-none
p-3
w-40
"

/>


</div>




<button

onClick={()=>setTheme(

theme==="emerald"

?

"royal"

:

"emerald"

)}

className="
rounded-2xl
p-3
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
relative
p-3
rounded-2xl
hover:bg-slate-100
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
h-2
w-2
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
mt-4
w-80
bg-white
rounded-3xl
shadow-2xl
border
p-5
"

>


<h3 className="font-black mb-4">

Notifikasi

</h3>


{

notifications.length===0

?

<p className="text-sm opacity-60">

Tidak ada aktivitas

</p>


:

notifications.map((n,i)=>(

<div

key={i}

className="
border-b
py-3
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
p-2
hover:bg-slate-100
"

>


<div

className="
h-10
w-10
rounded-full
bg-emerald-600
text-white
flex
items-center
justify-center
font-black
"

>

{name[0].toUpperCase()}

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
className="w-full flex gap-3 p-3 rounded-xl hover:bg-slate-100"
>

<User/>

Profil

</button>


<button
onClick={()=>router.push("/dashboard/settings")}
className="w-full flex gap-3 p-3 rounded-xl hover:bg-slate-100"
>

<Settings/>

Pengaturan

</button>


<button
onClick={logout}
className="w-full flex gap-3 p-3 rounded-xl text-red-600 hover:bg-red-50"
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
