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
          background: "#0A0B0E",
        }}
      >
        <div
          style={{
            width: 128,
            height: 128,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(145deg, #7C5CFF 0%, #2E6BFF 55%, #4F7BFF 100%)",
            borderRadius: 28,
          }}
        >
          <svg width="72" height="72" viewBox="0 0 100 100" fill="none">
            <path d="M57 9 L29 55 L46 55 L43 91 L73 41 L55 41 Z" fill="#FFFFFF" />
          </svg>
        </div>
      </div>
    ),
    { ...size }
  );
}
