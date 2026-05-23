interface SectionTitleProps {
  chapter: string;
  title: string;
}

export default function SectionTitle({ chapter, title }: SectionTitleProps) {
  return (
    <div className="flex items-baseline gap-5 mb-10">
      <span className="font-display text-5xl md:text-7xl text-darkroom-accent/40 font-semibold leading-none select-none">
        {chapter}
      </span>
      <h2 className="text-sm md:text-base font-normal uppercase tracking-[0.15em] text-darkroom-text m-0 whitespace-nowrap">
        {title}
      </h2>
      <span className="flex-1 h-px bg-darkroom-border ml-2" />
    </div>
  );
}
