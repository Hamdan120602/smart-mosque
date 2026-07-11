"use client";


import {
useEffect,
useState
} from "react";


import {
getSettings,
updateSettings,
Settings
} from "@/lib/settings";


import ThemeSwitcher from "@/components/theme/ThemeSwitcher";



export default function SettingsPage(){


const [loading,setLoading]
=
useState(true);


const [saving,setSaving]
=
useState(false);



const [form,setForm]
=
useState<Settings>({

id:1,

nama_masjid:"",

alamat:"",

telepon:"",

email:"",

logo:"",

tema:"Hijau",

bahasa:"Indonesia",

notifikasi:true,

timezone:"Asia/Jakarta"

});





useEffect(()=>{

loadData();

},[]);





async function loadData(){


setLoading(true);


const data =
await getSettings();



if(data){

setForm(data);

}


setLoading(false);


}





async function simpan(){


setSaving(true);


const err =
await updateSettings(form);



if(err){

alert(err.message);

}else{

alert(
"Pengaturan berhasil disimpan."
);

}



setSaving(false);


}






if(loading){

return (

<div
className="
p-10
text-slate-500
"
>

Memuat Pengaturan...

</div>

);

}





return (


<div

className="
max-w-6xl
mx-auto
p-6
space-y-8
"

>



<div>


<h1

className="
text-4xl
font-bold
text-gradient
"

>

Pengaturan Sistem

</h1>



<p

className="
text-slate-500
mt-2
"

>

Kelola identitas masjid dan tampilan aplikasi

</p>


</div>





<ThemeSwitcher />





<div

className="
premium-card
p-8
space-y-8
"

>



<h2

className="
text-2xl
font-bold
"

>

Identitas Masjid

</h2>






<div>


<label className="font-semibold block mb-2">

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

className="input-premium"

/>


</div>





<div>


<label className="font-semibold block mb-2">

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

className="input-premium"

/>


</div>





<div

className="
grid
md:grid-cols-2
gap-6
"

>


<div>

<label className="font-semibold block mb-2">

Telepon

</label>


<input

value={form.telepon}

onChange={(e)=>

setForm({

...form,

telepon:e.target.value

})

}

className="input-premium"

/>


</div>





<div>

<label className="font-semibold block mb-2">

Email

</label>


<input

value={form.email}

onChange={(e)=>

setForm({

...form,

email:e.target.value

})

}

className="input-premium"

/>


</div>



</div>







<div>


<label className="font-semibold block mb-2">

Logo URL

</label>


<input

value={form.logo}

onChange={(e)=>

setForm({

...form,

logo:e.target.value

})

}

className="input-premium"

/>


</div>







<div

className="
grid
md:grid-cols-3
gap-6
"

>


<div>

<label className="font-semibold block mb-2">

Tema Database

</label>


<select

value={form.tema}

onChange={(e)=>

setForm({

...form,

tema:e.target.value

})

}

className="input-premium"

>


<option>
Hijau
</option>


<option>
Biru
</option>


<option>
Gelap
</option>


</select>


</div>





<div>


<label className="font-semibold block mb-2">

Bahasa

</label>


<select

value={form.bahasa}

onChange={(e)=>

setForm({

...form,

bahasa:e.target.value

})

}

className="input-premium"

>


<option>
Indonesia
</option>


<option>
English
</option>


</select>


</div>





<div>


<label className="font-semibold block mb-2">

Timezone

</label>


<input

value={form.timezone}

onChange={(e)=>

setForm({

...form,

timezone:e.target.value

})

}

className="input-premium"

/>


</div>


</div>







<div

className="
flex
items-center
gap-3
"

>


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
w-full
md:w-auto
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


);


}
