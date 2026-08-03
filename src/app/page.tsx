import type { Metadata } from "next";
import { CtaBand } from "@/components/marketing/CtaBand";
import { Hero } from "@/components/marketing/Hero";
import { HowItWorks } from "@/components/marketing/HowItWorks";
import { ProductStories } from "@/components/marketing/HomeStories";
import { MobileAppSection } from "@/components/marketing/MobileAppSection";
import { PricingTeaser } from "@/components/marketing/PricingTeaser";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: SITE_NAME },
  applicationName: SITE_NAME,
  description: SITE_DESCRIPTION,
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/images/og-default.png",
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: ["/images/og-default.png"],
  },
  alternates: { canonical: "/" },
  other: {
    "application-name": SITE_NAME,
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <ProductStories />
      <MobileAppSection />
      <PricingTeaser />
      <CtaBand />
    </>
  );
}
