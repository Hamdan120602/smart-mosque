import {
  LayoutDashboard,
  Wallet,
  Users,
  CalendarDays,
  Boxes,
  FileBarChart2,
  Settings,
} from 'lucide-react';

export const navigation = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: LayoutDashboard,
  },
  {
    title: 'Kas',
    href: '/dashboard/kas',
    icon: Wallet,
  },
  {
    title: 'Jamaah',
    href: '/dashboard/jamaah',
    icon: Users,
  },
  {
    title: 'Agenda',
    href: '/dashboard/agenda',
    icon: CalendarDays,
  },
  {
    title: 'Inventaris',
    href: '/dashboard/inventaris',
    icon: Boxes,
  },
  {
    title: 'Laporan',
    href: '/dashboard/laporan',
    icon: FileBarChart2,
  },
  {
    title: 'Pengaturan',
    href: '/dashboard/settings',
    icon: Settings,
  },
];
