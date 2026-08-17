import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const frauncesBold = await readFile(
    join(process.cwd(), "src/app/fonts/fraunces-700.woff")
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#0a0a0a",
          padding: "80px",
          position: "relative",
        }}
      >
        <svg
          viewBox="0 0 1200 260"
          width="1200"
          height="260"
          style={{ position: "absolute", top: 90, left: 0 }}
        >
          <path
            d="M60,90 C 320,15 380,290 690,180 S 1050,360 1170,290"
            fill="none"
            stroke="#fbbf24"
            strokeWidth={3}
            strokeLinecap="round"
          />
        </svg>

        <span
          style={{
            fontSize: 22,
            fontWeight: 600,
            color: "#fbbf24",
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          Open to new opportunities
        </span>

        <span
          style={{
            marginTop: 28,
            fontFamily: "Fraunces",
            fontSize: 96,
            fontWeight: 700,
            color: "#f4f4f5",
            letterSpacing: -2,
          }}
        >
          Vitalii Bodnar
        </span>

        <span
          style={{
            marginTop: 12,
            fontSize: 34,
            fontWeight: 500,
            color: "rgba(244,244,245,0.7)",
          }}
        >
          React Native Developer
        </span>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Fraunces", data: frauncesBold, weight: 700, style: "normal" },
      ],
    }
  );
}
