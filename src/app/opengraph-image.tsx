import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Reklam Asistanım: Google Ads hesabınızı her sabah inceleyen yapay zeka";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const dir = join(process.cwd(), "src/app/_og");
  const [m500, m700, e500, e700, card] = await Promise.all([
    readFile(join(dir, "manrope-latin-500.ttf")),
    readFile(join(dir, "manrope-latin-700.ttf")),
    readFile(join(dir, "manrope-latin-ext-500.ttf")),
    readFile(join(dir, "manrope-latin-ext-700.ttf")),
    readFile(join(process.cwd(), "public/images/panel/kart-butce.png"), "base64"),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background:
            "radial-gradient(90% 80% at 10% 0%, rgba(0,201,138,0.32), transparent 60%), #070b0a",
          padding: "64px 0 0 72px",
          fontFamily: "Manrope",
          color: "#f4f7f5",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", width: 600, paddingTop: 20 }}>
          <div style={{ fontSize: 30, fontWeight: 700, color: "#00c98a" }}>Reklam Asistanım</div>
          <div style={{ fontSize: 56, fontWeight: 700, lineHeight: 1.1, marginTop: 22, letterSpacing: -1.5 }}>
            Reklam hesabınızı her sabah inceleyen yapay zeka
          </div>
          <div style={{ fontSize: 26, fontWeight: 500, color: "#8a9b94", marginTop: 26, lineHeight: 1.4 }}>
            Google Ads için öneri kartları ve otopilot. 3 gün ücretsiz.
          </div>
        </div>
        <div style={{ display: "flex", marginLeft: 40, marginTop: 40 }}>
          <img
            src={`data:image/png;base64,${card}`}
            width={430}
            height={422}
            style={{ borderRadius: 24, boxShadow: "0 30px 80px rgba(0,0,0,0.6)" }}
            alt=""
          />
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Manrope", data: m500, weight: 500, style: "normal" },
        { name: "Manrope", data: m700, weight: 700, style: "normal" },
        { name: "Manrope", data: e500, weight: 500, style: "normal" },
        { name: "Manrope", data: e700, weight: 700, style: "normal" },
      ],
    }
  );
}
