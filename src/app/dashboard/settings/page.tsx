"use client";


import { useEffect, useState } from "react";

import {
getSettings,
updateSettings,
Settings
} from "@/lib/settings";


import ThemeSelector from "@/components/settings/ThemeSelector";

import {
Building2,
Mail,
Phone,
MapPin,
Globe,
Bell,
Save,
Palette
} from "lucide-react";





export default function SettingsPage(){


const [loading,setLoading]=useState(true);

const [saving,setSaving]=useState(false);



const [form,setForm]=useState<Settings>({

id:1,

nama_masjid:"",

alamat:"",

telepon:"",

email:"",

logo:"",

tema:"emerald",

bahasa:"Indonesia",

notifikasi:true,

timezone:"Asia/Jakarta"

});






useEffect(()=>{

load();

},[]);





async function load(){

const data=await getSettings();


if(data){

setForm(data);

}


setLoading(false);


}







async function save(){


setSaving(true);


const error=await updateSettings(form);


if(error){

alert(error.message);

}

else{

alert("Pengaturan berhasil diperbarui");

}


setSaving(false);


}








if(loading){

return (

<div className="
p-10
text-xl
font-semibold
">

Loading settings...

</div>

)

}







return (


<div className="
min-h-screen
p-6
lg:p-10
space-y-8
">





{/* HEADER */}


<div className="
relative
overflow-hidden
rounded-3xl
p-8
text-white
shadow-xl
"

style={{

background:

"linear-gradient(135deg,var(--primary),var(--secondary))"

}}

>


<div className="
absolute
right-10
top-5
text-8xl
opacity-20
">

🕌

</div>



<h1 className="
text-4xl
font-black
">

Pengaturan Masjid

</h1>


<p className="
mt-3
opacity-90
max-w-xl
">

Kelola identitas masjid, tampilan aplikasi,
dan preferensi sistem Smart Mosque.

</p>


</div>









{/* IDENTITY */}


<div className="
premium-card
p-8
space-y-6
">


<div className="
flex
items-center
gap-3
">


<div className="
p-3
rounded-2xl
bg-emerald-100
text-emerald-700
">

<Building2/>

</div>


<div>

<h2 className="
text-2xl
font-bold
">

Identitas Masjid

</h2>

<p className="
text-slate-500
">

Informasi utama masjid

</p>


</div>


</div>






<div className="
grid
md:grid-cols-2
gap-6
">



<div>

<label className="
font-semibold
">

Nama Masjid

</label>


<div className="
flex
items-center
gap-3
mt-2
border
rounded-2xl
p-3
bg-white/70
">


<Building2
size={20}
/>


<input

className="
w-full
outline-none
bg-transparent
"

value={form.nama_masjid}

onChange={(e)=>

setForm({

...form,

nama_masjid:e.target.value

})

}

/>


</div>


</div>





<div>


<label className="
font-semibold
">

Email

</label>


<div className="
flex
items-center
gap-3
mt-2
border
rounded-2xl
p-3
bg-white/70
">


<Mail
size={20}
/>


<input

className="
w-full
outline-none
bg-transparent
"

value={form.email}

onChange={(e)=>

setForm({

...form,

email:e.target.value

})

}


/>


</div>


</div>



</div>






<div>


<label className="
font-semibold
">

Alamat

</label>


<div className="
flex
gap-3
mt-2
border
rounded-2xl
p-3
bg-white/70
">


<MapPin/>

<textarea

rows={3}

className="
w-full
outline-none
bg-transparent
"

value={form.alamat}

onChange={(e)=>

setForm({

...form,

alamat:e.target.value

})

}


/>


</div>


</div>







<div className="
grid
md:grid-cols-2
gap-6
">



<div>

<label className="
font-semibold
">

Telepon

</label>


<div className="
flex
gap-3
mt-2
border
rounded-2xl
p-3
">


<Phone/>


<input

className="
w-full
outline-none
"

value={form.telepon}

onChange={(e)=>

setForm({

...form,

telepon:e.target.value

})

}


/>


</div>


</div>





<div>

<label className="
font-semibold
">

Timezone

</label>


<div className="
flex
gap-3
mt-2
border
rounded-2xl
p-3
">


<Globe/>


<input

className="
w-full
outline-none
"

value={form.timezone}

onChange={(e)=>

setForm({

...form,

timezone:e.target.value

})

}


/>


</div>


</div>




</div>



</div>










{/* THEME */}


<div className="
premium-card
p-8
space-y-5
">


<div className="
flex
items-center
gap-3
">


<div className="
p-3
rounded-2xl
bg-yellow-100
text-yellow-700
">

<Palette/>

</div>


<div>

<h2 className="
text-2xl
font-bold
">

Theme Studio

</h2>


<p className="
text-slate-500
">

Pilih identitas visual aplikasi

</p>


</div>


</div>





<ThemeSelector

value={form.tema}

onChange={(value)=>

setForm({

...form,

tema:value

})

}

/>



</div>









{/* NOTIFICATION */}


<div className="
premium-card
p-8
flex
justify-between
items-center
">


<div className="
flex
gap-4
items-center
">


<Bell/>


<div>

<h3 className="
font-bold
text-xl
">

Notifikasi

</h3>


<p className="
text-slate-500
">

Aktifkan pemberitahuan sistem

</p>


</div>


</div>





<input

type="checkbox"

className="
w-6
h-6
"

checked={form.notifikasi}

onChange={(e)=>

setForm({

...form,

notifikasi:e.target.checked

})

}


/>


</div>









<button

onClick={save}

disabled={saving}

className="
btn-premium
flex
items-center
gap-3
text-lg
"


>


<Save/>


{

saving

?

"Menyimpan..."

:

"Simpan Pengaturan"

}


</button>






</div>



)

}
