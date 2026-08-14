import type { LucideIcon } from 'lucide-react';

interface Props {
  kicker: string;
  title: string;
  icon?: LucideIcon;
  description?: string;
}

export default function SectionHeading({ kicker, title, icon: Icon, description }: Props) {
  return (
    <div className="reveal mx-auto mb-14 max-w-2xl text-center">
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
        {Icon && <Icon className="h-4 w-4" />}
        <span>{kicker}</span>
      </div>
      <h2 className="font-display text-3xl font-bold leading-snug text-foreground md:text-4xl">
        {title}
      </h2>
      <div className="gold-line mx-auto mt-5 h-px w-40" />
      {description && <p className="mt-5 leading-relaxed text-muted-foreground">{description}</p>}
    </div>
  );
}
