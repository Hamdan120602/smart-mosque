import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Smart Mosque",
  description: "Modern Mosque Management System",
  manifest: "/manifest.json",
  icons:{
    icon:"/icon-192.png"
  }
};

export default function RootLayout({
children,
}:{
children:React.ReactNode;
}){

return (

<html lang="id">

<body>

{children}

<Footer/>

</body>

</html>

);

}
