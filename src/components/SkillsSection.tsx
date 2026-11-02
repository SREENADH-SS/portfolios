import React from 'react';
import { motion } from 'motion/react';
import { SectionHeading } from './SectionHeading';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-24 sm:py-32 border-b border-[#DCD9D1]/60">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading
          label="EXPERTISE / 03"
          title="Technical foundation."
          description="A curated stack focused on reliable enterprise backend engineering, clean data persistence, and reactive user interfaces."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 mt-12">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 sm:p-7 rounded-2xl border border-[#DCD9D1] bg-[#F8F7F3] hover:border-[#C97858]/60 hover:shadow-[0_8px_24px_rgba(32,33,31,0.04)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#DCD9D1]/70">
                  <span className="font-mono text-xs font-bold tracking-widest text-[#20211F]">
                    {cat.category}
                  </span>
                  <span className="font-mono text-[10px] text-[#C97858] font-semibold">
                    0{idx + 1}
                  </span>
                </div>

                {/* Skills Typographic List / Badges */}
                <div className="flex flex-col gap-2.5">
                  {cat.items.map((skill) => (
                    <div
                      key={skill}
                      className="group/item flex items-center justify-between p-2 rounded-lg bg-[#EAE7E0]/50 hover:bg-[#20211F] text-[#20211F] hover:text-[#F8F7F3] transition-colors duration-200"
                    >
                      <span className="text-xs sm:text-[13px] font-medium tracking-wide">
                        {skill}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#DCD9D1] group-hover/item:bg-[#C97858] transition-colors" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Subtle footer label */}
              <div className="pt-6 mt-6 border-t border-[#DCD9D1]/50 text-[10px] font-mono text-[#77766F] uppercase tracking-wider">
                {cat.category === 'EXPLORING' ? 'ACTIVE RESEARCH' : 'PRODUCTION READY'}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
