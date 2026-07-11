"use client";


import {

Activity,

Clock

} from "lucide-react";



interface Props{

title:string;

description:string;

time:string;

}



export default function ActivityCard({

title,

description,

time

}:Props){



return (


<div

className="premium-card p-5"

>


<div

className="flex items-start gap-4"

>


<div

className="

h-11

w-11

rounded-2xl

flex

items-center

justify-center

text-white

"

style={{

background:

"linear-gradient(135deg,var(--primary),var(--secondary))"

}}

>

<Activity size={20}/>


</div>




<div className="flex-1">


<h3

className="

font-bold

"

>

{title}

</h3>



<p

className="

text-sm

opacity-60

mt-1

"

>

{description}

</p>



<div

className="

flex

items-center

gap-2

text-xs

opacity-50

mt-3

"

>


<Clock size={14}/>


{time}


</div>



</div>



</div>



</div>


)

}
