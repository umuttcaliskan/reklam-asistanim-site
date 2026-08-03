"use client";

import type { ReactNode } from "react";
import { ArrowRight, CalendarDays } from "lucide-react";
import { appRegisterUrl, MEETING_URL, TRIAL_LABEL } from "@/lib/site";
import { cn } from "@/lib/cn";

type CtaPairProps = {
  className?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  /** Inverse band (near accent deep) — primary stays solid accent */
  onDark?: boolean;
  showTrialHint?: boolean;
};

export function CtaPair({
  className,
  primaryLabel = "3 gün ücretsiz dene",
  secondaryLabel = "Toplantı planla",
  onDark = false,
  showTrialHint = false,
}: CtaPairProps) {
  return (
    <div className={cn("flex flex-col items-stretch gap-3 sm:items-start", className)}>
      <div className="flex flex-wrap items-center gap-3">
        <a
          href={appRegisterUrl}
          className={cn(
            "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition",
            onDark
              ? "bg-[var(--accent)] text-[#04150f] shadow-lg shadow-emerald-950/40 hover:bg-[var(--accent-hover)]"
              : "bg-[var(--accent)] text-[#04150f] shadow-lg shadow-emerald-900/30 hover:bg-[var(--accent-hover)]"
          )}
        >
          {primaryLabel}
          <ArrowRight className="h-4 w-4" />
        </a>
        <a
          href={MEETING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "inline-flex items-center justify-center gap-2 rounded-xl border px-6 py-3 text-sm font-semibold transition",
            onDark
              ? "border-white/20 bg-white/5 text-white hover:border-white/35 hover:bg-white/10"
              : "border-[var(--line)] bg-white/[0.04] text-[var(--ink)] hover:border-[var(--accent)]/50 hover:bg-white/[0.07]"
          )}
        >
          <CalendarDays className="h-4 w-4" />
          {secondaryLabel}
        </a>
      </div>
      {showTrialHint ? (
        <p className="text-xs text-[var(--ink-muted)]">
          {TRIAL_LABEL} · İstediğiniz zaman iptal
        </p>
      ) : null}
    </div>
  );
}

export function PageHero({
  title,
  description,
  eyebrow,
  children,
  align = "left",
}: {
  title: string;
  description?: ReactNode;
  eyebrow?: string;
  children?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div className="border-b border-[var(--line)] bg-page-hero">
      <div
        className={cn(
          "mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12",
          align === "center" && "text-center"
        )}
      >
        {eyebrow ? (
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-[var(--ink)] sm:text-3xl">
          {title}
        </h1>
        {description ? (
          <p
            className={cn(
              "mt-2 max-w-2xl text-sm leading-relaxed text-[var(--ink-muted)] sm:text-base",
              align === "center" && "mx-auto"
            )}
          >
            {description}
          </p>
        ) : null}
        {children ? <div className="mt-6">{children}</div> : null}
      </div>
    </div>
  );
}
