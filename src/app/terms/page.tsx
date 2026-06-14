import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = { title: "Terms & Conditions" };

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      intro="The basics for using the Peace by Piece website and engaging with our programs."
      sections={[
        {
          heading: "Use of this site",
          body: "This website is provided by Peace by Piece, a youth-led nonprofit, for informational purposes. By using it you agree to use the content lawfully and not to misrepresent your affiliation with the organization.",
        },
        {
          heading: "Donations & volunteering",
          body: "Donations support our programs and operations. Volunteer participation is subject to our guidelines and, where applicable, parental consent for minors. We reserve the right to decline participation that conflicts with our mission or safety standards.",
        },
        {
          heading: "Content & intellectual property",
          body: "Text, graphics, and the Peace by Piece name and mark are the property of the organization. Please ask before reusing our materials.",
        },
        {
          heading: "Changes",
          body: "We may update these terms as the organization grows. Continued use of the site means you accept the current version.",
        },
      ]}
    />
  );
}
