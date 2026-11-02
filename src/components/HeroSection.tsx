import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, ArrowUpRight, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { AbstractHeroVisual } from './AbstractHeroVisual';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-32 pb-20 md:pt-40 md:pb-28 flex flex-col justify-between overflow-hidden bg-noise border-b border-[#DCD9D1]/60"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text Content Column */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Introductory Label */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-[#DCD9D1] bg-[#EAE7E0]/60 mb-6 sm:mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#C97858]"></span>
              <span className="text-[11px] font-mono font-medium tracking-wider text-[#20211F] uppercase">
                {PERSONAL_INFO.role.toUpperCase()} · {PERSONAL_INFO.location.toUpperCase()}
              </span>
            </motion.div>

            {/* Editorial Masked Headline */}
            <h1 className="font-display text-hero font-extrabold text-[#20211F] tracking-tight mb-8">
              <span className="block overflow-hidden pb-1">
                <motion.span
                  initial={{ y: '110%' }}
                  animate={{ y: '0%' }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                  className="block"
                >
                  {PERSONAL_INFO.headline.line1}
                </motion.span>
              </span>
              <span className="block overflow-hidden pb-1">
                <motion.span
                  initial={{ y: '110%' }}
                  animate={{ y: '0%' }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                  className="block text-[#C97858]"
                >
                  {PERSONAL_INFO.headline.line2}
                </motion.span>
              </span>
              <span className="block overflow-hidden pb-1">
                <motion.span
                  initial={{ y: '110%' }}
                  animate={{ y: '0%' }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                  className="block"
                >
                  {PERSONAL_INFO.headline.line3}
                </motion.span>
              </span>
            </h1>

            {/* Supporting Bio Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl text-[#77766F] font-normal leading-relaxed max-w-xl mb-10"
            >
              {PERSONAL_INFO.bio}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
              className="flex flex-wrap items-center gap-4 sm:gap-5 w-full sm:w-auto"
            >
              <a
                href="#projects"
                className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-[#20211F] text-[#F8F7F3] font-mono text-xs font-semibold tracking-wider uppercase overflow-hidden hover:bg-[#C97858] transition-colors duration-300 shadow-sm"
              >
                <span>EXPLORE MY WORK</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href={PERSONAL_INFO.contact.resumeUrl}
                download
                className="group inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-full border border-[#DCD9D1] bg-[#F8F7F3] text-[#20211F] font-mono text-xs font-semibold tracking-wider uppercase hover:border-[#20211F] hover:bg-[#EAE7E0]/50 transition-all duration-300"
              >
                <FileText className="w-4 h-4 text-[#77766F] group-hover:text-[#20211F] transition-colors" />
                <span>DOWNLOAD RESUME</span>
                <ArrowDown className="w-3.5 h-3.5 text-[#77766F] group-hover:translate-y-0.5 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* Abstract Graphic Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="lg:col-span-5 flex items-center justify-center pt-4 lg:pt-0"
          >
            <AbstractHeroVisual />
          </motion.div>
        </div>
      </div>

      {/* Hero Bottom Bar: Scroll Indicator & Coordinates */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full pt-12 flex items-center justify-between text-xs font-mono text-[#77766F]">
        <div className="flex items-center gap-3">
          <div className="w-8 h-[1px] bg-[#DCD9D1]"></div>
          <span className="tracking-widest">SCROLL TO DISCOVER</span>
        </div>

        <div className="hidden sm:flex items-center gap-6 text-[11px] tracking-wider">
          <span>CLEAN ARCHITECTURE</span>
          <span>·</span>
          <span>ROBUST APIS</span>
          <span>·</span>
          <span>REACTIVE UI</span>
        </div>
      </div>
    </section>
  );
};
