"use client";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { useEffect, useState } from "react";

export default function RevenueChart() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    async function load() {
      const res = await fetch("/api/dashboard");
      const json = await res.json();

      const transaksi = json.transactions ?? [];

      const bulan = [
        "Jan","Feb","Mar","Apr","Mei","Jun",
        "Jul","Agu","Sep","Okt","Nov","Des"
      ];

      const map = new Array(12).fill(0);

      transaksi.forEach((t:any)=>{
        if(t.type==="income"){
          const d = new Date(t.created_at);
          map[d.getMonth()] += Number(t.amount);
        }
      });

      setData(
        bulan.map((b,i)=>({
          month:b,
          value:map[i]
        }))
      );
    }

    load();
  }, []);

  return (
    <div className="premium-card p-6 h-[380px]">

      <h2 className="text-xl font-bold mb-6">
        Grafik Pemasukan
      </h2>

      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="income" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#16a34a"/>
              <stop offset="95%" stopColor="#16a34a" stopOpacity={0}/>
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3"/>

          <XAxis dataKey="month"/>

          <YAxis/>

          <Tooltip/>

          <Area
            type="monotone"
            dataKey="value"
            stroke="#16a34a"
            fill="url(#income)"
          />
        </AreaChart>
      </ResponsiveContainer>

    </div>
  );
}
