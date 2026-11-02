import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, GraduationCap, MapPin } from 'lucide-react';
import { TIMELINE_ITEMS, ExperienceItem } from '../data/content';
import { SignatureTextReveal } from '../components/animations/SignatureTextReveal';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 sm:py-32 md:py-40 border-b border-[#F3EFE6]/10 bg-[#0B0C0E] text-[#F3EFE6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-20 sm:mb-28">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#D4AF37] tracking-widest uppercase font-semibold mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
            CHRONOLOGY &amp; TRAJECTORY / 04
          </div>
          <h2 className="text-section-signature text-[#F3EFE6]">
            <SignatureTextReveal
              lines={["Experience, education", "and engineering foundation."]}
              italicIndices={[1]}
              serif={true}
            />
          </h2>
          <p className="font-signature-sans text-base sm:text-lg text-[#A3A7AF] mt-4 leading-relaxed font-light">
            A linear chronology highlighting technical engineering, business optimization, and formal computer application training.
          </p>
        </div>

        {/* Vertical Editorial Timeline */}
        <div className="max-w-4xl mx-auto space-y-8">
          {TIMELINE_ITEMS.map((item: ExperienceItem, idx: number) => {
            const isEdu = item.type === 'education';

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                className="group p-8 sm:p-12 rounded-2xl border border-[#D4AF37]/25 bg-[#111215] hover:border-[#D4AF37] hover:shadow-[0_12px_36px_rgba(212,175,55,0.15)] transition-all duration-500"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6 pb-6 border-b border-[#F3EFE6]/10">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-[#17191D] text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#0B0C0E] transition-colors shrink-0 mt-0.5 shadow-sm border border-[#D4AF37]/30">
                      {isEdu ? (
                        <GraduationCap className="w-5 h-5 text-current" />
                      ) : (
                        <Briefcase className="w-5 h-5 text-current" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-signature-serif text-2xl sm:text-3xl font-light text-[#F3EFE6] group-hover:text-[#D4AF37] transition-colors">
                        {item.role}
                      </h3>
                      <p className="font-mono text-xs text-[#A3A7AF] mt-1 flex items-center gap-2">
                        <span>{item.organization}</span>
                        <span>·</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-[#D4AF37]" />
                          {item.location}
                        </span>
                      </p>
                    </div>
                  </div>

                  <span className="inline-block px-3 py-1 rounded-full bg-[#17191D] border border-[#D4AF37]/35 text-xs font-mono text-[#D4AF37] self-start font-medium">
                    {item.period}
                  </span>
                </div>

                <p className="font-signature-sans text-sm sm:text-base text-[#F3EFE6] leading-relaxed mb-6 font-light">
                  {item.summary}
                </p>

                {/* Achievements List */}
                <div className="space-y-3 mb-6">
                  {item.achievements.map((ach, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-3 text-xs sm:text-sm text-[#A3A7AF] font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shrink-0 mt-2 shadow-[0_0_6px_rgba(212,175,55,0.7)]" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-5 border-t border-[#F3EFE6]/10">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono px-2.5 py-1 rounded bg-[#17191D] text-[#A3A7AF] border border-[#F3EFE6]/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
