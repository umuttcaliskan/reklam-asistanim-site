"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { BookOpen, ChevronDown, GraduationCap, HelpCircle, Menu, X } from "lucide-react";
import { appLoginUrl, appRegisterUrl } from "@/lib/site";

const links = [
  { href: "/ozellikler", label: "Özellikler" },
  { href: "/fiyatlandirma", label: "Fiyatlandırma" },
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
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setResourcesOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const closeAll = () => {
    setOpen(false);
    setResourcesOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)]/80 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2" onClick={closeAll}>
          <Image
            src="/reklam-asistanim-logo.svg"
            alt="Reklam Asistanım"
            width={160}
            height={40}
            className="h-8 w-auto"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-[var(--ink-muted)] transition hover:text-[var(--ink)]"
            >
              {l.label}
            </Link>
          ))}

          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setResourcesOpen((v) => !v)}
              className="flex items-center gap-1 text-sm font-medium text-[var(--ink-muted)] transition hover:text-[var(--ink)]"
            >
              Kaynaklar
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform ${resourcesOpen ? "rotate-180" : ""}`}
              />
            </button>
            {resourcesOpen ? (
              <div className="absolute left-1/2 top-full mt-3 w-72 -translate-x-1/2 rounded-2xl border border-[var(--line)] bg-white p-2 shadow-[var(--shadow)]">
                {resourceLinks.map((r) => (
                  <Link
                    key={r.href}
                    href={r.href}
                    onClick={closeAll}
                    className="flex items-start gap-3 rounded-xl px-3 py-2.5 transition hover:bg-emerald-50/60"
                  >
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-[var(--accent-hover)]">
                      <r.icon className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-[var(--ink)]">
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
            className="text-sm font-medium text-[var(--ink-muted)] transition hover:text-[var(--ink)]"
          >
            İletişim
          </Link>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={appLoginUrl}
            className="text-sm font-semibold text-[var(--ink-muted)] transition hover:text-[var(--ink)]"
          >
            Giriş
          </a>
          <a
            href={appRegisterUrl}
            className="rounded-xl bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[var(--accent-hover)]"
          >
            Ücretsiz dene
          </a>
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
        <div className="border-t border-[var(--line)] bg-white px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-[var(--ink)]"
                onClick={closeAll}
              >
                {l.label}
              </Link>
            ))}
            <p className="pt-1 text-xs font-semibold uppercase tracking-wider text-[var(--ink-muted)]">
              Kaynaklar
            </p>
            {resourceLinks.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="flex items-center gap-2 pl-2 text-sm font-medium text-[var(--ink)]"
                onClick={closeAll}
              >
                <r.icon className="h-4 w-4 text-[var(--accent-hover)]" />
                {r.label}
              </Link>
            ))}
            <Link
              href="/iletisim"
              className="text-sm font-medium text-[var(--ink)]"
              onClick={closeAll}
            >
              İletişim
            </Link>
            <a href={appLoginUrl} className="text-sm font-semibold text-[var(--ink-muted)]">
              Giriş
            </a>
            <a
              href={appRegisterUrl}
              className="rounded-xl bg-[var(--accent)] px-4 py-2.5 text-center text-sm font-semibold text-white"
            >
              Ücretsiz dene
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
