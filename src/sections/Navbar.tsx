import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks } from '@/data/content';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const closeWithEscape = (event: KeyboardEvent) => { if (event.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', closeWithEscape);
    return () => document.removeEventListener('keydown', closeWithEscape);
  }, [open]);

  return (
    <header dir="rtl" className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${scrolled || open ? 'border-white/10 bg-[#0d1016]/95 shadow-xl shadow-black/25 backdrop-blur-lg' : 'border-transparent bg-[#0d1016]/80 backdrop-blur-sm'}`}>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 md:px-8">
        <a href="#top" onClick={() => setOpen(false)} className="group flex shrink-0 items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose-300" aria-label="الصفحة الرئيسية — منصة الرصد الاستراتيجي YK7">
          <span dir="ltr" className="inline-flex h-11 items-center rounded-lg border border-rose-700/65 bg-neutral-950 px-3 font-sans text-xl font-black tracking-tight text-white">
            YK<span className="text-rose-400">7</span>
          </span>
          <span className="text-right leading-tight">
            <span className="block font-display text-base font-bold text-white">د. ياسر قطب</span>
            <span className="block text-[11px] text-neutral-300">منصة الرصد الاستراتيجي</span>
          </span>
        </a>

        <nav className="hidden items-center gap-3 lg:flex xl:gap-5" aria-label="التنقل الرئيسي">
          {navLinks.map((link) => (
            <a key={link.id} href={`#${link.id}`}
              className="whitespace-nowrap rounded px-1 py-2 text-[13px] font-semibold text-neutral-200 transition-colors hover:text-rose-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-300">
              {link.label}
            </a>
          ))}
        </nav>

        <button type="button" onClick={() => setOpen(!open)} aria-label={open ? 'إغلاق القائمة' : 'فتح القائمة'}
          aria-expanded={open} aria-controls="yk7-mobile-navigation"
          className="rounded-lg border border-white/20 p-2.5 text-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-300 lg:hidden">
          {open ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
        </button>
      </div>

      {open && (
        <nav id="yk7-mobile-navigation" className="max-h-[calc(100dvh-5rem)] overflow-y-auto border-t border-white/10 bg-[#0d1016] lg:hidden" aria-label="التنقل على الهاتف">
          <div className="mx-auto flex max-w-7xl flex-col px-5 py-3">
            {navLinks.map((link) => (
              <a key={link.id} href={`#${link.id}`} onClick={() => setOpen(false)}
                className="border-b border-white/10 py-4 text-base font-semibold text-neutral-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-300">
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
