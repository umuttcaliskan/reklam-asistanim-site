import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: { path: string; priority: number; freq: "weekly" | "monthly" }[] = [
    { path: "", priority: 1, freq: "weekly" },
    { path: "/ozellikler", priority: 0.9, freq: "monthly" },
    { path: "/fiyatlandirma", priority: 0.9, freq: "monthly" },
    { path: "/blog", priority: 0.7, freq: "weekly" },
    { path: "/akademi", priority: 0.7, freq: "weekly" },
    { path: "/sss", priority: 0.6, freq: "monthly" },
    { path: "/iletisim", priority: 0.6, freq: "monthly" },
    { path: "/gizlilik-politikasi", priority: 0.4, freq: "monthly" },
    { path: "/hizmet-sartlari", priority: 0.4, freq: "monthly" },
    { path: "/cerez-politikasi", priority: 0.4, freq: "monthly" },
    { path: "/kvkk", priority: 0.4, freq: "monthly" },
  ];

  const now = new Date();

  return routes.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified: now,
    changeFrequency: r.freq,
    priority: r.priority,
  }));
}
