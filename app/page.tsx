"use client";

import { useState } from "react";

const content = {
  es: {
    nav: ["Perfil", "Especialidades", "Experiencia", "Laboratorio", "Contacto"],
    eyebrow: "INGENIERÍA · SEGURIDAD · INFRAESTRUCTURA",
    hello: "Hola, soy",
    name: "Andrés Felipe Martínez Obando",
    title: "Ingeniero de Software & Especialista en Seguridad de la Información",
    intro: "Conecto software, infraestructura y seguridad para mantener operaciones confiables. También aporto una perspectiva técnica poco común: formación y experiencia en mecatrónica automotriz.",
    available: "Disponible para trabajo remoto · Empleo y freelance",
    contact: "Hablemos",
    cv: "Descargar perfil PDF",
    focusLabel: "DOS LÍNEAS, UN PERFIL TÉCNICO",
    focusTitle: "Tecnología digital y sistemas físicos",
    focusIntro: "Un perfil versátil para equipos internacionales, soporte especializado y proyectos por objetivos.",
    tracks: [
      { code: "01 / DIGITAL", title: "Software, seguridad e infraestructura", text: "Administración de servidores externos, soporte a clientes, implementación técnica y gestión de incidentes con una visión de seguridad desde el diseño.", tags: ["ISO/IEC 27001", "Windows Server", "Linux", "SQL", "Docker", "DevSecOps"] },
      { code: "02 / AUTOMOTRIZ", title: "Mecatrónica y diagnóstico automotriz", text: "Experiencia en diagnóstico de fallas, mantenimiento preventivo y correctivo, inspección preoperacional y seguimiento de flotas; disponible para asistencia técnica y diagnóstico guiado remoto.", tags: ["Diagnóstico remoto", "Mantenimiento", "Flotas", "Inspección", "Mecatrónica"] },
    ],
    servicesLabel: "CAPACIDADES",
    servicesTitle: "Cómo puedo aportar",
    services: [
      ["Seguridad de la información", "Apoyo en implementación y auditoría de SGSI, gestión de riesgos, SoA y controles del Anexo A bajo ISO/IEC 27001."],
      ["Infraestructura y soporte", "Administración de Windows Server y Linux, soporte remoto y presencial, servidores externos y continuidad operativa."],
      ["Software y datos", "Análisis de requerimientos, soporte de aplicaciones, pruebas funcionales, SQL y desarrollo con Python, Java y COBOL."],
      ["Asistencia virtual técnica", "Documentación, seguimiento de solicitudes, atención a clientes, organización operativa y resolución estructurada de problemas."],
      ["Consultoría automotriz remota", "Orientación inicial de fallas, planes de mantenimiento, listas de inspección y acompañamiento técnico a propietarios o flotas."],
      ["Automatización e IA", "Uso de herramientas de inteligencia artificial para optimizar procesos, documentación y tareas tecnológicas repetitivas."],
    ],
    expLabel: "EXPERIENCIA",
    expTitle: "Trayectoria profesional",
    jobs: [
      ["2024 — ACTUAL", "Analista de Seguridad en Redes y Consultor", "IDAE Soluciones · Software", "Responsable de servidores externos, configuración de Windows Server, administración de datos SQL, soporte en cliente, implementación y documentación de incidentes."],
      ["2023 — 2024", "Técnico mecánico", "Consorcio Santa Ana · Infraestructura", "Supervisión de maquinaria pesada y gestión de mantenimiento preventivo y correctivo."],
      ["2022 — 2023", "Ejecutivo de desarrollo productivo", "Bancamía · Microfinanzas", "Análisis de riesgos financieros, captación de clientes y gestión de cartera."],
      ["2018 — 2022", "Operaciones y mantenimiento automotriz", "LAND FAST · Serviteca la 5ta · Nacional de Repuesto", "Inspección preoperacional, control de mantenimiento de flotas, diagnóstico de fallas y mantenimiento automotriz."],
    ],
    labLabel: "LABORATORIO PERSONAL",
    labTitle: "Infraestructura que también construyo en casa",
    labText: "Entorno práctico para experimentar, aprender y validar configuraciones fuera de producción.",
    labItems: [["Nobara Linux", "Servidor anfitrión"], ["Máquinas virtuales", "Entornos aislados"], ["OpenMediaVault", "Almacenamiento y servicios"], ["Docker", "Servicios en contenedores"], ["Windows Server 2025", "Administración y pruebas"]],
    eduLabel: "FORMACIÓN",
    eduTitle: "Aprendizaje continuo",
    education: [["Especialización en Seguridad Informática", "UNIR · 2026"], ["Ingeniería de Software", "Politécnico Grancolombiano · 2024 · Tarjeta profesional vigente"], ["Tecnología en Mantenimiento Mecatrónico Automotriz", "SENA · 2022"], ["Técnico en Asistencia Administrativa", "SENA · 2017"]],
    cert: "En curso con CertiProf",
    certText: "Líder Implementador, Auditor Interno y Auditor Externo ISO/IEC 27001.",
    language: "Idiomas",
    languageText: "Español nativo · Inglés: lectura técnica",
    projectsLabel: "PROYECTOS",
    projectsTitle: "Código y casos de estudio",
    projectsText: "Este espacio quedará conectado a mis repositorios. Próximamente: proyectos seleccionados, arquitectura, tecnologías y resultados.",
    placeholder: "GitHub y proyectos · enlaces pendientes",
    contactLabel: "CONTACTO",
    contactTitle: "¿Construimos algo confiable?",
    contactText: "Disponible para empleo remoto, contratos, proyectos freelance, tiempo completo, medio tiempo o por horas. Tarifa freelance de referencia: USD 25–40/h, según alcance.",
    mail: "Enviar correo",
    links: "LinkedIn · GitHub · Upwork · Workana — próximos a agregar",
    footer: "Diseñado para trabajar sin fronteras.",
  },
  en: {
    nav: ["Profile", "Expertise", "Experience", "Home lab", "Contact"], eyebrow: "ENGINEERING · SECURITY · INFRASTRUCTURE", hello: "Hi, I’m", name: "Andrés Felipe Martínez Obando", title: "Software Engineer & Information Security Specialist", intro: "I connect software, infrastructure, and security to keep operations reliable. I also bring an uncommon technical perspective: training and hands-on experience in automotive mechatronics.", available: "Open to remote work · Employment & freelance", contact: "Let’s talk", cv: "Download PDF profile", focusLabel: "TWO TRACKS, ONE TECHNICAL MINDSET", focusTitle: "Digital technology and physical systems", focusIntro: "A versatile profile for international teams, specialized support, and outcome-driven projects.",
    tracks: [{code:"01 / DIGITAL",title:"Software, security & infrastructure",text:"External server administration, client support, technical implementation, and incident management with a security-by-design mindset.",tags:["ISO/IEC 27001","Windows Server","Linux","SQL","Docker","DevSecOps"]},{code:"02 / AUTOMOTIVE",title:"Automotive mechatronics & diagnostics",text:"Experience in fault diagnosis, preventive and corrective maintenance, pre-operational inspection, and fleet monitoring; available for guided remote diagnostics and technical assistance.",tags:["Remote diagnostics","Maintenance","Fleets","Inspection","Mechatronics"]}],
    servicesLabel:"CAPABILITIES",servicesTitle:"How I can contribute",services:[["Information security","Support for ISMS implementation and audits, risk management, SoA, and Annex A controls under ISO/IEC 27001."],["Infrastructure & support","Windows Server and Linux administration, remote/on-site support, external servers, and operational continuity."],["Software & data","Requirements analysis, application support, functional testing, SQL, and development with Python, Java, and COBOL."],["Technical virtual assistance","Documentation, request tracking, customer support, operational organization, and structured problem solving."],["Remote automotive consulting","Initial fault guidance, maintenance plans, inspection checklists, and technical support for owners or fleets."],["Automation & AI","Using AI tools to streamline processes, documentation, and repetitive technology tasks."]],
    expLabel:"EXPERIENCE",expTitle:"Professional journey",jobs:[["2024 — PRESENT","Network Security Analyst & Consultant","IDAE Soluciones · Software","Responsible for external servers, Windows Server configuration, SQL data administration, client support, implementation, and incident documentation."],["2023 — 2024","Mechanical Technician","Consorcio Santa Ana · Infrastructure","Heavy machinery operations supervision and preventive/corrective maintenance management."],["2022 — 2023","Productive Development Executive","Bancamía · Microfinance","Financial risk analysis, client acquisition, and portfolio management."],["2018 — 2022","Automotive Operations & Maintenance","LAND FAST · Serviteca la 5ta · Nacional de Repuesto","Pre-operational inspection, fleet maintenance control, fault diagnosis, and automotive maintenance."]],
    labLabel:"PERSONAL HOME LAB",labTitle:"Infrastructure I also build at home",labText:"A hands-on environment to experiment, learn, and validate configurations outside production.",labItems:[["Nobara Linux","Host server"],["Virtual machines","Isolated environments"],["OpenMediaVault","Storage and services"],["Docker","Containerized services"],["Windows Server 2025","Administration and testing"]],
    eduLabel:"EDUCATION",eduTitle:"Continuous learning",education:[["Specialization in Information Security","UNIR · 2026"],["Software Engineering","Politécnico Grancolombiano · 2024 · Active professional license"],["Automotive Mechatronics Maintenance Technology","SENA · 2022"],["Administrative Assistance Technician","SENA · 2017"]],cert:"In progress with CertiProf",certText:"ISO/IEC 27001 Lead Implementer, Internal Auditor, and External Auditor.",language:"Languages",languageText:"Native Spanish · English: technical reading",
    projectsLabel:"PROJECTS",projectsTitle:"Code and case studies",projectsText:"This space will connect to my repositories. Coming soon: selected projects, architecture, technologies, and outcomes.",placeholder:"GitHub & projects · links pending",contactLabel:"CONTACT",contactTitle:"Shall we build something reliable?",contactText:"Available for remote employment, contracts, and freelance projects—full-time, part-time, or hourly. Freelance reference rate: USD 25–40/h, depending on scope.",mail:"Send email",links:"LinkedIn · GitHub · Upwork · Workana — coming soon",footer:"Built to work without borders."
  }
};

export default function Home() {
  const [lang, setLang] = useState<"es" | "en">("es");
  const t = content[lang];
  return <main>
    <header className="nav"><a className="brand" href="#top"><span>AF</span><b>Martínez</b></a><nav>{t.nav.map((n,i)=><a key={n} href={["#perfil","#especialidades","#experiencia","#laboratorio","#contacto"][i]}>{n}</a>)}</nav><button className="lang" onClick={()=>setLang(lang==="es"?"en":"es")} aria-label="Cambiar idioma">{lang.toUpperCase()} <span>↗</span></button></header>
    <section className="hero" id="top"><div className="orb"/><div className="hero-copy"><p className="eyebrow">{t.eyebrow}</p><p className="hello">{t.hello}</p><h1>{t.name}</h1><h2>{t.title}</h2><p className="lead">{t.intro}</p><div className="availability"><i/>{t.available}</div><div className="actions"><a className="primary" href="#contacto">{t.contact} <span>↗</span></a><a className="secondary" href="/perfil-andres-felipe-martinez.pdf" download>{t.cv} <span>↓</span></a></div></div><div className="hero-mark" aria-hidden="true"><div className="monogram">AFM</div><div className="ring r1"/><div className="ring r2"/><span className="coordinate c1">04°42′N</span><span className="coordinate c2">REMOTE / UTC-5</span></div><div className="scroll">SCROLL <span>↓</span></div></section>
    <section id="perfil" className="section"><SectionHead label={t.focusLabel} title={t.focusTitle} text={t.focusIntro}/><div className="tracks">{t.tracks.map(track=><article className="track" key={track.code}><p className="code">{track.code}</p><h3>{track.title}</h3><p>{track.text}</p><div className="tags">{track.tags.map(x=><span key={x}>{x}</span>)}</div></article>)}</div></section>
    <section id="especialidades" className="section alt"><SectionHead label={t.servicesLabel} title={t.servicesTitle}/><div className="services">{t.services.map((s,i)=><article key={s[0]}><span>0{i+1}</span><h3>{s[0]}</h3><p>{s[1]}</p></article>)}</div></section>
    <section id="experiencia" className="section"><SectionHead label={t.expLabel} title={t.expTitle}/><div className="timeline">{t.jobs.map(j=><article key={j[1]}><time>{j[0]}</time><div><h3>{j[1]}</h3><b>{j[2]}</b><p>{j[3]}</p></div></article>)}</div></section>
    <section id="laboratorio" className="section lab"><div><SectionHead label={t.labLabel} title={t.labTitle} text={t.labText}/><div className="terminal"><div><i/><i/><i/></div><code><em>$</em> systemctl status homelab<br/><strong>● active (running)</strong><br/><em>$</em> docker ps --format portfolio<br/><span>services secured · systems learning</span></code></div></div><div className="lab-grid">{t.labItems.map((x,i)=><article key={x[0]}><span>0{i+1}</span><h3>{x[0]}</h3><p>{x[1]}</p></article>)}</div></section>
    <section className="section education"><SectionHead label={t.eduLabel} title={t.eduTitle}/><div className="education-grid"><div>{t.education.map(e=><article key={e[0]}><i/><div><h3>{e[0]}</h3><p>{e[1]}</p></div></article>)}</div><aside><p className="code">ISO/IEC 27001</p><h3>{t.cert}</h3><p>{t.certText}</p><hr/><h3>{t.language}</h3><p>{t.languageText}</p></aside></div></section>
    <section className="section projects"><SectionHead label={t.projectsLabel} title={t.projectsTitle} text={t.projectsText}/><div className="project-placeholder"><span>&lt;/&gt;</span><p>{t.placeholder}</p></div></section>
    <section id="contacto" className="contact-section"><p className="eyebrow">{t.contactLabel}</p><h2>{t.contactTitle}</h2><p>{t.contactText}</p><a className="primary" href="mailto:amartinezobando@gmail.com">{t.mail} <span>↗</span></a><p className="pending">{t.links}</p></section>
    <footer><div className="brand"><span>AF</span><b>Martínez</b></div><p>{t.footer}</p><p>© 2026</p></footer>
  </main>
}

function SectionHead({label,title,text}:{label:string,title:string,text?:string}) { return <div className="section-head"><p className="eyebrow">{label}</p><h2>{title}</h2>{text&&<p>{text}</p>}</div> }
