import { supabase } from "./supabase";

export interface Jamaah {
  id?: number;
  name: string;
  nik: string;
  gender: "LAKI_LAKI" | "PEREMPUAN";
  birth_date: string;
  phone: string;
  address: string;
  occupation: string;
  group_name: string;
  status: "AKTIF" | "NONAKTIF";
  join_date: string;
  notes: string;
  created_at?: string;
}

export async function getJamaah() {
  const { data, error } = await supabase
    .from("jamaah")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;

  return data;
}

export async function createJamaah(jamaah: Jamaah) {
  const { error } = await supabase
    .from("jamaah")
    .insert([jamaah]);

  if (error) throw error;
}

export async function updateJamaah(id: number, jamaah: Jamaah) {
  const { error } = await supabase
    .from("jamaah")
    .update(jamaah)
    .eq("id", id);

  if (error) throw error;
}

export async function deleteJamaah(id: number) {
  const { error } = await supabase
    .from("jamaah")
    .delete()
    .eq("id", id);

  if (error) throw error;
}
