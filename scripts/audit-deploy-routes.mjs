/**
 * Read-only check: node scripts/audit-deploy-routes.mjs
 * Verifies published sitemap targets, withheld PDFs, and SPA rewrite boundaries.
 */
import fs from 'node:fs';
import path from 'node:path';

const publicDir = path.resolve('public');
const redirects = fs.readFileSync(path.join(publicDir, '_redirects'), 'utf8');
const sitemap = fs.readFileSync(path.join(publicDir, 'sitemap.xml'), 'utf8');
const rules = redirects.split(/\r?\n/).map((line) => line.trim()).filter((line) => line && !line.startsWith('#'));
const withheld = new Set(rules.filter((line) => /\s404!$/.test(line)).map((line) => line.split(/\s+/)[0]));
const failures = [];

if (rules.some((line) => /^\/\*\s+\/index\.html\s+200!?$/.test(line))) {
  failures.push('Catch-all 200 rewrite masks missing files.');
}
const urls = [...sitemap.matchAll(/<loc>\s*([^<]+)\s*<\/loc>/g)].map((m) => m[1].trim());
for (const url of urls) {
  let pathname;
  try {
    const parsed = new URL(url);
    if (parsed.hostname !== 'dryasserkotb.com') {
      failures.push('External sitemap URL: ' + url);
      continue;
    }
    pathname = decodeURIComponent(parsed.pathname);
  } catch {
    failures.push('Malformed URL: ' + url);
    continue;
  }
  if (withheld.has(pathname) || withheld.has(encodeURI(pathname))) failures.push('Withheld URL in sitemap: ' + pathname);
  if (pathname === '/' || pathname === '/leadership-merit' || pathname === '/leadership-merit/') continue;
  const relative = pathname.replace(/^\/+/, '');
  const target = path.resolve(publicDir, relative);
  if (!target.startsWith(publicDir + path.sep)) {
    failures.push('Outside public directory: ' + pathname);
    continue;
  }
  if (!fs.existsSync(target) && !fs.existsSync(path.join(target, 'index.html'))) failures.push('Missing sitemap target: ' + pathname);
}
for (const secret of ['.env', '.env.local', '.env.production']) {
  if (fs.existsSync(path.join(publicDir, secret))) failures.push('Secret-like file under public/: ' + secret);
}
if (failures.length) {
  for (const error of failures) console.error('ERROR: ' + error);
  process.exitCode = 1;
} else {
  console.log('PASS: ' + urls.length + ' sitemap targets; ' + withheld.size + ' withheld paths; no unsafe catch-all.');
}
