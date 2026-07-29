import type { Metadata } from "next";
import Link from "next/link";
import { APP_URL, SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: `${SITE_NAME} — About`,
  description:
    "Reklam Asistanım is a web application that connects to Google Ads via OAuth to help users manage campaigns, reporting, and optimization.",
  alternates: { canonical: "/about" },
};

/**
 * Plain, server-rendered page for Google OAuth brand verification crawlers.
 * Set Cloud Console → Branding → Application home page to:
 * https://reklamasistanim.com/about
 */
export default function AboutPage() {
  return (
    <div className="bg-white">
      <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
        <p className="text-sm font-semibold uppercase tracking-wider text-[var(--ink-muted)]">
          About
        </p>

        <h1 className="mt-3 text-4xl font-bold tracking-tight text-[var(--ink)]">
          Reklam Asistanım
        </h1>

        <p className="mt-6 text-lg leading-relaxed text-[var(--ink)]">
          Reklam Asistanım is a web application that helps advertisers and agencies manage
          Google Ads accounts. Users sign in, connect their Google Ads account with OAuth,
          and use the app to create and manage campaigns, review performance, generate
          weekly reports, and apply optimization suggestions.
        </p>

        <p className="mt-4 text-base leading-relaxed text-[var(--ink-muted)]">
          Reklam Asistanım, Google Ads hesaplarınızı OAuth ile bağlayarak kampanya yönetimi,
          performans raporlama ve optimizasyon sunan bir web uygulamasıdır. Kullanıcılar
          panele kaydolur, Google hesabını bağlar ve reklam operasyonlarını tek yerden
          yönetir.
        </p>

        <h2 className="mt-10 text-xl font-bold text-[var(--ink)]">
          Why Reklam Asistanım requests Google access
        </h2>
        <p className="mt-3 text-base leading-relaxed text-[var(--ink-muted)]">
          Reklam Asistanım requests access to Google Ads (and optionally related Google
          services the user chooses to connect) only to provide the subscribed product
          features to that user: listing accounts, managing campaigns and related entities,
          reading performance metrics, and generating reports. Google user data is not sold
          to third parties.
        </p>

        <h2 className="mt-10 text-xl font-bold text-[var(--ink)]">Product links</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-base text-[var(--ink)]">
          <li>
            Marketing site:{" "}
            <a className="font-medium text-[var(--accent-hover)] underline" href={SITE_URL}>
              {SITE_URL}
            </a>
          </li>
          <li>
            Application:{" "}
            <a className="font-medium text-[var(--accent-hover)] underline" href={APP_URL}>
              {APP_URL}
            </a>
          </li>
          <li>
            Privacy Policy:{" "}
            <Link
              className="font-medium text-[var(--accent-hover)] underline"
              href="/gizlilik-politikasi"
            >
              https://reklamasistanim.com/gizlilik-politikasi
            </Link>
          </li>
          <li>
            Terms of Service:{" "}
            <Link
              className="font-medium text-[var(--accent-hover)] underline"
              href="/hizmet-sartlari"
            >
              https://reklamasistanim.com/hizmet-sartlari
            </Link>
          </li>
        </ul>

        <p className="mt-10 text-sm text-[var(--ink-muted)]">
          Operated by Umut Çalışkan (sole proprietorship). Brand / product name:{" "}
          <strong className="text-[var(--ink)]">Reklam Asistanım</strong>.
        </p>
      </article>
    </div>
  );
}
