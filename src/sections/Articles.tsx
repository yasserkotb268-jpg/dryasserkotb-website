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
          description="عناوين من الأعمال الفكرية والتحليلية؛ تُتاح القراءة والتحميل للأعمال التي استوفت المراجعة والإخراج المعتمد."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {articles.map((a, i) => {
            const isPublished = a.publicationStatus === 'published';
            const pdfUrl = isPublished && a.file ? assetPath('articles', a.file) : undefined;
            const readingUrl = isPublished ? (a.url || pdfUrl) : undefined;

            return (
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
                  {isPublished && (
                    <p className="break-words text-sm leading-7 text-muted-foreground">
                      {a.field}
                    </p>
                  )}
                </div>

                {readingUrl && (
                  <div className="mt-auto flex w-full flex-wrap items-center gap-2 border-t border-border/60 pt-4">
                    <a
                      href={readingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`قراءة مقال ${a.title}`}
                      className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-lg border border-primary/40 bg-primary/10 px-3.5 py-2.5 text-sm font-bold text-primary transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:flex-none"
                    >
                      قراءة المقال
                      <Newspaper className="h-4 w-4" aria-hidden="true" />
                    </a>
                    {pdfUrl && (
                      <a
                        href={pdfUrl}
                        download
                        aria-label={`تحميل نسخة PDF من مقال ${a.title}`}
                        className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-lg border border-primary/40 px-3.5 py-2.5 text-sm font-bold text-primary transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:flex-none"
                      >
                        تحميل PDF
                        <Download className="h-4 w-4" aria-hidden="true" />
                      </a>
                    )}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
