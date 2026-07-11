import * as XLSX from "xlsx";
import { saveAs } from "file-saver";


export function exportExcel(data:any[]){


const rows=data.map(item=>({

Tanggal:item.created_at
?
new Date(item.created_at)
.toLocaleDateString("id-ID")
:
"-",

Transaksi:item.title,

Kategori:item.category,

Jenis:
item.type==="income"
?
"Pemasukan"
:
"Pengeluaran",

Jumlah:item.amount,

Keterangan:item.description || ""

}));



const worksheet =
XLSX.utils.json_to_sheet(rows);



const workbook =
XLSX.utils.book_new();



XLSX.utils.book_append_sheet(
workbook,
worksheet,
"Laporan Kas"
);



const excelBuffer =
XLSX.write(
workbook,
{
bookType:"xlsx",
type:"array"
}
);



const blob =
new Blob(
[
excelBuffer
],
{
type:
"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
}
);



saveAs(
blob,
"Laporan-Keuangan-Masjid.xlsx"
);


}
