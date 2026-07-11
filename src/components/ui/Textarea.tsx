"use client";

import { TextareaHTMLAttributes } from "react";

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement>{
label?:string;
}

export default function Textarea({
label,
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

<textarea

{...props}

className={`
w-full
rounded-2xl
border
border-slate-200
bg-white/80
p-4
outline-none
transition
resize-none
focus:border-transparent
focus:ring-2
shadow-sm
${className}
`}

/>

</div>

);

}
