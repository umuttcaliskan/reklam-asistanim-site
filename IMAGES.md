# Görseller

## Panel ekran görüntüleri (`public/images/panel/`)

Ana sayfadaki panel görüntüleri gerçek web panelinden **kurgusal demo verisiyle**
alınmıştır (Mermer Hammam, Nilüfer Güzellik). Gerçek müşteri adı ya da canlı veri yoktur.

- Kaynak: `reklam-asistanim-web` reposundaki `demo/site-gorselleri` branch'i.
  `DEMO_MODE=1` ile panel backend'e gitmeden örnek veri döner; görüntüler
  `window.__shot` / `window.__card` ile 2x PNG olarak `demo-shots/` klasörüne yazılır.
- Tam ekranlar 1440×900 pencerede, geniş kartlar 720px pencerede çekilir (yazı okunur kalsın).
- Kod tarafında `src/components/marketing/home/shots.ts` statik import eder;
  `next/image` boyutlandırır ve modern formata çevirir.

## Mobil (`public/images/mobil/`)

Mağaza ekran görüntülerinden (`m9-kalite/magaza`) 1434px yüksekliğe küçültülmüştür.

## Paylaşım görseli

`src/app/opengraph-image.tsx` derlemede üretilir (1200×630). Türkçe karakterler için
`src/app/_og/` içindeki Manrope (OFL) fontları kullanılır.

## Akademi videoları

`src/lib/resources.ts` içindeki `ACADEMY_TRACKS` şu an tüm videolarda placeholder
YouTube ID (`NWYZisAJTQo`) kullanıyor. Gerçek videolar yüklendikçe `youtubeId`
değerlerini güncelleyin.

## Toplantı linki

`src/lib/site.ts` içindeki `MEETING_URL` placeholder Calendly linkidir — kendi
takvim linkinizle değiştirin.
