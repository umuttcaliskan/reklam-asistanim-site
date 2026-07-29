"use client";

import { Apple, Play, Smartphone } from "lucide-react";
import { PhoneMock } from "@/components/marketing/PanelMock";
import { Reveal } from "@/components/marketing/Reveal";

export function MobileAppSection() {
  return (
    <section className="border-y border-[var(--line)] bg-gradient-to-b from-white to-emerald-50/40">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2">
        <Reveal>
          <p className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-3 py-1 text-xs font-semibold text-emerald-800">
            <Smartphone className="h-3.5 w-3.5" />
            Yakında
          </p>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-[var(--ink)] sm:text-3xl">
            Reklamlarınız cebinizde
          </h2>
          <p className="mt-3 max-w-md text-base leading-relaxed text-[var(--ink-muted)]">
            iOS ve Android uygulamalarımızla kampanyalarınızı telefonunuzdan yönetin:
            anlık performans, AI önerileri ve raporlar her an yanınızda.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <span className="inline-flex cursor-default items-center gap-2.5 rounded-xl bg-slate-900 px-4 py-2.5 text-white opacity-90">
              <Apple className="h-5 w-5" />
              <span className="text-left leading-tight">
                <span className="block text-[9px] uppercase tracking-wide text-slate-300">
                  Yakında
                </span>
                <span className="block text-sm font-semibold">App Store</span>
              </span>
            </span>
            <span className="inline-flex cursor-default items-center gap-2.5 rounded-xl bg-slate-900 px-4 py-2.5 text-white opacity-90">
              <Play className="h-5 w-5 fill-current" />
              <span className="text-left leading-tight">
                <span className="block text-[9px] uppercase tracking-wide text-slate-300">
                  Yakında
                </span>
                <span className="block text-sm font-semibold">Google Play</span>
              </span>
            </span>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <PhoneMock />
        </Reveal>
      </div>
    </section>
  );
}
