"use client";


function formatRupiah(value:number){

  return new Intl.NumberFormat(
    "id-ID",
    {
      maximumFractionDigits:0
    }
  ).format(value);

}



export default function LaporanSummary({
  pemasukan,
  pengeluaran,
  saldo
}:{
  pemasukan:number;
  pengeluaran:number;
  saldo:number;
}){


return (

<div className="grid grid-cols-1 md:grid-cols-3 gap-4">


<div className="bg-green-100 rounded-xl p-5">

<p className="text-sm">
Pemasukan
</p>

<h2 className="text-2xl font-bold">
Rp {formatRupiah(pemasukan)}
</h2>

</div>




<div className="bg-red-100 rounded-xl p-5">

<p className="text-sm">
Pengeluaran
</p>

<h2 className="text-2xl font-bold">
Rp {formatRupiah(pengeluaran)}
</h2>

</div>




<div className="bg-blue-100 rounded-xl p-5">

<p className="text-sm">
Saldo
</p>

<h2 className="text-2xl font-bold">
Rp {formatRupiah(saldo)}
</h2>

</div>


</div>

);

}
