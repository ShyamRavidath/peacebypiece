import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = { title: "Accessibility Statement" };

export default function AccessibilityPage() {
  return (
    <LegalPage
      title="Accessibility Statement"
      intro="Peace by Piece is committed to making our work and our website usable by everyone."
      sections={[
        {
          heading: "Our commitment",
          body: "We strive to meet WCAG 2.1 AA guidance: sufficient color contrast, keyboard-navigable controls, descriptive alt text, and respect for reduced-motion preferences.",
        },
        {
          heading: "Ongoing effort",
          body: "Accessibility is never finished. We review the site as we add content and welcome feedback that helps us do better.",
        },
        {
          heading: "Need help?",
          body: "If you encounter a barrier or need information in another format, contact us and we'll work to provide it promptly.",
        },
      ]}
    />
  );
}
