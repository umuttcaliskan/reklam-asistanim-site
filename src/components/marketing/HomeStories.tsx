"use client";

import Link from "next/link";
import { Reveal } from "@/components/marketing/Reveal";
import { PanelMock } from "@/components/marketing/PanelMock";

export function ProductStories() {
  return (
    <>
      <section className="bg-mesh border-y border-[var(--line)]">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
              Reklam yönetimi
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Google Ads bugün. Meta Ads yakında.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--ink-muted)]">
              AI harcama ve dönüşümü sürekli tarar; bütçe, teklif ve negatif önerilerini
              otonom listeler. Siz onaylarsınız — kontrol sizde.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold">
              <Link href="/urun/google-ads" className="text-[var(--accent)] hover:underline">
                Google Ads →
              </Link>
              <Link href="/urun/meta-ads" className="text-[var(--ink-muted)] hover:text-[var(--accent)]">
                Meta Ads (yakında) →
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-2xl border border-[var(--line)] shadow-[var(--shadow)]">
              <PanelMock kind="ai" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[var(--paper)]">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-14">
          <Reveal className="order-2 lg:order-1">
            <div className="overflow-hidden rounded-2xl border border-[var(--line)] shadow-[var(--shadow)]">
              <PanelMock kind="organic" />
            </div>
          </Reveal>
          <Reveal delay={0.08} className="order-1 lg:order-2">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
              Organik + AI
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              GSC’den blog’a — Ads’in yanında organik
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--ink-muted)]">
              Search Console fırsatlarından AI blog üretir; WordPress’e yayınlar. Asistana
              sorun, onaylı aksiyonlarla ilerleyin.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold">
              <Link href="/urun/organik" className="text-[var(--accent)] hover:underline">
                Organik & blog →
              </Link>
              <Link href="/urun/ai-asistan" className="text-[var(--ink-muted)] hover:text-[var(--accent)]">
                AI Asistan →
              </Link>
              <Link href="/sss" className="text-[var(--ink-muted)] hover:text-[var(--accent)]">
                SSS →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
