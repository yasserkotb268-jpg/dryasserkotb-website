import { ArrowRight, BookOpen, Download } from 'lucide-react';
import { Link } from 'react-router';

const poster = '/posters/yk7-leadership-merit-quote.svg';

export default function LeadershipMerit() {
  return (
    <main dir="rtl" className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-5xl px-4 pb-24 pt-10 sm:px-6 md:pt-14">
        <Link to="/#posters-quotes" className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline">
          <ArrowRight className="h-4 w-4" aria-hidden="true" /> العودة إلى الموقع
        </Link>
        <div className="mb-8 border-b border-border pb-8 text-right">
          <p className="mb-3 text-sm font-bold text-primary">منصة الرصد الاستراتيجي | YK7</p>
          <h1 className="font-display text-3xl font-bold leading-relaxed sm:text-4xl">من المؤهل العلمي إلى الجدارة في قيادة الدولة</h1>
          <p className="mt-3 text-base text-muted-foreground">قراءة مؤسسية في معايير اختيار القيادات الوطنية</p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="/articles/article-academic-merit-public-leadership-yk7-2026.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-bold text-primary-foreground hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
              <BookOpen className="h-4 w-4" aria-hidden="true" />
              قراءة المقال المطوّل
            </a>
            <a href="/articles/article-academic-merit-public-leadership-yk7-2026.pdf" download className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-primary/40 px-5 py-3 text-sm font-bold text-primary hover:bg-primary/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
              <Download className="h-4 w-4" aria-hidden="true" />
              تحميل المقال PDF
            </a>
          </div>
        </div>
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          <figure className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <a href={poster} target="_blank" rel="noopener noreferrer" aria-label="مشاهدة الصورة بحجمها الكامل">
              <img src={poster} alt="اقتباس: الدولة لا تُدار بمجرد الألقاب أو تراكم المعلومات، بل من خلال مؤسسات فاعلة وقيادات جديرة بالمسؤولية" className="h-auto w-full" width="1122" height="1402" />
            </a>
          </figure>
          <article className="rounded-2xl border border-border bg-card p-5 text-right leading-[2.1] shadow-sm sm:p-8">
            <h2 className="mb-5 font-display text-2xl font-bold leading-relaxed">هل تكفي الشهادات الأكاديمية لإثبات الجدارة القيادية؟</h2>
            <p className="mb-5">في ضوء ما طُرح بشأن إعداد وتأهيل القيادات الوطنية بالأكاديمية العسكرية المصرية، تناولت في مقالي الأخير قضية أراها جديرة بالنقاش المؤسسي، وهي ضرورة التمييز بين <strong>المؤهل العلمي، والكفاءة المهنية، والجدارة القيادية.</strong></p>
            <p className="mb-5">فالدكتوراه قيمة علمية معتبرة، والخبرة المهنية رصيد مهم، والتدريب ضرورة للتطوير؛ لكن أيًّا منها لا يكفي منفردًا لإثبات القدرة على تحمل مسؤوليات القيادة.</p>
            <p className="mb-5">إن قيادة الدولة لا تقتصر على امتلاك المعرفة أو اتخاذ القرارات، وإنما تتطلب فهمًا متكاملًا للأبعاد السياسية والاقتصادية والاجتماعية والقانونية والإنسانية، وقدرة على إدارة الأزمات وتوظيف خبرات المتخصصين، مع احترام القانون والمساءلة.</p>
            <p className="mb-5">ومن هنا قدمت ضمن المقال <strong>إطارًا سباعيًا مقترحًا لتحليل الجدارة القيادية وضبط معايير اختيار القيادات الوطنية،</strong> يجمع بين المشروعية القانونية، والحوكمة المؤسسية، والمسؤولية الأخلاقية، وقياس الأثر، والفهم التكاملي، والاستشراف الاستراتيجي، وعدالة اكتشاف الكفاءات.</p>
            <p className="mb-5">وهو إطار إجرائي مقترح ضمن أعمال منصة الرصد الاستراتيجي | YK7، وليس مقياسًا علميًا معتمدًا.</p>
            <p className="mb-5 font-bold">إن الغاية ليست المفاضلة بين الأكاديميين وأصحاب الخبرات المهنية، بل الانتقال من الاكتفاء بالمؤهلات والألقاب إلى التحقق من الجدارة والقدرة على ممارسة المسؤولية.</p>
            <p className="mb-6">فالدولة تحتاج إلى مؤسسات فاعلة وقيادات قادرة على فهم الواقع، وإدارة اختلاف التخصصات والمصالح، واتخاذ قرارات تراعي الإنسان والمجتمع ومصالح الدولة في الحاضر والمستقبل.</p>
            <blockquote className="border-r-4 border-primary bg-primary/5 px-4 py-4 font-display text-lg font-bold leading-[2]">
              «والدولة لا تُدار بمجرد الألقاب أو تراكم المعلومات، وإنما من خلال مؤسسات فاعلة وقيادات تمتلك المعرفة والكفاءة والرؤية والمسؤولية، وتستطيع توظيف التخصصات المختلفة لصياغة قرارات تراعي الإنسان والمجتمع ومصالح الدولة في الحاضر والمستقبل».
            </blockquote>
            <div className="mt-7 border-t border-border pt-5 text-sm leading-8">
              <p className="font-bold">د. ياسر قطب</p>
              <p>مفكر ومحلل استراتيجي</p>
              <p>مؤسس منصة الرصد الاستراتيجي | YK7</p>
              <a href="https://dryasserkotb.com" className="font-semibold text-primary" target="_blank" rel="noopener noreferrer">dryasserkotb.com</a>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}
