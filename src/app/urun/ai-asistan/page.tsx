import type { Metadata } from "next";
import { ProductPageShell } from "@/components/marketing/ProductPageShell";

export const metadata: Metadata = {
  title: "AI Asistan",
  description:
    "Hesabınıza özel AI asistan: otonom izleme, öneri listesi ve onaylı aksiyonlar. Reklam Asistanım — 3 gün ücretsiz deneyin.",
  alternates: { canonical: "/urun/ai-asistan" },
};

export default function AiAsistanProductPage() {
  return (
    <ProductPageShell
      title="AI Asistan"
      description="Hesabınıza sorun; otonom öneriler ve onaylı aksiyonlarla ilerleyin."
      mock="ai"
      bullets={[
        "Panel içi sohbet asistanı",
        "Otonom izleme ve önceliklendirilmiş aksiyon listesi",
        "Öneriler onayınız olmadan uygulanmaz",
        "Kampanya, bütçe ve arama terimi bağlamı",
        "Organik / blog ile aynı AI kotası ekosistemi",
      ]}
      body={
        <>
          <p>
            Yapay zeka hesabınızı 7/24 tarar; boşa harcayan terimleri, bütçe kaymalarını ve
            teklif fırsatlarını otonom listeler. Siz onayladığınızda aksiyon uygulanır —
            otonom optimizasyon, kontrol sizde.
          </p>
          <p>
            Asistana doğal dilde sorun: “Bu hafta ROAS neden düştü?”, “Negatif ekleyelim mi?”
            Yanıtlar bağlı hesap verinize dayanır; kör tahmin değil, hesap bağlamı.
          </p>
        </>
      }
    />
  );
}
