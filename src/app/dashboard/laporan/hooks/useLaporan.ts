"use client";

import { useMemo } from "react";

const dataKas = [
  {
    id: 1,
    title: "Donasi Jumat",
    category: "INCOME",
    amount: 500000
  },
  {
    id: 2,
    title: "Listrik Masjid",
    category: "EXPENSE",
    amount: 150000
  },
  {
    id: 3,
    title: "Kotak Amal",
    category: "INCOME",
    amount: 300000
  }
];


export function useLaporan(){

  const pemasukan = useMemo(() =>
    dataKas
      .filter(item => item.category === "INCOME")
      .reduce((total,item)=> total + item.amount,0)
  ,[]);


  const pengeluaran = useMemo(() =>
    dataKas
      .filter(item => item.category === "EXPENSE")
      .reduce((total,item)=> total + item.amount,0)
  ,[]);


  const saldo = pemasukan - pengeluaran;


  return {
    dataKas,
    pemasukan,
    pengeluaran,
    saldo
  };

}
