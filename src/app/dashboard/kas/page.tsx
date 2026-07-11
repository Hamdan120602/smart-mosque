import {
getTransactions
} from "@/lib/kas";


import {
removeTransaction
} from "./actions";


import BalanceCard
from "@/components/kas/BalanceCard";

import TransactionModal from "@/components/kas/TransactionModal";


import {

Wallet,

Plus,

Trash2,

ArrowDownCircle,

ArrowUpCircle

} from "lucide-react";





export default async function KasPage(){



const transactions =
await getTransactions();





const income =
transactions

.filter(
(item:any)=>item.type==="income"
)

.reduce(
(total:number,item:any)=>
total + Number(item.amount),
0
);




const expense =
transactions

.filter(
(item:any)=>item.type==="expense"
)

.reduce(
(total:number,item:any)=>
total + Number(item.amount),
0
);




const balance =
income-expense;





return (


<div

className="

space-y-8

p-6

lg:p-10

"

>





<div

className="

rounded-[32px]

p-8

text-white

shadow-xl

"

style={{

background:

"linear-gradient(135deg,var(--primary),var(--secondary))"

}}

>


<div className="flex items-center gap-4">


<div

className="

h-14

w-14

rounded-2xl

bg-white/20

flex

items-center

justify-center

"

>

<Wallet size={28}/>

</div>



<div>


<h1 className="text-4xl font-black">

Keuangan Masjid

</h1>


<p className="opacity-90 mt-2">

Kelola pemasukan dan pengeluaran masjid

</p>


</div>


</div>



</div>







<div

className="

grid

gap-6

md:grid-cols-3

"

>


<BalanceCard

title="Saldo Saat Ini"

value={`Rp ${balance.toLocaleString("id-ID")}`}

type="balance"

/>


<BalanceCard

title="Total Pemasukan"

value={`Rp ${income.toLocaleString("id-ID")}`}

type="income"

/>


<BalanceCard

title="Total Pengeluaran"

value={`Rp ${expense.toLocaleString("id-ID")}`}

type="expense"

/>


</div>









<div

className="premium-card p-8"

>


<div className="flex items-center gap-3 mb-6">


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

"var(--primary)"

}}

>

<Plus/>

</div>


<h2 className="text-2xl font-bold">

Tambah Transaksi

</h2>


</div>





<TransactionModal />



</div>









<div className="premium-card p-8">


<h2 className="text-2xl font-bold mb-6">

Riwayat Transaksi

</h2>




<div className="space-y-4">


{

transactions.length===0

?

<p className="opacity-60">

Belum ada transaksi

</p>


:


transactions.map((item:any)=>(


<div

key={item.id}

className="

flex

items-center

justify-between

rounded-2xl

border

p-5

"

>



<div className="flex gap-4 items-center">


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

item.type==="income"

?

"#16a34a"

:

"#dc2626"

}}

>


{

item.type==="income"

?

<ArrowUpCircle/>

:

<ArrowDownCircle/>

}



</div>




<div>


<h3 className="font-bold">

{item.title}

</h3>


<p className="text-sm opacity-60">

{item.category}

</p>


</div>



</div>






<div className="flex items-center gap-5">


<div

className={

item.type==="income"

?

"text-green-600 font-bold"

:

"text-red-600 font-bold"

}

>


{

item.type==="income"

?

"+"

:

"-"

}

Rp {Number(item.amount).toLocaleString("id-ID")}


</div>




<form

action={removeTransaction.bind(
null,
item.id
)}

>


<button

className="

text-red-500

hover:scale-110

transition

"

>

<Trash2 size={20}/>

</button>


</form>



</div>



</div>


))


}


</div>



</div>





</div>


)

}
