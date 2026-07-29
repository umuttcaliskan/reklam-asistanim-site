import type { Metadata } from "next";
import { CtaBand } from "@/components/marketing/CtaBand";
import { FeatureStrips } from "@/components/marketing/FeatureStrips";
import { Hero } from "@/components/marketing/Hero";
import { HowItWorks } from "@/components/marketing/HowItWorks";
import { MobileAppSection } from "@/components/marketing/MobileAppSection";
import { PricingTeaser } from "@/components/marketing/PricingTeaser";
import { TrustStrip } from "@/components/marketing/TrustStrip";
import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  // Google OAuth branding: App name must match homepage <title> exactly
  title: { absolute: SITE_NAME },
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <FeatureStrips />
      <MobileAppSection />
      <HowItWorks />
      <PricingTeaser />
      <CtaBand />
    </>
  );
}
