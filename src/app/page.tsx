import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* NAVBAR */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-emerald-600">SmartMasjid</span>
            <span className="bg-emerald-100 text-emerald-800 text-xs px-2 py-0.5 rounded-full font-medium">SaaS</span>
          </div>
          <div className="hidden md:flex items-center gap-8 font-medium text-slate-600">
            <a href="#fitur" className="hover:text-emerald-600 transition">Fitur</a>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/auth/login" className="px-4 py-2 text-emerald-600 hover:bg-emerald-50 rounded-lg font-medium transition">
              Masuk
            </Link>
            <Link href="/auth/register" className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium shadow-sm transition">
              Daftar Takmir
            </Link>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center md:text-left md:flex items-center justify-between gap-12">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            Modernisasi Manajemen <span className="text-emerald-600">Masjid Anda</span> Secara Transparan
          </h1>
          <p className="text-lg text-slate-600">
            Platform SaaS terintegrasi untuk mengelola keuangan kas, jadwal kegiatan, waktu shalat otomatis, hingga donasi QRIS dalam satu dashboard terpadu.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Link href="/auth/register" className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl shadow-md transition">
              Mulai Sekarang (Gratis)
            </Link>
            <a href="#fitur" className="px-6 py-3 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold rounded-xl shadow-sm transition">
              Pelajari Fitur
            </a>
          </div>
        </div>
        <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
          <div className="w-80 h-80 md:w-96 md:h-96 bg-emerald-100 rounded-3xl flex items-center justify-center relative shadow-inner">
            <span className="text-8xl">🕌</span>
            <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg flex items-center gap-3">
              <span className="text-2xl text-emerald-500">📈</span>
              <div>
                <p className="text-xs text-slate-400">Kas Masjid</p>
                <p className="text-sm font-bold text-slate-800">100% Transparan</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* FEATURE SECTION */}
      <section id="fitur" className="bg-white py-20 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Fitur Unggulan untuk Takmir & Jamaah</h2>
            <p className="text-slate-600">Satu aplikasi dengan akses multi-tenant, dirancang khusus untuk memenuhi kebutuhan ekosistem masjid modern.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-md transition">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center text-2xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Kas Digital</h3>
              <p className="text-slate-600 text-sm">Pencatatan keuangan masuk & keluar real-time yang langsung terintegrasi ke sistem cloud.</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-md transition">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center text-2xl mb-4">📅</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Jadwal & Agenda</h3>
              <p className="text-slate-600 text-sm">Kelola informasi jadwal shalat Jumat, nama khatib/imam, serta agenda kajian berkala.</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-md transition">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center text-2xl mb-4">⏰</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Jadwal Shalat API</h3>
              <p className="text-slate-600 text-sm">Waktu shalat otomatis menyesuaikan koordinat/kota lokasi masjid secara real-time.</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-md transition">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center text-2xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Donasi QRIS</h3>
              <p className="text-slate-600 text-sm">Kemudahan infak digital secara non-tunai langsung via scan gambar QRIS takmir.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-400 py-8 border-t border-slate-800 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} SmartMasjid SaaS. Tugas UAS Pemrograman Web.</p>
      </footer>
    </div>
  );
}
