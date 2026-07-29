"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { HeroMock } from "@/components/marketing/PanelMock";
import { appRegisterUrl, SITE_NAME, TRIAL_LABEL } from "@/lib/site";

export function Hero() {
  return (
    <section className="bg-hero-glow relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-50" />
      <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 sm:pb-28 sm:pt-24">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          {/* Static H1 — must stay opacity:1 for OAuth brand crawlers */}
          <h1 className="text-5xl font-extrabold leading-[1.02] tracking-[-0.03em] text-[var(--accent-deep)] sm:text-6xl lg:text-7xl">
            {SITE_NAME}
          </h1>

          <motion.p
            className="mt-5 max-w-2xl text-xl font-semibold leading-snug tracking-tight text-[var(--ink)] sm:text-2xl lg:text-[1.75rem]"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
          >
            Yapay zeka{" "}
            <span className="text-[var(--accent-hover)]">reklamlarınızı yönetsin</span>,
            siz büyümeye odaklanın.
          </motion.p>

          <motion.p
            className="mt-5 max-w-lg text-base leading-relaxed text-[var(--ink-muted)] sm:text-lg"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.14 }}
          >
            Google Ads, raporlar ve yapay zeka içgörüleri tek panelde. Kampanyalarınızı
            daha sakin, daha akıllı yönetin.
          </motion.p>

          <motion.div
            className="mt-9 flex flex-wrap items-center justify-center gap-3"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a
              href={appRegisterUrl}
              className="inline-flex items-center gap-2 rounded-xl bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[var(--accent-hover)]"
            >
              Ücretsiz dene
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              href="/fiyatlandirma"
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--line)] bg-white/80 px-6 py-3 text-sm font-semibold text-[var(--ink)] transition hover:border-emerald-200 hover:bg-white"
            >
              Planları gör
            </Link>
          </motion.div>

          <motion.div
            className="mt-5 inline-flex items-center gap-2 rounded-full border border-emerald-200/80 bg-white/70 px-3.5 py-1.5 text-xs font-medium tracking-wide text-emerald-800 backdrop-blur-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.28 }}
          >
            <Sparkles className="h-3.5 w-3.5 text-emerald-500" />
            {TRIAL_LABEL}
          </motion.div>
        </div>

        <motion.div
          className="mt-16 sm:mt-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mx-auto max-w-3xl">
            <HeroMock />
          </div>
        </motion.div>

        <motion.p
          className="mt-12 text-center text-sm tracking-wide text-[var(--ink-muted)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55 }}
        >
          Google Ads · Search Console · İşletme Profili · AI
        </motion.p>
      </div>
    </section>
  );
}
