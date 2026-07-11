"use client";

import {
ResponsiveContainer,
AreaChart,
Area,
CartesianGrid,
XAxis,
YAxis,
Tooltip
} from "recharts";

interface Props{
data:{
month:string;
income:number;
expense:number;
}[];
}

export default function FinanceChart({
data
}:Props){

return(

<div className="premium-card p-6">

<div className="mb-6">

<h2 className="text-xl font-bold">
Grafik Keuangan
</h2>

<p className="text-sm text-slate-500">
Pemasukan dan Pengeluaran Bulanan
</p>

</div>

<div className="h-[340px]">

<ResponsiveContainer width="100%" height="100%">

<AreaChart data={data}>

<CartesianGrid strokeDasharray="3 3"/>

<XAxis dataKey="month"/>

<YAxis/>

<Tooltip/>

<Area
type="monotone"
dataKey="income"
stroke="var(--primary)"
fill="var(--primary)"
fillOpacity={0.2}
/>

<Area
type="monotone"
dataKey="expense"
stroke="#ef4444"
fill="#ef4444"
fillOpacity={0.15}
/>

</AreaChart>

</ResponsiveContainer>

</div>

</div>

);

}
