import type { Metadata } from "next";
import { Fraunces, Lato } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SITE_URL } from "@/lib/site";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Peace By Piece | Youth-Led Nonprofit | Portland OR",
    template: "%s | Peace by Piece",
  },
  description:
    "Peace by Piece is a youth-led nonprofit piecing together the systemic education gap through systemic, educational, and direct impact across Portland and Beaverton, Oregon.",
  applicationName: "Peace by Piece",
  keywords: [
    "Peace by Piece",
    "youth-led nonprofit",
    "educational equity",
    "Portland Oregon nonprofit",
    "Beaverton",
    "student well-being",
    "volunteer",
    "donate",
  ],
  authors: [{ name: "Peace by Piece" }],
  creator: "Peace by Piece",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Peace by Piece",
    title: "Peace By Piece | Youth-Led Nonprofit | Portland OR",
    description:
      "A youth-led nonprofit piecing together the systemic education gap — systemic, educational, and direct impact.",
    url: SITE_URL,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Peace By Piece | Youth-Led Nonprofit | Portland OR",
    description:
      "A youth-led nonprofit piecing together the systemic education gap.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  verification: {
    google: "cmgLdbOZvlPfYRUfy7ONAF3-2jHnOnAvqYeeGRk9MsE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${lato.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
