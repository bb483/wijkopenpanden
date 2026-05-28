import { ImageResponse } from "next/og";
import { getArticle } from "@/content/knowledge-articles";

export const runtime = "edge";
export const alt = "wijkopenpanden.be kennisbank";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);

  const title = article?.title ?? "Kennisbank";
  const date = article?.publishedAt
    ? new Date(article.publishedAt).toLocaleDateString("nl-BE", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : null;

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
              "radial-gradient(ellipse 60% 40% at 100% 0%, rgba(196,163,90,0.10) 0%, transparent 60%)",
          }}
        />

        {/* Top row: logo + kennisbank tag */}
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
                color: "#C4A35A",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              Kennisbank
            </span>
          </div>
        </div>

        {/* Article title */}
        <div
          style={{
            fontFamily: "Georgia, serif",
            fontSize: title.length > 60 ? "48px" : "56px",
            fontWeight: 700,
            color: "#1C1610",
            letterSpacing: "-1.5px",
            lineHeight: 1.1,
            maxWidth: "960px",
          }}
        >
          {title}
        </div>

        {/* Bottom row */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {date && (
            <span
              style={{
                fontFamily: "system-ui, sans-serif",
                fontSize: "18px",
                color: "#8A7560",
              }}
            >
              {date}
            </span>
          )}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginLeft: "auto",
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#C4A35A",
              }}
            />
            <span
              style={{
                fontFamily: "system-ui, sans-serif",
                fontSize: "18px",
                color: "#5C4D3C",
                fontWeight: 500,
              }}
            >
              Vastgoed opkoper Antwerpen
            </span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
