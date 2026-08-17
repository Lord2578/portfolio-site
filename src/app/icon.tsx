import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: 7,
          position: "relative",
        }}
      >
        <span
          style={{
            fontSize: 16,
            fontWeight: 700,
            color: "#f4f4f5",
            letterSpacing: -0.5,
          }}
        >
          VB
        </span>
        <div
          style={{
            position: "absolute",
            bottom: 6,
            left: 8,
            width: 16,
            height: 2,
            borderRadius: 2,
            background: "#fbbf24",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
