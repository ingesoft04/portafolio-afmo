from pathlib import Path
import shutil

from reportlab.lib.colors import HexColor
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import KeepTogether, Paragraph, SimpleDocTemplate, Spacer


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "output" / "pdf"
PUBLIC = ROOT / "public"
OUTPUT.mkdir(parents=True, exist_ok=True)

FONT_CANDIDATES = [
    (Path("C:/Windows/Fonts/arial.ttf"), Path("C:/Windows/Fonts/arialbd.ttf")),
    (Path("/usr/share/fonts/liberation-sans-fonts/LiberationSans-Regular.ttf"), Path("/usr/share/fonts/liberation-sans-fonts/LiberationSans-Bold.ttf")),
]
FONT_REGULAR, FONT_BOLD = next(
    ((regular, bold) for regular, bold in FONT_CANDIDATES if regular.exists() and bold.exists()),
    (None, None),
)
if FONT_REGULAR is None or FONT_BOLD is None:
    raise FileNotFoundError("No se encontró una familia tipográfica compatible con Arial")

pdfmetrics.registerFont(TTFont("CVRegular", str(FONT_REGULAR)))
pdfmetrics.registerFont(TTFont("CVBold", str(FONT_BOLD)))

NAVY = HexColor("#17365D")
TEXT = HexColor("#404040")
MUTED = HexColor("#767676")
LINE = HexColor("#D9E2F3")

CONTENT = {
    "es": {
        "file": "perfil-andres-felipe-martinez-es.pdf",
        "role": "INGENIERO DE SOFTWARE | SOPORTE DE APLICACIONES | INFRAESTRUCTURA Y SEGURIDAD TI",
        "profile_heading": "PERFIL PROFESIONAL",
        "profile": "Ingeniero de Software y Especialista en Seguridad Informática, con tarjeta profesional vigente y experiencia en soporte de aplicaciones empresariales, infraestructura tecnológica, administración de servidores, despliegues y gestión de incidentes. Manejo de Windows Server, Linux, IIS, SQL Server, redes, API REST, reportes y automatización con PowerShell. Experiencia en análisis de causa raíz, validación de versiones, atención a clientes y documentación técnica. Profesional autónomo, investigativo y orientado al servicio y la mejora continua.",
        "skills_heading": "COMPETENCIAS TÉCNICAS",
        "skills": [
            ("Soporte e infraestructura", "Windows Server 2008 y posteriores · Linux Ubuntu · Servicios de Windows · Monitoreo de almacenamiento, RAM y CPU · DNS · Firewall · VPN · Certificados SSL"),
            ("IIS y despliegues", "Sitios web · Application Pools · Bindings · Permisos · Web.config · Endpoints · Ambientes de pruebas y producción · Rollback · Validación de versiones"),
            ("Datos, APIs y reportes", "SQL Server · SSMS · JOIN y subconsultas · Procedimientos almacenados · Triggers · API REST · JSON · Postman · RDLC"),
            ("Automatización y desarrollo", "PowerShell · Archivos .bat · Git · Python en aprendizaje · Fundamentos de pruebas, HTTP y APIs"),
            ("Seguridad de la información", "ISO/IEC 27001 · SGSI · Gestión de riesgos · Controles del Anexo A · Gestión de incidentes · DevSecOps"),
        ],
        "experience_heading": "EXPERIENCIA PROFESIONAL",
        "company": "IDAE SOLUCIONES — Sector software",
        "position": "Analista de Seguridad en Redes y Consultor | Bogotá, Colombia | Abril 2024 – Noviembre 2026",
        "bullets": [
            "Administré servidores externos y monitoreé almacenamiento, memoria, procesador, servicios y disponibilidad de la plataforma empresarial SAMM.",
            "Desplegué, actualicé y parametricé la plataforma en pruebas y producción; realicé validaciones de versiones y rollback ante fallas.",
            "Configuré IIS, sitios, Application Pools, bindings, puertos, dominios, permisos, certificados SSL, web.config, endpoints y servicios de Windows.",
            "Diagnostiqué incidentes con logs, Visor de eventos, conectividad, IIS y SQL Server; documenté causas, acciones y soluciones.",
            "Elaboré consultas SQL, ejecuté procedimientos almacenados, modifiqué triggers y realicé respaldos, restauraciones y mantenimiento.",
            "Automaticé tareas con PowerShell y .bat; validé API REST con Postman y JSON, ajusté reportes RDLC y brindé soporte a clientes.",
        ],
        "additional_heading": "EXPERIENCIA ADICIONAL",
        "additional": [
            ("Bancamía — Ejecutivo de Desarrollo Productivo", "Abril 2022 – Enero 2023 | Análisis de riesgo financiero, atención y gestión de clientes y seguimiento de cartera"),
            ("Experiencia técnica y de mantenimiento", "Nacional de Repuesto, Land Fast, Serviteca La 5ta y Consorcio Santa Ana | 2018 – 2024"),
        ],
        "education_heading": "FORMACIÓN ACADÉMICA",
        "education": [
            ("Especialización en Seguridad Informática", "Universidad Internacional de La Rioja (UNIR) | 2026"),
            ("Ingeniería de Software", "Politécnico Grancolombiano | 2024 | Tarjeta profesional vigente"),
            ("Tecnología en Mantenimiento Mecatrónico Automotriz", "SENA | 2022"),
            ("Técnico en Asistencia Administrativa", "SENA | 2017"),
        ],
        "training_heading": "FORMACIÓN COMPLEMENTARIA EN CURSO",
        "training": [
            ("ISO/IEC 27001", "Preparación para Internal Auditor, Lead Implementer y Lead Auditor"),
            ("Desarrollo de software", "Python, terminal, Git, pruebas, SQL, HTTP, JSON, APIs REST, automatización y fundamentos de DevOps"),
        ],
        "additional_info_heading": "INFORMACIÓN ADICIONAL",
        "additional_info": "Inglés técnico: lectura de documentación · Disponibilidad para trabajo presencial, remoto o híbrido.",
        "footer": "Andrés Felipe Martínez Obando | Hoja de vida",
    },
    "en": {
        "file": "andres-felipe-martinez-profile-en.pdf",
        "role": "SOFTWARE ENGINEER | APPLICATION SUPPORT | INFRASTRUCTURE & IT SECURITY",
        "profile_heading": "PROFESSIONAL PROFILE",
        "profile": "Software Engineer and Information Security Specialist with an active professional license and experience in enterprise application support, technology infrastructure, server administration, deployments, and incident management. Skilled in Windows Server, Linux, IIS, SQL Server, networking, REST APIs, reporting, and PowerShell automation. Experienced in root cause analysis, release validation, customer support, and technical documentation. Autonomous, investigative, service-oriented, and committed to continuous improvement.",
        "skills_heading": "TECHNICAL SKILLS",
        "skills": [
            ("Support and infrastructure", "Windows Server 2008 and later · Ubuntu Linux · Windows services · Storage, RAM and CPU monitoring · DNS · Firewall · VPN · SSL certificates"),
            ("IIS and deployments", "Websites · Application Pools · Bindings · Permissions · Web.config · Endpoints · Test and production environments · Rollback · Release validation"),
            ("Data, APIs and reporting", "SQL Server · SSMS · JOINs and subqueries · Stored procedures · Triggers · REST APIs · JSON · Postman · RDLC"),
            ("Automation and development", "PowerShell · .bat files · Git · Python in progress · Testing, HTTP and API fundamentals"),
            ("Information security", "ISO/IEC 27001 · ISMS · Risk management · Annex A controls · Incident management · DevSecOps"),
        ],
        "experience_heading": "PROFESSIONAL EXPERIENCE",
        "company": "IDAE SOLUCIONES — Software sector",
        "position": "Network Security Analyst and Consultant | Bogotá, Colombia | April 2024 – November 2026",
        "bullets": [
            "Administered external servers and monitored storage, memory, CPU, services, and availability for the SAMM enterprise platform.",
            "Deployed, updated, and configured the platform in test and production; performed release validation and rollback after failures.",
            "Configured IIS websites, Application Pools, bindings, ports, domains, permissions, SSL certificates, web.config, endpoints, and Windows services.",
            "Diagnosed incidents using logs, Event Viewer, connectivity checks, IIS, and SQL Server; documented causes, actions, and solutions.",
            "Built SQL queries, executed stored procedures, modified triggers, and performed backups, restores, and maintenance activities.",
            "Automated tasks with PowerShell and .bat files; validated REST APIs with Postman and JSON, updated RDLC reports, and supported customers.",
        ],
        "additional_heading": "ADDITIONAL EXPERIENCE",
        "additional": [
            ("Bancamía — Productive Development Executive", "April 2022 – January 2023 | Financial risk analysis, customer service and management, and portfolio follow-up"),
            ("Technical and maintenance experience", "Nacional de Repuesto, Land Fast, Serviteca La 5ta, and Consorcio Santa Ana | 2018 – 2024"),
        ],
        "education_heading": "EDUCATION",
        "education": [
            ("Specialization in Information Security", "Universidad Internacional de La Rioja (UNIR) | 2026"),
            ("Software Engineering", "Politécnico Grancolombiano | 2024 | Active professional license"),
            ("Automotive Mechatronics Maintenance Technology", "SENA | 2022"),
            ("Administrative Assistance Technician", "SENA | 2017"),
        ],
        "training_heading": "COMPLEMENTARY TRAINING IN PROGRESS",
        "training": [
            ("ISO/IEC 27001", "Preparation for Internal Auditor, Lead Implementer, and Lead Auditor"),
            ("Software development", "Python, terminal, Git, testing, SQL, HTTP, JSON, REST APIs, automation, and DevOps fundamentals"),
        ],
        "additional_info_heading": "ADDITIONAL INFORMATION",
        "additional_info": "Technical English: documentation reading · Available for on-site, remote, or hybrid work.",
        "footer": "Andrés Felipe Martínez Obando | Résumé",
    },
}


styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name="CVName", fontName="CVBold", fontSize=18, leading=19.5, textColor=NAVY, alignment=1, spaceAfter=2))
styles.add(ParagraphStyle(name="CVRole", fontName="CVBold", fontSize=9.4, leading=11, textColor=NAVY, alignment=1, spaceAfter=2))
styles.add(ParagraphStyle(name="CVContact", fontName="CVRegular", fontSize=8.2, leading=9.8, textColor=TEXT, alignment=1, spaceAfter=1.2))
styles.add(ParagraphStyle(name="CVHeading", fontName="CVBold", fontSize=9.2, leading=10.5, textColor=NAVY, spaceBefore=4.8, spaceAfter=2, borderWidth=0, borderColor=LINE))
styles.add(ParagraphStyle(name="CVBody", fontName="CVRegular", fontSize=8.1, leading=9.9, textColor=TEXT, spaceAfter=1.8))
styles.add(ParagraphStyle(name="CVLine", fontName="CVRegular", fontSize=7.85, leading=9.4, textColor=TEXT, spaceAfter=.8))
styles.add(ParagraphStyle(name="CVBullet", fontName="CVRegular", fontSize=7.7, leading=9.15, textColor=TEXT, leftIndent=8, firstLineIndent=-5, bulletIndent=2, spaceAfter=.45))
styles.add(ParagraphStyle(name="CVFooter", fontName="CVRegular", fontSize=6.5, leading=7, textColor=MUTED, alignment=1))


def paragraph(text, style="CVBody"):
    return Paragraph(text, styles[style])


def heading(text):
    return paragraph(text, "CVHeading")


def labeled_line(label, text):
    return paragraph(f"<b>{label}:</b> {text}", "CVLine")


def footer(canvas, document, footer_text):
    canvas.saveState()
    canvas.setStrokeColor(LINE)
    canvas.line(16 * mm, 10.5 * mm, A4[0] - 16 * mm, 10.5 * mm)
    canvas.setFillColor(MUTED)
    canvas.setFont("CVRegular", 6.5)
    canvas.drawCentredString(A4[0] / 2, 7 * mm, footer_text)
    canvas.restoreState()


def build(language, data):
    path = OUTPUT / data["file"]
    document = SimpleDocTemplate(
        str(path), pagesize=A4, leftMargin=15 * mm, rightMargin=15 * mm,
        topMargin=10 * mm, bottomMargin=13 * mm,
        title=data["role"], author="Andrés Felipe Martínez Obando",
    )
    story = [
        paragraph("ANDRÉS FELIPE MARTÍNEZ OBANDO", "CVName"),
        paragraph(data["role"], "CVRole"),
        paragraph("Bogotá, Colombia | +57 302 528 6029 | amartinezobando@gmail.com", "CVContact"),
        paragraph('<link href="https://portafolio-afmo.vercel.app" color="#17365D"><u>portafolio-afmo.vercel.app</u></link>', "CVContact"),
        heading(data["profile_heading"]), paragraph(data["profile"]),
        heading(data["skills_heading"]),
    ]
    story.extend(labeled_line(label, value) for label, value in data["skills"])
    story.extend([heading(data["experience_heading"]), paragraph(f"<b>{data['company']}</b>", "CVLine"), paragraph(f"<b>{data['position']}</b>", "CVLine")])
    story.extend(paragraph(f"• {item}", "CVBullet") for item in data["bullets"])
    story.append(heading(data["additional_heading"]))
    story.extend(labeled_line(label, value) for label, value in data["additional"])
    story.append(heading(data["education_heading"]))
    story.extend(labeled_line(label, value) for label, value in data["education"])
    story.append(heading(data["training_heading"]))
    story.extend(labeled_line(label, value) for label, value in data["training"])
    story.extend([heading(data["additional_info_heading"]), paragraph(data["additional_info"], "CVLine")])
    document.build(story, onFirstPage=lambda c, d: footer(c, d, data["footer"]), onLaterPages=lambda c, d: footer(c, d, data["footer"]))
    shutil.copy2(path, PUBLIC / data["file"])
    print(path)


for lang, cv_data in CONTENT.items():
    build(lang, cv_data)
