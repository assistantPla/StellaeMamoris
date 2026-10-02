import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="wrap" style={{ padding: "80px 0 120px" }}>
      <p className="kicker">A little about us</p>
      <h1 style={{ fontSize: "clamp(42px, 6vw, 88px)", letterSpacing: "-0.06em", margin: "18px 0 32px" }}>
        Good design starts with a <em>good question.</em>
      </h1>
      <div style={{ maxWidth: "700px", display: "grid", gap: "18px" }}>
        <p>
          We are a small creative studio working across identity, storytelling, and digital experiences.
          Our job is to turn complex ideas into clear, memorable systems that people can feel and trust.
        </p>
        <p>
          We partner with founders, teams, and cultural brands who want more than decoration—they want meaning,
          direction, and work that earns attention over time.
        </p>
      </div>
      <div style={{ marginTop: "40px" }}>
        <Link href="/" style={{ textDecoration: "underline" }}>← Back home</Link>
      </div>
    </main>
  );
}
