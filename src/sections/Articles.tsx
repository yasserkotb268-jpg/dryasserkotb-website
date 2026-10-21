import { Download, Newspaper } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { useReveal } from '@/hooks/useReveal';
import { articles } from '@/data/content';
import { assetPath } from '@/lib/asset';

export default function Articles() {
  const ref = useReveal<HTMLElement>();
  return (
    <section id="articles" ref={ref} className="py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <SectionHeading
          kicker="المقالات"
          title="مقالات فكرية وتحليلات استراتيجية"
          icon={Newspaper}
          description="مقالات منشورة في المعهد العربي للاعتماد وصحيفة قضايا وشبكة الرواد ومنصة YK7 — النصوص متاحة PDF"
        />

        <div className="grid gap-5 md:grid-cols-2">
          {articles.map((a, i) => (
            <article
              key={a.title}
              dir="rtl"
              className="card-glow reveal flex min-w-0 flex-col gap-4 rounded-xl border border-border bg-card p-5 sm:p-6"
              style={{ transitionDelay: `${(i % 2) * 60}ms` }}
            >
              <div className="w-full min-w-0 text-right">
                <h3 className="mb-2 break-words font-display text-xl font-bold leading-relaxed text-foreground">
                  {a.title}
                </h3>
                <p className="break-words text-sm leading-7 text-muted-foreground">
                  {a.field}
                </p>
              </div>

              {(a.url || ('file' in a && a.file)) && (
                <div className="mt-auto flex w-full flex-wrap items-center gap-2 border-t border-border/60 pt-4">
                  {a.url && (
                    <a
                      href={a.url}
                      className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-lg border border-primary/40 bg-primary/10 px-3.5 py-2.5 text-sm font-bold text-primary transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:flex-none"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`قراءة مقال ${a.title}`}
                    >
                      قراءة المقال
                      <Newspaper className="h-4 w-4" aria-hidden="true" />
                    </a>
                  )}
                  {'file' in a && a.file && (
                    <a
                      href={assetPath('articles', a.file)}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`فتح ملف PDF لمقال ${a.title}`}
                      className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-lg border border-primary/40 bg-primary/10 px-3.5 py-2.5 text-sm font-bold text-primary transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:flex-none"
                    >
                      PDF
                      <Download className="h-4 w-4" aria-hidden="true" />
                    </a>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
