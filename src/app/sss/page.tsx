import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/marketing/CtaBand";
import { PageHero } from "@/components/marketing/CtaPair";
import { FaqAccordion } from "@/components/marketing/FaqAccordion";

export const metadata: Metadata = {
  title: "Sıkça Sorulan Sorular",
  description:
    "Otonom AI optimizasyon, 3 gün ücretsiz deneme, Meta Ads zamanlaması, toplantı ve güvenlik — Reklam Asistanım SSS.",
  alternates: { canonical: "/sss" },
};

export default function SssPage() {
  return (
    <>
      <PageHero
        eyebrow="Kaynaklar"
        title="Sıkça Sorulan Sorular"
        description={
          <>
            Cevabını bulamadığınız sorular için{" "}
            <Link href="/iletisim" className="font-medium text-[var(--accent)] hover:underline">
              iletişim sayfamızdan
            </Link>{" "}
            bize ulaşabilirsiniz.
          </>
        }
      />
      <FaqAccordion />
      <CtaBand />
    </>
  );
}
