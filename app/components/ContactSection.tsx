interface ContactSectionProps {
  language: "es" | "en";
  label: string;
  title: string;
  text: string;
  emailLabel: string;
  phoneLabel: string;
  pendingLinks: string;
}

export function ContactSection({ language, label, title, text, emailLabel, phoneLabel, pendingLinks }: ContactSectionProps) {
  const documents = documentLinks(language);
  return <section id="contacto" className="contact-section">
    <p className="eyebrow">{label}</p><h2>{title}</h2><p>{text}</p>
    <div className="contact-actions"><a className="primary" href="mailto:ingenierossoftware31@gmail.com">{emailLabel} <span>↗</span></a><a className="secondary" href="https://wa.me/573025286029?text=Hola%20Andr%C3%A9s%2C%20vi%20su%20portafolio%20profesional%20y%20quisiera%20conversar%20sobre%20una%20oportunidad." target="_blank" rel="noreferrer">{phoneLabel} <span>↗</span></a></div>
    <p className="contact-data"><a href="mailto:ingenierossoftware31@gmail.com">ingenierossoftware31@gmail.com</a><span>·</span><a href="tel:+573025286029">+57 302 528 6029</a></p>
    <p className="pending">{pendingLinks}</p><div className="profile-links"><a href="https://www.linkedin.com/in/anmartinez94" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://github.com/ingesoft04" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.upwork.com/freelancers/~0199b81b4f763382ef?mp_source=share" target="_blank" rel="noreferrer">Upwork ↗</a></div>
    <details className="documents"><summary>{language === "es" ? "Documentos profesionales" : "Professional documents"}</summary><div>{documents.map(([name, href]) => <a key={href} href={href} download>{name} ↓</a>)}</div></details>
  </section>;
}
import { documentLinks } from "../lib/portfolioLogic.mjs";
