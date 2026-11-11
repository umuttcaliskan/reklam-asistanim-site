import type { Metadata } from "next";
import { CtaBand } from "@/components/marketing/CtaBand";
import { MobileAppSection } from "@/components/marketing/MobileAppSection";
import { PricingTeaser } from "@/components/marketing/PricingTeaser";
import { AudienceSection } from "@/components/marketing/home/AudienceSection";
import { AutopilotSection } from "@/components/marketing/home/AutopilotSection";
import { DailyLoop } from "@/components/marketing/home/DailyLoop";
import { FeatureTabs } from "@/components/marketing/home/FeatureTabs";
import { HomeFaq } from "@/components/marketing/home/HomeFaq";
import { HomeHero } from "@/components/marketing/home/HomeHero";
import { PLANS } from "@/lib/pricing";
import { SITE_DESCRIPTION, SITE_NAME, SITE_TAGLINE, SITE_URL } from "@/lib/site";

const TITLE = `${SITE_NAME} | ${SITE_TAGLINE}`;

export const metadata: Metadata = {
  title: { absolute: TITLE },
  applicationName: SITE_NAME,
  description: SITE_DESCRIPTION,
  keywords: [
    "Google Ads yönetimi",
    "Google Ads optimizasyonu",
    "yapay zeka reklam asistanı",
    "Google Ads otomasyon",
    "reklam ajansı yazılımı",
    "negatif anahtar kelime",
    "Performance Max",
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: TITLE,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: SITE_DESCRIPTION,
  },
  alternates: { canonical: "/" },
  other: {
    "application-name": SITE_NAME,
  },
};

function SoftwareJsonLd() {
  const prices = PLANS.filter((p) => p.price.startsWith("$")).map((p) => Number(p.price.slice(1)));
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#org`,
        name: SITE_NAME,
        url: SITE_URL,
        logo: `${SITE_URL}/favicon.png`,
      },
      {
        "@type": "SoftwareApplication",
        name: SITE_NAME,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web, iOS, Android",
        description: SITE_DESCRIPTION,
        url: SITE_URL,
        publisher: { "@id": `${SITE_URL}/#org` },
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "USD",
          lowPrice: Math.min(...prices),
          highPrice: Math.max(...prices),
          offerCount: PLANS.length,
        },
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export default function HomePage() {
  return (
    <>
      <SoftwareJsonLd />
      <HomeHero />
      <DailyLoop />
      <AutopilotSection />
      <FeatureTabs />
      <MobileAppSection />
      <AudienceSection />
      <PricingTeaser />
      <HomeFaq />
      <CtaBand />
    </>
  );
}
