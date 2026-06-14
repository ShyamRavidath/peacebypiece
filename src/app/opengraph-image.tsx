import { ImageResponse } from "next/og";

export const alt =
  "Peace by Piece — youth-led nonprofit piecing together the systemic education gap";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "linear-gradient(135deg, #463831 0%, #3e6e64 60%, #4b8d77 100%)",
          color: "#f7f5e1",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "rgba(247,245,225,0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 38,
            }}
          >
            🧩
          </div>
          <div
            style={{
              fontSize: 30,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#d8a24a",
            }}
          >
            Youth-Led · Portland, OR
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 104, lineHeight: 1.02 }}>Peace by Piece</div>
          <div style={{ fontSize: 40, color: "#eaf0e9", maxWidth: 920 }}>
            Piecing together the systemic education gap.
          </div>
        </div>

        <div style={{ fontSize: 26, color: "rgba(234,240,233,0.85)" }}>
          Systemic · Educational · Direct Impact
        </div>
      </div>
    ),
    { ...size }
  );
}
