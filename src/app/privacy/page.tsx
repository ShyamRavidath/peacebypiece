import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="How Peace by Piece handles the limited information you share with us."
      sections={[
        {
          heading: "What we collect",
          body: "If you email us or submit a form, we receive the contact details and message you provide. We do not sell or rent your information to anyone.",
        },
        {
          heading: "How we use it",
          body: "We use your information only to respond to inquiries, coordinate volunteering, acknowledge donations, and share updates you've asked for.",
        },
        {
          heading: "Minors",
          body: "As a youth-led organization we take student privacy seriously. We avoid collecting unnecessary personal data and seek parental consent where appropriate.",
        },
        {
          heading: "Your choices",
          body: "You can ask us to access or delete the information you've shared at any time by emailing us.",
        },
      ]}
    />
  );
}
