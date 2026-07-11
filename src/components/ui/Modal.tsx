"use client";

import { ReactNode } from "react";
import { X } from "lucide-react";

interface Props{
open:boolean;
title:string;
children:ReactNode;
onClose:()=>void;
}

export default function Modal({
open,
title,
children,
onClose
}:Props){

if(!open) return null;

return(

<div
className="
fixed
inset-0
z-[100]
flex
items-center
justify-center
bg-black/40
backdrop-blur-md
p-6
"
>

<div
className="
w-full
max-w-2xl
overflow-hidden
rounded-[32px]
bg-white
shadow-2xl
animate-in
fade-in
zoom-in-95
"
>

<div
className="
flex
items-center
justify-between
border-b
px-8
py-6
"
>

<h2 className="text-2xl font-black">
{title}
</h2>

<button
onClick={onClose}
className="
flex
h-11
w-11
items-center
justify-center
rounded-xl
hover:bg-slate-100
"
>
<X size={20}/>
</button>

</div>

<div className="p-8">

{children}

</div>

</div>

</div>

);

}
