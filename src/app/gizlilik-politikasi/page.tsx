import type { Metadata } from "next";
import Link from "next/link";
import { LegalDocument } from "@/components/marketing/LegalDocument";

export const metadata: Metadata = {
  title: "Gizlilik Politikası",
  description:
    "Reklam Asistanım gizlilik politikası — toplanan veriler, kullanım amaçları ve haklarınız.",
  alternates: { canonical: "/gizlilik-politikasi" },
};

export default function GizlilikPolitikasiPage() {
  return (
    <LegalDocument title="Gizlilik Politikası" updatedAt="28 Temmuz 2026">
      <p>
        Reklam Asistanım olarak kişisel verilerinizin güvenliğine önem veriyoruz. Bu
        politika, hangi verileri topladığımızı, nasıl kullandığımızı ve nasıl koruduğumuzu
        açıklar.
      </p>
      <h2>Toplanan veriler</h2>
      <ul>
        <li>Kimlik ve iletişim bilgileri (ad, soyad, e-posta, telefon)</li>
        <li>Hesap kimlik doğrulama verileri (şifre özeti, OAuth sağlayıcı kimliği)</li>
        <li>Reklam hesabı ve kampanya performans verileri (Google API entegrasyonları)</li>
        <li>Kullanım ve oturum kayıtları (güvenlik ve hizmet kalitesi için)</li>
      </ul>
      <h2>Verilerin kullanımı</h2>
      <p>
        Verileriniz hesabınızı yönetmek, platform hizmetlerini sunmak, güvenliği sağlamak
        ve yasal yükümlülükleri yerine getirmek amacıyla işlenir. Verileriniz reklam
        optimizasyonu ve raporlama için kullanılır; üçüncü taraflara satılmaz.
      </p>
      <h2>Veri saklama</h2>
      <p>
        Hesap verileri güvenli sunucularda saklanır. Oturum bilgileri ve API erişim
        tokenları endüstri standartlarına uygun şekilde korunur. Saklama politikaları
        güncellenebilir; bu sayfa buna göre revize edilir.
      </p>
      <h2>Haklarınız</h2>
      <p>
        KVKK kapsamındaki haklarınız için{" "}
        <Link href="/kvkk">KVKK Aydınlatma Metni</Link> sayfamıza bakabilir veya destek
        kanallarımızdan bize ulaşabilirsiniz.
      </p>
    </LegalDocument>
  );
}
