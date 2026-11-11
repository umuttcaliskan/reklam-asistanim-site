import Link from "next/link";
import { FaqAccordion } from "@/components/marketing/FaqAccordion";
import { HOME_FAQ } from "@/lib/resources";

export function HomeFaq() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: HOME_FAQ.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
  return (
    <section className="bg-[var(--paper)]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">SSS</p>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-white">
            Aklınıza takılanlar
          </h2>
          <p className="mt-3 text-[var(--ink-muted)]">
            Başka bir sorunuz varsa{" "}
            <Link href="/sss" className="font-semibold text-[var(--accent)] hover:underline">
              tüm soruları
            </Link>{" "}
            inceleyin ya da bize yazın.
          </p>
        </div>
        <FaqAccordion items={HOME_FAQ} className="space-y-3" />
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
    </section>
  );
}
