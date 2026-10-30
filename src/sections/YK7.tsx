import { useEffect } from 'react';
import { BookOpen, Download, Facebook, FileText, Images, Radar, ShieldCheck } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { useReveal } from '@/hooks/useReveal';
import { yk7 } from '@/data/content';
import { assetPath } from '@/lib/asset';

export default function YK7() {
  const ref = useReveal<HTMLElement>();
  useEffect(() => {
    const targetId = window.location.hash.slice(1);
    if (targetId === 'yk7-publications' || yk7.publications?.some((publication) => publication.slug === targetId)) {
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'instant', block: 'start' });
    }
  }, []);
  return (
    <section id="yk7" ref={ref} className="relative py-24">
      <div className="pattern-star pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-5xl px-4 md:px-8">
        <SectionHeading
          kicker="منصة الرصد الاستراتيجي YK7"
          title="رصد وتحليل واستشراف بمنهجية بينية"
          icon={Radar}
          description={yk7.intro}
        />

        {yk7.facebook && (
          <div className="reveal mb-8 flex justify-center">
            <a
              href={yk7.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-primary/45 bg-primary/10 px-6 py-2.5 text-sm font-bold text-primary transition-all hover:bg-primary hover:text-primary-foreground"
            >
              <Facebook className="h-4 w-4" />
              تابع المنصة على فيسبوك
            </a>
          </div>
        )}

        <nav aria-label="أرشيفات المنصة" className="mb-10 flex flex-wrap justify-center gap-3" dir="rtl">
          <a href="#yk7-magazines" className="inline-flex min-h-11 items-center rounded-lg border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-bold text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
            أعداد مجلة YK7
          </a>
          <a href="#yk7-publications" className="inline-flex min-h-11 items-center rounded-lg border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-bold text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
            كتب وإصدارات المنصة
          </a>
          <a href="#qadaya-articles" className="inline-flex min-h-11 items-center rounded-lg border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-bold text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
            مقالات صحيفة قضايا
          </a>
          <a href="#posters-quotes" className="inline-flex min-h-11 items-center rounded-lg border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-bold text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
            الكلمات والبوسترات
          </a>
        </nav>

        <div className="flex flex-col gap-5">
          {yk7.documents.map((doc, i) => (
            <div
              key={`${doc.type}-${doc.title}`}
              className="reveal card-glow flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 sm:flex-row sm:items-start sm:gap-5 md:p-7"
              style={{ transitionDelay: `${(i % 4) * 70}ms` }}
            >
              <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-primary/35 bg-primary/10 text-primary sm:flex">
                <FileText className="h-5 w-5" />
              </span>
              <div className="flex-1">
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-primary/35 bg-primary/10 px-3 py-0.5 text-xs font-bold text-primary">
                    {doc.type}
                  </span>
                  {doc.date && (
                    <span className="rounded-full border border-border bg-background/60 px-3 py-0.5 text-xs font-semibold text-muted-foreground">
                      {doc.date}
                    </span>
                  )}
                </div>
                <h3 className="mb-2 font-bold leading-relaxed text-foreground md:text-lg">{doc.title}</h3>
              </div>
              {doc.file && (
                <a
                  href={assetPath('uploads', doc.file)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center gap-2 self-start rounded-lg border border-primary/45 bg-primary/10 px-4 py-2.5 text-sm font-bold text-primary transition-all hover:bg-primary hover:text-primary-foreground sm:self-center"
                >
                  <Download className="h-4 w-4" />
                  PDF
                </a>
              )}
            </div>
          ))}
        </div>

        {((yk7.units && yk7.units.length > 0) || (yk7.posters && yk7.posters.length > 0) || (yk7.publications && yk7.publications.length > 0)) && (
          <div className="reveal mt-16 mb-8">
            <h3 className="font-display text-2xl font-bold leading-relaxed text-foreground md:text-3xl">
              وحدات وأقسام وإصدارات منصة الرصد الاستراتيجي | YK7
            </h3>
          </div>
        )}

        {yk7.units && yk7.units.length > 0 && (
          <div className="reveal" id="yk7-units">
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary/35 bg-primary/10 text-primary">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <h4 className="font-display text-xl font-bold text-foreground">الوحدات المتخصصة</h4>
            </div>
            <div className="space-y-5">
              {yk7.units.map((unit) => (
                <article
                  key={unit.title}
                  className="card-glow grid overflow-hidden rounded-2xl border border-border bg-card md:grid-cols-[minmax(0,1fr)_minmax(0,1.45fr)]"
                >
                  <a
                    href={assetPath('posters', unit.poster)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-background/60 p-5"
                    aria-label={`عرض الملصق التعريفي: ${unit.title}`}
                  >
                    <img
                      src={assetPath('posters', unit.poster)}
                      alt={`ملصق ${unit.title} — منصة YK7`}
                      className="mx-auto h-auto max-h-[470px] w-auto max-w-full object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                  </a>
                  <div className="flex flex-col justify-center gap-4 p-6 md:p-8">
                    <h5 className="font-display text-2xl font-bold text-primary">{unit.title}</h5>
                    <p className="text-sm leading-[1.9] text-foreground/85">{unit.description}</p>
                    <dl className="grid gap-3 text-sm leading-relaxed">
                      <div><dt className="font-bold text-foreground">إشراف الوحدة</dt><dd className="mt-1 text-muted-foreground">{unit.lead}</dd></div>
                      <div><dt className="font-bold text-foreground">المشروع</dt><dd className="mt-1 text-muted-foreground">{unit.project}</dd></div>
                      <div><dt className="font-bold text-foreground">فريق العمل والإعداد</dt><dd className="mt-1 text-muted-foreground">{unit.team}</dd></div>
                      <div><dt className="font-bold text-foreground">الإشراف العام</dt><dd className="mt-1 text-muted-foreground">{unit.supervisor}</dd></div>
                    </dl>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {yk7.posters && yk7.posters.length > 0 && (
          <div className="reveal mt-14" id="posters-quotes" dir="rtl">
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-primary/35 bg-primary/10 text-primary">
                <Images className="h-5 w-5" />
              </span>
              <h4 className="font-display text-xl font-bold text-foreground">الكلمات والبوسترات — أعمال منصة YK7</h4>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {yk7.posters.map((poster) => (
                <article
                  key={poster.file}
                  className="card-glow overflow-hidden rounded-2xl border border-border bg-card"
                >
                  <a href={assetPath('posters', poster.file)}
                    target="_blank" rel="noopener noreferrer"
                    aria-label={`عرض البوستر بالحجم الكامل: ${poster.title}`}>
                    <img
                      src={assetPath('posters', poster.file)}
                      alt={poster.title}
                      loading="lazy"
                      decoding="async"
                      className="aspect-[4/5] w-full bg-background object-contain"
                    />
                  </a>
                  <div className="p-4" dir="rtl">
                    <h4 className="font-bold leading-relaxed text-foreground">{poster.title}</h4>
                    {poster.desc && <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{poster.desc}</p>}
                    {poster.url && (
                      <a href={poster.url}
                        className="mt-3 inline-flex min-h-10 items-center rounded-lg border border-primary/35 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground">
                        قراءة العمل المرتبط
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {yk7.publications && yk7.publications.length > 0 && (
          <div className="reveal mt-14" id="yk7-publications">
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary/35 bg-primary/10 text-primary">
                <BookOpen className="h-5 w-5" />
              </span>
              <h4 className="font-display text-xl font-bold text-foreground">إصدارات المنصة</h4>
            </div>
            <div className="space-y-4">
              {yk7.publications.map((publication) => (
                <article id={publication.slug} key={publication.title} className="card-glow scroll-mt-24 rounded-2xl border border-border bg-card p-5 sm:p-6 md:p-7">
                  <div className="mb-3 flex flex-wrap items-center gap-2 text-xs font-bold text-primary">
                    <span className="rounded-full border border-primary/35 bg-primary/10 px-3 py-1">{publication.type}</span>
                    <span className="rounded-full border border-border px-3 py-1 text-muted-foreground">{publication.year}</span>
                  </div>
                  <h5 className="font-display text-xl font-bold leading-relaxed text-foreground">{publication.title}</h5>
                  {publication.note && <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{publication.note}</p>}
                  <p className="mt-4 text-sm leading-[1.9] text-foreground/85">{publication.team}</p>
                  <p className="text-sm leading-[1.9] text-foreground/85">{publication.supervisor}</p>
                  {publication.editions && publication.editions.length > 0 && (
                    <div className="mt-6 grid gap-6 lg:grid-cols-2">
                      {publication.editions.map((edition) => {
                        const isArabic = edition.language === 'ar';
                        const fileUrl = assetPath('uploads', edition.file);
                        return (
                          <div key={edition.language} lang={edition.language} dir={isArabic ? 'rtl' : 'ltr'}
                            className="min-w-0 overflow-hidden rounded-xl border border-border bg-background/60">
                            <a href={fileUrl} target="_blank" rel="noopener noreferrer"
                              aria-label={isArabic ? 'قراءة النسخة العربية الكاملة من كتاب الأمن السيبراني' : 'Read the complete English edition of Cybersecurity in Construction and Engineering'}
                              className="flex items-center justify-center bg-black/70 p-4">
                              <img src={assetPath('uploads', edition.cover)}
                                alt={isArabic ? 'غلاف النسخة العربية من كتاب الأمن السيبراني في بيئة المقاولات والهندسة' : 'English cover of Cybersecurity in Construction and Engineering'}
                                width={896} height={1120} loading="lazy" decoding="async"
                                className="h-auto max-h-96 w-auto max-w-full object-contain" />
                            </a>
                            <div className="flex flex-col gap-3 p-4 sm:p-5">
                              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
                                <span className="rounded-full border border-primary/35 bg-primary/10 px-3 py-1 text-primary">
                                  {isArabic ? 'النسخة العربية الكاملة' : 'Complete English edition'}
                                </span>
                                <span className="text-muted-foreground">{edition.pages} {isArabic ? 'صفحة' : 'pages'} · <span dir="ltr">{edition.sizeLabel}</span></span>
                              </div>
                              <h6 className="text-lg font-bold leading-relaxed text-foreground">{edition.title}</h6>
                              {edition.subtitle && <p className="text-sm font-semibold leading-relaxed text-primary">{edition.subtitle}</p>}
                              <p className="text-sm leading-[1.9] text-foreground/85">{edition.summary}</p>
                              {edition.audience && <p className="text-sm leading-[1.9] text-muted-foreground">{edition.audience}</p>}
                              {edition.quote && <blockquote className="border-s-2 border-primary/60 ps-3 text-sm font-semibold leading-[1.9] text-foreground">{edition.quote}</blockquote>}
                              <div className="mt-1 flex flex-wrap gap-3">
                                <a href={fileUrl} target="_blank" rel="noopener noreferrer"
                                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-primary/45 bg-primary/10 px-4 py-2.5 text-sm font-bold text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
                                  <BookOpen className="h-4 w-4 shrink-0" aria-hidden="true" />
                                  {isArabic ? 'قراءة النسخة العربية' : 'Read English edition'}
                                </a>
                                <a href={fileUrl} download
                                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-bold text-foreground transition-colors hover:border-primary hover:text-primary">
                                  <Download className="h-4 w-4 shrink-0" aria-hidden="true" />
                                  {isArabic ? 'تحميل PDF العربي' : 'Download English PDF'}
                                </a>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                  {publication.file && (
                    <a href={assetPath('uploads', publication.file)} target="_blank" rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 rounded-lg border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-bold text-primary">
                      <Download className="h-4 w-4" /> قراءة الإصدار
                    </a>
                  )}
                </article>
              ))}
            </div>
          </div>
        )}


      </div>
    </section>
  );
}
