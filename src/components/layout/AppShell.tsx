'use client';

import {
ReactNode,
useState
} from 'react';

import Sidebar from './Sidebar';
import Header from './Header';


export default function AppShell({
children
}:{
children:ReactNode
}){


const [collapsed,setCollapsed]=useState(false);

const [mobileOpen,setMobileOpen]=useState(false);



return (

<div className="min-h-screen bg-slate-100">


<Sidebar

collapsed={collapsed}

setCollapsed={setCollapsed}

mobileOpen={mobileOpen}

setMobileOpen={setMobileOpen}

/>



<div

className={`
transition-all
duration-300

${collapsed
?
"md:pl-[90px]"
:
"md:pl-[270px]"
}

`}

>


<Header

collapsed={collapsed}

setCollapsed={setCollapsed}

setMobileOpen={setMobileOpen}

/>



<main

className="
pt-24
p-6
lg:p-8
"

>

{children}

</main>


</div>


</div>

)

}
