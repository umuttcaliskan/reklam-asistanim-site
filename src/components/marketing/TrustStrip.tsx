"use client";

import { Bot, FileText, Search, Sparkles } from "lucide-react";
import { Reveal } from "@/components/marketing/Reveal";

const pillars = [
  {
    icon: Bot,
    title: "AI yönetim",
    text: "Yapay zeka hesabınızı 7/24 izler, kampanya kurar, optimizasyon önerir.",
  },
  {
    icon: Search,
    title: "Google Ads + GSC",
    text: "Reklam ve organik veriniz tek panelde; arama terimlerinden bloga.",
  },
  {
    icon: FileText,
    title: "Haftalık PDF rapor",
    text: "Her hafta otomatik oluşan detaylı performans raporu.",
  },
  {
    icon: Sparkles,
    title: "AI içerik üretimi",
    text: "Blog yazıları ve görseller AI ile üretilir, WordPress'e yayınlanır.",
  },
];

export function TrustStrip() {
  return (
    <section className="border-b border-[var(--line)] bg-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <Reveal>
          <p className="text-center text-sm font-medium text-[var(--ink-muted)]">
            Tek cümlede:{" "}
            <span className="text-[var(--ink)]">
              yapay zeka destekli reklam yönetimi — Google Ads, GSC, İşletme Profili ve
              içerik üretimi aynı yerde.
            </span>
          </p>
        </Reveal>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <div className="group border-l-2 border-emerald-200 pl-4 transition hover:border-[var(--accent)]">
                <p.icon className="h-5 w-5 text-[var(--accent)]" />
                <h3 className="mt-2 font-bold text-[var(--ink)]">{p.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-[var(--ink-muted)]">
                  {p.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
