import Link from "next/link";
import { BookOpenText, Building2, Store, Users } from "lucide-react";
import { Reveal } from "@/components/marketing/Reveal";

const AUDIENCES = [
  {
    icon: Store,
    title: "İşletme sahipleri",
    text: "Ajansa ya da uzmana bağlı kalmadan hesabınızın her gün bakılmasını istiyorsanız. Önerileri sade Türkçe okursunuz, kararı siz verirsiniz.",
    href: "/urun/google-ads",
    link: "Google Ads yönetimi",
  },
  {
    icon: Building2,
    title: "Ajanslar ve danışmanlar",
    text: "Birden fazla müşteri hesabında rutin işleri AI'a devredin; zamanınızı strateji ve müşteriyle konuşmaya ayırın.",
    href: "/fiyatlandirma",
    link: "Profesyonel ve Kurumsal",
  },
  {
    icon: Users,
    title: "Ekipler",
    text: "Ekip arkadaşlarınızı davet edin. Herkes yalnız kendisine atanan hesapları görür ve yalnız izin verdiğiniz işlemleri yapar.",
    href: "/fiyatlandirma",
    link: "Ekip ve roller",
  },
];

const ORGANIC = [
  "Search Console'daki sorgulardan içerik fırsatlarını çıkarır",
  "Blog yazısını ve kapak görselini AI hazırlar",
  "WordPress'e tek tıkla ya da takvimli yayınlar",
];

export function AudienceSection() {
  return (
    <section className="border-y border-[var(--line)] bg-[var(--paper)]">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
            Kimin için?
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Tek hesaptan onlarca hesaba
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {AUDIENCES.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.06}>
              <div className="flex h-full flex-col rounded-2xl border border-[var(--line)] bg-[var(--paper-elevated)] p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent-soft)] text-[var(--accent)]">
                  <a.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-white">{a.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--ink-muted)]">{a.text}</p>
                <Link href={a.href} className="mt-5 text-sm font-semibold text-[var(--accent)] hover:underline">
                  {a.link} →
                </Link>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-4">
          <div className="grid gap-6 rounded-2xl border border-[var(--line)] bg-gradient-to-r from-[var(--accent-mist)] to-transparent p-6 sm:p-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] md:items-center">
            <div>
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent-soft)] text-[var(--accent)]">
                <BookOpenText className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-white">Reklamın yanında organik büyüme</h3>
              <Link href="/urun/organik" className="mt-3 inline-block text-sm font-semibold text-[var(--accent)] hover:underline">
                Organik ve blog →
              </Link>
            </div>
            <ul className="space-y-2.5">
              {ORGANIC.map((o) => (
                <li key={o} className="flex gap-2.5 text-sm text-[var(--ink-muted)]">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                  {o}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
