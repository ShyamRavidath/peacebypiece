import type { SVGProps } from "react";

export function TikTokIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M16.5 3c.3 2.1 1.5 3.4 3.5 3.6v2.4c-1.2.1-2.3-.2-3.5-.9v5.6c0 4.1-3.2 6.6-6.7 5.7-2.6-.7-3.9-3.3-3.3-5.9.5-2.1 2.3-3.6 4.5-3.6.3 0 .5 0 .8.1v2.5c-.3-.1-.6-.1-.9-.1-1.1.1-1.9 1-1.9 2.1 0 1.2 1 2.1 2.1 2.1 1.2 0 2.1-.9 2.1-2.4V3h2.8z" />
    </svg>
  );
}

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}

/** Puzzle-piece brand mark — "piece by piece". */
export function PieceMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6 11a2 2 0 0 1 2-2h3.2a2.8 2.8 0 0 1 5.6 0H20a2 2 0 0 1 2 2v3.2a2.8 2.8 0 0 1 0 5.6V23a2 2 0 0 1-2 2h-3.2a2.8 2.8 0 0 0-5.6 0H8a2 2 0 0 1-2-2v-3.2a2.8 2.8 0 0 0 0-5.6V11Z"
        fill="currentColor"
      />
    </svg>
  );
}
