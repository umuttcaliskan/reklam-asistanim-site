import type { Metadata } from "next";
import { CtaBand } from "@/components/marketing/CtaBand";
import { FeaturesDeepDive } from "@/components/marketing/FeaturesDeepDive";
import { FEATURES } from "@/lib/features";

export const metadata: Metadata = {
  title: "Özellikler",
  description:
    "Yapay zeka ile kampanya yönetimi, analiz, haftalık PDF raporlar, organik büyüme, rakip analizi ve işletme profili — Reklam Asistanım özellikleri.",
  alternates: { canonical: "/ozellikler" },
};

export default function OzelliklerPage() {
  return (
    <>
      <div className="border-b border-[var(--line)] bg-hero-glow">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <h1 className="text-3xl font-bold tracking-tight text-[var(--ink)] sm:text-4xl">
            Özellikler
          </h1>
          <p className="mt-3 max-w-2xl text-[var(--ink-muted)]">
            Yapay zeka destekli kampanya yönetiminden organik büyümeye — Reklam Asistanım
            paneli ihtiyacınız olan tüm araçları bir araya getirir.
          </p>
          <nav className="mt-8 flex flex-wrap gap-2">
            {FEATURES.map((f) => (
              <a
                key={f.id}
                href={`#${f.id}`}
                className="rounded-lg border border-[var(--line)] bg-white/80 px-3 py-1.5 text-xs font-medium text-[var(--ink)] transition hover:border-emerald-200"
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
