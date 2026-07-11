import type { Metadata } from "next";

import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";

import "./globals.css";

import {
ThemeProvider
} from "@/context/ThemeContext";



export const metadata: Metadata = {

title:"Smart Mosque",

description:
"Sistem Manajemen Masjid Modern"

};



export default function RootLayout({

children,

}:{

children:React.ReactNode;

}){


return (

<html lang="id">


<body
className="
min-h-screen
antialiased
"
>


<ThemeProvider>

{children}

</ThemeProvider>


</body>


</html>

);

}
