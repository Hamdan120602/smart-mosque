"use client";


import { useEffect, useState } from "react";

import {
getSettings,
updateSettings,
Settings
} from "@/lib/settings";


import ThemeSelector from "@/components/settings/ThemeSelector";



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

loadData();

},[]);





async function loadData(){


setLoading(true);


const data=await getSettings();



if(data){

setForm(data);

}



setLoading(false);


}






async function simpan(){


setSaving(true);



const error=await updateSettings(form);



if(error){

alert(error.message);

}

else{

alert("Pengaturan berhasil disimpan");

}



setSaving(false);


}







if(loading){

return (

<div className="
p-10
text-lg
font-semibold
">

Memuat pengaturan...

</div>

)

}






return (

<div className="
max-w-6xl
mx-auto
p-8
space-y-8
">


<div>


<h1 className="
text-4xl
font-black
text-gradient
">

Pengaturan Sistem

</h1>


<p className="
text-slate-500
mt-2
">

Kelola identitas masjid dan tampilan aplikasi

</p>


</div>





<div className="
premium-card
p-8
space-y-8
">





<div>

<label className="
font-bold
block
mb-2
">

Nama Masjid

</label>


<input

value={form.nama_masjid}

onChange={(e)=>

setForm({

...form,

nama_masjid:e.target.value

})

}

className="
w-full
rounded-2xl
border
p-4
"

/>

</div>





<div>

<label className="
font-bold
block
mb-2
">

Alamat

</label>


<textarea

rows={3}

value={form.alamat}

onChange={(e)=>

setForm({

...form,

alamat:e.target.value

})

}

className="
w-full
rounded-2xl
border
p-4
"

/>

</div>






<div className="
grid
md:grid-cols-2
gap-5
">


<input

placeholder="Telepon"

value={form.telepon}

onChange={(e)=>

setForm({

...form,

telepon:e.target.value

})

}

className="
rounded-2xl
border
p-4
"

/>




<input

placeholder="Email"

value={form.email}

onChange={(e)=>

setForm({

...form,

email:e.target.value

})

}

className="
rounded-2xl
border
p-4
"

/>


</div>







<div>

<label className="
font-bold
block
mb-4
">

Tema Tampilan

</label>


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








<div className="
flex
items-center
gap-3
">


<input

type="checkbox"

checked={form.notifikasi}

onChange={(e)=>

setForm({

...form,

notifikasi:e.target.checked

})

}


/>


<span>

Aktifkan Notifikasi

</span>


</div>







<button

onClick={simpan}

disabled={saving}

className="
btn-premium
"

>

{

saving

?

"Menyimpan..."

:

"Simpan Pengaturan"

}


</button>




</div>



</div>


)


}
