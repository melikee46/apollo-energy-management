/**
 * opengraph-image.tsx
 *
 * Generates a lightweight, brand-aligned PNG preview for social sharing.
 */

import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Apollo Green Solutions - Industrial energy intelligence";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#000000",
          color: "#ffffff",
          display: "flex",
          height: "100%",
          justifyContent: "space-between",
          padding: "72px",
          width: "100%",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ color: "#E3F0B8", fontSize: 28, fontWeight: 700, letterSpacing: "0.18em" }}>
            APOLLO GREEN SOLUTIONS
          </div>
          <div style={{ fontSize: 76, fontWeight: 900, lineHeight: 1.02, maxWidth: 720 }}>
            Make every watt count.
          </div>
          <div style={{ color: "#E6F2C0", fontSize: 28 }}>
            Industrial energy intelligence
          </div>
        </div>
        <div style={{ color: "#E3F0B8", fontSize: 160, fontWeight: 900 }}>*</div>
      </div>
    ),
    { ...size },
  );
}
