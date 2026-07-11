import Card from '@/components/ui/Card';

const activities = [
  {
    title: 'Kas Masuk',
    time: '5 menit lalu',
  },
  {
    title: 'Tambah Jamaah',
    time: '18 menit lalu',
  },
  {
    title: 'Agenda Jumat',
    time: '1 jam lalu',
  },
  {
    title: 'Update Inventaris',
    time: '3 jam lalu',
  },
];

export default function ActivityCard() {
  return (
    <Card className="p-6 h-[360px]">

      <h2 className="text-lg font-semibold text-slate-900">
        Aktivitas Terbaru
      </h2>

      <div className="mt-8 space-y-6">

        {activities.map((item) => (

          <div
            key={item.title}
            className="flex gap-4"
          >

            <div className="mt-1 h-3 w-3 rounded-full bg-emerald-500"/>

            <div>

              <p className="font-medium text-slate-800">

                {item.title}

              </p>

              <p className="text-sm text-slate-500">

                {item.time}

              </p>

            </div>

          </div>

        ))}

      </div>

    </Card>
  );
}
