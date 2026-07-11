"use client";

import { Inbox } from "lucide-react";

interface Props{

title:string;

description:string;

}

export default function EmptyState({

title,

description

}:Props){

return(

<div
className="
flex
flex-col
items-center
justify-center
rounded-[30px]
border-2
border-dashed
py-16
text-center
"
>

<div
className="
mb-5
flex
h-20
w-20
items-center
justify-center
rounded-full
bg-slate-100
"
>

<Inbox size={34}/>

</div>

<h3 className="text-2xl font-bold">

{title}

</h3>

<p className="mt-3 max-w-md text-slate-500">

{description}

</p>

</div>

);

}
