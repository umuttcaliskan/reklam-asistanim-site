import type { Metadata } from "next";
import Link from "next/link";
import { LegalDocument } from "@/components/marketing/LegalDocument";
import {
  APP_URL,
  CONTACT_EMAIL,
  SITE_NAME,
  SITE_URL,
  TRIAL_LABEL,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Hizmet Şartları",
  description:
    "Reklam Asistanım hizmet şartları — kullanım koşulları, abonelik, sorumluluk sınırları ve fesih.",
  alternates: { canonical: "/hizmet-sartlari" },
};

export default function HizmetSartlariPage() {
  return (
    <LegalDocument title="Hizmet Şartları" updatedAt="30 Temmuz 2026">
      <p>
        Web sitesi {SITE_URL} ve web uygulaması {APP_URL} (birlikte “Platform”){" "}
        {SITE_NAME} (“{SITE_NAME}”, “biz”) tarafından işletilmektedir. Aşağıdaki Kullanım
        Koşulları (“Şartlar”) Hizmetlere erişimi ve bunların kullanımını düzenler. Lütfen
        Şartları dikkatlice inceleyiniz.
      </p>
      <p>
        Hizmetleri kullanabilmek için kayıtlı bir kullanıcı olmanız, Google üzerinde bir
        reklam / ilgili hesabınızın bulunması (entegrasyon özellikleri için) ve bu
        Şartları kayıtsız şartsız kabul etmeniz gerekir. Hizmetlere kaydolduğunuzda
        “Kabul ediyorum” kutusunu işaretleyerek {SITE_NAME} ile yasal olarak bağlayıcı bir
        sözleşme yapmış olursunuz. Kişisel verilerin işlenmesine ilişkin koşullar{" "}
        <Link href="/gizlilik-politikasi">Gizlilik Politikası</Link> ve{" "}
        <Link href="/kvkk">KVKK Aydınlatma Metni</Link> ile birlikte geçerlidir.
      </p>

      <h2>1. Tanımlar</h2>
      <ul>
        <li>
          <strong>“Sözleşme”</strong>: Platform’da yayımlanan politikalar, prosedürler ve
          yönergeler ile Google’ın ilgili şartları dahil olmak üzere işbu Şartlar.
        </li>
        <li>
          <strong>“Reklam İçeriği”</strong>: Hizmetleri kullanarak Google Ads veya ilgili
          platformlarda yayınladığınız / yönettiğiniz her türlü bilgi, metin, görsel ve
          dosya.
        </li>
        <li>
          <strong>“Üyelik”</strong>: Platform’u kullanmanıza izin veren abonelik hizmeti.
        </li>
        <li>
          <strong>“Deneme Süresi”</strong>: {TRIAL_LABEL} kapsamında, koşullara bağlı
          olarak Platform’u denemenize olanak tanıyan süre.
        </li>
        <li>
          <strong>“Hizmetler”</strong>: {SITE_NAME} kapsamında sunulan web tabanlı özellik
          ve hizmetler (kampanya yönetimi, raporlama, analitik, AI destekli öneriler,
          Search Console / İşletme Profili entegrasyonları vb.).
        </li>
        <li>
          <strong>“Kullanıcı”</strong>: Hizmetleri kullanan gerçek veya tüzel kişi.
        </li>
      </ul>

      <h2>2. Hizmetlerin kullanımı</h2>
      <p>
        Platform 18 yaşın altındaki bireylere yönelik değildir. {SITE_NAME}, 18 yaşın
        altındaki kişilerden bilerek kişisel veri toplamaz.
      </p>
      <p>
        {SITE_NAME} size Hizmetleri kullanma ve bunlara erişme konusunda münhasır olmayan,
        devredilemez, iptal edilebilir, sınırlı bir hak verir. Robotlar, örümcekler,
        tarayıcılar ve kazıma teknolojileri dahil olmak üzere Hizmetlere yetkisiz veya
        otomatik kötüye kullanım amaçlı erişime izin verilmez.
      </p>
      <p>
        Kullanıcı adı ve şifrenizden (“Giriş Bilgileri”) siz sorumlusunuz; üçüncü
        tarafların giriş bilgilerinize erişmesine izin vermemelisiniz. Giriş
        bilgileriniz aracılığıyla Hizmetlere erişen tüm kişilerden siz sorumlusunuz. Siz
        ve yetkili kullanıcılarınız Hizmetleri yalnızca kendi işiniz için kullanabilirsiniz;
        benzer veya rekabetçi bir ürün oluşturmak ya da Hizmetlerin fikir, özellik,
        işlev veya arayüzünü kopyalamak amacıyla erişemezsiniz.
      </p>
      <p>
        {SITE_NAME}, Google Ads, Google Search Console ve Google Business Profile için
        yönetim, raporlama ve otomasyon araçları sağlayan teknik bir uygulamadır.
        Entegrasyon gerektiren özellikleri kullanabilmek için ilgili Google hesaplarına
        sahip olmanız ve gerekli yetkilendirmeleri vermeniz gerekir. Google’ın kendi
        kullanım şartları ve politikaları ayrıca geçerlidir.
      </p>
      <p>
        {SITE_NAME}, sözleşme konusu işlerin yapılmasında Kullanıcı’nın şirket ve marka
        imajını koruyacağını, buna zarar verecek faaliyetlerden kaçınacağını kabul ve
        beyan eder; Kullanıcı da aynı özeni göstermekle yükümlüdür.
      </p>

      <h2>3. Fiyatlandırma ve ödeme</h2>
      <p>
        Üyelik ücreti, {SITE_URL}/fiyatlandirma adresinde ve/veya uygulama içi abonelik
        ekranında yayımlanan güncel fiyat listesine göre belirlenir. Aksi belirtilmedikçe
        fiyatlara vergi ve harçlar dahil değildir. Üyeliğe kaydolurken geçerli bir ödeme
        yöntemi sağlamanız gerekebilir.
      </p>
      <p>
        {SITE_NAME}, maliyetlerdeki değişiklikleri karşılamak üzere üyelik ücretini ve
        diğer hizmet fiyatlarını zaman zaman değiştirme hakkını saklı tutar. Üyelik için
        ödenmesi gereken tutardan tek taraflı kesinti yapma hakkınız yoktur. Hizmetlerde
        iddia edilen kusur nedeniyle ödemeleri durdurma hakkınız bulunmaz; iade koşulları
        aşağıdaki fesih maddesinde düzenlenmiştir.
      </p>
      <p>
        Bir deneme süresine kaydolursanız, deneme süresi bitmeden hesabınızı iptal
        etmediğiniz sürece deneme sonrası abonelik ücretinin tahsil edilebileceğini kabul
        edersiniz. Hizmetler aracılığıyla yönetilen reklamların Google’a (veya ilgili
        platforma) ödenen medya bedellerinden her zaman siz sorumlusunuz; {SITE_NAME}{" "}
        yalnızca yazılım erişimi ücreti alır.
      </p>

      <h2>4. Sorumluluğun reddi ve sınırlandırılması</h2>
      <p>
        {SITE_NAME} size Google Ads ve ilgili Google ürünlerinin yönetimi, raporlanması ve
        otomasyonu için teknik bir uygulama sunar. Reklamların yayınlanmasıyla ilgili tüm
        riskleri değerlendirmeniz ve üstlenmeniz gerekir. {SITE_NAME} reklam içeriğini
        önceden taramak zorunda değildir; ancak tamamen kendi takdirine bağlı olarak
        Platform üzerinden iletilen içeriği inceleme, reddetme veya kaldırma hakkını
        saklı tutar.
      </p>
      <p>
        {SITE_NAME} erişim, etkileşim, dönüşüm, satış, ROAS veya reklam performansına
        ilişkin garanti vermez. AI önerileri ve otomasyonlar karar destek amaçlıdır;
        nihai reklam kararları Kullanıcı’ya aittir. Google’ın algoritma değişiklikleri,
        reklam politikası güncellemeleri veya teknik aksaklıklarından {SITE_NAME}{" "}
        sorumlu tutulamaz. Kullanıcıya ait reklam hesaplarının Google veya ilgili
        platformlar tarafından kısıtlanması, askıya alınması veya kapatılması hallerinde{" "}
        {SITE_NAME}’in hukuki sorumluluğu bulunmaz.
      </p>
      <p>
        Tüm Hizmetleri riski size ait olmak üzere kullanırsınız. Yürürlükteki yasaların
        izin verdiği en geniş ölçüde {SITE_NAME}; satılabilirlik, belirli bir amaca
        uygunluk, kesintisizlik, hatasızlık ve ihlal etmeme dahil olmak üzere açık veya
        zımni tüm garantileri reddeder. Hizmetlerin ihtiyaçlarınızı karşılayacağı veya her
        zaman erişilebilir, güvenli ve doğru olacağı garanti edilmez.
      </p>
      <p>
        {SITE_NAME}; öngörülemeyen veya makul olarak kaçınılamayan durumlar (üçüncü taraf
        API kesintileri, ağ arızaları, güç kesintisi vb.) nedeniyle yükümlülüklerini
        yerine getirmedeki gecikmelerden sorumlu değildir. {SITE_NAME}, bu tür zararların
        olasılığı konusunda bilgilendirilmiş olsa bile kar kaybı veya dolaylı, özel ya da
        arızi zararlardan sorumlu olmayacaktır.
      </p>
      <p>
        {SITE_NAME}’in Hizmetlerden kaynaklanan toplam sorumluluğu, olaydan önceki on iki
        (12) ay içinde {SITE_NAME}’e ödediğiniz üyelik tutarını veya yüz ABD dolarını
        (100 USD) aşmayacaktır (hangisi yüksekse üst sınır olarak uygulanır). Geçerli
        yasa bu sınırlamaya izin vermiyorsa sorumluluk yasanın izin verdiği azami ölçüde
        sınırlıdır.
      </p>
      <p>
        Kullanıcı’dan kaynaklanan eksik/yanlış bilgiden doğan her türlü sorumluluk
        Kullanıcı’ya aittir. Kullanıcı’nın verdiği doğru bilgiye rağmen {SITE_NAME}{" "}
        tarafından yanıltıcı bilgi verilmesi veya mevzuata aykırı işlem yapılması
        hallerinde sorumluluk {SITE_NAME}’e aittir.
      </p>

      <h2>5. Fikri mülkiyet</h2>
      <p>
        Platform’daki veya sitede gösterilen tüm telif hakkı, tasarım, marka, ticari ad ve
        diğer fikri mülkiyet hakları {SITE_NAME}’in (veya duruma göre Google ya da üçüncü
        tarafların) münhasır mülkiyetindedir. Bu Şartlar kapsamındaki kullanım hakkı
        dışında herhangi bir fikri mülkiyet hakkı edinmezsiniz. İzinsiz çoğaltma,
        yeniden dağıtım, değiştirme veya satma yasaktır.
      </p>
      <p>
        Reklam İçeriği’ni ileterek, {SITE_NAME}’e Hizmeti sağlamak için gerekli olduğu
        ölçüde içeriği kullanmak, kopyalamak, görüntülemek ve işlemek için münhasır
        olmayan bir lisans vermiş olursunuz. Ayrıca Kullanıcı; {SITE_NAME}’in Kullanıcı’ya
        ait ticari unvan, marka adı ve logoyu Web Sitesi, sunumlar ve tanıtım mecralarında
        “Referanslar” kapsamında kullanmasına izin verdiğini kabul edebilir (bu kullanım
        için ayrıca rıza istenebilir).
      </p>

      <h2>6. Veri toplama</h2>
      <p>
        Kişisel verilerinizin işlenmesi{" "}
        <Link href="/gizlilik-politikasi">Gizlilik Politikası</Link>,{" "}
        <Link href="/kvkk">KVKK Aydınlatma Metni</Link> ve{" "}
        <Link href="/cerez-politikasi">Çerez Politikası</Link> hükümlerine tabidir.
        Kaydolduğunuzda ilgili kutuları işaretleyerek bu metinleri okuduğunuzu ve kabul
        ettiğinizi beyan edersiniz.
      </p>

      <h2>7. Üçüncü taraf bağlantıları ve hizmetler</h2>
      <p>
        Platform, Google ve diğer üçüncü taraf sitelerine / hizmetlerine bağlantılar
        içerebilir. {SITE_NAME} bu sitelerin içeriğinden veya gizlilik uygulamalarından
        sorumlu değildir. Üçüncü taraf hizmetleri kullanımınız kendi şartlarına tabidir.
      </p>

      <h2>8. Tarafların ilişkisi</h2>
      <p>
        Bu Şartlardaki hiçbir şey veya Hizmetleri kullanımınız, sizinle {SITE_NAME}{" "}
        arasında temsilcilik, ortaklık, ortak girişim veya işveren-işçi ilişkisi
        oluşturmaz. Kullanıcı, Hizmeti ticari veya mesleki faaliyetleri kapsamında
        satın aldığını beyan eder (tüketici sıfatı taşımayan B2B kullanım).
      </p>

      <h2>9. Tazminat</h2>
      <p>
        Yürürlükteki yasaların izin verdiği ölçüde; (a) bu Şartları ihlal etmenizden,
        (b) Reklam İçeriğinizin üçüncü taraf haklarını veya yürürlükteki yasayı ihlal
        ettiğine ilişkin iddialardan, (c) üçüncü taraf siteleri / hizmetleri
        kullanımınızdan kaynaklanan kayıp ve masraflardan {SITE_NAME}’i ve bağlı
        kişileri tazmin etmeyi kabul edersiniz.
      </p>

      <h2>10. Fesih, deneme ve iade</h2>
      <p>
        {SITE_NAME} tarafından sunulan hizmetler dijital platform erişimi ve yazılım
        tabanlı reklam yönetimi süreçlerini kapsar. Hesap aktif edilmesi ve özelliklerin
        kullanıma sunulmasıyla hizmet ifası başlamış sayılır. Mesafeli sözleşmeler
        mevzuatı kapsamında elektronik ortamda anında ifa edilen hizmetlerde cayma hakkı
        sınırlı olabilir; Kullanıcı dijital hizmetin niteliğini bildiğini kabul eder.
      </p>
      <p>
        <strong>Deneme süresi:</strong> {TRIAL_LABEL} içinde hesabınızı iptal
        ederseniz deneme koşullarına göre ücret alınmayabilir. Deneme bitmeden iptal
        edilmezse abonelik ücreti tahsil edilebilir.
      </p>
      <p>
        <strong>Ücretli üyelik:</strong> Ücretli üyeliğinizi panel üzerinden veya yazılı
        bildirimle dilediğiniz zaman sonlandırabilirsiniz. Dönem sonu faturalandırması
        için iptalin abonelik döneminin yenilenmesinden önce tamamlanması gerekir;
        aksi halde bir sonraki dönem ücreti tahsil edilebilir. Üyelik iptali ve hesap
        kapatma takibi Kullanıcı sorumluluğundadır.
      </p>
      <p>
        <strong>İade:</strong> Hizmetin başlatılmasından sonra Kullanıcı’nın kendi
        iradesiyle ayrılması veya hizmeti kullanmaması halinde, aksi yasal zorunluluk
        veya {SITE_NAME} tarafından açıkça taahhüt edilmedikçe tahsil edilmiş üyelik
        bedellerinin iadesi talep edilemez.
      </p>
      <p>
        {SITE_NAME}; Şartların ihlali, güvenlik tehdidi, kötüye kullanım veya hukuka
        aykırı faaliyet halinde hizmeti önceden bildirim olmaksızın sonlandırabilir. Bu
        durumda tazminat veya iade hakkı doğmaz.
      </p>

      <h2>11. Hizmetin işleyişi</h2>
      <p>
        {SITE_NAME}, Hizmetlerin herhangi bir bölümünü bildirimde bulunmaksızın
        değiştirme, askıya alma, durdurma veya kısıtlama hakkını saklı tutar ve bundan
        doğabilecek sonuçlardan sorumlu olmayabilir.
      </p>

      <h2>12. Değişiklikler</h2>
      <p>
        {SITE_NAME} bu Şartları herhangi bir zamanda değiştirebilir. Değişiklikler
        Platform’da yayımlanır ve/veya e-posta ile bildirilebilir. Aksi belirtilmedikçe
        bildirimden sonra yürürlüğe girer. Değişiklikleri kabul etmiyorsanız Hizmetleri
        sonlandırmanız gerekir. Kullanmaya devam etmek güncel Şartları kabul anlamına
        gelir.
      </p>

      <h2>13. Devri, bölünebilirlik ve son hükümler</h2>
      <p>
        {SITE_NAME}, bu Şartlar kapsamındaki hak ve yükümlülüklerini bağlı şirketlere
        veya hizmet sürekliliği için gerekli üçüncü taraflara devredebilir. Herhangi bir
        hükmün geçersiz sayılması halinde kalan hükümler yürürlükte kalır.
      </p>
      <p>
        Sözleşmede düzenlenmemiş konularda yürürlükteki Türkiye Cumhuriyeti mevzuatı
        saklıdır. İşbu Şartlar Türkiye kanunlarına tabidir; uyuşmazlıklarda yetkili
        Türkiye mahkemeleri ve icra daireleri görevlidir. {SITE_NAME}’in ticari
        defterleri, bilgisayar kayıtları, sunucu logları ve e-faturaları HMK m. 193
        uyarınca delil teşkil edebilir.
      </p>
      <p>
        İletişim: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
      </p>
    </LegalDocument>
  );
}
