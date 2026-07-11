'use client';

import {
createContext,
useContext,
useEffect,
useState
} from 'react';

import {
Session,
User
} from '@supabase/supabase-js';

import { supabase } from '@/lib/supabase';

type AuthContextType={

user:User|null;

session:Session|null;

loading:boolean;

refreshUser:()=>Promise<void>;

logout:()=>Promise<void>;

};

const AuthContext=createContext<AuthContextType>({

user:null,

session:null,

loading:true,

refreshUser:async()=>{},

logout:async()=>{}

});

export function AuthProvider({

children

}:{

children:React.ReactNode

}){

const[session,setSession]=useState<Session|null>(null);

const[user,setUser]=useState<User|null>(null);

const[loading,setLoading]=useState(true);



const refreshUser=async()=>{

const{

data

}=await supabase.auth.getSession();

setSession(data.session);

setUser(data.session?.user??null);

};



useEffect(()=>{

refreshUser().finally(()=>{

setLoading(false);

});



const{

data:listener

}=supabase.auth.onAuthStateChange(

(_event,session)=>{

setSession(session);

setUser(session?.user??null);

setLoading(false);

}

);



return()=>{

listener.subscription.unsubscribe();

};

},[]);



const logout=async()=>{

await supabase.auth.signOut();

window.location.href="/auth/login";

};



return(

<AuthContext.Provider

value={{

user,

session,

loading,

refreshUser,

logout

}}

>

{children}

</AuthContext.Provider>

);

}



export function useAuth(){

return useContext(AuthContext);

}
