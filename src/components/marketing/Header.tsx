"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  Bot,
  ChevronDown,
  GraduationCap,
  HelpCircle,
  LayoutGrid,
  Menu,
  Megaphone,
  Search,
  X,
} from "lucide-react";
import { appLoginUrl, appRegisterUrl, MEETING_URL } from "@/lib/site";

const productLinks = [
  {
    href: "/urun/google-ads",
    label: "Google Ads",
    description: "Kampanya + otonom optimizasyon",
    icon: Megaphone,
  },
  {
    href: "/urun/meta-ads",
    label: "Meta Ads",
    description: "Yakında — erken erişim",
    icon: LayoutGrid,
    badge: "Yakında",
  },
  {
    href: "/urun/organik",
    label: "Organik & Blog",
    description: "GSC, AI blog, WordPress",
    icon: Search,
  },
  {
    href: "/urun/ai-asistan",
    label: "AI Asistan",
    description: "Otonom öneri, onay sizde",
    icon: Bot,
  },
  {
    href: "/ozellikler",
    label: "Tüm özellikler",
    description: "Panel modülleri",
    icon: LayoutGrid,
  },
];

const resourceLinks = [
  {
    href: "/blog",
    label: "Blog",
    description: "Reklam ve büyüme rehberleri",
    icon: BookOpen,
  },
  {
    href: "/akademi",
    label: "Akademi",
    description: "Video eğitim setleri",
    icon: GraduationCap,
  },
  {
    href: "/sss",
    label: "Sıkça Sorulan Sorular",
    description: "Merak edilenler",
    icon: HelpCircle,
  },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const productsRef = useRef<HTMLDivElement>(null);
  const resourcesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (productsRef.current && !productsRef.current.contains(e.target as Node)) {
        setProductsOpen(false);
      }
      if (resourcesRef.current && !resourcesRef.current.contains(e.target as Node)) {
        setResourcesOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const closeAll = () => {
    setOpen(false);
    setProductsOpen(false);
    setResourcesOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--paper)]/75 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2" onClick={closeAll}>
          <Image
            src="/reklam-asistanim-logo.svg"
            alt="Reklam Asistanım"
            width={160}
            height={40}
            className="logo-on-dark h-8 w-auto"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          <div className="relative" ref={productsRef}>
            <button
              type="button"
              onClick={() => {
                setProductsOpen((v) => !v);
                setResourcesOpen(false);
              }}
              className="flex items-center gap-1 text-sm font-medium text-[var(--ink-muted)] transition hover:text-white"
            >
              Ürün
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform ${productsOpen ? "rotate-180" : ""}`}
              />
            </button>
            {productsOpen ? (
              <div className="absolute left-0 top-full mt-3 w-80 rounded-2xl border border-[var(--line)] bg-[var(--paper-elevated)] p-2 shadow-[var(--shadow)]">
                {productLinks.map((r) => (
                  <Link
                    key={r.href}
                    href={r.href}
                    onClick={closeAll}
                    className="flex items-start gap-3 rounded-xl px-3 py-2.5 transition hover:bg-white/[0.05]"
                  >
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--accent-soft)] text-[var(--accent)]">
                      <r.icon className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="flex items-center gap-1.5 text-sm font-semibold text-white">
                        {r.label}
                        {"badge" in r && r.badge ? (
                          <span className="rounded bg-amber-400/15 px-1.5 py-0.5 text-[10px] font-semibold text-amber-300">
                            {r.badge}
                          </span>
                        ) : null}
                      </span>
                      <span className="block text-xs text-[var(--ink-muted)]">
                        {r.description}
                      </span>
                    </span>
                  </Link>
                ))}
              </div>
            ) : null}
          </div>

          <Link
            href="/fiyatlandirma"
            className="text-sm font-medium text-[var(--ink-muted)] transition hover:text-white"
          >
            Fiyatlandırma
          </Link>

          <div className="relative" ref={resourcesRef}>
            <button
              type="button"
              onClick={() => {
                setResourcesOpen((v) => !v);
                setProductsOpen(false);
              }}
              className="flex items-center gap-1 text-sm font-medium text-[var(--ink-muted)] transition hover:text-white"
            >
              Kaynaklar
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform ${resourcesOpen ? "rotate-180" : ""}`}
              />
            </button>
            {resourcesOpen ? (
              <div className="absolute left-1/2 top-full mt-3 w-72 -translate-x-1/2 rounded-2xl border border-[var(--line)] bg-[var(--paper-elevated)] p-2 shadow-[var(--shadow)]">
                {resourceLinks.map((r) => (
                  <Link
                    key={r.href}
                    href={r.href}
                    onClick={closeAll}
                    className="flex items-start gap-3 rounded-xl px-3 py-2.5 transition hover:bg-white/[0.05]"
                  >
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--accent-soft)] text-[var(--accent)]">
                      <r.icon className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-white">
                        {r.label}
                      </span>
                      <span className="block text-xs text-[var(--ink-muted)]">
                        {r.description}
                      </span>
                    </span>
                  </Link>
                ))}
              </div>
            ) : null}
          </div>

          <Link
            href="/iletisim"
            className="text-sm font-medium text-[var(--ink-muted)] transition hover:text-white"
          >
            İletişim
          </Link>
        </nav>

        <div className="hidden items-center gap-2.5 lg:gap-3 md:flex">
          <a
            href={appLoginUrl}
            className="text-sm font-semibold text-[var(--ink-muted)] transition hover:text-white"
          >
            Giriş
          </a>
          <a
            href={MEETING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-[var(--line)] px-3.5 py-2 text-sm font-semibold text-white transition hover:border-white/25 hover:bg-white/[0.05]"
          >
            Toplantı planla
          </a>
          <motion.a
            href={appRegisterUrl}
            className="relative overflow-hidden rounded-xl bg-[var(--accent)] px-3.5 py-2 text-sm font-semibold text-[#04150f] shadow-[0_0_0_0_rgba(0,201,138,0.45)]"
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(0,201,138,0.45)",
                "0 0 0 10px rgba(0,201,138,0)",
                "0 0 0 0 rgba(0,201,138,0)",
              ],
              scale: [1, 1.03, 1],
            }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.span
              className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 skew-x-[-20deg] bg-white/35"
              animate={{ left: ["-40%", "140%"] }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: "easeInOut",
                repeatDelay: 1.2,
              }}
            />
            <span className="relative whitespace-nowrap">3 günlük ücretsiz deneme</span>
          </motion.a>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-[var(--ink-muted)] md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-[var(--line)] bg-[var(--paper-elevated)] px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--ink-muted)]">
              Ürün
            </p>
            {productLinks.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="flex items-center gap-2 pl-2 text-sm font-medium text-white"
                onClick={closeAll}
              >
                <r.icon className="h-4 w-4 text-[var(--accent)]" />
                {r.label}
                {"badge" in r && r.badge ? (
                  <span className="text-[10px] font-semibold text-amber-300">{r.badge}</span>
                ) : null}
              </Link>
            ))}
            <Link
              href="/fiyatlandirma"
              className="text-sm font-medium text-white"
              onClick={closeAll}
            >
              Fiyatlandırma
            </Link>
            <p className="pt-1 text-xs font-semibold uppercase tracking-wider text-[var(--ink-muted)]">
              Kaynaklar
            </p>
            {resourceLinks.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="flex items-center gap-2 pl-2 text-sm font-medium text-white"
                onClick={closeAll}
              >
                <r.icon className="h-4 w-4 text-[var(--accent)]" />
                {r.label}
              </Link>
            ))}
            <Link
              href="/iletisim"
              className="text-sm font-medium text-white"
              onClick={closeAll}
            >
              İletişim
            </Link>
            <a href={appLoginUrl} className="text-sm font-semibold text-[var(--ink-muted)]">
              Giriş
            </a>
            <a
              href={MEETING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-[var(--ink-muted)]"
            >
              Toplantı planla
            </a>
            <motion.a
              href={appRegisterUrl}
              className="relative overflow-hidden rounded-xl bg-[var(--accent)] px-4 py-2.5 text-center text-sm font-semibold text-[#04150f]"
              animate={{
                boxShadow: [
                  "0 0 0 0 rgba(0,201,138,0.45)",
                  "0 0 0 10px rgba(0,201,138,0)",
                  "0 0 0 0 rgba(0,201,138,0)",
                ],
              }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              whileTap={{ scale: 0.98 }}
            >
              3 günlük ücretsiz deneme
            </motion.a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
