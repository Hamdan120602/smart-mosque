"use client";


import {
useState
} from "react";


import {
supabase
} from "@/lib/supabase";


import {
useRouter
} from "next/navigation";


import Link from "next/link";


import {
Lock,
Mail,
Eye,
EyeOff,
LogIn,
Sparkles
} from "lucide-react";





export default function LoginPage(){


const router = useRouter();


const [email,setEmail]=useState("");

const [password,setPassword]=useState("");

const [loading,setLoading]=useState(false);

const [error,setError]=useState("");

const [showPassword,setShowPassword]=useState(false);





async function handleLogin(
e:React.FormEvent
){


e.preventDefault();


setLoading(true);

setError("");



const {
data,
error
}=await supabase.auth.signInWithPassword({

email,

password

});




if(error){

setError(
"Email atau password tidak valid"
);

setLoading(false);

return;

}




if(data.user){

router.push("/dashboard");

router.refresh();

}




setLoading(false);


}







return (

<div

className="
min-h-screen
flex
items-center
justify-center
bg-slate-100
p-6
"

>


<div

className="
absolute
inset-0
overflow-hidden
"

>

<div

className="
absolute
-top-40
-left-40
h-96
w-96
rounded-full
bg-emerald-400/20
blur-3xl
"

/>


<div

className="
absolute
-bottom-40
-right-40
h-96
w-96
rounded-full
bg-blue-400/20
blur-3xl
"

/>


</div>







<div

className="
relative
w-full
max-w-md
"

>


<div

className="
rounded-[32px]
bg-white
shadow-2xl
border
border-slate-200
p-8
"

>



<div

className="
flex
justify-center
mb-6
"

>


<div

className="
h-20
w-20
rounded-3xl
flex
items-center
justify-center
text-white
shadow-xl
"

style={{

background:
"linear-gradient(135deg,var(--primary),var(--secondary))"

}}

>

<Sparkles size={36}/>

</div>


</div>





<h1

className="
text-center
text-3xl
font-black
text-slate-800
"

>

Smart Mosque

</h1>


<p

className="
text-center
text-sm
text-slate-500
mt-2
"

>

Management System

</p>






<form

onSubmit={handleLogin}

className="
mt-8
space-y-5
"

>



{
error &&

<div

className="
rounded-2xl
bg-red-50
border
border-red-200
p-4
text-sm
text-red-600
"

>

{error}

</div>

}






<div>


<label className="
text-sm
font-semibold
text-slate-700
">

Email

</label>


<div

className="
relative
mt-2
"

>


<Mail

size={18}

className="
absolute
left-4
top-1/2
-translate-y-1/2
text-slate-400
"

/>



<input

type="email"

required

value={email}

onChange={
e=>setEmail(e.target.value)
}

placeholder="admin@masjid.com"

className="
w-full
rounded-2xl
border
p-4
pl-12
outline-none
focus:ring-2
focus:ring-emerald-500
"

/>


</div>


</div>







<div>


<label className="
text-sm
font-semibold
text-slate-700
">

Password

</label>



<div

className="
relative
mt-2
"

>


<Lock

size={18}

className="
absolute
left-4
top-1/2
-translate-y-1/2
text-slate-400
"

/>



<input

type={
showPassword
?
"text"
:
"password"
}

required

value={password}

onChange={
e=>setPassword(e.target.value)
}

placeholder="••••••••"

className="
w-full
rounded-2xl
border
p-4
pl-12
pr-12
outline-none
focus:ring-2
focus:ring-emerald-500
"

/>



<button

type="button"

onClick={()=>setShowPassword(!showPassword)}

className="
absolute
right-4
top-1/2
-translate-y-1/2
text-slate-400
"

>


{
showPassword
?
<EyeOff size={18}/>
:
<Eye size={18}/>
}


</button>



</div>


</div>








<button

disabled={loading}

className="
w-full
rounded-2xl
bg-emerald-600
hover:bg-emerald-700
py-4
text-white
font-bold
flex
items-center
justify-center
gap-2
transition
disabled:opacity-50
"

>


<LogIn size={20}/>


{

loading
?
"Memverifikasi..."
:
"Masuk Dashboard"

}


</button>





</form>







<div

className="
mt-6
text-center
text-sm
"

>


Belum punya akun?


<Link

href="/auth/register"

className="
ml-1
font-bold
text-emerald-600
"

>

Daftar Takmir

</Link>


</div>





</div>


</div>


</div>


)


}
