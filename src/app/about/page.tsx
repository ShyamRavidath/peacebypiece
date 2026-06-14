import { Check } from "lucide-react";
import { pageMeta } from "@/lib/seo";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { CtaBand } from "@/components/cta-band";
import { SITE, IMPACT_STATS, IMPACT_HIGHLIGHTS, PROBLEM } from "@/lib/site";

export const metadata = pageMeta({
  title: "About",
  description:
    "Founded in June 2024, Peace by Piece is a youth-led nonprofit closing the systemic education gap across Portland and Beaverton, Oregon.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Impact"
        title="A youth-led movement, built one piece at a time"
        description="Founded in June 2024, we've spent just over a year turning up for educational equity — at markets, shelters, and the Oregon State Capitol."
      />

      {/* Stats */}
      <section className="container-px py-20 md:py-24">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {IMPACT_STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 60}>
              <div className="h-full rounded-2xl border border-border bg-card p-6">
                <p className="font-heading text-4xl text-green-deep">
                  {s.value}
                </p>
                <p className="mt-2 text-sm text-brown/60">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Highlights */}
      <section className="container-px pb-20 md:pb-24">
        <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="What we've done"
            title="Real work, real results"
            description="From bracelets for children to school-supply drives with Family Promise — here's a snapshot of our first year."
          />
          <ul className="space-y-4">
            {IMPACT_HIGHLIGHTS.map((item, i) => (
              <Reveal as="li" key={i} delay={i * 50}>
                <div className="flex gap-4 rounded-2xl border border-border bg-card p-5">
                  <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-green/15 text-green-deep">
                    <Check className="h-4 w-4" />
                  </span>
                  <p className="text-brown/80 leading-relaxed">{item}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Problem + Mission */}
      <section className="bg-mint">
        <div className="container-px grid gap-12 py-20 md:grid-cols-2 md:py-28">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-clay">
              The problem
            </span>
            <p className="font-heading mt-4 text-2xl leading-snug text-brown md:text-3xl">
              {PROBLEM}
            </p>
          </Reveal>
          <Reveal delay={120} className="flex flex-col justify-center">
            <SectionHeading eyebrow="Our Mission" title="What we fight for" />
            <p className="text-lead mt-4 text-brown/75">{SITE.mission}</p>
            <p className="mt-4 italic text-green-deep">“{SITE.levels}”</p>
          </Reveal>
        </div>
      </section>

      <CtaBand title="Support Our Cause Today" />
    </>
  );
}
