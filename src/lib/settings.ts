import { supabase } from "./supabase";


export type Settings = {

id:number;

nama_masjid:string;

alamat:string;

telepon:string;

email:string;

logo:string;

tema:string;

bahasa:string;

notifikasi:boolean;

timezone:string;

updated_at?:string;

};





export async function getSettings():Promise<Settings | null>{


const {data,error}=await supabase

.from("settings")

.select("*")

.order("id",{ascending:true})

.limit(1);



if(error){

console.error("GET SETTINGS ERROR:",error);

return null;

}



if(!data || data.length===0){

return null;

}



return data[0] as Settings;


}







export async function updateSettings(

settings:Settings

){


const {error}=await supabase

.from("settings")

.update({

nama_masjid:settings.nama_masjid,

alamat:settings.alamat,

telepon:settings.telepon,

email:settings.email,

logo:settings.logo,

tema:settings.tema,

bahasa:settings.bahasa,

notifikasi:settings.notifikasi,

timezone:settings.timezone,

updated_at:new Date().toISOString()

})

.eq("id",settings.id);



if(error){

console.error(
"UPDATE SETTINGS ERROR:",
error
);

return error;

}



return null;


}

