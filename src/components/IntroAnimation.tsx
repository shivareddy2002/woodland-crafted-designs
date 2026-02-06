import { useState, useEffect } from "react";
import logoImage from "@/assets/logo.png";

interface IntroAnimationProps {
  onComplete: () => void;
}

const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
  const [phase, setPhase] = useState(0);
  // Phase 0: Initial dark scene + wood grain motion
  // Phase 1: "You are in IDL" text
  // Phase 2: "In Design Land" text
  // Phase 3: Logo reveal
  // Phase 4: Fade out to homepage

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 800),      // Show first text
      setTimeout(() => setPhase(2), 2600),      // Transition to second text
      setTimeout(() => setPhase(3), 4200),      // Logo reveal
      setTimeout(() => setPhase(4), 6000),      // Begin fade out
      setTimeout(() => onComplete(), 7000),     // Complete - remove intro
    ];

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden transition-opacity duration-1000 ease-in-out ${
        phase === 4 ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Base dark warm background */}
      <div className="absolute inset-0 bg-[hsl(20_30%_8%)]" />

      {/* Animated wood grain layers */}
      <div className="absolute inset-0 intro-wood-grain opacity-[0.15]" />
      <div className="absolute inset-0 intro-wood-grain-2 opacity-[0.08]" />

      {/* Warm ambient light */}
      <div
        className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
          phase >= 1 ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background:
            "radial-gradient(ellipse at center, hsl(30 40% 20% / 0.4) 0%, transparent 70%)",
        }}
      />

      {/* Soft particles / dust motes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="intro-particle"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
              width: `${2 + Math.random() * 3}px`,
              height: `${2 + Math.random() * 3}px`,
            }}
          />
        ))}
      </div>

      {/* Content container */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6">
        {/* Phase 1: "You are in IDL" */}
        <div
          className={`absolute transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
            phase === 1
              ? "opacity-100 translate-y-0"
              : phase < 1
              ? "opacity-0 translate-y-6"
              : "opacity-0 -translate-y-4"
          }`}
        >
          <p className="text-[hsl(35_30%_75%)] text-lg md:text-xl tracking-[0.3em] uppercase font-light mb-3">
            You are in
          </p>
          <h1 className="text-[hsl(35_25%_88%)] text-4xl md:text-6xl lg:text-7xl font-bold tracking-wider">
            IDL
          </h1>
        </div>

        {/* Phase 2: "In Design Land" */}
        <div
          className={`absolute transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
            phase === 2
              ? "opacity-100 scale-100"
              : phase < 2
              ? "opacity-0 scale-95"
              : "opacity-0 scale-105"
          }`}
        >
          <h2 className="text-[hsl(35_25%_88%)] text-3xl md:text-5xl lg:text-6xl font-light tracking-[0.15em]">
            In Design Land
          </h2>
          <div
            className={`mx-auto mt-4 h-[1px] bg-gradient-to-r from-transparent via-[hsl(30_40%_50%)] to-transparent transition-all duration-[1500ms] ease-in-out ${
              phase === 2 ? "w-48 md:w-72 opacity-100" : "w-0 opacity-0"
            }`}
          />
          <p className="text-[hsl(30_25%_60%)] text-sm md:text-base tracking-[0.25em] uppercase mt-4 font-light">
            Premium Wood Solutions
          </p>
        </div>

        {/* Phase 3: Logo reveal */}
        <div
          className={`absolute flex flex-col items-center transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
            phase >= 3
              ? "opacity-100 scale-100"
              : "opacity-0 scale-90"
          }`}
        >
          {/* Logo glow */}
          <div
            className={`absolute w-32 h-32 md:w-40 md:h-40 rounded-full transition-opacity duration-[2000ms] ${
              phase >= 3 ? "opacity-100" : "opacity-0"
            }`}
            style={{
              background:
                "radial-gradient(circle, hsl(30 45% 40% / 0.3) 0%, transparent 70%)",
              filter: "blur(20px)",
            }}
          />
          <img
            src={logoImage}
            alt="In Design Land"
            className="w-24 h-24 md:w-32 md:h-32 object-contain relative z-10"
          />
          <p className="text-[hsl(30_25%_55%)] text-xs md:text-sm tracking-[0.4em] uppercase mt-6 font-light">
            Crafted with Passion
          </p>
        </div>
      </div>

      {/* Bottom subtle line */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[hsl(25_40%_30%)] to-transparent transition-opacity duration-1000 ${
          phase >= 1 ? "opacity-40" : "opacity-0"
        }`}
      />
    </div>
  );
};

export default IntroAnimation;
