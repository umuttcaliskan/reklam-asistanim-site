import type { Metadata } from "next";
import Link from "next/link";
import { ComparisonTable } from "@/components/marketing/ComparisonTable";
import { CtaBand } from "@/components/marketing/CtaBand";
import { PageHero } from "@/components/marketing/CtaPair";
import { PricingFull } from "@/components/marketing/PricingFull";
import { TRIAL_LABEL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Fiyatlandırma",
  description:
    "Reklam Asistanım Solo, Profesyonel ve Kurumsal. Tüm paketlerde 3 gün ücretsiz deneme. Meta Ads yakında — Pro+ öncelikli.",
  alternates: { canonical: "/fiyatlandirma" },
};

export default function FiyatlandirmaPage() {
  return (
    <>
      <PageHero
        align="center"
        eyebrow={`Tüm paketlerde ${TRIAL_LABEL}`}
        title="Fiyatlandırma"
        description="Tek markadan ajansa — ihtiyacınıza uygun paketi seçin. Meta Ads yakında; Pro ve Kurumsal’da öncelikli erişim."
      />
      <div className="pt-12">
        <PricingFull />
      </div>
      <ComparisonTable />
      <div className="mx-auto max-w-3xl px-4 pb-16 text-center sm:px-6">
        <p className="text-sm text-[var(--ink-muted)]">
          Kararsız mısınız?{" "}
          <Link href="/sss" className="font-semibold text-[var(--accent)] hover:underline">
            Sıkça sorulan sorulara
          </Link>{" "}
          göz atın veya{" "}
          <Link href="/iletisim" className="font-semibold text-[var(--accent)] hover:underline">
            toplantı planlayın
          </Link>
          .
        </p>
      </div>
      <CtaBand />
    </>
  );
}
