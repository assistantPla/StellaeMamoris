import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="wrap" style={{ padding: "80px 0 120px" }}>
      <p className="kicker">Have something in mind?</p>
      <h1 style={{ fontSize: "clamp(42px, 6vw, 88px)", letterSpacing: "-0.06em", margin: "18px 0 32px" }}>
        Let’s make it <em>matter.</em>
      </h1>
      <p style={{ maxWidth: "560px", fontSize: "1.1rem", lineHeight: 1.7 }}>
        hello@mirastudio.co
      </p>
      <div style={{ marginTop: "36px" }}>
        <Link href="/" style={{ textDecoration: "underline" }}>← Back home</Link>
      </div>
    </main>
  );
}
