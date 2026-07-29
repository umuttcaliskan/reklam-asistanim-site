import type { Metadata } from "next";
import { LegalDocument } from "@/components/marketing/LegalDocument";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni",
  description:
    "Reklam Asistanım KVKK aydınlatma metni — veri sorumlusu, işlenen veriler, amaçlar ve haklarınız.",
  alternates: { canonical: "/kvkk" },
};

export default function KvkkPage() {
  return (
    <LegalDocument title="KVKK Aydınlatma Metni" updatedAt="28 Temmuz 2026">
      <p>
        6698 sayılı Kişisel Verilerin Korunması Kanunu (&quot;KVKK&quot;) uyarınca, veri
        sorumlusu sıfatıyla kişisel verilerinizin işlenmesine ilişkin aydınlatma metni
        aşağıda sunulmuştur.
      </p>
      <h2>Veri sorumlusu</h2>
      <p>
        Reklam Asistanım (iletişim: destek talebi formu veya kayıtlı e-posta adresleri)
      </p>
      <h2>İşlenen kişisel veriler</h2>
      <p>
        Kimlik (ad, soyad), iletişim (e-posta, telefon), müşteri işlem bilgileri (reklam
        hesap ve kampanya verileri), işlem güvenliği (oturum, IP, log kayıtları) ve kimlik
        doğrulama verileri.
      </p>
      <h2>İşleme amaçları</h2>
      <p>
        Hizmet sözleşmesinin ifası, bilgi güvenliği, meşru menfaatlerimizin korunması,
        yasal yükümlülüklerin yerine getirilmesi ve kullanıcı taleplerinin yanıtlanması.
      </p>
      <h2>Haklar</h2>
      <p>
        KVKK md. 11 kapsamında verilerinizin işlenip işlenmediğini öğrenme, düzeltme,
        silme, aktarılan üçüncü kişileri bilme ve itiraz etme haklarına sahipsiniz.
        Taleplerinizi platform içi destek kanalı üzerinden iletebilirsiniz.
      </p>
    </LegalDocument>
  );
}
