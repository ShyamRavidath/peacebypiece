import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SITE } from "@/lib/site";
import { TikTokIcon, InstagramIcon } from "@/components/icons";
import { ButtonLink } from "@/components/ui/button-link";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[88svh] items-center overflow-hidden">
      <Image
        src="/images/hero-classroom.jpg"
        alt="Students collaborating in a classroom"
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brown-deep/85 via-brown/65 to-brown-deep/90" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-brown-deep/70 to-transparent" />

      {/* Social rail */}
      <div className="absolute left-5 top-1/2 hidden -translate-y-1/2 flex-col items-center gap-4 md:flex">
        <Link
          href={SITE.tiktok}
          aria-label="TikTok"
          className="text-mint/80 transition-all hover:-translate-y-0.5 hover:text-cream"
        >
          <TikTokIcon className="h-5 w-5" />
        </Link>
        <Link
          href={SITE.instagram}
          aria-label="Instagram"
          className="text-mint/80 transition-all hover:-translate-y-0.5 hover:text-cream"
        >
          <InstagramIcon className="h-5 w-5" />
        </Link>
        <span className="mt-2 h-16 w-px bg-cream/30" />
      </div>

      <div className="container-px py-24">
        <div className="max-w-3xl">
          <span className="reveal inline-flex items-center gap-2 rounded-full border border-cream/25 bg-cream/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-mint backdrop-blur-sm">
            Youth-led · Portland, Oregon
          </span>
          <h1
            className="reveal text-display mt-6 text-cream"
            style={{ animationDelay: "80ms" }}
          >
            Peace by Piece
          </h1>
          <p
            className="reveal text-lead mt-5 max-w-xl text-mint/90"
            style={{ animationDelay: "160ms" }}
          >
            {SITE.tagline}. We fight for educational equity at three intersecting
            levels — systemic, educational, and direct impact.
          </p>
          <div
            className="reveal mt-9 flex flex-wrap gap-3"
            style={{ animationDelay: "240ms" }}
          >
            <ButtonLink href="/get-involved" variant="secondary" size="lg">
              Get Involved
              <ArrowRight className="h-4 w-4" />
            </ButtonLink>
            <ButtonLink
              href="/about"
              variant="outline"
              size="lg"
              className="border-cream/40 text-cream hover:border-cream hover:bg-cream/10"
            >
              Our Story
            </ButtonLink>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute inset-x-0 bottom-6 flex justify-center">
        <span className="text-[0.7rem] uppercase tracking-[0.25em] text-mint/60">
          Scroll
        </span>
      </div>
    </section>
  );
}
