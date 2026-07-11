import { supabase } from "./supabase";


// ================================
// AMBIL DATA MASJID
// ================================

export async function getMosqueSettings(){

const {
data,
error
}
=
await supabase

.from("mosque_settings")

.select("*")

.limit(1)

.single();



if(error){

console.error(
"GET MOSQUE ERROR:",
error.message
);

return null;

}


return data;

}





// ================================
// UPDATE DATA MASJID
// ================================

export async function updateMosqueSettings(
payload:{
name:string;
address:string;
phone:string;
logo_url?:string;
}
){


const existing =
await getMosqueSettings();



if(existing){


const {
data,
error
}
=
await supabase

.from("mosque_settings")

.update({

name:
payload.name,

address:
payload.address,

phone:
payload.phone,

logo_url:
payload.logo_url ?? null,

updated_at:
new Date()

})

.eq(
"id",
existing.id
)

.select()

.single();



if(error){

throw error;

}


return data;


}





const {
data,
error
}
=
await supabase

.from("mosque_settings")

.insert({

name:
payload.name,

address:
payload.address,

phone:
payload.phone,

logo_url:
payload.logo_url ?? null

})

.select()

.single();



if(error){

throw error;

}


return data;

}
