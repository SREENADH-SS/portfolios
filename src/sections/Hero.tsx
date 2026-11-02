import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, ArrowDown, MapPin, Terminal } from 'lucide-react';
import { PROFILE } from '../data/content';
import { Magnetic } from '../components/animations/Magnetic';
import { SignatureTextReveal } from '../components/animations/SignatureTextReveal';
import { usePortfolioStore } from '../store/usePortfolioStore';

export const Hero: React.FC = () => {
  const { setCursorVariant } = usePortfolioStore();

  return (
    <section
      id="hero"
      className="relative min-h-[96vh] pt-32 sm:pt-40 pb-16 md:pb-24 flex flex-col justify-between overflow-hidden bg-[#0B0C0E]"
    >
      {/* Full Background Image with High Clarity and Tailored Black Shades */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
        {/* Full Bleed Image Element with High Definition Clarity */}
        <img
          src="/sreenadh-hero.png"
          alt="Sreenadh S.S - Java Full Stack Developer"
          className="w-full h-full object-cover object-[center_16%] sm:object-[68%_16%] lg:object-[75%_14%] filter contrast-[1.15] brightness-[1.02] saturate-[1.06]"
        />

        {/* Black Shade Layer 1: Left-to-Right Obsidian Mask for Pure Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0C0E] via-[#0B0C0E]/90 to-transparent w-full sm:w-[72%] lg:w-[60%]" />

        {/* Black Shade Layer 2: Subtle Ambient Black Fill */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0C0E]/80 via-[#0B0C0E]/30 to-transparent" />

        {/* Black Shade Layer 3: Bottom Cinematic Black Shadow */}
        <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-[#0B0C0E] via-[#0B0C0E]/85 to-transparent" />

        {/* Black Shade Layer 4: Top Cinematic Black Shadow under Navigation */}
        <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-[#0B0C0E]/95 via-[#0B0C0E]/40 to-transparent" />

        {/* Black Shade Layer 5: Perimeter Radial Vignette Sculpting the Subject */}
        <div className="absolute inset-0 bg-radial from-transparent via-[#0B0C0E]/25 to-[#0B0C0E]/80" />

        {/* Warm Golden Halo Rim Light Spotlight Behind Sreenadh */}
        <div className="absolute top-[16%] right-[8%] sm:right-[16%] w-[520px] h-[520px] bg-[#D4AF37]/16 rounded-full filter blur-[140px] pointer-events-none" />

        {/* Subtle Ambient Film Grain */}
        <div className="absolute inset-0 bg-film-grain opacity-25" />
      </div>

      {/* Top Architectural Subtitle Coordinates Bar */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full mb-6 sm:mb-12">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-between gap-3 sm:gap-4 font-mono text-xs text-[#A3A7AF] border-b border-[#F3EFE6]/10 pb-4 sm:pb-5"
        >
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] shadow-[0_0_10px_rgba(212,175,55,0.9)] animate-pulse"></span>
            <span className="tracking-widest uppercase font-semibold text-[#F3EFE6]">
              {PROFILE.brand}
            </span>
            <span className="text-[#D4AF37]/40">/</span>
            <span className="text-[#D4AF37] font-medium uppercase text-[11px] sm:text-xs">
              {PROFILE.role}
            </span>
          </div>

          <div className="flex items-center gap-4 sm:gap-6 text-[10px] sm:text-[11px] tracking-wider font-mono">
            <span className="flex items-center gap-1.5 text-[#F3EFE6] font-medium">
              <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
              {PROFILE.location}
            </span>
            <span className="hidden md:inline text-[#A3A7AF]">TIMEZONE: {PROFILE.timezone}</span>
          </div>
        </motion.div>
      </div>

      {/* Main Hero Content: Exactly 2-Line Headline and Clean Simple Intro */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: 2-Line Headline & Simple Editorial Copy */}
          <div className="lg:col-span-8 xl:col-span-7 flex flex-col items-start">
            {/* Small Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-[#D4AF37]/35 bg-[#111215]/85 backdrop-blur-md mb-5 sm:mb-6 text-[10px] sm:text-[11px] font-mono text-[#D4AF37] uppercase tracking-widest shadow-md"
            >
              <Terminal className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>JAVA FULL STACK DEVELOPER · INDIA</span>
            </motion.div>

            {/* Exactly 2-Line Display Headline */}
            <h1 className="text-hero-signature text-[#F3EFE6] mb-5 sm:mb-6 select-none">
              <SignatureTextReveal
                lines={PROFILE.heroHeadline}
                italicIndices={[1]}
                serif={true}
                delay={0.1}
                theme="dark"
              />
            </h1>

            {/* Simple Supporting Intro */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
              className="font-signature-sans text-display-sub text-[#C4C8D0] leading-relaxed font-light max-w-xl mb-6 sm:mb-8"
            >
              {PROFILE.heroSubheadline}
            </motion.p>

            {/* Core Tech Stack Badges */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-8 sm:mb-10"
            >
              {['Java 21', 'Spring Boot', 'Spring Security', 'React.js', 'PostgreSQL', 'Docker'].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[11px] sm:text-xs font-mono tracking-wider bg-[#15161A]/90 border border-[#D4AF37]/25 text-[#E0E2E8]"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            {/* Actions & Availability Indicator */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.65 }}
              className="flex flex-wrap items-center gap-4 sm:gap-6"
            >
              <Magnetic strength={0.3}>
                <a
                  href="#work"
                  onMouseEnter={() => setCursorVariant('hover')}
                  onMouseLeave={() => setCursorVariant('default')}
                  className="signature-link-gold font-signature-sans text-sm sm:text-base font-normal tracking-wide group"
                >
                  <span>EXPLORE MY WORK</span>
                  <ArrowUpRight className="w-4 h-4 ml-1.5 text-[#D4AF37] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </Magnetic>

              <Magnetic strength={0.25}>
                <a
                  href="#contact"
                  onMouseEnter={() => setCursorVariant('hover')}
                  onMouseLeave={() => setCursorVariant('default')}
                  className="signature-link-gold font-signature-sans text-sm sm:text-base text-[#A3A7AF] hover:text-[#F3EFE6] font-light tracking-wide group border-b-[#A3A7AF]/30"
                >
                  <span>GET IN TOUCH</span>
                  <ArrowDown className="w-3.5 h-3.5 ml-1 text-[#A3A7AF] group-hover:translate-y-0.5 transition-transform" />
                </a>
              </Magnetic>

              <div className="flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase text-[#A3A7AF]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse"></span>
                <span>STATUS: {PROFILE.availability}</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Subtle Architectural Coordinate Tag */}
          <div className="hidden lg:flex lg:col-span-4 xl:col-span-5 justify-end items-end pb-8 pointer-events-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0.5 }}
              className="p-5 rounded-2xl bg-[#0B0C0E]/75 backdrop-blur-md border border-[#D4AF37]/30 shadow-2xl max-w-xs font-mono text-xs"
            >
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#F3EFE6]/10 text-[10px] text-[#A3A7AF]">
                <span className="text-[#D4AF37] font-semibold tracking-wider">CRAFTSMAN ATELIER</span>
                <span>KERALA, IN</span>
              </div>
              <p className="font-signature-serif text-xl text-[#F3EFE6] font-light mb-1">
                Sreenadh S.S <span className="text-gold-metallic italic"></span>
              </p>
              <p className="text-[11px] font-sans text-[#A3A7AF] font-light leading-relaxed">
                Specializing in robust enterprise Java backends and modern, intuitive digital experiences.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Hero Bottom Bar */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full pt-8 sm:pt-14 flex items-center justify-between font-mono text-xs text-[#A3A7AF]">
        <div className="flex items-center gap-3">
          <div className="w-8 h-[1px] bg-[#D4AF37]"></div>
          <span className="tracking-widest uppercase text-[#F3EFE6] font-medium text-[10px] sm:text-[11px]">
            SCROLL TO EXPLORE SELECTED WORK
          </span>
        </div>

        <div className="hidden sm:flex items-center gap-8 text-[11px] tracking-wider text-[#A3A7AF]">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
            JAVA 21 &amp; SPRING BOOT
          </span>
          <span>·</span>
          <span>REST APIS &amp; SECURITY</span>
          <span>·</span>
          <span>REACT &amp; MOTION</span>
        </div>
      </div>
    </section>
  );
};
