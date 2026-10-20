import { ArrowLeft, BookOpen, FileText, Radar } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const focusAreas = ['جودة القرار', 'السلوك الإنساني', 'التطوير المؤسسي', 'الرصد والاستشراف'];

export default function Hero() {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="top" ref={ref} dir="rtl" className="relative isolate overflow-hidden bg-[#0d1016] pt-20 text-white scroll-mt-20">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_18%_25%,rgba(132,26,48,.22),transparent_52%),radial-gradient(ellipse_at_85%_80%,rgba(92,100,114,.10),transparent_50%)]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 pb-14 pt-9 md:px-8 md:pb-20 md:pt-16 lg:grid-cols-12 lg:gap-14 lg:py-24">
        <div className="order-2 text-right lg:order-1 lg:col-span-7">
          <p className="mb-6 flex flex-wrap items-center gap-2 text-sm font-semibold text-rose-200">
            <Radar className="h-5 w-5 shrink-0 text-rose-400" aria-hidden="true" />
            <span>منصة الرصد الاستراتيجي</span>
            <span dir="ltr" className="inline-block whitespace-nowrap font-sans text-base font-black tracking-wider text-white">| YK<span className="text-rose-400">7</span></span>
          </p>
          <p className="mb-4 text-sm font-bold tracking-wide text-neutral-300">الموقع الرسمي</p>
          <h1 className="font-display text-4xl font-bold leading-[1.6] text-white sm:text-5xl sm:leading-[1.4] xl:text-6xl">
            د. ياسر سيد عبد السلام <span className="text-rose-300">قطب</span>
          </h1>
          <p dir="ltr" className="mt-2 text-left font-sans text-sm tracking-wide text-neutral-400 sm:text-base lg:text-right">
            Dr. Yasser Sayed Abd El-Salam Kotb
          </p>
          <h2 className="mt-8 max-w-2xl font-display text-2xl font-bold leading-[1.8] text-white sm:text-3xl">
            معرفة تُنصف الإنسان، وتحسّن القرار
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-9 text-neutral-300 md:text-lg">
            خبير في الذكاء الاصطناعي التطبيقي وإدارة الجودة الشاملة والتطوير المؤسسي، ومؤلف وباحث في القيادة والسلوك الإنساني والقضايا الاستراتيجية. هنا تلتقي مؤلفاتي ودراساتي مع أعمال منصة الرصد الاستراتيجي | YK7.
          </p>
          <div className="mt-7 flex flex-wrap gap-2" aria-label="محاور الأعمال">
            {focusAreas.map((area) => <span key={area} className="rounded-full border border-white/15 bg-white/[.04] px-3 py-1.5 text-xs font-medium text-neutral-200">{area}</span>)}
          </div>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#works" className="inline-flex min-h-12 items-center gap-2 rounded-lg bg-rose-800 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-rose-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
              <BookOpen className="h-4 w-4" aria-hidden="true" /> استكشف الكتب والأعمال <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href="#research" className="inline-flex min-h-12 items-center gap-2 rounded-lg border border-white/25 bg-white/[.06] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
              <FileText className="h-4 w-4" aria-hidden="true" /> الأبحاث والدراسات
            </a>
            <a href="#yk7" className="inline-flex min-h-12 items-center gap-2 rounded-lg border border-rose-500/45 px-6 py-3 text-sm font-bold text-rose-200 transition-colors hover:bg-rose-900/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
              <Radar className="h-4 w-4" aria-hidden="true" /> تعرّف إلى YK7
            </a>
          </div>
        </div>
        <div className="order-1 mx-auto w-full max-w-[370px] lg:order-2 lg:col-span-5 lg:max-w-none">
          <div className="relative mx-auto max-w-[420px]">
            <div aria-hidden="true" className="absolute -inset-3 rounded-[2rem] border border-rose-500/20" />
            <div className="relative overflow-hidden rounded-[1.6rem] border border-white/15 bg-neutral-900 shadow-2xl shadow-black/55">
              <img
                src="/photos/library-portrait.png"
                alt="الصورة الرسمية للدكتور ياسر قطب"
                width="640"
                height="800"
                loading="eager"
                decoding="async"
                fetchPriority="high"
                className="aspect-[4/5] w-full object-cover object-top"
              />
              <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/45 to-transparent" />
            </div>
          </div>
          <p className="mt-5 text-center text-xs leading-6 text-neutral-400">مؤلف وباحث ومؤسس منصة الرصد الاستراتيجي | <span dir="ltr" className="inline-block font-sans font-extrabold">YK7</span></p>
        </div>
      </div>
      <div className="relative border-t border-white/10 bg-black/20">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-9 gap-y-3 px-5 py-5 text-sm text-neutral-300 md:justify-start md:px-8">
          <a href="#works" className="hover:text-white">كتب ومؤلفات</a>
          <a href="#research" className="hover:text-white">أبحاث ودراسات</a>
          <a href="#articles" className="hover:text-white">مقالات وتحليلات</a>
          <a href="#visual-gallery" className="hover:text-white">مكتبة بصرية</a>
        </div>
      </div>
    </section>
  );
}
