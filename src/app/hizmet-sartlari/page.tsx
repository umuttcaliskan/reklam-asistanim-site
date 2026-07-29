import type { Metadata } from "next";
import { LegalDocument } from "@/components/marketing/LegalDocument";

export const metadata: Metadata = {
  title: "Hizmet Şartları",
  description:
    "Reklam Asistanım hizmet şartları — kullanım koşulları, sorumluluk sınırları ve kullanıcı yükümlülükleri.",
  alternates: { canonical: "/hizmet-sartlari" },
};

export default function HizmetSartlariPage() {
  return (
    <LegalDocument title="Hizmet Şartları" updatedAt="28 Temmuz 2026">
      <p>
        Reklam Asistanım platformunu kullanarak aşağıdaki hizmet şartlarını kabul etmiş
        olursunuz. Bu metin, platformun kullanım koşullarını, sorumluluk sınırlarını ve
        kullanıcı yükümlülüklerini açıklar.
      </p>
      <h2>1. Hizmetin kapsamı</h2>
      <p>
        Reklam Asistanım, reklam hesaplarınızı tek panelden yönetmenize, performans
        verilerini görüntülemenize ve kampanya işlemlerini gerçekleştirmenize yardımcı
        bir yazılım hizmetidir. Hizmet kapsamı zaman içinde güncellenebilir.
      </p>
      <h2>2. Hesap güvenliği</h2>
      <p>
        Hesap bilgilerinizin gizliliğini korumak sizin sorumluluğunuzdadır. Şifrenizi
        üçüncü kişilerle paylaşmayın ve şüpheli erişim durumunda derhal bizimle iletişime
        geçin.
      </p>
      <h2>3. Üçüncü taraf platformlar</h2>
      <p>
        Google Ads, Google Search Console ve Google Business Profile gibi üçüncü taraf
        hizmetlerin kendi kullanım koşulları geçerlidir. Platformumuz bu servislerle
        entegre çalışır; entegrasyonların kullanılabilirliği ilgili sağlayıcıların
        politikalarına tabidir.
      </p>
      <h2>4. Sorumluluk sınırı</h2>
      <p>
        Platform &quot;olduğu gibi&quot; sunulur. Reklam performansı, bütçe tüketimi veya
        kampanya sonuçları üzerinde doğrudan garanti verilmez. Otomasyon ve öneriler karar
        destek amaçlıdır; nihai reklam kararları kullanıcıya aittir.
      </p>
      <h2>5. Değişiklikler</h2>
      <p>
        Hizmet şartları güncellenebilir. Önemli değişiklikler platform üzerinden veya
        e-posta yoluyla bildirilebilir. Güncelleme sonrası hizmeti kullanmaya devam
        etmeniz yeni şartları kabul ettiğiniz anlamına gelir.
      </p>
    </LegalDocument>
  );
}
