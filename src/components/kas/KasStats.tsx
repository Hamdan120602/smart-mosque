import {
Wallet,
TrendingUp,
TrendingDown,
Receipt
} from "lucide-react";


type Props = {
saldo:number;
pemasukan:number;
pengeluaran:number;
jumlah:number;
}



export default function KasStats({
saldo,
pemasukan,
pengeluaran,
jumlah
}:Props){


const data=[

{
title:"Saldo Kas",
value:saldo,
icon:Wallet
},

{
title:"Pemasukan",
value:pemasukan,
icon:TrendingUp
},

{
title:"Pengeluaran",
value:pengeluaran,
icon:TrendingDown
},

{
title:"Transaksi",
value:jumlah,
icon:Receipt
}

];



return (

<div className="
grid
grid-cols-1
md:grid-cols-2
xl:grid-cols-4
gap-6
">


{
data.map((item)=>{


const Icon=item.icon;


return (

<div
key={item.title}
className="
rounded-3xl
bg-white
border
p-6
shadow-xl
"
>


<div className="
flex
justify-between
">


<div>

<p className="
text-sm
text-slate-500
">

{item.title}

</p>


<h2 className="
text-3xl
font-bold
mt-3
"
>

{
item.title==="Transaksi"
?
item.value
:
`Rp ${item.value.toLocaleString()}`
}

</h2>


</div>


<div className="
p-4
rounded-2xl
bg-slate-100
">

<Icon/>

</div>


</div>


</div>

)

})

}


</div>

)

}
