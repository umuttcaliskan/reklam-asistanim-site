import type { Metadata } from "next";
import Link from "next/link";
import { LegalDocument } from "@/components/marketing/LegalDocument";
import { APP_URL, CONTACT_EMAIL, SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni",
  description:
    "Reklam Asistanım KVKK aydınlatma metni — veri sorumlusu, işlenen veriler, amaçlar, aktarım ve haklarınız.",
  alternates: { canonical: "/kvkk" },
};

export default function KvkkPage() {
  return (
    <LegalDocument title="KVKK Aydınlatma Metni" updatedAt="30 Temmuz 2026">
      <p>
        6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) uyarınca, veri sorumlusu
        sıfatıyla kişisel verilerinizin işlenmesine ilişkin aydınlatma metni aşağıda
        sunulmuştur. Bu metin, <Link href="/gizlilik-politikasi">Gizlilik Politikası</Link>{" "}
        ile birlikte okunmalıdır.
      </p>

      <h2>1. Veri sorumlusu</h2>
      <p>
        {SITE_NAME} (Umut Çalışkan — şahıs işletmesi)
        <br />
        E-posta: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        <br />
        Web: <a href={SITE_URL}>{SITE_URL}</a> · Uygulama:{" "}
        <a href={APP_URL}>{APP_URL}</a>
      </p>

      <h2>2. İşlenen kişisel veriler</h2>
      <ul>
        <li>Kimlik: ad, soyad</li>
        <li>İletişim: e-posta, telefon (varsa)</li>
        <li>Müşteri işlem: hesap, abonelik, Platform kullanım ve işlem kayıtları</li>
        <li>
          Reklam / işletme verileri: bağladığınız Google Ads, Search Console ve Business
          Profile hesaplarına ilişkin performans ve yönetim verileri
        </li>
        <li>
          İşlem güvenliği: IP, cihaz/tarayıcı bilgisi, oturum ve log kayıtları, OAuth /
          kimlik doğrulama verileri
        </li>
        <li>Finansal: fatura ve ödeme işlem kayıtları (kart verisi ödeme sağlayıcısında)</li>
        <li>Talep / şikayet: destek yazışmaları</li>
      </ul>

      <h2>3. İşleme amaçları</h2>
      <ul>
        <li>Üyelik kaydı, hesap yönetimi ve Hizmet sözleşmesinin ifası</li>
        <li>Reklam yönetimi, raporlama, analitik ve AI destekli özelliklerin sunulması</li>
        <li>Google API entegrasyonlarının yürütülmesi</li>
        <li>Abonelik, faturalandırma ve müşteri ilişkileri süreçleri</li>
        <li>Bilgi güvenliği, dolandırıcılık önleme ve risk yönetimi</li>
        <li>Hukuki yükümlülüklerin yerine getirilmesi</li>
        <li>
          Rıza veya meşru menfaat kapsamında iletişim, tanıtım ve ürün iyileştirme
        </li>
      </ul>

      <h2>4. Hukuki sebepler</h2>
      <p>
        Kişisel verileriniz KVKK m.5 ve m.6 kapsamında; sözleşmenin kurulması/ifası,
        hukuki yükümlülük, meşru menfaat ve gerektiğinde açık rıza hukuki sebeplerine
        dayanılarak işlenir.
      </p>

      <h2>5. Aktarım</h2>
      <p>
        Verileriniz; barındırma ve bulut altyapı sağlayıcıları, ödeme kuruluşları,
        bildirim / e-posta sağlayıcıları, destek araçları, iş ortakları ve kanunen
        yetkili kamu / özel kurumlarla, amaçla sınırlı olarak paylaşılabilir. Yurt dışı
        aktarım KVKK m.9 ve Kurul kararları çerçevesinde gerçekleştirilebilir. Google
        hizmetleri Google’ın kendi politikalarına da tabidir.
      </p>

      <h2>6. Saklama süresi</h2>
      <p>
        Veriler, işleme amacının gerektirdiği süre ve yasal saklama süreleri boyunca
        muhafaza edilir; süre sonunda silinir, yok edilir veya anonim hale getirilir.
      </p>

      <h2>7. Haklarınız (KVKK m.11)</h2>
      <p>
        Verilerinizin işlenip işlenmediğini öğrenme, bilgi talep etme, amacını öğrenme,
        aktarılan üçüncü kişileri bilme, düzeltme, silme / yok etme, işlemenin
        sınırlandırılmasını isteme, otomatik analiz sonuçlarına itiraz etme, rızayı geri
        alma ve zararın giderilmesini talep etme haklarına sahipsiniz.
      </p>
      <p>
        Başvurularınızı <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> adresine
        iletebilirsiniz. Başvurular en geç otuz (30) gün içinde sonuçlandırılır. Veri
        silme talepleri için e-posta konu satırında “Veri Silme Talebi” ifadesini
        kullanınız. Ayrıntılı silme prosedürü{" "}
        <Link href="/gizlilik-politikasi">Gizlilik Politikası</Link>’nda yer alır.
      </p>

      <h2>8. Çerezler</h2>
      <p>
        Çerez kullanımına ilişkin bilgilendirme için{" "}
        <Link href="/cerez-politikasi">Çerez Politikası</Link>’nı inceleyiniz.
      </p>
    </LegalDocument>
  );
}
