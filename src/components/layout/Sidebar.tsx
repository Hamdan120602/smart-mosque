'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import {
LayoutDashboard,
WalletCards,
Users,
CalendarDays,
FileText,
Settings,
ChevronLeft,
ChevronRight,
Landmark,
X
} from 'lucide-react';



const menus=[

{
name:'Dashboard',
href:'/dashboard',
icon:LayoutDashboard
},

{
name:'Kas Masjid',
href:'/dashboard/kas',
icon:WalletCards
},

{
name:'Jamaah',
href:'/dashboard/jamaah',
icon:Users
},

{
name:'Agenda',
href:'/dashboard/agenda',
icon:CalendarDays
},

{
name:'Laporan',
href:'/dashboard/laporan',
icon:FileText
}

];



interface Props{

collapsed:boolean;

setCollapsed:(v:boolean)=>void;

mobileOpen?:boolean;

setMobileOpen?:(v:boolean)=>void;

}



export default function Sidebar({

collapsed,
setCollapsed,
mobileOpen=false,
setMobileOpen

}:Props){


const pathname=usePathname();



return (

<aside

className={`

fixed
top-0
left-0
z-50
h-screen

transition-all
duration-300

${collapsed
?
'w-[88px]'
:
'w-[270px]'
}

${mobileOpen
?
'translate-x-0'
:
'-translate-x-full md:translate-x-0'
}

`}

>


<div

className="

h-full

m-3

rounded-3xl

border

border-white/30

bg-white/70

backdrop-blur-xl

shadow-[0_20px_60px_rgba(0,0,0,.08)]

overflow-hidden

"

>


{/* HEADER */}

<div

className="

h-24

flex

items-center

justify-between

px-5

border-b

border-slate-200/50

"

>


<div className="flex items-center gap-3">


<div

className="

h-12

w-12

rounded-2xl

flex

items-center

justify-center

text-white

shadow-lg

"

style={{

background:

"linear-gradient(135deg,var(--primary),var(--secondary))"

}}

>


<Landmark size={25}/>


</div>




{

!collapsed &&

<div>

<h2 className="font-black text-lg">

Smart Mosque

</h2>


<p className="text-xs text-slate-500">

Management System

</p>


</div>

}



</div>





<button

onClick={()=>setCollapsed(!collapsed)}

className="

hidden

md:flex

h-8

w-8

items-center

justify-center

rounded-xl

hover:bg-slate-100

"

>

{

collapsed

?

<ChevronRight size={18}/>

:

<ChevronLeft size={18}/>

}


</button>




<button

onClick={()=>setMobileOpen?.(false)}

className="md:hidden"

>

<X/>

</button>



</div>








<nav

className="

p-4

space-y-2

"

>


{

menus.map(item=>{


const Icon=item.icon;


const active=

pathname===item.href;



return (


<Link

key={item.href}

href={item.href}

onClick={()=>setMobileOpen?.(false)}


className={`

group

relative

flex

items-center

gap-4

rounded-2xl

px-4

py-3.5

transition-all

duration-300


${active

?

"text-white shadow-lg"

:

"text-slate-600 hover:bg-slate-100"

}


`}


style={active?

{

background:

"linear-gradient(135deg,var(--primary),var(--secondary))"

}

:

{}

}


>


<Icon

size={21}

className={

active

?

"text-white"

:

"group-hover:text-[var(--primary)]"

}

/>



{

!collapsed &&

<span

className="font-semibold"

>

{item.name}

</span>

}



</Link>


)


})

}


</nav>










{/* FOOTER */}

<div

className="

absolute

bottom-0

left-0

w-full

p-4

border-t

border-slate-200/50

"

>


<Link


href="/dashboard/settings"


className="

flex

items-center

gap-4

rounded-2xl

px-4

py-3

text-slate-600

hover:bg-slate-100

transition

"


>


<Settings size={21}/>


{

!collapsed &&

<span className="font-semibold">

Pengaturan

</span>

}



</Link>



</div>





</div>


</aside>


)

}
