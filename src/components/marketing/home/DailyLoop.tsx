import { Reveal } from "@/components/marketing/Reveal";
import { CardShot } from "@/components/marketing/home/Frames";
import { SHOTS } from "@/components/marketing/home/shots";

const FACTS = [
  { value: "Her sabah 07:00", label: "Hesabınızın günlük denetimi" },
  { value: "%100", label: "Arama terimi kapsamı" },
  { value: "2 saatte bir", label: "Harcama ve gösterim bekçisi" },
  { value: "7 gün", label: "Tek tıkla geri alma" },
];

const STEPS = [
  {
    no: "01",
    title: "İşletmenizi tanır, planı kurar",
    text: "Google Ads'i bağlayın, 8 soruluk kısa formu doldurun. AI 90 günlük veriyle hedef müşteri maliyetini, bütçe dağılımını ve ölçüm planını çıkarır; siz onaylarsınız.",
    shot: SHOTS.kartButcePlani,
    alt: "Hesap planı: kampanya bazında günlük bütçe planı ve gerekçeleri",
  },
  {
    no: "02",
    title: "Her sabah hesabı uzman gözüyle tarar",
    text: "Bütçe temposu, teklif stratejisi, arama terimleri, reklam öğeleri, hedefleme ve dönüşüm ayarları tek tek kontrol edilir. Gün özeti hazır olur.",
    shot: SHOTS.kartGununOzeti,
    alt: "Bugünün özeti: hesap durumu ve incelenen arama terimleri",
  },
  {
    no: "03",
    title: "Ne değişeceğini rakamla söyler",
    text: "Her kart Google Ads'te tam olarak neyin değişeceğini, nedenini ve riskini gösterir. Google provasından geçmeyen öneri size hiç gelmez.",
    shot: SHOTS.kartButce,
    alt: "Öneri kartı: bütçeyi 450 TL'den 540 TL'ye artır",
  },
];

export function DailyLoop() {
  return (
    <section id="nasil-calisir" className="border-y border-[var(--line)] bg-[var(--paper)]">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--line)] md:grid-cols-4">
          {FACTS.map((f) => (
            <div key={f.label} className="bg-[var(--paper-elevated)] px-5 py-5">
              <dt className="text-xs text-[var(--ink-muted)]">{f.label}</dt>
              <dd className="mt-1 font-[family-name:var(--font-display)] text-xl font-semibold text-white sm:text-2xl">
                {f.value}
              </dd>
            </div>
          ))}
        </dl>

        <Reveal className="mx-auto mt-20 max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
            Nasıl çalışır?
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Kıdemli bir reklam uzmanının günü, her gün
          </h2>
          <p className="mt-4 text-[var(--ink-muted)]">
            Bir uzmanın kontrol listesi koda dönüştü. AI veriyi yorumlar, kararı gerekçesiyle sunar.
          </p>
        </Reveal>

        <ol className="mt-14 space-y-16 sm:space-y-20">
          {STEPS.map((s, i) => (
            <li
              key={s.no}
              className="grid items-center gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-14"
            >
              <Reveal className={i % 2 ? "lg:order-2" : undefined}>
                <span className="font-[family-name:var(--font-display)] text-5xl font-semibold text-[var(--accent)]/30">
                  {s.no}
                </span>
                <h3 className="mt-2 text-2xl font-semibold text-white">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-[var(--ink-muted)]">{s.text}</p>
              </Reveal>
              <Reveal delay={0.08} className={i % 2 ? "lg:order-1" : undefined}>
                <div className="rounded-3xl bg-gradient-to-br from-[var(--accent)]/20 via-white/[0.03] to-transparent p-4 sm:p-8">
                  <CardShot
                    src={s.shot}
                    alt={s.alt}
                    className={s.shot === SHOTS.kartButce ? "mx-auto max-w-[400px]" : undefined}
                    sizes="(min-width: 1024px) 640px, 92vw"
                  />
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
