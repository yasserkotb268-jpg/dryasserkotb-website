import { BookOpen, Download, Images, Lightbulb, Network, PenLine, Wrench } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useReveal } from '@/hooks/useReveal';
import { books, frameworks, models, photos } from '@/data/content';
import { assetPath } from '@/lib/asset';

const frameworkIcons = [Network, Lightbulb, BookOpen, PenLine];
const patternsBook = books.find((book) => book.summaryUrl === '/books/narcissistic-patterns/');

export default function Works() {
  const ref = useReveal<HTMLElement>();
  return (
    <section id="works" ref={ref} className="py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <SectionHeading
          kicker="الأعمال العلمية والفكرية والمهنية"
          title="مختارات من أعمال د. ياسر قطب — لا على سبيل الحصر"
          icon={BookOpen}
        />

        <section aria-labelledby="bau-library-catalog" className="reveal mb-10 rounded-2xl border border-primary/40 bg-card p-5 md:p-8" dir="rtl">
          <p className="mb-2 text-sm font-semibold text-primary">الفهرسة المكتبية | تأكيد السجل في <time dateTime="2026-11-27">27 نوفمبر 2026</time></p>
          <h3 id="bau-library-catalog" className="font-display text-2xl font-bold leading-relaxed text-foreground md:text-3xl">
            كتاب القانون والتنمية الرشيدة والذكاء الاصطناعي في فهرس مكتبات جامعة بيروت العربية
          </h3>
          <p className="my-4 max-w-4xl text-base leading-[2] text-muted-foreground">
            أُدرج كتاب «القانون والتنمية الرشيدة والذكاء الاصطناعي في عصر التحول الرقمي» للدكتور ياسر سيد عبد السلام قطب
            في الفهرس الإلكتروني لمكتبات جامعة بيروت العربية، بمعرّف السجل <bdi>132252</bdi>.
            وزوّدت إدارة المكتبات المؤلف بالرابط المباشر للسجل للاطلاع والتوثيق.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="/news/beirut-arab-university-library-catalog-2026/" className="inline-flex min-h-11 items-center rounded-lg border border-primary/40 bg-primary/10 px-4 py-2 text-base font-bold text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
              قراءة خبر الفهرسة
            </a>
            <a href="/books/law-development-ai-digital-2026/#library-catalog" className="inline-flex min-h-11 items-center rounded-lg border border-border px-4 py-2 text-base font-bold text-foreground transition-colors hover:border-primary">
              صفحة الكتاب والتوثيق المكتبي
            </a>
            <a href="https://librarycatalog.bau.edu.lb/cgi-bin/koha/opac-detail.pl?biblionumber=132252" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center px-2 py-2 text-base font-bold text-primary underline underline-offset-4">
              عرض السجل في فهرس الجامعة
            </a>
          </div>
        </section>

        {/* توثيق تعاقد نشر المؤلفين — ملفات تعريفية فقط دون إتاحة الكتب الكاملة */}
        <section aria-labelledby="yk7-contracted-books" className="reveal mb-12 rounded-2xl border border-primary/40 bg-card p-5 md:p-8" dir="rtl">
          <p className="mb-2 text-sm font-semibold text-primary">المؤلفات والتعاقدات العلمية | 3 نوفمبر 2026</p>
          <h3 id="yk7-contracted-books" className="font-display text-2xl font-bold leading-relaxed text-foreground md:text-3xl">
            كتابان ضمن عقد للنشر الإلكتروني
          </h3>
          <p className="my-3 max-w-4xl text-sm leading-[2] text-muted-foreground">
            يشمل التعاقد مؤلفين للدكتور ياسر سيد عبد السلام قطب في القانون والذكاء الاصطناعي والمقاصد وجودة القرار.
            ورد في بيانات الطرف الأول بالعقد اسم الهيئة العامة لشؤون المطابع الأميرية وبحر الأنظمة القانونية،
            مع النشر من خلال المنصة الفقهية الرقمية. لم تُؤكّد إتاحة النسختين التجاريتين بعد.
          </p>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <article className="flex flex-col items-center gap-4 rounded-xl border border-border bg-background/40 p-4 text-center sm:flex-row sm:text-right">
              <img src="/books/law-development-ai-digital-2026/cover-original.webp" width="953" height="1348" loading="lazy" alt="الغلاف الأصلي لكتاب القانون والتنمية الرشيدة والذكاء الاصطناعي في عصر التحول الرقمي" className="h-48 w-auto shrink-0 rounded-md object-contain shadow-lg" />
              <div className="flex-1">
                <h4 className="font-display text-lg font-bold leading-relaxed">القانون والتنمية الرشيدة والذكاء الاصطناعي في عصر التحول الرقمي</h4>
                <p className="my-2 text-sm leading-[1.9] text-muted-foreground">قراءة في الحوكمة والتنمية والتحول الرقمي وجودة القرار القانوني والتنموي.</p>
                <a href="/books/law-development-ai-digital-2026/" className="text-sm font-bold text-primary underline underline-offset-4">قراءة النبذة العلمية ومحاور الكتاب</a>
              </div>
            </article>
            <article className="flex flex-col items-center gap-4 rounded-xl border border-border bg-background/40 p-4 text-center sm:flex-row sm:text-right">
              <img src="/books/yk7-contract-2026/cover-maqasid-decision-2026.svg" width="840" height="1188" loading="lazy" alt="الغلاف التعريفي لكتاب ميزان المقاصد وجودة القرار" className="h-48 w-auto shrink-0 rounded-md object-contain shadow-lg" />
              <div className="flex-1">
                <h4 className="font-display text-lg font-bold leading-relaxed">ميزان المقاصد وجودة القرار</h4>
                <p className="my-2 text-sm leading-[1.9] text-muted-foreground">من البناء الأصولي للمصلحة والمآلات إلى إطار إجرائي معاصر لتقويم القرار.</p>
                <a href="/books/maqasid-decision-quality-2026/" className="text-sm font-bold text-primary underline underline-offset-4">قراءة النبذة العلمية ومحاور الكتاب</a>
              </div>
            </article>
          </div>
          <a href="/news/two-books-publishing-contract-2026/" className="mt-5 inline-flex rounded-lg border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-bold text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
            الاطلاع على خبر التعاقد للنشر الإلكتروني
          </a>
        </section>

        <div className="reveal mb-10 flex flex-col items-center gap-5 overflow-hidden rounded-2xl border border-primary/30 bg-card p-5 text-right md:flex-row md:p-7" dir="rtl">
          <img
            src={assetPath('posters', 'yk7-ai-pharma-book-3d.webp')}
            alt="كتاب الذكاء الاصطناعي وإدارة الجودة الشاملة في الصناعات الدوائية"
            loading="lazy"
            className="h-48 w-auto shrink-0 rounded-lg bg-background object-contain md:h-56"
          />
          <div className="min-w-0 flex-1">
            <p className="mb-2 text-sm font-semibold text-primary">كتاب علمي مستمد من رسالة الدكتوراه</p>
            <h3 className="font-display text-xl font-bold leading-[1.65] text-foreground md:text-2xl">
              الذكاء الاصطناعي وإدارة الجودة الشاملة في الصناعات الدوائية
            </h3>
            <p className="my-3 text-sm leading-[2] text-muted-foreground">
              ملخص علمي يعرض المشكلة البحثية والمنهج المختلط والنتائج والتوصيات، مع بيان الإضافة الإجرائية لنموذج YK7–PIL وحدود تعميم نتائج الدراسة.
            </p>
            <a href="/books/ai-tqm-pharma-summary.html" className="inline-flex items-center rounded-lg border border-primary/40 bg-primary/10 px-5 py-2.5 text-sm font-bold text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
              قراءة ملخص الكتاب
            </a>
          </div>
        </div>

        {patternsBook && (
          <div className="reveal mb-10 flex flex-col items-center gap-5 overflow-hidden rounded-2xl border border-primary/30 bg-card p-5 text-right md:flex-row md:p-7" dir="rtl">
            <img
              src="/books/narcissistic-patterns/cover.jpg"
              alt="غلاف نسخة المراجعة الإنجليزية من كتاب كيف أتعامل مع النمط النرجسي"
              loading="lazy"
              width="1024"
              height="1536"
              className="h-48 w-auto shrink-0 rounded-lg bg-background object-contain md:h-56"
            />
            <div className="min-w-0 flex-1">
              <p className="mb-2 text-sm font-semibold text-primary">كيف أتعامل مع النمط النرجسي — نسخة المراجعة الإنجليزية</p>
              <h3 className="font-display text-xl font-bold leading-[1.65] text-foreground md:text-2xl" lang="en" dir="ltr">
                How to Deal with Narcissistic Patterns
              </h3>
              <p className="my-3 text-sm leading-[2] text-muted-foreground">
                ملخص بالإنجليزية وعينة قراءة من 22 صفحة تضم الفصل الأول وورقة تطبيقية ومراجع الكتاب، مع الحفاظ على ترقيم الصفحات الأصلي.
              </p>
              <a href="/books/narcissistic-patterns-english.html" className="inline-flex items-center rounded-lg border border-primary/40 bg-primary/10 px-5 py-2.5 text-sm font-bold text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
                قراءة الملخص والصفحات المختارة بالإنجليزية
              </a>
            </div>
          </div>
        )}

        <Tabs defaultValue="frameworks" dir="rtl" className="reveal">
          <TabsList className="mx-auto mb-10 flex w-fit gap-1 rounded-xl border border-border bg-card p-1.5">
            <TabsTrigger
              value="frameworks"
              className="rounded-lg px-5 py-2.5 text-sm font-bold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              مشروعات وأطر فكرية
            </TabsTrigger>
            <TabsTrigger
              value="books"
              className="rounded-lg px-5 py-2.5 text-sm font-bold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              كتب ومشروعات تأليفية
            </TabsTrigger>
          </TabsList>

          <TabsContent value="frameworks">
            <div className="grid gap-6 md:grid-cols-2">
              {frameworks.map((f, i) => {
                const Icon = frameworkIcons[i % frameworkIcons.length];
                return (
                  <div
                    key={f.name}
                    className="card-glow relative overflow-hidden rounded-2xl border border-border bg-card p-7"
                  >
                    <div className="pattern-star pointer-events-none absolute inset-0 opacity-40" />
                    <div className="relative">
                      <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-primary/35 bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" />
                      </span>
                      <h3 className="mb-2 font-display text-xl font-bold text-primary" dir="auto">
                        {f.name}
                      </h3>
                      <p className="text-sm leading-[1.9] text-foreground/85">{f.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* نماذج وأدوات قابلة للتحميل */}
            <div className="mt-12">
              <div className="mb-6 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary/35 bg-primary/10 text-primary">
                  <Wrench className="h-5 w-5" />
                </span>
                <h3 className="font-display text-2xl font-bold text-foreground">
                  نماذج وأدوات قابلة للتحميل
                </h3>
              </div>
              <div className="flex flex-col gap-3">
                {models.map((m) => (
                  <div
                    key={m.file}
                    className="card-glow flex items-center justify-between gap-4 rounded-xl border border-border bg-card p-4"
                  >
                    <div>
                      <h4 className="mb-1 text-sm font-bold text-foreground">{m.name}</h4>
                      <p className="text-xs text-muted-foreground">{m.desc}</p>
                    </div>
                    <a
                      href={assetPath('models', m.file)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex shrink-0 items-center gap-1.5 rounded-lg border border-primary/40 bg-primary/10 px-3.5 py-1.5 text-xs font-bold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                    >
                      تحميل
                      <Download className="h-3.5 w-3.5" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="books">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {books.map((b) => (
                <div
                  key={b.title}
                  className="card-glow flex flex-col rounded-2xl border border-border bg-card p-6"
                >
                  {b.cover ? (
                    <img src={b.cover} alt={`غلاف ${b.title}`} loading="lazy" className="mb-4 h-48 w-full rounded-lg object-contain" />
                  ) : (
                    <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-primary/35 bg-primary/10 text-primary">
                      <BookOpen className="h-5 w-5" />
                    </span>
                  )}
                  <h3 className="mb-2 font-bold leading-snug text-foreground">{b.title}</h3>
                  <p className="mb-4 flex-1 text-sm leading-[1.85] text-muted-foreground">{b.topic}</p>
                  <span className="mt-auto inline-flex w-fit rounded-full border border-primary/35 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    {b.status}
                  </span>
                  {b.summaryUrl && (
                    <a href={b.summaryUrl} className="mt-4 inline-flex w-fit items-center rounded-lg border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-bold text-primary hover:bg-primary hover:text-primary-foreground">
                      {b.summaryLabel ?? 'قراءة ملخص الكتاب'}
                    </a>
                  )}
                </div>
              ))}
            </div>

            {/* من مكتبة المؤلف */}
            <div className="mt-12">
              <div className="mb-6 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary/35 bg-primary/10 text-primary">
                  <Images className="h-5 w-5" />
                </span>
                <h3 className="font-display text-2xl font-bold text-foreground">من مكتبة المؤلف</h3>
              </div>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {photos.map((p) => (
                  <div
                    key={p.src}
                    className="card-glow overflow-hidden rounded-2xl border border-border bg-card"
                  >
                    <img
                      src={assetPath('photos', p.src)}
                      alt={p.alt}
                      loading="lazy"
                      className={p.src === 'yk7-official-portrait.jpg'
                        ? 'block h-auto w-full object-contain'
                        : 'aspect-[4/5] w-full object-cover transition-transform duration-500 hover:scale-105'}
                    />
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
