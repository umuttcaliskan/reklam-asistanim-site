import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/marketing/CtaBand";
import { FaqAccordion } from "@/components/marketing/FaqAccordion";

export const metadata: Metadata = {
  title: "Sıkça Sorulan Sorular",
  description:
    "Reklam Asistanım hakkında merak edilenler: yapay zeka yönetimi, ücretsiz deneme, güvenlik, paketler ve raporlama.",
  alternates: { canonical: "/sss" },
};

export default function SssPage() {
  return (
    <>
      <div className="border-b border-[var(--line)] bg-hero-glow">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <p className="text-xs font-semibold uppercase tracking-wider text-[var(--accent-hover)]">
            Kaynaklar
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-[var(--ink)] sm:text-4xl">
            Sıkça Sorulan Sorular
          </h1>
          <p className="mt-3 max-w-2xl text-[var(--ink-muted)]">
            Cevabını bulamadığınız sorular için{" "}
            <Link href="/iletisim" className="font-medium text-[var(--accent-hover)] hover:underline">
              iletişim sayfamızdan
            </Link>{" "}
            bize ulaşabilirsiniz.
          </p>
        </div>
      </div>
      <FaqAccordion />
      <CtaBand />
    </>
  );
}
