import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "wijkopenpanden.be — Direct een eerlijk bod op uw pand";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#FAF7F2",
          padding: "80px",
          position: "relative",
        }}
      >
        {/* Top-left warm glow */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(196,163,90,0.12) 0%, transparent 60%)",
          }}
        />

        {/* Gold top accent line */}
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

        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            marginBottom: "32px",
          }}
        >
          <span
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "52px",
              fontWeight: 700,
              color: "#1C1610",
              letterSpacing: "-1px",
            }}
          >
            wijkopenpanden
          </span>
          <span
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "52px",
              fontWeight: 700,
              color: "#C4A35A",
            }}
          >
            .
          </span>
          <span
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "52px",
              fontWeight: 700,
              color: "#1C1610",
              letterSpacing: "-1px",
            }}
          >
            be
          </span>
        </div>

        {/* Gold divider */}
        <div
          style={{
            width: "64px",
            height: "2px",
            background: "#C4A35A",
            marginBottom: "36px",
          }}
        />

        {/* Headline */}
        <div
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "64px",
            fontWeight: 700,
            color: "#1C1610",
            letterSpacing: "-2px",
            lineHeight: 1.08,
            textAlign: "center",
            maxWidth: "900px",
            marginBottom: "24px",
          }}
        >
          Direct een eerlijk bod{" "}
          <span style={{ color: "#C4A35A" }}>op uw pand.</span>
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontFamily: "system-ui, sans-serif",
            fontSize: "26px",
            color: "#5C4D3C",
            marginBottom: "56px",
            textAlign: "center",
          }}
        >
          Vastgoed opkoper Antwerpen &amp; omstreken
        </div>

        {/* Trust badges */}
        <div
          style={{
            display: "flex",
            gap: "40px",
            alignItems: "center",
          }}
        >
          {["Geen commissie", "Keuringen inbegrepen", "Reactie binnen 2 uur", "Vrijblijvend bod"].map(
            (badge, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  background: "rgba(196,163,90,0.10)",
                  border: "1px solid rgba(196,163,90,0.25)",
                  borderRadius: "100px",
                  padding: "10px 20px",
                }}
              >
                <div
                  style={{
                    width: "18px",
                    height: "18px",
                    borderRadius: "50%",
                    background: "#C4A35A",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "11px",
                    color: "white",
                    fontWeight: 700,
                  }}
                >
                  ✓
                </div>
                <span
                  style={{
                    fontFamily: "system-ui, sans-serif",
                    fontSize: "18px",
                    fontWeight: 600,
                    color: "#1C1610",
                  }}
                >
                  {badge}
                </span>
              </div>
            )
          )}
        </div>
      </div>
    ),
    { ...size }
  );
}
