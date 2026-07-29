import type { Metadata } from "next";
import Link from "next/link";
import { LegalDocument } from "@/components/marketing/LegalDocument";
import { APP_URL, CONTACT_EMAIL, SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Çerez Politikası",
  description:
    "Reklam Asistanım çerez politikası — kullanılan çerez türleri, amaçları ve tercihlerinizi nasıl yöneteceğiniz.",
  alternates: { canonical: "/cerez-politikasi" },
};

export default function CerezPolitikasiPage() {
  return (
    <LegalDocument title="Çerez Politikası" updatedAt="30 Temmuz 2026">
      <p>
        {SITE_NAME} olarak kullanıcılarımızın hizmetlerimizden güvenli ve eksiksiz şekilde
        faydalanmalarını sağlamak amacıyla gizliliklerini korumak için çalışıyoruz.
      </p>

      <h2>Giriş</h2>
      <p>
        İşbu Çerez Politikası (“Politika”), {SITE_URL} internet sitesi ve {APP_URL} web
        uygulamasını (hepsi birlikte “Platform”) kapsamaktadır. Bu Politika,{" "}
        <Link href="/gizlilik-politikasi">Gizlilik Politikası</Link>’nın ayrılmaz bir
        parçasıdır.
      </p>
      <p>
        Çoğu web sitesinde olduğu gibi Platform’da; oturum yönetimi, güvenlik, analitik
        faaliyetler, kullanım alışkanlıklarının takibi ve (rıza varsa) kişiselleştirme /
        reklam ölçümü amacıyla çerezler ve benzeri teknolojiler kullanılabilir.
      </p>
      <p>
        {SITE_NAME}, hangi çerezlerin kullanıldığını ve tercihlerinizi nasıl
        yönetebileceğinizi açıklamak amacıyla bu Politikayı hazırlamıştır. Kişisel
        verilerin işlenmesine ilişkin daha detaylı bilgi için{" "}
        <Link href="/gizlilik-politikasi">Gizlilik Politikası</Link> ve{" "}
        <Link href="/kvkk">KVKK Aydınlatma Metni</Link>’ni inceleyiniz.
      </p>

      <h2>Çerez nedir?</h2>
      <p>
        Çerezler, ziyaret ettiğiniz web sitesi tarafından cihazınızda (bilgisayar,
        telefon, tablet) saklanan küçük metin veya veri dosyalarıdır. Aynı siteyi tekrar
        ziyaret ettiğinizde sunucunun sizi tanımasına yardımcı olurlar. Çerezler
        genellikle ad, adres gibi doğrudan kimlik bilgilerini içermez; ancak oturum veya
        tercihlerle ilişkilendirildiğinde kişisel veri sayılabilir.
      </p>

      <h2>Hangi çerezler kullanılmaktadır?</h2>
      <p>Platform’da aşağıdaki kategorilerde çerezler kullanılabilir:</p>
      <ul>
        <li>
          <strong>Zorunlu / teknik çerezler:</strong> Oturum yönetimi, güvenlik, yük
          dengeleme ve Platform’un temel fonksiyonlarının çalışması için gereklidir.
          Bunlar olmadan giriş, güvenlik doğrulaması veya kritik özellikler düzgün
          çalışmayabilir.
        </li>
        <li>
          <strong>İşlevsel çerezler:</strong> Dil tercihi, arayüz ayarları gibi
          kişiselleştirilmiş özellikleri hatırlamak için kullanılır.
        </li>
        <li>
          <strong>Analitik çerezler:</strong> Ziyaretçi trafiğini, sayfa kullanımını ve
          performans metriklerini ölçerek Platform’u iyileştirmeye yardımcı olur.
        </li>
        <li>
          <strong>Reklam / hedefleme çerezleri:</strong> (Kullanıldığında) kampanya
          etkinliğini ölçmek veya ilgi alanına uygun içerik sunmak için kullanılır.
          Zorunlu olmayan bu çerezler için kullanıcı rızası esastır.
        </li>
      </ul>
      <p>
        Çerezler sahiplerine göre Platform çerezleri veya üçüncü taraf çerezleri;
        sürelerine göre oturum çerezleri veya kalıcı çerezler olabilir. Üçüncü taraf
        çerezleri (ör. analitik veya ödeme sağlayıcıları) ilgili üçüncü tarafın
        politikalarına da tabidir.
      </p>

      <h2>Neden çerez kullanıyoruz?</h2>
      <ul>
        <li>Platform’un çalışması için gerekli temel fonksiyonları sağlamak</li>
        <li>
          Oturum açan üyelerin sayfalar arasında dolaşırken yeniden kimlik doğrulama
          yapmasına gerek kalmaması
        </li>
        <li>Platform performansını analiz etmek ve iyileştirmek</li>
        <li>Kullanım kolaylığı ve tercihlerin hatırlanması</li>
        <li>
          Rıza kapsamında kişiselleştirme, hedefleme ve pazarlama etkinliğinin ölçümü
        </li>
      </ul>

      <h2>Çerez tercihlerinizi nasıl yönetebilirsiniz?</h2>
      <p>
        {SITE_NAME}, zorunlu olmayan analitik ve reklam amaçlı çerezlerin kullanımında
        kullanıcı tercihlerine önem verir. Ziyaretçiler tarayıcı ayarlarını değiştirerek
        çerezleri engelleyebilir, silebilir veya çerez kullanımından önce uyarı almayı
        seçebilir. Zorunlu çerezlerin devre dışı bırakılması durumunda Platform’un bazı
        temel fonksiyonları çalışmayabilir.
      </p>
      <p>
        Çerez tercihleri cihaz ve tarayıcı bazında ayrı ayrı yönetilmelidir. Tarayıcı
        yardım sayfalarından (Chrome, Safari, Firefox, Edge vb.) çerez yönetimi
        adımlarını inceleyebilirsiniz.
      </p>
      <p>
        Platform’da çerez bilgilendirme / tercih paneli sunuluyorsa, tercihlerinizi bu
        panel üzerinden de güncelleyebilirsiniz.
      </p>

      <h2>Haklarınız</h2>
      <p>
        Ziyaretçiler 6698 sayılı KVKK uyarınca verilerinin işlenip işlenmediğini öğrenme,
        düzeltme, silme ve aktarıldığı üçüncü kişileri bilme haklarına sahiptir. Talepler
        için <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> adresine
        başvurabilirsiniz; başvurular en geç 30 gün içinde sonuçlandırılır. Ayrıntılar
        için <Link href="/gizlilik-politikasi">Gizlilik Politikası</Link>’na bakınız.
      </p>

      <h2>Değişiklikler</h2>
      <p>
        {SITE_NAME} bu Politikayı dilediği zaman güncelleyebilir. Platform’da
        yayımlandığı andan itibaren geçerlilik kazanır. Sitenin kullanılmaya devam
        edilmesi, zorunlu çerezler ve bilgilendirilmiş tercihler kapsamında güncel
        kullanıma rıza / kabul anlamına gelebilir; zorunlu olmayan çerezlerde rıza
        mekanizması saklıdır.
      </p>
    </LegalDocument>
  );
}
