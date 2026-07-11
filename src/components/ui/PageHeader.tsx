"use client";

import { ReactNode } from "react";

interface Props{

title:string;

description?:string;

icon?:ReactNode;

action?:ReactNode;

}

export default function PageHeader({

title,

description,

icon,

action

}:Props){

return(

<div
className="
flex
flex-col
gap-6
lg:flex-row
lg:items-center
lg:justify-between
"
>

<div className="flex items-center gap-5">

{
icon&&

<div

className="
flex
h-16
w-16
items-center
justify-center
rounded-3xl
text-white
shadow-xl
"

style={{
background:
"linear-gradient(135deg,var(--primary),var(--secondary))"
}}

>

{icon}

</div>

}

<div>

<h1 className="text-4xl font-black">

{title}

</h1>

{
description&&

<p className="mt-2 text-slate-500">

{description}

</p>

}

</div>

</div>

{action}

</div>

);

}
