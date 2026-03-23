"use client";

import { useEffect, useState } from "react";

// Confetti particle component
function Confetti({ style }: { style: React.CSSProperties }) {
  return <div className="confetti" style={style} />;
}

// Sparkle component
function Sparkle({ style }: { style: React.CSSProperties }) {
  return (
    <div className="sparkle" style={style}>
      ✦
    </div>
  );
}

export default function HomePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Generate confetti particles
  const confetti = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 10,
    duration: 8 + Math.random() * 6,
    color: ["#f472b6", "#ec4899", "#f9a8c9", "#fda4af", "#db2777"][i % 5],
    size: 5 + Math.random() * 8,
    isCircle: Math.random() > 0.4,
  }));

  // Generate sparkles
  const sparkles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: 5 + Math.random() * 90,
    top: 5 + Math.random() * 90,
    delay: Math.random() * 4,
    size: 8 + Math.random() * 12,
    color: ["#ec4899", "#f472b6", "#f9a8c9", "#db2777"][i % 4],
  }));

  return (
    <main className="main-container relative min-h-screen overflow-hidden">
      {/* Confetti particles */}
      {mounted &&
        confetti.map((c) => (
          <Confetti
            key={c.id}
            style={{
              left: `${c.left}%`,
              backgroundColor: c.color,
              width: c.size,
              height: c.size,
              borderRadius: c.isCircle ? "50%" : "2px",
              animationDelay: `${c.delay}s`,
              animationDuration: `${c.duration}s`,
            }}
          />
        ))}

      {/* Sparkles */}
      {mounted &&
        sparkles.map((s) => (
          <Sparkle
            key={s.id}
            style={{
              left: `${s.left}%`,
              top: `${s.top}%`,
              fontSize: s.size,
              color: s.color,
              animationDelay: `${s.delay}s`,
            }}
          />
        ))}

      {/* Content */}
      <div className="relative z-10 px-4 py-10 sm:px-8 md:py-14">
        <div className="mx-auto max-w-md">
          {/* Top blessing - Golden Sanskrit text */}
          <div className="text-center mb-4">
            <p className="blessing-text text-2xl sm:text-3xl font-bold">
              || श्री गणेशाय नमः ||
            </p>
          </div>

          {/* Subtitle with decorative lines */}
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="divider-line w-12 sm:w-16"></div>
            <span className="ornament text-sm">✦</span>
            <div className="divider-line w-12 sm:w-16"></div>
          </div>
          <p className="text-center text-xs text-pink-600 tracking-[0.2em] uppercase mb-8">
            WITH THE BLESSINGS OF GOD
          </p>

          {/* Wedding Title */}
          <div className="text-center mb-6">
            <h1 className="wedding-title text-5xl sm:text-6xl font-bold">
              WEDDING
            </h1>
            <p className="invitation-subtitle text-xs sm:text-sm mt-2 tracking-[0.5em]">
              I N V I T A T I O N
            </p>
          </div>

          {/* Ring icon */}
          <div className="flex justify-center mb-8">
            <span className="ring-icon text-3xl">💍</span>
          </div>

          {/* Couple Section - Groom first, then Bride */}
          <div className="couple-section my-8">
            {/* Corner decorations */}
            <div className="absolute -top-2 -left-2 text-lg opacity-70">✨</div>
            <div className="absolute -top-2 -right-2 text-lg opacity-70">
              ✨
            </div>
            <div className="absolute -bottom-2 -left-2 text-lg opacity-70">
              💫
            </div>
            <div className="absolute -bottom-2 -right-2 text-lg opacity-70">
              💫
            </div>

            <div className="flex items-center justify-center gap-3 sm:gap-4">
              {/* Bride - Left Side */}
              <div className="couple-card bride-card text-center flex-1">
                <p className="bride-label text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase mb-2">
                  <span className="label-icon">🌸</span>
                  BRIDE
                </p>
                <h2 className="couple-name bride-name text-4xl sm:text-5xl">
                  Sayali
                </h2>
                <p className="parent-info">D/O Late Jayant Salunkhe</p>
              </div>

              {/* Ampersand */}
              <div className="ampersand-container flex flex-col items-center px-1">
                <span
                  className="heart-decor"
                  style={{
                    top: "-10px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    animationDelay: "0s",
                  }}
                >
                  💕
                </span>
                <span className="ampersand">&</span>
                <span
                  className="heart-decor"
                  style={{
                    bottom: "-10px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    animationDelay: "0.5s",
                  }}
                >
                  💗
                </span>
              </div>

              {/* Groom - Right Side */}
              <div className="couple-card groom-card text-center flex-1">
                <p className="groom-label text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase mb-2">
                  <span className="label-icon">👑</span>
                  GROOM
                </p>
                <h2 className="couple-name groom-name text-4xl sm:text-5xl">
                  Akash
                </h2>
                <p className="parent-info">S/O Vilas Patil</p>
              </div>
            </div>

            {/* Bottom decorative element */}
            <div className="flex justify-center mt-4 gap-2">
              <span className="text-xs text-pink-400">✦</span>
              <div className="divider-line w-16 mt-2"></div>
              <span className="text-lg">💍</span>
              <div className="divider-line w-16 mt-2"></div>
              <span className="text-xs text-pink-500">✦</span>
            </div>
          </div>

          {/* Date Card */}
          <div className="date-card p-6 sm:p-8 text-center">
            <p className="text-pink-700 text-xs tracking-[0.35em] uppercase">
              WEDNESDAY
            </p>
            <p className="date-number my-1">29</p>
            <p className="text-pink-600 text-lg sm:text-xl tracking-[0.2em] font-medium">
              APRIL 2026
            </p>
            <div className="mt-3 pt-3 border-t border-pink-200">
              <p className="text-pink-500 text-[10px] tracking-[0.3em] uppercase">
                AUSPICIOUS TIME
              </p>
              <p className="text-pink-700 text-xl sm:text-2xl font-bold mt-1">
                12:45 PM
              </p>
            </div>
          </div>

          {/* Balloon decoration */}
          <div className="flex justify-center my-4">
            <span className="text-xl flower-decoration">🎈</span>
          </div>

          {/* Venue Card */}
          <div className="venue-card p-6 text-center">
            <p className="text-pink-500 text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase mb-3">
              VENUE
            </p>
            <h3 className="text-xl sm:text-2xl font-bold text-pink-800">
              Priyadarshani Lawns
            </h3>
            <p className="text-pink-700 text-sm mt-3 leading-relaxed">
              Opposite to Dulari Garden,
              <br />
              Nakane, Dhule
            </p>
          </div>

          {/* Footer Message */}
          <div className="mt-10 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="prayer-icon text-lg">🙏</span>
            </div>
            <p className="footer-message text-xs sm:text-sm leading-relaxed">
              We joyfully request your gracious presence
              <br />
              to bless the couple on this auspicious occasion.
            </p>
          </div>

          {/* Regards Section */}
          <div className="mt-10 text-center">
            <p className="text-pink-700 text-sm italic">Regards,</p>
            <p className="text-pink-800 text-lg font-semibold mt-1">
              Salunkhe Family
            </p>
          </div>

          {/* Bottom flowers */}
          <div className="flex justify-center gap-6 mt-8">
            <span
              className="flower-decoration text-xl"
              style={{ animationDelay: "0s" }}
            >
              🌸
            </span>
            <span
              className="flower-decoration text-xl"
              style={{ animationDelay: "0.7s" }}
            >
              🌺
            </span>
            <span
              className="flower-decoration text-xl"
              style={{ animationDelay: "1.4s" }}
            >
              🌷
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
