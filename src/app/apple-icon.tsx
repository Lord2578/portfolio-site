import { ImageResponse } from "next/og";

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
          background: "#0a0a0a",
          position: "relative",
        }}
      >
        <span
          style={{
            fontSize: 84,
            fontWeight: 700,
            color: "#f4f4f5",
            letterSpacing: -2,
          }}
        >
          VB
        </span>
        <div
          style={{
            position: "absolute",
            bottom: 40,
            left: 46,
            width: 88,
            height: 10,
            borderRadius: 10,
            background: "#fbbf24",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
