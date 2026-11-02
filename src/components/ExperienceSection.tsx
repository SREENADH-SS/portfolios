import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, GraduationCap } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { TIMELINE } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 sm:py-32 border-b border-[#DCD9D1]/60 bg-noise">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading
          label="BACKGROUND / 04"
          title="Experience &amp; education."
          description="Academic foundation and industry experience spanning technical strategy, web optimization, and full-stack software development."
        />

        <div className="max-w-4xl mx-auto mt-12 space-y-6">
          {TIMELINE.map((item, index) => {
            const isEducation = item.type === 'education';

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 sm:p-8 rounded-2xl border border-[#DCD9D1] bg-[#F8F7F3] hover:border-[#C97858]/50 hover:bg-[#EAE7E0]/30 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-xl bg-[#EAE7E0] text-[#20211F] group-hover:bg-[#20211F] group-hover:text-[#F8F7F3] transition-colors shrink-0 mt-0.5">
                      {isEducation ? (
                        <GraduationCap className="w-5 h-5 text-[#C97858]" />
                      ) : (
                        <Briefcase className="w-5 h-5 text-[#C97858]" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-display text-lg sm:text-xl font-bold text-[#20211F] group-hover:text-[#C97858] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm font-medium text-[#77766F] mt-0.5">
                        {item.organization}
                      </p>
                    </div>
                  </div>

                  <span className="inline-block px-3 py-1 rounded-full bg-[#EAE7E0] border border-[#DCD9D1] text-[11px] font-mono text-[#20211F] self-start">
                    {item.period}
                  </span>
                </div>

                <p className="text-sm sm:text-base text-[#77766F] leading-relaxed max-w-2xl pl-0 sm:pl-[46px] mb-4">
                  {item.description}
                </p>

                {item.tags && item.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 pl-0 sm:pl-[46px]">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#EAE7E0]/70 text-[#77766F] border border-[#DCD9D1]/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
