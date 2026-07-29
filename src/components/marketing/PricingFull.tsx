"use client";

import { Check } from "lucide-react";
import { Reveal } from "@/components/marketing/Reveal";
import { PLANS } from "@/lib/pricing";
import { appRegisterUrl } from "@/lib/site";

export function PricingFull() {
  return (
    <div className="mx-auto grid max-w-6xl gap-6 px-4 pb-20 sm:px-6 md:grid-cols-3">
      {PLANS.map((plan, i) => {
        const href =
          plan.id === "enterprise"
            ? "mailto:destek@reklamasistanim.com?subject=Kurumsal%20plan"
            : appRegisterUrl;

        return (
          <Reveal key={plan.id} delay={i * 0.08}>
            <div
              className={`flex h-full flex-col rounded-2xl border p-6 sm:p-8 ${
                plan.highlighted
                  ? "border-emerald-300 bg-gradient-to-b from-emerald-50/80 to-white ring-1 ring-emerald-100"
                  : "border-[var(--line)] bg-white"
              }`}
            >
              {plan.badge ? (
                <span className="mb-3 w-fit text-xs font-semibold text-[var(--accent-hover)]">
                  {plan.badge}
                </span>
              ) : (
                <span className="mb-3 block h-4" />
              )}
              <h2 className="text-2xl font-bold text-[var(--ink)]">{plan.name}</h2>
              <p className="mt-2 text-sm text-[var(--ink-muted)]">{plan.tagline}</p>
              <p className="mt-6">
                <span className="text-4xl font-bold tracking-tight text-[var(--ink)]">
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
                  <li key={f} className="flex gap-2 text-sm text-[var(--ink)]">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={href}
                className={`mt-8 block rounded-xl px-4 py-3 text-center text-sm font-semibold transition ${
                  plan.highlighted
                    ? "bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)]"
                    : "border border-[var(--line)] text-[var(--ink)] hover:border-emerald-200"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
