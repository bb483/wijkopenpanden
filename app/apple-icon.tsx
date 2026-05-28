import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1C1610",
          borderRadius: "40px",
        }}
      >
        {/* Roof */}
        <svg
          width="140"
          height="130"
          viewBox="0 0 140 130"
          style={{ position: "absolute" }}
        >
          <polygon points="70,10 130,60 10,60" fill="#C4A35A" />
          <rect x="12" y="58" width="116" height="62" rx="4" fill="#FAF7F2" />
          <rect x="52" y="84" width="36" height="36" fill="#1C1610" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
