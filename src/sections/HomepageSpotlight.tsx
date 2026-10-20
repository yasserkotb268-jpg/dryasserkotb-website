import { useState } from 'react';
import { ArrowUpLeft, Images, BookOpen, Compass, Quote, ChevronLeft, ChevronRight, FileText, Radar } from 'lucide-react';
import { visualGallery } from '@/data/content';
import { useAvailablePosters } from '@/hooks/useAvailablePosters';
import { assetPath } from '@/lib/asset';
import './HomepageSpotlight.css';

const priority = ['narcissistic-personality-book.webp', 'editorial-word-responsibility.webp', 'ai-governance.webp'];
const candidates = (visualGallery.curatedPosters ?? [])
  .filter((poster) => priority.some((name) => poster.file.endsWith(name)))
  .sort((a, b) => priority.findIndex((name) => a.file.endsWith(name)) - priority.findIndex((name) => b.file.endsWith(name)));

export default function HomepageSpotlight() {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const uploaded = useAvailablePosters(candidates);
  const shown = [...uploaded, ...visualGallery.posters].slice(0, 3);
  const quotes = visualGallery.quotes;
  const quote = quotes.length ? quotes[quoteIndex % quotes.length] : undefined;
  const moveQuote = (direction: number) => setQuoteIndex((index) => (index + direction + quotes.length) % quotes.length);

  return (
    <section id="selected-works" dir="rtl" className="yk7-spotlight relative overflow-hidden border-y border-white/10 bg-[#101319] py-16 sm:py-20" aria-label="مختارات معرفية ومهنية">
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-9 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-3 text-sm font-bold text-rose-300">أعمال مختارة</p>
            <h2 className="font-display text-3xl font-bold leading-relaxed text-white sm:text-4xl">من المعرفة إلى الأثر</h2>
            <p className="mt-2 max-w-2xl text-sm leading-8 text-neutral-300">
              مختارات من المؤلفات والمقالات والمواد البصرية؛ لكل موضوع مساره المعرفي الكامل داخل الموقع.
            </p>
          </div>
          <a href="#visual-gallery" className="inline-flex min-h-11 items-center gap-2 rounded-full border border-rose-400/50 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-rose-900/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-300">
            <Images className="h-4 w-4" aria-hidden="true" /> استعرض المكتبة البصرية <ArrowUpLeft className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {shown.map((item, index) => (
            <a key={item.file} href={assetPath('posters', item.file)} target="_blank" rel="noopener noreferrer"
              aria-label={`فتح المادة البصرية: ${item.title}`}
              className="yk7-spotlight-art group overflow-hidden rounded-2xl border border-white/10 bg-[#1a1d24] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-300">
              <div className="flex aspect-[4/5] items-center justify-center overflow-hidden bg-[#12151b] p-2">
                <img src={assetPath('posters', item.file)} alt={item.title} loading={index === 0 ? 'eager' : 'lazy'} decoding="async"
                  className="h-full w-full rounded-lg object-contain transition-transform duration-500 group-hover:scale-[1.035]" />
              </div>
              <div className="border-t border-white/10 p-4">
                <p className="mb-2 text-xs font-semibold text-rose-300">{item.category || 'من أعمال المؤلف'}</p>
                <h3 className="text-sm font-bold leading-7 text-white">{item.title}</h3>
              </div>
            </a>
          ))}
          <div className="flex min-h-64 flex-col justify-between rounded-2xl border border-rose-500/25 bg-[linear-gradient(135deg,#25141c,#15191f)] p-6 text-white">
            <div>
              <Radar className="mb-5 h-8 w-8 text-rose-300" aria-hidden="true" />
              <p className="mb-3 text-xs font-bold text-rose-300">منصة الرصد الاستراتيجي | <span dir="ltr" className="inline-block font-sans">YK7</span></p>
              <h3 className="font-display text-2xl font-bold leading-relaxed">الرصد والتحليل والاستشراف</h3>
              <p className="mt-3 text-sm leading-7 text-neutral-300">قراءات وأوراق تحليلية ونماذج تسند فهم القضايا وجودة الاختيار.</p>
            </div>
            <a href="#yk7" className="mt-6 inline-flex items-center gap-2 self-start border-b border-rose-300 pb-1 text-sm font-bold text-white hover:text-rose-200">
              أعمال المنصة <ArrowUpLeft className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
        {quote && (
          <div className="mt-8 flex flex-col items-start justify-between gap-5 rounded-2xl border border-white/10 bg-white/[.03] p-5 sm:flex-row sm:items-center sm:p-7">
            <div className="flex min-w-0 items-start gap-3">
              <Quote className="mt-1 h-6 w-6 shrink-0 text-rose-300" aria-hidden="true" />
              <div>
                <blockquote className="font-display text-lg font-bold leading-[1.9] text-neutral-100 sm:text-xl">«{quote.text}»</blockquote>
                <p className="mt-2 text-xs text-neutral-400">{quote.context || 'من أعمال د. ياسر قطب'}</p>
              </div>
            </div>
            <div className="flex shrink-0 items-center gap-2">
              <button type="button" aria-label="الاقتباس السابق" disabled={quotes.length < 2} onClick={() => moveQuote(-1)} className="rounded-full border border-neutral-600 p-2 text-white hover:bg-neutral-700 disabled:opacity-40"><ChevronRight className="h-4 w-4" /></button>
              <span className="w-12 text-center text-xs tabular-nums text-neutral-300" aria-live="polite">{quoteIndex + 1} / {quotes.length}</span>
              <button type="button" aria-label="الاقتباس التالي" disabled={quotes.length < 2} onClick={() => moveQuote(1)} className="rounded-full border border-neutral-600 p-2 text-white hover:bg-neutral-700 disabled:opacity-40"><ChevronLeft className="h-4 w-4" /></button>
            </div>
          </div>
        )}
        <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-neutral-300">
          <BookOpen className="h-5 w-5 text-rose-300" aria-hidden="true" />
          <a className="hover:text-white hover:underline" href="#works">الكتب والمؤلفات</a>
          <FileText className="mr-3 h-5 w-5 text-rose-300" aria-hidden="true" />
          <a className="hover:text-white hover:underline" href="#research">الأبحاث</a>
          <Compass className="mr-3 h-5 w-5 text-rose-300" aria-hidden="true" />
          <a className="hover:text-white hover:underline" href="#articles">المقالات التحليلية</a>
        </div>
      </div>
    </section>
  );
}
