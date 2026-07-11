"use client";


import {
ArrowDownLeft,
ArrowUpRight,
WalletCards
} from "lucide-react";



interface Props{

income:number;

expense:number;

}



export default function CashFlowCard({

income,

expense

}:Props){



return (

<div

className="

premium-card

p-6

space-y-6

"

>



<div

className="

flex

items-center

gap-3

"

>


<div

className="

h-12

w-12

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

<WalletCards/>

</div>



<div>

<h2

className="

text-xl

font-bold

"

>

Arus Kas

</h2>


<p

className="

text-sm

opacity-60

"

>

Ringkasan keuangan masjid

</p>


</div>


</div>







<div

className="

grid

md:grid-cols-2

gap-5

"

>




<div

className="

rounded-3xl

p-5

border

bg-black/5

"

>


<div

className="

flex

items-center

gap-3

"

>


<div

className="

h-10

w-10

rounded-xl

flex

items-center

justify-center

text-white

"

style={{

background:

"linear-gradient(135deg,#16a34a,#22c55e)"

}}

>

<ArrowDownLeft size={20}/>


</div>



<div>

<p className="text-sm opacity-60">

Pemasukan

</p>


<h3

className="

text-2xl

font-black

"

>

Rp {income.toLocaleString("id-ID")}

</h3>


</div>


</div>


</div>







<div

className="

rounded-3xl

p-5

border

bg-black/5

"

>


<div

className="

flex

items-center

gap-3

"

>


<div

className="

h-10

w-10

rounded-xl

flex

items-center

justify-center

text-white

"

style={{

background:

"linear-gradient(135deg,#dc2626,#f97316)"

}}

>

<ArrowUpRight size={20}/>


</div>



<div>


<p className="text-sm opacity-60">

Pengeluaran

</p>


<h3

className="

text-2xl

font-black

"

>

Rp {expense.toLocaleString("id-ID")}

</h3>


</div>


</div>


</div>






</div>






<div

className="

h-2

rounded-full

overflow-hidden

bg-black/10

"

>


<div

className="

h-full

rounded-full

"

style={{

width:

`${

income > 0

?

Math.min(

(income/(income+expense))*100,

100

)

:

0

}%`,


background:

"linear-gradient(90deg,var(--primary),var(--accent))"

}}

/>


</div>





</div>


)


}
