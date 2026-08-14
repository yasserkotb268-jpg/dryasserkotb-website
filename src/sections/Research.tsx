import { Download, FileText, FlaskConical } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { useReveal } from '@/hooks/useReveal';
import { research } from '@/data/content';
import { assetPath } from '@/lib/asset';

export default function Research() {
  const ref = useReveal<HTMLElement>();
  return (
    <section id="research" ref={ref} className="relative bg-card/40 py-24">
      <div className="pattern-star pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-5xl px-4 md:px-8">
        <SectionHeading
          kicker="الأبحاث العلمية"
          title="أبحاث منشورة وأوراق مؤتمرات وأطروحات"
          icon={FlaskConical}
          description="نصوص كاملة قابلة للتحميل بصيغة PDF — مهيأة للفهرسة الأكاديمية العالمية"
        />

        <div className="flex flex-col gap-5">
          {research.map((r, i) => (
            <div
              key={r.file}
              className="reveal card-glow flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 sm:flex-row sm:items-start sm:gap-5 md:p-7"
              style={{ transitionDelay: `${(i % 4) * 70}ms` }}
            >
              <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-primary/35 bg-primary/10 text-primary sm:flex">
                <FileText className="h-5 w-5" />
              </span>
              <div className="flex-1">
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-primary/35 bg-primary/10 px-3 py-0.5 text-xs font-bold text-primary">
                    {r.type}
                  </span>
                  {r.year && (
                    <span className="rounded-full border border-border bg-background/60 px-3 py-0.5 text-xs font-semibold text-muted-foreground">
                      {r.year}
                    </span>
                  )}
                </div>
                <h3 className="mb-2 font-bold leading-relaxed text-foreground md:text-lg">{r.title}</h3>
                {r.venue && <p className="text-sm leading-relaxed text-muted-foreground">{r.venue}</p>}
              </div>
              <a
                href={assetPath('research', r.file)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-2 self-start rounded-lg border border-primary/45 bg-primary/10 px-4 py-2.5 text-sm font-bold text-primary transition-all hover:bg-primary hover:text-primary-foreground sm:self-center"
              >
                <Download className="h-4 w-4" />
                PDF
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
