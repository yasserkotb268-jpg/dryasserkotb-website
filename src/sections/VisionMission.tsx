import { BookOpenCheck, BrainCircuit, HeartHandshake, Radar, Scale, Target, Workflow } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { useReveal } from '@/hooks/useReveal';

const vision = [
  'أسعى إلى الإسهام في بناء فكر علمي وإنساني متزن، يقوم على تكامل المعرفة ودقة المفاهيم، ويضع الإنسان وكرامته وحقوقه في موضع الاعتبار عند دراسة الظواهر وتقييم الممارسات واتخاذ القرارات.',
  'وأؤمن بأن قيمة المعرفة لا تتحدد بما نراكمه من معلومات أو مؤهلات أو نظريات، وإنما بقدرتنا على فهم الواقع، وتمييز الصحيح من الملتبس، ومراجعة المسلّمات، وتوظيف العلم والخبرة في تحسين حياة الإنسان وتطوير المؤسسات وحماية المصالح المشروعة للمجتمعات والدول.',
  'وتتجه رؤيتي إلى الإسهام في بناء قدرة علمية وفكرية ومؤسسية لا تكتفي بمواكبة التحولات، بل تستطيع تحليل أسبابها، واستشراف مساراتها، والمشاركة في التعامل المسؤول معها، دون أن تنفصل المعرفة عن الأخلاق، أو يتقدم الادعاء على الدليل، أو تتحول الوسائل إلى غايات.',
];

const mission = [
  'توظيف خبراتي العلمية والعملية والبحثية في الربط بين العلوم الطبيعية والإنسانية، وعلم النفس والسلوك الإنساني، والإدارة والاقتصاد والقانون والدبلوماسية، والذكاء الاصطناعي والحوكمة والجودة المؤسسية، من خلال البحث والتأليف والتعليم والاستشارة والتحليل الاستراتيجي.',
  'وأعمل على تطوير مقاربات وأطر إجرائية تساعد على ضبط المصطلحات، وفهم القضايا المركبة، وتقييم السياسات والممارسات، ومقارنة البدائل، وتحسين جودة القرار، مع التمييز الواضح بين المعرفة المستقرة في الأدبيات والاجتهادات والنماذج المقترحة التي تستلزم البحث والنقد والتحقق.',
  'وأجعل من الرصد والتحليل والاستشراف ودعم القرار مسارات متكاملة لخدمة الإنسان والمؤسسات والمجتمع، وصولًا إلى ممارسات أكثر مسؤولية وقدرة على تحقيق قيمة فعلية يمكن قياس نتائجها والتحقق من آثارها.',
];

const goals = [
  {
    title: 'تعزيز التكامل المعرفي بين العلوم والتخصصات',
    icon: BrainCircuit,
    paragraphs: [
      'الإسهام في بناء مقاربات بحثية تربط العلوم الطبيعية والطبية والنفسية والإنسانية والإدارية والقانونية والاقتصادية والتقنية والفلسفية، مع احترام خصوصية كل تخصص وحدود أدواته، بما يساعد على فهم الظواهر المركبة دون اختزال أو تعميم غير منضبط.',
    ],
  },
  {
    title: 'ضبط المصطلحات وتصحيح المفاهيم',
    icon: BookOpenCheck,
    paragraphs: [
      'العمل على مراجعة المفاهيم والمصطلحات المتداولة في العلوم والإدارة والقيادة والتكنولوجيا والفكر الإنساني، والتمييز بين دلالاتها العلمية واستعمالاتها الإجرائية والتسويقية، ومقاومة الخلط الذي قد يؤدي إلى سوء الفهم أو ضعف الممارسة أو فساد التقدير.',
    ],
  },
  {
    title: 'الارتقاء بجودة القرار والمسؤولية عن آثاره',
    icon: Scale,
    paragraphs: [
      'تطوير مقاربات تساعد الأفراد والمؤسسات وصناع القرار على التحقق من المعلومات، وفهم السياقات، وموازنة البدائل، ومراعاة المشروعية والحقوق والمصالح، مع إخضاع القرارات للمراجعة والتقييم في ضوء نتائجها وآثارها الفعلية.',
    ],
  },
  {
    title: 'تطوير الرصد والتحليل والاستشراف الاستراتيجي',
    icon: Radar,
    paragraphs: [
      'دراسة التحولات السياسية والاقتصادية والاجتماعية والمؤسسية والتكنولوجية، وتحليل عوامل التأثير وموازين القوة والمصالح، وتطوير سيناريوهات تساعد على الاستعداد للمخاطر والفرص.',
      'ويشمل ذلك تطوير مقاربتي الإجرائية «استشراف الأزمات وقيادة مساراتها قبل انفجارها»، بوصفها اتجاهًا بحثيًا وتطبيقيًا يحتاج إلى التطوير والاختبار وفق طبيعة المجالات التي يُستخدم فيها.',
    ],
  },
  {
    title: 'دعم التطوير المؤسسي والتطبيق المسؤول للتكنولوجيا',
    icon: Workflow,
    paragraphs: [
      'الإسهام في تحسين ممارسات الإدارة والقيادة والحوكمة وإدارة الجودة الشاملة، وتعزيز الاستخدام المسؤول للذكاء الاصطناعي والتحول الرقمي، مع الاهتمام بالتطبيقات في القطاعات الإنتاجية والصناعات الدوائية والتعليم والخدمات وغيرها.',
      'ويقوم هذا الهدف على التمييز بين امتلاك التكنولوجيا والقدرة على توظيفها، وبين الحصول على الشهادات والاعتمادات والتحقق من جودة الممارسة.',
    ],
  },
  {
    title: 'صون الكرامة الإنسانية وتعزيز الفهم النفسي والسلوكي والحقوقي',
    icon: HeartHandshake,
    paragraphs: [
      'الإسهام في نشر المعرفة النفسية والسلوكية المنضبطة، وتعزيز الفهم المسؤول للعلاقات الإنسانية، والتمييز بين الأنماط السلوكية والاضطرابات النفسية، ورفض الأحكام والتصنيفات المتعجلة.',
      'ويمتد هذا الهدف إلى دراسة العلاقة بين القانون وحقوق الإنسان والدبلوماسية والعدالة والمسؤولية المؤسسية، بما يعزز حماية الإنسان من سوء استخدام السلطة أو المعرفة أو التقنية.',
    ],
  },
  {
    title: 'تحويل المعرفة والجهود المؤسسية إلى أثر قابل للتحقق',
    icon: Target,
    paragraphs: [
      'تطوير ونشر الكتب والأبحاث والمقالات والمحاضرات والبرامج العلمية وأوراق السياسات والنماذج الإجرائية، ودعم التعاون العلمي والمهني والشراكات المسؤولة.',
      'مع التركيز على مراجعة الفجوة بين ما نعلنه وما نمارسه، وما نخطط له وما ننفذه، وما ننتجه من أنشطة ومخرجات وما يتحقق منها من نتائج وآثار نافعة.',
      'فالغاية ليست زيادة عدد الأعمال أو الاتفاقيات أو الفعاليات، بل تحسين جودة ما تقدمه للإنسان والمجتمع والمؤسسات.',
    ],
  },
];

export default function VisionMission() {
  const ref = useReveal<HTMLElement>();

  return (
    <section
      id="vision-mission"
      ref={ref}
      dir="rtl"
      aria-labelledby="vision-mission-heading"
      className="relative scroll-mt-20 bg-card/40 py-24"
    >
      <div className="pattern-star pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-4 md:px-8">
        <div id="vision-mission-heading">
          <SectionHeading
            kicker="رؤيتي ورسالتي وأهدافي"
            title="من المعرفة إلى الفهم المنضبط وجودة القرار والأثر القابل للتحقق"
            icon={Target}
          />
        </div>
        <p className="reveal mx-auto mb-12 max-w-4xl text-center text-base leading-[2] text-muted-foreground md:text-lg">
          مشروعي الفكري والعلمي شخصي ومفتوح للمراجعة والتطوير، وتتكامل معه منصة الرصد الاستراتيجي YK7 دون أن تختزل مجالات عملي في المنصة وحدها.
        </p>

        <div className="grid gap-6 lg:grid-cols-2">
          {[
            { title: 'رؤيتي', paragraphs: vision },
            { title: 'رسالتي', paragraphs: mission },
          ].map((item) => (
            <article key={item.title} className="reveal card-glow rounded-2xl border border-border bg-card p-7 md:p-9">
              <h3 className="mb-5 border-r-4 border-primary pr-4 font-display text-2xl font-bold text-foreground md:text-3xl">
                {item.title}
              </h3>
              <div className="space-y-4">
                {item.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 25)} className="text-base leading-[2.15] text-foreground/90">
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>

        <h3 className="reveal mb-7 mt-16 text-center font-display text-3xl font-bold text-foreground">
          أهدافي السبعة
        </h3>
        <div className="grid gap-5 md:grid-cols-2">
          {goals.map((goal, i) => {
            const Icon = goal.icon;
            return (
              <article
                key={goal.title}
                className="reveal card-glow rounded-2xl border border-border bg-card p-6 md:p-7"
                style={{ transitionDelay: `${(i % 2) * 80}ms` }}
              >
                <div className="mb-4 flex items-start gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary/35 bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <span className="mb-1 block text-xs font-bold text-primary">
                      الهدف {i + 1}
                    </span>
                    <h4 className="font-display text-xl font-bold leading-relaxed text-foreground">
                      {goal.title}
                    </h4>
                  </div>
                </div>
                <div className="space-y-3">
                  {goal.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 25)} className="text-sm leading-[2] text-foreground/85 md:text-base">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        <div className="reveal mt-12 rounded-2xl border border-primary/30 bg-primary/5 p-7 md:p-10">
          <h3 className="mb-5 font-display text-2xl font-bold text-foreground">
            المبدأ الذي يحكم عملي
          </h3>
          <p className="mb-5 text-base font-semibold leading-[2.2] text-foreground md:text-lg">
            لا أتعامل مع العلم بوصفه تراكمًا للمعلومات، ولا مع المنصب بوصفه دليلًا على الكفاءة، ولا مع الاتفاقيات والشهادات بوصفها إنجازًا مكتملًا بذاتها.
          </p>
          <p className="mb-5 text-base leading-[2.1] text-foreground/90">
            بل أرى أن المعرفة مسؤولية، وأن الاختلاف مجال للفهم والمراجعة، وأن قيمة العمل تتحدد بما يضيفه من منفعة مشروعة وما يصونه من حقوق وكرامة، وما يمكن تقديمه من أدلة على تحقق ذلك.
          </p>
          <p className="text-base leading-[2.1] text-foreground/90">
            وأحتفظ دائمًا بحق مراجعة ما أتبناه من أفكار ونماذج واجتهادات، وتصحيح ما يتبين قصوره، وتطوير ما تثبت الحاجة إلى تطويره؛ لأن الالتزام بالعلم يقتضي ألا يتحول الاجتهاد الشخصي إلى حقيقة محصنة ضد النقد.
          </p>
          <p className="mt-6 text-left font-display text-lg font-bold text-primary" dir="rtl">
            د. ياسر قطب — مؤسس ورئيس منصة الرصد الاستراتيجي | YK7
          </p>
        </div>
      </div>
    </section>
  );
}
