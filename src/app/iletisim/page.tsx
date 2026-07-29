import type { Metadata } from "next";
import { CalendarDays, Clock, Mail, MessageCircle } from "lucide-react";
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
      <div className="border-b border-[var(--line)] bg-hero-glow">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <h1 className="text-3xl font-bold tracking-tight text-[var(--ink)] sm:text-4xl">
            İletişim
          </h1>
          <p className="mt-3 max-w-2xl text-[var(--ink-muted)]">
            Sorularınız, kurumsal görüşme talepleriniz veya iş birlikleri için bize
            ulaşın. Genellikle aynı iş günü içinde dönüş yapıyoruz.
          </p>
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <div className="rounded-2xl border border-[var(--line)] bg-white p-6 sm:p-8">
            <h2 className="text-lg font-bold text-[var(--ink)]">Bize yazın</h2>
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
              className="block rounded-2xl border border-emerald-200 bg-gradient-to-b from-emerald-50/80 to-white p-6 transition hover:-translate-y-0.5 hover:shadow-[var(--shadow)]"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                <CalendarDays className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-bold text-[var(--ink)]">Toplantı planlayın</h3>
              <p className="mt-1 text-sm leading-relaxed text-[var(--ink-muted)]">
                15 dakikalık tanışma görüşmesinde platformu birlikte inceleyelim,
                ihtiyacınıza uygun paketi belirleyelim.
              </p>
              <span className="mt-3 inline-block text-sm font-semibold text-[var(--accent-hover)]">
                Uygun saat seç →
              </span>
            </a>
          </Reveal>

          <Reveal delay={0.14}>
            <div className="rounded-2xl border border-[var(--line)] bg-white p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-[var(--ink)]">
                <Mail className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-bold text-[var(--ink)]">E-posta</h3>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="mt-1 block text-sm font-medium text-[var(--accent-hover)] hover:underline"
              >
                {CONTACT_EMAIL}
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="rounded-2xl border border-[var(--line)] bg-white p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-[var(--ink)]">
                <MessageCircle className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-bold text-[var(--ink)]">Panel içi destek</h3>
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
