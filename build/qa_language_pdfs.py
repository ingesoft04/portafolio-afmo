import pdfplumber
from pathlib import Path
for filename in ["perfil-andres-felipe-martinez-es.pdf","andres-felipe-martinez-profile-en.pdf"]:
    source=Path("output/pdf")/filename
    with pdfplumber.open(source) as pdf:
        print(filename,len(pdf.pages),sum(len(p.extract_text() or "") for p in pdf.pages))
        for index,page in enumerate(pdf.pages,1):
            page.to_image(resolution=105).save(Path("outputs")/f"{source.stem}-{index}.png")
