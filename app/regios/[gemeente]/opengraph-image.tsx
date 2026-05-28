import { ImageResponse } from "next/og";
import { getRegion } from "@/content/regions";

export const runtime = "edge";
export const alt = "wijkopenpanden.be — vastgoed opkoper";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage({
  params,
}: {
  params: Promise<{ gemeente: string }>;
}) {
  const { gemeente } = await params;
  const region = getRegion(gemeente);

  const name = region?.name ?? gemeente;
  const priceMin = region?.pricePerM2?.min;
  const priceMax = region?.pricePerM2?.max;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#FAF7F2",
          padding: "64px 72px",
          position: "relative",
        }}
      >
        {/* Gold top accent */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "#C4A35A",
          }}
        />

        {/* Radial glow */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "radial-gradient(ellipse 60% 40% at 0% 100%, rgba(196,163,90,0.08) 0%, transparent 60%)",
          }}
        />

        {/* Top row: logo */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "baseline" }}>
            <span
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "32px",
                fontWeight: 700,
                color: "#1C1610",
                letterSpacing: "-0.5px",
              }}
            >
              wijkopenpanden
            </span>
            <span
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "32px",
                fontWeight: 700,
                color: "#C4A35A",
              }}
            >
              .
            </span>
            <span
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "32px",
                fontWeight: 700,
                color: "#1C1610",
                letterSpacing: "-0.5px",
              }}
            >
              be
            </span>
          </div>

          {priceMin && priceMax && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(196,163,90,0.12)",
                border: "1px solid rgba(196,163,90,0.30)",
                borderRadius: "100px",
                padding: "8px 18px",
              }}
            >
              <span
                style={{
                  fontFamily: "system-ui, sans-serif",
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "#5C4D3C",
                }}
              >
                €{priceMin.toLocaleString("nl-BE")} – €{priceMax.toLocaleString("nl-BE")} / m²
              </span>
            </div>
          )}
        </div>

        {/* Eyebrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div style={{ width: "40px", height: "2px", background: "#C4A35A" }} />
          <span
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: "18px",
              fontWeight: 600,
              color: "#C4A35A",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            Woning verkopen in
          </span>
        </div>

        {/* Region name */}
        <div
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "96px",
            fontWeight: 700,
            color: "#1C1610",
            letterSpacing: "-3px",
            lineHeight: 1,
            marginTop: "-16px",
          }}
        >
          {name}
        </div>

        {/* Trust badges */}
        <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
          {["Geen commissie", "Eerlijk bod na bezoek", "Reactie binnen 2 uur"].map((badge, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(196,163,90,0.10)",
                border: "1px solid rgba(196,163,90,0.25)",
                borderRadius: "100px",
                padding: "10px 18px",
              }}
            >
              <div
                style={{
                  width: "16px",
                  height: "16px",
                  borderRadius: "50%",
                  background: "#C4A35A",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "10px",
                  color: "white",
                  fontWeight: 700,
                }}
              >
                ✓
              </div>
              <span
                style={{
                  fontFamily: "system-ui, sans-serif",
                  fontSize: "17px",
                  fontWeight: 600,
                  color: "#1C1610",
                }}
              >
                {badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
