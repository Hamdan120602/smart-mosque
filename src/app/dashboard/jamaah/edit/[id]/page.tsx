"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useJamaah } from "../../hooks/useJamaah";


export default function EditJamaahPage(){

  const params = useParams();
  const router = useRouter();

  const id = params.id as string;

  const {
    jamaah,
    updateJamaah
  } = useJamaah();


  const [form,setForm] = useState({
    name:"",
    nik:"",
    gender:"LAKI-LAKI",
    birth_date:"",
    phone:"",
    address:"",
    occupation:"",
    status:"",
    join_date:"",
    notes:""
  });



  useEffect(()=>{

    const data = jamaah.find(
      item => item.id === Number(id)
    );

    if(data){

      setForm({
        name:data.name,
        nik:data.nik,
        gender:data.gender,
        birth_date:data.birthDate,
        phone:data.phone,
        address:data.address,
        occupation:data.occupation,
        status:data.status,
        join_date:data.joinDate,
        notes:data.notes
      });

    }

  },[id, jamaah]);




  function handleChange(
    e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ){

    setForm({
      ...form,
      [e.target.name]:e.target.value
    });

  }




  async function handleSubmit(
    e:React.FormEvent
  ){

    e.preventDefault();


    await updateJamaah(
      Number(id),
      {
        ...form,
        gender:
          form.gender as "LAKI-LAKI" | "PEREMPUAN",
        status:
          form.status as any
      }
    );


    alert("Data berhasil diupdate");

    router.push("/dashboard/jamaah");

  }




return (

<div className="p-6 space-y-6">


<h1 className="text-3xl font-bold">
Edit Jamaah
</h1>



<form
onSubmit={handleSubmit}
className="bg-white rounded-xl shadow p-6 space-y-4"
>



<input
name="name"
value={form.name}
onChange={handleChange}
placeholder="Nama"
className="border p-3 rounded w-full"
/>



<input
name="nik"
value={form.nik}
onChange={handleChange}
placeholder="NIK"
className="border p-3 rounded w-full"
/>



<select
name="gender"
value={form.gender}
onChange={handleChange}
className="border p-3 rounded w-full"
>

<option value="LAKI-LAKI">
Laki-laki
</option>

<option value="PEREMPUAN">
Perempuan
</option>

</select>



<input
name="phone"
value={form.phone}
onChange={handleChange}
placeholder="Telepon"
className="border p-3 rounded w-full"
/>



<input
name="occupation"
value={form.occupation}
onChange={handleChange}
placeholder="Pekerjaan"
className="border p-3 rounded w-full"
/>



<textarea
name="address"
value={form.address}
onChange={handleChange}
placeholder="Alamat"
className="border p-3 rounded w-full"
/>



<textarea
name="notes"
value={form.notes}
onChange={handleChange}
placeholder="Catatan"
className="border p-3 rounded w-full"
/>



<button
type="submit"
className="bg-blue-600 text-white px-6 py-3 rounded-xl"
>
Simpan Perubahan
</button>


</form>


</div>

);


}
