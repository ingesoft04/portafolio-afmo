import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
const geist = Geist({variable:"--font-geist",subsets:["latin"]});
const mono = Geist_Mono({variable:"--font-mono",subsets:["latin"]});
export const metadata: Metadata = {title:"Andrés Felipe Martínez | Software, Security & Infrastructure",description:"Software engineer and information security specialist available for remote work and freelance projects."};
export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang="es"><body className={`${geist.variable} ${mono.variable}`}>{children}</body></html>}
