"use client";

export default function Home() {
  return (
    <>
      <style>{`
        @keyframes bg-pan {
          0% {
            background-position: 0% 0%;
          }
          50% {
            background-position: 100% 100%;
          }
          100% {
            background-position: 0% 0%;
          }
        }

        @keyframes float-logo {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-16px) rotate(4deg);
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            filter: drop-shadow(0 0 16px #0083e5) drop-shadow(0 0 35px rgba(0, 131, 229, 0.45));
          }
          50% {
            filter: drop-shadow(0 0 30px #0083e5) drop-shadow(0 0 60px rgba(0, 131, 229, 0.8));
          }
        }

        .animated-bg {
          background-image: url("https://www.solprime.io/figma/rm-hero-lines.webp");
          background-size: 140% 140%;
          background-repeat: repeat;
          animation: bg-pan 25s ease-in-out infinite;
          opacity: 0.45;
        }

        .bot-logo-img {
          width: 130px;
          height: 130px;
          border-radius: 50%;
          border: 3.5px solid #0083e5;
          animation: float-logo 4.5s ease-in-out infinite, pulse-glow 3s ease-in-out infinite;
          transition: transform 0.25s ease;
          display: block;
          object-fit: cover;
        }

        .bot-logo-img:hover {
          transform: scale(1.08) translateY(-10px);
        }

        .brand-accent {
          color: #0083e5;
        }

        .discord-btn {
          border-color: rgba(0, 131, 229, 0.45) !important;
          box-shadow: 0 4px 18px rgba(0, 131, 229, 0.25) !important;
        }

        .discord-btn:hover {
          border-color: #0083e5 !important;
          box-shadow: 0 6px 25px rgba(0, 131, 229, 0.5) !important;
          color: #ffffff !important;
        }
      `}</style>

      <main className="home-container">
        {/* Animated Moving SolPrime Background Tinted/Glowed */}
        <div
          className="home-bg-canvas animated-bg"
          style={{
            filter: "drop-shadow(0 0 40px rgba(0, 131, 229, 0.25))",
          }}
        />

        {/* Ambient Radial Color Tint #0083e5 */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background:
              "radial-gradient(circle at 50% 50%, rgba(0, 131, 229, 0.15) 0%, rgba(10, 10, 12, 0.85) 75%)",
            zIndex: 0,
          }}
        />

        <div className="home-content">
          <div className="logo-wrapper">
            <img
              src="https://dicesbet.vercel.app/bot-logo.png"
              alt="Dicesbet Logo"
              className="bot-logo-img"
              width={130}
              height={130}
            />
          </div>

          <section className="community" aria-labelledby="community-title">
            <h2 id="community-title" className="community-title">
              Gamble with <span className="brand-accent">Dicesbet</span> Bot
            </h2>
            <div className="socials">
              <a
                className="social discord-btn"
                href="https://discord.gg/JbcJUDPZGY"
                target="_blank"
                rel="noopener"
              >
                <span className="social-chip" aria-hidden="true">
                  <svg className="social-icon" style={{ fill: "#0083e5" }}>
                    <use href="/brand.svg#discord"></use>
                  </svg>
                </span>{" "}
                Discord
              </a>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
