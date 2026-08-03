import type { Metadata } from "next";
import { ProductPageShell } from "@/components/marketing/ProductPageShell";

export const metadata: Metadata = {
  title: "Meta Ads — Yakında",
  description:
    "Facebook ve Instagram reklamları yakında Reklam Asistanım’da. Aynı AI disiplini; Pro+ öncelikli erken erişim. 3 gün deneyin veya toplantı planlayın.",
  alternates: { canonical: "/urun/meta-ads" },
};

export default function MetaAdsProductPage() {
  return (
    <ProductPageShell
      title="Meta Ads"
      badge="Yakında"
      description="Facebook ve Instagram reklamları aynı AI asistanla — erken erişimde öncelikli açılım."
      mock="ai"
      bullets={[
        "Meta Ads — yakında (canlı değil)",
        "Google ile aynı otonom öneri / onay döngüsü hedeflenir",
        "Pro ve Kurumsal paketlerde öncelikli erken erişim",
        "Şimdiden Google Ads + organik ile başlayabilirsiniz",
        "Erken erişim için toplantı veya kayıt listesi",
      ]}
      body={
        <>
          <p>
            Meta Ads entegrasyonu henüz canlı değil. Abartısız bir erken erişim yol haritası
            izliyoruz: önce Google Ads’teki otonom optimizasyon deneyimini olgunlaştırıyoruz,
            ardından Facebook ve Instagram hesaplarını aynı disipline bağlıyoruz.
          </p>
          <p>
            Profesyonel ve Kurumsal paketlerde Meta için öncelikli erişim planlanıyor. Bugün
            3 gün ücretsiz deneyerek Google tarafını kullanmaya başlayabilir veya ekibimizle
            kısa bir toplantı planlayabilirsiniz.
          </p>
        </>
      }
    />
  );
}
