import type { ReactNode } from "react";
import { Check } from "lucide-react";
import { CtaBand } from "@/components/marketing/CtaBand";
import { CtaPair, PageHero } from "@/components/marketing/CtaPair";
import { PanelMock } from "@/components/marketing/PanelMock";
import type { MockKind } from "@/lib/features";

type ProductPageShellProps = {
  title: string;
  description: string;
  eyebrow?: string;
  badge?: string;
  bullets: string[];
  body: ReactNode;
  mock?: MockKind;
};

export function ProductPageShell({
  title,
  description,
  eyebrow = "Ürün",
  badge,
  bullets,
  body,
  mock,
}: ProductPageShellProps) {
  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        title={title}
        description={
          <span className="inline-flex flex-col gap-2">
            {badge ? (
              <span className="inline-flex w-fit rounded-full bg-amber-400/15 px-2.5 py-0.5 text-xs font-semibold text-amber-300 ring-1 ring-amber-400/20">
                {badge}
              </span>
            ) : null}
            <span>{description}</span>
          </span>
        }
      >
        <CtaPair showTrialHint />
      </PageHero>

      <section className="mx-auto grid max-w-6xl items-start gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:gap-14">
        <div>
          <div className="max-w-none text-sm text-[var(--ink-muted)] [&_p]:mb-4 [&_p]:leading-relaxed">
            {body}
          </div>
          <ul className="mt-6 space-y-2.5">
            {bullets.map((b) => (
              <li key={b} className="flex gap-2 text-sm text-[var(--ink-muted)]">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" />
                {b}
              </li>
            ))}
          </ul>
        </div>
        {mock ? (
          <div className="overflow-hidden rounded-2xl border border-[var(--line)] shadow-[var(--shadow)]">
            <PanelMock kind={mock} />
          </div>
        ) : null}
      </section>

      <CtaBand />
    </>
  );
}
