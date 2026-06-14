"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV, SITE } from "@/lib/site";
import { PieceMark } from "@/components/icons";
import { ButtonLink } from "@/components/ui/button-link";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50">
      <div
        className={cn(
          "transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
          scrolled
            ? "bg-green-deep/95 backdrop-blur-md shadow-[0_8px_30px_-16px_rgba(50,40,33,0.5)]"
            : "bg-green-deep"
        )}
      >
        <div className="container-px flex h-18 items-center justify-between gap-6 py-3">
          <Link
            href="/"
            className="flex items-center gap-2.5 text-cream transition-opacity hover:opacity-90"
          >
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-cream/15 text-cream">
              <PieceMark className="h-5 w-5" />
            </span>
            <span className="font-heading text-lg tracking-tight">
              {SITE.name}
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {NAV.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                    active
                      ? "text-cream"
                      : "text-mint/80 hover:text-cream"
                  )}
                >
                  {link.label}
                  {active && (
                    <span className="absolute inset-x-3.5 -bottom-0.5 h-0.5 rounded-full bg-ochre" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <ButtonLink
              href="/get-involved"
              variant="primary"
              size="sm"
              className="hidden sm:inline-flex"
            >
              Donate
            </ButtonLink>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="grid h-10 w-10 place-items-center rounded-xl text-cream transition-colors hover:bg-cream/10 lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={cn(
            "overflow-hidden border-t border-cream/10 transition-[max-height,opacity] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden",
            open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <nav className="container-px flex flex-col gap-1 py-4">
            {NAV.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-xl px-4 py-3 text-sm font-medium transition-colors",
                    active
                      ? "bg-cream/10 text-cream"
                      : "text-mint/80 hover:bg-cream/5 hover:text-cream"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
            <ButtonLink href="/get-involved" size="md" className="mt-2 sm:hidden">
              Donate
            </ButtonLink>
          </nav>
        </div>
      </div>
    </header>
  );
}
