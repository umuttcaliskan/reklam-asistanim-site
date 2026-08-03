import type { Metadata } from "next";
import { AcademyTracks } from "@/components/marketing/AcademyTracks";
import { CtaBand } from "@/components/marketing/CtaBand";
import { PageHero } from "@/components/marketing/CtaPair";

export const metadata: Metadata = {
  title: "Akademi",
  description:
    "Reklam Asistanım Akademi: panel kullanımı, Google Ads, otonom AI, blog oluşturucu ve Meta Ads video eğitim setleri.",
  alternates: { canonical: "/akademi" },
};

export default function AkademiPage() {
  return (
    <>
      <PageHero
        eyebrow="Kaynaklar"
        title="Akademi"
        description="Panel kullanımından Google Ads uzmanlığına: konu başlıklarına göre hazırlanmış ücretsiz video eğitim setleri."
      />
      <AcademyTracks />
      <CtaBand />
    </>
  );
}
