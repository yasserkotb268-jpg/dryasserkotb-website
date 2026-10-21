import { Image as ImageIcon, Quote } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { useReveal } from '@/hooks/useReveal';
import { creativeQuotes, yk7 } from '@/data/content';
import { assetPath } from '@/lib/asset';

export default function CreativeGallery() {
  const ref = useReveal<HTMLElement>();
  return (
    <section id="posters-quotes" ref={ref} className="relative bg-card/40 py-24" dir="rtl">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <SectionHeading
          kicker="من أعمال المؤلف"
          title="بوسترات وكلمات وأقوال"
          icon={Quote}
          description="مختارات من العبارات الفكرية والمواد البصرية المرتبطة بأعمال د. ياسر قطب ومنصة الرصد الاستراتيجي | YK7."
        />

        {creativeQuotes.length > 0 && (
          <div className="mb-12 grid gap-5 md:grid-cols-3">
            {creativeQuotes.map((item) => (
              <blockquote key={item.text} className="reveal card-glow flex min-w-0 flex-col gap-4 rounded-2xl border border-primary/20 bg-card p-6">
                <Quote className="h-7 w-7 text-primary" aria-hidden="true" />
                <p className="font-display text-xl font-bold leading-[1.9] text-foreground">{item.text}</p>
                {item.context && <p className="mt-auto text-sm leading-relaxed text-muted-foreground">{item.context}</p>}
                {item.image && <img src={assetPath('uploads', item.image)} alt={item.text} loading="lazy" className="mt-2 w-full rounded-lg object-contain" />}
              </blockquote>
            ))}
          </div>
        )}

        <h3 className="mb-5 flex items-center gap-2 font-display text-xl font-bold text-foreground">
          <ImageIcon className="h-5 w-5 text-primary" aria-hidden="true" />
          البوسترات المتاحة من منصة YK7
        </h3>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {(yk7.posters ?? []).map((poster) => (
            <a
              key={poster.file}
              href={assetPath('posters', poster.file)}
              target="_blank"
              rel="noopener noreferrer"
              className="card-glow overflow-hidden rounded-2xl border border-border bg-card"
              aria-label={`عرض ${poster.title}`}
            >
              <img src={assetPath('posters', poster.file)} alt={poster.title}
                   loading="lazy" decoding="async"
                   className="aspect-[4/5] w-full bg-background object-contain" />
              <div className="p-5">
                <h4 className="font-bold leading-relaxed text-foreground">{poster.title}</h4>
                {poster.desc && <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{poster.desc}</p>}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
