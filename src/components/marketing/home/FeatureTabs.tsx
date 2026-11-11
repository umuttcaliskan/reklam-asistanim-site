"use client";

import { useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import { BrowserFrame } from "@/components/marketing/home/Frames";
import { SHOTS } from "@/components/marketing/home/shots";
import { cn } from "@/lib/cn";

const TABS = [
  {
    id: "ozet",
    label: "Özet",
    title: "Güne tek ekranla başlayın",
    text: "Harcama, dönüşüm ve ROAS önceki döneme göre; önemli dönüşümleriniz favori kartlarda.",
    bullets: ["Dönem özeti cümleyle", "Favori dönüşüm takibi", "Açık alarmlar en üstte"],
    shot: SHOTS.ozet,
    alt: "Özet ekranı: harcama, tıklama, dönüşüm ve ROAS kartları",
  },
  {
    id: "ai",
    label: "AI önerileri",
    title: "Kampanya kampanya yapılacaklar listesi",
    text: "Her öneri öncelik, risk ve Google provası rozetiyle gelir. Negatif kelimelerde tek tek seçim yapabilirsiniz.",
    bullets: ["Bütçe, teklif, kelime, öğe, hedefleme, ölçüm", "Ads'te ne olacağı açıkça yazılı", "Uygulananların sonucu ölçülür"],
    shot: SHOTS.aiOneriler,
    alt: "Günlük AI Analiz ekranı",
  },
  {
    id: "plan",
    label: "Hesap planı",
    title: "AI'ın neye göre karar verdiği yazılı",
    text: "Hedef müşteri maliyeti, hedefleme, bütçe planı, ölçüm planı ve kelime politikaları tek sayfada. Plan değişince öneriler de değişir.",
    bullets: ["Onaylı ve versiyonlu plan", "Rakip ve marka politikası", "30–90 günlük yol haritası"],
    shot: SHOTS.strateji,
    alt: "Hesap planı ekranı: hedef, hedefleme ve bütçe planı",
  },
  {
    id: "analiz",
    label: "Analiz",
    title: "Trendler ve kampanya kırılımı",
    text: "Günlük maliyet ve tıklama trendi, kanal dağılımı ve önceki döneme göre değişim rozetleri. Haftalık PDF rapor otomatik hazırlanır.",
    bullets: ["Önceki dönem karşılaştırması", "Kanal bazlı maliyet", "Haftalık AI etki raporu"],
    shot: SHOTS.analiz,
    alt: "Analiz ekranı: KPI kartları ve günlük trend grafiği",
  },
  {
    id: "kampanya",
    label: "Kampanyalar",
    title: "Tüm kampanyalar tek tabloda",
    text: "Arama, Performance Max, Display, Video ve Alışveriş. Yeni kampanyayı AI'a brief vererek kurdurun; duraklatılmış olarak hazırlanır.",
    bullets: ["Hızlı duraklat / etkinleştir", "AI ile kampanya kurulumu", "Kampanya bazında hedefler"],
    shot: SHOTS.kampanyalar,
    alt: "Kampanyalar tablosu",
  },
  {
    id: "terim",
    label: "Arama terimleri",
    title: "Hangi aramaya para verdiğinizi görün",
    text: "Gerçek kullanıcı sorguları, maliyet ve dönüşüm değeriyle. Alakasız olanlar AI kartlarına negatif öneri olarak düşer.",
    bullets: ["Terim bazında maliyet ve dönüşüm", "Negatif listeler", "Uzantı ve anahtar kelime envanteri"],
    shot: SHOTS.aramaTerimleri,
    alt: "Arama terimleri tablosu",
  },
];

export function FeatureTabs() {
  const [active, setActive] = useState(TABS[0].id);
  const tab = TABS.find((t) => t.id === active) ?? TABS[0];

  return (
    <section className="border-y border-[var(--line)] bg-[var(--paper)]">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
            Panel
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Google Ads&apos;in karmaşasını sade bir panele indirdik
          </h2>
        </div>

        <div
          role="tablist"
          aria-label="Panel ekranları"
          className="mx-auto mt-10 flex max-w-full gap-1 overflow-x-auto rounded-2xl border border-[var(--line)] bg-white/[0.03] p-1 sm:w-fit"
        >
          {TABS.map((t) => (
            <button
              key={t.id}
              type="button"
              role="tab"
              id={`tab-${t.id}`}
              aria-selected={t.id === active}
              aria-controls={`panel-${t.id}`}
              onClick={() => setActive(t.id)}
              className={cn(
                "shrink-0 rounded-xl px-4 py-2 text-sm font-semibold transition",
                t.id === active
                  ? "bg-[var(--accent)] text-[#04150f]"
                  : "text-[var(--ink-muted)] hover:text-white"
              )}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div
          role="tabpanel"
          id={`panel-${tab.id}`}
          aria-labelledby={`tab-${tab.id}`}
          className="mt-10 grid items-start gap-8 lg:grid-cols-[minmax(0,4fr)_minmax(0,9fr)] lg:gap-10"
        >
          <div className="lg:pt-6">
            <h3 className="text-2xl font-semibold text-white">{tab.title}</h3>
            <p className="mt-3 leading-relaxed text-[var(--ink-muted)]">{tab.text}</p>
            <ul className="mt-5 space-y-2">
              {tab.bullets.map((b) => (
                <li key={b} className="flex gap-2 text-sm text-[var(--ink-muted)]">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" />
                  {b}
                </li>
              ))}
            </ul>
            <Link
              href="/ozellikler"
              className="mt-6 inline-block text-sm font-semibold text-[var(--accent)] hover:underline"
            >
              Tüm özellikler →
            </Link>
          </div>
          <BrowserFrame
            key={tab.id}
            src={tab.shot}
            alt={tab.alt}
            sizes="(min-width: 1024px) 800px, 100vw"
          />
        </div>
      </div>
    </section>
  );
}
