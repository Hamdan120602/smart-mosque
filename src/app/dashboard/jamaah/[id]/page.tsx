"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, Phone, MapPin, Briefcase, Calendar, User } from "lucide-react";
import { getJamaah, Jamaah } from "@/lib/jamaah";

export default function DetailJamaahPage() {
  const { id } = useParams();
  const router = useRouter();

  const [jamaah, setJamaah] = useState<Jamaah | null>(null);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    const data = await getJamaah();
    const item = data.find((x: any) => x.id == id);

    if (item) {
      setJamaah(item);
    }
  }

  if (!jamaah) {
    return (
      <div className="p-10 text-center">
        Memuat...
      </div>
    );
  }

  return (
    <div className="space-y-6">

      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 text-emerald-600"
      >
        <ArrowLeft size={18}/>
        Kembali
      </button>

      <div className="bg-white rounded-2xl shadow p-8">

        <div className="flex gap-8 items-center">

          <div className="w-32 h-32 rounded-full bg-emerald-100 flex items-center justify-center">

            <User size={60}/>

          </div>

          <div>

            <h1 className="text-3xl font-bold">
              {jamaah.name}
            </h1>

            <p className="text-gray-500">
              NIK : {jamaah.nik}
            </p>

            <span className="mt-3 inline-block px-4 py-2 rounded-full bg-green-100 text-green-700">
              {jamaah.status}
            </span>

          </div>

        </div>

      </div>

      <div className="grid md:grid-cols-2 gap-6">

        <div className="bg-white rounded-2xl shadow p-6">

          <h2 className="font-bold text-xl mb-5">
            Informasi Pribadi
          </h2>

          <Info icon={<Phone size={18}/>} label="Telepon" value={jamaah.phone}/>
          <Info icon={<MapPin size={18}/>} label="Alamat" value={jamaah.address}/>
          <Info icon={<Briefcase size={18}/>} label="Pekerjaan" value={jamaah.occupation}/>
          <Info icon={<Calendar size={18}/>} label="Tanggal Lahir" value={jamaah.birth_date}/>
          <Info icon={<Calendar size={18}/>} label="Gabung" value={jamaah.join_date}/>

        </div>

        <div className="bg-white rounded-2xl shadow p-6">

          <h2 className="font-bold text-xl mb-5">
            Catatan
          </h2>

          <p className="text-gray-600 whitespace-pre-wrap">
            {jamaah.notes || "-"}
          </p>

        </div>

      </div>

    </div>
  );
}

function Info({
  icon,
  label,
  value
}: any) {
  return (
    <div className="flex gap-3 border-b py-3">
      <div className="text-emerald-600">
        {icon}
      </div>
      <div>
        <p className="text-sm text-gray-500">
          {label}
        </p>
        <p className="font-medium">
          {value || "-"}
        </p>
      </div>
    </div>
  );
}
