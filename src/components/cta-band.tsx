import { ButtonLink } from "@/components/ui/button-link";
import { Reveal } from "@/components/reveal";

type Props = {
  title?: string;
  subtitle?: string;
};

export function CtaBand({
  title = "Join Our Cause",
  subtitle = "Support educational equity — every piece counts.",
}: Props) {
  return (
    <section className="container-px py-20 md:py-28">
      <Reveal className="relative overflow-hidden rounded-2xl bg-green px-8 py-14 text-center md:px-16 md:py-20">
        {/* soft decorative pieces */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full bg-cream/10 blur-2xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-12 -left-8 h-48 w-48 rounded-full bg-brown/15 blur-2xl"
        />
        <div className="relative mx-auto max-w-2xl">
          <h2 className="text-h1 text-cream">{title}</h2>
          <p className="text-lead mx-auto mt-4 max-w-xl text-mint/90">
            {subtitle}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ButtonLink href="/get-involved" variant="primary" size="lg">
              Donate Now
            </ButtonLink>
            <ButtonLink
              href="/get-involved"
              variant="outline"
              size="lg"
              className="border-cream/40 text-cream hover:border-cream hover:bg-cream/10"
            >
              Become a Volunteer
            </ButtonLink>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
