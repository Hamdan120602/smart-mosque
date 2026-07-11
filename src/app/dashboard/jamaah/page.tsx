"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Search, Plus, Pencil, Trash2, Users } from "lucide-react";
import { deleteJamaah, getJamaah, Jamaah } from "@/lib/jamaah";

export default function JamaahPage() {
  const [jamaah, setJamaah] = useState<Jamaah[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  async function loadData() {
    setLoading(true);

    try {
      const data = await getJamaah();
      setJamaah(data || []);
    } catch (e) {
      console.error(e);
    }

    setLoading(false);
  }

  useEffect(() => {
    loadData();
  }, []);

  const filtered = useMemo(() => {
    return jamaah.filter((j) =>
      [
        j.name,
        j.nik,
        j.phone,
        j.address,
      ]
        .join(" ")
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [jamaah, search]);

  const total = jamaah.length;

  const aktif = jamaah.filter(
    (x) => x.status === "AKTIF"
  ).length;

  const laki = jamaah.filter(
    (x) => x.gender === "LAKI_LAKI"
  ).length;

  const perempuan = jamaah.filter(
    (x) => x.gender === "PEREMPUAN"
  ).length;

  async function hapus(id: number) {
    if (!confirm("Hapus data jamaah ini?")) return;

    await deleteJamaah(id);

    loadData();
  }

  return (
    <div className="space-y-6">

      <div className="flex justify-between items-center">

        <div>

          <h1 className="text-3xl font-bold">
            Data Jamaah
          </h1>

          <p className="text-gray-500">
            Kelola data jamaah masjid
          </p>

        </div>

        <Link
          href="/dashboard/jamaah/tambah"
          className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 rounded-xl"
        >
          <Plus size={18}/>
          Tambah Jamaah
        </Link>

      </div>

      <div className="grid md:grid-cols-4 gap-5">

        <Card title="Total Jamaah" value={total}/>
        <Card title="Aktif" value={aktif}/>
        <Card title="Laki-laki" value={laki}/>
        <Card title="Perempuan" value={perempuan}/>

      </div>

      <div className="bg-white rounded-xl shadow">

        <div className="p-5 border-b">

          <div className="relative">

            <Search
              className="absolute left-3 top-3 text-gray-400"
              size={18}
            />

            <input
              value={search}
              onChange={(e)=>setSearch(e.target.value)}
              placeholder="Cari nama, NIK, nomor HP..."
              className="w-full border rounded-xl pl-10 pr-4 py-3"
            />

          </div>

        </div>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-gray-100">

            <tr>

              <th className="p-4 text-left">Nama</th>
              <th className="p-4 text-left">NIK</th>
              <th className="p-4 text-left">HP</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-center">Aksi</th>

            </tr>

            </thead>

            <tbody>

            {loading && (

              <tr>

                <td
                  colSpan={5}
                  className="p-10 text-center"
                >
                  Memuat...
                </td>

              </tr>

            )}

            {!loading && filtered.length===0 && (

              <tr>

                <td
                  colSpan={5}
                  className="p-10 text-center text-gray-500"
                >
                  Tidak ada data.
                </td>

              </tr>

            )}

            {filtered.map((j)=>(

              <tr
                key={j.id}
                className="border-t hover:bg-gray-50"
              >

                <td className="p-4 font-medium">

                  <div className="flex items-center gap-3">

                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">

                      <Users size={18}/>

                    </div>

                    {j.name}

                  </div>

                </td>

                <td>{j.nik}</td>

                <td>{j.phone}</td>

                <td>

                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">

                    {j.status}

                  </span>

                </td>

                <td>

                  <div className="flex justify-center gap-4">

                    <Link href={`/dashboard/jamaah/edit/${j.id}`}>

                      <Pencil
                        className="text-blue-600"
                        size={18}
                      />

                    </Link>

                    <button
                      onClick={()=>hapus(j.id!)}
                    >

                      <Trash2
                        className="text-red-600"
                        size={18}
                      />

                    </button>

                  </div>

                </td>

              </tr>

            ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

function Card({
  title,
  value,
}:{
  title:string;
  value:number;
}){

  return(

<div className="bg-white rounded-xl shadow p-6">

<p className="text-gray-500">

{title}

</p>

<h2 className="text-3xl font-bold mt-2">

{value}

</h2>

</div>

  )

}
