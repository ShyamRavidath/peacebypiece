import { pageMeta } from "@/lib/seo";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { CtaBand } from "@/components/cta-band";
import { TEAM } from "@/lib/site";

export const metadata = pageMeta({
  title: "Meet The Team",
  description:
    "Meet the high-school students leading Peace by Piece — our Executive Board driving educational equity across Oregon.",
  path: "/team",
});

const AVATAR_TONES = [
  "bg-green text-cream",
  "bg-brown text-cream",
  "bg-green-deep text-cream",
  "bg-ochre text-brown-deep",
  "bg-sage text-brown-deep",
  "bg-clay text-cream",
];

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("");
}

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Executive Board"
        title="Meet the team piecing it together"
        description="Eight high-school students lead Peace by Piece, supported by 50+ volunteers and advisor Van Truong (BSD Board Member)."
      />

      <section className="container-px py-20 md:py-24">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((member, i) => (
            <Reveal key={member.name} delay={i * 60}>
              <article className="group h-full rounded-2xl border border-border bg-card p-6 text-center transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]">
                <div
                  className={`mx-auto grid h-20 w-20 place-items-center rounded-full font-heading text-2xl ${
                    AVATAR_TONES[i % AVATAR_TONES.length]
                  } transition-transform duration-300 group-hover:scale-105`}
                >
                  {initials(member.name)}
                </div>
                <h3 className="font-heading mt-5 text-xl text-brown">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm font-medium uppercase tracking-[0.08em] text-green-deep">
                  {member.role}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 rounded-2xl bg-mint p-7 text-center md:p-10">
          <p className="font-heading text-xl text-brown md:text-2xl">
            Want to join the board or volunteer with us?
          </p>
          <p className="mx-auto mt-2 max-w-xl text-brown/70">
            We're always looking for passionate students to help close the
            education gap.
          </p>
        </Reveal>
      </section>

      <CtaBand title="Become Part of the Team" subtitle="Apply to volunteer and help piece change together." />
    </>
  );
}
