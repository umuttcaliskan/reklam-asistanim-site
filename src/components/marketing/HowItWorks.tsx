"use client";

import { Reveal } from "@/components/marketing/Reveal";
import { HOW_IT_WORKS } from "@/lib/features";

export function HowItWorks() {
  return (
    <section className="border-b border-[var(--line)] bg-[var(--paper)]">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <Reveal>
          <h2 className="text-center font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Nasıl çalışır?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-center text-[var(--ink-muted)]">
            Bağlayın — AI otonom izlesin — onayınızla büyütün.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
          {HOW_IT_WORKS.map((step, i) => (
            <Reveal key={step.step} delay={i * 0.08}>
              <div className="relative border-l border-[var(--accent)]/40 pl-5 md:border-l-0 md:border-t md:pl-0 md:pt-5">
                <span className="font-[family-name:var(--font-display)] text-4xl font-semibold text-[var(--accent)]/35">
                  {step.step}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--ink-muted)]">
                  {step.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
