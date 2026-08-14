import { ArrowDown, Award, BrainCircuit, Feather, GraduationCap, Radar } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { profile } from '@/data/content';

const titleIcons = [Radar, Award, GraduationCap, BrainCircuit, Feather];

export default function Hero() {
  const ref = useReveal<HTMLElement>();
  return (
    <section id="top" ref={ref} className="relative overflow-hidden pt-16">
      {/* خلفيات زخرفية */}
      <div className="pattern-grid pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]" />
      <div className="pointer-events-none absolute -bottom-52 -right-40 h-[420px] w-[420px] rounded-full bg-blue-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-52 -left-40 h-[420px] w-[420px] rounded-full bg-primary/10 blur-[120px]" />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center px-4 pb-20 pt-20 text-center md:pt-28">
        <div className="reveal mb-7 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-5 py-2 text-sm font-semibold text-primary">
          <Award className="h-4 w-4" />
          +25 عامًا من الخبرة التطبيقية والبحثية
        </div>

        <h1 className="reveal font-display text-4xl font-bold leading-[1.35] text-foreground md:text-6xl md:leading-[1.3]">
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

        <div className="reveal mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#about"
            className="rounded-lg bg-primary px-7 py-3 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:brightness-110"
          >
            اكتشف المسيرة المهنية
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-primary/50 bg-primary/5 px-7 py-3 text-sm font-bold text-primary transition-all hover:bg-primary/15"
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
              <span className="font-display text-4xl font-bold text-primary md:text-5xl">{s.value}</span>
              <span className="text-center text-sm text-muted-foreground">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
