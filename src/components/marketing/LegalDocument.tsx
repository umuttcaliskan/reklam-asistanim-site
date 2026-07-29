import type { ReactNode } from "react";

type LegalDocumentProps = {
  title: string;
  updatedAt: string;
  children: ReactNode;
};

export function LegalDocument({ title, updatedAt, children }: LegalDocumentProps) {
  return (
    <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
      <p className="text-xs font-semibold uppercase tracking-wider text-[var(--ink-muted)]">
        Yasal
      </p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-[var(--ink)] sm:text-4xl">
        {title}
      </h1>
      <p className="mt-2 text-sm text-[var(--ink-muted)]">Son güncelleme: {updatedAt}</p>
      <div className="prose-legal mt-10 space-y-4 text-[15px] leading-relaxed text-[var(--ink-muted)] [&_a]:font-medium [&_a]:text-[var(--accent-hover)] [&_a]:hover:underline [&_h2]:mt-8 [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-[var(--ink)] [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
        {children}
      </div>
    </article>
  );
}
