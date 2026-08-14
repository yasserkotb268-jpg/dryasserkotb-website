import { Download, Mic, PenTool, Presentation } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { useReveal } from '@/hooks/useReveal';
import { lectures, presentations } from '@/data/content';
import { assetPath } from '@/lib/asset';

export default function Publications() {
  const ref = useReveal<HTMLElement>();
  return (
    <section id="publications" ref={ref} className="py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <SectionHeading
          kicker="محاضرات وعروض"
          title="محاضرات مختارة وعروض تقديمية"
          icon={PenTool}
        />

        <div className="grid gap-10 lg:grid-cols-2">
          {/* المحاضرات */}
          <div className="reveal">
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary/35 bg-primary/10 text-primary">
                <Mic className="h-5 w-5" />
              </span>
              <h3 className="font-display text-2xl font-bold text-foreground">محاضرات مختارة</h3>
            </div>
            <div className="flex flex-col gap-4">
              {lectures.map((l, i) => (
                <div
                  key={l.title}
                  className="card-glow rounded-xl border border-border bg-card p-5"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <h4 className="mb-1.5 font-bold leading-snug text-foreground">{l.title}</h4>
                  <p className="text-sm leading-relaxed text-muted-foreground">{l.axis}</p>
                </div>
              ))}
            </div>
          </div>

          {/* العروض التقديمية */}
          <div className="reveal">
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary/35 bg-primary/10 text-primary">
                <Presentation className="h-5 w-5" />
              </span>
              <h3 className="font-display text-2xl font-bold text-foreground">عروض تقديمية للمؤتمرات</h3>
            </div>
            <div className="flex flex-col gap-4">
              {presentations.map((p, i) => (
                <div
                  key={p.title}
                  className="card-glow flex items-center justify-between gap-4 rounded-xl border border-border bg-card p-5"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <div>
                    <h4 className="mb-1.5 font-bold leading-snug text-foreground">{p.title}</h4>
                    <p className="text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                  </div>
                  <a
                    href={assetPath('research', p.file)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex shrink-0 items-center gap-2 rounded-lg border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-bold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    PDF
                    <Download className="h-4 w-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
