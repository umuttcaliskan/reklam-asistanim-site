"use client";

import { usePathname } from "next/navigation";
import { Footer } from "@/components/marketing/Footer";
import { Header } from "@/components/marketing/Header";

/** Hide marketing chrome on OAuth brand-verification pages. */
export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const bare = pathname === "/brand-home";

  if (bare) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
