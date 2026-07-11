"use client";

import { supabase } from "../supabase";


export async function getCurrentUser(){

const {
data
}=await supabase.auth.getUser();


return data.user;

}



export async function logout(){

await supabase.auth.signOut();


window.location.href="/auth/login";

}
