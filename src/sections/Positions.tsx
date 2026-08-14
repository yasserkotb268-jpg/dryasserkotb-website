import { Briefcase } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { useReveal } from '@/hooks/useReveal';
import { positions } from '@/data/content';

export default function Positions() {
  const ref = useReveal<HTMLElement>();
  return (
    <section id="positions" ref={ref} className="py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <SectionHeading
          kicker="المناصب والمهام الحالية"
          title="حضور مؤسسي وعلمي متنوع"
          icon={Briefcase}
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {positions.map((p, i) => (
            <div
              key={p.org}
              className="reveal card-glow group relative overflow-hidden rounded-2xl border border-border bg-card p-6"
              style={{ transitionDelay: `${(i % 4) * 80}ms` }}
            >
              <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-l from-transparent via-primary/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-primary/35 bg-primary/10 text-primary">
                <Briefcase className="h-5 w-5" />
              </span>
              <h3 className="mb-2 min-h-[3.5rem] font-bold leading-snug text-foreground">{p.org}</h3>
              <p className="text-sm leading-relaxed text-primary/90">{p.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
