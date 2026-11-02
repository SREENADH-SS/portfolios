import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { PROFILE } from '../../data/content';
import { usePortfolioStore } from '../../store/usePortfolioStore';
import { Magnetic } from '../animations/Magnetic';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const { menuOpen, toggleMenu, closeMenu, activeSection, setCursorVariant, introPhase } = usePortfolioStore();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Selected Work", href: "#work", id: "work" },
    { name: "About", href: "#about", id: "about" },
    { name: "Expertise", href: "#expertise", id: "expertise" },
    { name: "Timeline", href: "#experience", id: "experience" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#0B0C0E]/90 backdrop-blur-md border-b border-[#D4AF37]/25 py-4 shadow-[0_8px_32px_rgba(0,0,0,0.6)]'
            : 'bg-gradient-to-b from-[#0B0C0E]/70 via-[#0B0C0E]/20 to-transparent py-7'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between">
          {/* Brand Identity: [Avatar Photo] [Name] [Signature] */}
          <a
            id="navbar-brand-target"
            href="#hero"
            onMouseEnter={() => setCursorVariant('hover')}
            onMouseLeave={() => setCursorVariant('default')}
            className={`group flex items-center gap-2.5 sm:gap-3 select-none transition-opacity duration-300 ${
              introPhase === 'ready' ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Left side: Avatar Photo (Active in Home Page Navbar) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={introPhase === 'ready' ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden border border-[#D4AF37]/50 shadow-[0_0_12px_rgba(212,175,55,0.3)] ring-1 ring-[#D4AF37]/25 group-hover:border-[#D4AF37] group-hover:scale-105 transition-all duration-300 shrink-0 bg-[#111215]"
            >
              <img
                src="/sreenadh-hero.png"
                alt="Sreenadh S.S"
                className="w-full h-full object-cover object-top filter brightness-105 contrast-115 group-hover:scale-110 transition-transform duration-500"
              />
            </motion.div>

            {/* Center: The Name (Target of preloader flight animation) */}
            <span
              id="navbar-name-anchor"
              className="font-signature-serif text-lg sm:text-2xl font-normal tracking-tight text-[#F3EFE6] group-hover:text-gold-metallic transition-colors shrink-0"
            >
              SREENADH
            </span>

            {/* Right side: The Signature */}
            <motion.div
              initial={{ opacity: 0, x: -5 }}
              animate={introPhase === 'ready' ? { opacity: 1, x: 0 } : { opacity: 0, x: -5 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="flex items-center gap-1 pl-1.5 sm:pl-2.5 border-l border-[#D4AF37]/35"
            >
              <span className="font-signature-script text-xl sm:text-2xl md:text-3xl text-gold-metallic tracking-normal -rotate-2 select-none leading-none pt-1">
                Sreenadh
              </span>
              <svg
                viewBox="0 0 36 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 sm:w-7 h-auto stroke-[#D4AF37] opacity-85 -ml-1 hidden min-[400px]:block"
              >
                <motion.path
                  d="M1 10C6 8 14 3 20 4C26 5 21 12 28 11C33 10 35 6 35 6"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={introPhase === 'ready' ? { pathLength: 1 } : { pathLength: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                />
              </svg>
            </motion.div>
          </a>

          {/* Center Navigation Links */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onMouseEnter={() => setCursorVariant('hover')}
                onMouseLeave={() => setCursorVariant('default')}
                className={`font-signature-sans text-sm tracking-wide transition-colors duration-200 signature-link-gold ${
                  activeSection === link.id
                    ? 'text-[#D4AF37] border-b-[#D4AF37] font-normal'
                    : 'text-[#C4C8D0] hover:text-[#D4AF37]'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action: Availability Status & Contact CTA */}
          <div className="hidden sm:flex items-center gap-6">
            <div className="flex items-center gap-2 text-xs font-mono text-[#A3A7AF]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse"></span>
              <span className="tracking-widest uppercase text-[10px]">AVAILABLE</span>
            </div>

            <Magnetic strength={0.3}>
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-1.5 text-xs font-signature-sans font-medium uppercase tracking-wider text-[#F3EFE6] hover:text-[#D4AF37] signature-link-gold"
              >
                <span>Direct Inquiry</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#D4AF37] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </Magnetic>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="p-2 text-[#F3EFE6] hover:text-[#D4AF37] transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-[#D4AF37]" />}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Editorial Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#0B0C0E]/95 backdrop-blur-2xl text-[#F3EFE6] flex flex-col justify-between p-8 pt-28 lg:hidden border-b border-[#D4AF37]/25"
          >
            {/* Top decorative line */}
            <div className="flex items-center justify-between pb-6 border-b border-[#D4AF37]/20 font-mono text-xs text-[#A3A7AF]">
              <span className="text-[#D4AF37]">MENU / INDEX</span>
              <span>{PROFILE.location}</span>
            </div>

            {/* Large Navigation Links */}
            <div className="flex flex-col gap-6 my-auto">
              {navLinks.map((link, idx) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={closeMenu}
                  className="group flex items-baseline justify-between py-2 border-b border-[#F3EFE6]/10 hover:border-[#D4AF37] transition-colors"
                >
                  <span className="font-signature-serif text-3xl sm:text-4xl font-light tracking-tight text-[#F3EFE6] group-hover:text-gold-metallic transition-colors">
                    {link.name}
                  </span>
                  <span className="font-mono text-xs text-[#D4AF37]">0{idx + 1}</span>
                </a>
              ))}
            </div>

            {/* Bottom Details & CTA */}
            <div className="pt-6 border-t border-[#D4AF37]/20 flex flex-col gap-4 font-mono text-xs">
              <div className="flex items-center justify-between text-[#A3A7AF]">
                <span>EDITION: {PROFILE.edition}</span>
                <span className="text-[#D4AF37] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse"></span>
                  ONLINE
                </span>
              </div>
              <a
                href={`mailto:${PROFILE.contact.email}`}
                onClick={closeMenu}
                className="w-full text-center py-3.5 rounded-full bg-[#D4AF37] text-[#0B0C0E] font-signature-sans text-sm font-semibold tracking-wider uppercase shadow-lg hover:bg-[#F3E5AB] transition-all"
              >
                INQUIRE VIA EMAIL ↗
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
