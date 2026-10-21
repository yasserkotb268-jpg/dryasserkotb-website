import { BookOpen, Download, Newspaper } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { useReveal } from '@/hooks/useReveal';
import { yk7 } from '@/data/content';
import { assetPath } from '@/lib/asset';

export default function MagazineArchive() {
  const ref = useReveal<HTMLElement>();
  const magazine = (yk7.magazine ?? []).filter((m) => !m.issue?.startsWith('كتاب العدد'));
  const issueBooks = (yk7.magazine ?? []).filter((m) => m.issue?.startsWith('كتاب العدد'));

  return (
    <section id="yk7-magazines" ref={ref} className="relative bg-card/40 py-24" dir="rtl">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <SectionHeading
          kicker="أرشيف الإصدارات"
          title="مجلات منصة الرصد الاستراتيجي | YK7"
          icon={Newspaper}
          description="الأعداد الكاملة المتاحة من المجلة، مع الفصل بين الأعداد الدورية وإصدارات «كتاب العدد»."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {magazine.map((m) => (
            <article key={m.title} className="reveal card-glow flex min-w-0 flex-col gap-4 rounded-2xl border border-border bg-card p-5 sm:p-7">
              {m.cover && (
                <img
                  src={assetPath('uploads', m.cover)}
                  alt={`غلاف ${m.issue || m.title}`}
                  loading="lazy"
                  decoding="async"
                  className="mx-auto max-h-[420px] w-full rounded-lg bg-background object-contain"
                />
              )}
              <div className="flex flex-wrap gap-2 text-xs font-bold text-primary">
                {m.issue && <span className="rounded-full border border-primary/35 px-3 py-1">{m.issue}</span>}
                {m.date && <span className="rounded-full border border-border px-3 py-1 text-muted-foreground">{m.date}</span>}
              </div>
              <h3 className="font-display text-xl font-bold leading-relaxed text-foreground">{m.title}</h3>
              {m.file && (
                <a href={assetPath('uploads', m.file)} target="_blank" rel="noopener noreferrer"
                   className="mt-auto inline-flex min-h-11 w-fit items-center gap-2 rounded-lg border border-primary/40 bg-primary/10 px-5 py-2 text-sm font-bold text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
                  فتح العدد كاملًا (PDF) <Download className="h-4 w-4" aria-hidden="true" />
                </a>
              )}
            </article>
          ))}
        </div>
        {issueBooks.length > 0 && (
          <div className="mt-12">
            <h3 className="mb-5 flex items-center gap-3 font-display text-xl font-bold text-foreground">
              <BookOpen className="h-5 w-5 text-primary" aria-hidden="true" />
              إصدارات «كتاب العدد» — أرشيف مستقل
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {issueBooks.map((m) => (
                <article key={m.title} className="card-glow flex flex-col gap-3 rounded-xl border border-border bg-card p-5">
                  <p className="text-xs font-semibold text-primary">{m.issue}</p>
                  <h4 className="flex-1 font-bold leading-relaxed text-foreground">{m.title}</h4>
                  {m.file && (
                    <a href={assetPath('uploads', m.file)} target="_blank" rel="noopener noreferrer"
                       className="inline-flex min-h-11 w-fit items-center gap-2 rounded-lg border border-primary/35 px-4 py-2 text-sm font-bold text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
                      قراءة الكتاب PDF <Download className="h-4 w-4" aria-hidden="true" />
                    </a>
                  )}
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
