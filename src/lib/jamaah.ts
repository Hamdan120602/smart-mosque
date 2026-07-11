import { supabase } from "./supabase";


export interface Jamaah {

id?:number;

name:string;

nik:string;

gender:"LAKI-LAKI"|"PEREMPUAN";

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



function mapToDatabase(j:Jamaah){

return {

nama:j.name,

nik:j.nik,

jenis_kelamin:j.gender,

tanggal_lahir:j.birth_date || null,

alamat:j.address || null,

no_hp:j.phone || null,

pekerjaan:j.occupation || null,

pendidikan:j.group_name || null,

status:j.status,

tanggal_gabung:j.join_date || null,

catatan:j.notes || null

};

}



function mapFromDatabase(j:any):Jamaah{

return {

id:j.id,

name:j.nama ?? "",

nik:j.nik ?? "",

gender:
j.jenis_kelamin === "LAKI-LAKI"
?
"LAKI-LAKI"
:
"PEREMPUAN",

birth_date:j.tanggal_lahir ?? "",

phone:j.no_hp ?? "",

address:j.alamat ?? "",

occupation:j.pekerjaan ?? "",

group_name:j.pendidikan ?? "",

status:
j.status === "NONAKTIF"
?
"NONAKTIF"
:
"AKTIF",

join_date:j.tanggal_gabung ?? "",

notes:j.catatan ?? "",

created_at:j.created_at

};

}




export async function getJamaah(){

const {data,error}=await supabase

.from("jamaah")

.select("*")

.order(
"created_at",
{
ascending:false
}
);


if(error) throw error;


return (data ?? []).map(mapFromDatabase);

}





export async function createJamaah(
jamaah:Jamaah
){

const {error}=await supabase

.from("jamaah")

.insert([
mapToDatabase(jamaah)
]);


if(error) throw error;

}




export async function updateJamaah(
id:number,
jamaah:Jamaah
){

const {error}=await supabase

.from("jamaah")

.update(
mapToDatabase(jamaah)
)

.eq(
"id",
id
);


if(error) throw error;

}




export async function deleteJamaah(
id:number
){

const {error}=await supabase

.from("jamaah")

.delete()

.eq(
"id",
id
);


if(error) throw error;

}
