import { CtaPair } from "@/components/marketing/CtaPair";
import { BrowserFrame, CardShot } from "@/components/marketing/home/Frames";
import { SHOTS } from "@/components/marketing/home/shots";
import { SITE_NAME, TRIAL_LABEL } from "@/lib/site";

const CHANNELS = ["Google Ads", "Search Console", "İşletme Profili", "WordPress"];

/** Ana sayfa girişi. Metinler animasyonsuz: ilk boyamada ve tarayıcısız okuyucularda hep görünür. */
export function HomeHero() {
  return (
    <section className="bg-hero-glow relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-25" />
      <div className="relative mx-auto max-w-6xl px-4 pb-10 pt-14 sm:px-6 sm:pb-14 sm:pt-20">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white/[0.04] px-3.5 py-1.5 text-xs font-semibold text-[var(--accent)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
            Google Ads için yapay zeka hesap uzmanı
          </p>

          {/* Marka adı H1'de ve her zaman görünür kalmalı (Google OAuth incelemesi). */}
          <h1 className="font-[family-name:var(--font-display)] font-semibold tracking-[-0.03em] text-white">
            <span className="block text-lg text-[var(--accent)] sm:text-xl">{SITE_NAME}</span>
            <span className="mt-3 block text-balance text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">
              Reklam hesabınızı her sabah inceleyen yapay zeka
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--ink-muted)] sm:text-lg">
            Boşa harcanan bütçeyi, kaçan gösterimleri ve hatalı ölçümü bulur. Ne değişeceğini
            rakamlarla gösterir; ister tek tıkla onaylayın, ister otopilota bırakın.
          </p>

          <div className="mt-8 flex w-full justify-center">
            <CtaPair showTrialHint className="items-center sm:items-center" />
          </div>

          <ul className="mt-8 flex flex-wrap items-center justify-center gap-2" aria-label="Bağlantılar">
            {CHANNELS.map((name) => (
              <li
                key={name}
                className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--line)] bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-[var(--ink-muted)]"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                {name}
              </li>
            ))}
            <li className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--line)] bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-[var(--ink-muted)]">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              Meta Ads
              <span className="text-[10px] font-semibold uppercase tracking-wide text-amber-400/90">
                yakında
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative mx-auto max-w-6xl px-3 pb-16 sm:px-6 sm:pb-24">
        <div className="relative lg:pr-24">
          <BrowserFrame
            src={SHOTS.aiOneriler}
            alt="Günlük AI Analiz ekranı: bugünün özeti ve uygulanmayı bekleyen öneri kartları"
            eager
          />
          <div className="pointer-events-none absolute -bottom-10 right-0 hidden w-[300px] lg:block xl:-right-6 xl:w-[330px]">
            <CardShot
              src={SHOTS.kartNegatif}
              alt="Öneri kartı: 12 alakasız arama terimini engelle"
              sizes="330px"
            />
          </div>
        </div>
        {/* Küçük ekranda panel görüntüsü küçülür; okunur bir kartı ayrıca göster. */}
        <CardShot
          src={SHOTS.kartButce}
          alt="Öneri kartı: bütçeyi 450 TL'den 540 TL'ye artır"
          className="relative mx-auto -mt-6 max-w-[320px] lg:hidden"
          sizes="320px"
        />
        <p className="mt-10 text-center text-xs text-[var(--ink-muted)] lg:mt-14">
          Görseller gerçek panelden, örnek işletme verisiyle alınmıştır. {TRIAL_LABEL}.
        </p>
      </div>
    </section>
  );
}
