"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { getJamaah, updateJamaah } from "@/lib/jamaah";

export default function EditJamaahPage() {
  const { id } = useParams();
  const router = useRouter();

  const [loading, setLoading] = useState(true);

  const [form, setForm] = useState({
    name: "",
    nik: "",
    gender: "LAKI_LAKI",
    birth_date: "",
    phone: "",
    address: "",
    occupation: "",
    group_name: "",
    status: "AKTIF",
    join_date: "",
    notes: "",
  });

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    const data = await getJamaah();

    const item = data.find((x:any)=>x.id==id);

    if(item){

      setForm({
        name:item.name ?? "",
        nik:item.nik ?? "",
        gender:item.gender ?? "LAKI_LAKI",
        birth_date:item.birth_date ?? "",
        phone:item.phone ?? "",
        address:item.address ?? "",
        occupation:item.occupation ?? "",
        group_name:item.group_name ?? "",
        status:item.status ?? "AKTIF",
        join_date:item.join_date ?? "",
        notes:item.notes ?? ""
      });

    }

    setLoading(false);
  }

  function change(e:any){

    setForm({

      ...form,

      [e.target.name]:e.target.value

    });

  }

  async function submit(e:any){

    e.preventDefault();

    await updateJamaah(Number(id),form);

    alert("Data berhasil diupdate");

    router.push("/dashboard/jamaah");

  }

  if(loading){

    return <div>Memuat...</div>

  }

  return(

<div className="max-w-4xl mx-auto">

<div className="bg-white rounded-xl shadow p-8">

<h1 className="text-3xl font-bold mb-8">

Edit Jamaah

</h1>

<form
onSubmit={submit}
className="grid grid-cols-2 gap-6"
>

<div>

<label>Nama</label>

<input
name="name"
value={form.name}
onChange={change}
className="w-full border rounded-lg p-3 mt-2"
/>

</div>

<div>

<label>NIK</label>

<input
name="nik"
value={form.nik}
onChange={change}
className="w-full border rounded-lg p-3 mt-2"
/>

</div>

<div>

<label>Jenis Kelamin</label>

<select
name="gender"
value={form.gender}
onChange={change}
className="w-full border rounded-lg p-3 mt-2"
>

<option value="LAKI_LAKI">Laki-laki</option>

<option value="PEREMPUAN">Perempuan</option>

</select>

</div>

<div>

<label>No HP</label>

<input
name="phone"
value={form.phone}
onChange={change}
className="w-full border rounded-lg p-3 mt-2"
/>

</div>

<div className="col-span-2">

<label>Alamat</label>

<textarea
rows={3}
name="address"
value={form.address}
onChange={change}
className="w-full border rounded-lg p-3 mt-2"
/>

</div>

<div>

<label>Pekerjaan</label>

<input
name="occupation"
value={form.occupation}
onChange={change}
className="w-full border rounded-lg p-3 mt-2"
/>

</div>

<div>

<label>Status</label>

<select
name="status"
value={form.status}
onChange={change}
className="w-full border rounded-lg p-3 mt-2"
>

<option value="AKTIF">Aktif</option>

<option value="NONAKTIF">Non Aktif</option>

</select>

</div>

<div className="col-span-2">

<label>Catatan</label>

<textarea
rows={4}
name="notes"
value={form.notes}
onChange={change}
className="w-full border rounded-lg p-3 mt-2"
/>

</div>

<div className="col-span-2 flex justify-end gap-3">

<button
type="button"
onClick={()=>router.back()}
className="px-5 py-3 border rounded-lg"
>

Batal

</button>

<button
className="bg-emerald-600 text-white px-6 py-3 rounded-lg"
>

Update

</button>

</div>

</form>

</div>

</div>

);

}
