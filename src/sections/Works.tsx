import { BookOpen, Download, Images, Lightbulb, Network, PenLine, Wrench } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useReveal } from '@/hooks/useReveal';
import { books, frameworks, models, photos } from '@/data/content';
import { assetPath } from '@/lib/asset';

const frameworkIcons = [Network, Lightbulb, BookOpen, PenLine];

export default function Works() {
  const ref = useReveal<HTMLElement>();
  return (
    <section id="works" ref={ref} className="py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <SectionHeading
          kicker="الأعمال الفكرية والكتب"
          title="أطر ونماذج من بناء الفكر، وكتب تصوغ الوعي"
          icon={BookOpen}
        />

        <Tabs defaultValue="frameworks" dir="rtl" className="reveal">
          <TabsList className="mx-auto mb-10 flex w-fit gap-1 rounded-xl border border-border bg-card p-1.5">
            <TabsTrigger
              value="frameworks"
              className="rounded-lg px-5 py-2.5 text-sm font-bold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              مشروعات وأطر فكرية
            </TabsTrigger>
            <TabsTrigger
              value="books"
              className="rounded-lg px-5 py-2.5 text-sm font-bold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              كتب ومشروعات تأليفية
            </TabsTrigger>
          </TabsList>

          <TabsContent value="frameworks">
            <div className="grid gap-6 md:grid-cols-2">
              {frameworks.map((f, i) => {
                const Icon = frameworkIcons[i % frameworkIcons.length];
                return (
                  <div
                    key={f.name}
                    className="card-glow relative overflow-hidden rounded-2xl border border-border bg-card p-7"
                  >
                    <div className="pattern-star pointer-events-none absolute inset-0 opacity-40" />
                    <div className="relative">
                      <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-primary/35 bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" />
                      </span>
                      <h3 className="mb-2 font-display text-xl font-bold text-primary" dir="auto">
                        {f.name}
                      </h3>
                      <p className="text-sm leading-[1.9] text-foreground/85">{f.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* نماذج وأدوات قابلة للتحميل */}
            <div className="mt-12">
              <div className="mb-6 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary/35 bg-primary/10 text-primary">
                  <Wrench className="h-5 w-5" />
                </span>
                <h3 className="font-display text-2xl font-bold text-foreground">
                  نماذج وأدوات قابلة للتحميل
                </h3>
              </div>
              <div className="flex flex-col gap-3">
                {models.map((m) => (
                  <div
                    key={m.file}
                    className="card-glow flex items-center justify-between gap-4 rounded-xl border border-border bg-card p-4"
                  >
                    <div>
                      <h4 className="mb-1 text-sm font-bold text-foreground">{m.name}</h4>
                      <p className="text-xs text-muted-foreground">{m.desc}</p>
                    </div>
                    <a
                      href={assetPath('models', m.file)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex shrink-0 items-center gap-1.5 rounded-lg border border-primary/40 bg-primary/10 px-3.5 py-1.5 text-xs font-bold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                    >
                      تحميل
                      <Download className="h-3.5 w-3.5" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="books">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {books.map((b) => (
                <div
                  key={b.title}
                  className="card-glow flex flex-col rounded-2xl border border-border bg-card p-6"
                >
                  <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-primary/35 bg-primary/10 text-primary">
                    <BookOpen className="h-5 w-5" />
                  </span>
                  <h3 className="mb-2 font-bold leading-snug text-foreground">{b.title}</h3>
                  <p className="mb-4 flex-1 text-sm leading-[1.85] text-muted-foreground">{b.topic}</p>
                  <span className="mt-auto inline-flex w-fit rounded-full border border-primary/35 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    {b.status}
                  </span>
                </div>
              ))}
            </div>

            {/* من مكتبة المؤلف */}
            <div className="mt-12">
              <div className="mb-6 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary/35 bg-primary/10 text-primary">
                  <Images className="h-5 w-5" />
                </span>
                <h3 className="font-display text-2xl font-bold text-foreground">من مكتبة المؤلف</h3>
              </div>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {photos.map((p) => (
                  <div
                    key={p.src}
                    className="card-glow overflow-hidden rounded-2xl border border-border bg-card"
                  >
                    <img
                      src={assetPath('photos', p.src)}
                      alt={p.alt}
                      loading="lazy"
                      className="aspect-[4/5] w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
