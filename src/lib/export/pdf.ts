import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";


export function exportPDF(data:any[]){

const doc = new jsPDF();



doc.setFontSize(18);

doc.text(
"Laporan Keuangan Masjid",
14,
20
);



autoTable(doc,{

startY:30,

head:[

[
"Transaksi",
"Kategori",
"Jenis",
"Jumlah"

]

],


body:data.map(item=>[

item.title,

item.category,

item.type==="income"
?
"Pemasukan"
:
"Pengeluaran",

"Rp "+
Number(item.amount)
.toLocaleString("id-ID")

])


});



doc.save(
"laporan-keuangan-masjid.pdf"
);


}
