import type { ReactNode } from 'react';

interface Props{

title:string;

subtitle?:string;

action?:ReactNode;

}

export default function SectionTitle({

title,

subtitle,

action

}:Props){

return(

<div className="flex items-center justify-between">

<div>

<h2 className="text-xl font-bold tracking-tight text-slate-900">

{title}

</h2>

{subtitle&&(

<p className="mt-1 text-sm text-slate-500">

{subtitle}

</p>

)}

</div>

{action}

</div>

)

}
