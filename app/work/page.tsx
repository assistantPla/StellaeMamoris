import Link from "next/link";

const projects = [
  { title: "Spring", note: "Aries-Taurus-Gemini" },
  { title: "Summer", note: "Cancer-Leo-Virgo" },
  { title: "Autumn", note: "Libra-Scorpio-Sagittarius" },
  { title: "Winter", note: "Capricorn-Aquarius-Pisces" },
];

export default function WorkPage() {
  return (
    <main className="wrap" style={{ padding: "80px 0 120px" }}>
      <p className="kicker">Selected work</p>
      <h1 style={{ fontSize: "clamp(42px, 6vw, 88px)", letterSpacing: "-0.06em", margin: "18px 0 32px" }}>
        Four books, four seasons.
      </h1>
      <div style={{ display: "grid", gap: "18px" }}>
        {projects.map((project, index) => (
          <article key={project.title} style={{ borderTop: "1px solid #cbc9c0", paddingTop: "18px", display: "flex", justifyContent: "space-between", gap: "20px" }}>
            <div>
              <p style={{ margin: 0, fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase" }}>0{index + 1}</p>
              <h2 style={{ margin: "8px 0 4px", fontSize: "clamp(22px, 3vw, 38px)" }}>{project.title}</h2>
            </div>
            <p style={{ margin: 0, color: "#536058" }}>{project.note}</p>
          </article>
        ))}
      </div>
      <div style={{ marginTop: "40px" }}>
        <Link href="/" style={{ textDecoration: "underline" }}>← Back home</Link>
      </div>
    </main>
  );
}
