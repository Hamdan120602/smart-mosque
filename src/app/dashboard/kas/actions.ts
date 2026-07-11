"use server";


import { revalidatePath } from "next/cache";

import {
  createTransaction,
  deleteTransaction
} from "@/lib/kas";



export async function addTransaction(
  formData:FormData
){

  await createTransaction({

    title:
    formData.get("title"),

    category:
    formData.get("category"),

    type:
    formData.get("type"),

    amount:
    formData.get("amount"),

    description:
    formData.get("description")

  });


  revalidatePath("/dashboard/kas");

}





export async function removeTransaction(
  id:number
){

  await deleteTransaction(id);


  revalidatePath("/dashboard/kas");

}
