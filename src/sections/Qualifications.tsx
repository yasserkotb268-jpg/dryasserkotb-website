import { FileCheck2, GraduationCap } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { useReveal } from '@/hooks/useReveal';
import { professionalPracticeDocuments, qualifications, trainingCertificates } from '@/data/content';
import { assetPath } from '@/lib/asset';

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

        {professionalPracticeDocuments.length > 0 && (
          <div className="mt-16" dir="rtl">
            <h3 className="mb-4 font-display text-2xl font-bold text-foreground">
              وثائق الاعتماد والتأهيل المهني
            </h3>
            <div className="grid gap-4 md:grid-cols-2">
              {professionalPracticeDocuments.map((document) => (
                <article key={document.title} className="card-glow flex min-w-0 flex-col gap-3 rounded-2xl border border-border bg-card p-6">
                  <div className="flex items-center gap-2">
                    <FileCheck2 className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                    <h4 className="font-display text-xl font-bold leading-relaxed text-foreground">{document.title}</h4>
                  </div>
                  {document.issuer && <p className="text-sm leading-relaxed text-muted-foreground">{document.issuer}</p>}
                  {document.scope && <p className="text-sm leading-[1.9] text-foreground/85">{document.scope}</p>}
                  {document.file && (
                    <a href={assetPath('uploads', document.file)}
                      target="_blank" rel="noopener noreferrer"
                      className="mt-2 inline-flex min-h-11 w-fit items-center gap-2 rounded-lg border border-primary/45 bg-primary/10 px-5 py-2 text-sm font-bold text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
                      عرض الوثيقة <FileCheck2 className="h-4 w-4" aria-hidden="true" />
                    </a>
                  )}
                </article>
              ))}
            </div>
          </div>
        )}

        {trainingCertificates.length > 0 && (
          <div className="mt-16">
            <h3 className="mb-3 font-display text-2xl font-bold text-foreground">التدريب والشهادات المهنية</h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {trainingCertificates.map((item) => (
                <article key={item.title} className="reveal card-glow rounded-2xl border border-border bg-card p-5">
                  {item.date && <p className="mb-2 text-xs font-semibold text-primary">{item.date}</p>}
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
