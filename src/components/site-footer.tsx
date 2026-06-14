import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { NAV, LEGAL, SITE } from "@/lib/site";
import { TikTokIcon, InstagramIcon, PieceMark } from "@/components/icons";

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-brown text-mint">
      <div className="container-px py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2.5 text-cream">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-cream/15">
                <PieceMark className="h-5 w-5" />
              </span>
              <span className="font-heading text-lg">{SITE.name}</span>
            </Link>
            <p className="mt-4 max-w-sm text-mint/70 leading-relaxed">
              A youth-led nonprofit piecing together the systemic education gap —
              systemic, educational, and direct impact.
            </p>
            <div className="mt-5 flex gap-3">
              <Link
                href={SITE.tiktok}
                aria-label="TikTok"
                className="grid h-10 w-10 place-items-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-cream/20"
              >
                <TikTokIcon className="h-5 w-5" />
              </Link>
              <Link
                href={SITE.instagram}
                aria-label="Instagram"
                className="grid h-10 w-10 place-items-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-cream/20"
              >
                <InstagramIcon className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-mint/60">
              Explore
            </h3>
            <ul className="mt-4 space-y-2.5">
              {NAV.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-mint/80 transition-colors hover:text-cream"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-mint/60">
              Reach Us
            </h3>
            <ul className="mt-4 space-y-3 text-mint/80">
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-ochre" />
                <a
                  href={`mailto:${SITE.email}`}
                  className="break-all transition-colors hover:text-cream"
                >
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-ochre" />
                <span>{SITE.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-cream/10 pt-6 text-xs text-mint/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Peace by Piece. All rights reserved.</p>
          <nav className="flex flex-wrap gap-x-5 gap-y-2">
            {LEGAL.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-cream"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
