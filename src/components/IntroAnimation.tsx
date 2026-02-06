import { useState, useEffect, useMemo } from "react";
import logoImage from "@/assets/animate.png";

interface IntroAnimationProps {
  onComplete: () => void;
}

const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
  const [phase, setPhase] = useState(0);
  // Phase 0: Wood background settling (1s)
  // Phase 1: "You are in IDL" fade in (1.2s transition)
  // Phase 2: "You are in IDL" hold (1.5s)
  // Phase 3: "You are in IDL" fade out (1s transition)
  // Phase 4: "In Design Land" fade in (1.2s transition)
  // Phase 5: "In Design Land" hold (1.5s)
  // Phase 6: "In Design Land" fade out (1s transition)
  // Phase 7: Logo fade in (1.2s transition)
  // Phase 8: Logo hold (1.5s)
  // Phase 9: Whole scene fades out (1.2s transition)

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 1000),    // fade in text 1
      setTimeout(() => setPhase(2), 2200),    // hold text 1
      setTimeout(() => setPhase(3), 3700),    // fade out text 1
      setTimeout(() => setPhase(4), 4700),    // fade in text 2
      setTimeout(() => setPhase(5), 5900),    // hold text 2
      setTimeout(() => setPhase(6), 7400),    // fade out text 2
      setTimeout(() => setPhase(7), 8400),    // fade in logo
      setTimeout(() => setPhase(8), 9600),    // hold logo
      setTimeout(() => setPhase(9), 11100),   // fade out scene
      setTimeout(() => onComplete(), 12400),  // done
    ];

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  // Memoize particles so they don't re-randomize on each render
  const particles = useMemo(
    () =>
      Array.from({ length: 18 }).map(() => ({
        left: `${8 + Math.random() * 84}%`,
        top: `${8 + Math.random() * 84}%`,
        delay: `${Math.random() * 5}s`,
        duration: `${5 + Math.random() * 5}s`,
        size: `${2 + Math.random() * 4}px`,
      })),
    []
  );

  // Determine visibility for each content group
  const text1Visible = phase >= 1 && phase <= 2;
  const text2Visible = phase >= 4 && phase <= 5;
  const logoVisible = phase >= 7 && phase <= 8;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden transition-opacity duration-[1300ms] ease-in-out ${
        phase === 9 ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Base warm walnut background */}
      <div className="absolute inset-0 bg-[hsl(25_35%_12%)]" />

      {/* Deep wood base layer */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(145deg, hsl(22, 3%, 54%) 0%, hsl(21, 7%, 42%) 40%, hsl(30, 5%, 44%) 70%, hsl(24, 6%, 47%) 100%)",
        }}
      />

      {/* Animated wood grain layers — always visible */}
      <div className="absolute inset-0 intro-wood-grain opacity-[0.2]" />
      <div className="absolute inset-0 intro-wood-grain-2 opacity-[0.12]" />
      <div className="absolute inset-0 intro-wood-grain-3 opacity-[0.08]" />

      {/* Warm ambient light */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 45%, hsl(35 50% 25% / 0.5) 0%, transparent 70%)",
        }}
      />

      {/* Light sweep effect */}
      <div
        className={`absolute inset-0 intro-light-sweep transition-opacity duration-[2000ms] ease-in-out ${
          phase >= 1 ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Golden ambient glow */}
      <div
        className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
          phase >= 1 ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background:
            "radial-gradient(ellipse 90% 70% at 50% 50%, hsl(35 55% 30% / 0.35) 0%, hsl(30 45% 20% / 0.15) 40%, transparent 70%)",
        }}
      />

      {/* Secondary warm glow */}
      <div
        className={`absolute inset-0 intro-ambient-glow transition-opacity duration-[2000ms] ease-in-out ${
          phase >= 4 ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p, i) => (
          <div
            key={i}
            className="intro-particle"
            style={{
              left: p.left,
              top: p.top,
              animationDelay: p.delay,
              animationDuration: p.duration,
              width: p.size,
              height: p.size,
            }}
          />
        ))}
      </div>

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 65% at 50% 50%, transparent 0%, hsl(20 35% 8% / 0.4) 100%)",
        }}
      />

      {/* Content container */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 w-full h-full">
        {/* "You are in IDL" — fade in then fade out */}
        {/* <div
          className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-[1200ms] ease-in-out ${
            text1Visible ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="text-[hsl(35_40%_70%)] text-xl md:text-2xl lg:text-3xl tracking-[0.35em] uppercase font-light mb-4 md:mb-6">
            You are in
          </p>
          <h1 className="text-[hsl(38_35%_85%)] text-6xl md:text-8xl lg:text-9xl font-bold tracking-[0.15em]">
            IDL
          </h1>
          <div
            className={`mx-auto mt-6 h-[1px] bg-gradient-to-r from-transparent via-[hsl(35_50%_45%)] to-transparent transition-all duration-[1500ms] ease-in-out ${
              text1Visible ? "w-32 md:w-56 opacity-60" : "w-0 opacity-0"
            }`}
          />
        </div> */}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-[1200ms] ease-in-out ${
            text1Visible ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="text-[hsl(35_40%_70%)] text-2xl md:text-3xl lg:text-4xl tracking-[0.4em] uppercase font-light mb-6 md:mb-8">
            You are in
          </p>

          <h1 className="text-[hsl(38_35%_85%)] text-7xl md:text-9xl lg:text-[10rem] font-bold tracking-[0.18em]">
            IDL
          </h1>

          <div
            className={`mx-auto mt-8 h-[1px] bg-gradient-to-r from-transparent via-[hsl(35_50%_45%)] to-transparent transition-all duration-[1500ms] ease-in-out ${
              text1Visible ? "w-40 md:w-72 lg:w-96 opacity-70" : "w-0 opacity-0"
            }`}
          />
        </div>


        {/* "In Design Land" — fade in then fade out */}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-[1200ms] ease-in-out ${
            text2Visible ? "opacity-100" : "opacity-0"
          }`}
        >
          <h2 className="text-[hsl(38_35%_85%)] text-5xl md:text-7xl lg:text-9xl font-light tracking-[0.22em]">
            In Design Land
          </h2>

          <div
            className={`mx-auto mt-8 md:mt-10 h-[1px] bg-gradient-to-r from-transparent via-[hsl(35_55%_50%)] to-transparent transition-all duration-[1500ms] ease-in-out ${
              text2Visible ? "w-72 md:w-[28rem] lg:w-[36rem] opacity-70" : "w-0 opacity-0"
            }`}
          />

          <p className="text-[hsl(33_35%_55%)] text-lg md:text-xl lg:text-2xl tracking-[0.35em] uppercase mt-8 md:mt-10 font-light">
            Premium Wood Solutions
          </p>
        </div>


        {/* Logo — fade in then held until scene fades */}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-[1200ms] ease-in-out ${
            logoVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Logo outer glow */}
          <div
            className={`absolute w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full transition-opacity duration-[1200ms] ease-in-out ${
              logoVisible ? "opacity-100" : "opacity-0"
            }`}
            style={{
              background:
                "radial-gradient(circle, hsl(35 50% 35% / 0.25) 0%, hsl(30 45% 25% / 0.1) 40%, transparent 70%)",
              filter: "blur(30px)",
            }}
          />
          {/* Logo inner warm ring */}
          <div
            className={`absolute w-44 h-44 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full transition-opacity duration-[1200ms] ease-in-out delay-200 ${
              logoVisible ? "opacity-100" : "opacity-0"
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
            className="w-[90vw] h-[90vw] md:w-[65vw] md:h-[65vw] lg:w-[45vw] lg:h-[45vw] object-contain relative z-10"
          />

        <p className="text-[hsl(33_35%_55%)] text-[2.4vw] tracking-[0.55em] uppercase mt-[5vh] font-light relative z-10">
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
