#!/usr/bin/env python3
"""Create review-only, accessible RTL reader editions of seven original course PDFs.
Do not overwrite existing published originals. No scientific claims are added."""
import html, json, re
from pathlib import Path
from collections import Counter
import fitz
from weasyprint import HTML

NUMBERS = ["01","03","04","05","06","07","08"]
ROOT = Path("public/lectures")
OUT = Path("review/lectures")
OUT.mkdir(parents=True, exist_ok=True)
TITLES = {
    "01": "مدخل إلى البرنامج العلمي الشامل",
    "03": "الطب التكاملي: من النظرية إلى الممارسة",
    "04": "من المعرفة إلى التطبيق: رؤية علاجية متكاملة",
    "05": "العلاجات الحركية والنفسية ومفاهيم الطاقة",
    "06": "الصوت والشفاء الروحي ومفاهيم الطاقة",
    "07": "ضبط مفاهيم الطب التكاملي والعلاجات التكميلية",
    "08": "المناقشات التطبيقية والتقويم المفاهيمي",
}
def repair_arabic_line(line):
    line = re.sub(r"[\u200e\u200f\u2066-\u2069]", "", line.strip())
    line = re.sub(r"\s+", " ", line)
    if not line or line.isdigit():
        return line
    # PyMuPDF returns many slide lines in visual word order rather than Arabic logical order.
    # Keep the characters within each token unchanged; reorder only word tokens.
    ar = len(re.findall(r"[\u0600-\u06ff]", line))
    en = len(re.findall(r"[A-Za-z]", line))
    if ar >= 3 and ar > en * 0.7 and len(line.split()) >= 2:
        line = " ".join(reversed(line.split()))
    line = re.sub(r"^[:،؛]\s*", "", line)
    line = line.replace("اإلسطرالب", "الأسطرلاب").replace("األسطرالب","الأسطرلاب")
    # Source-slide artefacts, not substantive text
    line = re.sub(r"[]", "•", line)
    return line

def source_lines(page):
    # Source text is extracted from each original page, not composed from generic model knowledge.
    text=page.get_text("text", sort=True)
    return [repair_arabic_line(s) for s in text.splitlines() if s.strip()]

def build_html(num,doc):
    intro_title = TITLES[num]
    lecture_body=[]
    total_text=0
    for i,page in enumerate(doc, 1):
        textlines=source_lines(page)
        total_text+=sum(len(line) for line in textlines)
        if not textlines:
            lecture_body.append('<section class="source-page"><h2>صفحة المادة الأصلية %s</h2></section>' % i)
            continue
        first=textlines[0]
        rest=textlines[1:]
        # Use the first visible line as a document section heading; avoid repeating cover boilerplate.
        heading=html.escape(first[:180])
        bits=[]
        for line in rest:
            clean=html.escape(line)
            if len(line)<120 and (line.endswith(":") or line.startswith("•") or re.match(r"^[0-9]+[.)]",line)):
                bits.append('<p class="shortline">'+clean+'</p>')
            else:
                bits.append('<p>'+clean+'</p>')
        lecture_body.append('<section class="source-page"><div class="folio">من المادة الأصلية • الصفحة %d</div><h2>%s</h2>%s</section>' % (i,heading,"\n".join(bits)))
    college=Path("public/programs/integrative-medicine-diploma/medical-sciences-college-logo.webp")
    university=Path("public/programs/integrative-medicine-diploma/iau-university-logo.webp")
    logos='<img src="%s" alt="شعار الجامعة"/><img src="%s" alt="شعار الكلية"/>' % (university.resolve().as_uri(),college.resolve().as_uri()) if college.exists() and university.exists() else ""
    css=r"""
    @font-face { font-family: "YKAmiri"; src: local("Amiri"); font-weight: 400; }
    @font-face { font-family: "YKAmiri"; src: local("Amiri Bold"); font-weight: 700; }
    @page {
      size: A4; margin: 24mm 22mm 24mm 22mm;
      @top-center { content: "جامعة الأسطرلاب الدولية  |  كلية العلوم الطبية الشاملة"; font: 11pt "YKAmiri", serif; color: #45596b; }
      @bottom-center { content: "د. ياسر سيد عبد السلام قطب  |  YK7"; font: 10pt "YKAmiri", serif; color:#64707c; }
      @bottom-left { content: counter(page); font: 10pt "YKAmiri", serif; color:#64707c; }
    }
    html { direction: rtl; }
    body { direction: rtl; color:#132232; background:white; font-family:"YKAmiri", "Amiri", serif; font-size:18pt; line-height:1.65; }
    .cover { page-break-after:always; text-align:center; min-height:240mm; padding-top:18mm; box-sizing:border-box; }
    .logos{display:flex;justify-content:center;gap:20mm;align-items:center;height:35mm;margin-bottom:20mm}
    .logos img{width:24mm;height:24mm;object-fit:contain}
    .topline{color:#2a5364;font-size:15pt;font-weight:bold}
    .cover h1{font-size:29pt;color:#123351;line-height:1.38;margin:18mm 0 7mm}
    .cover h2{font-size:21pt;color:#9a7231;margin:0 0 22mm}
    .author {font-size:19pt;font-weight:700}
    .site{margin-top:25mm;font-size:11pt;color:#607080}
    .divider{background:#b08a46;height:2.5mm;width:50mm;margin:16mm auto}
    .source-page {page-break-before:always;break-inside:auto; }
    .source-page h2 {font-size:22pt; line-height:1.32; color:#16415a; margin:0 0 7mm; border-bottom:2px solid #c2a46b; padding-bottom:3mm}
    .folio {color:#7b7b7b;font-size:9pt; margin-bottom:4mm; letter-spacing:.01em;}
    p { margin:0 0 4mm; text-align:right; white-space:normal; overflow-wrap:anywhere; }
    .shortline {font-weight:500; }
    """
    return f'''<!DOCTYPE html><html lang="ar" dir="rtl"><head><meta charset="utf-8"><style>{css}</style></head>
    <body><section class="cover"><div class="logos">{logos}</div>
    <div class="topline">جامعة الأسطرلاب الدولية — كلية العلوم الطبية الشاملة</div>
    <div class="divider"></div>
    <h1>البرنامج العلمي الشامل في الطب التكاملي والعلوم الطبيعية</h1>
    <h2>{html.escape(intro_title)}</h2>
    <div class="author">إعداد وتقديم: د. ياسر سيد عبد السلام قطب</div>
    <div class="site">منصة الرصد الاستراتيجي YK7 | dryasserkotb.com</div>
    </section>{"".join(lecture_body)}</body></html>''',total_text

results=[]
for num in NUMBERS:
    src=ROOT/f"integrative-medicine-lecture-{num}.pdf"
    dst=OUT/f"integrative-medicine-lecture-{num}-amiri-review.pdf"
    with fitz.open(src) as doc:
        source_pages=len(doc)
        h,total_chars=build_html(num,doc)
    HTML(string=h, base_url=Path.cwd().as_uri()+"/").write_pdf(dst)
    with fitz.open(dst) as generated:
        result_pages=len(generated)
        new_text="".join(p.get_text("text") for p in generated)
    if result_pages<source_pages: raise ValueError(f"Source pages lost: {num}: {source_pages}->{result_pages}")
    results.append({"number":num,"source":str(src),"output":str(dst),
                    "source_pages":source_pages,"reader_pages":result_pages,
                    "extracted_characters":total_chars,"output_bytes":dst.stat().st_size,
                    "new_pdf_text_characters":len(new_text)})
    print(f"Lecture {num}: {source_pages} source pages -> {result_pages} reader pages, {dst.stat().st_size/1024:.0f} KB")
(OUT/"quality-report.json").write_text(json.dumps(results,ensure_ascii=False,indent=2),encoding="utf-8")
print("Created all seven review editions; originals left unchanged.")
