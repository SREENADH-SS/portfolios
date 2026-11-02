import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'motion/react';
import { PROFILE } from '../../data/content';
import { usePortfolioStore } from '../../store/usePortfolioStore';

export const Preloader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFlying, setIsFlying] = useState(false);
  const [flyCoords, setFlyCoords] = useState<{ x: number; y: number; scale: number }>({ x: 0, y: 0, scale: 1 });
  const brandRef = useRef<HTMLDivElement>(null);
  const { setIntroPhase } = usePortfolioStore();

  const handleDocking = () => {
    // Target the specific name element in the navbar for sub-pixel accuracy
    const targetEl = document.getElementById('navbar-name-anchor') || document.getElementById('navbar-brand-target');
    const sourceEl = brandRef.current;

    if (targetEl && sourceEl) {
      const targetRect = targetEl.getBoundingClientRect();
      const sourceRect = sourceEl.getBoundingClientRect();

      const dx = targetRect.left - sourceRect.left;
      const dy = targetRect.top - sourceRect.top;
      const scale = targetRect.height / sourceRect.height;

      setFlyCoords({ x: dx, y: dy, scale: scale || 0.42 });
    } else {
      setFlyCoords({ x: -window.innerWidth * 0.35, y: -window.innerHeight * 0.42, scale: 0.42 });
    }

    setIntroPhase('flying');
    setIsFlying(true);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(handleDocking, 150);
          return 100;
        }
        return prev + Math.floor(Math.random() * 8) + 4;
      });
    }, 28);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 z-[99999] pointer-events-none select-none overflow-hidden bg-[#0B0C0E]">
      {/* Background Graphic Architecture & Tech Image that Fades Out during Flight */}
      <motion.div
        animate={isFlying ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className="absolute inset-0 flex flex-col justify-between p-6 sm:p-12 md:p-14 text-[#F3EFE6]"
      >
        {/* Layer 1: High-Contrast Tech Circuitry Image */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <img
            src="/loading-tech-bg.png"
            alt="System Architecture & Circuitry"
            className="w-full h-full object-cover object-center filter brightness-[0.45] contrast-[1.32] saturate-[0.9] scale-105"
          />

          {/* Deep Obsidian Radial Vignette */}
          <div className="absolute inset-0 bg-radial from-transparent via-[#0B0C0E]/75 to-[#0B0C0E]" />

          {/* Directional Shading Masks */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0E] via-[#0B0C0E]/55 to-[#0B0C0E]/85" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0C0E]/90 via-transparent to-[#0B0C0E]/90" />

          {/* Central Amber-Gold Ambient Halo Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[550px] bg-[#D4AF37]/16 rounded-full filter blur-[150px]" />
          <div className="absolute -top-20 -right-20 w-[450px] h-[450px] bg-[#AA8222]/10 rounded-full filter blur-[130px]" />

          {/* Subtle Fine Film Grain */}
          <div className="absolute inset-0 bg-film-grain opacity-30" />
        </div>

        {/* Layer 2: Animated Technical Graphics - Rotating Concentric Orbital Rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] sm:w-[700px] sm:h-[700px] pointer-events-none z-10">
          {/* Outer Rotating Dashed Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 rounded-full border border-dashed border-[#D4AF37]/20"
          />

          {/* Middle Counter-Rotating Ring with Cardinal Coordinates */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-12 sm:inset-16 rounded-full border border-[#D4AF37]/15"
          >
            {/* Cardinal Dots */}
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#D4AF37] shadow-[0_0_8px_rgba(212,175,55,0.9)]" />
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#D4AF37] shadow-[0_0_8px_rgba(212,175,55,0.9)]" />
            <div className="absolute top-1/2 -left-1 -translate-y-1/2 w-2 h-2 rounded-full bg-[#D4AF37] shadow-[0_0_8px_rgba(212,175,55,0.9)]" />
            <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 rounded-full bg-[#D4AF37] shadow-[0_0_8px_rgba(212,175,55,0.9)]" />
          </motion.div>

          {/* Inner Glow Ring */}
          <div className="absolute inset-28 sm:inset-36 rounded-full border border-[#D4AF37]/10 shadow-[0_0_60px_rgba(212,175,55,0.06)]" />

          {/* Technical Axis Lines */}
          <div className="absolute top-1/2 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/15 to-transparent" />
          <div className="absolute left-1/2 top-4 bottom-4 w-[1px] bg-gradient-to-b from-transparent via-[#D4AF37]/15 to-transparent" />
        </div>

        {/* Layer 3: Corner Technical Brackets & Diagnostics */}
        <div className="absolute top-6 left-6 sm:top-10 sm:left-10 font-mono text-[10px] text-[#A3A7AF]/70 tracking-widest pointer-events-none hidden sm:block">
          <span>+ 08.5241° N // LAT</span>
          <span className="block mt-0.5 text-[#D4AF37]/70">SYS_KERNEL: ACTIVE</span>
        </div>

        <div className="absolute top-6 right-6 sm:top-10 sm:right-10 font-mono text-[10px] text-[#A3A7AF]/70 tracking-widest text-right pointer-events-none hidden sm:block">
          <span>+ 76.9366° E // LONG</span>
          <span className="block mt-0.5 text-[#D4AF37]/70">KERALA_COMMISSION</span>
        </div>

        <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 font-mono text-[10px] text-[#A3A7AF]/70 tracking-widest pointer-events-none hidden sm:block">
          <span>RUNTIME: JAVA 21 · SPRING 3.4</span>
        </div>

        <div className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 font-mono text-[10px] text-[#A3A7AF]/70 tracking-widest text-right pointer-events-none hidden sm:block">
          <span>SECURITY: JWT · RBAC · HTTPS</span>
        </div>

        {/* Top Header Information - Elegant & Minimal */}
        <div className="relative z-20 flex items-center justify-between font-mono text-xs text-[#A3A7AF] border-b border-[#F3EFE6]/10 pb-5">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shadow-[0_0_12px_rgba(212,175,55,0.9)] animate-pulse" />
            <span className="tracking-widest uppercase font-semibold text-[#F3EFE6] text-[11px] sm:text-xs">
              INITIALIZING ATELIER // {PROFILE.edition}
            </span>
          </span>
          <span className="text-[#D4AF37] font-medium tracking-wider text-[11px] sm:text-xs">
            {PROFILE.location} · {PROFILE.role}
          </span>
        </div>

        {/* Spacer to maintain vertical flex balance */}
        <div className="relative z-10 my-auto invisible">
          <div className="h-32" />
        </div>

        {/* Bottom Progress Bar & Real-Time Oscillator */}
        <div className="relative z-20 flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-t border-[#F3EFE6]/10 pt-6">
          {/* Progress Bar & Percentage */}
          <div className="space-y-3 font-mono text-xs max-w-xl w-full">
            <div className="flex items-center justify-between text-[#A3A7AF]">
              <span className="tracking-[0.2em] uppercase text-[10px] sm:text-[11px] text-[#C4C8D0]">
                CALIBRATING SYSTEM ASSETS &amp; RUNTIME
              </span>
              <span className="text-[#D4AF37] font-semibold font-mono text-sm sm:text-base tracking-wider">
                {progress < 10 ? `00${progress}` : progress < 100 ? `0${progress}` : progress}%
              </span>
            </div>
            <div className="w-full h-[2px] bg-[#F3EFE6]/15 rounded-full overflow-hidden shadow-inner">
              <div
                className="h-full bg-gradient-to-r from-[#AA8222] via-[#D4AF37] to-[#FFF6D6] transition-all duration-150 ease-out shadow-[0_0_12px_rgba(212,175,55,0.9)]"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Animated Frequency / Pulse Bars */}
          <div className="hidden sm:flex items-center gap-1.5 shrink-0 self-end pb-1">
            {[18, 32, 24, 40, 28, 36, 20].map((h, i) => (
              <motion.div
                key={i}
                animate={{ height: [`${h * 0.4}px`, `${h}px`, `${h * 0.4}px`] }}
                transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.15, ease: 'easeInOut' }}
                className="w-1 bg-[#D4AF37]/70 rounded-full"
                style={{ height: `${h * 0.6}px` }}
              />
            ))}
            <span className="font-mono text-[9px] text-[#D4AF37] tracking-widest ml-2 uppercase">LIVE PULSE</span>
          </div>
        </div>
      </motion.div>

      {/* Beautiful Central Typography that Physically Flies into the Navbar */}
      <div className="absolute inset-0 flex items-center justify-center p-4 pointer-events-none z-30">
        <motion.div
          ref={brandRef}
          animate={
            isFlying
              ? {
                  x: flyCoords.x,
                  y: flyCoords.y,
                  scale: flyCoords.scale,
                  opacity: 1,
                }
              : { x: 0, y: 0, scale: 1, opacity: 1 }
          }
          style={{ transformOrigin: 'top left' }}
          transition={{
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
          }}
          onAnimationComplete={() => {
            if (isFlying) {
              setIntroPhase('ready');
              onComplete();
            }
          }}
          className="flex flex-col items-center select-none shrink-0 text-center"
        >
          {/* Elegant Status Label */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4AF37]/40 bg-[#0B0C0E]/90 backdrop-blur-md mb-4 text-[10px] sm:text-[11px] font-mono text-[#D4AF37] uppercase tracking-[0.25em] shadow-[0_4px_20px_rgba(212,175,55,0.15)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
            <span>JAVA FULL STACK ARCHITECT</span>
          </div>

          {/* High-Fashion Editorial Monogram */}
          <h1 className="font-signature-serif text-5xl sm:text-7xl md:text-8xl font-light text-[#F3EFE6] tracking-tight leading-[0.95] drop-shadow-2xl shrink-0">
            SREENADH<span className="text-gold-metallic italic font-normal"></span>
          </h1>

          {/* Spaced Elegant Subtitle */}
          <motion.p
            animate={isFlying ? { opacity: 0, height: 0 } : { opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="font-signature-sans text-[11px] sm:text-xs text-[#C4C8D0] tracking-[0.22em] uppercase font-light mt-3.5 overflow-hidden"
          >
            ARCHITECTING ENTERPRISE JAVA SYSTEMS · BESPOKE DIGITAL CRAFT
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};
