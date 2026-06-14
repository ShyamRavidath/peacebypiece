import { Mail, MapPin, AtSign } from "lucide-react";
import { pageMeta } from "@/lib/seo";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { ContactForm } from "@/components/contact-form";
import { TikTokIcon, InstagramIcon } from "@/components/icons";
import { SITE } from "@/lib/site";

export const metadata = pageMeta({
  title: "Contact",
  description:
    "Get in touch with Peace by Piece — questions, inquiries, and opportunities welcome. Email peacebypiece.or@gmail.com.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Connect with us"
        description="Reach out with any questions, inquiries, or opportunities — we'd love to hear from you."
      />

      <section className="container-px py-20 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Info */}
          <Reveal className="space-y-4">
            <a
              href={`mailto:${SITE.email}`}
              className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-green/50"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-green/12 text-green-deep">
                <Mail className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-sm font-semibold text-brown/60">
                  Email
                </span>
                <span className="break-all text-brown">{SITE.email}</span>
              </span>
            </a>

            <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-green/12 text-green-deep">
                <AtSign className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-sm font-semibold text-brown/60">
                  Socials
                </span>
                <span className="text-brown">{SITE.socialHandle}</span>
                <span className="mt-3 flex gap-2">
                  <a
                    href={SITE.tiktok}
                    aria-label="TikTok"
                    className="grid h-9 w-9 place-items-center rounded-full bg-brown text-cream transition-opacity hover:opacity-90"
                  >
                    <TikTokIcon className="h-4 w-4" />
                  </a>
                  <a
                    href={SITE.instagram}
                    aria-label="Instagram"
                    className="grid h-9 w-9 place-items-center rounded-full bg-brown text-cream transition-opacity hover:opacity-90"
                  >
                    <InstagramIcon className="h-4 w-4" />
                  </a>
                </span>
              </span>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-green/12 text-green-deep">
                <MapPin className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-sm font-semibold text-brown/60">
                  Mailing Address
                </span>
                <span className="text-brown">{SITE.address}</span>
              </span>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={120}>
            <div className="rounded-2xl border border-border bg-card p-7 md:p-9">
              <h2 className="font-heading text-2xl text-brown">
                Send us a message
              </h2>
              <p className="mt-1 text-brown/60">
                We read everything and reply as soon as we can.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
