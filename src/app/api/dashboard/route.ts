import { NextResponse } from "next/server";

import {
  getDashboardData
} from "@/lib/dashboard";



export async function GET(){


  try{


    const data =
      await getDashboardData();



    return NextResponse.json(data);



  }
  catch(error){


    console.error(error);



    return NextResponse.json({

      jamaah:0,

      agenda:0,

      pemasukan:0,

      pengeluaran:0,

      saldo:0,

      transactions:[]


    });


  }


}
