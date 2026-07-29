"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import {
  Bot,
  Check,
  Download,
  FileText,
  Globe,
  MapPin,
  Pause,
  Play,
  Sparkles,
  Star,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import type { MockKind } from "@/lib/features";

/* ---------- shared primitives ---------- */

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const } },
};

function Window({
  title,
  children,
  className = "",
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-[var(--line)] bg-white shadow-[var(--shadow)] ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-[var(--line)] bg-[var(--paper)] px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-rose-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
        <span className="ml-3 truncate text-[11px] font-medium text-[var(--ink-muted)]">
          {title}
        </span>
      </div>
      <div className="p-4 sm:p-5">{children}</div>
    </div>
  );
}

function Kpi({
  label,
  value,
  delta,
  up = true,
}: {
  label: string;
  value: string;
  delta: string;
  up?: boolean;
}) {
  return (
    <motion.div
      variants={item}
      className="rounded-xl border border-[var(--line)] bg-white p-3"
    >
      <p className="text-[10px] font-medium uppercase tracking-wide text-[var(--ink-muted)]">
        {label}
      </p>
      <p className="mt-1 text-lg font-bold tracking-tight text-[var(--ink)]">{value}</p>
      <p
        className={`mt-0.5 inline-flex items-center gap-1 rounded-full px-1.5 py-0.5 text-[10px] font-semibold ${
          up ? "bg-emerald-50 text-emerald-700" : "bg-rose-50 text-rose-600"
        }`}
      >
        {up ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
        {delta}
      </p>
    </motion.div>
  );
}

function Bars({ values, delay = 0.2 }: { values: number[]; delay?: number }) {
  return (
    <div className="flex h-24 items-end gap-1.5 sm:h-28">
      {values.map((v, i) => (
        <motion.div
          key={i}
          className="flex-1 rounded-t-md bg-gradient-to-t from-emerald-500 to-emerald-300"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          style={{ height: `${v}%`, transformOrigin: "bottom" }}
          transition={{ duration: 0.6, delay: delay + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
        />
      ))}
    </div>
  );
}

/* ---------- variants ---------- */

function DashboardMock() {
  return (
    <Window title="app.reklamasistanim.com — Özet">
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          <Kpi label="Harcama" value="₺12.480" delta="%12" up={false} />
          <Kpi label="Tıklama" value="8.420" delta="%18" />
          <Kpi label="Dönüşüm" value="312" delta="%24" />
          <Kpi label="ROAS" value="4.2x" delta="%9" />
        </div>
        <motion.div variants={item} className="mt-4 rounded-xl border border-[var(--line)] p-3">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-xs font-semibold text-[var(--ink)]">Günlük performans</p>
            <span className="text-[10px] text-[var(--ink-muted)]">Son 14 gün</span>
          </div>
          <Bars values={[38, 52, 44, 60, 55, 72, 64, 58, 76, 68, 84, 78, 92, 88]} />
        </motion.div>
      </motion.div>
    </Window>
  );
}

function AiMock() {
  const suggestions = [
    {
      title: "12 arama terimini negatife ekle",
      note: "Son 7 günde ₺840 boşa harcama tespit edildi",
      tag: "Yüksek öncelik",
    },
    {
      title: "\"Marka\" kampanyasına bütçe kaydır",
      note: "ROAS 6.1x — günlük bütçe %20 artırılabilir",
      tag: "Fırsat",
    },
    {
      title: "Yeni PMax kampanya taslağı hazır",
      note: "AI kurulumu tamamladı, onayınızı bekliyor",
      tag: "Onay bekliyor",
    },
  ];
  return (
    <Window title="app.reklamasistanim.com — AI İçgörüleri">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="space-y-2.5"
      >
        <motion.div variants={item} className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100">
            <Bot className="h-4 w-4" />
          </span>
          <div>
            <p className="text-xs font-semibold text-[var(--ink)]">AI Asistan</p>
            <p className="flex items-center gap-1 text-[10px] text-emerald-600">
              <motion.span
                className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.6, repeat: Infinity }}
              />
              Hesabınızı analiz ediyor
            </p>
          </div>
        </motion.div>
        {suggestions.map((s) => (
          <motion.div
            key={s.title}
            variants={item}
            className="flex items-start justify-between gap-3 rounded-xl border border-[var(--line)] bg-white p-3"
          >
            <div className="flex items-start gap-2.5">
              <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
              <div>
                <p className="text-xs font-semibold text-[var(--ink)]">{s.title}</p>
                <p className="mt-0.5 text-[11px] text-[var(--ink-muted)]">{s.note}</p>
                <span className="mt-1.5 inline-block rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-medium text-emerald-700">
                  {s.tag}
                </span>
              </div>
            </div>
            <span className="shrink-0 rounded-lg bg-[var(--accent)] px-2.5 py-1 text-[10px] font-semibold text-white">
              Uygula
            </span>
          </motion.div>
        ))}
      </motion.div>
    </Window>
  );
}

function CampaignsMock() {
  const rows = [
    { name: "Marka — Arama", channel: "Arama", cost: "₺4.120", conv: "128", active: true },
    { name: "Genel — PMax", channel: "PMax", cost: "₺5.860", conv: "142", active: true },
    { name: "Yeniden Pazarlama", channel: "Display", cost: "₺1.240", conv: "31", active: true },
    { name: "Video — Tanıtım", channel: "Video", cost: "₺1.260", conv: "11", active: false },
  ];
  return (
    <Window title="app.reklamasistanim.com — Kampanyalar">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="space-y-2"
      >
        <motion.div
          variants={item}
          className="grid grid-cols-[1fr_auto_auto_auto] items-center gap-3 px-2 text-[10px] font-semibold uppercase tracking-wide text-[var(--ink-muted)]"
        >
          <span>Kampanya</span>
          <span className="w-14 text-right">Maliyet</span>
          <span className="w-10 text-right">Dön.</span>
          <span className="w-6" />
        </motion.div>
        {rows.map((r) => (
          <motion.div
            key={r.name}
            variants={item}
            className="grid grid-cols-[1fr_auto_auto_auto] items-center gap-3 rounded-xl border border-[var(--line)] bg-white px-3 py-2.5"
          >
            <div className="min-w-0">
              <p className="truncate text-xs font-semibold text-[var(--ink)]">{r.name}</p>
              <span className="mt-0.5 inline-block rounded-full bg-slate-100 px-1.5 py-0.5 text-[10px] text-[var(--ink-muted)]">
                {r.channel}
              </span>
            </div>
            <span className="w-14 text-right text-xs font-medium text-[var(--ink)]">{r.cost}</span>
            <span className="w-10 text-right text-xs text-[var(--ink-muted)]">{r.conv}</span>
            <span
              className={`flex h-6 w-6 items-center justify-center rounded-full ${
                r.active ? "bg-emerald-50 text-emerald-600" : "bg-slate-100 text-slate-400"
              }`}
            >
              {r.active ? <Play className="h-3 w-3" /> : <Pause className="h-3 w-3" />}
            </span>
          </motion.div>
        ))}
        <motion.div
          variants={item}
          className="flex items-center gap-2 rounded-xl border border-dashed border-emerald-300 bg-emerald-50/60 px-3 py-2.5"
        >
          <Sparkles className="h-3.5 w-3.5 text-emerald-600" />
          <p className="text-[11px] font-medium text-emerald-800">
            AI önerisi: &quot;Genel — PMax&quot; bütçesini %15 artır
          </p>
        </motion.div>
      </motion.div>
    </Window>
  );
}

function AnalyticsMock() {
  return (
    <Window title="app.reklamasistanim.com — Analiz">
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <div className="grid grid-cols-2 gap-2">
          <Kpi label="Bu hafta dönüşüm" value="86" delta="%21" />
          <Kpi label="Dönüşüm maliyeti" value="₺38,4" delta="%11" up={false} />
        </div>
        <motion.div variants={item} className="mt-3 rounded-xl border border-[var(--line)] p-3">
          <p className="mb-2 text-xs font-semibold text-[var(--ink)]">Hafta karşılaştırması</p>
          <Bars values={[42, 58, 50, 66, 61, 78, 72]} />
          <div className="mt-1.5 flex justify-between text-[9px] text-[var(--ink-muted)]">
            <span>Pzt</span><span>Sal</span><span>Çar</span><span>Per</span><span>Cum</span><span>Cmt</span><span>Paz</span>
          </div>
        </motion.div>
        <motion.div
          variants={item}
          className="mt-3 flex items-center justify-between rounded-xl border border-[var(--line)] bg-[var(--paper)] px-3 py-2.5"
        >
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-rose-50 text-rose-500">
              <FileText className="h-4 w-4" />
            </span>
            <div>
              <p className="text-xs font-semibold text-[var(--ink)]">Haftalık rapor — 20-26 Tem</p>
              <p className="text-[10px] text-[var(--ink-muted)]">PDF · 14 sayfa</p>
            </div>
          </div>
          <span className="flex items-center gap-1 rounded-lg border border-[var(--line)] px-2.5 py-1 text-[10px] font-semibold text-[var(--ink)]">
            <Download className="h-3 w-3" /> İndir
          </span>
        </motion.div>
      </motion.div>
    </Window>
  );
}

function SearchTermsMock() {
  const rows = [
    { term: "reklam yönetim paneli", cost: "₺312", conv: "9", good: true },
    { term: "ücretsiz reklam ver", cost: "₺264", conv: "0", good: false },
    { term: "google ads ajansı fiyat", cost: "₺188", conv: "5", good: true },
    { term: "bedava tıklama botu", cost: "₺142", conv: "0", good: false },
  ];
  return (
    <Window title="app.reklamasistanim.com — Arama Terimleri">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="space-y-2"
      >
        {rows.map((r) => (
          <motion.div
            key={r.term}
            variants={item}
            className="flex items-center justify-between gap-3 rounded-xl border border-[var(--line)] bg-white px-3 py-2.5"
          >
            <div className="min-w-0">
              <p className="truncate text-xs font-medium text-[var(--ink)]">{r.term}</p>
              <p className="text-[10px] text-[var(--ink-muted)]">
                {r.cost} · {r.conv} dönüşüm
              </p>
            </div>
            {r.good ? (
              <span className="shrink-0 rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-semibold text-emerald-700">
                Performanslı
              </span>
            ) : (
              <span className="shrink-0 rounded-lg border border-rose-200 bg-rose-50 px-2.5 py-1 text-[10px] font-semibold text-rose-600">
                Negatife ekle
              </span>
            )}
          </motion.div>
        ))}
        <motion.p variants={item} className="flex items-center gap-1.5 px-1 text-[11px] text-[var(--ink-muted)]">
          <Sparkles className="h-3.5 w-3.5 text-emerald-500" />
          AI bu hafta 2 boşa harcayan terim tespit etti
        </motion.p>
      </motion.div>
    </Window>
  );
}

function OrganicMock() {
  return (
    <Window title="app.reklamasistanim.com — Blog Oluşturucu">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="space-y-3"
      >
        <motion.div variants={item} className="rounded-xl border border-[var(--line)] bg-[var(--paper)] px-3 py-2.5">
          <p className="text-[10px] font-medium uppercase tracking-wide text-[var(--ink-muted)]">
            GSC fırsatı
          </p>
          <p className="mt-1 text-xs font-semibold text-[var(--ink)]">
            &quot;evde kahve demleme yöntemleri&quot; — 4.2K gösterim, düşük tıklama
          </p>
        </motion.div>
        <motion.div variants={item} className="rounded-xl border border-emerald-200 bg-emerald-50/50 p-3">
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-emerald-600" />
            <p className="text-xs font-semibold text-[var(--ink)]">AI yazıyı üretiyor…</p>
          </div>
          <div className="mt-2.5 h-1.5 overflow-hidden rounded-full bg-emerald-100">
            <motion.div
              className="h-full rounded-full bg-emerald-500"
              initial={{ width: "8%" }}
              whileInView={{ width: "82%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, delay: 0.4, ease: "easeOut" }}
            />
          </div>
          <p className="mt-1.5 text-[10px] text-[var(--ink-muted)]">
            Başlık, içerik ve 3 görsel hazırlanıyor
          </p>
        </motion.div>
        <motion.div
          variants={item}
          className="flex items-center justify-between rounded-xl border border-[var(--line)] px-3 py-2.5"
        >
          <div className="flex items-center gap-2">
            <Globe className="h-4 w-4 text-[var(--ink-muted)]" />
            <p className="text-xs font-medium text-[var(--ink)]">WordPress — Perşembe 09:00</p>
          </div>
          <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
            Planlandı
          </span>
        </motion.div>
      </motion.div>
    </Window>
  );
}

function CompetitorsMock() {
  const ads = [
    {
      domain: "rakipfirma.com",
      headline: "Profesyonel Reklam Yönetimi | Hemen Teklif Alın",
      formats: "Arama · Display",
    },
    {
      domain: "digerajans.com.tr",
      headline: "Google Ads Uzmanı — İlk Ay %50 İndirim",
      formats: "Arama · Video",
    },
  ];
  return (
    <Window title="app.reklamasistanim.com — Rakip Analizi">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="space-y-2.5"
      >
        {ads.map((a) => (
          <motion.div key={a.domain} variants={item} className="rounded-xl border border-[var(--line)] bg-white p-3">
            <p className="text-[10px] font-medium text-emerald-700">Reklam · {a.domain}</p>
            <p className="mt-1 text-xs font-semibold text-[var(--ink)]">{a.headline}</p>
            <p className="mt-1 text-[10px] text-[var(--ink-muted)]">{a.formats}</p>
          </motion.div>
        ))}
        <motion.div
          variants={item}
          className="flex items-start gap-2 rounded-xl border border-dashed border-emerald-300 bg-emerald-50/60 p-3"
        >
          <Sparkles className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" />
          <p className="text-[11px] font-medium text-emerald-800">
            AI: Rakipler indirim mesajı kullanıyor — reklam metninize güçlü bir teklif ekleyin
          </p>
        </motion.div>
      </motion.div>
    </Window>
  );
}

function GbpMock() {
  return (
    <Window title="app.reklamasistanim.com — İşletme Profili">
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <motion.div variants={item} className="flex items-center gap-3 rounded-xl border border-[var(--line)] bg-white p-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
            <MapPin className="h-5 w-5" />
          </span>
          <div>
            <p className="text-xs font-semibold text-[var(--ink)]">Örnek Kafe — Kadıköy</p>
            <p className="mt-0.5 flex items-center gap-1 text-[10px] text-[var(--ink-muted)]">
              <span className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-current" />
                ))}
              </span>
              4.8 · 214 yorum
            </p>
          </div>
        </motion.div>
        <div className="mt-2.5 grid grid-cols-3 gap-2">
          <Kpi label="Görüntülenme" value="18.2K" delta="%14" />
          <Kpi label="Yol tarifi" value="642" delta="%22" />
          <Kpi label="Arama" value="318" delta="%8" />
        </div>
      </motion.div>
    </Window>
  );
}

function BillingMock() {
  return (
    <Window title="app.reklamasistanim.com — Abonelik">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="space-y-2.5"
      >
        <motion.div
          variants={item}
          className="flex items-center justify-between rounded-xl border border-emerald-200 bg-emerald-50/50 p-3"
        >
          <div>
            <p className="text-xs font-semibold text-[var(--ink)]">Profesyonel Plan</p>
            <p className="text-[10px] text-[var(--ink-muted)]">$119/ay · 3 hesap bağlı</p>
          </div>
          <span className="rounded-full bg-emerald-500 px-2 py-0.5 text-[10px] font-semibold text-white">
            Aktif
          </span>
        </motion.div>
        {["Marka A — 428-119-2210", "Marka B — 512-884-0031", "Ajans Müşteri — 743-201-5567"].map(
          (acc) => (
            <motion.div
              key={acc}
              variants={item}
              className="flex items-center justify-between rounded-xl border border-[var(--line)] bg-white px-3 py-2.5"
            >
              <p className="text-xs font-medium text-[var(--ink)]">{acc}</p>
              <span className="flex items-center gap-1 text-[10px] font-medium text-emerald-600">
                <Check className="h-3 w-3" /> Bağlı
              </span>
            </motion.div>
          )
        )}
      </motion.div>
    </Window>
  );
}

/* ---------- public API ---------- */

export function PanelMock({ kind, className = "" }: { kind: MockKind; className?: string }) {
  const map: Record<MockKind, ReactNode> = {
    dashboard: <DashboardMock />,
    ai: <AiMock />,
    campaigns: <CampaignsMock />,
    analytics: <AnalyticsMock />,
    "search-terms": <SearchTermsMock />,
    organic: <OrganicMock />,
    competitors: <CompetitorsMock />,
    gbp: <GbpMock />,
    billing: <BillingMock />,
  };
  return <div className={className}>{map[kind]}</div>;
}

/* Hero için geniş kompozit mock */
export function HeroMock() {
  return (
    <div className="relative">
      <Window title="app.reklamasistanim.com — Özet" className="relative z-10">
        <motion.div variants={stagger} initial="hidden" animate="show">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            <Kpi label="Harcama" value="₺12.480" delta="%12" up={false} />
            <Kpi label="Tıklama" value="8.420" delta="%18" />
            <Kpi label="Dönüşüm" value="312" delta="%24" />
            <Kpi label="ROAS" value="4.2x" delta="%9" />
          </div>
          <motion.div variants={item} className="mt-4 rounded-xl border border-[var(--line)] p-3">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-xs font-semibold text-[var(--ink)]">Günlük performans</p>
              <span className="text-[10px] text-[var(--ink-muted)]">Son 14 gün</span>
            </div>
            <Bars values={[38, 52, 44, 60, 55, 72, 64, 58, 76, 68, 84, 78, 92, 88]} delay={0.5} />
          </motion.div>
        </motion.div>
      </Window>

      <motion.div
        className="absolute -right-3 -top-6 z-20 hidden w-64 sm:block lg:-right-10"
        initial={{ opacity: 0, y: 20, rotate: 2 }}
        animate={{ opacity: 1, y: 0, rotate: 2 }}
        transition={{ delay: 0.9, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="rounded-xl border border-emerald-200 bg-white p-3 shadow-[var(--shadow)]"
        >
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
              <Sparkles className="h-3.5 w-3.5" />
            </span>
            <p className="text-[11px] font-semibold text-[var(--ink)]">AI önerisi</p>
          </div>
          <p className="mt-1.5 text-[11px] leading-relaxed text-[var(--ink-muted)]">
            12 boşa harcayan arama terimi bulundu. Negatife eklensin mi?
          </p>
          <div className="mt-2 flex gap-1.5">
            <span className="rounded-lg bg-[var(--accent)] px-2.5 py-1 text-[10px] font-semibold text-white">
              Uygula
            </span>
            <span className="rounded-lg border border-[var(--line)] px-2.5 py-1 text-[10px] font-medium text-[var(--ink-muted)]">
              İncele
            </span>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute -bottom-6 -left-3 z-20 hidden w-56 sm:block lg:-left-10"
        initial={{ opacity: 0, y: 20, rotate: -2 }}
        animate={{ opacity: 1, y: 0, rotate: -2 }}
        transition={{ delay: 1.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="flex items-center gap-2.5 rounded-xl border border-[var(--line)] bg-white p-3 shadow-[var(--shadow)]"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-rose-50 text-rose-500">
            <FileText className="h-4 w-4" />
          </span>
          <div>
            <p className="text-[11px] font-semibold text-[var(--ink)]">Haftalık rapor hazır</p>
            <p className="text-[10px] text-[var(--ink-muted)]">PDF · 20-26 Temmuz</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

/* Mobil uygulama bölümü için telefon mock'u */
export function PhoneMock() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto w-56"
    >
      <div className="rounded-[2rem] border-[6px] border-slate-800 bg-white shadow-2xl">
        <div className="rounded-[1.6rem] bg-[var(--paper)] p-3">
          <div className="mx-auto mb-3 h-1 w-12 rounded-full bg-slate-300" />
          <p className="text-[10px] font-semibold text-[var(--ink)]">Merhaba 👋</p>
          <p className="text-[9px] text-[var(--ink-muted)]">Bugünkü performansınız</p>
          <div className="mt-2 grid grid-cols-2 gap-1.5">
            <div className="rounded-lg border border-[var(--line)] bg-white p-2">
              <p className="text-[8px] text-[var(--ink-muted)]">Harcama</p>
              <p className="text-xs font-bold text-[var(--ink)]">₺1.240</p>
            </div>
            <div className="rounded-lg border border-[var(--line)] bg-white p-2">
              <p className="text-[8px] text-[var(--ink-muted)]">Dönüşüm</p>
              <p className="text-xs font-bold text-emerald-600">36 ↑</p>
            </div>
          </div>
          <div className="mt-2 rounded-lg border border-emerald-200 bg-emerald-50/60 p-2">
            <p className="flex items-center gap-1 text-[9px] font-semibold text-emerald-800">
              <Sparkles className="h-2.5 w-2.5" /> AI önerisi
            </p>
            <p className="mt-0.5 text-[8px] leading-relaxed text-emerald-900/80">
              Marka kampanyası bütçesi artırılabilir
            </p>
          </div>
          <div className="mt-2 rounded-lg border border-[var(--line)] bg-white p-2">
            <div className="flex h-10 items-end gap-0.5">
              {[40, 60, 45, 75, 55, 85, 70].map((v, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t-sm bg-emerald-400"
                  style={{ height: `${v}%` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
