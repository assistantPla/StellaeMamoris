"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import "./gods.css";

const seasons = [
  {
    name: "Spring",
    thaiName: "ฤดูใบไม้ผลิ",
    image: "/photo/Spring-optimized.jpg",
    book: "เคล้าคนึงห์ · MosaiZ · ArsezinaZ",
    signs: [
      { symbol: "♈", name: "Aries", dates: "21 Mar – 19 Apr" },
      { symbol: "♉", name: "Taurus", dates: "20 Apr – 20 May" },
      { symbol: "♊", name: "Gemini", dates: "21 May – 20 Jun" },
    ],
  },
  {
    name: "Summer",
    thaiName: "ฤดูร้อน",
    image: "/photo/Summer-optimized.jpg",
    book: "MOONETTE · FoxxTrot · NithiN",
    signs: [
      { symbol: "♋", name: "Cancer", dates: "21 Jun – 22 Jul" },
      { symbol: "♌", name: "Leo", dates: "23 Jul – 22 Aug" },
      { symbol: "♍", name: "Virgo", dates: "23 Aug – 22 Sep" },
    ],
  },
  {
    name: "Autumn",
    thaiName: "ฤดูใบไม้ร่วง",
    image: "/photo/FALL-optimized.jpg",
    book: "AME’REINA · Rabbit go’round · Cortigo.",
    signs: [
      { symbol: "♎", name: "Libra", dates: "23 Sep – 22 Oct" },
      { symbol: "♏", name: "Scorpio", dates: "23 Oct – 21 Nov" },
      { symbol: "♐", name: "Sagittarius", dates: "22 Nov – 21 Dec" },
    ],
  },
  {
    name: "Winter",
    thaiName: "ฤดูหนาว",
    image: "/photo/Winter-optimized.jpg",
    book: "Midnight Sun Syndrome · Ophilia Kim · Assistant P.",
    signs: [
      { symbol: "♑", name: "Capricorn", dates: "22 Dec – 19 Jan" },
      { symbol: "♒", name: "Aquarius", dates: "20 Jan – 18 Feb" },
      { symbol: "♓", name: "Pisces", dates: "19 Feb – 20 Mar" },
    ],
  },
];

export default function GodsPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="gods-page" id="top">
      <header className="site-header wrap">
        <Link className="wordmark" href="/" aria-label="Stellae Marmoris home">
          Back <span>—</span> home
        </Link>
        <nav className={menuOpen ? "nav open" : "nav"} aria-label="Primary navigation">
          <Link href="/gods" aria-current="page" onClick={() => setMenuOpen(false)}>Gods</Link>
        </nav>
        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </header>

      <section className="gods-hero wrap">
        <p className="kicker">Stellae Marmoris · The Zodiac</p>
        <div className="gods-hero-copy">
          <h1>The Twelve<br /><em>Who Fell</em></h1>
          <p>เทพทั้งสิบสอง ผู้ร่วงหล่นจากฟากฟ้าสู่น่านน้ำแห่งดารา</p>
        </div>
        <div className="gods-hero-foot">
          <span>12 SIGNS</span>
          <span>4 SEASONS</span>
          <a href="#spring" aria-label="Explore the twelve zodiac signs">↓</a>
        </div>
        <span className="gods-index" aria-hidden="true">01 / 12</span>
      </section>

      <div className="season-list">
        {seasons.map((season, seasonIndex) => (
          <section
            className="season-section"
            id={season.name.toLowerCase()}
            key={season.name}
          >
            <div className="season-banner">
              <Image src={season.image} alt="" fill sizes="100vw" quality={75} />
              <div className="season-banner-shade" />
              <div className="season-banner-copy wrap">
                <p className="kicker">Season 0{seasonIndex + 1} · {season.thaiName}</p>
                <h2>{season.name}</h2>
                <p className="season-book">{season.book}</p>
              </div>
            </div>
            <div className="sign-list wrap" aria-label={`${season.name} zodiac signs`}>
              {season.signs.map((sign, signIndex) => (
                <article className="sign-entry" key={sign.name}>
                  <span className="sign-number">0{seasonIndex * 3 + signIndex + 1}</span>
                  <span className="sign-symbol" aria-hidden="true">{sign.symbol}</span>
                  <div>
                    <h3>{sign.name}</h3>
                    <p>{sign.dates}</p>
                  </div>
                  <span className="sign-arrow" aria-hidden="true">↗</span>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>

      <footer className="gods-footer wrap">
        <Link href="/">← Return to Stellae Marmoris</Link>
        <span>© 2026 Stellae Marmoris</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}