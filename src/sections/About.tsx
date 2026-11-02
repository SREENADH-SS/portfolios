import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Terminal, Layers, ShieldCheck, ArrowDown } from 'lucide-react';
import { PROFILE } from '../data/content';
import { Magnetic } from '../components/animations/Magnetic';
import { SignatureTextReveal } from '../components/animations/SignatureTextReveal';

export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-20 sm:py-32 md:py-40 border-b border-[#F3EFE6]/10 bg-[#0B0C0E] text-[#F3EFE6] overflow-hidden">
      {/* Background Architectural Interior Layer */}
      <div className="absolute inset-0 pointer-events-none opacity-15">
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2200&q=80"
          alt="Interior space"
          className="w-full h-full object-cover filter contrast-[1.1] grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0C0E] via-[#0B0C0E]/90 to-[#0B0C0E]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Section Header */}
        <div className="inline-flex items-center gap-2 font-mono text-xs text-[#D4AF37] tracking-widest uppercase font-semibold mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
          ABOUT ATELIER / 02
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start mt-6">
          {/* Left Column: Signature Monogram Plate & Technical Coordinates */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="rounded-2xl border border-[#D4AF37]/30 bg-[#111215]/90 backdrop-blur-md p-8 sm:p-10 relative overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between pb-6 border-b border-[#F3EFE6]/10 font-mono text-xs text-[#A3A7AF]">
                <span>DEV_ID // SREENADH-2025</span>
                <span className="flex items-center gap-1 text-[#F3EFE6]">
                  <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                  {PROFILE.location}
                </span>
              </div>

              {/* Minimalist Editorial Monogram Plate with Photo Snippet */}
              <div className="my-8 w-full aspect-square max-w-[280px] mx-auto rounded-xl bg-[#17191D] border border-[#D4AF37]/35 text-[#F3EFE6] p-8 flex flex-col justify-between shadow-2xl relative group overflow-hidden">
                {/* Subtle silhouette behind monogram */}
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                  <img src="/sreenadh-hero.png" alt="Sreenadh" className="w-full h-full object-cover object-top filter grayscale" />
                </div>

                <div className="relative z-10 flex items-center justify-between text-xs font-mono text-[#A3A7AF]">
                  <span>ATELIER SIGNATURE</span>
                  <div className="w-2 h-2 rounded-full bg-[#D4AF37] shadow-[0_0_8px_rgba(212,175,55,0.8)]" />
                </div>

                <div className="relative z-10 text-center my-auto py-4">
                  <div className="font-signature-serif text-6xl sm:text-7xl font-light text-[#F3EFE6] tracking-tight">
                    S<span className="text-gold-metallic italic">.</span>S
                  </div>
                  <span className="font-mono text-[10px] text-[#D1D5DC] tracking-widest uppercase block mt-3 font-semibold">
                    {PROFILE.name}
                  </span>
                </div>

                <div className="relative z-10 border-t border-[#F3EFE6]/10 pt-3 flex items-center justify-between font-mono text-[10px] text-[#A3A7AF]">
                  <span>JAVA STACK</span>
                  <span>KERALA, IN</span>
                </div>
              </div>

              {/* Technical Facts Card */}
              <div className="space-y-3 font-mono text-xs text-[#F3EFE6]">
                <div className="flex items-center gap-2.5 p-3 rounded-lg bg-[#0B0C0E] border border-[#D4AF37]/20">
                  <Terminal className="w-4 h-4 text-[#D4AF37]" />
                  <span>Primary: Java 21, Spring Boot, MySQL</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-lg bg-[#0B0C0E] border border-[#D4AF37]/20">
                  <Layers className="w-4 h-4 text-[#D4AF37]" />
                  <span>Frontend: React 19, TypeScript, Tailwind</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-lg bg-[#0B0C0E] border border-[#D4AF37]/20">
                  <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                  <span>Security: Stateless JWT &amp; Custom Filters</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Narrative & Philosophy */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="space-y-8"
            >
              <h3 className="text-section-signature text-[#F3EFE6]">
                <SignatureTextReveal
                  lines={["Resilient backends with", "the calm of a design magazine."]}
                  italicIndices={[1]}
                  serif={true}
                />
              </h3>

              <p className="font-signature-sans text-base sm:text-lg text-[#F3EFE6] leading-relaxed font-light">
                {PROFILE.bio.p1}
              </p>

              <p className="font-signature-sans text-base sm:text-lg text-[#A3A7AF] leading-relaxed font-light">
                {PROFILE.bio.p2}
              </p>

              {/* Framedworks Editorial Philosophy Quote Box with Gold Accent */}
              <div className="p-8 rounded-xl border border-[#D4AF37]/35 bg-[#17191D]/90 backdrop-blur-sm my-6 relative overflow-hidden shadow-xl">
                <span className="font-mono text-[10px] font-semibold text-[#D4AF37] uppercase tracking-widest block mb-3">
                  CORE PHILOSOPHY
                </span>
                <p className="font-signature-serif text-xl sm:text-2xl text-[#F3EFE6] leading-snug italic font-light">
                  &ldquo;{PROFILE.bio.philosophy}&rdquo;
                </p>
              </div>

              {/* Current Focus */}
              <div className="pt-2">
                <span className="font-mono text-xs font-semibold text-[#A3A7AF] uppercase tracking-widest block mb-2">
                  CURRENT RESEARCH &amp; SPECIFICATION
                </span>
                <p className="font-signature-sans text-sm sm:text-base text-[#A3A7AF] leading-relaxed font-light">
                  {PROFILE.bio.currentFocus}
                </p>
              </div>

              {/* Action Link */}
              <div className="pt-4">
                <Magnetic strength={0.3}>
                  <a
                    href="#contact"
                    className="signature-link-gold font-signature-sans text-sm uppercase tracking-wider text-[#F3EFE6] font-medium group"
                  >
                    <span>START A CONVERSATION</span>
                    <ArrowDown className="w-3.5 h-3.5 ml-1.5 text-[#D4AF37] group-hover:translate-y-0.5 transition-transform" />
                  </a>
                </Magnetic>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
