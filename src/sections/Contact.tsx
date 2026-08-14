import { Download, Facebook, Linkedin, Mail, MapPin, Phone, Youtube } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { useReveal } from '@/hooks/useReveal';
import { contact } from '@/data/content';

const socialIcons: Record<string, typeof Linkedin> = {
  LinkedIn: Linkedin,
  YouTube: Youtube,
  Facebook: Facebook,
};

export default function Contact() {
  const ref = useReveal<HTMLElement>();
  return (
    <section id="contact" ref={ref} className="relative overflow-hidden bg-card/40 py-24">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/8 blur-[130px]" />
      <div className="relative mx-auto max-w-4xl px-4 md:px-8">
        <SectionHeading
          kicker="بيانات الاتصال"
          title="للتواصل والتعاون المهني والعلمي"
          icon={Mail}
        />

        <div className="reveal rounded-3xl border border-border bg-card p-8 shadow-2xl shadow-black/40 md:p-12">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex flex-col gap-5">
              <a
                href={`mailto:${contact.email}`}
                className="group flex items-center gap-4 rounded-xl border border-border bg-background/60 p-4 transition-all hover:border-primary/50"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-primary/35 bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs text-muted-foreground">البريد الإلكتروني</p>
                  <p className="font-semibold text-foreground" dir="ltr">{contact.email}</p>
                </div>
              </a>

              <a
                href={`tel:+${contact.phone}`}
                className="group flex items-center gap-4 rounded-xl border border-border bg-background/60 p-4 transition-all hover:border-primary/50"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-primary/35 bg-primary/10 text-primary">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs text-muted-foreground">الهاتف — قطر</p>
                  <p className="font-semibold text-foreground" dir="ltr">{contact.phoneDisplay}</p>
                </div>
              </a>

              <div className="flex items-center gap-4 rounded-xl border border-border bg-background/60 p-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-primary/35 bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs text-muted-foreground">مقر العمل</p>
                  <p className="font-semibold text-foreground">{contact.location}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center gap-4">
              <p className="mb-1 text-sm font-semibold text-muted-foreground">الروابط المهنية</p>
              {contact.links.map((l) => {
                const Icon = socialIcons[l.name] ?? Linkedin;
                return (
                  <a
                    key={l.name}
                    href={l.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-glow flex items-center justify-between rounded-xl border border-border bg-background/60 px-5 py-4"
                    dir="ltr"
                  >
                    <span className="flex items-center gap-3">
                      <Icon className="h-5 w-5 text-primary" />
                      <span className="font-bold text-foreground">{l.name}</span>
                    </span>
                    <span className="text-xs text-muted-foreground transition-colors group-hover:text-primary">
                      {l.url.replace('https://', '').replace('www.', '')}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>

          <div className="mt-8 flex justify-center border-t border-border/60 pt-8">
            <a
              href="/dryasserkotb-website.zip"
              download
              className="inline-flex items-center gap-3 rounded-xl bg-primary px-8 py-4 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:brightness-110"
            >
              <Download className="h-5 w-5" />
              تحميل حزمة نشر الموقع (ZIP)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
