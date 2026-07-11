"use client";

import {
  CalendarDays,
  Clock,
  MapPin
} from "lucide-react";

interface Agenda {
  id: number;
  title: string;
  date: string;
  time?: string;
  location?: string;
  status?: string;
  priority?: string;
}

interface Props {
  agenda?: Agenda[];
}

export default function AgendaCard({
  agenda = []
}: Props) {

  return (

    <div className="premium-card p-6">

      <div className="flex items-center gap-3 mb-6">

        <div
          className="h-11 w-11 rounded-2xl flex items-center justify-center text-white"
          style={{
            background:
              "linear-gradient(135deg,var(--primary),var(--secondary))"
          }}
        >
          <CalendarDays size={22}/>
        </div>

        <div>
          <h2 className="text-xl font-bold">
            Agenda Masjid
          </h2>

          <p className="text-sm opacity-60">
            Kegiatan terbaru
          </p>
        </div>

      </div>

      {agenda.length === 0 ? (

        <div className="py-10 text-center opacity-60">
          Belum ada agenda
        </div>

      ) : (

        <div className="space-y-4">

          {agenda.map((item) => (

            <div
              key={item.id}
              className="rounded-3xl border p-5 transition hover:shadow-lg"
            >

              <div className="flex justify-between gap-4">

                <div>

                  <h3 className="text-lg font-bold">
                    {item.title}
                  </h3>

                  <div className="mt-3 space-y-2 text-sm opacity-70">

                    <div className="flex items-center gap-2">
                      <CalendarDays size={15}/>
                      <span>{item.date}</span>
                    </div>

                    {item.time && (
                      <div className="flex items-center gap-2">
                        <Clock size={15}/>
                        <span>{item.time}</span>
                      </div>
                    )}

                    {item.location && (
                      <div className="flex items-center gap-2">
                        <MapPin size={15}/>
                        <span>{item.location}</span>
                      </div>
                    )}

                  </div>

                </div>

                {item.priority && (

                  <span
                    className="h-fit rounded-full px-3 py-1 text-xs font-semibold"
                    style={{
                      background: "var(--accent)",
                      color: "#111"
                    }}
                  >
                    {item.priority}
                  </span>

                )}

              </div>

            </div>

          ))}

        </div>

      )}

    </div>

  );

}
