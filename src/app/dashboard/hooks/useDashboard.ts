"use client";

import {
useEffect,
useState
} from "react";


const initialData = {

jamaah:0,

agenda:0,

saldo:0,

pemasukan:0,

pengeluaran:0

};



export function useDashboard(){


const [data,setData]=useState(initialData);



useEffect(()=>{


async function load(){


try{


const res =
await fetch("/api/dashboard");


const result =
await res.json();



setData({

jamaah:
result.jamaah ?? 0,


agenda:
result.agenda ?? 0,


saldo:
result.saldo ?? 0,


pemasukan:
result.pemasukan ?? 0,


pengeluaran:
result.pengeluaran ?? 0


});


}
catch(error){

console.error(
"Dashboard error",
error
);

}


}



load();



const timer =
setInterval(
load,
10000
);



return()=>clearInterval(timer);



},[]);



return data;


}
