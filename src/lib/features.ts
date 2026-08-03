export type MockKind =
  | "ai"
  | "campaigns"
  | "analytics"
  | "dashboard"
  | "search-terms"
  | "organic"
  | "competitors"
  | "gbp"
  | "billing";

export type FeatureBlock = {
  id: string;
  title: string;
  summary: string;
  body: string;
  mock: MockKind;
  bullets: string[];
};

export const FEATURES: FeatureBlock[] = [
  {
    id: "yapay-zeka",
    title: "Yapay zeka hesabınızı yönetir",
    summary:
      "AI, performans verinizi sürekli izler; bütçe, teklif ve kampanya önerilerini hazırlar, onayınızla uygular.",
    body: "Reklam Asistanım'ın yapay zekası hesabınızı 7/24 analiz eder: boşa harcayan arama terimlerini yakalar, bütçe kaydırma fırsatlarını gösterir, yeni kampanya taslaklarını sizin için kurar. Siz sadece onaylarsınız — kontrol her zaman sizde.",
    mock: "ai",
    bullets: [
      "Hesaba özel optimizasyon önerileri",
      "AI ile kampanya kurulumu",
      "Önceliklendirilmiş aksiyon listesi",
      "Panel içi AI asistan",
    ],
  },
  {
    id: "kampanyalar",
    title: "Kampanya yönetimi",
    summary:
      "Arama, PMax, Alışveriş, Video ve Display kampanyalarını tek yerden oluşturun ve yönetin.",
    body: "Manuel kurulum sihirbazı ile kanal, bütçe ve reklamları adım adım tanımlayın; veya yapay zekaya brief verin, kampanyayı sizin için kursun. Duraklat/etkinleştir gibi hızlı aksiyonlar tek tık.",
    mock: "campaigns",
    bullets: [
      "Çok kanallı kampanya oluşturma",
      "AI destekli kurulum",
      "Duraklat / etkinleştir hızlı aksiyonlar",
    ],
  },
  {
    id: "analiz",
    title: "Analiz ve haftalık PDF rapor",
    summary:
      "Genel analiz, günlük trendler ve her hafta indirilebilir detaylı PDF performans raporu.",
    body: "KPI değişim rozetleri, kanal dağılımı, dönüşüm kaynakları, cihaz kırılımı ve arama terimi analizi. Google Ads hesabınız bağlıysa tamamlanan haftanın raporu otomatik oluşur.",
    mock: "analytics",
    bullets: [
      "Önceki döneme göre KPI karşılaştırması",
      "Günlük maliyet ve tıklama trendi",
      "PDF: dönüşüm, cihaz, arama terimleri",
    ],
  },
  {
    id: "ozet",
    title: "Özet paneli",
    summary:
      "Seçili dönemin harcama, tıklama, dönüşüm ve ROAS özeti — son rapor bir tıkta.",
    body: "Günlük trend grafiği, kanal maliyetleri, en çok harcayan kampanyalar ve son haftalık PDF kartı ile güne hızlı başlayın.",
    mock: "dashboard",
    bullets: [
      "Gerçek dönem karşılaştırmalı KPI'lar",
      "Son PDF raporu indir",
      "Hızlı erişim kısayolları",
    ],
  },
  {
    id: "envanter",
    title: "Anahtar kelime ve arama terimleri",
    summary:
      "Anahtar kelimeler, arama terimleri, uzantılar ve negatif listeler — envanteriniz kontrol altında.",
    body: "Boşa harcayan arama terimlerini görün, AI önerisiyle tek tıkla negatife ekleyin, sitelink ve diğer uzantıları düzenleyin.",
    mock: "search-terms",
    bullets: [
      "Anahtar kelime performansı",
      "AI ile negatif önerileri",
      "Uzantı yönetimi",
    ],
  },
  {
    id: "organik",
    title: "Organik büyüme ve blog",
    summary:
      "Search Console verisiyle fırsatları görün; AI ile blog yazıp WordPress'e yayınlayın.",
    body: "GSC bağlantısı, sorgu ve sayfa analizi, haftalık blog üretimi ve görsellerle WordPress'e otomatik veya planlı yayın.",
    mock: "organic",
    bullets: [
      "Google Search Console entegrasyonu",
      "AI blog + görsel üretimi",
      "WordPress yayınlama",
    ],
  },
  {
    id: "rakip",
    title: "Rakip analizi",
    summary:
      "Rakiplerin reklamlarını inceleyin; stratejinizi veriye dayalı güçlendirin.",
    body: "Şeffaflık verileriyle rakip reklamlarını keşfedin, format ve mesajları karşılaştırın, AI'dan strateji önerileri alın.",
    mock: "competitors",
    bullets: [
      "Rakip / domain araması",
      "Reklam formatı inceleme",
      "AI strateji önerileri",
    ],
  },
  {
    id: "isletme",
    title: "İşletme profili",
    summary:
      "Google Business Profile performansını panelinizden takip edin.",
    body: "Konum, yorum ve görünürlük metrikleriyle yerel varlığınızı Ads ve organik çalışmanızla yan yana görün.",
    mock: "gbp",
    bullets: [
      "GBP bağlantısı",
      "Yerel performans özeti",
      "Büyüme sinyalleri",
    ],
  },
  {
    id: "abonelik",
    title: "Abonelik ve çoklu hesap",
    summary:
      "Solo'dan Profesyonel'e ölçekleyin; birden fazla Ads hesabını tek yerden yönetin.",
    body: "Paket seçimi, faturalandırma görünümü ve kanal ayarları — ajans ve marka ekipleri için uygun. Tüm paketlerde 3 gün ücretsiz deneme.",
    mock: "billing",
    bullets: [
      "Solo / Profesyonel / Kurumsal",
      "Çoklu Google Ads hesabı",
      "3 gün ücretsiz deneme",
    ],
  },
];

export const HOW_IT_WORKS = [
  {
    step: "1",
    title: "Hesapları bağlayın",
    text: "Google Ads (ve yakında Meta) ile Search Console’u güvenli OAuth ile bağlayın.",
  },
  {
    step: "2",
    title: "AI otonom izlesin",
    text: "Yapay zeka bütçe, teklif ve arama terimlerini sürekli tarar; aksiyon listesini hazırlar.",
  },
  {
    step: "3",
    title: "Onaylayın, büyütün",
    text: "Önerileri onayınızla uygulayın; blog ve raporlarla organik ve ücretli büyümeyi takip edin.",
  },
];

export const PRODUCT_PILLARS = [
  {
    id: "google-ads",
    href: "/urun/google-ads",
    title: "Google Ads",
    badge: null as string | null,
    summary:
      "Kampanya kurulumundan otonom optimizasyona — Google Ads derinliği tek panelde.",
  },
  {
    id: "meta-ads",
    href: "/urun/meta-ads",
    title: "Meta Ads",
    badge: "Yakında",
    summary:
      "Facebook ve Instagram reklamları aynı AI asistanla — erken erişimde öncelikli.",
  },
  {
    id: "organik",
    href: "/urun/organik",
    title: "Organik & Blog",
    badge: null,
    summary:
      "Search Console fırsatları, AI blog ve WordPress yayın / aylık plan.",
  },
  {
    id: "ai-asistan",
    href: "/urun/ai-asistan",
    title: "AI Asistan",
    badge: null,
    summary:
      "Hesabınıza soru sorun; otonom öneriler ve onaylı aksiyonlarla ilerleyin.",
  },
];
