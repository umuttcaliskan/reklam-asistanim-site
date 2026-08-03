import type { Metadata } from "next";
import { CalendarDays, Clock, Mail, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/marketing/CtaPair";
import { ContactForm } from "@/components/marketing/ContactForm";
import { Reveal } from "@/components/marketing/Reveal";
import { CONTACT_EMAIL, MEETING_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "Reklam Asistanım ekibiyle iletişime geçin: sorularınız, kurumsal görüşmeler ve toplantı planlama.",
  alternates: { canonical: "/iletisim" },
};

export default function IletisimPage() {
  return (
    <>
      <PageHero
        title="İletişim"
        description="Sorularınız, kurumsal görüşme talepleriniz veya iş birlikleri için bize ulaşın. Genellikle aynı iş günü içinde dönüş yapıyoruz."
      />

      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <div className="rounded-2xl border border-[var(--line)] bg-[var(--paper-elevated)] p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-white">Bize yazın</h2>
            <p className="mt-1 text-sm text-[var(--ink-muted)]">
              Formu doldurun, ekibimiz en kısa sürede dönüş yapsın.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </Reveal>

        <div className="space-y-4">
          <Reveal delay={0.08}>
            <a
              href={MEETING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-2xl border border-[var(--accent)]/30 bg-[var(--accent-soft)] p-6 transition hover:border-[var(--accent)]/50"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent)]/20 text-[var(--accent)]">
                <CalendarDays className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-semibold text-white">Toplantı planlayın</h3>
              <p className="mt-1 text-sm leading-relaxed text-[var(--ink-muted)]">
                15 dakikalık tanışma görüşmesinde platformu birlikte inceleyelim,
                ihtiyacınıza uygun paketi belirleyelim.
              </p>
              <span className="mt-3 inline-block text-sm font-semibold text-[var(--accent)]">
                Uygun saat seç →
              </span>
            </a>
          </Reveal>

          <Reveal delay={0.14}>
            <div className="rounded-2xl border border-[var(--line)] bg-[var(--paper-elevated)] p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.06] text-white">
                <Mail className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-semibold text-white">E-posta</h3>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="mt-1 block text-sm font-medium text-[var(--accent)] hover:underline"
              >
                {CONTACT_EMAIL}
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="rounded-2xl border border-[var(--line)] bg-[var(--paper-elevated)] p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.06] text-white">
                <MessageCircle className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-semibold text-white">Panel içi destek</h3>
              <p className="mt-1 text-sm leading-relaxed text-[var(--ink-muted)]">
                Mevcut kullanıcıysanız panel içindeki destek kanalından hızlıca talep
                oluşturabilirsiniz.
              </p>
              <p className="mt-3 flex items-center gap-1.5 text-xs text-[var(--ink-muted)]">
                <Clock className="h-3.5 w-3.5" />
                Hafta içi 09:00 – 18:00
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </>
  );
}
