"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { CONTACT_EMAIL } from "@/lib/site";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("Genel soru");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const body = encodeURIComponent(
      `Ad Soyad: ${name}\nE-posta: ${email}\n\n${message}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      `[${subject}] ${name}`
    )}&body=${body}`;
  }

  const inputClass =
    "w-full rounded-xl border border-[var(--line)] bg-[var(--paper)] px-4 py-2.5 text-sm text-white outline-none transition placeholder:text-[var(--ink-muted)] focus:border-[var(--accent)]/50 focus:ring-2 focus:ring-[var(--accent-soft)]";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-xs font-semibold text-white">
            Ad Soyad
          </label>
          <input
            id="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Adınız Soyadınız"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-xs font-semibold text-white">
            E-posta
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="ornek@firma.com"
            className={inputClass}
          />
        </div>
      </div>
      <div>
        <label htmlFor="subject" className="mb-1.5 block text-xs font-semibold text-white">
          Konu
        </label>
        <select
          id="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className={inputClass}
        >
          <option>Genel soru</option>
          <option>Satış / paketler</option>
          <option>Kurumsal görüşme</option>
          <option>Teknik destek</option>
          <option>İş birliği</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-xs font-semibold text-white">
          Mesajınız
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Size nasıl yardımcı olabiliriz?"
          className={inputClass}
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center gap-2 rounded-xl bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-[#04150f] transition hover:bg-[var(--accent-hover)]"
      >
        <Send className="h-4 w-4" />
        Gönder
      </button>
      <p className="text-xs text-[var(--ink-muted)]">
        Form, e-posta uygulamanız üzerinden {CONTACT_EMAIL} adresine iletilir.
      </p>
    </form>
  );
}
