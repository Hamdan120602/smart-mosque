"use client";


import {
Menu,
Bell,
ChevronDown,
User,
LogOut,
Settings
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





useEffect(()=>{


async function getUser(){


const {

data

}=await supabase.auth.getUser();



setUser(data.user);


}



getUser();


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

"Takmir";



const avatar =

user?.user_metadata?.avatar ||

null;







return (

<header

className="
h-20
bg-white
border-b
flex
items-center
justify-between
px-6
sticky
top-0
z-40
"

>





<div className="flex items-center gap-4">


<button

onClick={()=>setMobileOpen(true)}

className="
md:hidden
p-2
rounded-xl
hover:bg-slate-100
"

>

<Menu size={22}/>

</button>






<button

onClick={()=>setCollapsed(!collapsed)}

className="
hidden
md:block
p-2
rounded-xl
hover:bg-slate-100
"

>

<Menu size={22}/>

</button>








<div>


<h1

className="
font-black
text-xl
text-slate-800
"

>

Smart Mosque

</h1>


<p className="
text-xs
text-slate-500
"

>

Management System

</p>


</div>


</div>









<div className="flex items-center gap-4">





<button

className="
relative
p-3
rounded-xl
hover:bg-slate-100
"

>

<Bell size={20}/>


<span

className="
absolute
top-2
right-2
h-2
w-2
rounded-full
bg-red-500
"

/>


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
rounded-xl
object-cover
"

/>

:

<div

className="
h-10
w-10
rounded-xl
bg-emerald-600
text-white
flex
items-center
justify-center
font-bold
"

>

{

name
.charAt(0)
.toUpperCase()

}

</div>


}








<div

className="
hidden
md:block
text-left
"

>


<p

className="
font-bold
text-sm
text-slate-800
"

>

{name}

</p>



<p

className="
text-xs
text-slate-500
"

>

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
mt-3
w-64
rounded-2xl
bg-white
shadow-xl
border
p-3
"

>


<div

className="
px-3
py-3
border-b
"

>


<p className="
font-bold
"

>

{name}

</p>


<p className="
text-xs
text-slate-500
"

>

{user?.email}

</p>


</div>








<button

className="
w-full
flex
items-center
gap-3
px-3
py-3
rounded-xl
hover:bg-slate-100
"

>


<User size={18}/>

Profil

</button>







<button

className="
w-full
flex
items-center
gap-3
px-3
py-3
rounded-xl
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
items-center
gap-3
px-3
py-3
rounded-xl
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

);


}
