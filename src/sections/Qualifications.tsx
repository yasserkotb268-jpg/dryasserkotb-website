import { GraduationCap } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { useReveal } from '@/hooks/useReveal';
import { qualifications, trainingCertificates } from '@/data/content';

export default function Qualifications() {
  const ref = useReveal<HTMLElement>();
  return (
    <section id="qualifications" ref={ref} className="relative bg-card/40 py-24">
      <div className="pattern-star pointer-events-none absolute inset-0 opacity-60" />
      <div className="relative mx-auto max-w-6xl px-4 md:px-8">
        <SectionHeading
          kicker="المؤهلات العلمية"
          title="البناء الأكاديمي الأساسي"
          icon={GraduationCap}
        />

        <div className="relative mx-auto max-w-3xl">
          {/* الخط الزمني */}
          <div className="absolute bottom-4 right-[22px] top-4 w-px bg-gradient-to-b from-primary/60 via-primary/25 to-transparent md:right-1/2" />

          <div className="flex flex-col gap-8">
            {qualifications.map((q, i) => (
              <div
                key={q.title}
                className={`reveal relative flex md:w-1/2 ${
                  i % 2 === 0 ? 'md:pl-10' : 'md:mr-auto md:pr-10 md:text-left'
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* نقطة الخط الزمني */}
                <span
                  className={`absolute top-6 hidden h-3 w-3 rounded-full border-2 border-primary bg-background md:block ${
                    i % 2 === 0 ? '-left-[7px]' : '-right-[7px]'
                  }`}
                />
                <div className="card-glow w-full rounded-2xl border border-border bg-card p-6 pr-14 md:pr-6">
                  <span className="absolute right-4 top-6 flex h-9 w-9 items-center justify-center rounded-lg border border-primary/35 bg-primary/10 text-primary md:hidden">
                    <GraduationCap className="h-4 w-4" />
                  </span>
                  <h3 className="mb-2 font-display text-xl font-bold text-primary">{q.title}</h3>
                  <p className="text-sm leading-[1.9] text-foreground/85">{q.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {trainingCertificates.length > 0 && (
          <div className="mt-16">
            <h3 className="mb-3 font-display text-2xl font-bold text-foreground">التدريب والشهادات المهنية</h3>
            <p className="mb-6 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              شهادات حضور أو اجتياز مقررات وورش تدريبية، تُعرض بصفتها التدريبية ولا تعادل درجات علمية أو تراخيص مهنية مستقلة.
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {trainingCertificates.map((item) => (
                <article key={item.title} className="reveal card-glow rounded-2xl border border-border bg-card p-5">
                  <p className="mb-2 text-xs font-semibold text-primary">{item.kind}{item.date ? ` — ${item.date}` : ''}</p>
                  <h4 className="mb-2 font-bold leading-relaxed text-foreground">{item.title}</h4>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.org}</p>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
