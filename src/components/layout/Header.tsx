'use client';

import {
 Search,
 Bell,
 CalendarDays,
 ChevronDown,
 User,
 Settings,
 LogOut
} from 'lucide-react';

import {
 usePathname,
 useRouter
} from 'next/navigation';

import {
 useState,
 useEffect,
 useRef
} from 'react';

import Avatar from '@/components/ui/Avatar';


export default function Header(){

const pathname = usePathname();
const router = useRouter();

const [openMenu,setOpenMenu]=useState<
'profile'|'notif'|null
>(null);

const [search,setSearch]=useState('');

const wrapperRef =
useRef<HTMLDivElement>(null);


useEffect(()=>{

function outside(e:MouseEvent){

if(
wrapperRef.current &&
!wrapperRef.current.contains(
e.target as Node
)
){

setOpenMenu(null);

}

}


document.addEventListener(
'mousedown',
outside
);


return ()=>{

document.removeEventListener(
'mousedown',
outside
);

}

},[]);



const page =
pathname
.split('/')
.filter(Boolean)
.pop()
?.replace('-',' ')
.replace(/\b\w/g,c=>c.toUpperCase())
||
'Dashboard';



const today =
new Intl.DateTimeFormat(
'id-ID',
{
weekday:'long',
day:'numeric',
month:'long',
year:'numeric'
}
)
.format(new Date());



return (

<header className="
sticky
top-0
z-40
flex
h-[82px]
items-center
justify-between
border-b
bg-white/90
px-8
backdrop-blur-xl
">


<div>

<p className="
text-xs
font-bold
tracking-[0.35em]
text-emerald-600
">
SMART MOSQUE
</p>


<h1 className="
text-2xl
font-bold
text-slate-900
">
{page}
</h1>


<div className="
flex
items-center
gap-2
text-sm
text-slate-500
">

<CalendarDays size={15}/>

{today}

</div>


</div>





<div
ref={wrapperRef}
className="
flex
items-center
gap-4
"
>


<div className="
hidden
xl:block
relative
">


<Search
className="
absolute
left-4
top-1/2
-translate-y-1/2
text-slate-400
"
/>


<input

value={search}

onChange={
e=>setSearch(e.target.value)
}

placeholder="
Cari transaksi, jamaah...
"

className="
h-14
w-[520px]
rounded-3xl
border
bg-slate-50
pl-12
text-sm
outline-none
focus:border-emerald-500
"

/>


</div>




<div className="relative">


<button

onClick={()=>setOpenMenu(
openMenu==='notif'
?
null
:
'notif'
)}

className="
flex
h-14
w-14
items-center
justify-center
rounded-2xl
border
bg-white
hover:bg-slate-50
">

<Bell size={22}/>

</button>



{
openMenu==='notif' &&

<div className="
absolute
right-0
top-16
w-80
rounded-3xl
border
bg-white
p-5
shadow-2xl
">

<h3 className="font-bold">
Notifikasi
</h3>


<div className="
mt-4
rounded-2xl
bg-slate-50
p-4
text-sm
text-slate-500
">

Belum ada notifikasi

</div>


</div>

}


</div>





<div className="relative">


<button

onClick={()=>setOpenMenu(
openMenu==='profile'
?
null
:
'profile'
)}

className="
flex
items-center
gap-3
rounded-3xl
border
bg-white
px-4
py-2.5
">

<Avatar name="Admin Masjid"/>


<div className="
hidden
sm:block
text-left
">

<p className="
font-semibold
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


<ChevronDown size={17}/>


</button>





{
openMenu==='profile' &&

<div className="
absolute
right-0
top-16
w-64
rounded-3xl
border
bg-white
p-3
shadow-2xl
">


<button

onClick={()=>{

router.push(
'/dashboard/profile'
);

setOpenMenu(null);

}}

className="
flex
w-full
items-center
gap-3
rounded-2xl
px-4
py-3
hover:bg-slate-100
">

<User size={19}/>

Profil

</button>




<button

onClick={()=>{

router.push(
'/dashboard/settings'
);

setOpenMenu(null);

}}

className="
flex
w-full
items-center
gap-3
rounded-2xl
px-4
py-3
hover:bg-slate-100
">

<Settings size={19}/>

Pengaturan

</button>



<hr className="my-2"/>



<button

onClick={()=>{

localStorage.removeItem('user');

router.push(
'/auth/login'
);

}}

className="
flex
w-full
items-center
gap-3
rounded-2xl
px-4
py-3
text-red-500
hover:bg-red-50
">

<LogOut size={19}/>

Keluar

</button>


</div>

}


</div>


</div>


</header>

)

}
