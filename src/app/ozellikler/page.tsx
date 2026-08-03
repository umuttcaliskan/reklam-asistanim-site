import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/marketing/CtaBand";
import { PageHero } from "@/components/marketing/CtaPair";
import { FeaturesDeepDive } from "@/components/marketing/FeaturesDeepDive";
import { FEATURES, PRODUCT_PILLARS } from "@/lib/features";

export const metadata: Metadata = {
  title: "Özellikler",
  description:
    "Google Ads, yakında Meta Ads, organik büyüme (GSC + blog) ve otonom AI asistan — Reklam Asistanım özellikleri.",
  alternates: { canonical: "/ozellikler" },
};

export default function OzelliklerPage() {
  return (
    <>
      <PageHero
        title="Özellikler"
        description="Google ve yakında Meta reklamları, organik büyüme ve otonom AI optimizasyonu — tek panelde, kontrol sizde."
      >
        <nav className="flex flex-wrap gap-2">
          {PRODUCT_PILLARS.map((p) => (
            <Link
              key={p.id}
              href={p.href}
              className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--line)] bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-[var(--ink-muted)] transition hover:border-[var(--accent)]/40 hover:text-white"
            >
              {p.title}
              {p.badge ? (
                <span className="rounded bg-amber-400/15 px-1.5 py-0.5 text-[10px] font-semibold text-amber-300">
                  {p.badge}
                </span>
              ) : null}
            </Link>
          ))}
        </nav>
      </PageHero>

      <section className="border-b border-[var(--line)] bg-[var(--paper)]">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:px-6 md:grid-cols-2">
          {PRODUCT_PILLARS.map((p) => (
            <Link
              key={p.id}
              href={p.href}
              className="group block border-b border-[var(--line)] pb-8 last:border-b-0 md:border-b-0 md:pb-0"
            >
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-semibold text-white transition group-hover:text-[var(--accent)]">
                  {p.title}
                </h2>
                {p.badge ? (
                  <span className="rounded-full bg-amber-400/15 px-2 py-0.5 text-[11px] font-semibold text-amber-300 ring-1 ring-amber-400/20">
                    {p.badge}
                  </span>
                ) : null}
              </div>
              <p className="mt-2 text-sm leading-relaxed text-[var(--ink-muted)]">
                {p.summary}
              </p>
              <span className="mt-3 inline-block text-sm font-semibold text-[var(--accent)]">
                İncele →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <div className="border-b border-[var(--line)] bg-[var(--paper-elevated)]">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
          <h2 className="text-lg font-semibold text-white">Panel detayları</h2>
          <p className="mt-1 text-sm text-[var(--ink-muted)]">
            Modül bazında derinlemesine özellikler
          </p>
          <nav className="mt-5 flex flex-wrap gap-2">
            {FEATURES.map((f) => (
              <a
                key={f.id}
                href={`#${f.id}`}
                className="rounded-lg border border-[var(--line)] bg-[var(--paper)] px-3 py-1.5 text-xs font-medium text-[var(--ink-muted)] transition hover:border-white/20 hover:text-white"
              >
                {f.title}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <FeaturesDeepDive />
      <CtaBand />
    </>
  );
}
