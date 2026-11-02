import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../data/portfolioData';
import { ProjectMockup } from './ProjectMockups';
import { GithubIcon } from './Icons';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
      className="group relative border-t border-[#DCD9D1] pt-10 sm:pt-14 pb-12 sm:pb-16"
    >
      <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center`}>
        {/* Visual Preview Side (Alternating on large screens) */}
        <div
          className={`lg:col-span-7 ${
            isEven ? 'lg:order-1' : 'lg:order-2'
          }`}
        >
          <div className="relative rounded-2xl overflow-hidden border border-[#DCD9D1] bg-[#EAE7E0]/40 shadow-sm transition-all duration-500 group-hover:border-[#C97858]/50 group-hover:shadow-[0_12px_36px_rgba(32,33,31,0.06)]">
            <div className="transform transition-transform duration-700 ease-out group-hover:scale-[1.02]">
              <ProjectMockup theme={project.theme} />
            </div>
          </div>
        </div>

        {/* Project Meta Information Side */}
        <div
          className={`lg:col-span-5 flex flex-col justify-between ${
            isEven ? 'lg:order-2' : 'lg:order-1'
          }`}
        >
          <div>
            {/* Project Index & Category */}
            <div className="flex items-center justify-between mb-4 font-mono text-xs">
              <span className="text-[#C97858] font-bold tracking-widest">
                PROJECT /{project.number}
              </span>
              <span className="text-[#77766F] uppercase tracking-wider">
                {project.category}
              </span>
            </div>

            {/* Project Title */}
            <h3 className="font-display text-project-title font-bold text-[#20211F] mb-4 tracking-tight group-hover:text-[#C97858] transition-colors duration-300">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-sm sm:text-base text-[#77766F] leading-relaxed mb-6 font-normal">
              {project.description}
            </p>

            {/* Long details highlight */}
            {project.longDescription && (
              <p className="text-xs sm:text-[13px] text-[#77766F]/90 leading-normal mb-8 pb-4 border-b border-[#DCD9D1]/60 font-mono">
                {project.longDescription}
              </p>
            )}

            {/* Technologies Badges */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md text-[11px] font-mono tracking-wide bg-[#EAE7E0] text-[#20211F] border border-[#DCD9D1] transition-colors group-hover:border-[#C97858]/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex items-center gap-4 pt-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#20211F] text-[#F8F7F3] font-mono text-xs font-semibold tracking-wider hover:bg-[#C97858] transition-colors duration-300"
              >
                <span>LIVE DEMO</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </a>
            )}

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-[#DCD9D1] bg-[#F8F7F3] text-[#20211F] font-mono text-xs font-semibold tracking-wider hover:border-[#20211F] hover:bg-[#EAE7E0]/50 transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5 text-[#77766F]" />
              <span>SOURCE</span>
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
};
