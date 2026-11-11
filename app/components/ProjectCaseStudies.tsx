interface ProjectCase {
  code: string;
  title: string;
  summary: string;
  contribution: string;
  evidence: string;
  status: string;
  tags: string[];
}

interface ProjectCaseStudiesProps {
  label: string;
  title: string;
  text: string;
  privacyTitle: string;
  privacyText: string;
  contributionLabel: string;
  detailsLabel: string;
  projects: ProjectCase[];
}

export function ProjectCaseStudies(props: ProjectCaseStudiesProps) {
  const emblems = [
    ["BZL", "JEWELRY", "◇"],
    ["PSI", "CARE", "+"],
    ["MAKE", "BEAUTY", "✦"],
    ["T+", "CAPSULE", "⌁"],
  ];
  return <section id="proyectos" className="section projects">
    <SectionHead label={props.label} title={props.title} text={props.text}/>
    <div className="privacy-banner privacy-banner-compact"><div className="privacy-icon" aria-hidden="true">⌁</div><div><strong>{props.privacyTitle}</strong><p>{props.privacyText}</p></div></div>
    <div className="case-grid">{props.projects.map((project, index) => <article key={project.code}>
      <div className="case-top"><span>{project.code}</span><b>{project.status}</b></div>
      <div className={`case-emblem case-emblem-${index + 1}`} role="img" aria-label={`${project.title}: ${emblems[index][1]}`}><b aria-hidden="true">{emblems[index][2]}</b><strong>{emblems[index][0]}</strong><small>{emblems[index][1]}</small><i aria-hidden="true"/></div>
      <h3>{project.title}</h3><p>{project.summary}</p>
      <div className="case-tags">{project.tags.map(tag => <b key={tag}>{tag}</b>)}</div>
      <details className="case-details">
        <summary>{props.detailsLabel}<span aria-hidden="true">＋</span></summary>
        <div>
          {index === 3 && <div className="case-visual" aria-hidden="true"><span>INPUT</span><i>→</i><span>STORE</span><i>→</i><span>DELIVER</span></div>}
          <div className="case-contribution"><small>{props.contributionLabel}</small><p>{project.contribution}</p></div>
          <p className="case-evidence"><strong>✓</strong>{project.evidence}</p>
        </div>
      </details>
    </article>)}</div>
  </section>;
}

function SectionHead({label, title, text}:{label:string; title:string; text?:string}) {
  return <div className="section-head"><p className="eyebrow">{label}</p><h2>{title}</h2>{text && <p>{text}</p>}</div>;
}
