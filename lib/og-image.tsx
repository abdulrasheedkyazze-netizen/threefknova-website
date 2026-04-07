import { ImageResponse } from "next/og";

type OgImageInput = {
  eyebrow: string;
  title: string;
  description: string;
};

export const ogImageSize = {
  width: 1200,
  height: 630,
};

export const ogImageContentType = "image/png";

export function createOgImage({
  eyebrow,
  title,
  description,
}: OgImageInput) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background:
            "radial-gradient(circle at top right, rgba(17,197,245,0.20), transparent 28%), linear-gradient(135deg, #071225 0%, #0b1f3f 55%, #102b57 100%)",
          color: "#f8fafc",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 40,
            right: 60,
            width: 220,
            height: 220,
            borderRadius: 999,
            background: "rgba(17,197,245,0.10)",
            boxShadow: "0 0 120px rgba(17,197,245,0.18)",
          }}
        />

        <div
          style={{
            position: "absolute",
            bottom: -80,
            left: -40,
            width: 280,
            height: 280,
            borderRadius: 999,
            background: "rgba(245,158,11,0.12)",
            boxShadow: "0 0 140px rgba(245,158,11,0.10)",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            padding: "56px 64px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 22,
              maxWidth: 920,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
              }}
            >
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 16,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "rgba(255,255,255,0.10)",
                  border: "1px solid rgba(255,255,255,0.10)",
                  color: "#11C5F5",
                  fontSize: 28,
                  fontWeight: 700,
                }}
              >
                T
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div style={{ fontSize: 28, fontWeight: 700 }}>
                  ThreeFk Nova Technologies
                </div>
                <div style={{ fontSize: 18, color: "#9FB3C8" }}>
                  Enterprise websites, ERP, cloud, and AI solutions
                </div>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                alignSelf: "flex-start",
                width: "auto",
                borderRadius: 999,
                border: "1px solid rgba(17,197,245,0.24)",
                background: "rgba(17,197,245,0.08)",
                color: "#b7f0ff",
                padding: "12px 20px",
                fontSize: 22,
                letterSpacing: 2.5,
                textTransform: "uppercase",
              }}
            >
              {eyebrow}
            </div>

            <div
              style={{
                fontSize: 64,
                fontWeight: 800,
                lineHeight: 1.06,
                letterSpacing: -1.8,
              }}
            >
              {title}
            </div>

            <div
              style={{
                fontSize: 28,
                lineHeight: 1.45,
                color: "#dbe5f0",
                maxWidth: 980,
              }}
            >
              {description}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: 22,
              color: "#9FB3C8",
            }}
          >
            <div>www.threefknova.com</div>
            <div>Professional digital transformation delivery</div>
          </div>
        </div>
      </div>
    ),
    ogImageSize
  );
}
