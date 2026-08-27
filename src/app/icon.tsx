import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/** Brand squircle — always served by Next (no static asset dependency) */
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
          background: "linear-gradient(145deg, #7C5CFF 0%, #2E6BFF 55%, #4F7BFF 100%)",
          borderRadius: 7,
        }}
      >
        <svg width="18" height="18" viewBox="0 0 100 100" fill="none">
          <path
            d="M57 9 L29 55 L46 55 L43 91 L73 41 L55 41 Z"
            fill="#FFFFFF"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}
