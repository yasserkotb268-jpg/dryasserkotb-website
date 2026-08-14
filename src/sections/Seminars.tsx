import { Download, UsersRound } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { useReveal } from '@/hooks/useReveal';
import { seminars } from '@/data/content';
import { assetPath } from '@/lib/asset';

export default function Seminars() {
  const ref = useReveal<HTMLElement>();
  return (
    <section id="seminars" ref={ref} className="py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <SectionHeading
          kicker="الندوات وورش العمل"
          title="ندوات وملتقيات وورش عمل علمية"
          icon={UsersRound}
          description="مواد الندوات وورش العمل كاملة بصيغة PDF — قابلة للتحميل المباشر"
        />

        <div className="grid gap-5 md:grid-cols-2">
          {seminars.map((s, i) => (
            <div
              key={s.file}
              className="card-glow reveal flex items-center justify-between gap-4 rounded-xl border border-border bg-card p-5"
              style={{ transitionDelay: `${(i % 2) * 60}ms` }}
            >
              <div className="min-w-0">
                <span className="mb-2 inline-block rounded-full border border-primary/35 bg-primary/10 px-3 py-0.5 text-xs font-bold text-primary">
                  {s.kind}
                </span>
                <h3 className="mb-1.5 font-bold leading-snug text-foreground">{s.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{s.topic}</p>
              </div>
              <a
                href={assetPath('seminars', s.file)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex shrink-0 items-center gap-2 rounded-lg border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-bold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                PDF
                <Download className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
