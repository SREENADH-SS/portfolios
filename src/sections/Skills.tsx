import React from 'react';
import { motion } from 'motion/react';
import { SKILL_GROUPS, MARQUEE_ITEMS } from '../data/content';
import { SignatureTextReveal } from '../components/animations/SignatureTextReveal';

export const Skills: React.FC = () => {
  return (
    <section id="expertise" className="py-20 sm:py-32 md:py-40 border-b border-[#AA8222]/30 bg-[#EEDBBE] text-[#17191D] overflow-hidden">
      {/* Infinite Scrolling Horizontal Marquee Bar */}
      <div className="border-y border-[#0B0C0E]/20 py-4 sm:py-5 bg-[#E6D0AA] mb-16 sm:mb-24 md:mb-32 overflow-hidden shadow-sm">
        <div className="flex animate-marquee whitespace-nowrap">
          {MARQUEE_ITEMS.concat(MARQUEE_ITEMS).map((item, idx) => (
            <div key={idx} className="flex items-center gap-6 sm:gap-8 mx-6 sm:mx-8 font-signature-serif text-lg sm:text-2xl font-medium text-[#0B0C0E]">
              <span>{item}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#6B4709]"></span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Section Heading */}
        <div className="max-w-3xl mb-20 sm:mb-28">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#6B4709] bg-[#6B4709]/10 border border-[#6B4709]/30 px-3.5 py-1.5 rounded-full tracking-widest uppercase font-bold mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6B4709]"></span>
            TECHNICAL EXPERTISE / 03
          </div>
          <h2 className="text-section-signature text-[#0B0C0E]">
            <SignatureTextReveal
              lines={["Architectural stack", "and engineering toolkit."]}
              italicIndices={[1]}
              serif={true}
              theme="light"
            />
          </h2>
          <p className="font-signature-sans text-base sm:text-lg text-[#23252A] mt-4 leading-relaxed font-normal">
            Organized by structural domain. Pure technical clarity without decorative percentage bars.
          </p>
        </div>

        {/* 4 Creative Categorized Skill Groups */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {SKILL_GROUPS.map((group, gIdx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: gIdx * 0.1 }}
              className="p-8 sm:p-12 rounded-2xl border border-[#6B4709]/30 bg-[#FAF7F2] hover:border-[#6B4709] transition-all duration-500 shadow-lg flex flex-col justify-between"
            >
              <div>
                {/* Group Header */}
                <div className="flex items-baseline justify-between pb-4 mb-6 border-b border-[#0B0C0E]/15">
                  <div>
                    <span className="font-signature-serif text-2xl font-normal text-[#0B0C0E] block">
                      {group.category}
                    </span>
                    <span className="font-mono text-[11px] text-[#6B4709] uppercase tracking-wider font-bold">
                      {group.subtitle}
                    </span>
                  </div>
                  <span className="font-mono text-xs font-bold text-[#6B4709]">
                    0{gIdx + 1}
                  </span>
                </div>

                <p className="font-signature-sans text-xs sm:text-sm text-[#23252A] mb-8 leading-relaxed font-normal">
                  {group.description}
                </p>

                {/* Skill Items Typographic Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group/item p-3.5 rounded-lg bg-white border border-[#6B4709]/25 hover:border-[#6B4709] hover:bg-[#0B0C0E] hover:text-[#FAF7F2] transition-all duration-300 flex flex-col justify-between shadow-sm"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-signature-sans text-xs font-semibold tracking-wide text-[#0B0C0E] group-hover/item:text-[#FAF7F2]">
                          {skill.name}
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#6B4709] group-hover/item:bg-[#D4AF37] transition-colors" />
                      </div>
                      <span className="text-[10px] font-mono text-[#555] group-hover/item:text-[#D1D5DC] mt-1 font-medium">
                        {skill.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Assurance */}
              <div className="pt-6 mt-8 border-t border-[#0B0C0E]/15 flex items-center justify-between font-mono text-[10px] text-[#23252A] uppercase tracking-wider font-semibold">
                <span>INDUSTRY PROVEN</span>
                <span className="text-[#6B4709] font-bold">VERIFIED MASTERY</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
