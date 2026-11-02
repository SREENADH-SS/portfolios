import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS, ProjectCaseStudy } from '../data/content';
import { ProjectGraphic } from '../components/ui/ProjectGraphic';
import { usePortfolioStore } from '../store/usePortfolioStore';
import { Magnetic } from '../components/animations/Magnetic';
import { GithubIcon } from '../components/Icons';
import { SignatureTextReveal } from '../components/animations/SignatureTextReveal';

export const Projects: React.FC = () => {
  const { openProjectModal, setCursorVariant } = usePortfolioStore();

  return (
    <section id="work" className="relative py-20 sm:py-32 md:py-40 border-b border-[#AA8222]/30 bg-[#EEDBBE] text-[#17191D] overflow-hidden">
      {/* Background Architectural Layer */}
      <div className="absolute inset-0 pointer-events-none opacity-15">
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=80"
          alt="Architectural atmosphere"
          className="w-full h-full object-cover filter contrast-[1.1] grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#EEDBBE] via-[#EEDBBE]/80 to-[#EEDBBE]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 sm:mb-28 pb-8 border-b border-[#0B0C0E]/20">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#6B4709] bg-[#6B4709]/10 border border-[#6B4709]/30 px-3.5 py-1.5 rounded-full tracking-widest uppercase font-bold mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6B4709]"></span>
              SELECTED WORK / 01—03
            </div>
            <h2 className="text-section-signature text-[#0B0C0E]">
              <SignatureTextReveal
                lines={["Selected architectures", "and media platforms."]}
                italicIndices={[1]}
                serif={true}
                theme="light"
              />
            </h2>
          </div>

          <p className="font-signature-sans text-base sm:text-lg text-[#23252A] max-w-md font-normal leading-relaxed">
            Enterprise systems designed with the calm of a luxury design publication. Inspect case studies for architectural blueprints and security protocols.
          </p>
        </div>

        {/* Asymmetrical Project Showcase List */}
        <div className="space-y-28 sm:space-y-40">
          {PROJECTS.map((project: ProjectCaseStudy, idx: number) => {
            const isReversed = idx % 2 !== 0;

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="group relative"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center`}>
                  {/* Interactive Visual Card with Editorial Background Photography */}
                  <div
                    onClick={() => openProjectModal(project.id)}
                    onMouseEnter={() => setCursorVariant('project', 'VIEW')}
                    onMouseLeave={() => setCursorVariant('default')}
                    className={`lg:col-span-7 cursor-pointer ${
                      isReversed ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <div className="relative rounded-2xl overflow-hidden border border-[#8C6D1F]/30 bg-[#111215] shadow-[0_24px_50px_rgba(24,25,27,0.2)] transition-all duration-700 group-hover:border-[#8C6D1F] group-hover:shadow-[0_30px_70px_rgba(140,109,31,0.25)]">
                      {/* Atmospheric Image underlay */}
                      <div className="absolute inset-0 z-0">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover filter brightness-[0.5] contrast-[1.15] scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#111215] via-[#111215]/80 to-[#111215]/40" />
                      </div>

                      {/* Foreground Interface Console Graphic */}
                      <div className="relative z-10 transform transition-transform duration-700 ease-out">
                        <ProjectGraphic id={project.id} />
                      </div>

                      {/* Editorial Gold Tag */}
                      <div className="absolute bottom-5 right-5 z-20 px-3.5 py-1.5 rounded-full bg-[#0B0C0E]/90 backdrop-blur-sm text-[#F3EFE6] font-mono text-[10px] tracking-widest uppercase flex items-center gap-2 border border-[#D4AF37]/50 shadow-xl">
                        <span>INSPECT ARCHITECTURE</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                      </div>
                    </div>
                  </div>

                  {/* Project Details Side */}
                  <div
                    className={`lg:col-span-5 flex flex-col justify-between ${
                      isReversed ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <div>
                      {/* Project Index & Year */}
                      <div className="flex items-center justify-between font-mono text-xs pb-4 mb-5 border-b border-[#0B0C0E]/20">
                        <span className="text-[#6B4709] font-bold tracking-widest">
                          PRODUCTION /{project.number}
                        </span>
                        <span className="text-[#23252A] uppercase text-[11px] font-semibold">
                          {project.year} · {project.category}
                        </span>
                      </div>

                      {/* Project Title */}
                      <h3
                        onClick={() => openProjectModal(project.id)}
                        className="font-signature-serif text-3xl sm:text-5xl font-normal text-[#0B0C0E] tracking-tight mb-3 cursor-pointer group-hover:text-[#6B4709] transition-colors duration-300"
                      >
                        {project.title}
                      </h3>

                      {/* Tagline */}
                      <p className="font-signature-sans text-sm sm:text-base font-bold text-[#6B4709] mb-4">
                        {project.tagline}
                      </p>

                      {/* Description */}
                      <p className="font-signature-sans text-sm text-[#23252A] leading-relaxed mb-6 font-normal">
                        {project.description}
                      </p>

                      {/* Technology Badges */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.technologies.slice(0, 5).map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-md text-[11px] font-mono tracking-wider bg-[#0B0C0E] text-[#F3EFE6] border border-[#6B4709]/40 font-semibold shadow-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTAs */}
                    <div className="flex items-center gap-6 pt-2">
                      <Magnetic strength={0.25}>
                        <button
                          onClick={() => openProjectModal(project.id)}
                          onMouseEnter={() => setCursorVariant('hover')}
                          onMouseLeave={() => setCursorVariant('default')}
                          className="signature-link-dark font-signature-sans text-xs uppercase tracking-wider font-semibold text-[#17191D] group/btn"
                        >
                          <span>READ CASE STUDY</span>
                          <ArrowUpRight className="w-3.5 h-3.5 ml-1 text-[#8C6D1F] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                        </button>
                      </Magnetic>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onMouseEnter={() => setCursorVariant('hover')}
                        onMouseLeave={() => setCursorVariant('default')}
                        className="inline-flex items-center gap-1.5 font-mono text-xs text-[#565961] hover:text-[#17191D] transition-colors"
                        title="View GitHub Repository"
                      >
                        <GithubIcon className="w-3.5 h-3.5 text-[#8C6D1F]" />
                        <span>SOURCE</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
