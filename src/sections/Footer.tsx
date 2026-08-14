import { navLinks, profile } from '@/data/content';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-8">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between">
          <div className="text-center md:text-right">
            <div className="mb-3 flex items-center justify-center gap-3 md:justify-start">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-primary/50 bg-primary/10 font-display text-lg font-bold text-primary">
                YK
              </div>
              <div className="leading-tight">
                <p className="font-display text-lg font-bold text-foreground">{profile.name}</p>
                <p className="text-xs text-muted-foreground" dir="ltr">{profile.nameEn}</p>
              </div>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              مفكر ومحلل استراتيجي، وكاتب ومؤلف في قضايا الوعي وجودة القرار والتطوير المؤسسي —
              مؤسس منصة الرصد الإستراتيجي YK7.
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-x-10 gap-y-3 text-center md:text-right">
            {navLinks.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="gold-line mx-auto mt-10 h-px w-full max-w-3xl opacity-60" />
        <p className="mt-6 text-center text-xs text-muted-foreground">
          جميع الحقوق محفوظة © {new Date().getFullYear()} — د. ياسر سيد عبد السلام قطب
        </p>
      </div>
    </footer>
  );
}
