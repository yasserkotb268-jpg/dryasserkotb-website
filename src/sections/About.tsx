import { Compass, GitBranch, Landmark, Quote } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { useReveal } from '@/hooks/useReveal';
import { profile } from '@/data/content';

const highlights = [
  { icon: Compass, title: 'جودة القرار', desc: 'ترشيد القرار الفردي والمؤسسي وبناء بوصلته المنهجية.' },
  { icon: Landmark, title: 'الحوكمة والتحول المؤسسي', desc: 'نماذج تطبيقية للحوكمة وإدارة التغيير ونضج العمليات.' },
  { icon: GitBranch, title: 'المسار البيني', desc: 'تكامل إدارة الأعمال والذكاء الاصطناعي وعلم النفس والسلوك.' },
];

export default function About() {
  const ref = useReveal<HTMLElement>();
  return (
    <section id="about" ref={ref} className="relative py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <SectionHeading
          kicker="نبذة مهنية"
          title="مسار علمي ومهني بيني يحوّل المعرفة إلى أطر قابلة للتطبيق"
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
                src="/photos/library-portrait.png"
                alt="د. ياسر قطب في مكتبته"
                className="h-64 w-full object-cover object-top"
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
      </div>
    </section>
  );
}
