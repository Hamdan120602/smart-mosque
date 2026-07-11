"use client";


import { useLaporan } from "./hooks/useLaporan";
import LaporanSummary from "./components/LaporanSummary";


function formatRupiah(value:number){

  return new Intl.NumberFormat(
    "id-ID",
    {
      maximumFractionDigits:0
    }
  ).format(value);

}



export default function LaporanPage(){


const {
dataKas,
pemasukan,
pengeluaran,
saldo
}=useLaporan();



return (

<div className="space-y-6">


<h1 className="text-3xl font-bold">
Laporan Keuangan Masjid
</h1>



<LaporanSummary
pemasukan={pemasukan}
pengeluaran={pengeluaran}
saldo={saldo}
/>




<div className="bg-white rounded-xl shadow p-5">


<h2 className="text-xl font-bold mb-4">
Riwayat Transaksi
</h2>



<table className="w-full">


<thead>

<tr className="border-b">

<th className="text-left">
Judul
</th>

<th>
Kategori
</th>

<th>
Jumlah
</th>

</tr>

</thead>



<tbody>

{
dataKas.map(item=>(

<tr
key={item.id}
className="border-b">

<td>
{item.title}
</td>


<td>
{item.category}
</td>


<td>
Rp {formatRupiah(item.amount)}
</td>


</tr>

))
}


</tbody>


</table>


</div>



</div>

);

}
