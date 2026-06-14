import { CalendarDays, MapPin, ArrowRight } from "lucide-react";
import { pageMeta } from "@/lib/seo";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { CtaBand } from "@/components/cta-band";
import { ButtonLink } from "@/components/ui/button-link";
import { EVENTS } from "@/lib/site";

export const metadata = pageMeta({
  title: "Events",
  description:
    "Ongoing, upcoming, and past events from Peace by Piece — from Youth Lobby Day at the Oregon State Capitol to community drives and care packages.",
  path: "/events",
});

export default function EventsPage() {
  const featured = EVENTS.filter((e) => e.status !== "past");
  const past = EVENTS.filter((e) => e.status === "past");

  return (
    <>
      <PageHero
        eyebrow="Events"
        title="What we've been up to"
        description="Showing up where it counts — markets, shelters, fun runs, and the Capitol. Here's where we've been and where we're headed."
      />

      {/* Featured / upcoming */}
      <section className="container-px py-20 md:py-24">
        <SectionHeading
          eyebrow="Ongoing & Future"
          title="Coming up next"
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {featured.map((e, i) => (
            <Reveal key={e.title} delay={i * 90}>
              <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]">
                <div className="flex items-center gap-2 text-sm font-semibold text-clay">
                  <span className="rounded-full bg-clay/12 px-3 py-1 text-xs uppercase tracking-[0.12em]">
                    {e.status === "featured" ? "Featured" : "Upcoming"}
                  </span>
                </div>
                <h3 className="font-heading mt-4 text-2xl text-brown">
                  {e.title}
                </h3>
                <p className="mt-2 flex items-center gap-2 text-sm text-brown/60">
                  <CalendarDays className="h-4 w-4 text-green-deep" />
                  {e.date}
                </p>
                {e.description && (
                  <p className="mt-4 text-brown/75 leading-relaxed">
                    {e.description}
                  </p>
                )}
                {e.status === "featured" && (
                  <ButtonLink
                    href="/contact"
                    variant="secondary"
                    size="sm"
                    className="mt-6 w-fit"
                  >
                    I'm interested
                    <ArrowRight className="h-4 w-4" />
                  </ButtonLink>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Past timeline */}
      <section className="bg-mint">
        <div className="container-px py-20 md:py-24">
          <SectionHeading eyebrow="Past Events" title="Where we've shown up" />
          <ol className="mt-10 relative border-l border-green/30 pl-8">
            {past.map((e, i) => (
              <Reveal as="li" key={e.title} delay={i * 60} className="mb-8 last:mb-0">
                <span className="absolute -left-[9px] mt-1.5 grid h-4 w-4 place-items-center rounded-full border-2 border-green bg-mint" />
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <h3 className="font-heading text-xl text-brown">{e.title}</h3>
                  <span className="flex items-center gap-1.5 text-sm text-brown/55">
                    <MapPin className="h-3.5 w-3.5 text-green-deep" />
                    {e.date}
                  </span>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand
        title="Join Us in Making a Difference"
        subtitle="Volunteer at our next event or help bring a new one to life."
      />
    </>
  );
}
