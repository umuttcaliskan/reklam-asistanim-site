import Image from "next/image";
import Link from "next/link";
import { Apple, CalendarDays, Mail, Play } from "lucide-react";
import {
  APP_URL,
  appLoginUrl,
  appRegisterUrl,
  CONTACT_EMAIL,
  MEETING_URL,
  SITE_NAME,
  TRIAL_LABEL,
} from "@/lib/site";

const columns: {
  title: string;
  links: { href: string; label: string; external?: boolean }[];
}[] = [
  {
    title: "Ürün",
    links: [
      { href: "/ozellikler", label: "Özellikler" },
      { href: "/fiyatlandirma", label: "Fiyatlandırma" },
      { href: appRegisterUrl, label: "Ücretsiz dene", external: true },
      { href: appLoginUrl, label: "Giriş yap", external: true },
    ],
  },
  {
    title: "Kaynaklar",
    links: [
      { href: "/blog", label: "Blog" },
      { href: "/akademi", label: "Akademi" },
      { href: "/sss", label: "Sıkça Sorulan Sorular" },
    ],
  },
  {
    title: "Şirket",
    links: [
      { href: "/iletisim", label: "İletişim" },
      { href: MEETING_URL, label: "Toplantı planla", external: true },
      { href: `mailto:${CONTACT_EMAIL}`, label: "E-posta", external: true },
    ],
  },
  {
    title: "Yasal",
    links: [
      { href: "/gizlilik-politikasi", label: "Gizlilik Politikası" },
      { href: "/hizmet-sartlari", label: "Hizmet Şartları" },
      { href: "/kvkk", label: "KVKK Aydınlatma" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--line)] bg-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <Image
              src="/reklam-asistanim-logo.svg"
              alt={SITE_NAME}
              width={180}
              height={44}
              className="h-9 w-auto"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[var(--ink-muted)]">
              Yapay zeka destekli reklam yönetim platformu. Google Ads, Search Console ve
              İşletme Profili verilerinizi tek panelde birleştirir; kampanyalarınızı AI
              ile yönetir.
            </p>
            <p className="mt-4 inline-block rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-100">
              {TRIAL_LABEL}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="inline-flex cursor-default items-center gap-2 rounded-lg bg-slate-900 px-3 py-2 text-white opacity-90">
                <Apple className="h-4 w-4" />
                <span className="text-left leading-tight">
                  <span className="block text-[8px] uppercase tracking-wide text-slate-300">
                    Yakında
                  </span>
                  <span className="block text-xs font-semibold">App Store</span>
                </span>
              </span>
              <span className="inline-flex cursor-default items-center gap-2 rounded-lg bg-slate-900 px-3 py-2 text-white opacity-90">
                <Play className="h-4 w-4 fill-current" />
                <span className="text-left leading-tight">
                  <span className="block text-[8px] uppercase tracking-wide text-slate-300">
                    Yakında
                  </span>
                  <span className="block text-xs font-semibold">Google Play</span>
                </span>
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4 sm:gap-x-8">
            {columns.map((col) => (
              <div key={col.title} className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-wider text-[var(--ink-muted)]">
                  {col.title}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.href + l.label} className="min-w-0">
                      {l.external ? (
                        <a
                          href={l.href}
                          target={l.href.startsWith("http") ? "_blank" : undefined}
                          rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="break-words text-sm text-[var(--ink)] transition hover:text-[var(--accent-hover)]"
                        >
                          {l.label}
                        </a>
                      ) : (
                        <Link
                          href={l.href}
                          className="break-words text-sm text-[var(--ink)] transition hover:text-[var(--accent-hover)]"
                        >
                          {l.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 rounded-2xl border border-[var(--line)] bg-[var(--paper)] px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-medium text-[var(--ink)]">
            Sorularınız mı var? Ekibimizle tanışın.
          </p>
          <div className="flex flex-wrap gap-2">
            <a
              href={MEETING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-[var(--accent)] px-3.5 py-2 text-xs font-semibold text-white transition hover:bg-[var(--accent-hover)]"
            >
              <CalendarDays className="h-3.5 w-3.5" />
              Toplantı planla
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--line)] bg-white px-3.5 py-2 text-xs font-semibold text-[var(--ink)] transition hover:border-emerald-200"
            >
              <Mail className="h-3.5 w-3.5" />
              E-posta gönder
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-[var(--line)]">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-[var(--ink-muted)] sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} {SITE_NAME}. Tüm hakları saklıdır.</p>
          <p>
            Uygulama:{" "}
            <a href={APP_URL} className="font-medium text-[var(--accent-hover)] hover:underline">
              app.reklamasistanim.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
