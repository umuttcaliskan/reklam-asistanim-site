import { Apple, Bell, Play, ShieldAlert, Smartphone } from "lucide-react";
import { PhoneFrame } from "@/components/marketing/home/Frames";
import { SHOTS } from "@/components/marketing/home/shots";
import { Reveal } from "@/components/marketing/Reveal";

const points = [
  {
    icon: ShieldAlert,
    title: "Anomali bekçisi",
    text: "Harcama fırladığında, kampanya gösterim almadığında ya da reklam reddedildiğinde saatler içinde haber verir.",
  },
  {
    icon: Bell,
    title: "Bildirim + tek dokunuş",
    text: "Gelen öneriyi telefondan inceleyin, kaydırarak uygulayın. Yüksek riskli işlemler Face ID ister.",
  },
  {
    icon: Smartphone,
    title: "Tüm işletmeler tek ekranda",
    text: "Birden fazla hesabınız varsa harcama, dönüşüm ve bekleyen öneriler işletme işletme listelenir.",
  },
];

function StoreButton({ icon: Icon, store }: { icon: typeof Apple; store: string }) {
  return (
    <span
      aria-disabled="true"
      className="inline-flex cursor-default items-center gap-2.5 rounded-xl border border-white/15 bg-white px-4 py-2.5 text-[#04150f] opacity-90"
    >
      <Icon className="h-5 w-5" />
      <span className="text-left leading-tight">
        <span className="block text-[9px] uppercase tracking-wide text-black/50">Yakında · {store}</span>
        <span className="block text-sm font-semibold">İndirin</span>
      </span>
    </span>
  );
}

export function MobileAppSection() {
  return (
    <section id="mobil" className="overflow-hidden bg-mesh">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <p className="inline-flex items-center gap-2 rounded-full border border-[var(--accent)]/30 bg-[var(--accent-soft)] px-3 py-1 text-xs font-semibold text-[var(--accent)]">
            <Smartphone className="h-3.5 w-3.5" />
            iOS ve Android
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Hesabınız cebinizde, alarmlar anında
          </h2>
          <p className="mt-3 max-w-md leading-relaxed text-[var(--ink-muted)]">
            Mobil uygulama panelle aynı hesabı kullanır. Sabah gelen önerileri yoldayken
            onaylayın, bir sorun çıktığında ilk siz duyun.
          </p>

          <ul className="mt-8 space-y-5">
            {points.map((p) => (
              <li key={p.title} className="flex gap-3">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--accent-soft)] text-[var(--accent)]">
                  <p.icon className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">{p.title}</p>
                  <p className="mt-0.5 text-sm leading-relaxed text-[var(--ink-muted)]">{p.text}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <StoreButton icon={Apple} store="App Store" />
            <StoreButton icon={Play} store="Google Play" />
          </div>
        </Reveal>

        <Reveal delay={0.1} className="relative mx-auto flex w-full max-w-[520px] justify-center">
          <PhoneFrame
            src={SHOTS.mobilOzet}
            alt="Mobil uygulama: tüm işletmelerin özeti ve açık alarm"
            className="relative z-10 w-[48%] -rotate-3"
          />
          <PhoneFrame
            src={SHOTS.mobilAi}
            alt="Mobil uygulama: AI Analiz, bekleyen öneriler"
            className="-ml-6 mt-14 w-[48%] rotate-3"
          />
        </Reveal>
      </div>
    </section>
  );
}
