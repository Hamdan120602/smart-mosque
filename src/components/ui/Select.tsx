"use client";

import { SelectHTMLAttributes } from "react";

interface Option{

label:string;

value:string;

}

interface Props extends SelectHTMLAttributes<HTMLSelectElement>{

label?:string;

options:Option[];

}

export default function Select({

label,

options,

className="",

...props

}:Props){

return(

<div className="space-y-2">

{label&&(
<label className="block text-sm font-semibold">
{label}
</label>
)}

<select

{...props}

className={`
w-full
h-12
rounded-2xl
border
border-slate-200
bg-white
px-4
outline-none
transition
focus:border-transparent
focus:ring-2
shadow-sm
${className}
`}

>

{
options.map(item=>(

<option
key={item.value}
value={item.value}
>

{item.label}

</option>

))
}

</select>

</div>

);

}
