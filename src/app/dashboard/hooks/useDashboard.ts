"use client";

import { useEffect, useState } from "react";

interface DashboardData {
  jamaah: number;
  agenda: number;
  saldo: number;
  pemasukan: number;
  pengeluaran: number;
  transactions: any[];
  agendaList: any[];
}

const initialData: DashboardData = {
  jamaah: 0,
  agenda: 0,
  saldo: 0,
  pemasukan: 0,
  pengeluaran: 0,
  transactions: [],
  agendaList: [],
};

export function useDashboard() {
  const [data, setData] = useState<DashboardData>(initialData);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/dashboard", {
          cache: "no-store",
        });

        const json = await res.json();

        setData(json);
      } catch (err) {
        console.error(err);
      }
    }

    load();

    const timer = setInterval(load, 10000);

    return () => clearInterval(timer);
  }, []);

  return data;
}
