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
      "Haftalık 1 blog yazısı + görsel",
      "WordPress'e manuel / tek tık yayınlama",
      "Rakip analizi önerileri",
    ],
    cta: "3 gün ücretsiz dene",
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
      "Site başına haftalık 2 blog",
      "AI ile 1 aylık blog planı (site başına)",
      "Haftada 2 otomatik yayın + kapak görseli",
      "WordPress zamanlanmış yayın",
      "Yüksek AI kotası",
      "Çoklu kullanıcı / roller",
      "Hesaplar arası özet ve rapor",
      "Meta Ads yakında — öncelikli erişim",
    ],
    cta: "3 gün ücretsiz dene",
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
      "Meta Ads yakında — öncelikli erişim",
    ],
    cta: "Toplantı planla",
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
      { label: "Otonom optimizasyon önerileri", values: [true, true, true] },
      { label: "AI asistan (sohbet)", values: [true, true, true] },
      { label: "AI kotası", values: ["Standart", "Yüksek", "Özel"] },
      { label: "Meta Ads (yakında)", values: ["—", "Öncelikli", "Öncelikli"] },
    ],
  },
  {
    title: "İçerik ve organik",
    rows: [
      { label: "Haftalık AI blog yazısı", values: ["1", "Site başına 2", "Özel"] },
      { label: "AI görsel üretimi", values: [true, true, true] },
      { label: "WordPress yayın", values: ["Manuel / tek tık", "Zamanlanmış otomatik", "Zamanlanmış"] },
      { label: "AI aylık blog planı", values: [false, true, true] },
      { label: "Haftada 2 otomatik yayın (yazı+görsel)", values: [false, true, true] },
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
