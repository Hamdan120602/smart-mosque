"use client";

import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement>{
label?:string;
error?:string;
}

export default function Input({
label,
error,
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

<input

{...props}

className={`
w-full
h-12
rounded-2xl
border
border-slate-200
bg-white/80
px-4
outline-none
transition
focus:border-transparent
focus:ring-2
shadow-sm
${className}
`}

style={{
boxShadow:"0 1px 2px rgba(0,0,0,.04)",
}}

/>

{
error&&(
<p className="text-sm text-red-500">
{error}
</p>
)
}

</div>

);

}
