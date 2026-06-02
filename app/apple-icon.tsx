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
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#1C1610",
          borderRadius: "38px",
        }}
      >
        {/* Roof — CSS triangle via border trick (satori-compatible) */}
        <div
          style={{
            width: 0,
            height: 0,
            borderLeft: "58px solid transparent",
            borderRight: "58px solid transparent",
            borderBottom: "50px solid #C4A35A",
          }}
        />
        {/* House body */}
        <div
          style={{
            width: 116,
            height: 72,
            background: "#FAF7F2",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            paddingBottom: "0px",
          }}
        >
          {/* Door */}
          <div
            style={{
              width: 32,
              height: 42,
              background: "#1C1610",
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
