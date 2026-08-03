"use client";

import { Apple, Bell, Play, Smartphone, TrendingUp } from "lucide-react";
import { PhoneMock } from "@/components/marketing/PanelMock";
import { Reveal } from "@/components/marketing/Reveal";

const points = [
  {
    icon: TrendingUp,
    title: "Kolay takip",
    text: "Harcama, tıklama, dönüşüm ve ROAS’ı cebinizden anlık görün.",
  },
  {
    icon: Bell,
    title: "AI uyarıları",
    text: "Boşa giden harcama veya fırsat önerileri push ile gelsin.",
  },
  {
    icon: Smartphone,
    title: "Her yerde yönetim",
    text: "Kampanya özeti ve onaylı aksiyonlara yoldayken de erişin.",
  },
];

export function MobileAppSection() {
  return (
    <section id="mobil" className="border-y border-[var(--line)] bg-mesh">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <p className="inline-flex items-center gap-2 rounded-full border border-[var(--accent)]/30 bg-[var(--accent-soft)] px-3 py-1 text-xs font-semibold text-[var(--accent)]">
            <Smartphone className="h-3.5 w-3.5" />
            Mobil uygulama · Yakında
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Reklamlarınızı cebinizden kolayca takip edin
          </h2>
          <p className="mt-3 max-w-md text-base leading-relaxed text-[var(--ink-muted)]">
            iOS ve Android uygulamasıyla performansınızı anlık izleyin, AI önerilerini
            görün ve hesabınızı her yerden yönetin.
          </p>

          <ul className="mt-8 space-y-4">
            {points.map((p) => (
              <li key={p.title} className="flex gap-3">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--accent-soft)] text-[var(--accent)]">
                  <p.icon className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">{p.title}</p>
                  <p className="mt-0.5 text-sm text-[var(--ink-muted)]">{p.text}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-[var(--ink-muted)]">
              İndirin
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#mobil"
                aria-disabled="true"
                onClick={(e) => e.preventDefault()}
                className="inline-flex items-center gap-2.5 rounded-xl border border-white/15 bg-white px-4 py-2.5 text-[#04150f] transition hover:bg-white/90"
              >
                <Apple className="h-5 w-5" />
                <span className="text-left leading-tight">
                  <span className="block text-[9px] uppercase tracking-wide text-black/50">
                    Yakında · App Store’dan
                  </span>
                  <span className="block text-sm font-semibold">İndirin</span>
                </span>
              </a>
              <a
                href="#mobil"
                aria-disabled="true"
                onClick={(e) => e.preventDefault()}
                className="inline-flex items-center gap-2.5 rounded-xl border border-white/15 bg-white px-4 py-2.5 text-[#04150f] transition hover:bg-white/90"
              >
                <Play className="h-5 w-5 fill-current" />
                <span className="text-left leading-tight">
                  <span className="block text-[9px] uppercase tracking-wide text-black/50">
                    Yakında · Google Play’den
                  </span>
                  <span className="block text-sm font-semibold">İndirin</span>
                </span>
              </a>
            </div>
            <p className="mt-3 text-xs text-[var(--ink-muted)]">
              Uygulama mağazaları açıldığında bu butonlar canlı indirme linklerine bağlanacak.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <PhoneMock />
        </Reveal>
      </div>
    </section>
  );
}
