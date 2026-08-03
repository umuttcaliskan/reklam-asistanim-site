"use client";

import Link from "next/link";
import { Check } from "lucide-react";
import { Reveal } from "@/components/marketing/Reveal";
import { PLANS, type PlanCard } from "@/lib/pricing";
import { appRegisterUrl, MEETING_URL, TRIAL_LABEL } from "@/lib/site";

function PlanTeaserCard({ plan }: { plan: PlanCard }) {
  const href = plan.id === "enterprise" ? MEETING_URL : appRegisterUrl;

  return (
    <div
      className={`flex h-full flex-col rounded-2xl border p-6 transition ${
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
      <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
      <p className="mt-1 text-sm text-[var(--ink-muted)]">{plan.tagline}</p>
      <p className="mt-5">
        <span className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-white">
          {plan.price}
        </span>
        {plan.priceNote ? (
          <span className="ml-1 text-sm text-[var(--ink-muted)]">{plan.priceNote}</span>
        ) : null}
      </p>
      <ul className="mt-6 flex-1 space-y-2">
        {plan.features.slice(0, 5).map((f) => (
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
        className={`mt-6 block rounded-xl px-4 py-2.5 text-center text-sm font-semibold transition ${
          plan.highlighted
            ? "bg-[var(--accent)] text-[#04150f] hover:bg-[var(--accent-hover)]"
            : "border border-[var(--line)] text-white hover:border-white/25"
        }`}
      >
        {plan.cta}
      </a>
    </div>
  );
}

export function PricingTeaser() {
  return (
    <section className="border-t border-[var(--line)] bg-[var(--paper)]">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <Reveal>
          <h2 className="text-center font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Basit fiyatlandırma
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-center text-[var(--ink-muted)]">
            Solo’dan Kurumsal’a — ihtiyacınıza göre ölçekleyin.
          </p>
          <p className="mx-auto mt-3 w-fit rounded-full border border-[var(--accent)]/25 bg-[var(--accent-soft)] px-3 py-1 text-center text-xs font-semibold text-[var(--accent)]">
            Tüm paketlerde {TRIAL_LABEL}
          </p>
          <p className="mx-auto mt-2 text-center text-xs text-[var(--ink-muted)]">
            Meta Ads yakında — Pro+ öncelikli erişim
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {PLANS.map((plan, i) => (
            <Reveal key={plan.id} delay={i * 0.08}>
              <PlanTeaserCard plan={plan} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 text-center">
          <Link
            href="/fiyatlandirma"
            className="text-sm font-semibold text-[var(--accent)] hover:underline"
          >
            Tüm paket detayları →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
