'use client';

import {
  X
} from 'lucide-react';

import {
  ReactNode
} from 'react';


interface ModalProps {

open:boolean;

onClose:()=>void;

title:string;

children:ReactNode;

}



export default function Modal({
open,
onClose,
title,
children
}:ModalProps){


if(!open) return null;



return (

<div

className="
fixed
inset-0
z-50
flex
items-center
justify-center
bg-black/40
backdrop-blur-sm
p-4
"

>


<div

className="
w-full
max-w-lg
rounded-3xl
bg-white
shadow-2xl
animate-in
fade-in
zoom-in
duration-200
"

>


{/* HEADER */}

<div

className="
flex
items-center
justify-between
border-b
px-6
py-4
"

>

<h2

className="
text-lg
font-bold
text-slate-900
"

>
{title}
</h2>



<button

onClick={onClose}

className="
rounded-xl
p-2
hover:bg-slate-100
"

>

<X size={20}/>

</button>


</div>




{/* BODY */}

<div
className="
p-6
"
>

{children}

</div>



</div>


</div>

)

}
