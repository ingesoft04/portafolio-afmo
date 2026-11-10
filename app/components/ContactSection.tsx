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
  const emailSubject = language === "es" ? "Contacto desde el portafolio profesional" : "Contact from your professional portfolio";
  const emailBody = language === "es"
    ? "Hola Andrés, vi su portafolio profesional y quisiera conversar sobre una oportunidad."
    : "Hello Andrés, I reviewed your professional portfolio and would like to discuss an opportunity.";
  const emailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=amartinezobando@gmail.com&su=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
  return <section id="contacto" className="contact-section">
    <p className="eyebrow">{label}</p><h2>{title}</h2><p>{text}</p>
    <div className="contact-actions"><a className="primary" href={emailUrl} target="_blank" rel="noreferrer">{emailLabel} <span>↗</span></a><a className="secondary" href="https://wa.me/573025286029?text=Hola%20Andr%C3%A9s%2C%20vi%20su%20portafolio%20profesional%20y%20quisiera%20conversar%20sobre%20una%20oportunidad." target="_blank" rel="noreferrer">{phoneLabel} <span>↗</span></a></div>
    <p className="contact-data"><a href={emailUrl} target="_blank" rel="noreferrer">amartinezobando@gmail.com</a><span>·</span><a href="https://wa.me/573025286029?text=Hola%20Andr%C3%A9s%2C%20vi%20su%20portafolio%20profesional%20y%20quisiera%20conversar%20sobre%20una%20oportunidad." target="_blank" rel="noreferrer">+57 302 528 6029</a></p>
    <p className="pending">{pendingLinks}</p><div className="profile-links"><a href="https://www.linkedin.com/in/anmartinez94" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://github.com/ingesoft04" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.upwork.com/freelancers/~0199b81b4f763382ef?mp_source=share" target="_blank" rel="noreferrer">Upwork ↗</a></div>
    <details className="documents"><summary>{language === "es" ? "Documentos profesionales" : "Professional documents"}</summary><div>{documents.map(([name, href]) => <a key={href} href={href} download>{name} ↓</a>)}</div></details>
  </section>;
}
import { documentLinks } from "../lib/portfolioLogic.mjs";
