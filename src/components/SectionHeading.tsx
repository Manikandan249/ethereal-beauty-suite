interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

const SectionHeading = ({ title, subtitle, align = "center" }: SectionHeadingProps) => {
  return (
    <div className={`mb-12 ${align === "center" ? "text-center" : "text-left"}`}>
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className={`section-subtitle mt-4 ${align === "center" ? "mx-auto" : ""}`}>{subtitle}</p>}
      <div className={`mt-4 h-px w-16 bg-primary/40 ${align === "center" ? "mx-auto" : ""}`} />
    </div>
  );
};

export default SectionHeading;
