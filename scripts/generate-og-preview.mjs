import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import { join } from 'node:path';

// Static social-share cover generated during Netlify's existing build.
// Uses the site's original photo; no replacement face or external service.
const root = process.cwd();
const source = join(root, 'public', 'photos', 'yk7-official-portrait.jpg');
const destination = join(root, 'public', 'social', 'vision-mission-preview.jpg');
const scene = '<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">'
 + '<defs><linearGradient id="base" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#2c3137"/><stop offset=".42" stop-color="#12161b"/><stop offset="1" stop-color="#0a0b0e"/></linearGradient><linearGradient id="stripe" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#6f0c15"/><stop offset="1" stop-color="#f13743"/></linearGradient></defs>'
 + '<rect width="1200" height="630" fill="url(#base)"/>'
 + '<path d="M0 0 L560 0 L360 630 L0 630Z" fill="#101419"/><path d="M470 0L510 0L260 630L220 630Z" fill="url(#stripe)" opacity=".65"/>'
 + '<path d="M500 0L516 0L270 630L254 630Z" fill="#b52632"/>'
 + '<path d="M1150 0 L1200 0L1200 180Z" fill="#70131b" opacity=".48"/>'
 + '<path d="M495 574H1162" stroke="#7c2129" stroke-width="2"/><path d="M700 106H1140" stroke="#bc303c" stroke-width="2"/>'
 + '<text x="1142" y="83" direction="ltr" text-anchor="end" font-family="DejaVu Sans,sans-serif" font-size="36" fill="#e74a52" font-weight="bold">YK7</text>'
 + '<text x="1140" y="222" direction="rtl" text-anchor="start" font-family="DejaVu Sans,sans-serif" font-size="58" fill="#ffffff" font-weight="bold">رؤيتي ورسالتي</text>'
 + '<text x="1140" y="325" direction="rtl" text-anchor="start" font-family="DejaVu Sans,sans-serif" font-size="70" fill="#e7434d" font-weight="bold">وأهدافي</text>'
 + '<path d="M725 349H1142" stroke="#c12b36" stroke-width="3"/>'
 + '<text x="1140" y="398" direction="rtl" text-anchor="start" font-family="DejaVu Sans,sans-serif" font-size="27" fill="#eeeeef" font-weight="bold">من المعرفة إلى الفهم المنضبط</text>'
 + '<text x="1140" y="447" direction="rtl" text-anchor="start" font-family="DejaVu Sans,sans-serif" font-size="22" fill="#e2e2e4">ومن جودة القرار إلى أثر قابل للتحقق</text>'
 + '<text x="1140" y="521" direction="rtl" text-anchor="start" font-family="DejaVu Sans,sans-serif" font-size="32" fill="#ffffff" font-weight="bold">د. ياسر قطب</text>'
 + '<text x="1140" y="556" direction="rtl" text-anchor="start" font-family="DejaVu Sans,sans-serif" font-size="16" fill="#d8d9dd">مؤسس منصة الرصد الاستراتيجي</text>'
 + '<text x="1140" y="606" direction="ltr" text-anchor="end" font-family="DejaVu Sans,sans-serif" font-size="19" fill="#f05a63">dryasserkotb.com</text></svg>';

const photo = await sharp(source)
  .extract({left: 0, top: 65, width: 1064, height: 1425})
  .resize(414, 560, {fit: 'cover', position: 'attention'})
  .png()
  .toBuffer();
const mask = Buffer.from('<svg xmlns="http://www.w3.org/2000/svg" width="414" height="560"><rect width="414" height="560" fill="black"/><rect width="414" height="560" rx="15" fill="white"/></svg>');
const roundedPhoto = await sharp(photo).composite([{input:mask,blend:'dest-in'}]).png().toBuffer();
const border = Buffer.from('<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630"><rect x="42" y="33" width="418" height="564" rx="18" fill="none" stroke="#d03a48" stroke-width="3"/></svg>');
await mkdir(join(root,'public','social'),{recursive:true});
await sharp(Buffer.from(scene))
  .composite([{input:roundedPhoto,left:44,top:35},{input:border,left:0,top:0}])
  .flatten({background:'#151515'})
  .jpeg({quality:88,mozjpeg:true})
  .toFile(destination);
