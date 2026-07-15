import OrnamentDivider from "./OrnamentDivider";

export default function SectionHeading({
  title,
  subtitle,
  ornament = "star",
  align = "center",
}: {
  title: string;
  subtitle?: string;
  ornament?: "star" | "cross" | "rose";
  align?: "center" | "left";
}) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-3 ${alignClass}`}>
      {align === "center" && (
        <OrnamentDivider variant={ornament} className="w-full max-w-xs" />
      )}
      <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-bone tracking-[0.06em]">
        {title}
      </h2>
      {subtitle && (
        <p className="font-serif text-lg sm:text-xl text-gold-500 italic max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
