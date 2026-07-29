import type { Metadata } from "next";
import Link from "next/link";
import { LegalDocument } from "@/components/marketing/LegalDocument";
import { APP_URL, CONTACT_EMAIL, SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gizlilik Politikası",
  description:
    "Reklam Asistanım gizlilik politikası — işlenen kişisel veriler, amaçlar, aktarım, saklama ve KVKK haklarınız.",
  alternates: { canonical: "/gizlilik-politikasi" },
};

export default function GizlilikPolitikasiPage() {
  return (
    <LegalDocument title="Gizlilik Politikası" updatedAt="30 Temmuz 2026">
      <p>
        Kullanıcılarımızın hizmetlerimizden tam ve güvenli olarak faydalanmalarını
        sağlamak amacıyla {SITE_NAME} olarak kullanıcılarımızın gizliliğini korumak için
        çalışıyoruz.
      </p>

      <h2>Giriş</h2>
      <p>
        Bu Gizlilik Politikası (“Politika”), kullanıcılarımızın kişisel verilerinin 6698
        sayılı Kişisel Verilerin Korunması Kanunu (“Kanun” / “KVKK”) ile uyumlu şekilde
        işlenmesi ve kullanıcılarımızı bu bağlamda bilgilendirmek amacıyla hazırlanmıştır.{" "}
        <Link href="/cerez-politikasi">Çerez Politikası</Link> işbu Politika’nın ayrılmaz
        parçasıdır. Detaylı aydınlatma için ayrıca{" "}
        <Link href="/kvkk">KVKK Aydınlatma Metni</Link> sayfamızı inceleyebilirsiniz.
      </p>
      <p>
        {SITE_NAME} tarafından işletilmekte olan web uygulaması ({APP_URL}) ve pazarlama
        sitesi ({SITE_URL}) (hepsi birlikte “Platform” olarak anılacaktır) işletilmesi
        sırasında Platform üyeleri, ziyaretçileri ve kullanıcıları (hepsi birlikte “Veri
        Sahibi” olarak anılacaktır) tarafından {SITE_NAME} ile paylaşılan veya{" "}
        {SITE_NAME}’ın Veri Sahibi’nin Platform’u kullanımı sırasında ürettiği kişisel
        verilerin kullanımına ilişkin koşul ve şartları tespit etmektir.
      </p>
      <p>
        Veri sorumlusu: {SITE_NAME} (Umut Çalışkan — şahıs işletmesi). İletişim:{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
      </p>

      <h2>1. İşlenen veriler</h2>
      <p>
        {SITE_NAME} tarafından işlenen ve Kanun tarafından kişisel veri sayılan veriler
        aşağıda sıralanmıştır. Aksinin açıkça belirtilmediği takdirde işbu Politikada
        “kişisel veri” ifadesi aşağıdaki bilgileri kapsar:
      </p>
      <ul>
        <li>
          <strong>Kimlik bilgileri:</strong> ad, soyad
        </li>
        <li>
          <strong>İletişim bilgileri:</strong> e-posta adresi, telefon numarası (varsa)
        </li>
        <li>
          <strong>Kullanıcı bilgileri:</strong> hesap kimliği, profil tercihleri, abonelik
          durumu
        </li>
        <li>
          <strong>Kimlik doğrulama bilgileri:</strong> şifre özeti, Google OAuth kimliği,
          oturum belirteçleri
        </li>
        <li>
          <strong>Kullanıcı işlem bilgileri:</strong> Platform üzerindeki işlemler,
          kampanya ve hesap yönetimi kayıtları
        </li>
        <li>
          <strong>Reklam ve performans verileri:</strong> Google Ads, Google Search Console
          ve Google Business Profile API’leri üzerinden bağladığınız hesaplara ait
          kampanya, anahtar kelime, reklam, raporlama ve benzeri işletme verileri
        </li>
        <li>
          <strong>İşlem güvenliği bilgileri:</strong> IP adresi, cihaz/tarayıcı bilgisi,
          log kayıtları, güvenlik olayları
        </li>
        <li>
          <strong>Finansal bilgiler:</strong> abonelik ve ödeme işlemine ilişkin fatura /
          işlem kayıtları (kart verileri ödeme sağlayıcısı tarafından işlenir; kart numarası
          Platform’da saklanmaz)
        </li>
        <li>
          <strong>Pazarlama bilgileri:</strong> iletişim tercihleri, kampanya etkileşimleri
          (açık rıza veya meşru menfaat kapsamında)
        </li>
        <li>
          <strong>Talep / şikayet yönetimi bilgileri:</strong> destek talepleri ve
          yazışmalar
        </li>
      </ul>
      <p>
        Kanun’un 3. ve 7. maddeleri uyarınca anonim hale getirilen ve geri
        döndürülemeyen veriler kişisel veri sayılmaz; bu verilere ilişkin işlemler işbu
        Politika hükümleriyle bağlı olmaksızın yürütülebilir.
      </p>

      <h2>2. Kişisel veri işleme amaçları</h2>
      <p>
        Veri Sahibi’nce sağlanan veya kayıt formları, elektronik iletişim araçları,
        otomatik sistemler ile çerez ve izleme teknolojileri gibi yöntemlerle toplanan
        kişisel veriler; {SITE_NAME} tarafından üyelik kaydı ve hesabın oluşturulması,
        kayıtların tutulması, Veri Sahibi’nin Platform üzerinden sunulan hizmetlerden
        (reklam yönetimi, raporlama, analitik, yapay zeka destekli öneriler ve otomasyon
        dahil) faydalandırılması, Google hesaplarının bağlanması ve API erişiminin
        yönetilmesi, sistem hatalarının tespiti, performans takibi, Platform’un
        iyileştirilmesi, bakım, destek ve yedekleme hizmetlerinin sunulması, abonelik ve
        faturalandırma süreçlerinin yürütülmesi, bilgi güvenliği ve hukuki
        yükümlülüklerin yerine getirilmesi amaçlarıyla işlenir.
      </p>
      <p>
        Bu süreçte {SITE_NAME}, kişisel verilerin yetkisiz erişimine karşı gerekli teknik
        ve idari tedbirleri alır. Hizmetlerin kullanım alışkanlıklarına göre
        özelleştirilmesi, tanıtım faaliyetlerinin planlanması ve kullanıcı deneyiminin
        iyileştirilmesi amaçlarıyla da veriler işlenebilir; zorunlu olmayan çerezler için
        kullanıcı rızası alınır. Ayrıntılar için{" "}
        <Link href="/cerez-politikasi">Çerez Politikası</Link>’na bakınız.
      </p>
      <p>
        Kişisel veriler; faaliyetlerin yürütülmesi, stratejilerin planlanması,{" "}
        {SITE_NAME} ve iş ilişkisi içinde bulunduğu kişilerin hukuki, teknik ve ticari
        iş güvenliğinin temini ile güvenlik ve risk analizleri amacıyla ilgili mevzuata
        uygun olarak iş ortakları ve yetkili kurumlarla paylaşılabilir. Bu Politika
        gerektiğinde güncellenir; güncel hali Platform’da yayımlanır.
      </p>

      <h2>3. Açık rıza kapsamında işlenebilecek veriler</h2>
      <p>
        {SITE_NAME}, Veri Sahibi’nin açık rızası kapsamında Platform üzerindeki
        hareketlerin takibi, istatistik oluşturulması, profilleme, doğrudan pazarlama ve
        yeniden pazarlama, Veri Sahibi’ne özel önerilerin oluşturulması ve iletilmesi
        amacıyla veri işleyebilir ve bu Politika’da anılan taraflarla paylaşabilir. Rıza,
        Kanun’da öngörülen usulle geri alınabilir.
      </p>

      <h2>4. Kişisel verilerin aktarımı</h2>
      <p>
        {SITE_NAME}, Veri Sahibi’ne ait kişisel verileri ve bu verilerden türetilen
        yeni verileri, işbu Politika’da belirlenen amaçların gerçekleştirilebilmesi için
        hizmet aldığı üçüncü kişilere, hizmetin temini amacıyla sınırlı olmak üzere
        aktarabilir. Bu kapsamda barındırma (hosting) ve bulut altyapı sağlayıcıları,
        ödeme kuruluşları, e-posta / SMS bildirim sağlayıcıları, analitik hizmet
        sağlayıcıları, destek araçları ve benzeri dış kaynak hizmet sağlayıcıları yer
        alabilir.
      </p>
      <p>
        Kişisel veriler, Kanun’un 8. ve 9. maddelerinde belirtilen şartlar çerçevesinde
        iş ortakları, tedarikçiler, kanunen yetkili kamu kurum ve kuruluşları ile
        kanunen yetkili özel kurumlarla paylaşılabilecek; bu amaçlarla sınırlı olarak ve
        Kanun m.9 ile Kişisel Verileri Koruma Kurulu kararları çerçevesinde yurt dışına
        aktarılabilecektir (örneğin bulut altyapısı Avrupa / ABD bölgesinde olabilir).
      </p>
      <p>
        Google Ads, Google Search Console, Google Business Profile ve Google OAuth
        hizmetleri Google LLC / Google Ireland Limited tarafından sunulur; bu
        entegrasyonlar üzerinden erişilen verilere Google’ın kendi gizlilik politikaları
        da uygulanır.
      </p>

      <h2>5. Toplanma yöntemi ve hukuki sebep</h2>
      <p>
        Kişisel veriler Platform üzerinden ve elektronik ortamda toplanır. Toplanan
        veriler Kanun’un 5. ve 6. maddelerinde ile bu Politika’da belirtilen amaçlarla
        işlenebilir ve aktarılabilir. Başlıca hukuki sebepler: sözleşmenin kurulması ve
        ifası, hukuki yükümlülük, meşru menfaat ve (gerektiğinde) açık rızadır.
      </p>

      <h2>6. Veri saklama süresi</h2>
      <p>
        Kişisel veriler, işleme amacının gerektirdiği süre ve ilgili mevzuatta öngörülen
        zamanaşımı / saklama süreleri boyunca muhafaza edilir. Hesap silme talebi
        sonrasında, yasal saklama zorunlulukları saklı kalmak kaydıyla veriler makul süre
        içinde silinir veya anonim hale getirilir. OAuth / API erişim tokenları güvenli
        şekilde saklanır ve bağlantı kaldırıldığında veya hesap kapatıldığında
        geçersizleştirilir.
      </p>

      <h2>7. Veri Sahibi’nin hakları</h2>
      <p>Kanun’un 11. maddesi uyarınca Veri Sahibi:</p>
      <ul>
        <li>Kişisel veri işlenip işlenmediğini öğrenme</li>
        <li>İşlenmişse buna ilişkin bilgi talep etme</li>
        <li>İşleme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme</li>
        <li>Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme</li>
        <li>
          Eksik veya yanlış işlenmişse düzeltilmesini isteme ve bu işlemin aktarıldığı
          üçüncü kişilere bildirilmesini isteme
        </li>
        <li>
          Kanun’a uygun işlenmiş olsa bile sebeplerin ortadan kalkması halinde silinmesini
          veya yok edilmesini isteme
        </li>
        <li>
          Münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhine bir
          sonucun ortaya çıkmasına itiraz etme
        </li>
        <li>
          Kanuna aykırı işleme nedeniyle zarara uğraması halinde zararın giderilmesini
          talep etme
        </li>
      </ul>
      <p>
        Taleplerinizi <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> adresine
        iletebilirsiniz. {SITE_NAME}, talepleri en geç otuz (30) gün içinde
        sonuçlandırır. Kişisel Verileri Koruma Kurulu tarafından belirlenen ücret tarifesi
        saklıdır.
      </p>
      <p>
        Hesabınızın ve kişisel verilerinizin tamamen silinmesini talep etmek için kayıtlı
        e-posta adresinizden <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>{" "}
        adresine “Veri Silme Talebi” başlıklı bir e-posta gönderiniz. E-postada adınız,
        soyadınız, hesap e-posta adresiniz ve silme talebinizin açık ifadesi bulunmalıdır.
        Kimlik doğrulamasının ardından makul süre içinde (hedef: en geç yedi iş günü)
        silme işlemi tamamlanır ve size e-posta ile bildirim yapılır. Yasal saklama
        zorunlulukları saklıdır.
      </p>

      <h2>8. Google API kullanıcı verileri (Limited Use)</h2>
      <p>
        {SITE_NAME}, Google API’leri (Google Ads API, Google OAuth, Google Search Console
        API, Google Business Profile API ve ilgili Google API’leri dahil) aracılığıyla
        elde edilen kullanıcı verilerini; genel yapay zeka (AI) veya makine öğrenimi (ML)
        modellerinin geliştirilmesi, iyileştirilmesi ya da eğitilmesi amacıyla{" "}
        <strong>kullanmamaktadır</strong>. Bu veriler yalnızca belirtilen hizmetlerin
        sağlanması, hesabınızın bağlanması, raporlama, analiz, otomasyon ve operasyonel
        amaçlarla kullanılır.
      </p>
      <p>
        Google kullanıcı verileri, Google API Services User Data Policy (Limited Use
        requirements dahil) ile uyumlu şekilde işlenir; üçüncü taraflara satılmaz ve
        kullanıcıya sunulan temel özellikler dışında başka uygulamalara aktarılmaz.
      </p>

      <h2>9. Güvenlik</h2>
      <p>
        {SITE_NAME}, kişisel verilerin hukuka aykırı işlenmesini, erişimini ve
        kaybını önlemek için uygun teknik ve idari tedbirleri alır. Buna rağmen internet
        üzerinden iletimin %100 güvenli olduğu garanti edilemez; olağanüstü durumlarda
        yasal bildirim yükümlülüklerine uyulur.
      </p>

      <h2>10. Çocukların gizliliği</h2>
      <p>
        Platform 18 yaşın altındaki bireylere yönelik değildir. {SITE_NAME}, 18 yaşın
        altındaki kişilerden bilerek kişisel veri toplamaz. Bu tür bir veri tespit
        edilirse silinmesi için gerekli adımlar atılır.
      </p>

      <h2>11. Politika değişiklikleri</h2>
      <p>
        {SITE_NAME} bu Politikayı dilediği zaman güncelleyebilir. Güncel sürüm Platform’da
        yayımlandığı andan itibaren geçerlidir. Önemli değişikliklerde e-posta veya
        Platform bildirimi yapılabilir. Hizmeti kullanmaya devam etmeniz güncel
        Politikayı kabul ettiğiniz anlamına gelir.
      </p>

      <h2>12. İletişim</h2>
      <p>
        Gizlilik ile ilgili sorularınız için:{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        <br />
        Web sitesi: <a href={SITE_URL}>{SITE_URL}</a>
        <br />
        Uygulama: <a href={APP_URL}>{APP_URL}</a>
      </p>
    </LegalDocument>
  );
}
