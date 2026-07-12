import { supabase } from "./supabase";

export async function getDashboardData() {
  const jamaah = await supabase
    .from("jamaah")
    .select("*", {
      count: "exact",
      head: true,
    });

  const agenda = await supabase
    .from("agenda")
    .select("*", {
      count: "exact",
      head: true,
    });

  const transactions = await supabase
    .from("transactions")
    .select("*")
    .order("created_at", {
      ascending: false,
    })
    .limit(5);

  const agendaList = await supabase
    .from("agenda")
    .select("*")
    .order("date", {
      ascending: true,
    })
    .limit(5);

  let pemasukan = 0;
  let pengeluaran = 0;

  (transactions.data ?? []).forEach((item: any) => {
    if (item.type === "income") {
      pemasukan += Number(item.amount);
    }

    if (item.type === "expense") {
      pengeluaran += Number(item.amount);
    }
  });

  return {
    jamaah: jamaah.count ?? 0,
    agenda: agenda.count ?? 0,
    pemasukan,
    pengeluaran,
    saldo: pemasukan - pengeluaran,
    transactions: transactions.data ?? [],
    agendaList: agendaList.data ?? [],
  };
}
