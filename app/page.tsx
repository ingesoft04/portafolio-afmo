"use client";

import { ContactSection } from "./components/ContactSection";
import { PortfolioHeader } from "./components/PortfolioHeader";
import { ProjectCaseStudies } from "./components/ProjectCaseStudies";
import { OpportunitySelector } from "./components/OpportunitySelector";
import { usePortfolioPreferences } from "./hooks/usePortfolioPreferences";

const content = {
  es: {
    nav: ["Perfil", "Especialidades", "Experiencia", "Laboratorio", "Proyectos", "Contacto"],
    eyebrow: "INGENIERÍA · SEGURIDAD · INFRAESTRUCTURA",
    hello: "Hola, soy",
    name: "Andrés Felipe Martínez Obando",
    title: "Ingeniero de Software · Seguridad de la Información · Infraestructura",
    intro: "Convierto problemas técnicos en sistemas confiables y acciones claras. Administro servidores, aseguro información, implemento soluciones y acompaño a clientes; también aporto experiencia en soporte, automatización y diagnóstico automotriz remoto.",
    available: "Disponible para trabajo remoto · Empleo y freelance",
    contact: "Hablemos",
    focusLabel: "DOS LÍNEAS, UN PERFIL TÉCNICO",
    focusTitle: "Tecnología digital y sistemas físicos",
    focusIntro: "Un perfil versátil para equipos internacionales, soporte especializado y proyectos por objetivos.",
    tracks: [
      { code: "01 / DIGITAL", title: "Software, seguridad e infraestructura", text: "Administración de servidores externos, soporte a clientes, implementación técnica y gestión documentada de incidentes. Formación especializada en SGSI y controles ISO/IEC 27001.", tags: ["ISO/IEC 27001", "Windows Server", "Linux", "SQL", "Docker", "Soporte L2/L3"] },
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
    projectsTitle: "Evidencia técnica seleccionada",
    projectsText: "Una selección anonimizada de soluciones funcionales. Muestro el problema, mi aporte y las tecnologías; el código, los dominios y la infraestructura permanecen privados.",
    privacyTitle: "Evidencia verificable, exposición mínima",
    privacyText: "Los detalles técnicos ampliados y demostraciones controladas están disponibles durante procesos de selección, con datos ficticios y acceso limitado.",
    projectCases: [
      { code:"01 / DEFENSIVE LAB", title:"Laboratorio defensivo de ciberseguridad", summary:"Genera eventos sintéticos, identifica comportamientos sospechosos y produce alertas explicables sin atacar ni escanear sistemas reales.", contribution:"Arquitectura, implementación, control de acceso, auditoría, pruebas y documentación.", evidence:"Pruebas unitarias, modelo de amenazas, matriz de controles y salida JSON auditable.", status:"Laboratorio funcional", tags:["Python","SQLite","Docker","Threat model"] },
      { code:"02 / WELLNESS", title:"Gestión para profesionales de bienestar", summary:"Plataforma para agenda, usuarios, comunicaciones y operación administrativa con automatizaciones asistidas por IA.", contribution:"Backend, seguridad, persistencia, colas, integraciones y documentación operativa.", evidence:"Flujos documentados, procesamiento en cola y separación de datos operativos, IA y auditoría.", status:"Caso privado", tags:["Node.js","PostgreSQL","Redis","N8N"] },
      { code:"03 / COMMERCIAL", title:"Portal comercial de servicios tecnológicos", summary:"Catálogo, solicitudes de asesoría, oportunidades comerciales, cotizaciones y administración en una solución integrada.", contribution:"Adaptación de dominio, API, autenticación, controles de seguridad y despliegue con contenedores.", evidence:"Despliegue reproducible, autenticación, límites de solicitud y generación documentada de cotizaciones.", status:"Preparación productiva", tags:["Express","PostgreSQL","JWT","Docker"] },
      { code:"04 / BOOKING", title:"Plataforma de reservas y servicios", summary:"Gestión de usuarios, catálogo, disponibilidad y reservas con sesiones, caché y monitoreo de operación.", contribution:"Diseño técnico, API REST, base de datos, seguridad, pruebas y manuales de operación.", evidence:"Pruebas funcionales, caché con expiración, métricas de operación y manuales técnico y de instalación.", status:"Proyecto académico", tags:["Node.js","PostgreSQL","Redis","Monitoring"] },
      { code:"05 / SCHEDULING", title:"Cápsulas digitales programadas", summary:"Piloto local para conservar archivos, programar entregas y registrar eventos de auditoría incluso después de interrupciones.", contribution:"Persistencia, almacenamiento de objetos, procesamiento programado, recuperación y pruebas de continuidad.", evidence:"La entrega pendiente se recupera después de reiniciar el servicio y el retraso queda registrado en auditoría.", status:"Piloto local", tags:["Docker","PostgreSQL","MinIO","Audit"] },
    ],
    contributionLabel:"Mi aporte",
    contactLabel: "CONTACTO",
    contactTitle: "¿Construimos algo confiable?",
    contactText: "Disponible para empleo remoto, contratos y proyectos freelance, a tiempo completo, medio tiempo o por objetivos.",
    mail: "Enviar correo",
    phone: "WhatsApp corporativo", links: "Perfiles profesionales verificados",
    footer: "Diseñado para trabajar sin fronteras.",
  },
  en: {
    nav: ["Profile", "Expertise", "Experience", "Home lab", "Projects", "Contact"], eyebrow: "ENGINEERING · SECURITY · INFRASTRUCTURE", hello: "Hi, I’m", name: "Andrés Felipe Martínez Obando", title: "Software Engineer · Information Security · Infrastructure", intro: "I turn technical problems into reliable systems and clear action. I administer servers, secure information, implement solutions, and support clients, while also contributing experience in technical support, automation, and remote automotive diagnostics.", available: "Open to remote work · Employment & freelance", contact: "Let’s talk", focusLabel: "TWO TRACKS, ONE TECHNICAL MINDSET", focusTitle: "Digital technology and physical systems", focusIntro: "A versatile profile for international teams, specialized support, and outcome-driven projects.",
    tracks: [{code:"01 / DIGITAL",title:"Software, security & infrastructure",text:"External server administration, client support, technical implementation, and documented incident management. Specialized training in ISMS and ISO/IEC 27001 controls.",tags:["ISO/IEC 27001","Windows Server","Linux","SQL","Docker","L2/L3 Support"]},{code:"02 / AUTOMOTIVE",title:"Automotive mechatronics & diagnostics",text:"Experience in fault diagnosis, preventive and corrective maintenance, pre-operational inspection, and fleet monitoring; available for guided remote diagnostics and technical assistance.",tags:["Remote diagnostics","Maintenance","Fleets","Inspection","Mechatronics"]}],
    servicesLabel:"CAPABILITIES",servicesTitle:"How I can contribute",services:[["Information security","Support for ISMS implementation and audits, risk management, SoA, and Annex A controls under ISO/IEC 27001."],["Infrastructure & support","Windows Server and Linux administration, remote/on-site support, external servers, and operational continuity."],["Software & data","Requirements analysis, application support, functional testing, SQL, and development with Python, Java, and COBOL."],["Technical virtual assistance","Documentation, request tracking, customer support, operational organization, and structured problem solving."],["Remote automotive consulting","Initial fault guidance, maintenance plans, inspection checklists, and technical support for owners or fleets."],["Automation & AI","Using AI tools to streamline processes, documentation, and repetitive technology tasks."]],
    expLabel:"EXPERIENCE",expTitle:"Professional journey",jobs:[["2024 — PRESENT","Network Security Analyst & Consultant","IDAE Soluciones · Software","Responsible for external servers, Windows Server configuration, SQL data administration, client support, implementation, and incident documentation."],["2023 — 2024","Mechanical Technician","Consorcio Santa Ana · Infrastructure","Heavy machinery operations supervision and preventive/corrective maintenance management."],["2022 — 2023","Productive Development Executive","Bancamía · Microfinance","Financial risk analysis, client acquisition, and portfolio management."],["2018 — 2022","Automotive Operations & Maintenance","LAND FAST · Serviteca la 5ta · Nacional de Repuesto","Pre-operational inspection, fleet maintenance control, fault diagnosis, and automotive maintenance."]],
    labLabel:"PERSONAL HOME LAB",labTitle:"Infrastructure I also build at home",labText:"A hands-on environment to experiment, learn, and validate configurations outside production.",labItems:[["Nobara Linux","Host server"],["Virtual machines","Isolated environments"],["OpenMediaVault","Storage and services"],["Docker","Containerized services"],["Windows Server 2025","Administration and testing"]],
    eduLabel:"EDUCATION",eduTitle:"Continuous learning",education:[["Specialization in Information Security","UNIR · 2026"],["Software Engineering","Politécnico Grancolombiano · 2024 · Active professional license"],["Automotive Mechatronics Maintenance Technology","SENA · 2022"],["Administrative Assistance Technician","SENA · 2017"]],cert:"In progress with CertiProf",certText:"ISO/IEC 27001 Lead Implementer, Internal Auditor, and External Auditor.",language:"Languages",languageText:"Native Spanish · English: technical reading",
    projectsLabel:"PRIVATE-BY-DESIGN EVIDENCE",projectsTitle:"Selected technical case studies",projectsText:"An anonymized selection of working solutions. I present the problem, my contribution, and the technologies while keeping source code, domains, and infrastructure private.",
    privacyTitle:"Verifiable evidence, minimal exposure",privacyText:"Expanded technical details and controlled demonstrations are available during recruitment processes using fictional data and restricted access.",
    projectCases:[
      {code:"01 / DEFENSIVE LAB",title:"Defensive cybersecurity laboratory",summary:"Generates synthetic events, identifies suspicious behavior, and produces explainable alerts without attacking or scanning real systems.",contribution:"Architecture, implementation, access control, auditability, testing, and documentation.",evidence:"Unit tests, threat model, control matrix, and auditable JSON output.",status:"Working laboratory",tags:["Python","SQLite","Docker","Threat model"]},
      {code:"02 / WELLNESS",title:"Management platform for wellness professionals",summary:"A platform for scheduling, users, communications, and administrative operations with AI-assisted automation.",contribution:"Backend, security, persistence, queues, integrations, and operational documentation.",evidence:"Documented workflows, queued processing, and separate operational, AI, and audit data.",status:"Private case",tags:["Node.js","PostgreSQL","Redis","N8N"]},
      {code:"03 / COMMERCIAL",title:"Technology services commercial portal",summary:"Catalog, consultation requests, sales opportunities, quotations, and administration in an integrated solution.",contribution:"Domain adaptation, API, authentication, security controls, and container deployment.",evidence:"Reproducible deployment, authentication, rate limits, and documented quotation generation.",status:"Production preparation",tags:["Express","PostgreSQL","JWT","Docker"]},
      {code:"04 / BOOKING",title:"Booking and services platform",summary:"User, catalog, availability, and booking management with sessions, caching, and operational monitoring.",contribution:"Technical design, REST API, database, security, testing, and operations manuals.",evidence:"Functional tests, expiring cache, operational metrics, and technical and installation manuals.",status:"Academic project",tags:["Node.js","PostgreSQL","Redis","Monitoring"]},
      {code:"05 / SCHEDULING",title:"Scheduled digital capsules",summary:"Local pilot for retaining files, scheduling delivery, and recording audit events even after service interruptions.",contribution:"Persistence, object storage, scheduled processing, recovery, and continuity testing.",evidence:"Pending delivery recovers after service restart and the delay is recorded in the audit trail.",status:"Local pilot",tags:["Docker","PostgreSQL","MinIO","Audit"]},
    ],contributionLabel:"My contribution",contactLabel:"CONTACT",contactTitle:"Shall we build something reliable?",contactText:"Available for remote employment, contracts, and freelance projects - full-time, part-time, or outcome-based.",mail:"Send email",phone:"Corporate WhatsApp",links:"Verified professional profiles",footer:"Built to work without borders."
  }
};

export default function Home() {
  const { language: lang, theme, toggleLanguage, toggleTheme } = usePortfolioPreferences();
  const t = content[lang];
  return <main data-theme={theme}>
    <a className="skip-link" href="#perfil">{lang==="es"?"Saltar al contenido":"Skip to content"}</a>
    <PortfolioHeader language={lang} theme={theme} navigation={t.nav} onLanguageChange={toggleLanguage} onThemeChange={toggleTheme}/>
    <section className="hero hero-clean" id="top"><div className="hero-copy"><p className="eyebrow">{t.eyebrow}</p><p className="hello">{t.hello}</p><h1>{t.name}</h1><h2>{t.title}</h2><p className="lead">{t.intro}</p><div className="availability"><i/>{t.available}</div><div className="actions"><a className="primary" href="#contacto">{t.contact} <span>↗</span></a><a className="secondary" href="#especialidades">{lang==="es"?"Ver todo lo que puedo hacer":"See how I can help"} <span>↓</span></a></div><div className="capability-signal" aria-label={lang==="es"?"Áreas de experiencia":"Areas of expertise"}><span>01 SOFTWARE</span><span>02 SECURITY</span><span>03 INFRA</span><span>04 SUPPORT</span><span>05 AUTOMOTIVE</span></div></div><aside className="hero-proof" aria-label={lang==="es"?"Datos profesionales clave":"Key professional facts"}><div className="proof-brand"><img src={theme==="dark"?"/fmv-logo-white-transparent.png":"/fmv-logo-graphite-transparent.png"} alt="FMV InfraSec"/><span>FMV / 05 DISCIPLINES</span></div><div><strong>{lang==="es"?"Disponible internacionalmente":"Available internationally"}</strong><span>{lang==="es"?"Empleo remoto · Contratos · Freelance":"Remote employment · Contracts · Freelance"}</span></div><div><strong>{lang==="es"?"Experiencia transversal":"Cross-functional experience"}</strong><span>{lang==="es"?"Software · Servidores · Seguridad · Soporte":"Software · Servers · Security · Support"}</span></div><div><strong>{lang==="es"?"Comunicación clara":"Clear communication"}</strong><span>{lang==="es"?"Del diagnóstico técnico a una acción comprensible":"From technical diagnosis to understandable action"}</span></div></aside></section>
    <section className="quick-view" aria-label={lang==="es"?"Resumen profesional":"Professional summary"}>{[[lang==="es"?"UBICACIÓN":"LOCATION","Bogotá, Colombia · UTC-5"],[lang==="es"?"MODALIDAD":"WORK MODE",lang==="es"?"Remoto · Empleo y freelance":"Remote · Employment & freelance"],[lang==="es"?"IDIOMAS":"LANGUAGES",lang==="es"?"Español nativo · Inglés técnico escrito":"Native Spanish · Technical written English"],[lang==="es"?"CREDENCIAL":"CREDENTIAL",lang==="es"?"Tarjeta profesional vigente":"Active professional engineering license"]].map(x=><article key={x[0]}><span>{x[0]}</span><strong>{x[1]}</strong></article>)}</section>
    <OpportunitySelector language={lang}/>
    <section className="plain-intro"><div><p className="eyebrow">{lang==="es"?"EN PALABRAS SIMPLES":"IN PLAIN LANGUAGE"}</p><h2>{lang==="es"?"Ayudo a que la tecnología funcione, sea segura y esté bien documentada.":"I help technology work reliably, stay secure, and remain well documented."}</h2></div><div className="plain-grid"><article><b>01</b><h3>{lang==="es"?"Mantengo sistemas funcionando":"I keep systems running"}</h3><p>{lang==="es"?"Instalo, actualizo y doy soporte a servidores y aplicaciones para reducir interrupciones.":"I install, update, and support servers and applications to reduce disruption."}</p></article><article><b>02</b><h3>{lang==="es"?"Protejo información":"I protect information"}</h3><p>{lang==="es"?"Identifico riesgos, documento incidentes y ayudo a aplicar buenas prácticas de seguridad.":"I identify risks, document incidents, and help apply sound security practices."}</p></article><article><b>03</b><h3>{lang==="es"?"Explico y resuelvo":"I explain and solve"}</h3><p>{lang==="es"?"Traduzco problemas técnicos en acciones claras para usuarios, clientes y equipos de trabajo.":"I turn technical problems into clear actions for users, clients, and teams."}</p></article></div></section>
    <section id="perfil" className="section"><SectionHead label={t.focusLabel} title={t.focusTitle} text={t.focusIntro}/><div className="tracks">{t.tracks.map((track,index)=><article className={`track track-${index===0?"digital":"automotive"}`} key={track.code}><div className="track-heading"><div className="track-emblem" role="img" aria-label={index===0?(lang==="es"?"Emblema digital":"Digital emblem"):(lang==="es"?"Emblema automotriz":"Automotive emblem")}><strong>{index===0?"</>":"AUTO"}</strong><small>{index===0?"SYSTEMS":"DIAG"}</small><i aria-hidden="true"/></div><p className="code">{track.code}</p></div><h3>{track.title}</h3><p>{track.text}</p><div className="tags">{track.tags.map(x=><span key={x}>{x}</span>)}</div></article>)}</div></section>
    <section id="especialidades" className="section alt"><SectionHead label={t.servicesLabel} title={t.servicesTitle}/><div className="services">{t.services.map((s,i)=><article key={s[0]}><span>0{i+1}</span><h3>{s[0]}</h3><p>{s[1]}</p></article>)}</div></section>
    <section id="experiencia" className="section"><SectionHead label={t.expLabel} title={t.expTitle}/><div className="timeline">{t.jobs.map(j=><article key={j[1]}><time>{j[0]}</time><div><h3>{j[1]}</h3><b>{j[2]}</b><p>{j[3]}</p></div></article>)}</div></section>
    <section id="laboratorio" className="section lab"><div><SectionHead label={t.labLabel} title={t.labTitle} text={t.labText}/><div className="terminal"><div><i/><i/><i/></div><code><em>$</em> systemctl status homelab<br/><strong>● active (running)</strong><br/><em>$</em> docker ps --format portfolio<br/><span>services secured · systems learning</span></code></div></div><div className="lab-grid">{t.labItems.map((x,i)=><article key={x[0]}><span>0{i+1}</span><h3>{x[0]}</h3><p>{x[1]}</p></article>)}</div></section>
    <section className="section education"><SectionHead label={t.eduLabel} title={t.eduTitle}/><div className="education-grid"><div>{t.education.map(e=><article key={e[0]}><i/><div><h3>{e[0]}</h3><p>{e[1]}</p></div></article>)}</div><aside><p className="code">ISO/IEC 27001</p><h3>{t.cert}</h3><p>{t.certText}</p><hr/><h3>{t.language}</h3><p>{t.languageText}</p></aside></div></section>
    <ProjectCaseStudies label={t.projectsLabel} title={t.projectsTitle} text={t.projectsText} privacyTitle={t.privacyTitle} privacyText={t.privacyText} contributionLabel={t.contributionLabel} projects={t.projectCases}/>
    <ContactSection language={lang} label={t.contactLabel} title={t.contactTitle} text={t.contactText} emailLabel={t.mail} phoneLabel={t.phone} pendingLinks={t.links}/>
    <footer><div className="footer-brand"><img src={theme==="dark"?"/fmv-logo-white-transparent.png":"/fmv-logo-graphite-transparent.png"} alt="FMV InfraSec"/><div><b>Andrés Felipe Martínez</b><span>FMV InfraSec</span></div></div><p>{t.footer}</p><p>© 2026</p></footer>
  </main>
}

function SectionHead({label,title,text}:{label:string,title:string,text?:string}) { return <div className="section-head"><p className="eyebrow">{label}</p><h2>{title}</h2>{text&&<p>{text}</p>}</div> }
