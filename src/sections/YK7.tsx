import { BookOpen, Download, Facebook, FileText, Images, Newspaper, Radar, ShieldCheck } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { useReveal } from '@/hooks/useReveal';
import { yk7 } from '@/data/content';
import { assetPath } from '@/lib/asset';

export default function YK7() {
  const ref = useReveal<HTMLElement>();
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
          <div className="reveal mt-14">
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary/35 bg-primary/10 text-primary">
                <Images className="h-5 w-5" />
              </span>
              <h4 className="font-display text-xl font-bold text-foreground">أقسام المنصة وأنشطتها</h4>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {yk7.posters.map((poster) => (
                <a
                  key={poster.file}
                  href={assetPath('posters', poster.file)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-glow overflow-hidden rounded-2xl border border-border bg-card"
                  aria-label={`عرض البوستر: ${poster.title}`}
                >
                  <img
                    src={assetPath('posters', poster.file)}
                    alt={poster.title}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[4/5] w-full bg-background object-contain"
                  />
                  <div className="p-4">
                    <h4 className="font-bold leading-relaxed text-foreground">{poster.title}</h4>
                    {poster.desc && <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{poster.desc}</p>}
                  </div>
                </a>
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
                <article key={publication.title} className="card-glow rounded-2xl border border-border bg-card p-6 md:p-7">
                  <div className="mb-3 flex flex-wrap items-center gap-2 text-xs font-bold text-primary">
                    <span className="rounded-full border border-primary/35 bg-primary/10 px-3 py-1">{publication.type}</span>
                    <span className="rounded-full border border-border px-3 py-1 text-muted-foreground">{publication.year}</span>
                  </div>
                  <h5 className="font-display text-xl font-bold leading-relaxed text-foreground">{publication.title}</h5>
                  {publication.note && <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{publication.note}</p>}
                  <p className="mt-4 text-sm leading-[1.9] text-foreground/85">{publication.team}</p>
                  <p className="text-sm leading-[1.9] text-foreground/85">{publication.supervisor}</p>
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

        {yk7.magazine && yk7.magazine.length > 0 && (
          <div className="reveal mt-14">
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary/35 bg-primary/10 text-primary">
                <Newspaper className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-display text-2xl font-bold text-foreground">مجلة المنصة</h3>
                <p className="text-sm text-muted-foreground">العدد الأسبوعي — يصدر كل خميس</p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              {yk7.magazine.map((m, i) => (
                <div
                  key={`${m.date}-${m.title}`}
                  className="card-glow flex items-center justify-between gap-4 rounded-xl border border-border bg-card p-5"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <div className="flex-1">
                    <div className="mb-1.5 flex flex-wrap items-center gap-2">
                      {m.issue && (
                        <span className="rounded-full border border-primary/35 bg-primary/10 px-3 py-0.5 text-xs font-bold text-primary">
                          {m.issue}
                        </span>
                      )}
                      {m.date && (
                        <span className="rounded-full border border-border bg-background/60 px-3 py-0.5 text-xs font-semibold text-muted-foreground">
                          {m.date}
                        </span>
                      )}
                    </div>
                    <h4 className="font-bold leading-snug text-foreground">{m.title}</h4>
                  </div>
                  {m.file && (
                    <a
                      href={assetPath('uploads', m.file)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex shrink-0 items-center gap-2 rounded-lg border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-bold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                    >
                      PDF
                      <Download className="h-4 w-4" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
