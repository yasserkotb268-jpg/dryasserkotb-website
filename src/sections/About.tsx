import { ArrowLeft, Compass, GitBranch, Landmark, Quote, Route, Target } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { useReveal } from '@/hooks/useReveal';
import { careerJourney, profile, valueApproach } from '@/data/content';

const highlights = [
  { icon: Compass, title: 'مسؤولية القرار', desc: 'التحقق من الوقائع وفهم السياق قبل إصدار التوصيات.' },
  { icon: Landmark, title: 'الخبرة الميدانية والمؤسسية', desc: 'من بيئة صناعة الدواء والمبيعات إلى الإدارة والتنسيق والجودة.' },
  { icon: GitBranch, title: 'المعرفة البينية', desc: 'وصل العلوم الطبيعية والإدارة والبحث والسلوك والتحليل الاستراتيجي.' },
];

export default function About() {
  const ref = useReveal<HTMLElement>();
  return (
    <section id="about" ref={ref} className="relative py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <SectionHeading
          kicker="نبذة مهنية"
          title="من التأسيس العلمي إلى الخبرة الميدانية وجودة القرار"
          icon={Quote}
        />

        <div className="grid gap-10 lg:grid-cols-5">
          <div className="reveal lg:col-span-3">
            <div className="relative rounded-2xl border border-border bg-card p-8 md:p-10">
              <Quote className="absolute -top-5 right-8 h-10 w-10 rounded-lg border border-primary/40 bg-background p-2 text-primary" />
              {profile.bio.map((p) => (
                <p key={p.slice(0, 20)} className="mb-5 text-base leading-[2] text-foreground/90 last:mb-0 md:text-lg md:leading-[2.1]">
                  {p}
                </p>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-5 lg:col-span-2">
            <div className="reveal card-glow overflow-hidden rounded-2xl border border-border">
              <img
                src="/photos/yk7-official-portrait.jpg"
                alt="الصورة الرسمية للدكتور ياسر قطب"
                width={1064}
                height={2048}
                className="block h-auto w-full object-contain"
                loading="lazy"
              />
            </div>
            {highlights.map((h, i) => (
              <div
                key={h.title}
                className="reveal card-glow flex items-start gap-4 rounded-2xl border border-border bg-card p-6"
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-primary/35 bg-primary/10 text-primary">
                  <h.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="mb-1 font-bold text-foreground">{h.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{h.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {careerJourney && (
          <div className="mt-20" id="career-path" dir="rtl">
            <div className="mx-auto mb-9 max-w-4xl text-center">
              <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/35 bg-primary/10 px-4 py-2 text-sm font-bold text-primary">
                <Route className="h-4 w-4" aria-hidden="true" />
                مراحل التكوين والممارسة
              </span>
              <h3 className="font-display text-2xl font-bold leading-[1.65] text-foreground md:text-3xl">
                {careerJourney.title}
              </h3>
              <p className="mt-4 text-sm leading-[2] text-muted-foreground md:text-base">
                {careerJourney.intro}
              </p>
            </div>
            <ol className="grid gap-5 md:grid-cols-2">
              {careerJourney.phases.map((phase, i) => (
                <li
                  key={phase.title}
                  className="reveal card-glow relative min-w-0 rounded-2xl border border-border bg-card p-6 sm:p-7"
                  style={{ transitionDelay: String((i % 2) * 90) + 'ms' }}
                >
                  <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
                    <span className="rounded-lg bg-primary/10 px-3 py-1.5 text-xs font-bold text-primary">
                      {phase.period}
                    </span>
                    <span aria-hidden="true" className="font-display text-3xl font-bold text-primary/25">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h4 className="mb-4 font-display text-lg font-bold leading-relaxed text-foreground md:text-xl">
                    {phase.title}
                  </h4>
                  <p className="text-sm leading-[2] text-foreground/85">{phase.practice}</p>
                  <div className="mt-5 border-t border-border pt-4">
                    <p className="mb-2 text-xs font-bold text-primary">القيمة التي يضيفها هذا المسار</p>
                    <p className="text-sm leading-[1.9] text-muted-foreground">{phase.value}</p>
                  </div>
                </li>
              ))}
            </ol>
            <a href="#qualifications" className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-lg border border-primary/45 bg-primary/10 px-5 py-2 text-sm font-bold text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
              تفاصيل المؤهلات والتدريب المتقدم
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        )}

        {valueApproach && (
          <div className="mt-20" dir="rtl">
            <div className="mx-auto mb-9 max-w-4xl text-center">
              <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/35 bg-primary/10 px-4 py-2 text-sm font-bold text-primary">
                <Target className="h-4 w-4" aria-hidden="true" />
                كيف تتحول الخبرة إلى قيمة؟
              </span>
              <h3 className="font-display text-2xl font-bold leading-relaxed text-foreground md:text-3xl">
                {valueApproach.title}
              </h3>
              <p className="mt-4 text-sm leading-[2] text-muted-foreground md:text-base">{valueApproach.intro}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {valueApproach.pillars.map((pillar, i) => (
                <article key={pillar.title} className="reveal card-glow min-w-0 rounded-2xl border border-border bg-card p-6">
                  <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-sm font-bold text-primary">{String(i + 1).padStart(2, '0')}</div>
                  <h4 className="mb-3 font-display text-lg font-bold leading-relaxed text-foreground">{pillar.title}</h4>
                  <p className="text-sm leading-[1.9] text-muted-foreground">{pillar.description}</p>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
