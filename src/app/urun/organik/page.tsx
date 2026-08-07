import type { Metadata } from "next";
import { ProductPageShell } from "@/components/marketing/ProductPageShell";

export const metadata: Metadata = {
  title: "Organik & Blog",
  description:
    "Search Console fırsatları, AI blog ve WordPress yayın / plan — ücretli reklamlarla aynı panelde organik büyüme.",
  alternates: { canonical: "/urun/organik" },
};

export default function OrganikProductPage() {
  return (
    <ProductPageShell
      title="Organik & Blog"
      description="Search Console fırsatları, AI blog ve WordPress yayın — organik büyümeyi reklama bağlayın."
      mock="organic"
      bullets={[
        "Google Search Console bağlantısı",
        "Sorgu ve sayfa fırsat analizi",
        "AI blog + görsel üretimi",
        "WordPress manuel, otomatik veya planlı yayın",
        "Paketlere göre haftalık blog kotası ve aylık plan",
      ]}
      body={
        <>
          <p>
            Ücretli reklam kadar organik görünürlük de büyümeyi taşır. GSC verinizle hangi
            sorguların fırsat olduğunu görün; AI asistan blog taslağı ve görseller üretsin,
            WordPress’e tek tıkla veya zamanlanmış yayınlasın.
          </p>
          <p>
            Profesyonel pakette site başına haftalık 2 blog yazısı ve AI ile 1 aylık içerik
            planı bulunur — ajanslar birden fazla siteyi aynı disiplinle yönetebilir.
          </p>
        </>
      }
    />
  );
}
