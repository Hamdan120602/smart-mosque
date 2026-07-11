"use client";

import { useMemo, useState } from "react";

import {
  BarChart3
} from "lucide-react";


import {
useLaporan
} from "./hooks/useLaporan";


import LaporanSummary
from "./components/LaporanSummary";


import ReportHeader
from "./components/ReportHeader";


import FinanceChart
from "./components/FinanceChart";


import ReportTable
from "./components/ReportTable";


import FilterBar
from "./components/FilterBar";





export default function LaporanPage(){


const {

dataKas,

pemasukan,

pengeluaran,

saldo,

loading

}=useLaporan();



const [month,setMonth]=useState("");

const [type,setType]=useState("");

const [category,setCategory]=useState("");



const filteredData = useMemo(()=>{


return dataKas.filter(item=>{


const matchType =

type === ""

||

item.type === type;



const matchCategory =

category === ""

||

item.category
.toLowerCase()
.includes(
category.toLowerCase()
);



const matchMonth =

month === ""

||

item.created_at?.startsWith(month);



return (

matchType &&

matchCategory &&

matchMonth

);


});


},[
dataKas,
month,
type,
category
]);





const chartData = useMemo(()=>{


const months=[
"Jan",
"Feb",
"Mar",
"Apr",
"Mei",
"Jun",
"Jul",
"Agu",
"Sep",
"Okt",
"Nov",
"Des"
];



return months.map((month,index)=>{


const income=dataKas

.filter(item=>{

const date=new Date(item.created_at);

return (

date.getMonth()===index &&

item.type==="income"

);

})

.reduce(
(sum,item)=>sum+item.amount,
0
);



const expense=dataKas

.filter(item=>{

const date=new Date(item.created_at);

return (

date.getMonth()===index &&

item.type==="expense"

);

})

.reduce(
(sum,item)=>sum+item.amount,
0
);



return {

month,

income,

expense

};


});


},[dataKas]);







if(loading){

return (

<div className="p-10 text-center">

Memuat laporan...

</div>

)

}






return (

<div className="space-y-8 p-6 lg:p-10">


<ReportHeader

data={filteredData}

/>



<FilterBar

month={month}

type={type}

category={category}

setMonth={setMonth}

setType={setType}

setCategory={setCategory}

data={filteredData}

onReset={()=>{

setMonth("");

setType("");

setCategory("");

}}

/>



<LaporanSummary

pemasukan={pemasukan}

pengeluaran={pengeluaran}

saldo={saldo}

/>





<div className="grid gap-6">


<FinanceChart

data={chartData}

/>


</div>






<div className="premium-card p-5">


<div className="mb-5 flex items-center gap-3">

<BarChart3/>

<h2 className="text-xl font-bold">

Detail Keuangan

</h2>


</div>



<ReportTable

data={dataKas}

/>



</div>



</div>


)


}
