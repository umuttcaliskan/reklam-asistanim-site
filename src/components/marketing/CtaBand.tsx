"use client";

import { ArrowRight, Bot, CalendarDays, FileText, ShieldCheck, Zap } from "lucide-react";
import { Reveal } from "@/components/marketing/Reveal";
import { appRegisterUrl, MEETING_URL, TRIAL_LABEL } from "@/lib/site";

const highlights = [
  { icon: Bot, label: "AI 7/24 izler" },
  { icon: Zap, label: "Dakikalar içinde kurulum" },
  { icon: FileText, label: "Haftalık PDF rapor" },
  { icon: ShieldCheck, label: "Onay her zaman sizde" },
];

export function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-[var(--accent-deep)]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(70%_80%_at_50%_0%,rgba(16,185,129,0.35),transparent_65%)]" />
        <div className="absolute -left-24 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="absolute -right-16 bottom-0 h-56 w-56 rounded-full bg-teal-300/15 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <Reveal className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-emerald-300/35 bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-emerald-100 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
            {TRIAL_LABEL} — tüm özellikleri test edin
          </p>

          <h2 className="mt-5 font-[family-name:var(--font-instrument)] text-3xl leading-tight text-white sm:text-4xl lg:text-[2.75rem]">
            Reklamlarınızı bugün yapay zekaya emanet edin.
          </h2>

          <p className="mt-4 max-w-lg text-base leading-relaxed text-emerald-100/85">
            Panele kaydolun, Google Ads hesabınızı bağlayın; AI ilk analizini dakikalar
            içinde hazırlasın.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={appRegisterUrl}
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[var(--accent-deep)] shadow-lg shadow-emerald-950/20 transition hover:bg-emerald-50"
            >
              Ücretsiz dene
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={MEETING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white/40 hover:bg-white/10"
            >
              <CalendarDays className="h-4 w-4" />
              Toplantı planla
            </a>
          </div>

          <div className="mt-10 grid w-full max-w-xl grid-cols-2 gap-3 sm:grid-cols-4">
            {highlights.map((h) => (
              <div
                key={h.label}
                className="flex flex-col items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-3 py-3 backdrop-blur-sm"
              >
                <h.icon className="h-4 w-4 text-emerald-300" />
                <span className="text-[11px] font-medium leading-tight text-emerald-50/90">
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
