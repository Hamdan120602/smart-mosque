"use client";

import {
  Clock,
  Moon,
  Sun,
  Wallet,
  Users,
  CalendarDays,
  Sparkles
} from "lucide-react";

import { useEffect, useState } from "react";

export default function HomePage(){

  const [dark,setDark]=useState(false);
  const [time,setTime]=useState("");

  useEffect(()=>{

    const timer=setInterval(()=>{

      setTime(
        new Date().toLocaleTimeString("id-ID")
      );

    },1000);

    return()=>clearInterval(timer);

  },[]);


  return (

    <main className={
      dark
      ?
      "min-h-screen bg-slate-950 text-white"
      :
      "min-h-screen bg-gradient-to-br from-emerald-50 via-white to-cyan-50 text-slate-900"
    }>


      <header className="flex justify-between items-center px-8 py-6">

        <div>

          <h1 className="text-2xl font-black">
            🕌 Smart Mosque
          </h1>

          <p className="text-sm opacity-60">
            Management System
          </p>

        </div>


        <button
          onClick={()=>setDark(!dark)}
          className="rounded-2xl p-3 bg-white/30 backdrop-blur shadow"
        >

          {
            dark
            ?
            <Sun/>
            :
            <Moon/>
          }

        </button>

      </header>



      <section className="px-8 py-16 grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">


        <div>


          <div className="inline-flex gap-2 items-center rounded-full bg-emerald-500/10 px-5 py-2 text-emerald-600">

            <Sparkles size={18}/>

            Sistem Masjid Digital

          </div>



          <h2 className="mt-8 text-5xl font-black leading-tight">

            Kelola Masjid

            <span className="block text-emerald-500">
              Lebih Modern
            </span>

          </h2>



          <p className="mt-6 text-lg opacity-70">

            Sistem informasi untuk mengelola kas,
            jamaah, agenda dan laporan masjid
            secara cepat dan profesional.

          </p>



          <div className="mt-10 flex gap-5">

            <a
              href="/auth/login"
              className="rounded-2xl bg-emerald-500 px-8 py-4 text-white font-bold shadow-xl"
            >
              Masuk Dashboard
            </a>


            <div className="rounded-2xl px-6 py-4 bg-white/40 backdrop-blur">

              <Clock className="inline mr-2"/>

              {time}

            </div>


          </div>


        </div>




        <div className="grid gap-6">


          <div className="rounded-3xl p-8 bg-white/50 backdrop-blur-xl shadow-xl border">

            <h3 className="text-2xl font-bold">
              Sistem Manajemen Masjid
            </h3>

            <p className="opacity-60 mt-3">
              Kelola seluruh aktivitas masjid dalam satu aplikasi digital.
            </p>


            <div className="mt-8 grid grid-cols-3 gap-4">


              <div className="rounded-3xl p-5 bg-white/70 shadow">

                <Wallet/>

                <p className="mt-3 font-bold">
                  Kas
                </p>

              </div>



              <div className="rounded-3xl p-5 bg-white/70 shadow">

                <Users/>

                <p className="mt-3 font-bold">
                  Jamaah
                </p>

              </div>



              <div className="rounded-3xl p-5 bg-white/70 shadow">

                <CalendarDays/>

                <p className="mt-3 font-bold">
                  Agenda
                </p>

              </div>


            </div>


          </div>


        </div>



      </section>




      <footer className="text-center py-10 opacity-70">

        <p>
          Smart Mosque Management System
        </p>

        <p className="font-bold mt-2">
          Created by Hamdan Mahmud
        </p>

        <p className="text-sm mt-2">
          © 2026 All Rights Reserved
        </p>

      </footer>


    </main>

  );

}
