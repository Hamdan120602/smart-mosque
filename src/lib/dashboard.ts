import { supabase } from "./supabase";


export async function getDashboardData(){


  const jamaah =
    await supabase
      .from("jamaah")
      .select("*", {
        count:"exact",
        head:true
      });



  const agenda =
    await supabase
      .from("agenda")
      .select("*", {
        count:"exact",
        head:true
      });



  const transactions =
    await supabase
      .from("transactions")
      .select("*");



  let pemasukan = 0;
  let pengeluaran = 0;



  if(transactions.data){

    transactions.data.forEach((item:any)=>{


      if(item.type === "income"){

        pemasukan += Number(item.amount);

      }



      if(item.type === "expense"){

        pengeluaran += Number(item.amount);

      }


    });

  }



  return {


    jamaah:
      jamaah.count ?? 0,


    agenda:
      agenda.count ?? 0,


    pemasukan,


    pengeluaran,


    saldo:
      pemasukan - pengeluaran,


    transactions:
      transactions.data ?? []


  };


}
