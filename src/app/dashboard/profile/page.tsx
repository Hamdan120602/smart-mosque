"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function ProfilePage() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [email, setEmail] = useState("");
  const [nama, setNama] = useState("");
  const [masjid, setMasjid] = useState("");

  useEffect(() => {
    loadProfile();
  }, []);

  async function loadProfile() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (user) {
      setEmail(user.email || "");
      setNama(user.user_metadata?.full_name || "");
      setMasjid(user.user_metadata?.nama_masjid || "");
    }

    setLoading(false);
  }

  async function simpan() {
    setSaving(true);

    const { error } = await supabase.auth.updateUser({
      data: {
        full_name: nama,
        nama_masjid: masjid,
      },
    });

    setSaving(false);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Profil berhasil diperbarui.");
  }

  if (loading) {
    return (
      <div className="p-8">
        Memuat data...
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-3xl shadow-lg p-8">

        <h1 className="text-3xl font-bold mb-8">
          Profil Akun
        </h1>

        <div className="space-y-6">

          <div>
            <label className="block mb-2 font-semibold">
              Email
            </label>

            <input
              disabled
              value={email}
              className="w-full rounded-xl border bg-slate-100 p-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">
              Nama Lengkap
            </label>

            <input
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              className="w-full rounded-xl border p-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">
              Nama Masjid
            </label>

            <input
              value={masjid}
              onChange={(e) => setMasjid(e.target.value)}
              className="w-full rounded-xl border p-3"
            />
          </div>

          <button
            onClick={simpan}
            disabled={saving}
            className="rounded-xl bg-emerald-600 px-6 py-3 text-white hover:bg-emerald-700"
          >
            {saving ? "Menyimpan..." : "Simpan Perubahan"}
          </button>

        </div>

      </div>
    </div>
  );
}
