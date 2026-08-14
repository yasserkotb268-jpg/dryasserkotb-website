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
            <div
              key={a.title}
              className="card-glow reveal flex items-center justify-between gap-4 rounded-xl border border-border bg-card p-5"
              style={{ transitionDelay: `${(i % 2) * 60}ms` }}
            >
              <div className="min-w-0">
                <h3 className="mb-1.5 font-bold leading-snug text-foreground">{a.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{a.field}</p>
              </div>
              {'file' in a && a.file && (
                <a
                  href={assetPath('articles', a.file)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex shrink-0 items-center gap-1.5 rounded-lg border border-primary/40 bg-primary/10 px-3.5 py-2 text-xs font-bold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  PDF
                  <Download className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
