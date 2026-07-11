import * as XLSX from "xlsx";


export function exportExcel(data:any[]){


const worksheet =
XLSX.utils.json_to_sheet(

data.map(item=>({

Transaksi:item.title,

Kategori:item.category,

Jenis:
item.type==="income"
?
"Pemasukan"
:
"Pengeluaran",

Jumlah:item.amount,

Tanggal:item.created_at

}))

);



const workbook =
XLSX.utils.book_new();



XLSX.utils.book_append_sheet(

workbook,

worksheet,

"Laporan"

);



XLSX.writeFile(

workbook,

"laporan-keuangan-masjid.xlsx"

);


}
