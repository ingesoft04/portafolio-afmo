from reportlab.lib.pagesizes import A4
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfbase import pdfmetrics
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak, KeepTogether
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.colors import HexColor
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.units import mm
from pathlib import Path

OUT=Path(__file__).resolve().parents[1]/"public"/"perfil-andres-felipe-martinez.pdf"
OUT.parent.mkdir(exist_ok=True)
font_dir=Path("C:/Windows/Fonts")
pdfmetrics.registerFont(TTFont("Inter",str(font_dir/"arial.ttf")))
pdfmetrics.registerFont(TTFont("InterB",str(font_dir/"arialbd.ttf")))
BG=HexColor("#090C10"); TEXT=HexColor("#EDF2F5"); MUTED=HexColor("#A6B1BB"); ACCENT=HexColor("#6FFFD2"); LINE=HexColor("#29323B"); PANEL=HexColor("#11171D")

styles=getSampleStyleSheet()
styles.add(ParagraphStyle(name="NameX",fontName="InterB",fontSize=25,leading=28,textColor=TEXT,spaceAfter=6))
styles.add(ParagraphStyle(name="Role",fontName="Inter",fontSize=10.5,leading=15,textColor=MUTED,spaceAfter=12))
styles.add(ParagraphStyle(name="Label",fontName="InterB",fontSize=7.5,leading=10,textColor=ACCENT,tracking=1.8,spaceBefore=9,spaceAfter=6))
styles.add(ParagraphStyle(name="HeadX",fontName="InterB",fontSize=14,leading=17,textColor=TEXT,spaceAfter=8))
styles.add(ParagraphStyle(name="BodyX",fontName="Inter",fontSize=8.5,leading=12.5,textColor=MUTED,spaceAfter=6))
styles.add(ParagraphStyle(name="Small",fontName="Inter",fontSize=7.4,leading=10.5,textColor=MUTED))
styles.add(ParagraphStyle(name="SmallB",fontName="InterB",fontSize=8.3,leading=11,textColor=TEXT,spaceAfter=2))
styles.add(ParagraphStyle(name="Tag",fontName="Inter",fontSize=6.8,leading=9,textColor=TEXT,alignment=TA_LEFT))

def bg(canvas,doc):
    canvas.saveState(); canvas.setFillColor(BG); canvas.rect(0,0,A4[0],A4[1],fill=1,stroke=0)
    canvas.setStrokeColor(LINE); canvas.line(18*mm,14*mm,A4[0]-18*mm,14*mm)
    canvas.setFont("Inter",6.5); canvas.setFillColor(MUTED); canvas.drawString(18*mm,9*mm,"ANDRÉS FELIPE MARTÍNEZ · FMV INFRASEC")
    canvas.drawRightString(A4[0]-18*mm,9*mm,str(doc.page)); canvas.restoreState()

def P(txt,sty="BodyX"): return Paragraph(txt,styles[sty])
def tags(items):
    cells=[[P(x,"Tag") for x in items]]
    t=Table(cells,colWidths=[(170*mm)/len(items)]*len(items),hAlign="LEFT")
    t.setStyle(TableStyle([("BACKGROUND",(0,0),(-1,-1),PANEL),("BOX",(0,0),(-1,-1),.4,LINE),("INNERGRID",(0,0),(-1,-1),.4,LINE),("LEFTPADDING",(0,0),(-1,-1),5),("RIGHTPADDING",(0,0),(-1,-1),5),("TOPPADDING",(0,0),(-1,-1),4),("BOTTOMPADDING",(0,0),(-1,-1),4)])); return t

story=[P("SOFTWARE · SECURITY · INFRASTRUCTURE · AUTOMOTIVE","Label"),P("Andrés Felipe<br/>Martínez Obando","NameX"),P("Ingeniero de Software & Especialista en Seguridad de la Información<br/>Software Engineer & Information Security Specialist","Role"),P("PERFIL / PROFILE","Label"),P("Ingeniero con experiencia en administración de servidores externos, soporte a clientes, implementación, bases de datos SQL y seguridad de la información. Combino software, infraestructura y un laboratorio doméstico activo con formación y experiencia en mecatrónica automotriz. Disponible para empleo remoto y proyectos freelance.","BodyX"),P("Engineer experienced in external server administration, client support, implementation, SQL databases, and information security. I combine software, infrastructure, an active home lab, and hands-on automotive mechatronics experience. Available for remote employment and freelance projects.","BodyX"),Spacer(1,4*mm),tags(["ISO/IEC 27001","WINDOWS SERVER","LINUX","SQL","DOCKER","PYTHON / JAVA"]),Spacer(1,7*mm),P("DOS LÍNEAS PROFESIONALES / TWO PROFESSIONAL TRACKS","Label")]
tracks=[[[P("01 / DIGITAL","Label"),P("Software, seguridad e infraestructura","HeadX"),P("Administración de Windows Server y Linux, soporte de aplicaciones, SQL, pruebas funcionales, documentación, gestión de incidentes, DevSecOps y apoyo en SGSI ISO/IEC 27001.","BodyX")],[P("02 / AUTOMOTRIZ","Label"),P("Mecatrónica y diagnóstico automotriz","HeadX"),P("Diagnóstico de fallas, mantenimiento preventivo y correctivo, inspección preoperacional y seguimiento de flotas. Servicios remotos: orientación guiada, planes de mantenimiento y listas de inspección.","BodyX")]]]
t=Table(tracks,colWidths=[84*mm,84*mm],hAlign="LEFT");t.setStyle(TableStyle([("BOX",(0,0),(-1,-1),.5,LINE),("INNERGRID",(0,0),(-1,-1),.5,LINE),("VALIGN",(0,0),(-1,-1),"TOP"),("BACKGROUND",(0,0),(-1,-1),PANEL),("PADDING",(0,0),(-1,-1),10)]));story += [t,Spacer(1,7*mm),P("EXPERIENCIA / EXPERIENCE","Label")]
jobs=[("2024 — ACTUAL","Analista de Seguridad en Redes y Consultor · IDAE Soluciones","Servidores externos, Windows Server, SQL, soporte en cliente, implementación y documentación de incidentes."),("2023 — 2024","Técnico mecánico · Consorcio Santa Ana","Supervisión de maquinaria pesada y mantenimiento preventivo/correctivo."),("2022 — 2023","Ejecutivo de desarrollo productivo · Bancamía","Análisis de riesgos, captación de clientes y gestión de cartera."),("2018 — 2022","Operaciones automotrices · LAND FAST y otros","Inspección preoperacional, control de flotas, diagnóstico y mantenimiento automotriz.")]
for date,title,desc in jobs: story.append(KeepTogether([P(date,"Label"),P(title,"SmallB"),P(desc,"Small"),Spacer(1,3*mm)]))
story += [PageBreak(),P("CAPACIDADES / CAPABILITIES","Label"),P("Servicios para equipos y clientes remotos","HeadX")]
caps=[("Seguridad de la información","SGSI, riesgos, SoA, controles del Anexo A e implementación/auditoría ISO/IEC 27001."),("Infraestructura y soporte","Windows Server, Linux, servidores externos, soporte remoto/presencial y continuidad operativa."),("Software y datos","Requerimientos, soporte de aplicaciones, pruebas, SQL, Python, Java y COBOL."),("Asistencia virtual técnica","Documentación, atención a clientes, seguimiento y organización operativa."),("Consultoría automotriz remota","Diagnóstico guiado, mantenimiento, inspecciones y acompañamiento para flotas."),("Automatización e IA","Optimización de procesos, documentación y tareas tecnológicas repetitivas.")]
rows=[]
for i in range(0,len(caps),2): rows.append([[P(caps[i][0],"SmallB"),P(caps[i][1],"Small")],[P(caps[i+1][0],"SmallB"),P(caps[i+1][1],"Small")]])
t=Table(rows,colWidths=[84*mm]*2);t.setStyle(TableStyle([("BOX",(0,0),(-1,-1),.5,LINE),("INNERGRID",(0,0),(-1,-1),.5,LINE),("BACKGROUND",(0,0),(-1,-1),PANEL),("VALIGN",(0,0),(-1,-1),"TOP"),("PADDING",(0,0),(-1,-1),9)]));story += [t,Spacer(1,7*mm),P("LABORATORIO PERSONAL / HOME LAB","Label"),P("Servidor Nobara · Máquinas virtuales · OpenMediaVault · Docker · Windows Server 2025","HeadX"),P("Entorno práctico para aprendizaje, experimentación y validación de configuraciones fuera de producción.","BodyX"),Spacer(1,5*mm),P("FORMACIÓN Y CERTIFICACIONES / EDUCATION & CERTIFICATIONS","Label")]
edu=[[P("Especialización en Seguridad Informática","SmallB"),P("UNIR · 2026","Small")],[P("Ingeniería de Software","SmallB"),P("Politécnico Grancolombiano · 2024 · Tarjeta profesional vigente","Small")],[P("Tecnología en Mantenimiento Mecatrónico Automotriz","SmallB"),P("SENA · 2022","Small")],[P("Técnico en Asistencia Administrativa","SmallB"),P("SENA · 2017","Small")]]
t=Table(edu,colWidths=[84*mm]*2);t.setStyle(TableStyle([("VALIGN",(0,0),(-1,-1),"TOP"),("TOPPADDING",(0,0),(-1,-1),5),("BOTTOMPADDING",(0,0),(-1,-1),5)]));story += [t,P("EN CURSO · CERTIPROF","Label"),P("Líder Implementador, Auditor Interno y Auditor Externo ISO/IEC 27001.","BodyX"),Spacer(1,3*mm),P("IDIOMAS / LANGUAGES","Label"),P("Español nativo · Inglés: lectura técnica / Native Spanish · English: technical reading","BodyX"),Spacer(1,5*mm),P("DISPONIBILIDAD / AVAILABILITY","Label"),P("Empleo remoto y freelance · Tiempo completo, medio tiempo o por horas · Tarifa de referencia USD 25–40/h según alcance.","BodyX"),P("CONTACTO / CONTACT","Label"),P("ingenierossoftware31@gmail.com · +57 302 528 6029 · Bogotá, Colombia · UTC-5<br/>WhatsApp corporativo: +57 302 528 6029 · LinkedIn · GitHub · Upwork · Workana: enlaces pendientes de agregar","HeadX")]
doc=SimpleDocTemplate(str(OUT),pagesize=A4,rightMargin=18*mm,leftMargin=18*mm,topMargin=16*mm,bottomMargin=19*mm,title="Perfil profesional - Andrés Felipe Martínez",author="Andrés Felipe Martínez Obando")
doc.build(story,onFirstPage=bg,onLaterPages=bg)
print(OUT)
