import { BIZ } from "../config.js";
import Photo from "./Photo.jsx";

const BADGES = [
  ["ecoFriendly", "100% eco-friendly products"],
  ["insured", "Insured"],
  ["bonded", "Bonded"],
  ["backgroundChecked", "Background-checked"],
];

export default function Hero() {
  const badges = BADGES.filter(([key]) => BIZ.badges[key]);

  return (
    <>
      <section
        style={{
          background: "var(--color-accent)",
          color: "var(--color-bg)",
          padding: "28px 16px 24px",
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
      >
        <span className="eyebrow" style={{ fontWeight: 700 }}>{BIZ.area}</span>
        <h1 style={{ fontSize: 44, lineHeight: 1.02, letterSpacing: "-0.03em", color: "var(--color-bg)" }}>
          {BIZ.tagline}
        </h1>
        {badges.length > 0 && (
          <ul
            style={{
              listStyle: "none",
              margin: 0,
              padding: 0,
              borderTop: "2px solid var(--color-bg)",
            }}
          >
            {badges.map(([key, title]) => (
              <li
                key={key}
                style={{
                  display: "flex",
                  gap: 10,
                  alignItems: "baseline",
                  padding: "9px 0",
                  borderBottom: "1px solid var(--color-accent-300)",
                  fontWeight: 600,
                }}
              >
                <span aria-hidden="true" style={{ color: "var(--color-accent-200)" }}>✓</span>
                <span style={{ fontSize: 15 }}>{title}</span>
              </li>
            ))}
          </ul>
        )}
      </section>
      {BIZ.photos.hero ? (
        <div style={{ height: 260, position: "relative", borderBottom: "4px solid var(--color-leaf)" }}>
          <Photo src={BIZ.photos.hero} alt="A clean, bright room" />
        </div>
      ) : (
        <div style={{ display: "grid", placeItems: "center", padding: "24px 16px", background: "#fff", borderBottom: "4px solid var(--color-leaf)" }}>
          <img src="/logo.png" alt={`${BIZ.name} logo, 100% eco-friendly`} style={{ width: "min(260px, 70%)", height: "auto", display: "block" }} />
        </div>
      )}
    </>
  );
}
