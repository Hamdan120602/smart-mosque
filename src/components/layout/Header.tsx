"use client";

import { Menu, Bell } from "lucide-react";


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


return (

<header className="
h-20
bg-white
border-b
flex
items-center
justify-between
px-6
sticky
top-0
z-30
">


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

<h1 className="
font-bold
text-xl
text-slate-800
">

Smart Mosque

</h1>


<p className="
text-sm
text-slate-500
">

Management System

</p>

</div>


</div>




<div className="flex items-center gap-4">


<button
className="
p-2
rounded-xl
hover:bg-slate-100
"

>

<Bell size={20}/>

</button>



<div className="
hidden
md:block
text-right
">

<p className="
font-semibold
text-sm
">

Admin Masjid

</p>

<p className="
text-xs
text-slate-500
">

Super Administrator

</p>

</div>


</div>


</header>

);

}
