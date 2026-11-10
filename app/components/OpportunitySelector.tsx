"use client";

import { useState } from "react";
import type { Language } from "../hooks/usePortfolioPreferences";

const options = {
  es: [
    ["support", "Soporte de aplicaciones", "Atención de incidentes, análisis de causa raíz, validación de versiones, soporte a clientes y documentación técnica."],
    ["infrastructure", "Infraestructura y despliegues", "Windows Server, Linux, IIS, servicios, certificados, monitoreo, ambientes de pruebas y producción, y rollback."],
    ["data", "Datos, APIs y reportes", "SQL Server, procedimientos almacenados, triggers, API REST, Postman, JSON y reportes RDLC."],
    ["security", "Seguridad de la información", "Gestión de incidentes y riesgos, SGSI, controles del Anexo A y preparación ISO/IEC 27001."],
    ["automation", "Automatización", "PowerShell, archivos .bat, Git y optimización de tareas operativas y técnicas repetitivas."],
  ],
  en: [
    ["support", "Application support", "Incident handling, root cause analysis, release validation, customer support, and technical documentation."],
    ["infrastructure", "Infrastructure & deployments", "Windows Server, Linux, IIS, services, certificates, monitoring, test and production environments, and rollback."],
    ["data", "Data, APIs & reporting", "SQL Server, stored procedures, triggers, REST APIs, Postman, JSON, and RDLC reports."],
    ["security", "Information security", "Incident and risk management, ISMS, Annex A controls, and ISO/IEC 27001 preparation."],
    ["automation", "Automation", "PowerShell, .bat files, Git, and optimization of repetitive operational and technical tasks."],
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
