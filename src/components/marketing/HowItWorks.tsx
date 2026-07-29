"use client";

import { Reveal } from "@/components/marketing/Reveal";
import { HOW_IT_WORKS } from "@/lib/features";

export function HowItWorks() {
  return (
    <section className="border-y border-[var(--line)] bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <Reveal>
          <h2 className="text-center text-2xl font-bold tracking-tight text-[var(--ink)] sm:text-3xl">
            Nasıl çalışır?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-center text-[var(--ink-muted)]">
            Üç adımda bağlı hesabınızı yönetmeye başlayın.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {HOW_IT_WORKS.map((step, i) => (
            <Reveal key={step.step} delay={i * 0.08}>
              <div className="relative">
                <span className="font-[family-name:var(--font-instrument)] text-5xl text-emerald-100">
                  {step.step}
                </span>
                <h3 className="mt-2 text-lg font-bold text-[var(--ink)]">{step.title}</h3>
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
