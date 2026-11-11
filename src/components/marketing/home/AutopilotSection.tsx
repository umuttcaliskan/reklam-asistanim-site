import { Check, Hand, Plane, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/marketing/Reveal";
import { CardShot } from "@/components/marketing/home/Frames";
import { SHOTS } from "@/components/marketing/home/shots";

const MODES = [
  {
    icon: Hand,
    title: "Onaylı mod",
    text: "Her öneri kart olarak gelir. Uygula derseniz Ads'e yazılır, Geç derseniz nedeni hafızaya alınır.",
  },
  {
    icon: Plane,
    title: "Otopilot",
    text: "Seçtiğiniz işlem türlerini AI kendisi uygular: alakasız terimleri engeller, bütçeyi verimli kampanyaya kaydırır. Size ne yaptığını raporlar.",
  },
];

const GUARDRAILS = [
  "Günlük bütçe bir adımda en fazla ±%20 değişir; aylık bütçe zarfınız aşılmaz",
  "Teklif stratejisi 30 günde en fazla bir kez değişir, öğrenme dönemi korunur",
  "Her işlem önce Google provasından geçer, uygulandıktan sonra geri okunup doğrulanır",
  "Rakip, marka ve korunan kelime kurallarınız hiçbir koşulda delinmez",
  "Yeni kampanyalar duraklatılmış kurulur; yayına siz alırsınız",
  "Her işlem 7 gün boyunca tek tıkla geri alınabilir",
];

export function AutopilotSection() {
  return (
    <section className="bg-mesh">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
            Otomatik optimizasyon
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            İster onaylayın, ister otopilota bırakın
          </h2>
          <p className="mt-4 leading-relaxed text-[var(--ink-muted)]">
            Ne kadar kontrolü AI&apos;a vereceğinize siz karar verirsiniz. Hangi modda olursanız
            olun, aynı güvenlik kuralları çalışır.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {MODES.map((m) => (
              <div
                key={m.title}
                className="rounded-2xl border border-[var(--line)] bg-[var(--paper-elevated)] p-5"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--accent-soft)] text-[var(--accent)]">
                  <m.icon className="h-4 w-4" />
                </span>
                <h3 className="mt-3 font-semibold text-white">{m.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-[var(--ink-muted)]">{m.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-[var(--accent)]/25 bg-[var(--accent-mist)] p-5">
            <p className="flex items-center gap-2 text-sm font-semibold text-white">
              <ShieldCheck className="h-4 w-4 text-[var(--accent)]" />
              Değişmeyen korkuluklar
            </p>
            <ul className="mt-3 space-y-2">
              {GUARDRAILS.map((g) => (
                <li key={g} className="flex gap-2 text-sm text-[var(--ink-muted)]">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" />
                  {g}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="relative mx-auto w-full max-w-[460px]">
          <CardShot
            src={SHOTS.kartOlcum}
            alt="Öneri kartı: rezervasyon dönüşümünün sayımını düzelt, yüksek risk"
            className="w-[78%] rotate-[-2deg]"
          />
          <CardShot
            src={SHOTS.kartButce}
            alt="Öneri kartı: bütçe artışı, düşük risk, Google provası geçti"
            className="-mt-24 ml-auto w-[78%] rotate-[2deg]"
          />
        </Reveal>
      </div>
    </section>
  );
}
