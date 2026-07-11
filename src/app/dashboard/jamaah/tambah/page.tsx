"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createJamaah } from "@/lib/jamaah";

export default function TambahJamaahPage() {
  const router = useRouter();

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
    join_date: new Date().toISOString().slice(0,10),
    notes: "",
  });

  const [loading,setLoading]=useState(false);

  function change(e:any){
    setForm({
      ...form,
      [e.target.name]:e.target.value
    });
  }

  async function submit(e:any){
    e.preventDefault();

    setLoading(true);

    try{

      await createJamaah(form);

      alert("Data berhasil disimpan");

      router.push("/dashboard/jamaah");

    }catch(err){

      console.error(err);

      alert("Gagal menyimpan data");

    }

    setLoading(false);

  }

  return(

<div className="max-w-4xl mx-auto">

<div className="bg-white rounded-xl shadow p-8">

<h1 className="text-3xl font-bold mb-8">
Tambah Jamaah
</h1>

<form
onSubmit={submit}
className="grid grid-cols-2 gap-6"
>

<div>
<label>Nama</label>

<input
name="name"
required
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

<option value="LAKI_LAKI">
Laki-laki
</option>

<option value="PEREMPUAN">
Perempuan
</option>

</select>

</div>

<div>

<label>Tanggal Lahir</label>

<input
type="date"
name="birth_date"
value={form.birth_date}
onChange={change}
className="w-full border rounded-lg p-3 mt-2"
/>

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

<div>

<label>Pekerjaan</label>

<input
name="occupation"
value={form.occupation}
onChange={change}
className="w-full border rounded-lg p-3 mt-2"
/>

</div>

<div className="col-span-2">

<label>Alamat</label>

<textarea
name="address"
rows={3}
value={form.address}
onChange={change}
className="w-full border rounded-lg p-3 mt-2"
/>

</div>

<div>

<label>Kelompok</label>

<input
name="group_name"
value={form.group_name}
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

<option value="AKTIF">
Aktif
</option>

<option value="NONAKTIF">
Non Aktif
</option>

</select>

</div>

<div>

<label>Tanggal Bergabung</label>

<input
type="date"
name="join_date"
value={form.join_date}
onChange={change}
className="w-full border rounded-lg p-3 mt-2"
/>

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
className="px-5 py-3 rounded-lg border"
>

Batal

</button>

<button
disabled={loading}
className="px-6 py-3 rounded-lg bg-emerald-600 text-white"
>

{loading ? "Menyimpan..." : "Simpan"}

</button>

</div>

</form>

</div>

</div>

  );

}
