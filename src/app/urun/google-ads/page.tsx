import type { Metadata } from "next";
import { ProductPageShell } from "@/components/marketing/ProductPageShell";

export const metadata: Metadata = {
  title: "Google Ads",
  description:
    "Google Ads kampanya yönetimi ve otonom AI optimizasyonu — bütçe, teklif, arama terimleri; onayınızla uygulanır. 3 gün ücretsiz deneyin.",
  alternates: { canonical: "/urun/google-ads" },
};

export default function GoogleAdsProductPage() {
  return (
    <ProductPageShell
      title="Google Ads"
      description="Kampanya kurulumundan otonom optimizasyona — Google Ads derinliği tek panelde, kontrol sizde."
      mock="campaigns"
      bullets={[
        "Arama, PMax, Alışveriş, Video ve Display kampanyaları",
        "AI ile kampanya kurulumu ve brief’ten taslak",
        "Otonom öneriler: bütçe, teklif, negatif arama terimleri",
        "Haftalık PDF performans raporu",
        "Anahtar kelime, uzantı ve envanter yönetimi",
      ]}
      body={
        <>
          <p>
            Reklam Asistanım, bağlı Google Ads hesabınızı sürekli izler. Boşa giden arama
            terimleri, bütçe kaymaları ve teklif fırsatları otonom listelenir; siz onayladığınızda
            uygulanır — “otonom optimizasyon, kontrol sizde”.
          </p>
          <p>
            Manuel sihirbaz veya AI brief ile kampanya kurun; KPI’ları, günlük trendleri ve
            kanal kırılımını aynı panelde görün. Ajans ve KOBİ ekipleri için çoklu hesap
            desteği paketlere göre ölçeklenir.
          </p>
        </>
      }
    />
  );
}
