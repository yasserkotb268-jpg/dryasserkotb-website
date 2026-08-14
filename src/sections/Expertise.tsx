import {
  BadgeCheck,
  BrainCircuit,
  Building2,
  HeartPulse,
  Megaphone,
  Pill,
  Radar,
  Scale,
  Sparkles,
  Users,
  type LucideIcon,
} from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { useReveal } from '@/hooks/useReveal';
import { expertise } from '@/data/content';

const iconMap: Record<string, LucideIcon> = {
  BrainCircuit,
  BadgeCheck,
  Building2,
  Pill,
  Megaphone,
  Users,
  Radar,
  HeartPulse,
  Scale,
};

export default function Expertise() {
  const ref = useReveal<HTMLElement>();
  return (
    <section id="expertise" ref={ref} className="relative bg-card/40 py-24">
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[700px] -translate-x-1/2 rounded-full bg-primary/8 blur-[120px]" />
      <div className="relative mx-auto max-w-6xl px-4 md:px-8">
        <SectionHeading
          kicker="مجالات الخبرة والتخصص"
          title="منظومة خبرة متكاملة بين التخصص والميدان"
          icon={Sparkles}
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {expertise.map((e, i) => {
            const Icon = iconMap[e.icon] ?? Sparkles;
            return (
              <div
                key={e.area}
                className="reveal card-glow group rounded-2xl border border-border bg-card p-7"
                style={{ transitionDelay: `${(i % 3) * 90}ms` }}
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="flex h-13 w-13 items-center justify-center rounded-xl border border-primary/35 bg-primary/10 p-3 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="font-display text-4xl font-bold text-primary/15 transition-colors duration-300 group-hover:text-primary/30">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="mb-2 font-display text-xl font-bold text-foreground">{e.area}</h3>
                <p className="text-sm leading-[1.9] text-muted-foreground">{e.detail}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
