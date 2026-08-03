"use client";

import { Reveal } from "@/components/marketing/Reveal";

const CHANNELS = [
  { name: "Google Ads", status: "live" as const },
  { name: "Meta Ads", status: "soon" as const },
  { name: "Search Console", status: "live" as const },
  { name: "WordPress", status: "live" as const },
];

export function ChannelStrip() {
  return (
    <section className="border-b border-[var(--line)] bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.14em] text-[var(--ink-muted)]">
            Tek panelde bağlanan kanallar
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {CHANNELS.map((ch) => (
              <div
                key={ch.name}
                className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--paper)] px-4 py-2 text-sm font-semibold text-[var(--ink)]"
              >
                <span
                  className={
                    ch.status === "live"
                      ? "h-1.5 w-1.5 rounded-full bg-[var(--accent)]"
                      : "h-1.5 w-1.5 rounded-full bg-amber-400"
                  }
                />
                {ch.name}
                {ch.status === "soon" ? (
                  <span className="rounded-md bg-amber-50 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-amber-800">
                    Yakında
                  </span>
                ) : null}
              </div>
            ))}
          </div>
          <p className="mt-5 text-center text-sm text-[var(--ink-muted)]">
            KOBİ · Ajans · Freelancer — reklam ve organik büyüme aynı yerde
          </p>
        </Reveal>
      </div>
    </section>
  );
}
