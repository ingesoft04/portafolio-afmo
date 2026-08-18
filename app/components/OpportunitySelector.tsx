"use client";

import { useState } from "react";
import type { Language } from "../hooks/usePortfolioPreferences";

const options = {
  es: [
    ["security", "Seguridad e infraestructura", "Administración de servidores, soporte L2/L3, incidentes, continuidad y apoyo en SGSI ISO/IEC 27001."],
    ["software", "Software y automatización", "APIs, datos, pruebas funcionales, Docker, documentación y automatización asistida por IA."],
    ["support", "Asistencia virtual técnica", "Atención a clientes, seguimiento de solicitudes, documentación y coordinación operativa remota."],
    ["automotive", "Mecatrónica automotriz", "Diagnóstico guiado, inspección, mantenimiento preventivo y apoyo técnico para propietarios o flotas."],
    ["freelance", "Proyectos freelance", "Disponibilidad por objetivos o por horas. Referencia: USD 25-40/h, ajustable según alcance y complejidad."],
  ],
  en: [
    ["security", "Security & infrastructure", "Server administration, L2/L3 support, incidents, continuity, and ISO/IEC 27001 ISMS support."],
    ["software", "Software & automation", "APIs, data, functional testing, Docker, documentation, and AI-assisted automation."],
    ["support", "Technical virtual assistance", "Customer support, request tracking, documentation, and remote operational coordination."],
    ["automotive", "Automotive mechatronics", "Guided diagnostics, inspection, preventive maintenance, and technical support for owners or fleets."],
    ["freelance", "Freelance projects", "Available for outcome-based or hourly work. Reference: USD 25-40/h, adjusted to scope and complexity."],
  ],
} as const;

export function OpportunitySelector({ language }: { language: Language }) {
  const [selected, setSelected] = useState(0);
  const current = options[language][selected];
  return <section className="opportunity" aria-labelledby="opportunity-title">
    <div><p className="eyebrow">{language === "es" ? "ENCUENTRE EL PERFIL ADECUADO" : "FIND THE RIGHT FIT"}</p><h2 id="opportunity-title">{language === "es" ? "¿Qué tipo de apoyo necesita?" : "What kind of support do you need?"}</h2></div>
    <div className="opportunity-tabs" role="tablist" aria-label={language === "es" ? "Tipos de oportunidad" : "Opportunity types"}>{options[language].map((option, index) => <button key={option[0]} role="tab" aria-selected={selected === index} onClick={() => setSelected(index)}>{option[1]}</button>)}</div>
    <article role="tabpanel"><span>0{selected + 1}</span><h3>{current[1]}</h3><p>{current[2]}</p><a href="#contacto">{language === "es" ? "Contactar" : "Contact"} ↘</a></article>
  </section>;
}
