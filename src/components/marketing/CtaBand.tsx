"use client";

import { Bot, FileText, ShieldCheck, Zap } from "lucide-react";
import { CtaPair } from "@/components/marketing/CtaPair";
import { Reveal } from "@/components/marketing/Reveal";
import { TRIAL_LABEL } from "@/lib/site";

const highlights = [
  { icon: Bot, label: "Otonom AI izleme" },
  { icon: Zap, label: "Onaylı aksiyonlar" },
  { icon: FileText, label: "Haftalık PDF" },
  { icon: ShieldCheck, label: "Kontrol sizde" },
];

export function CtaBand() {
  return (
    <section className="relative overflow-hidden border-t border-[var(--line)] bg-[var(--accent-deep)]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(70%_80%_at_50%_0%,rgba(0,201,138,0.35),transparent_65%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <Reveal className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold text-[var(--accent)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
            {TRIAL_LABEL} · Toplantı da planlanabilir
          </p>

          <h2 className="mt-5 font-[family-name:var(--font-display)] text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Otonom optimizasyona bugün başlayın.
          </h2>

          <p className="mt-4 max-w-lg text-base leading-relaxed text-white/70">
            3 gün ücretsiz deneyin veya kısa bir tanışma toplantısı ayarlayın. Google Ads
            hazır; Meta Ads yakında.
          </p>

          <div className="mt-8 flex w-full justify-center">
            <CtaPair onDark showTrialHint className="items-center sm:items-center" />
          </div>

          <div className="mt-10 grid w-full max-w-xl grid-cols-2 gap-3 sm:grid-cols-4">
            {highlights.map((h) => (
              <div
                key={h.label}
                className="flex flex-col items-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-3"
              >
                <h.icon className="h-4 w-4 text-[var(--accent)]" />
                <span className="text-[11px] font-medium leading-tight text-white/80">
                  {h.label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
