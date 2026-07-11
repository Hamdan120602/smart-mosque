import { supabase } from "./supabase";


export interface Jamaah {

id?: number;

name:string;

nik:string;

gender:"LAKI_LAKI"|"PEREMPUAN";

birth_date:string;

phone:string;

address:string;

occupation:string;

group_name:string;

status:"AKTIF"|"NONAKTIF";

join_date:string;

notes:string;

created_at?:string;

}




export async function getJamaah(){


const {data,error}=await supabase

.from("jamaah")

.select("*")

.order("created_at",{ascending:false});



if(error) throw error;



return (data || []).map(item=>({

id:item.id,

name:item.nama,

nik:item.nik,

gender:item.jenis_kelamin,

birth_date:item.tanggal_lahir,

phone:item.no_hp,

address:item.alamat,

occupation:item.pekerjaan,

group_name:item.kelompok || "",

status:item.status,

join_date:item.tanggal_gabung,

notes:item.catatan,

created_at:item.created_at

}));

}





export async function createJamaah(jamaah:Jamaah){


const {error}=await supabase

.from("jamaah")

.insert([{


nama:jamaah.name,

nik:jamaah.nik,

jenis_kelamin:jamaah.gender,

tanggal_lahir:jamaah.birth_date || null,

alamat:jamaah.address,

no_hp:jamaah.phone,

pekerjaan:jamaah.occupation,

status:jamaah.status,

tanggal_gabung:jamaah.join_date || null,

catatan:jamaah.notes


}]);



if(error) throw error;


}





export async function updateJamaah(
id:number,
jamaah:Jamaah
){


const {error}=await supabase

.from("jamaah")

.update({


nama:jamaah.name,

nik:jamaah.nik,

jenis_kelamin:jamaah.gender,

tanggal_lahir:jamaah.birth_date || null,

alamat:jamaah.address,

no_hp:jamaah.phone,

pekerjaan:jamaah.occupation,

status:jamaah.status,

tanggal_gabung:jamaah.join_date || null,

catatan:jamaah.notes


})

.eq("id",id);



if(error) throw error;


}





export async function deleteJamaah(id:number){


const {error}=await supabase

.from("jamaah")

.delete()

.eq("id",id);



if(error) throw error;


}
