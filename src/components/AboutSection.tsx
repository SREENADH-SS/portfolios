import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Check, Compass, Terminal, Cpu } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { PERSONAL_INFO } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 sm:py-32 border-b border-[#DCD9D1]/60 bg-noise">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading
          label="ABOUT / 02"
          title="A little about me."
          description="Understanding how applications work from end to end—from database schemas to tactile interface animations."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mt-8">
          {/* Left Column: Abstract Personal Identity Graphic / Monogram Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-2xl border border-[#DCD9D1] bg-[#EAE7E0]/60 p-8 sm:p-10 overflow-hidden shadow-sm">
              {/* Background technical markings */}
              <div className="absolute top-4 right-4 font-mono text-[10px] text-[#77766F] tracking-widest">
                DEV_ID // SS-2026
              </div>

              {/* Sculptural monogram portrait graphic */}
              <div className="w-full aspect-square max-w-[280px] mx-auto rounded-xl bg-[#20211F] text-[#F8F7F3] p-8 flex flex-col justify-between relative shadow-md">
                <div className="flex justify-between items-start font-mono text-xs text-[#77766F]">
                  <span>S.S.</span>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#C97858]" />
                </div>

                <div className="text-center my-auto py-6">
                  <div className="font-display text-5xl font-extrabold text-[#F8F7F3] tracking-tighter">
                    S<span className="text-[#C97858]">.</span>
                  </div>
                  <span className="font-mono text-[11px] text-[#DCD9D1] tracking-widest uppercase block mt-2">
                    SREENADH S.S
                  </span>
                </div>

                <div className="border-t border-[#343532] pt-3 flex items-center justify-between font-mono text-[10px] text-[#77766F]">
                  <span>JAVA STACK</span>
                  <span>INDIA</span>
                </div>
              </div>

              {/* Fast Facts / Highlights */}
              <div className="mt-8 space-y-3 font-mono text-xs text-[#20211F]">
                <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-[#F8F7F3] border border-[#DCD9D1]/80">
                  <Terminal className="w-4 h-4 text-[#C97858]" />
                  <span>Backend: Spring Boot &amp; Spring Security</span>
                </div>
                <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-[#F8F7F3] border border-[#DCD9D1]/80">
                  <Cpu className="w-4 h-4 text-[#C97858]" />
                  <span>Frontend: React, TypeScript, Tailwind</span>
                </div>
                <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-[#F8F7F3] border border-[#DCD9D1]/80">
                  <Compass className="w-4 h-4 text-[#C97858]" />
                  <span>Location: India · Available Worldwide</span>
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
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6"
            >
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#20211F] leading-tight">
                Turning ideas into practical, reliable, and well-designed web applications.
              </h3>

              <p className="text-base sm:text-lg text-[#77766F] leading-relaxed">
                {PERSONAL_INFO.about.lead}
              </p>

              {/* Development Philosophy Card */}
              <div className="p-6 rounded-xl border border-[#DCD9D1] bg-[#F8F7F3] shadow-sm my-6">
                <span className="font-mono text-[11px] font-semibold text-[#C97858] uppercase tracking-wider block mb-2">
                  DEVELOPMENT PHILOSOPHY
                </span>
                <p className="text-sm sm:text-base text-[#20211F] leading-relaxed italic">
                  &ldquo;{PERSONAL_INFO.about.philosophy}&rdquo;
                </p>
              </div>

              {/* Current Learning Interests */}
              <div>
                <span className="font-mono text-xs font-semibold text-[#77766F] uppercase tracking-wider block mb-2">
                  CURRENT EXPLORATIONS &amp; RESEARCH
                </span>
                <p className="text-sm sm:text-base text-[#77766F] leading-relaxed">
                  {PERSONAL_INFO.about.learning}
                </p>
              </div>

              {/* Action Link to Resume */}
              <div className="pt-6">
                <a
                  href={PERSONAL_INFO.contact.resumeUrl}
                  download
                  className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#20211F] text-[#F8F7F3] font-mono text-xs font-semibold tracking-wider hover:bg-[#C97858] transition-colors duration-300"
                >
                  <span>VIEW FULL RESUME</span>
                  <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
