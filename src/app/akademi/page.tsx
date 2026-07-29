import type { Metadata } from "next";
import { AcademyTracks } from "@/components/marketing/AcademyTracks";
import { CtaBand } from "@/components/marketing/CtaBand";

export const metadata: Metadata = {
  title: "Akademi",
  description:
    "Reklam Asistanım Akademi: panel kullanımı, Google Ads, yapay zeka ile yönetim, blog oluşturucu ve Meta Ads video eğitim setleri.",
  alternates: { canonical: "/akademi" },
};

export default function AkademiPage() {
  return (
    <>
      <div className="border-b border-[var(--line)] bg-hero-glow">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <p className="text-xs font-semibold uppercase tracking-wider text-[var(--accent-hover)]">
            Kaynaklar
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-[var(--ink)] sm:text-4xl">
            Akademi
          </h1>
          <p className="mt-3 max-w-2xl text-[var(--ink-muted)]">
            Panel kullanımından Google Ads uzmanlığına: konu başlıklarına göre
            hazırlanmış ücretsiz video eğitim setleri.
          </p>
        </div>
      </div>
      <AcademyTracks />
      <CtaBand />
    </>
  );
}
