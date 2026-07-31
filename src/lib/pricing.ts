export type PlanId = "solo" | "professional" | "enterprise";

export type PlanCard = {
  id: PlanId;
  name: string;
  tagline: string;
  price: string;
  priceNote?: string;
  highlighted?: boolean;
  badge?: string;
  features: string[];
  cta: string;
};

export const PLANS: PlanCard[] = [
  {
    id: "solo",
    name: "Solo",
    tagline: "Tek marka için AI destekli yönetim ve içerik.",
    price: "$59",
    priceNote: "/ay",
    features: [
      "1 Google Ads hesabı",
      "Yapay zeka ile kampanya oluşturma",
      "AI optimizasyon önerileri",
      "1 Search Console bağlantısı",
      "Haftalık 4 blog yazısı + görsel",
      "WordPress'e manuel / tek tık yayınlama",
      "Rakip analizi önerileri",
    ],
    cta: "Solo ile başla",
  },
  {
    id: "professional",
    name: "Profesyonel",
    tagline: "Çok hesap, planlı içerik ve ekip çalışması.",
    price: "$119",
    priceNote: "/ay'dan (2 hesap)",
    highlighted: true,
    badge: "En çok tercih edilen",
    features: [
      "2–8 Google Ads hesabı",
      "Hesap başına GSC bağlantısı",
      "Site başına haftalık 10 blog",
      "AI ile 1 aylık blog planı (site başına)",
      "Günlük otomatik yayın + kapak görseli",
      "WordPress zamanlanmış yayın",
      "Yüksek AI kotası",
      "Çoklu kullanıcı / roller",
      "Hesaplar arası özet ve rapor",
    ],
    cta: "Profesyonel'i seç",
  },
  {
    id: "enterprise",
    name: "Kurumsal",
    tagline: "Ajans ve büyük ekipler için özel çözüm.",
    price: "Özel",
    priceNote: "fiyatlandırma",
    features: [
      "8+ Google Ads hesabı",
      "Özel SLA ve öncelikli destek",
      "White-label raporlar",
      "SSO ve denetim kayıtları",
      "Özel AI kotası",
      "Özel onboarding",
    ],
    cta: "Görüşme talep et",
  },
];

export type ComparisonRow = {
  label: string;
  /** string = metin, true = dahil, false = yok */
  values: [string | boolean, string | boolean, string | boolean];
};

export type ComparisonGroup = {
  title: string;
  rows: ComparisonRow[];
};

/** Sıra: Solo, Profesyonel, Kurumsal */
export const COMPARISON: ComparisonGroup[] = [
  {
    title: "Hesaplar ve bağlantılar",
    rows: [
      { label: "Google Ads hesabı", values: ["1", "2–8", "8+"] },
      { label: "Search Console bağlantısı", values: ["1", "Hesap başına 1", "Sınırsız"] },
      { label: "Google İşletme Profili", values: [true, true, true] },
      { label: "Çoklu kullanıcı / roller", values: [false, true, true] },
    ],
  },
  {
    title: "Yapay zeka",
    rows: [
      { label: "AI kampanya kurulumu", values: [true, true, true] },
      { label: "Optimizasyon önerileri", values: [true, true, true] },
      { label: "AI asistan (sohbet)", values: [true, true, true] },
      { label: "AI kotası", values: ["Standart", "Yüksek", "Özel"] },
    ],
  },
  {
    title: "İçerik ve organik",
    rows: [
      { label: "Haftalık AI blog yazısı", values: ["4", "Site başına 10", "Özel"] },
      { label: "AI görsel üretimi", values: [true, true, true] },
      { label: "WordPress yayın", values: ["Manuel / tek tık", "Zamanlanmış otomatik", "Zamanlanmış"] },
      { label: "AI aylık blog planı", values: [false, true, true] },
      { label: "Günlük otomatik yayın (yazı+görsel)", values: [false, true, true] },
    ],
  },
  {
    title: "Analiz ve raporlama",
    rows: [
      { label: "Haftalık PDF rapor", values: [true, true, true] },
      { label: "Hesaplar arası özet", values: [false, true, true] },
      { label: "White-label rapor", values: [false, false, true] },
      { label: "Rakip analizi", values: [true, true, true] },
    ],
  },
  {
    title: "Destek",
    rows: [
      { label: "3 gün ücretsiz deneme", values: [true, true, true] },
      { label: "E-posta destek", values: [true, true, true] },
      { label: "Öncelikli destek + SLA", values: [false, false, true] },
      { label: "Özel onboarding", values: [false, false, true] },
    ],
  },
];
