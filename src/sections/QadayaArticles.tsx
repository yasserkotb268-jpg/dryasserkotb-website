import { Download, Newspaper } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { useReveal } from '@/hooks/useReveal';
import { articles } from '@/data/content';
import { assetPath } from '@/lib/asset';

export default function QadayaArticles() {
  const ref = useReveal<HTMLElement>();
  const items = articles.filter((a) => a.field.includes('قضايا') && (a.file || a.url));

  return (
    <section id="qadaya-articles" ref={ref} className="py-24" dir="rtl">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <SectionHeading
          kicker="الصحافة والتحليل"
          title="مقالات د. ياسر قطب في صحيفة قضايا"
          icon={Newspaper}
          description="أرشيف العناوين والمقالات، وتُتاح القراءة فقط للنسخ التي اكتملت مراجعتها وتنسيقها."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {items.map((a) => {
            const isPublished = a.publicationStatus === 'published';
            const pdf = isPublished && a.file ? assetPath('articles', a.file) : undefined;
            const reading = isPublished ? (a.url || pdf) : undefined;
            return (
              <article key={a.title} className="reveal card-glow flex min-w-0 flex-col gap-4 rounded-2xl border border-border bg-card p-6">
                {isPublished && <p className="text-xs font-semibold text-primary">صحيفة قضايا</p>}
                <h3 className="font-display text-xl font-bold leading-relaxed text-foreground">{a.title}</h3>
                {isPublished && <p className="text-sm leading-relaxed text-muted-foreground">{a.field}</p>}
                {reading && (
                  <a href={reading} target="_blank" rel="noopener noreferrer"
                     className="mt-auto inline-flex min-h-11 w-fit items-center gap-2 rounded-lg border border-primary/40 bg-primary/10 px-5 py-2 text-sm font-bold text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
                    قراءة المقال {pdf && <Download className="h-4 w-4" aria-hidden="true" />}
                  </a>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
