import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Smart Mosque",
  description: "Modern Mosque Management System",
  manifest: "/manifest.json",
  icons:{
    icon:"/icon-192.png",
    apple:"/icon-192.png"
  }
};

export const viewport: Viewport = {
  themeColor:"#059669"
};

export default function RootLayout({
 children,
}:{
 children:React.ReactNode;
}){

return(
<html lang="id">
<body>
{children}
</body>
</html>
)

}
