"use client";

import Link from "next/link";
import { Check } from "lucide-react";
import { Reveal } from "@/components/marketing/Reveal";
import { PLANS, type PlanCard } from "@/lib/pricing";
import { appRegisterUrl } from "@/lib/site";

function PlanTeaserCard({ plan }: { plan: PlanCard }) {
  const href =
    plan.id === "enterprise"
      ? "mailto:destek@reklamasistanim.com?subject=Kurumsal%20plan"
      : appRegisterUrl;

  return (
    <div
      className={`flex h-full flex-col rounded-2xl border p-6 transition hover:-translate-y-0.5 hover:shadow-[var(--shadow)] ${
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
      <h3 className="text-xl font-bold text-[var(--ink)]">{plan.name}</h3>
      <p className="mt-1 text-sm text-[var(--ink-muted)]">{plan.tagline}</p>
      <p className="mt-5">
        <span className="text-3xl font-bold tracking-tight text-[var(--ink)]">
          {plan.price}
        </span>
        {plan.priceNote ? (
          <span className="ml-1 text-sm text-[var(--ink-muted)]">{plan.priceNote}</span>
        ) : null}
      </p>
      <ul className="mt-6 flex-1 space-y-2">
        {plan.features.slice(0, 5).map((f) => (
          <li key={f} className="flex gap-2 text-sm text-[var(--ink)]">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" />
            {f}
          </li>
        ))}
      </ul>
      <a
        href={href}
        className={`mt-6 block rounded-xl px-4 py-2.5 text-center text-sm font-semibold transition ${
          plan.highlighted
            ? "bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)]"
            : "border border-[var(--line)] text-[var(--ink)] hover:border-emerald-200"
        }`}
      >
        {plan.cta}
      </a>
    </div>
  );
}

export function PricingTeaser() {
  return (
    <section className="bg-[var(--paper)]">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <Reveal>
          <h2 className="text-center text-2xl font-bold tracking-tight text-[var(--ink)] sm:text-3xl">
            Basit, şeffaf fiyatlandırma
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-center text-[var(--ink-muted)]">
            Solo’dan Kurumsal’a — ihtiyacınıza göre ölçekleyin.
          </p>
          <p className="mx-auto mt-2 w-fit rounded-full bg-emerald-50 px-3 py-1 text-center text-xs font-semibold text-emerald-700 ring-1 ring-emerald-100">
            Tüm paketlerde 3 gün ücretsiz deneme
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
            className="text-sm font-semibold text-[var(--accent-hover)] hover:underline"
          >
            Tüm paket detayları →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
