import { ArrowDown, Award, BookOpenCheck, BrainCircuit, BriefcaseBusiness, Feather, GraduationCap, HeartPulse, Newspaper, Radar, Scale } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { positions, profile } from '@/data/content';

const titleIcons = [Radar, Award, GraduationCap, BrainCircuit, Feather];
const consultingIcons = [HeartPulse, Scale, BriefcaseBusiness, BookOpenCheck];

export default function Hero() {
  const ref = useReveal<HTMLElement>();
  return (
    <section id="top" ref={ref} className="relative overflow-hidden pt-16">
      {/* خلفيات زخرفية */}
      <div className="pattern-grid pointer-events-none absolute inset-0" />
      <div className="hero-ambient" aria-hidden="true" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]" />
      <div className="pointer-events-none absolute -bottom-52 -right-40 h-[420px] w-[420px] rounded-full bg-blue-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-52 -left-40 h-[420px] w-[420px] rounded-full bg-primary/10 blur-[120px]" />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center px-4 pb-20 pt-20 text-center md:pt-28">
        <div className="reveal mb-7 w-full max-w-lg">
          <div className="hero-wordmark relative flex items-center justify-center gap-3 rounded-2xl px-4 py-3 sm:gap-4" dir="rtl">
            <img
              src="/brand/yk7-logo-original.png"
              alt="شعار منصة الرصد الاستراتيجيYK7"
              width="1254"
              height="1254"
              decoding="async"
              className="h-16 w-16 shrink-0 rounded-full object-contain sm:h-20 sm:w-20"
            />
            <div className="min-w-0 text-right">
              <p className="font-display text-xl font-bold leading-relaxed text-white sm:text-2xl">منصة الرصد الاستراتيجي<bdi dir="ltr" className="text-[#ef4452]">YK7</bdi></p>
              <p className="mt-1 text-xs leading-relaxed text-white/70" dir="ltr">Strategic Intelligence Platform</p>
            </div>
          </div>
        </div>
        <div className="reveal mb-7 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-5 py-2 text-sm font-semibold text-primary">
          <Award className="h-4 w-4" />
          أكثر من 25 عامًا من الخبرة التطبيقية والبحثية
        </div>

        <h1 className="reveal hero-title font-display text-4xl font-bold leading-[1.35] text-foreground md:text-6xl md:leading-[1.3]">
          د. ياسر سيد عبد السلام <span className="gold-text">قطب</span>
        </h1>
        <p className="reveal mt-4 text-sm font-medium tracking-[0.2em] text-muted-foreground md:text-base" dir="ltr">
          Dr. Yasser Sayed Abd El-Salam Kotb
        </p>

        <div className="gold-line reveal mt-8 h-px w-56" />

        <ul className="reveal mt-8 flex max-w-3xl flex-col items-center gap-4">
          {profile.titles.map((t, i) => {
            const Icon = titleIcons[i % titleIcons.length];
            return (
              <li key={t} className="flex items-start gap-3 text-base font-medium leading-relaxed text-foreground/90 md:text-lg">
                <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-primary/35 bg-primary/10 text-primary">
                  <Icon className="h-3.5 w-3.5" />
                </span>
                <span>{t}</span>
              </li>
            );
          })}
        </ul>

        {positions.some((position) => position.org === 'صحيفة قضايا' && position.role.includes('مستشار التحرير')) && (
          <div className="reveal mt-9 w-full max-w-4xl" dir="rtl">
            <div className="flex min-w-0 flex-col gap-4 rounded-2xl border border-border bg-card/80 px-5 py-5 text-right md:flex-row md:items-center md:justify-between md:px-6">
              <div className="flex min-w-0 items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-primary/35 bg-primary/10 text-primary">
                  <Newspaper className="h-6 w-6" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <p className="mb-1 text-xs font-semibold text-primary">المسؤولية الصحفية والتحريرية</p>
                  <h2 className="font-display text-lg font-bold leading-relaxed text-foreground md:text-xl">
                    مستشار التحرير بصحيفة قضايا
                  </h2>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">الكتابة والمراجعة والتحليل التحريري</p>
                </div>
              </div>
              <a
                href="#qadaya-articles"
                className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 self-start rounded-lg border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-bold text-primary transition-colors hover:bg-primary hover:text-primary-foreground md:self-auto"
              >
                مقالاتي في صحيفة قضايا
                <ArrowDown className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        )}

        {profile.consultingRoles && profile.consultingRoles.length > 0 && (
          <div className="reveal mt-10 w-full max-w-4xl" dir="rtl">
            <h2 className="mb-5 font-display text-xl font-bold text-foreground md:text-2xl">
              مجالات الاستشارة المهنية
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {profile.consultingRoles.map((role, i) => {
                const Icon = consultingIcons[i] ?? BriefcaseBusiness;
                return (
                  <div
                    key={role}
                    className="card-glow flex min-w-0 items-start gap-3 rounded-xl border border-primary/30 bg-card/80 px-4 py-4 text-right sm:px-5"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-primary/35 bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <p className="min-w-0 font-display text-base font-bold leading-[1.85] text-foreground md:text-lg">{role}</p>
                  </div>
                );
              })}
            </div>
            <p className="mx-auto mt-4 max-w-3xl text-center text-xs leading-[1.9] text-muted-foreground md:text-sm">
              يشمل الإشراف البحثي الخارجي التوجيه المنهجي والمراجعة العلمية المستقلة، ولا يحل محل الإشراف الأكاديمي الرسمي الذي تعتمده الجامعة.
            </p>
          </div>
        )}

        <div className="reveal mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#about"
            className="site-action-link rounded-lg bg-primary px-7 py-3 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:brightness-110"
          >
            اكتشف المسيرة المهنية
          </a>
          <a
            href="#contact"
            className="site-action-link rounded-lg border border-primary/50 bg-primary/5 px-7 py-3 text-sm font-bold text-primary transition-all hover:bg-primary/15"
          >
            تواصل معي
          </a>
        </div>

        <a href="#about" className="reveal mt-14 text-primary/70 transition-colors hover:text-primary" aria-label="انتقل للأسفل">
          <ArrowDown className="h-6 w-6 animate-bounce" />
        </a>
      </div>

      {/* شريط الإحصاءات */}
      <div className="relative border-t border-border/70 bg-card/60 backdrop-blur-sm">
        <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-border/60 divide-x-reverse md:grid-cols-4">
          {profile.stats.map((s) => (
            <div key={s.label} className="reveal flex flex-col items-center gap-1 px-4 py-8">
              <span className="font-display text-4xl font-bold text-primary md:text-5xl" dir="ltr">{s.value}</span>
              <span className="text-center text-sm text-muted-foreground">{s.label}</span>
            </div>
          ))}
        </div>
        <p className="mx-auto max-w-4xl px-6 pb-8 text-center text-base leading-[2] text-foreground/85" dir="rtl">
          تُعرض في الموقع نماذج مختارة من الكتب والأبحاث والمقالات والندوات والبرامج والأطر الفكرية، ولا تمثل حصرًا لجميع الأعمال والأنشطة خلال المسيرة العلمية والمهنية.
        </p>
      </div>
    </section>
  );
}
