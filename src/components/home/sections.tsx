import Link from "next/link";
import { ArrowUpRight, Layers, GraduationCap, HandHeart } from "lucide-react";
import { SITE, IMPACT_STATS } from "@/lib/site";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ButtonLink } from "@/components/ui/button-link";

const PILLARS = [
  {
    title: "About Us",
    sub: "Our vision and mission",
    href: "/about",
    accent: "bg-green-deep",
  },
  {
    title: "Get Involved",
    sub: "Support and volunteer",
    href: "/get-involved",
    accent: "bg-green",
    featured: true,
  },
  {
    title: "Events",
    sub: "What we've been up to",
    href: "/events",
    accent: "bg-green-deep",
  },
];

export function Pillars() {
  return (
    <section className="container-px -mt-12 relative z-10">
      <div className="grid gap-4 md:grid-cols-3">
        {PILLARS.map((p, i) => (
          <Reveal key={p.title} delay={i * 80}>
            <Link
              href={p.href}
              className={`group flex h-full flex-col justify-between rounded-2xl ${p.accent} p-7 text-cream shadow-[var(--shadow-soft)] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]`}
            >
              <div className="flex items-start justify-between">
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-mint/70">
                  {p.featured ? "Most needed" : "Explore"}
                </span>
                <ArrowUpRight className="h-5 w-5 text-cream/70 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
              <div className="mt-10">
                <h3 className="font-heading text-2xl">{p.title}</h3>
                <p className="mt-1 text-mint/80">{p.sub}</p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function MissionSplit() {
  return (
    <section className="container-px py-20 md:py-28">
      <div className="grid items-stretch gap-4 overflow-hidden rounded-2xl md:grid-cols-2">
        <Reveal className="flex flex-col justify-center bg-brown p-10 md:p-14">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-ochre">
            Piecing everything together
          </span>
          <p className="font-heading text-cream mt-5 text-3xl leading-tight md:text-[2.6rem]">
            Big change is built from{" "}
            <span className="italic text-mint">small, deliberate pieces.</span>
          </p>
        </Reveal>
        <Reveal delay={120} className="flex flex-col justify-center bg-mint p-10 md:p-14">
          <SectionHeading eyebrow="Our Mission" title="Why we exist" />
          <p className="text-lead mt-4 text-brown/75">{SITE.mission}</p>
          <ButtonLink href="/about" variant="ghost" className="mt-6 w-fit px-0">
            Read our full story →
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}

const LEVELS = [
  {
    icon: Layers,
    name: "Systemic",
    text: "Advocating for culturally responsive policy and curricula at the state and district level.",
  },
  {
    icon: GraduationCap,
    name: "Educational",
    text: "Closing access gaps for low-income and at-risk students through resources and programs.",
  },
  {
    icon: HandHeart,
    name: "Direct Impact",
    text: "Hands-on support — care packages, drives, and presentations that reach youth today.",
  },
];

export function LevelsBand() {
  return (
    <section className="bg-green-deep text-cream">
      <div className="container-px py-20 md:py-28">
        <Reveal>
          <p className="font-heading mx-auto max-w-3xl text-center text-2xl italic leading-snug md:text-[2rem]">
            “{SITE.levels}”
          </p>
        </Reveal>
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {LEVELS.map((lvl, i) => (
            <Reveal key={lvl.name} delay={i * 80}>
              <div className="h-full rounded-2xl bg-cream/5 p-7 ring-1 ring-cream/10 transition-colors hover:bg-cream/10">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-ochre/20 text-ochre">
                  <lvl.icon className="h-6 w-6" />
                </span>
                <h3 className="font-heading mt-5 text-xl">{lvl.name}</h3>
                <p className="mt-2 text-mint/80 leading-relaxed">{lvl.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ImpactTeaser() {
  return (
    <section className="container-px py-20 md:py-28">
      <div className="grid items-end gap-8 md:grid-cols-[1fr_auto]">
        <SectionHeading
          eyebrow="Our Impact"
          title="A year of youth-led action, one piece at a time"
          description="Founded in June 2024, our students have turned up at markets, shelters, and the Capitol — and the numbers keep growing."
        />
        <ButtonLink href="/about" variant="secondary" className="shrink-0">
          See the full impact →
        </ButtonLink>
      </div>
      <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
        {IMPACT_STATS.slice(0, 4).map((s, i) => (
          <Reveal key={s.label} delay={i * 70}>
            <div className="rounded-2xl border border-border bg-card p-6">
              <p className="font-heading text-4xl text-green-deep md:text-5xl">
                {s.value}
              </p>
              <p className="mt-2 text-sm text-brown/60">{s.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
