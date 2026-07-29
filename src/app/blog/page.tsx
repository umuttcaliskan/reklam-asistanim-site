import type { Metadata } from "next";
import { BookOpen, Clock } from "lucide-react";
import { CtaBand } from "@/components/marketing/CtaBand";
import { Reveal } from "@/components/marketing/Reveal";
import { BLOG_POSTS } from "@/lib/resources";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Google Ads, yapay zeka destekli reklam yönetimi, SEO ve raporlama üzerine rehberler — Reklam Asistanım Blog.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <div className="border-b border-[var(--line)] bg-hero-glow">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <p className="text-xs font-semibold uppercase tracking-wider text-[var(--accent-hover)]">
            Kaynaklar
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-[var(--ink)] sm:text-4xl">
            Blog
          </h1>
          <p className="mt-3 max-w-2xl text-[var(--ink-muted)]">
            Google Ads, yapay zeka ile reklam yönetimi ve organik büyüme üzerine pratik
            rehberler.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((post, i) => (
            <Reveal key={post.slug} delay={(i % 3) * 0.06}>
              <article className="group flex h-full cursor-pointer flex-col rounded-2xl border border-[var(--line)] bg-white p-6 transition hover:-translate-y-0.5 hover:border-emerald-200 hover:shadow-[var(--shadow)]">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-700">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] text-[var(--ink-muted)]">
                    <Clock className="h-3 w-3" />
                    {post.readingMinutes} dk okuma
                  </span>
                </div>
                <h2 className="mt-4 text-lg font-bold leading-snug text-[var(--ink)] transition group-hover:text-[var(--accent-hover)]">
                  {post.title}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--ink-muted)]">
                  {post.excerpt}
                </p>
                <div className="mt-5 flex items-center justify-between border-t border-[var(--line)] pt-4">
                  <span className="text-xs text-[var(--ink-muted)]">{post.date}</span>
                  <span className="flex items-center gap-1 text-xs font-semibold text-[var(--accent-hover)]">
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
