import { ImageResponse } from "next/og";

export const alt = "Ironwood Business Consulting";
export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0f4c5c 0%, #1a4e58 50%, #093540 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px"
        }}
      >
        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "40px"
          }}
        >
          <div
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "12px",
              background: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "48px",
              fontWeight: "bold",
              color: "#0f4c5c"
            }}
          >
            I
          </div>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: "56px",
            fontWeight: "bold",
            color: "#ffffff",
            textAlign: "center",
            marginBottom: "20px",
            lineHeight: 1.2
          }}
        >
          Ironwood Business Consulting
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: "28px",
            color: "#b7e0e5",
            textAlign: "center",
            marginBottom: "40px"
          }}
        >
          Accounting, Tax & Advisory Services
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "20px",
            color: "#85c9d1",
            textAlign: "center"
          }}
        >
          Remote delivery across South Africa
        </div>
      </div>
    ),
    {
      ...size
    }
  );
}
