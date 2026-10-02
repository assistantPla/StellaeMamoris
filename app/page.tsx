"use client";

import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import Link from "next/link";
import { useState } from "react";


const projects = [
  { title: "Spring", type: "เคล้าคนึงห์ · MosaiZ · ArsezinaZ", year: "2024", className: "luma", mark: "", note: "Aries-Taurus-Gemini" },
  { title: "Summer", type: "MOONETTE · FoxxTrot · NithiN", year: "2024", className: "sable", mark: "", note: "Cancer-Leo-Virgo" },
  { title: "Autumn", type: "AME’REINA · Rabbit go’round · Cortigo.", year: "2023", className: "grid", mark: "", note: "Libra-Scorpio-Sagittarius" },
  { title: "Winter", type: "Midnight Sun Syndrome · Ophilia Kim · Assistant P.", year: "2023", className: "aster", mark: "", note: "Capricorn-Aquarius-Pisces" },
];

function Arrow() { return <span className="arrow" aria-hidden="true">↗</span>; }

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" style={{ width: 24, height: 24, display: "inline-block", verticalAlign: "middle" }}>
      <path fill="currentColor" d="M13.5 22v-8h2.7l.4-3.2h-3.1V7.3c0-.9.3-1.6 1.7-1.6H17V2.8c-.3 0-1.3-.1-2.4-.1-2.4 0-4.1 1.5-4.1 4.2v2.4H8v3.2h2.5v8h3z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" style={{ width: 18, height: 18, display: "inline-block", verticalAlign: "middle" }}>
      <path fill="currentColor" d="M18.9 2h3.3l-7.2 8.2L22.8 22h-6.5l-5.1-7.2L5.3 22H2l7.7-8.8L1.2 2h6.7l4.6 6.6L18.9 2zm-1.1 18h1.8L7.1 3.9H5.2L17.8 20z" />
    </svg>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);

  return <main id="top">
    <header className="site-header wrap">
      <a className="wordmark" href="#top" aria-label="Mira home">ABOUT <span>—</span> PROJECT</a>
      <nav className={menuOpen ? "nav open" : "nav"} aria-label="Primary navigation">
        <Link href="#work" onClick={() => setMenuOpen(false)}>Books</Link>
        <Link href="#about" onClick={() => setMenuOpen(false)}>Authors</Link>
        <Link href="#contact" onClick={() => setMenuOpen(false)}>Contact Us</Link>
      </nav>
      <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle menu">{menuOpen ? "Close" : "Menu"}</button>
      {/* <span className="availability"><i /> Available for select projects</span> */}
    </header>

    <section className="hero wrap">
      <p className="kicker" style={{ color: "#4377ba", fontSize: "1rem" }}>Project Fantasy &amp; 12 Authors</p>
      <h1 style={{ color: "#118dda" }}>Stellae<br /> <em>Marmoris</em></h1>
      <div className="hero-bottom"><p>เรื่องสั้นแฟนตาซี 12 เรื่อง 12 นักเขียน ถึงเหล่าเทพ 12 ราศีที่ร่วงหล่นจากฟ้าสู่น่านน้ำแห่งดารา</p><a className="circle-link" href="#work" aria-label="See selected work">↓</a></div>
      <div className="hero-index">01 <span>/</span> 04</div>
    </section>

    <section className="intro wrap" id="work"><p className="kicker">about work <span></span></p><div className="intro-line"><h2>4 BOOKS<em>  4 SEASON</em></h2><p>หนังสือทั้ง 4 เล่ม เล่าขานเรื่องราวทวยเทพ 4 ฤดูกาล</p></div></section>
    <section className="projects wrap" aria-label="Selected projects">
      {projects.map((project, index) => <article className={`project ${project.className}`} key={project.title}>
        <a href="#contact" className="project-art" aria-label={`Discuss a project like ${project.title}`}><div className="project-number">0{index + 1}</div><div className="art-text">{project.mark}</div><div className="art-note" style={{ fontSize: "0.9rem" }}>{project.note}</div><span className="art-arrow"><Arrow /></span></a>
        <div className="project-meta"><div><h3>{project.title}</h3><p>{project.type}</p></div><span>{project.year}</span></div>
      </article>)}
      {/* <nav className={menuOpen ? "nav open" : "nav"} aria-label="Primary navigation">
        <Link href="/work" onClick={() => setMenuOpen(false)}>Work</Link>
        <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
        <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
      </nav> */}
    </section>

    <section className="about" id="about">
      {/* <div className="wrap about-inner">
        <p className="kicker">A little about me</p>
        <div className="about-copy">
          <h2>Good design starts<br />with a <em>good question.</em></h2>
          <div>
            <p>I’m Mira, an independent designer working across identity, web, and art direction. I partner with founders and teams who care about the details—and know that clarity is a kind of generosity.</p><a className="underlink" href="#contact">More about the studio <Arrow />
            </a></div></div><div className="portrait" aria-label="Abstract portrait illustration"><span className="sun" /><span className="face" /><span className="hair" /><span className="neck" /></div></div> */}

    </section>

    <section className="principles wrap"><p className="kicker">How I work</p><div className="principle-grid"><article><span>01</span><h3>Start with the why</h3><p>Every decision earns its place. We begin with what matters, then make it visible.</p></article><article><span>02</span><h3>Make room for play</h3><p>Rigor and intuition belong in the same room. The best ideas often arrive sideways.</p></article><article><span>03</span><h3>Leave a useful trail</h3><p>Systems should make the next good decision easier, long after the launch is over.</p></article></div></section>



    <section className="contact" id="contact"><div className="wrap contact-inner"><p className="kicker">Contact Us</p>

      <h2>Yaihen<br /><em>House</em></h2>

      <Grid size={8}>
        <Item style={{ display: "flex", gap: 5, paddingTop: 10 }}>
          <button className="email-link" onClick={() => { setSent(true); window.location.href = "mailto:hello@mirastudio.co"; }} style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
            <XIcon />
            <span>@YaihenHouse</span>
          </button>{sent && <p className="sent">Your email app should be ready.</p>}
          <button className="email-link" onClick={() => { setSent(true); window.location.href = "https://facebook.com"; }} style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
            <FacebookIcon />
            <span>Yaihen House</span>
          </button>{sent && <p className="sent">Your email app should be ready.</p>}
        </Item>
      </Grid>

      <div className="contact-foot"><p>email something<br />working ไร้ balance</p>
        <p>© 2026 Stellae Marmoris</p><a href="#top">Back to top ↑</a></div>

    </div>
    </section>


  </main >;
}
