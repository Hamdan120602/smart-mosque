import { supabase } from "./supabase";


// ================================
// GET PROFILE USER LOGIN
// ================================

export async function getProfile(){

const {
data:{
user
}
}
=
await supabase.auth.getUser();


if(!user){

return null;

}


const {
data,
error
}
=
await supabase

.from("profiles")

.select("*")

.eq(
"id",
user.id
)

.single();



if(error){

console.error(
"GET PROFILE ERROR:",
error.message
);

return null;

}


return data;

}





// ================================
// UPDATE PROFILE
// ================================

export async function updateProfile(
payload:{
full_name:string;
avatar_url?:string;
}
){


const {
data:{
user
}
}
=
await supabase.auth.getUser();



if(!user){

throw new Error(
"User belum login"
);

}



const {
data,
error
}
=
await supabase

.from("profiles")

.update({

full_name:
payload.full_name,

avatar_url:
payload.avatar_url ?? null,

updated_at:
new Date()

})

.eq(
"id",
user.id
)

.select()

.single();



if(error){

throw error;

}


return data;

}





// ================================
// UPDATE PASSWORD
// ================================

export async function changePassword(
password:string
){


const {
error
}
=
await supabase.auth.updateUser({

password

});


if(error){

throw error;

}


return true;

}





// ================================
// LOGOUT
// ================================

export async function logout(){

const {
error
}
=
await supabase.auth.signOut();


if(error){

throw error;

}


return true;

}
