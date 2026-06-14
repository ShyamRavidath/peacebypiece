# Behaviors — Peace by Piece

## Interaction model: STATIC + hover

Scroll sweep: no header shrink, no scroll-triggered animations, no scroll-snap, no smooth-scroll library (native scroll). Wix entrance fade-ins exist but are non-essential; clone uses simple CSS.

Click sweep: nav links → navigate to other pages (out of scope, single-page clone). Donate/Donate Now → /support-us. Cards → respective pages. No tabs/accordions/modals.

Hover sweep:
- Nav links: subtle color/opacity change.
- Buttons (Donate, Donate Now): slight darken/opacity on hover.
- Cards: subtle lift/brighten on hover.

Responsive: original keeps desktop layout down to 390px. Clone improves: stack cards and 2-col sections to single column under 768px.

## Design tokens
- Fonts: **Fraunces** (serif) for all headings + tagline; **Lato**/sans for nav, body, labels.
- Colors:
  - brown `#463831` — headings, dark mission panel, hero text, Donate button
  - green `#4B8D77` — tagline band, CTA band, footer green bar, highlighted middle card
  - dark-green `#3E6E64` — header bar, side cards
  - mint `#EAF0E9` — light text on dark, light footer band
  - sage `#92B090`, cream `#F7F5E1` — accents
- h1 106px / h2 56–60px / h6 40px / tagline 34px / h3 20px — all Fraunces 400 (h3 700).
