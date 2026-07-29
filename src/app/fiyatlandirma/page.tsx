import type { Metadata } from "next";
import Link from "next/link";
import { ComparisonTable } from "@/components/marketing/ComparisonTable";
import { CtaBand } from "@/components/marketing/CtaBand";
import { PricingFull } from "@/components/marketing/PricingFull";
import { TRIAL_LABEL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Fiyatlandırma",
  description:
    "Reklam Asistanım Solo ($59), Profesyonel ($119+) ve Kurumsal paketleri. 3 gün ücretsiz deneme, paket karşılaştırma tablosu ve şeffaf fiyatlar.",
  alternates: { canonical: "/fiyatlandirma" },
};

export default function FiyatlandirmaPage() {
  return (
    <>
      <div className="border-b border-[var(--line)] bg-hero-glow">
        <div className="mx-auto max-w-6xl px-4 py-14 text-center sm:px-6 sm:py-16">
          <p className="mx-auto w-fit rounded-full border border-emerald-200 bg-white/80 px-3 py-1 text-xs font-semibold text-emerald-800">
            Tüm paketlerde {TRIAL_LABEL}
          </p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-[var(--ink)] sm:text-4xl">
            Fiyatlandırma
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-[var(--ink-muted)]">
            Tek markadan ajansa — ihtiyacınıza uygun paketi seçin, 3 gün boyunca ücretsiz
            deneyin. Fiyatlar paneldeki aboneliklerle aynıdır.
          </p>
        </div>
      </div>
      <div className="pt-12">
        <PricingFull />
      </div>
      <ComparisonTable />
      <div className="mx-auto max-w-3xl px-4 pb-16 text-center sm:px-6">
        <p className="text-sm text-[var(--ink-muted)]">
          Kararsız mısınız?{" "}
          <Link href="/sss" className="font-semibold text-[var(--accent-hover)] hover:underline">
            Sıkça sorulan sorulara
          </Link>{" "}
          göz atın veya{" "}
          <Link href="/iletisim" className="font-semibold text-[var(--accent-hover)] hover:underline">
            bizimle görüşme planlayın
          </Link>
          .
        </p>
      </div>
      <CtaBand />
    </>
  );
}
