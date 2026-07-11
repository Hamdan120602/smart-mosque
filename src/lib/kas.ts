import { supabase } from "./supabase";


export async function getTransactions(){

  const { data, error } = await supabase
    .from("transactions")
    .select("*")
    .order("created_at", {
      ascending:false
    });


  if(error){
    console.error(error);
    throw error;
  }


  return data || [];
}




export async function createTransaction(
  transaction:any
){

  const { error } = await supabase
    .from("transactions")
    .insert([
      {
        title: transaction.title,
        category: transaction.category,
        type: transaction.type,
        amount: Number(transaction.amount),
        description: transaction.description
      }
    ]);


  if(error){
    console.error(error);
    throw error;
  }

}





export async function updateTransaction(
  id:number,
  transaction:any
){

  const { error } = await supabase
    .from("transactions")
    .update({

      title: transaction.title,
      category: transaction.category,
      type: transaction.type,
      amount:Number(transaction.amount),
      description:transaction.description

    })
    .eq("id",id);


  if(error){
    console.error(error);
    throw error;
  }

}





export async function deleteTransaction(
  id:number
){

  const { error } = await supabase
    .from("transactions")
    .delete()
    .eq("id",id);


  if(error){
    console.error(error);
    throw error;
  }

}
