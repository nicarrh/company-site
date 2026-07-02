import { ImageResponse } from "next/og";
import { siteConfig } from "@/content/site";

export const alt = siteConfig.tagline;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)",
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "12px",
              background: "#6366f1",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "24px",
              fontWeight: 700,
            }}
          >
            A
          </div>
          <span
            style={{ color: "white", fontSize: "32px", fontWeight: 600 }}
          >
            Altum Tech
          </span>
        </div>
        <p
          style={{
            color: "white",
            fontSize: "52px",
            fontWeight: 700,
            lineHeight: 1.2,
            maxWidth: "900px",
          }}
        >
          {siteConfig.tagline}
        </p>
        <p
          style={{
            color: "#94a3b8",
            fontSize: "24px",
            marginTop: "24px",
            maxWidth: "700px",
          }}
        >
          {siteConfig.description}
        </p>
      </div>
    ),
    { ...size }
  );
}
