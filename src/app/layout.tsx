import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Smart Mosque",
  description: "Modern Mosque Management System",
  manifest: "/manifest.json",
  themeColor: "#10b981",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Smart Mosque"
  },
  icons: {
    icon: "/icon-192.png",
    apple: "/icon-192.png"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
