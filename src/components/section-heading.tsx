import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  tone?: "dark" | "light";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  tone = "dark",
}: Props) {
  const dark = tone === "dark";
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em]",
            dark ? "text-green-deep" : "text-mint/90"
          )}
        >
          <span
            className={cn(
              "h-px w-6",
              dark ? "bg-green-deep/50" : "bg-mint/50"
            )}
          />
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "text-h2 mt-3",
          dark ? "text-brown" : "text-cream"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-lead mt-4",
            dark ? "text-brown/70" : "text-mint/90"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
