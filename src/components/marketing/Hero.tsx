"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { HeroMock } from "@/components/marketing/PanelMock";
import { appRegisterUrl, TRIAL_LABEL } from "@/lib/site";

export function Hero() {
  return (
    <section className="bg-hero-glow relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-60" />
      <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-14 sm:px-6 sm:pb-28 sm:pt-20">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <motion.div
            className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-3 py-1.5 text-xs font-semibold text-emerald-800"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <Sparkles className="h-3.5 w-3.5 text-emerald-500" />
            {TRIAL_LABEL} — hemen başlayın
          </motion.div>

          <motion.h1
            className="mt-5 text-4xl font-bold leading-[1.08] tracking-tight text-[var(--ink)] sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
          >
            Yapay zeka{" "}
            <span className="text-[var(--accent-hover)]">reklamlarınızı yönetsin</span>,
            siz işinize odaklanın.
          </motion.h1>

          <motion.p
            className="mt-5 max-w-xl text-base leading-relaxed text-[var(--ink-muted)] sm:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
          >
            Reklam Asistanım&apos;ın yapay zekası Google Ads hesabınızı 7/24 analiz eder,
            kampanyaları kurar, boşa harcamayı keser ve her hafta detaylı PDF rapor sunar.
            Onay her zaman sizde.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
          >
            <a
              href={appRegisterUrl}
              className="inline-flex items-center gap-2 rounded-xl bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[var(--accent-hover)]"
            >
              Ücretsiz dene
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              href="/fiyatlandirma"
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--line)] bg-white/80 px-5 py-3 text-sm font-semibold text-[var(--ink)] transition hover:border-emerald-200 hover:bg-white"
            >
              Planları gör
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="mt-14 sm:mt-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mx-auto max-w-3xl">
            <HeroMock />
          </div>
        </motion.div>

        <motion.p
          className="mt-12 flex flex-wrap items-center justify-center gap-2 text-center text-sm text-[var(--ink-muted)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Sparkles className="h-4 w-4 text-[var(--accent)]" />
          Google Ads · Search Console · İşletme Profili · AI içerik üretimi — tek panelde
        </motion.p>
      </div>
    </section>
  );
}
