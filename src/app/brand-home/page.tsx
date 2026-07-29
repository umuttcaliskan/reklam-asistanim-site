import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reklam Asistanım",
  description:
    "Reklam Asistanım is a web application for managing Google Ads accounts via OAuth.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/brand-home" },
};

/**
 * Minimal homepage for Google OAuth brand verification crawlers.
 * Set Cloud Console → Branding → Application home page to:
 * https://reklamasistanim.com/brand-home
 */
export default function BrandHomePage() {
  return (
    <main
      style={{
        maxWidth: 720,
        margin: "0 auto",
        padding: "48px 20px",
        fontFamily:
          "system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
        color: "#0f172a",
        lineHeight: 1.55,
        background: "#ffffff",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ fontSize: 36, margin: "0 0 16px" }}>Reklam Asistanım</h1>

      <p style={{ fontSize: 18, margin: "0 0 16px" }}>
        Application name: <strong>Reklam Asistanım</strong>
      </p>

      <p style={{ fontSize: 16, margin: "0 0 16px" }}>
        Reklam Asistanım is a web application. Its purpose is to help advertisers and
        agencies manage Google Ads accounts. Users create an account on Reklam Asistanım,
        connect their Google Ads account using OAuth, and then use Reklam Asistanım to create
        and manage campaigns, review performance metrics, download weekly reports, and review
        optimization suggestions.
      </p>

      <p style={{ fontSize: 16, margin: "0 0 16px" }}>
        Reklam Asistanım requests Google account access only to provide these product features
        to the signed-in user. Reklam Asistanım does not sell Google user data to third
        parties.
      </p>

      <p style={{ fontSize: 16, margin: "0 0 8px" }}>
        Privacy Policy:{" "}
        <a href="https://reklamasistanim.com/gizlilik-politikasi">
          https://reklamasistanim.com/gizlilik-politikasi
        </a>
      </p>
      <p style={{ fontSize: 16, margin: "0 0 8px" }}>
        Terms of Service:{" "}
        <a href="https://reklamasistanim.com/hizmet-sartlari">
          https://reklamasistanim.com/hizmet-sartlari
        </a>
      </p>
      <p style={{ fontSize: 16, margin: "0 0 8px" }}>
        App: <a href="https://app.reklamasistanim.com">https://app.reklamasistanim.com</a>
      </p>
    </main>
  );
}
