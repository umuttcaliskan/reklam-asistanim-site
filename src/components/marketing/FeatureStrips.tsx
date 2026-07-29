"use client";

import Link from "next/link";
import { Check } from "lucide-react";
import { PanelMock } from "@/components/marketing/PanelMock";
import { Reveal } from "@/components/marketing/Reveal";
import { FEATURES, type FeatureBlock } from "@/lib/features";

function FeatureRow({
  feature,
  index,
}: {
  feature: FeatureBlock;
  index: number;
}) {
  const reverse = index % 2 === 1;

  return (
    <section
      id={feature.id}
      className="scroll-mt-24 border-b border-[var(--line)] last:border-b-0"
    >
      <div
        className={`mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-14 ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-wider text-[var(--accent-hover)]">
            Özellik
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-[var(--ink)] sm:text-3xl">
            {feature.title}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-[var(--ink-muted)]">
            {feature.summary}
          </p>
          <ul className="mt-6 space-y-2">
            {feature.bullets.map((b) => (
              <li key={b} className="flex items-start gap-2 text-sm text-[var(--ink)]">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" />
                {b}
              </li>
            ))}
          </ul>
          <Link
            href={`/ozellikler#${feature.id}`}
            className="mt-6 inline-block text-sm font-semibold text-[var(--accent-hover)] hover:underline"
          >
            Daha fazla bilgi →
          </Link>
        </Reveal>
        <Reveal delay={0.1}>
          <PanelMock kind={feature.mock} />
        </Reveal>
      </div>
    </section>
  );
}

export function FeatureStrips({ limit }: { limit?: number }) {
  const list = limit ? FEATURES.slice(0, limit) : FEATURES;
  return (
    <div>
      {list.map((f, i) => (
        <FeatureRow key={f.id} feature={f} index={i} />
      ))}
    </div>
  );
}
