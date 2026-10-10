"use client";

import { AsciiCanvas } from "@/components/AsciiCanvas";

export default function Home() {
  return (
    <main className="home-container">
      {/* Animated dot background */}
      <AsciiCanvas
        className="home-bg-canvas"
        mode="dots"
        color="#3a3a4a"
        cellSize={18}
        speed={10}
        intensity={9}
        noiseScale={12}
        waveTension={5}
        direction="left"
      />

      <div className="home-content">
        <div className="logo-wrapper">
          <img
            src="/bot-logo.png"
            alt="Dicebet Bot Logo"
            className="bot-logo"
            width={128}
            height={128}
          />
        </div>

        <section className="community" aria-labelledby="community-title">
          <h2 id="community-title" className="community-title">
            Gamble with Dicesbet Bot
          </h2>
          <div className="socials">
            <a
              className="social"
              href="https://discord.gg/JbcJUDPZGY"
              target="_blank"
              rel="noopener"
            >
              <span className="social-chip" aria-hidden="true">
                <svg className="social-icon">
                  <use href="/brand.svg#discord"></use>
                </svg>
              </span>{" "}
              Discord
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
