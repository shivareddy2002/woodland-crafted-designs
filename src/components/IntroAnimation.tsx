import { useState, useEffect } from "react";
import logoImage from "@/assets/logo.png";

interface IntroAnimationProps {
  onComplete: () => void;
}

const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
  const [phase, setPhase] = useState(0);
  // Phase 0: Dark warm scene + wood grain motion (1.2s)
  // Phase 1: "You are in IDL" text (2.4s)
  // Phase 2: "In Design Land" text (2.8s)
  // Phase 3: Logo reveal (2.5s)
  // Phase 4: Fade out to homepage (1.2s)

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 1200),
      setTimeout(() => setPhase(2), 3600),
      setTimeout(() => setPhase(3), 6400),
      setTimeout(() => setPhase(4), 8900),
      setTimeout(() => onComplete(), 10200),
    ];

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden transition-opacity duration-[1200ms] ease-in-out ${
        phase === 4 ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Base warm walnut background */}
      <div className="absolute inset-0 bg-[hsl(25_35%_12%)]" />

      {/* Deep wood base layer */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(145deg, hsl(25 40% 14%) 0%, hsl(20 35% 10%) 40%, hsl(28 38% 16%) 70%, hsl(22 32% 11%) 100%)",
        }}
      />

      {/* Animated wood grain layers */}
      <div className="absolute inset-0 intro-wood-grain opacity-[0.2]" />
      <div className="absolute inset-0 intro-wood-grain-2 opacity-[0.12]" />
      <div className="absolute inset-0 intro-wood-grain-3 opacity-[0.08]" />

      {/* Warm ambient light - always subtly present */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 45%, hsl(35 50% 25% / 0.5) 0%, transparent 70%)",
        }}
      />

      {/* Light sweep effect */}
      <div
        className={`absolute inset-0 intro-light-sweep transition-opacity duration-[3000ms] ease-in-out ${
          phase >= 1 ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Golden ambient glow - intensifies over time */}
      <div
        className={`absolute inset-0 transition-opacity duration-[2500ms] ease-in-out ${
          phase >= 1 ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background:
            "radial-gradient(ellipse 90% 70% at 50% 50%, hsl(35 55% 30% / 0.35) 0%, hsl(30 45% 20% / 0.15) 40%, transparent 70%)",
        }}
      />

      {/* Secondary warm glow for depth */}
      <div
        className={`absolute inset-0 intro-ambient-glow transition-opacity duration-[3000ms] ease-in-out ${
          phase >= 2 ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Soft particles / dust motes in warm light */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 18 }).map((_, i) => (
          <div
            key={i}
            className="intro-particle"
            style={{
              left: `${8 + Math.random() * 84}%`,
              top: `${8 + Math.random() * 84}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
            }}
          />
        ))}
      </div>

      {/* Vignette for cinematic depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 65% at 50% 50%, transparent 0%, hsl(20 35% 8% / 0.4) 100%)",
        }}
      />

      {/* Content container */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 w-full h-full">
        {/* Phase 1: "You are in IDL" — hero sized */}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-[1600ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
            phase === 1
              ? "opacity-100 translate-y-0"
              : phase < 1
              ? "opacity-0 translate-y-8"
              : "opacity-0 -translate-y-6"
          }`}
        >
          <p className="text-[hsl(35_40%_70%)] text-xl md:text-2xl lg:text-3xl tracking-[0.35em] uppercase font-light mb-4 md:mb-6">
            You are in
          </p>
          <h1 className="text-[hsl(38_35%_85%)] text-6xl md:text-8xl lg:text-9xl font-bold tracking-[0.15em]">
            IDL
          </h1>
          <div
            className={`mx-auto mt-6 h-[1px] bg-gradient-to-r from-transparent via-[hsl(35_50%_45%)] to-transparent transition-all duration-[2000ms] ease-in-out ${
              phase === 1 ? "w-32 md:w-56 opacity-60" : "w-0 opacity-0"
            }`}
          />
        </div>

        {/* Phase 2: "In Design Land" — cinematic */}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-[1600ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
            phase === 2
              ? "opacity-100 scale-100"
              : phase < 2
              ? "opacity-0 scale-95"
              : "opacity-0 scale-105"
          }`}
        >
          <h2 className="text-[hsl(38_35%_85%)] text-4xl md:text-6xl lg:text-8xl font-light tracking-[0.2em]">
            In Design Land
          </h2>
          <div
            className={`mx-auto mt-6 md:mt-8 h-[1px] bg-gradient-to-r from-transparent via-[hsl(35_55%_50%)] to-transparent transition-all duration-[2000ms] ease-in-out ${
              phase === 2 ? "w-56 md:w-96 opacity-70" : "w-0 opacity-0"
            }`}
          />
          <p className="text-[hsl(33_35%_55%)] text-base md:text-lg lg:text-xl tracking-[0.3em] uppercase mt-6 md:mt-8 font-light">
            Premium Wood Solutions
          </p>
        </div>

        {/* Phase 3: Logo reveal — grand & centered */}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-[1600ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
            phase >= 3
              ? "opacity-100 scale-100"
              : "opacity-0 scale-90"
          }`}
        >
          {/* Logo outer glow */}
          <div
            className={`absolute w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full transition-opacity duration-[2500ms] ${
              phase >= 3 ? "opacity-100" : "opacity-0"
            }`}
            style={{
              background:
                "radial-gradient(circle, hsl(35 50% 35% / 0.25) 0%, hsl(30 45% 25% / 0.1) 40%, transparent 70%)",
              filter: "blur(30px)",
            }}
          />
          {/* Logo inner warm ring */}
          <div
            className={`absolute w-44 h-44 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full transition-opacity duration-[2000ms] delay-300 ${
              phase >= 3 ? "opacity-100" : "opacity-0"
            }`}
            style={{
              background:
                "radial-gradient(circle, hsl(33 55% 40% / 0.2) 0%, transparent 60%)",
              filter: "blur(15px)",
            }}
          />
          <img
            src={logoImage}
            alt="In Design Land"
            className="w-32 h-32 md:w-44 md:h-44 lg:w-52 lg:h-52 object-contain relative z-10"
          />
          <p className="text-[hsl(33_35%_55%)] text-sm md:text-base lg:text-lg tracking-[0.4em] uppercase mt-8 md:mt-10 font-light relative z-10">
            Crafted with Passion
          </p>
        </div>
      </div>

      {/* Top edge warm line */}
      <div
        className={`absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[hsl(30_45%_30%)] to-transparent transition-opacity duration-[1500ms] ${
          phase >= 1 ? "opacity-30" : "opacity-0"
        }`}
      />

      {/* Bottom edge warm line */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[hsl(30_45%_30%)] to-transparent transition-opacity duration-[1500ms] ${
          phase >= 1 ? "opacity-30" : "opacity-0"
        }`}
      />
    </div>
  );
};

export default IntroAnimation;
