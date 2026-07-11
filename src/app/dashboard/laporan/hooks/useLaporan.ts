"use client";

import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/lib/supabase";


export interface LaporanTransaction {

  id:number;

  title:string;

  category:string;

  type:"income"|"expense";

  amount:number;

  description?:string;

  created_at:string;

}



export function useLaporan(){

const [dataKas,setDataKas]=useState<LaporanTransaction[]>([]);

const [loading,setLoading]=useState(true);



async function loadData(){


setLoading(true);


const {data,error}=await supabase

.from("transactions")

.select("*")

.order(
"created_at",
{
ascending:false
}
);



if(error){

console.error(
"Error laporan:",
error
);

return;

}



setDataKas(
(data || []) as LaporanTransaction[]
);


setLoading(false);


}




useEffect(()=>{

loadData();

},[]);





const pemasukan = useMemo(()=>{


return dataKas

.filter(
item=>item.type==="income"
)

.reduce(
(total,item)=>total+Number(item.amount),
0
);


},[dataKas]);







const pengeluaran = useMemo(()=>{


return dataKas

.filter(
item=>item.type==="expense"
)

.reduce(
(total,item)=>total+Number(item.amount),
0
);


},[dataKas]);






const saldo =
pemasukan - pengeluaran;






return {

dataKas,

pemasukan,

pengeluaran,

saldo,

loading,

refresh:loadData

};


}
