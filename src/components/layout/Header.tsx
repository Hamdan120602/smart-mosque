"use client";

import {
Menu,
Bell,
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


interface HeaderProps {

collapsed:boolean;

setCollapsed:React.Dispatch<React.SetStateAction<boolean>>;

setMobileOpen:React.Dispatch<React.SetStateAction<boolean>>;

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

const [notify,setNotify]=useState(false);



useEffect(()=>{

async function load(){

const {
data
}=await supabase.auth.getUser();

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


const avatar =
user?.user_metadata?.avatar ||
null;



return (

<header

className="
fixed
top-0
right-0
left-0
h-20
z-50
bg-white/80
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

className="
md:hidden
rounded-2xl
p-3
hover:bg-slate-100
"

>

<Menu/>

</button>



<button

onClick={()=>setCollapsed(!collapsed)}

className="
hidden
md:block
rounded-2xl
p-3
hover:bg-slate-100
"

>

<Menu/>

</button>


<div>

<h1 className="font-black text-xl">

🕌 Smart Mosque

</h1>

<p className="text-xs text-slate-500">

Management System

</p>

</div>


</div>



<div className="flex items-center gap-3">



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
rounded-2xl
p-3
hover:bg-slate-100
"

>

{

theme==="emerald"

?

<Moon size={20}/>

:

<Sun size={20}/>

}


</button>




<div className="relative">


<button

onClick={()=>setNotify(!notify)}

className="
relative
rounded-2xl
p-3
hover:bg-slate-100
"

>

<Bell/>

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


{

notify &&

<div

className="
absolute
right-0
mt-4
w-72
rounded-3xl
bg-white
shadow-2xl
border
p-5
"

>

<h3 className="font-black">

Notifikasi

</h3>


<p className="text-sm text-slate-500 mt-2">

Tidak ada notifikasi baru

</p>


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
px-3
py-2
hover:bg-slate-100
"

>


{

avatar

?

<img

src={avatar}

className="
h-10
w-10
rounded-full
object-cover
"

/>


:

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
font-bold
"

>

{
name.charAt(0)
.toUpperCase()
}

</div>

}



<div className="hidden md:block text-left">

<p className="font-bold text-sm">

{name}

</p>

<p className="text-xs text-slate-500">

Takmir

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
mt-3
w-64
rounded-3xl
bg-white
shadow-2xl
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
