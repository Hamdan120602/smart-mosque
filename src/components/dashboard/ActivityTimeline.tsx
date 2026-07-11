"use client";


import {

CircleDot

} from "lucide-react";



interface Item{

id:number;

title:string;

description:string;

time:string;

}




export default function ActivityTimeline({

items=[]

}:{

items?:Item[]

}){



return (


<div className="premium-card p-6">



<h2

className="

text-xl

font-bold

mb-6

"

>

Aktivitas Sistem

</h2>





{

items.length===0

?

<div

className="

text-center

py-10

opacity-60

"

>

Belum ada aktivitas

</div>


:


<div className="space-y-6">


{

items.map((item,index)=>(


<div

key={item.id}

className="flex gap-4"

>


<div

className="

flex

flex-col

items-center

"

>


<div

className="

h-9

w-9

rounded-full

flex

items-center

justify-center

text-white

"

style={{

background:

"linear-gradient(135deg,var(--primary),var(--accent))"

}}

>

<CircleDot size={16}/>

</div>



{

index !== items.length-1 &&

<div

className="

h-full

w-px

bg-black/10

mt-2

"

/>

}


</div>





<div>


<h3

className="

font-semibold

"

>

{item.title}

</h3>


<p

className="

text-sm

opacity-60

mt-1

"

>

{item.description}

</p>


<p

className="

text-xs

opacity-40

mt-2

"

>

{item.time}

</p>


</div>



</div>


))


}



</div>



}




</div>


)

}
