import { useState } from 'react';
import { ArrowUpLeft, Images, BookOpen, Compass, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { visualGallery } from '@/data/content';
import { useAvailablePosters } from '@/hooks/useAvailablePosters';
import { assetPath } from '@/lib/asset';
import './HomepageSpotlight.css';

const priority = ['narcissistic-personality-book.webp', 'editorial-word-responsibility.webp', 'ai-governance.webp', 'human-behind-decision.webp'];
const candidates = (visualGallery.curatedPosters ?? [])
  .filter((p) => priority.some((name) => p.file.endsWith(name)))
  .sort((a, b) => priority.findIndex((name) => a.file.endsWith(name)) - priority.findIndex((name) => b.file.endsWith(name)));
export default function HomepageSpotlight() {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const uploaded = useAvailablePosters(candidates);
  const shown = [...uploaded, ...visualGallery.posters].slice(0, 4);
  const quotes = visualGallery.quotes;
  const quote = quotes[quoteIndex % Math.max(quotes.length, 1)];
  const moveQuote = (dir: number) => setQuoteIndex((i) => (i + dir + quotes.length) % Math.max(quotes.length, 1));
  return (
    <section id="selected-works" dir="rtl" className="yk7-spotlight relative overflow-hidden border-y border-neutral-800 bg-[#0b0c0f] py-16 sm:py-20" aria-label="مختارات من الأعمال والمنشورات">
      <div className="relative mx-auto max-w-6xl px-4 md:px-8">
        <div className="mb-9 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-3 text-sm font-bold tracking-wide text-rose-400">منصة الرصد الاستراتيجي <b dir="ltr" className="inline-block font-sans tracking-widest">| YK7</b></p>
            <h2 className="font-display text-3xl font-bold leading-relaxed text-white sm:text-4xl">مختارات من أعمالي</h2>
            <p className="mt-2 max-w-2xl text-sm leading-8 text-neutral-300">كتب ومقالات وبوسترات معرفية تتناول جودة القرار والسلوك الإنساني والقيادة والقضايا الاستراتيجية.</p>
          </div>
          <a href="#visual-gallery" className="inline-flex items-center gap-2 rounded-full border border-rose-600/45 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-rose-900/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-400">
            <Images className="h-4 w-4"/> المعرض الكامل <ArrowUpLeft className="h-4 w-4"/>
          </a>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {shown.map((item, index) => (
            <a href={assetPath('posters', item.file)} target="_blank" rel="noopener noreferrer"
              key={item.file} className="yk7-spotlight-art group relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-400">
              <img src={assetPath('posters', item.file)} alt={item.title} loading={index < 2 ? 'eager' : 'lazy'} decoding="async" className="aspect-[4/5] w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.045]"/>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/80 to-transparent px-3 pb-4 pt-16 sm:px-5">
                <p className="mb-1 text-[11px] font-semibold text-rose-300">{item.category || 'مختارات معرفية'}</p>
                <h3 className="line-clamp-2 text-xs font-bold leading-6 text-white sm:text-sm">{item.title}</h3>
              </div>
            </a>
          ))}
        </div>
        {quote && <div className="mt-7 flex flex-col items-center justify-between gap-5 rounded-2xl border border-neutral-800 bg-neutral-900/75 p-5 sm:flex-row sm:p-7">
          <div className="flex min-w-0 items-start gap-3">
            <Quote className="mt-1 h-7 w-7 shrink-0 text-rose-500"/>
            <div>
              <blockquote className="font-display text-lg font-bold leading-[1.9] text-neutral-100 sm:text-xl">«{quote.text}»</blockquote>
              <p className="mt-2 text-sm text-neutral-400">{quote.context || 'من أعمال د. ياسر قطب'}</p>
            </div>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <button type="button" aria-label="الاقتباس السابق" onClick={() => moveQuote(-1)} className="rounded-full border border-neutral-600 p-2 text-white hover:bg-neutral-700"><ChevronRight className="h-4 w-4"/></button>
            <span className="w-12 text-center text-xs tabular-nums text-neutral-300" aria-live="polite">{quoteIndex+1} / {quotes.length}</span>
            <button type="button" aria-label="الاقتباس التالي" onClick={() => moveQuote(1)} className="rounded-full border border-neutral-600 p-2 text-white hover:bg-neutral-700"><ChevronLeft className="h-4 w-4"/></button>
          </div>
        </div>}
        <div className="mt-7 flex flex-wrap items-center gap-3 text-sm text-neutral-300">
          <BookOpen className="h-5 w-5 text-rose-400"/>
          <span>المعرفة في خدمة الإنسان وجودة الاختيار</span>
          <Compass className="mr-2 h-5 w-5 text-rose-400"/>
          <span>رصد • تحليل • استشراف • دعم القرار</span>
        </div>
      </div>
    </section>
  );
}
