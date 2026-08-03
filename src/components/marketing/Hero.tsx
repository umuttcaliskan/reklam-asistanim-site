"use client";

import { motion } from "framer-motion";
import { CtaPair } from "@/components/marketing/CtaPair";
import { HeroMock } from "@/components/marketing/PanelMock";
import { SITE_NAME, TRIAL_LABEL } from "@/lib/site";

const CHANNELS = [
  { name: "Google Ads", soon: false },
  { name: "Meta Ads", soon: true },
  { name: "Search Console", soon: false },
  { name: "WordPress", soon: false },
];

export function Hero() {
  return (
    <section className="bg-hero-glow relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
      <div className="relative mx-auto max-w-6xl px-4 pb-8 pt-16 sm:px-6 sm:pb-12 sm:pt-24">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <motion.p
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white/[0.04] px-3.5 py-1.5 text-xs font-semibold text-[var(--accent)]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
            {TRIAL_LABEL}
          </motion.p>

          {/* Static H1 — must stay opacity:1 for OAuth brand crawlers */}
          <h1 className="font-[family-name:var(--font-display)] text-5xl font-semibold leading-[1.05] tracking-[-0.03em] text-white sm:text-6xl lg:text-7xl">
            {SITE_NAME}
          </h1>

          <motion.p
            className="mt-6 max-w-2xl text-xl font-medium leading-snug tracking-tight text-white/90 sm:text-2xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.06 }}
          >
            Google ve Meta reklamlarınızı{" "}
            <span className="text-[var(--accent)]">AI otonom optimize etsin</span>
          </motion.p>

          <motion.p
            className="mt-4 max-w-lg text-base leading-relaxed text-[var(--ink-muted)] sm:text-lg"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.12 }}
          >
            Hesabı sürekli izler, önerir, onayınızla uygular. Organik büyümeyi GSC + blog
            ile aynı panelde bağlayın.
          </motion.p>

          <motion.div
            className="mt-8 flex w-full justify-center"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.18 }}
          >
            <CtaPair showTrialHint className="items-center sm:items-center" />
          </motion.div>

          <motion.div
            className="mt-10 flex flex-wrap items-center justify-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.28 }}
          >
            {CHANNELS.map((ch) => (
              <span
                key={ch.name}
                className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--line)] bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-[var(--ink-muted)]"
              >
                <span
                  className={
                    ch.soon
                      ? "h-1.5 w-1.5 rounded-full bg-amber-400"
                      : "h-1.5 w-1.5 rounded-full bg-[var(--accent)]"
                  }
                />
                {ch.name}
                {ch.soon ? (
                  <span className="text-[10px] font-semibold uppercase tracking-wide text-amber-400/90">
                    yakında
                  </span>
                ) : null}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        className="relative w-full"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-transparent to-black/40" />
        <div className="relative mx-auto max-w-5xl px-2 sm:px-4">
          <div className="overflow-hidden rounded-t-2xl border border-b-0 border-white/10 shadow-2xl shadow-black/50">
            <HeroMock />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
