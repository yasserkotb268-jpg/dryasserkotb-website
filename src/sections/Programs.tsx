import { GraduationCap, School } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { useReveal } from '@/hooks/useReveal';
import { programs } from '@/data/content';

export default function Programs() {
  const ref = useReveal<HTMLElement>();
  return (
    <section id="programs" ref={ref} className="relative bg-card/40 py-24">
      <div className="pattern-grid pointer-events-none absolute inset-0 opacity-50" />
      <div className="relative mx-auto max-w-5xl px-4 md:px-8">
        <SectionHeading
          kicker="البرامج العلمية"
          title="برامج أكاديمية ومهنية بشراكات دولية"
          icon={School}
        />

        <div className="flex flex-col gap-5">
          {programs.map((p, i) => (
            <div
              key={p.name}
              className="reveal card-glow flex items-start gap-5 rounded-2xl border border-border bg-card p-6 md:p-7"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-primary/35 bg-primary/10 text-primary sm:flex">
                <GraduationCap className="h-5 w-5" />
              </span>
              <div>
                <h3 className="mb-2 font-bold leading-relaxed text-foreground md:text-lg">{p.name}</h3>
                <p className="text-sm leading-[1.9] text-muted-foreground">{p.org}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
