// Protect paid cybersecurity ebooks against accidental publication as static files.
// Only four-page previews may be served from the site's public asset tree.
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join, relative, resolve, sep } from 'node:path';

const root = process.cwd();
const publicDir = resolve(root, 'public');
const previews = new Map([
  ['ar', 'yk7-cybersecurity-ar-preview-2026.pdf'],
  ['en', 'yk7-cybersecurity-en-preview-2026.pdf'],
]);
const allowedPdfPaths = new Set(
  [...previews.values()].map(name => `uploads/${name}`)
);
const manifest = JSON.parse(readFileSync(resolve(root, 'src/data/content.json'), 'utf8'));
const book = manifest.yk7?.publications?.find(item => item.slug === 'cybersecurity-book');

if (!book || book.ebookPriceUSD !== 14.99 || book.orderEmail !== 'office@dryasserkotb.com') {
  throw new Error('Cybersecurity book: paid-order configuration is missing or inconsistent.');
}
if (!Array.isArray(book.editions) || book.editions.length !== previews.size) {
  throw new Error('Cybersecurity book: both language editions must be configured.');
}
for (const [language, file] of previews) {
  const edition = book.editions.find(item => item.language === language);
  if (!edition || edition.file !== file || edition.previewPages !== 4) {
    throw new Error(`Cybersecurity book: ${language} must link only to its four-page preview.`);
  }
  if (!existsSync(join(publicDir, 'uploads', file))) {
    throw new Error(`Cybersecurity book: missing approved preview ${file}.`);
  }
}

const unexpected = [];
function audit(directory) {
  for (const item of readdirSync(directory, { withFileTypes: true })) {
    const absolute = join(directory, item.name);
    if (item.isDirectory()) {
      audit(absolute);
    } else if (item.isFile()) {
      const filename = relative(publicDir, absolute).split(sep).join('/');
      if (/cybersecurity/i.test(filename) && /\.pdf$/i.test(filename) && !allowedPdfPaths.has(filename)) {
        unexpected.push(filename);
      }
    }
  }
}
audit(publicDir);
if (unexpected.length) {
  throw new Error(`Refusing public deployment of paid cybersecurity PDF(s): ${unexpected.join(', ')}`);
}
console.log('Paid cybersecurity ebook guard passed: only approved previews are public.');
