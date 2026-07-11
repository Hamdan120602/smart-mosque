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
left-0
top-0
z-50
h-screen
border-r
bg-white
transition-all
duration-300

${collapsed?'w-[90px]':'w-[270px]'}

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
flex
h-20
items-center
justify-between
border-b
px-5
"

>


<div className="flex items-center gap-3">


<div

className="
flex
h-12
w-12
items-center
justify-center
rounded-2xl
bg-emerald-600
text-white
"

>

<Landmark/>

</div>



{
!collapsed&&

<div>

<h2 className="font-bold">
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
rounded-xl
p-2
hover:bg-slate-100
md:block
"

>

{
collapsed
?
<ChevronRight/>
:
<ChevronLeft/>
}

</button>



<button

onClick={()=>setMobileOpen?.(false)}

className="
md:hidden
"

>

<X/>

</button>


</div>





<nav className="
space-y-2
p-4
">


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
flex
items-center
gap-4
rounded-2xl
px-4
py-3
transition

${active
?
'bg-emerald-600 text-white'
:
'text-slate-600 hover:bg-emerald-50'
}

`}

>


<Icon size={22}/>


{
!collapsed&&
<span>
{item.name}
</span>
}


</Link>


)


})

}



</nav>




<div className="absolute bottom-0 w-full border-t p-4">


<Link

href="/dashboard/settings"

className="
flex
items-center
gap-4
rounded-xl
p-3
hover:bg-slate-100
"

>

<Settings/>

{
!collapsed&&
<span>
Pengaturan
</span>
}

</Link>


</div>



</aside>


)

}
