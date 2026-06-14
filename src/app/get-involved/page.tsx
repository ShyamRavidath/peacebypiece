import Image from "next/image";
import { pageMeta } from "@/lib/seo";
import { HandHeart, Users, Megaphone, Mail } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { ButtonLink } from "@/components/ui/button-link";
import { SITE } from "@/lib/site";

export const metadata = pageMeta({
  title: "Get Involved",
  description:
    "Volunteer, donate, or partner with Peace by Piece to support educational equity for students across Oregon.",
  path: "/get-involved",
});

const WAYS = [
  {
    icon: Users,
    title: "Volunteer",
    text: "Join 50+ students at events, drives, and presentations across the Beaverton School District.",
  },
  {
    icon: HandHeart,
    title: "Donate",
    text: "Fund care packages, school supplies, and programs. We've raised nearly $2,000 — every dollar pieces it together.",
  },
  {
    icon: Megaphone,
    title: "Partner",
    text: "Organizations and advisors help us reach further. Van Truong (BSD Board) already has — you could too.",
  },
];

export default function GetInvolvedPage() {
  return (
    <>
      <PageHero
        eyebrow="Get Involved"
        title="Be a piece of the change"
        description="Whether you have an hour or a network, there's a place for you in Peace by Piece."
      />

      {/* Ways to help */}
      <section className="container-px py-20 md:py-24">
        <div className="grid gap-5 md:grid-cols-3">
          {WAYS.map((w, i) => (
            <Reveal key={w.title} delay={i * 80}>
              <div className="h-full rounded-2xl border border-border bg-card p-7">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-green/12 text-green-deep">
                  <w.icon className="h-6 w-6" />
                </span>
                <h3 className="font-heading mt-5 text-xl text-brown">
                  {w.title}
                </h3>
                <p className="mt-2 text-brown/70 leading-relaxed">{w.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Two big actions */}
      <section className="container-px pb-20 md:pb-24">
        <div className="grid gap-5 md:grid-cols-2">
          {/* Volunteer */}
          <Reveal className="flex flex-col justify-between rounded-2xl bg-brown p-10 text-cream md:p-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-ochre">
                Apply now
              </span>
              <h2 className="font-heading mt-4 text-3xl">
                Become a Volunteer
              </h2>
              <p className="mt-4 max-w-md text-mint/85 leading-relaxed">
                Passionate about education and youth well-being? Fill out our
                volunteer application and join the team.
              </p>
            </div>
            <ButtonLink
              href={`mailto:${SITE.email}?subject=Volunteer%20Application`}
              variant="secondary"
              size="lg"
              className="mt-8 w-fit"
            >
              <Mail className="h-4 w-4" />
              Volunteer Application
            </ButtonLink>
          </Reveal>

          {/* Donate */}
          <Reveal delay={120} className="relative flex flex-col justify-end overflow-hidden rounded-2xl p-10 text-cream md:p-12">
            <Image
              src="/images/hands.jpg"
              alt="Hands joined together in unity"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="-z-10 object-cover"
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-green-deep/90 via-green-deep/60 to-green-deep/30" />
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-mint">
              Support our cause
            </span>
            <h2 className="font-heading mt-4 text-3xl">Donate Today</h2>
            <p className="mt-4 max-w-md text-mint/90 leading-relaxed">
              Your gift funds supplies, care packages, and programs for students
              who need them most.
            </p>
            <ButtonLink
              href={`mailto:${SITE.email}?subject=Donation`}
              variant="primary"
              size="lg"
              className="mt-8 w-fit"
            >
              Donate Now
            </ButtonLink>
          </Reveal>
        </div>
      </section>
    </>
  );
}
