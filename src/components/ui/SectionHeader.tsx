"use client";

interface Props{

title:string;

subtitle?:string;

}

export default function SectionHeader({

title,

subtitle

}:Props){

return(

<div className="mb-6">

<h2 className="text-2xl font-bold">

{title}

</h2>

{
subtitle&&

<p className="mt-1 text-slate-500">

{subtitle}

</p>

}

</div>

);

}
