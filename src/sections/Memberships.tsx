import { Award } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { useReveal } from '@/hooks/useReveal';
import { memberships } from '@/data/content';

export default function Memberships() {
  const ref = useReveal<HTMLElement>();
  return (
    <section id="memberships" ref={ref} className="relative bg-card/40 py-24">
      <div className="pattern-star pointer-events-none absolute inset-0 opacity-50" />
      <div className="relative mx-auto max-w-6xl px-4 md:px-8">
        <SectionHeading
          kicker="العضويات والزمالات"
          title="اعتمادات وعضويات علمية ومهنية"
          icon={Award}
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {memberships.map((m, i) => (
            <div
              key={m.org + m.role}
              className="reveal card-glow group relative overflow-hidden rounded-2xl border border-border bg-card p-6"
              style={{ transitionDelay: `${(i % 3) * 80}ms` }}
            >
              <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-l from-transparent via-primary/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-primary/35 bg-primary/10 text-primary">
                <Award className="h-5 w-5" />
              </span>
              <h3 className="mb-2 font-bold leading-snug text-foreground">{m.org}</h3>
              <p className="text-sm leading-relaxed text-primary/90">{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
