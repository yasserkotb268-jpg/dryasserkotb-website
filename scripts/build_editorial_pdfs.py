#!/usr/bin/env python3
"""Render the two previously authored YK7 article HTML sources as searchable RTL PDFs.

Both articles keep the text from their corresponding live HTML source; a print-only
Amiri style corrects page size and font for the downloadable YK7 edition.
"""
from __future__ import annotations
from pathlib import Path
from weasyprint import HTML, CSS

ROOT = Path(__file__).resolve().parent.parent
JOBS = [
    ("public/articles/correct-words-without-stigma/index.html",
     "public/articles/correct-words-without-stigma-yk7-amiri19.pdf"),
    ("public/articles/when-correction-becomes-stigma.html",
     "public/articles/when-correction-becomes-stigma-yk7-amiri19.pdf"),
]

PRINT_CSS = r"""
@page {
    size: A4 portrait;
    margin: 19mm 18mm 21mm 18mm;
    @bottom-left {content: "dryasserkotb.com"; font: 11pt "Amiri"; color: #555}
    @bottom-right {content: "YK7 • " counter(page); font: 11pt "Amiri"; color: #555}
}
html {direction: rtl !important;}
body {
    direction: rtl !important; text-align: right !important;
    font-family: "Amiri", serif !important;
    font-size: 19pt !important; line-height: 1.45 !important;
    color: #111 !important; background: #fff !important;
}
main {
    width: auto !important; max-width: none !important;
    margin: 0 !important; padding: 0 !important;
    box-shadow: none !important; color: #111 !important;
    background: white !important; font-family: "Amiri", serif !important;
}
header {
    background: white !important; color: #111 !important;
    padding: 0 0 5mm 0 !important;
    margin: 0 0 7mm 0 !important;
    border-bottom: 1pt solid #981b28 !important;
}
header *, header .meta, header .byline, header .dek, header .subtitle, header .eyebrow {
    color: #111 !important; font-family: "Amiri", serif !important;
}
header .eyebrow {color: #981b28 !important;}
h1 {
    font: 700 26pt/1.35 "Amiri", serif !important;
    color: #111 !important;
    margin: 3mm 0 5mm 0 !important; text-align: center !important;
}
h2, h3 {
    font: 700 22pt/1.4 "Amiri", serif !important;
    color: #111 !important; border-right: 2pt solid #981b28 !important;
    padding-right: 3mm !important; margin: 6mm 0 2.5mm 0 !important;
    break-after: avoid;
}
p, main p, main .lead, main .key, main .note {
    font: 19pt/1.45 "Amiri", serif !important;
    text-align: right !important; color: #111 !important;
    margin: 0 0 3.8mm !important; orphans: 3; widows: 3;
}
main strong {color: #111 !important;}
main .refs, main .refs *, main ol, main ol li, main ol li * {
    font-family: "Amiri", serif !important; font-size: 15pt !important;
    line-height: 1.4 !important; color: #111 !important;
}
.note {break-inside: avoid;}
footer, .tags, .links, .home, nav, button, .print-actions, .site-nav {
    display: none !important;
}
a {color: inherit !important; text-decoration: none !important;}
a[href]::after {content: none !important;}
"""

def main() -> None:
    css = CSS(string=PRINT_CSS)
    for source, output in JOBS:
        in_path = ROOT / source
        out_path = ROOT / output
        assert in_path.exists(), f"Missing original HTML: {source}"
        print(f"YK7 PDF: {source} -> {output}")
        HTML(filename=str(in_path), base_url=in_path.parent.as_uri() + "/").write_pdf(
            str(out_path), stylesheets=[css],
            presentational_hints=True, optimize_images=True,
        )
        size = out_path.stat().st_size
        assert size > 10_000, f"Suspiciously small PDF: {size}"
        try:
            from pypdf import PdfReader
            pdf = PdfReader(str(out_path))
            assert len(pdf.pages) >= 2, "Unusually short export"
            texts = "".join(p.extract_text() or "" for p in pdf.pages)
            for word in ("ياسر", "تصحيح", "وصمة"):
                assert word in texts, f"Missing expected text: {word}"
            print(f"Verified {len(pdf.pages)} pages, {len(texts)} extracted characters, {size} bytes")
        except ImportError:
            print(f"Created PDF, {size} bytes")
if __name__ == "__main__":
    main()
