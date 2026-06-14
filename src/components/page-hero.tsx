type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function PageHero({ eyebrow, title, description }: Props) {
  return (
    <section className="relative overflow-hidden bg-green-deep text-cream">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-cream/5 blur-2xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 left-1/3 h-72 w-72 rounded-full bg-ochre/10 blur-3xl"
      />
      <div className="container-px relative py-20 md:py-28">
        {eyebrow && (
          <span className="reveal inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-ochre">
            <span className="h-px w-6 bg-ochre/60" />
            {eyebrow}
          </span>
        )}
        <h1
          className="reveal text-h1 mt-4 max-w-3xl text-cream"
          style={{ animationDelay: "60ms" }}
        >
          {title}
        </h1>
        {description && (
          <p
            className="reveal text-lead mt-5 max-w-2xl text-mint/90"
            style={{ animationDelay: "120ms" }}
          >
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
