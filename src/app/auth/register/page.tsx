'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [namaMasjid, setNamaMasjid] = useState('Masjid Riyadhul Jannah'); // Default Nama Masjid Anda
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');
    setSuccessMsg('');

    // Daftarkan user ke Supabase Auth
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          nama_masjid: namaMasjid
        }
      }
    });

    if (authError) {
      setErrorMsg(authError.message);
      setLoading(false);
      return;
    }

    if (authData?.user) {
      setSuccessMsg('Registrasi berhasil! Silakan cek email Anda untuk konfirmasi atau langsung coba login.');
      setTimeout(() => {
        router.push('/auth/login');
      }, 3000);
    }
    
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 text-slate-800">
      <div className="sm:mx-auto w-full max-w-md">
        <h2 className="text-center text-3xl font-extrabold text-slate-900">
          Daftar Akun Takmir Baru
        </h2>
        <p className="mt-2 text-center text-sm text-slate-600">
          Atau{' '}
          <Link href="/auth/login" className="font-medium text-emerald-600 hover:text-emerald-500">
            masuk ke akun yang sudah ada
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto w-full max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-xl sm:px-10 border border-slate-100">
          <form className="space-y-6" onSubmit={handleRegister}>
            {errorMsg && (
              <div className="bg-red-50 text-red-700 p-3 rounded-lg text-sm border border-red-100">
                {errorMsg}
              </div>
            )}
            {successMsg && (
              <div className="bg-emerald-50 text-emerald-700 p-3 rounded-lg text-sm border border-emerald-100">
                {successMsg}
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-slate-700">Nama Masjid</label>
              <div className="mt-1">
                <input
                  type="text"
                  required
                  disabled
                  value={namaMasjid}
                  className="appearance-none block w-full px-3 py-2 border border-slate-200 bg-slate-50 text-slate-500 rounded-lg cursor-not-allowed sm:text-sm font-semibold"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700">Alamat Email</label>
              <div className="mt-1">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-slate-300 rounded-lg shadow-sm placeholder-slate-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                  placeholder="takmir@riyadhuljannah.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700">Password</label>
              <div className="mt-1">
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-slate-300 rounded-lg shadow-sm placeholder-slate-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 disabled:opacity-50 transition"
              >
                {loading ? 'Mendaftarkan...' : 'Daftar Sekarang'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
