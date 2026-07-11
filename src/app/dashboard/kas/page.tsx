import {
  getTransactions
} from "@/lib/kas";


import {
  addTransaction,
  removeTransaction
} from "./actions";



export default async function KasPage(){

  const transactions = await getTransactions();



  return (

    <div className="p-6">


      <h1 className="text-3xl font-bold mb-6">
        Manajemen Kas Masjid
      </h1>



      <form
        action={addTransaction}
        className="grid gap-3 mb-8"
      >


        <input
          name="title"
          placeholder="Nama transaksi"
          className="border p-2 rounded"
          required
        />


        <input
          name="category"
          placeholder="Kategori"
          className="border p-2 rounded"
          required
        />


        <select
          name="type"
          className="border p-2 rounded"
        >

          <option value="income">
            Pemasukan
          </option>

          <option value="expense">
            Pengeluaran
          </option>

        </select>



        <input
          name="amount"
          type="number"
          placeholder="Jumlah"
          className="border p-2 rounded"
          required
        />



        <textarea
          name="description"
          placeholder="Keterangan"
          className="border p-2 rounded"
        />



        <button
          className="bg-green-600 text-white p-2 rounded"
        >
          Tambah Transaksi
        </button>


      </form>




      <div className="space-y-3">


      {
        transactions.map((item:any)=>(

          <div
            key={item.id}
            className="border rounded p-4 flex justify-between"
          >


            <div>

              <h2 className="font-bold">
                {item.title}
              </h2>


              <p>
                {item.category}
              </p>


              <p>
                Rp {item.amount.toLocaleString()}
              </p>


            </div>



            <form
              action={removeTransaction.bind(
                null,
                item.id
              )}
            >

              <button
                className="text-red-600"
              >
                Hapus
              </button>

            </form>



          </div>

        ))
      }


      </div>


    </div>

  );

}
