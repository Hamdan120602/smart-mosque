"use client";

import {
  Menu,
  Bell,
  ChevronDown,
  User,
  LogOut,
  Settings,
  Moon,
  Sun
} from "lucide-react";

import {
  useEffect,
  useState
} from "react";

import {
  supabase
} from "@/lib/supabase";

import {
  useRouter
} from "next/navigation";


import Image from "next/image";



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


const router = useRouter();


const [user,setUser]=useState<any>(null);

const [open,setOpen]=useState(false);

const [dark,setDark]=useState(false);
const [notify,setNotify]=useState(false);



useEffect(()=>{

async function load(){

const {data}=await supabase.auth.getUser();

setUser(data.user);

}


load();


},[]);



async function logout(){

await supabase.auth.signOut();

router.push("/auth/login");

router.refresh();

}



const name =
user?.user_metadata?.name ||
user?.email?.split("@")[0] ||
"Admin Masjid";


const role =
user?.user_metadata?.role ||
"Administrator Masjid";




return (

<header

className="

sticky

top-4

z-40

mx-4

mb-4

h-20

rounded-3xl

border

bg-white/80

backdrop-blur-xl

shadow-xl

flex

items-center

justify-between

px-6

"

>


<div className="flex items-center gap-4">


<button

onClick={()=>setMobileOpen(true)}

className="md:hidden rounded-2xl p-3 hover:bg-slate-100"

>

<Menu size={22}/>

</button>



<button

onClick={()=>setCollapsed(!collapsed)}

className="hidden md:flex rounded-2xl p-3 hover:bg-slate-100"

>

<Menu size={22}/>

</button>





<div className="flex items-center gap-3">


<Image

src="/icon-192.png"

width={45}

height={45}

alt="Smart Mosque"

className="rounded-2xl shadow"

/>



<div>

<h1 className="font-black text-lg">

Smart Mosque

</h1>


<p className="text-xs opacity-60">

Digital Management System

</p>


</div>


</div>


</div>







<div className="flex items-center gap-3">





<button

className="

relative

rounded-2xl

p-3

hover:bg-slate-100

transition

"

>

<Bell size={20}/>


<span

className="

absolute

right-2

top-2

h-2

w-2

rounded-full

bg-red-500

"

/>


</button>






<button

onClick={()=>setDark(!dark)}

className="

rounded-2xl

p-3

hover:bg-slate-100

transition

"

>

{

dark

?

<Sun size={20}/>

:

<Moon size={20}/>

}

</button>








<div className="relative">


<button

onClick={()=>setOpen(!open)}

className="

flex

items-center

gap-3

rounded-2xl

px-3

py-2

hover:bg-slate-100

transition

"

>


<div

className="

h-11

w-11

rounded-2xl

bg-gradient-to-br

from-emerald-500

to-teal-700

text-white

flex

items-center

justify-center

font-black

shadow

"

>

{

name.charAt(0).toUpperCase()

}

</div>



<div className="hidden md:block text-left">


<p className="font-bold text-sm">

{name}

</p>


<p className="text-xs opacity-60">

{role}

</p>


</div>



<ChevronDown size={16}/>



</button>






{

open &&

<div

className="

absolute

right-0

mt-4

w-64

rounded-3xl

bg-white

border

shadow-2xl

p-3

"

>


<div className="p-4 border-b">

<p className="font-bold">

{name}

</p>


<p className="text-xs opacity-60">

{user?.email}

</p>

</div>



<button

onClick={()=>router.push("/dashboard/profile")}

className="

w-full

flex

gap-3

items-center

p-3

rounded-2xl

hover:bg-slate-100

"

>

<User size={18}/>

Profil

</button>




<button

onClick={()=>router.push("/dashboard/settings")}

className="

w-full

flex

gap-3

items-center

p-3

rounded-2xl

hover:bg-slate-100

"

>

<Settings size={18}/>

Pengaturan

</button>




<button

onClick={logout}

className="

w-full

flex

gap-3

items-center

p-3

rounded-2xl

hover:bg-red-50

text-red-600

"

>

<LogOut size={18}/>

Keluar

</button>



</div>

}



</div>


</div>


</header>


)

}
