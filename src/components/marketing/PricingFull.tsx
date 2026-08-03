"use client";

import { Check } from "lucide-react";
import { Reveal } from "@/components/marketing/Reveal";
import { PLANS } from "@/lib/pricing";
import { appRegisterUrl, MEETING_URL, TRIAL_LABEL } from "@/lib/site";

export function PricingFull() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-8 sm:px-6">
      <p className="mb-8 text-center text-sm text-[var(--ink-muted)]">
        Tüm paketlerde {TRIAL_LABEL}.{" "}
        <span className="font-medium text-white">
          Meta Ads yakında — Pro+ öncelikli erişim.
        </span>
      </p>
      <div className="grid gap-6 md:grid-cols-3">
        {PLANS.map((plan, i) => {
          const href = plan.id === "enterprise" ? MEETING_URL : appRegisterUrl;

          return (
            <Reveal key={plan.id} delay={i * 0.08}>
              <div
                className={`flex h-full flex-col rounded-2xl border p-6 sm:p-8 ${
                  plan.highlighted
                    ? "border-[var(--accent)]/40 bg-[var(--accent-soft)] ring-1 ring-[var(--accent)]/20"
                    : "border-[var(--line)] bg-[var(--paper-elevated)]"
                }`}
              >
                {plan.badge ? (
                  <span className="mb-3 w-fit text-xs font-semibold text-[var(--accent)]">
                    {plan.badge}
                  </span>
                ) : (
                  <span className="mb-3 block h-4" />
                )}
                <h2 className="text-2xl font-semibold text-white">{plan.name}</h2>
                <p className="mt-2 text-sm text-[var(--ink-muted)]">{plan.tagline}</p>
                <p className="mt-6">
                  <span className="font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight text-white">
                    {plan.price}
                  </span>
                  {plan.priceNote ? (
                    <span className="ml-1 text-sm text-[var(--ink-muted)]">
                      {plan.priceNote}
                    </span>
                  ) : null}
                </p>
                <ul className="mt-8 flex-1 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex gap-2 text-sm text-[var(--ink-muted)]">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={href}
                  target={plan.id === "enterprise" ? "_blank" : undefined}
                  rel={plan.id === "enterprise" ? "noopener noreferrer" : undefined}
                  className={`mt-8 block rounded-xl px-4 py-3 text-center text-sm font-semibold transition ${
                    plan.highlighted
                      ? "bg-[var(--accent)] text-[#04150f] hover:bg-[var(--accent-hover)]"
                      : "border border-[var(--line)] text-white hover:border-white/25"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
