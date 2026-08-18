import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./recruiter.css";
const geist = Geist({variable:"--font-geist",subsets:["latin"]});
const mono = Geist_Mono({variable:"--font-mono",subsets:["latin"]});
const siteUrl = new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000");
export const metadata: Metadata = {
  metadataBase:siteUrl,
  title:"Andrés Felipe Martínez | Software, Security & Infrastructure",
  description:"Bilingual portfolio of a software engineer and information security specialist with experience in infrastructure, client support, ISO/IEC 27001, and automotive mechatronics.",
  keywords:["software engineer","information security","cybersecurity","ISO 27001","Windows Server","Linux","Docker","remote support","automotive mechatronics","Colombia"],
  authors:[{name:"Andrés Felipe Martínez Obando"}],
  creator:"Andrés Felipe Martínez Obando",
  robots:{index:true,follow:true},
  icons:{icon:"/fmv-mark-color-transparent.png",shortcut:"/fmv-mark-color-transparent.png"},
  alternates:{canonical:"/"},
  openGraph:{type:"profile",locale:"es_CO",alternateLocale:["en_US"],url:"/",siteName:"FMV InfraSec",title:"Andrés Felipe Martínez | Software, Security & Infrastructure",description:"Software engineering, information security, infrastructure, technical support, and automotive mechatronics for remote teams.",images:[{url:"/og.png",width:1792,height:1024,alt:"Professional portfolio of Andrés Felipe Martínez Obando"}]},
  twitter:{card:"summary_large_image",title:"Andrés Felipe Martínez | FMV InfraSec",description:"Software · Security · Infrastructure · Remote UTC-5",images:["/og.png"]},
};
const structuredData = {"@context":"https://schema.org","@type":"Person",name:"Andrés Felipe Martínez Obando",jobTitle:"Software Engineer and Information Security Specialist",email:"mailto:ingenierossoftware31@gmail.com",telephone:"+573025286029",address:{"@type":"PostalAddress",addressLocality:"Bogotá",addressCountry:"CO"},sameAs:["https://www.linkedin.com/in/anmartinez94","https://github.com/ingesoft04","https://www.upwork.com/freelancers/~0199b81b4f763382ef"],knowsAbout:["Information security","Software engineering","Windows Server","Linux","Docker","ISO/IEC 27001","Automotive mechatronics"]};
export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang="es"><body className={`${geist.variable} ${mono.variable}`}>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structuredData)}}/></body></html>}
