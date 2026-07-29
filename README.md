# Reklam Asistanım — Tanıtım Sitesi

`reklamasistanim.com` için Next.js (App Router) marketing sitesi.

- **Stack:** Next.js 16 · TypeScript · Tailwind CSS v4 · Framer Motion
- **Uygulama (CTA):** [app.reklamasistanim.com](https://app.reklamasistanim.com)
- **Dil:** Türkçe

## Yerel geliştirme

```bash
cd reklamasistanim-site
npm install
npm run dev
```

Açık: [http://localhost:3000](http://localhost:3000)

## Ortam değişkenleri

| Değişken | Varsayılan | Açıklama |
|----------|------------|----------|
| `NEXT_PUBLIC_SITE_URL` | `https://reklamasistanim.com` | Canonical / sitemap |
| `NEXT_PUBLIC_APP_URL` | `https://app.reklamasistanim.com` | Giriş / kayıt CTA'ları |

Vercel'de Project → Settings → Environment Variables içine ekleyin.

## Yapılandırılacaklar

- **OG görseli:** `public/images/og-default.png` (1200×630) — bkz. [IMAGES.md](./IMAGES.md)
- **Toplantı linki:** `src/lib/site.ts` → `MEETING_URL` (placeholder Calendly)
- **Akademi videoları:** `src/lib/resources.ts` → `youtubeId` değerleri (şu an placeholder)
- **Blog içerikleri:** `src/lib/resources.ts` → `BLOG_POSTS` (dummy; CMS sonra)

## Vercel deploy

1. Bu klasörü ayrı bir GitHub reposuna itin (ör. `reklamasistanim-site`).
2. [Vercel](https://vercel.com) → **Add New Project** → repo'yu bağlayın.
3. Framework: Next.js (otomatik). Root Directory: repo kökü.
4. Env: `NEXT_PUBLIC_APP_URL`, isteğe bağlı `NEXT_PUBLIC_SITE_URL`.
5. Deploy sonrası **Domains**:
   - `reklamasistanim.com`
   - `www.reklamasistanim.com` (apex'e redirect)
6. DNS: domain sağlayıcınızda Vercel'in verdiği A / CNAME kayıtlarını ekleyin.

Build komutu: `next build` (varsayılan).

## Sayfalar

| Yol | İçerik |
|-----|--------|
| `/` | Landing (AI hero, animasyonlu panel mockup'ları, mobil uygulama, fiyat teaser) |
| `/ozellikler` | Özellik derin anlatım |
| `/fiyatlandirma` | Paketler + karşılaştırma tablosu |
| `/blog` | Blog listesi (dummy) |
| `/akademi` | Video eğitim setleri (YouTube embed) |
| `/sss` | Sıkça sorulan sorular |
| `/iletisim` | İletişim formu + toplantı planlama |
| `/gizlilik-politikasi`, `/hizmet-sartlari`, `/kvkk` | Yasal |
| `/sitemap.xml`, `/robots.txt` | SEO |

## Not

Console paneli (`reklam-asistanim-web`) bu projeden ayrıdır; bu site yalnızca tanıtım ve yasal URL'ler içindir.
