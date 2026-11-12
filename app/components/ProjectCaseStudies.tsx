"use client";

import Image from "next/image";
import { useState } from "react";

interface ProjectCase {
  code: string;
  title: string;
  summary: string;
  contribution: string;
  evidence: string;
  status: string;
  tags: string[];
  image: string;
  url: string;
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
  const [activeIndex, setActiveIndex] = useState(0);
  const emblems = [
    ["BZL", "JEWELRY", "◇"],
    ["PSI", "CARE", "+"],
    ["MAKE", "BEAUTY", "✦"],
    ["T+", "CAPSULE", "⌁"],
  ];
  const project = props.projects[activeIndex];
  const emblem = emblems[activeIndex];
  return <section id="proyectos" className="section projects">
    <SectionHead label={props.label} title={props.title} text={props.text}/>
    <div className="privacy-banner privacy-banner-compact"><div className="privacy-icon" aria-hidden="true">⌁</div><div><strong>{props.privacyTitle}</strong><p>{props.privacyText}</p></div></div>
    <div className="project-selector" role="tablist" aria-label={props.title}>{props.projects.map((item, index) => <button key={item.code} type="button" role="tab" aria-selected={activeIndex === index} aria-controls="selected-project" onClick={() => setActiveIndex(index)}><span>0{index + 1}</span>{item.title}</button>)}</div>
    <article className="selected-project" id="selected-project" role="tabpanel">
      <div className="project-shot"><Image key={project.image} src={project.image} alt={`Vista pública de ${project.title}`} fill sizes="(max-width: 900px) 100vw, 55vw" priority={activeIndex === 0}/><a href={project.url} target="_blank" rel="noreferrer">{props.detailsLabel === "Ver detalles" ? "Visitar proyecto ↗" : "Visit project ↗"}</a></div>
      <div className="project-copy">
        <div className="case-top"><span>{project.code}</span><b>{project.status}</b></div>
        <div className={`case-emblem case-emblem-${activeIndex + 1}`} role="img" aria-label={`${project.title}: ${emblem[1]}`}><b aria-hidden="true">{emblem[2]}</b><strong>{emblem[0]}</strong><small>{emblem[1]}</small><i aria-hidden="true"/></div>
        <h3>{project.title}</h3><p>{project.summary}</p>
        <div className="case-tags">{project.tags.map(tag => <b key={tag}>{tag}</b>)}</div>
        <details className="case-details" key={project.code}>
        <summary>{props.detailsLabel}<span aria-hidden="true">＋</span></summary>
        <div>
          {activeIndex === 3 && <div className="case-visual" aria-hidden="true"><span>INPUT</span><i>→</i><span>STORE</span><i>→</i><span>DELIVER</span></div>}
          <div className="case-contribution"><small>{props.contributionLabel}</small><p>{project.contribution}</p></div>
          <p className="case-evidence"><strong>✓</strong>{project.evidence}</p>
        </div>
        </details>
      </div>
    </article>
  </section>;
}

function SectionHead({label, title, text}:{label:string; title:string; text?:string}) {
  return <div className="section-head"><p className="eyebrow">{label}</p><h2>{title}</h2>{text && <p>{text}</p>}</div>;
}
