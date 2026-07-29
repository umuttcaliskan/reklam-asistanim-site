# Görseller

Panel ekranları artık **kodlanmış animasyonlu mockup'lar** ile gösteriliyor
(`src/components/marketing/PanelMock.tsx`) — özellik görsellerine gerek yok.

Gereken tek dosya:

| Dosya | Kullanım | Brief |
|-------|----------|--------|
| `public/images/og-default.png` | Open Graph / sosyal paylaşım | 1200×630 — logo + kısa slogan, emerald vurgu, açık zemin |

Opsiyonel:

- Logo wordmark varyantı (`public/`)
- Gerçek panel ekran görüntüleri eklemek isterseniz mockup'ların yerine
  `next/image` ile kullanabilirsiniz.

## Akademi videoları

`src/lib/resources.ts` içindeki `ACADEMY_TRACKS` şu an tüm videolarda placeholder
YouTube ID (`NWYZisAJTQo`) kullanıyor. Gerçek videolar yüklendikçe `youtubeId`
değerlerini güncelleyin.

## Toplantı linki

`src/lib/site.ts` içindeki `MEETING_URL` placeholder Calendly linkidir — kendi
takvim linkinizle değiştirin.
