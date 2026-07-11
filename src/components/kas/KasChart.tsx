"use client";

import {
AreaChart,
Area,
XAxis,
YAxis,
Tooltip,
ResponsiveContainer
}
from "recharts";


const data=[
{
bulan:"Jan",
masuk:12000000,
keluar:4000000
},
{
bulan:"Feb",
masuk:18000000,
keluar:7000000
},
{
bulan:"Mar",
masuk:22000000,
keluar:9000000
},
{
bulan:"Apr",
masuk:16000000,
keluar:5000000
}
];


export default function KasChart(){


return (

<div
className="
rounded-3xl
bg-white
p-8
shadow-[0_20px_50px_rgba(0,0,0,0.06)]
border
"
>


<h2
className="
text-xl
font-bold
mb-6
"
>
Arus Kas Masjid
</h2>


<div className="h-[350px]">

<ResponsiveContainer>

<AreaChart data={data}>

<XAxis dataKey="bulan"/>

<YAxis/>

<Tooltip/>


<Area
type="monotone"
dataKey="masuk"
strokeWidth={3}
/>


<Area
type="monotone"
dataKey="keluar"
strokeWidth={3}
/>


</AreaChart>

</ResponsiveContainer>


</div>


</div>

)

}
