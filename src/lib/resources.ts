export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readingMinutes: number;
};

/** Dummy içerik — CMS eklenince gerçek verilerle değiştirilecek. */
export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "google-ads-butcesi-nasil-belirlenir",
    title: "Google Ads bütçesi nasıl belirlenir? 2026 rehberi",
    excerpt:
      "Sektörünüze ve hedeflerinize göre günlük bütçe belirlemenin veri odaklı yolu; yaygın hatalar ve AI destekli bütçe önerileri.",
    category: "Google Ads",
    date: "24 Temmuz 2026",
    readingMinutes: 7,
  },
  {
    slug: "yapay-zeka-ile-kampanya-optimizasyonu",
    title: "Yapay zeka kampanyalarınızı nasıl optimize eder?",
    excerpt:
      "Arama terimi temizliğinden teklif ayarlarına: AI'ın hesabınızda her gün yaptığı kontroller ve önerilerin arkasındaki mantık.",
    category: "Yapay Zeka",
    date: "18 Temmuz 2026",
    readingMinutes: 6,
  },
  {
    slug: "negatif-anahtar-kelime-stratejisi",
    title: "Boşa harcamayı durduran negatif anahtar kelime stratejisi",
    excerpt:
      "Arama terimi raporunu haftalık rutine çevirin: hangi terimler negatife eklenmeli, hangi eşleme türü seçilmeli?",
    category: "Google Ads",
    date: "10 Temmuz 2026",
    readingMinutes: 5,
  },
  {
    slug: "haftalik-rapor-nasil-okunur",
    title: "Haftalık performans raporu nasıl okunur?",
    excerpt:
      "PDF rapordaki KPI değişimleri, cihaz kırılımı ve dönüşüm kaynakları bölümlerinden aksiyon çıkarma rehberi.",
    category: "Raporlama",
    date: "3 Temmuz 2026",
    readingMinutes: 4,
  },
  {
    slug: "search-console-firsat-analizi",
    title: "Search Console ile içerik fırsatları nasıl bulunur?",
    excerpt:
      "Gösterim alan ama tıklanmayan sorgular altın madenidir. GSC verisinden blog konusu çıkarmanın pratik yöntemi.",
    category: "SEO",
    date: "26 Haziran 2026",
    readingMinutes: 6,
  },
  {
    slug: "isletme-profili-yerel-gorunurluk",
    title: "İşletme Profili ile yerel görünürlüğünüzü artırın",
    excerpt:
      "Google Business Profile metriklerini Ads verinizle yan yana okuyarak yerel müşteri kazanımını hızlandırın.",
    category: "Yerel SEO",
    date: "19 Haziran 2026",
    readingMinutes: 5,
  },
];

export type FaqItem = {
  question: string;
  answer: string;
};

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Reklam Asistanım tam olarak ne yapar?",
    answer:
      "Google Ads (ve yakında Meta Ads), Search Console ve blog/WordPress’i tek panelde birleştirir. Yapay zeka hesabınızı otonom izler, optimizasyon önerileri üretir, kampanya kurulumlarını hazırlar ve haftalık PDF raporlar oluşturur.",
  },
  {
    question: "Otonom optimizasyon ne demek? Kampanyalarımı AI mı yönetiyor?",
    answer:
      "AI bütçe, teklif, arama terimleri ve performansı sürekli tarar; öncelikli aksiyon listesini hazırlar. Değişiklikler sizin onayınızla uygulanır — kontrol her zaman sizde kalır. Dilerseniz tamamen manuel de çalışabilirsiniz.",
  },
  {
    question: "3 gün ücretsiz deneme nasıl çalışıyor?",
    answer:
      "Kayıt / erken erişim sonrası seçtiğiniz paketi 3 gün boyunca ücretsiz deneyebilirsiniz. Deneme süresi içinde özellikleri test eder, memnun kalmazsanız iptal edebilirsiniz.",
  },
  {
    question: "Toplantı planlamak zorunlu mu?",
    answer:
      "Hayır. Dilerseniz doğrudan 3 günlük denemeye başlayın. Kurumsal ihtiyaç, ajans kurulumu veya Meta erken erişim için “Toplantı planla” ile kısa bir görüşme ayarlayabilirsiniz.",
  },
  {
    question: "Meta Ads ne zaman gelecek?",
    answer:
      "Meta Ads entegrasyonu yol haritamızda. Erken erişim / Pro+ kullanıcılarına öncelik verilecek. Site ve panelde “yakında” olarak işaretlenmiştir; canlıya alınca aynı AI asistan Meta hesaplarınızı da kapsayacak.",
  },
  {
    question: "Google Ads hesabımı bağlamak güvenli mi?",
    answer:
      "Bağlantı Google’ın resmî OAuth altyapısıyla yapılır; şifreniz bizimle asla paylaşılmaz. Erişim tokenları şifreli saklanır; dilediğiniz an bağlantıyı kesebilirsiniz.",
  },
  {
    question: "Birden fazla reklam hesabını yönetebilir miyim?",
    answer:
      "Evet. Profesyonel paket birden fazla Google Ads (ve yakında Meta) hesabını destekler; Kurumsal’da kota özel belirlenir.",
  },
  {
    question: "Blog oluşturucu hangi platformlara yayın yapıyor?",
    answer:
      "WordPress’e manuel veya planlı otomatik yayın desteklenir. AI, Search Console verinizden konu fırsatları çıkarır, yazı ve görselleri üretir.",
  },
  {
    question: "Kurumsal paket için nasıl görüşme ayarlarım?",
    answer:
      "“Toplantı planla” bağlantısından size uygun saati seçebilir veya hello@reklamasistanim.com adresine yazabilirsiniz.",
  },
];

export type AcademyVideo = {
  title: string;
  duration: string;
  /** YouTube video ID */
  youtubeId: string;
};

export type AcademyTrack = {
  id: string;
  title: string;
  description: string;
  level: string;
  videos: AcademyVideo[];
};

/** Dummy video seti — tüm videolar şimdilik aynı ID'yi kullanıyor. */
const PLACEHOLDER_VIDEO = "NWYZisAJTQo";

export const ACADEMY_TRACKS: AcademyTrack[] = [
  {
    id: "panel",
    title: "Panel kullanımı",
    description:
      "Reklam Asistanım paneline ilk adım: hesap bağlama, özet ekranı, analiz ve raporlar.",
    level: "Başlangıç",
    videos: [
      { title: "Panele genel bakış ve ilk kurulum", duration: "8:24", youtubeId: PLACEHOLDER_VIDEO },
      { title: "Google Ads hesabını bağlama", duration: "5:12", youtubeId: PLACEHOLDER_VIDEO },
      { title: "Özet paneli ve KPI kartlarını okuma", duration: "6:40", youtubeId: PLACEHOLDER_VIDEO },
      { title: "Haftalık PDF raporları indirme", duration: "4:18", youtubeId: PLACEHOLDER_VIDEO },
    ],
  },
  {
    id: "google-ads",
    title: "Google Ads eğitimi",
    description:
      "Sıfırdan Google Ads: kampanya türleri, teklif stratejileri ve bütçe yönetimi.",
    level: "Başlangıç – Orta",
    videos: [
      { title: "Google Ads kampanya türleri", duration: "12:05", youtubeId: PLACEHOLDER_VIDEO },
      { title: "Anahtar kelime ve eşleme türleri", duration: "9:33", youtubeId: PLACEHOLDER_VIDEO },
      { title: "Teklif stratejileri ve bütçe", duration: "10:47", youtubeId: PLACEHOLDER_VIDEO },
      { title: "Arama terimi raporu ile optimizasyon", duration: "7:56", youtubeId: PLACEHOLDER_VIDEO },
    ],
  },
  {
    id: "yapay-zeka",
    title: "Yapay zeka ile yönetim",
    description:
      "AI önerilerini okuma, AI ile kampanya kurma ve asistanı verimli kullanma.",
    level: "Orta",
    videos: [
      { title: "AI içgörülerini anlama ve uygulama", duration: "8:02", youtubeId: PLACEHOLDER_VIDEO },
      { title: "AI ile kampanya kurulumu", duration: "11:15", youtubeId: PLACEHOLDER_VIDEO },
      { title: "AI asistana doğru soru sorma", duration: "5:44", youtubeId: PLACEHOLDER_VIDEO },
    ],
  },
  {
    id: "icerik",
    title: "Blog oluşturucu ve organik",
    description:
      "Search Console fırsatları, AI blog üretimi ve WordPress'e yayın akışı.",
    level: "Başlangıç",
    videos: [
      { title: "Search Console bağlantısı ve fırsat analizi", duration: "7:21", youtubeId: PLACEHOLDER_VIDEO },
      { title: "AI ile blog yazısı üretme", duration: "9:08", youtubeId: PLACEHOLDER_VIDEO },
      { title: "WordPress'e otomatik yayın kurulumu", duration: "6:30", youtubeId: PLACEHOLDER_VIDEO },
    ],
  },
  {
    id: "meta-ads",
    title: "Meta Ads eğitimi",
    description:
      "Facebook ve Instagram reklamlarına giriş: kampanya yapısı ve hedefleme temelleri.",
    level: "Başlangıç",
    videos: [
      { title: "Meta Ads hesap yapısı", duration: "10:12", youtubeId: PLACEHOLDER_VIDEO },
      { title: "Hedef kitle ve yerleşimler", duration: "8:47", youtubeId: PLACEHOLDER_VIDEO },
      { title: "Kreatif en iyi uygulamaları", duration: "7:03", youtubeId: PLACEHOLDER_VIDEO },
    ],
  },
];
