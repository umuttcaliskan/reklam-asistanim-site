"use client";

import { Check } from "lucide-react";
import { PanelMock } from "@/components/marketing/PanelMock";
import { Reveal } from "@/components/marketing/Reveal";
import { FEATURES } from "@/lib/features";

export function FeaturesDeepDive() {
  return (
    <div>
      {FEATURES.map((feature, index) => (
        <section
          key={feature.id}
          id={feature.id}
          className="scroll-mt-24 border-b border-[var(--line)] last:border-b-0"
        >
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
            <div
              className={`grid items-start gap-10 lg:grid-cols-2 lg:gap-14 ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <Reveal>
                <h2 className="text-2xl font-bold tracking-tight text-[var(--ink)] sm:text-3xl">
                  {feature.title}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-[var(--ink-muted)]">
                  {feature.body}
                </p>
                <ul className="mt-6 space-y-2">
                  {feature.bullets.map((b) => (
                    <li key={b} className="flex gap-2 text-sm text-[var(--ink)]">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" />
                      {b}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={0.08}>
                <PanelMock kind={feature.mock} />
              </Reveal>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
