import { PageHero } from "@/components/page-hero";
import { SITE } from "@/lib/site";

type Section = { heading: string; body: string };

export function LegalPage({
  title,
  intro,
  sections,
}: {
  title: string;
  intro: string;
  sections: Section[];
}) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title} description={intro} />
      <section className="container-px py-16 md:py-20">
        <div className="mx-auto max-w-3xl space-y-8">
          {sections.map((s) => (
            <div key={s.heading}>
              <h2 className="font-heading text-xl text-brown">{s.heading}</h2>
              <p className="mt-2 text-brown/75 leading-relaxed">{s.body}</p>
            </div>
          ))}
          <p className="border-t border-border pt-6 text-sm text-brown/55">
            Questions about this policy? Email{" "}
            <a
              href={`mailto:${SITE.email}`}
              className="text-green-deep underline-offset-2 hover:underline"
            >
              {SITE.email}
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
