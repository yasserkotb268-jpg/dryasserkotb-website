/**
 * YK7 Article publication/button audit.
 * Read-only. Run: node scripts/audit-articles.mjs
 * Reports whether an article actually receives a Read/PDF button, and whether PDF files exist.
 */
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const dataPath = path.join(root, 'src/data/content.json');
const { articles = [] } = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
const totals = { entries: articles.length, both: 0, readOnly: 0, none: 0, pdfMissing: 0, originalPdf: 0, originalPdfMissing: 0, hiddenPdfExists: 0, noSource: 0 };
const details = [];

for (const [index, article] of articles.entries()) {
  const published = article.publicationStatus === 'published';
  const hasPdf = published && Boolean(article.file);
  const hasRead = published && Boolean(article.url || article.file);
  const action = hasRead && hasPdf ? 'both' : hasRead ? 'readOnly' : 'none';
  totals[action] += 1;
  const urlPath = article.file
    ? article.file.startsWith('/') ? article.file : `/articles/${article.file}`
    : null;
  const diskPath = urlPath
    ? path.join(root, 'public', urlPath.replace(/^\//, ''))
    : null;
  const exists = diskPath ? fs.existsSync(diskPath) : null;
  const originalUrlPath = article.originalFile
    ? article.originalFile.startsWith('/') ? article.originalFile : `/articles/${article.originalFile}`
    : null;
  const originalExists = originalUrlPath
    ? fs.existsSync(path.join(root, 'public', originalUrlPath.replace(/^\//, '')))
    : null;
  const hasOriginalPdf = published && Boolean(article.originalFile);
  if (hasOriginalPdf) totals.originalPdf += 1;
  if (hasOriginalPdf && !originalExists) totals.originalPdfMissing += 1;
  if (hasPdf && !exists) totals.pdfMissing += 1;
  if (!published && exists) totals.hiddenPdfExists += 1;
  if (!article.file && !article.url) totals.noSource += 1;

  details.push({ index: index + 1, title: article.title, publicationStatus: article.publicationStatus ?? null, readButton: hasRead, pdfButton: hasPdf, file: urlPath, pdfFileExists: exists, originalPdfButton: hasOriginalPdf, originalPdfFileExists: originalExists });
}

console.log('YK7 publication/button audit');
console.log(totals);
for (const row of details) {
  const note = row.readButton
    ? row.pdfButton ? 'قراءة + تحميل PDF' : 'قراءة فقط'
    : 'العنوان فقط — دون زر';
  const presence = row.file ? (row.pdfFileExists ? '[PDF موجود]' : '[ملف غير موجود]') : '[بدون ملف]';
  const originalPresence = row.originalPdfButton ? (row.originalPdfFileExists ? ' | [PDF أصلي موجود]' : ' | [PDF أصلي مفقود]') : '';
  console.log(`${String(row.index).padStart(2, '0')} | ${note} | ${presence}${originalPresence} | ${row.title}`);
}
if (totals.pdfMissing > 0 || totals.originalPdfMissing > 0) {
  console.error('خطأ: إحدى المواد المنشورة تشير إلى ملف PDF غير موجود.');
  process.exitCode = 1;
}
