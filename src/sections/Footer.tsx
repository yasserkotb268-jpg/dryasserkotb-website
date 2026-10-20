import { navLinks, profile } from '@/data/content';

const moreLinks = [
  { id: 'qualifications', label: 'المؤهلات العلمية' },
  { id: 'positions', label: 'المناصب والمسؤوليات' },
  { id: 'memberships', label: 'العضويات والزمالات' },
  { id: 'expertise', label: 'مجالات الخبرة' },
  { id: 'lectures', label: 'المحاضرات' },
  { id: 'seminars', label: 'الندوات' },
  { id: 'programs', label: 'البرامج العلمية' },
  { id: 'publications', label: 'العروض والمواد المنشورة' },
];

export default function Footer() {
  return (
    <footer dir="rtl" className="border-t border-white/10 bg-[#0a0c10] text-neutral-200">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="grid gap-11 lg:grid-cols-[1.35fr_1fr_1fr]">
          <div>
            <a href="#top" className="mb-5 inline-flex items-center gap-3 rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-rose-300">
              <span dir="ltr" className="rounded-lg border border-rose-700/60 bg-neutral-950 px-3 py-2 font-sans text-xl font-black text-white">YK<span className="text-rose-400">7</span></span>
              <span className="font-display text-lg font-bold text-white">{profile.name}</span>
            </a>
            <p className="max-w-md text-sm leading-8 text-neutral-300">
              موقع معرفي ومهني يوثق الكتب والأبحاث والمقالات والمحاضرات، ويقدم أعمال منصة الرصد الاستراتيجي | <span dir="ltr" className="inline-block font-sans font-bold">YK7</span>.
            </p>
            <a href="https://dryasserkotb.com" className="mt-4 inline-block font-sans text-sm text-rose-300 hover:text-white" dir="ltr">dryasserkotb.com</a>
          </div>
          <div>
            <h2 className="mb-5 font-display text-lg font-bold text-white">الأبواب الرئيسية</h2>
            <nav className="grid grid-cols-2 gap-x-4 gap-y-3" aria-label="روابط أساسية">
              {navLinks.map((link) => <a key={link.id} href={`#${link.id}`} className="text-sm text-neutral-300 hover:text-rose-300">{link.label}</a>)}
            </nav>
          </div>
          <div>
            <h2 className="mb-5 font-display text-lg font-bold text-white">استكشف المزيد</h2>
            <nav className="grid grid-cols-2 gap-x-4 gap-y-3" aria-label="الأقسام التفصيلية">
              {moreLinks.map((link) => <a key={link.id} href={`#${link.id}`} className="text-sm text-neutral-300 hover:text-rose-300">{link.label}</a>)}
            </nav>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs leading-7 text-neutral-400">
          جميع الحقوق محفوظة © {new Date().getFullYear()} — د. ياسر سيد عبد السلام قطب
        </div>
      </div>
    </footer>
  );
}
