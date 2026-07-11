import { supabase } from "./supabase";

export interface Agenda {
  id?: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  status: string;
}

export async function getAgenda() {
  const { data, error } = await supabase
    .from("agenda")
    .select("*")
    .order("date", { ascending: true });

  if (error) throw error;

  return data ?? [];
}

export async function createAgenda(agenda: Agenda) {
  return supabase.from("agenda").insert([agenda]);
}

export async function updateAgenda(id: number, agenda: Agenda) {
  return supabase
    .from("agenda")
    .update(agenda)
    .eq("id", id);
}

export async function deleteAgenda(id: number) {
  return supabase
    .from("agenda")
    .delete()
    .eq("id", id);
}
