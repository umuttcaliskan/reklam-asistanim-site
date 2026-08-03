"use client";

import { Fragment } from "react";
import { Check, Minus } from "lucide-react";
import { Reveal } from "@/components/marketing/Reveal";
import { COMPARISON, PLANS } from "@/lib/pricing";

function Cell({ value }: { value: string | boolean }) {
  if (value === true) {
    return <Check className="mx-auto h-4 w-4 text-[var(--accent)]" />;
  }
  if (value === false) {
    return <Minus className="mx-auto h-4 w-4 text-white/25" />;
  }
  return <span className="text-xs font-medium text-white">{value}</span>;
}

export function ComparisonTable() {
  return (
    <section className="mx-auto max-w-5xl px-4 pb-20 sm:px-6">
      <Reveal>
        <h2 className="text-center font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          Paketleri karşılaştırın
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-center text-sm text-[var(--ink-muted)]">
          Hangi paketin size uygun olduğunu özellik özellik inceleyin.
        </p>
      </Reveal>

      <Reveal className="mt-10 overflow-x-auto">
        <table className="w-full min-w-[560px] border-separate border-spacing-0">
          <thead>
            <tr>
              <th className="sticky left-0 w-2/5 rounded-tl-2xl border border-r-0 border-[var(--line)] bg-[var(--paper-elevated)] px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-[var(--ink-muted)]">
                Özellik
              </th>
              {PLANS.map((p) => (
                <th
                  key={p.id}
                  className={`border border-r-0 border-[var(--line)] px-4 py-3 text-center last:rounded-tr-2xl last:border-r ${
                    p.highlighted ? "bg-[var(--accent-soft)]" : "bg-[var(--paper-elevated)]"
                  }`}
                >
                  <span className="block text-sm font-semibold text-white">{p.name}</span>
                  <span className="block text-[11px] font-medium text-[var(--ink-muted)]">
                    {p.price}
                    {p.priceNote ? ` ${p.priceNote}` : ""}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {COMPARISON.map((group) => (
              <Fragment key={group.title}>
                <tr>
                  <td
                    colSpan={4}
                    className="border-x border-b border-[var(--line)] bg-[var(--paper)] px-4 pb-2 pt-5 text-xs font-bold uppercase tracking-wider text-[var(--accent)]"
                  >
                    {group.title}
                  </td>
                </tr>
                {group.rows.map((row) => (
                  <tr key={row.label}>
                    <td className="border-b border-l border-[var(--line)] bg-[var(--paper-elevated)] px-4 py-2.5 text-sm text-[var(--ink-muted)]">
                      {row.label}
                    </td>
                    {row.values.map((v, i) => (
                      <td
                        key={i}
                        className={`border-b border-l border-[var(--line)] px-4 py-2.5 text-center last:border-r ${
                          PLANS[i].highlighted
                            ? "bg-[var(--accent-soft)]/40"
                            : "bg-[var(--paper-elevated)]"
                        }`}
                      >
                        <Cell value={v} />
                      </td>
                    ))}
                  </tr>
                ))}
              </Fragment>
            ))}
          </tbody>
        </table>
      </Reveal>
    </section>
  );
}
