import { useState } from 'react';
import { ChevronLeft, ChevronRight, Images, Quote, Film, ExternalLink } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { useReveal } from '@/hooks/useReveal';
import { photos, visualGallery } from '@/data/content';
import { assetPath } from '@/lib/asset';
import './VisualGallery.css';

type View = 'photos' | 'posters' | 'quotes';

const tabs: { id: View; label: string; icon: typeof Images }[] = [
  { id: 'photos', label: 'صور من مكتبة المؤلف', icon: Images },
  { id: 'posters', label: 'بوسترات معرفية', icon: Film },
  { id: 'quotes', label: 'اقتباسات مختارة', icon: Quote },
];

export default function VisualGallery() {
  const ref = useReveal<HTMLElement>();
  const [view, setView] = useState<View>('photos');
  const [quoteIndex, setQuoteIndex] = useState(0);
  const quotes = visualGallery.quotes;
  const selectedQuote = quotes.length > 0 ? quotes[quoteIndex % quotes.length] : undefined;

  const changeQuote = (delta: number) => {
    setQuoteIndex((i) => (i + delta + quotes.length) % quotes.length);
  };

  return (
    <section id="visual-gallery" ref={ref} dir="rtl" aria-label="المعرض المرئي والاقتباسات" className="relative overflow-hidden py-24">
      <div className="yk7-visual-ambient pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-4 md:px-8">
        <SectionHeading kicker="المعرض المرئي | YK7" title="معرض الصور والاقتباسات" icon={Images} description={visualGallery.intro} />
        <div className="reveal mb-9 flex flex-wrap justify-center gap-2" role="group" aria-label="تصنيف المعرض">
          {tabs.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                type="button"
                aria-pressed={view === item.id}
                onClick={() => setView(item.id)}
                className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-bold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-500 ${view === item.id ? 'border-rose-500 bg-rose-700 text-white' : 'border-border bg-card text-foreground hover:border-rose-600/60'}`}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </button>
            );
          })}
        </div>

        {view === 'photos' && (
          <div key="photos" className="yk7-visual-entrance grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {photos.map((p) => (
              <figure key={p.src} className="yk7-visual-tile overflow-hidden rounded-2xl border border-border bg-card">
                <a href={assetPath('photos', p.src)} target="_blank" rel="noopener noreferrer" aria-label={`عرض الصورة: ${p.alt}`}>
                  <img src={assetPath('photos', p.src)} alt={p.alt} loading="lazy" decoding="async" className="aspect-[4/5] w-full object-cover" />
                  <figcaption className="flex min-h-16 items-center justify-between gap-3 px-4 py-3 text-sm leading-relaxed text-foreground/85">
                    <span>{p.alt}</span><ExternalLink className="h-4 w-4 shrink-0 text-rose-400" aria-hidden="true" />
                  </figcaption>
                </a>
              </figure>
            ))}
          </div>
        )}

        {view === 'posters' && (
          <div key="posters" className="yk7-visual-entrance grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {visualGallery.posters.map((p) => (
              <figure key={p.file} className="yk7-visual-tile overflow-hidden rounded-2xl border border-border bg-card">
                <a href={assetPath('posters', p.file)} target="_blank" rel="noopener noreferrer" aria-label={`فتح البوستر: ${p.title}`}>
                  <img src={assetPath('posters', p.file)} alt={p.title} loading="lazy" decoding="async" className="aspect-[4/5] w-full object-contain" />
                  <figcaption className="p-4">
                    <div className="text-sm font-bold leading-relaxed text-foreground">{p.title}</div>
                    {p.desc && <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{p.desc}</p>}
                  </figcaption>
                </a>
              </figure>
            ))}
          </div>
        )}

        {view === 'quotes' && (
          <div key="quotes" className="yk7-visual-entrance mx-auto max-w-4xl">
            {selectedQuote ? (
              <div className="relative overflow-hidden rounded-3xl border border-rose-600/30 bg-card px-6 py-12 text-center shadow-2xl shadow-black/20 sm:px-12 sm:py-16">
                <div className="pointer-events-none absolute -left-24 -top-24 h-56 w-56 rounded-full bg-rose-700/10 blur-3xl" />
                <Quote className="mx-auto mb-8 h-9 w-9 text-rose-500" aria-hidden="true" />
                <blockquote key={quoteIndex} className="yk7-quote-entrance font-display text-2xl font-bold leading-[2] text-foreground sm:text-4xl">
                  «{selectedQuote.text}»
                </blockquote>
                {selectedQuote.context && <p className="mt-7 text-sm text-muted-foreground">{selectedQuote.context}</p>}
                <p className="mt-3 text-sm font-semibold text-rose-400">د. ياسر قطب — YK7</p>
                <div className="mt-10 flex items-center justify-center gap-5">
                  <button type="button" onClick={() => changeQuote(-1)} aria-label="الاقتباس السابق" disabled={quotes.length <= 1} className="rounded-full border border-border p-3 text-foreground transition-colors hover:border-rose-500 disabled:opacity-40">
                    <ChevronRight className="h-5 w-5" />
                  </button>
                  <span className="text-sm tabular-nums text-muted-foreground" aria-live="polite">{quoteIndex + 1} / {quotes.length}</span>
                  <button type="button" onClick={() => changeQuote(1)} aria-label="الاقتباس التالي" disabled={quotes.length <= 1} className="rounded-full border border-border p-3 text-foreground transition-colors hover:border-rose-500 disabled:opacity-40">
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ) : <p className="text-center text-muted-foreground">لا توجد اقتباسات متاحة للعرض حاليًا.</p>}
          </div>
        )}
      </div>
    </section>
  );
}
