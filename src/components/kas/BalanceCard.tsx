"use client";


import {
Wallet,
TrendingDown,
TrendingUp
} from "lucide-react";



interface Props{

title:string;

value:string;

type?:"income"|"expense"|"balance";

}



export default function BalanceCard({

title,

value,

type="balance"

}:Props){



const Icon =

type==="income"

?

TrendingUp

:

type==="expense"

?

TrendingDown

:

Wallet;



return (

<div

className="premium-card p-6"

>


<div

className="flex items-center justify-between"

>


<div>


<p

className="text-sm opacity-60"

>

{title}

</p>


<h2

className="text-3xl font-black mt-2"

>

{value}

</h2>


</div>




<div

className="

h-14

w-14

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


<Icon size={26}/>


</div>



</div>



</div>

)


}
