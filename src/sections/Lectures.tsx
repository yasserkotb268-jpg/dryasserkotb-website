import { Download, GraduationCap, MonitorPlay, Youtube } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { useReveal } from '@/hooks/useReveal';
import { featuredVideo, lectureSeries } from '@/data/content';
import { assetPath } from '@/lib/asset';

export default function Lectures() {
  const ref = useReveal<HTMLElement>();
  return (
    <section id="lectures" ref={ref} className="py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <SectionHeading
          kicker="المحاضرات العلمية"
          title="سلاسل محاضرات البرامج والدبلومات"
          icon={GraduationCap}
          description="شرائح المحاضرات كاملة بصيغة PDF — من البرامج العلمية التي يقدّمها د. ياسر قطب"
        />

        {/* المحاضرة المرئية المميزة */}
        <div className="reveal mb-14">
          <a
            href={featuredVideo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="card-glow group flex flex-col items-start gap-4 rounded-2xl border border-primary/30 bg-gradient-to-l from-primary/10 to-transparent p-6 transition-colors hover:border-primary/60 md:flex-row md:items-center md:justify-between"
          >
            <div className="flex items-start gap-4">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Youtube className="h-7 w-7" />
              </span>
              <div>
                <span className="mb-1 inline-block rounded-full border border-primary/40 bg-primary/10 px-3 py-0.5 text-xs font-bold text-primary">
                  محاضرة مرئية — YouTube
                </span>
                <h3 className="font-display text-xl font-bold text-foreground md:text-2xl">
                  {featuredVideo.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{featuredVideo.desc}</p>
              </div>
            </div>
            <span className="flex shrink-0 items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition-transform group-hover:scale-105">
              <MonitorPlay className="h-4 w-4" />
              مشاهدة المحاضرة
            </span>
          </a>
        </div>

        {/* سلاسل المحاضرات */}
        <div className="grid gap-10 lg:grid-cols-2">
          {lectureSeries.map((series) => (
            <div key={series.program} className="reveal">
              <div className="mb-5 rounded-xl border border-border bg-card p-5">
                <h3 className="font-display text-lg font-bold leading-snug text-primary">
                  {series.program}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{series.org}</p>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <span className="inline-block rounded-full border border-primary/35 bg-primary/10 px-3 py-0.5 text-xs font-bold text-primary">
                    {series.lectures.length} محاضرة متاحة
                  </span>
                  {'link' in series && series.link && (
                    <a
                      href={series.link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 px-3 py-0.5 text-xs font-bold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                    >
                      <Youtube className="h-3.5 w-3.5" />
                      {series.link.label}
                    </a>
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-3">
                {series.lectures.map((l, i) => (
                  <div
                    key={l.file}
                    className="card-glow flex items-center justify-between gap-3 rounded-xl border border-border bg-card p-4"
                    style={{ transitionDelay: `${i * 50}ms` }}
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-primary/35 bg-primary/10 text-xs font-bold text-primary">
                        {l.num}
                      </span>
                      <h4 className="text-sm font-bold leading-snug text-foreground">{l.title}</h4>
                    </div>
                    <a
                      href={assetPath('lectures', l.file)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex shrink-0 items-center gap-1.5 rounded-lg border border-primary/40 bg-primary/10 px-3 py-1.5 text-xs font-bold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                    >
                      PDF
                      <Download className="h-3.5 w-3.5" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
