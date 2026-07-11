import { supabase } from "./supabase";

export interface Settings {
  id?: number;
  nama_masjid: string;
  alamat: string;
  telepon: string;
  email: string;
  logo: string;
  tema: string;
  bahasa: string;
  notifikasi: boolean;
  timezone: string;
}

export async function getSettings(): Promise<Settings | null> {
  const { data, error } = await supabase
    .from("settings")
    .select("*")
    .limit(1)
    .single();

  if (error) {
    console.error(error);
    return null;
  }

  return data;
}

export async function updateSettings(settings: Settings) {
  const { error } = await supabase
    .from("settings")
    .update({
      nama_masjid: settings.nama_masjid,
      alamat: settings.alamat,
      telepon: settings.telepon,
      email: settings.email,
      logo: settings.logo,
      tema: settings.tema,
      bahasa: settings.bahasa,
      notifikasi: settings.notifikasi,
      timezone: settings.timezone,
      updated_at: new Date().toISOString(),
    })
    .eq("id", settings.id);

  return error;
}
