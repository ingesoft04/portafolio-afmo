from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "public" / "fmv-infrasec-logo.png"
OUT = ROOT / "output" / "brand"
OUT.mkdir(parents=True, exist_ok=True)

source = Image.open(SOURCE).convert("RGBA")

def recolor(image, rgb):
    alpha = image.getchannel("A")
    result = Image.new("RGBA", image.size, (*rgb, 0))
    result.putalpha(alpha)
    return result

def trim_with_padding(image, padding=48):
    box = image.getchannel("A").getbbox()
    if not box:
        return image
    left, top, right, bottom = box
    left = max(0, left-padding); top = max(0, top-padding)
    right = min(image.width, right+padding); bottom = min(image.height, bottom+padding)
    return image.crop((left, top, right, bottom))

# Complete horizontal identity: symbol, name and descriptor.
full = trim_with_padding(source, 56)
full.save(OUT / "fmv-logo-color-transparent.png")
recolor(full, (247, 249, 252)).save(OUT / "fmv-logo-white-transparent.png")
recolor(full, (28, 36, 46)).save(OUT / "fmv-logo-graphite-transparent.png")

# Isotype: exact top symbol, for avatars, favicons and compact placements.
mark_region = source.crop((0, 0, source.width, 560))
mark = trim_with_padding(mark_region, 48)
mark.save(OUT / "fmv-mark-color-transparent.png")
recolor(mark, (247, 249, 252)).save(OUT / "fmv-mark-white-transparent.png")
recolor(mark, (28, 36, 46)).save(OUT / "fmv-mark-graphite-transparent.png")

guide = """FMV InfraSec - Logo usage\n\nCOLOR TRANSPARENT\nUse on neutral white, light gray, or near-black backgrounds when maximum brand recognition is desired.\n\nWHITE TRANSPARENT\nUse on dark backgrounds, photographs, video, and the portfolio dark theme.\n\nGRAPHITE TRANSPARENT\nUse on white backgrounds, printed documents, profile PDFs, and the portfolio light theme.\n\nFULL LOGO\nUse in documents, covers, social banners, proposals, and wide spaces.\n\nMARK / ISOTYPE\nUse for avatars, favicons, profile icons, and compact square spaces.\n\nNever stretch, rotate, add shadows, change proportions, or place over a busy background without sufficient contrast.\n"""
(OUT / "README-logo-usage.txt").write_text(guide, encoding="utf-8")

for path in sorted(OUT.glob("*.png")):
    print(path.name, Image.open(path).size)
