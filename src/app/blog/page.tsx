import type { Metadata } from "next";
import { BookOpen, Clock } from "lucide-react";
import { CtaBand } from "@/components/marketing/CtaBand";
import { PageHero } from "@/components/marketing/CtaPair";
import { Reveal } from "@/components/marketing/Reveal";
import { BLOG_POSTS } from "@/lib/resources";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Google Ads, Meta Ads, otonom AI optimizasyon ve organik büyüme rehberleri — Reklam Asistanım Blog.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Kaynaklar"
        title="Blog"
        description="Google Ads, yapay zeka ile reklam yönetimi ve organik büyüme üzerine pratik rehberler."
      />

      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((post, i) => (
            <Reveal key={post.slug} delay={(i % 3) * 0.06}>
              <article className="group flex h-full cursor-pointer flex-col rounded-2xl border border-[var(--line)] bg-[var(--paper-elevated)] p-6 transition hover:border-[var(--accent)]/30">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-[var(--accent-soft)] px-2.5 py-1 text-[11px] font-semibold text-[var(--accent)]">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] text-[var(--ink-muted)]">
                    <Clock className="h-3 w-3" />
                    {post.readingMinutes} dk okuma
                  </span>
                </div>
                <h2 className="mt-4 text-lg font-semibold leading-snug text-white transition group-hover:text-[var(--accent)]">
                  {post.title}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--ink-muted)]">
                  {post.excerpt}
                </p>
                <div className="mt-5 flex items-center justify-between border-t border-[var(--line)] pt-4">
                  <span className="text-xs text-[var(--ink-muted)]">{post.date}</span>
                  <span className="flex items-center gap-1 text-xs font-semibold text-[var(--accent)]">
                    <BookOpen className="h-3.5 w-3.5" />
                    Yakında
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-[var(--ink-muted)]">
          Yazıların tam içerikleri çok yakında yayında olacak.
        </p>
      </div>
      <CtaBand />
    </>
  );
}
