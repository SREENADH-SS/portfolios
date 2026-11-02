import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowUpRight, Lock, Layers, CheckCircle2, Cpu, Server, ExternalLink } from 'lucide-react';
import { usePortfolioStore } from '../../store/usePortfolioStore';
import { PROJECTS, ProjectCaseStudy } from '../../data/content';
import { Magnetic } from '../animations/Magnetic';
import { GithubIcon } from '../Icons';

export const ProjectModal: React.FC = () => {
  const { activeProjectModalId, closeProjectModal } = usePortfolioStore();

  const project: ProjectCaseStudy | undefined = PROJECTS.find(
    (p) => p.id === activeProjectModalId
  );

  // Lock body scroll and handle Escape key when modal is open
  useEffect(() => {
    if (activeProjectModalId) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') closeProjectModal();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [activeProjectModalId, closeProjectModal]);

  return (
    <AnimatePresence>
      {activeProjectModalId && project && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-3 sm:p-6 md:p-10 overflow-hidden">
          {/* Backdrop with Soft Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            onClick={closeProjectModal}
            className="fixed inset-0 bg-black/85 backdrop-blur-xl cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-4xl max-h-[92vh] sm:max-h-[88vh] flex flex-col bg-[#0B0C0E] text-[#F3EFE6] rounded-2xl sm:rounded-3xl border border-[#D4AF37]/35 shadow-[0_25px_80px_rgba(0,0,0,0.9)] overflow-hidden relative z-10"
          >
            {/* Sticky Header Bar */}
            <div className="flex items-center justify-between px-5 sm:px-8 py-4 sm:py-5 border-b border-[#F3EFE6]/10 bg-[#121316]/95 backdrop-blur-md shrink-0">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-semibold text-[#D4AF37] px-2.5 py-1 rounded bg-[#D4AF37]/10 border border-[#D4AF37]/30">
                  PRODUCTION /{project.number}
                </span>
                <span className="font-mono text-xs text-[#A3A7AF] uppercase hidden sm:inline">
                  {project.category}
                </span>
              </div>

              <button
                onClick={closeProjectModal}
                className="group p-2 rounded-full bg-[#18191D] border border-[#D4AF37]/30 text-[#F3EFE6] hover:bg-[#D4AF37] hover:text-[#0B0C0E] transition-all cursor-pointer"
                aria-label="Close Case Study"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-90 transition-transform duration-300" />
              </button>
            </div>

            {/* Scrollable Body with data-lenis-prevent */}
            <div
              data-lenis-prevent="true"
              className="overflow-y-auto p-5 sm:p-8 md:p-10 space-y-8 select-text custom-scrollbar"
            >
              {/* Project Visual Showcase */}
              <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-xl sm:rounded-2xl overflow-hidden border border-[#D4AF37]/25 shadow-2xl group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover filter brightness-[0.75] contrast-[1.15] group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0E] via-[#0B0C0E]/40 to-transparent" />
                <div className="absolute inset-0 bg-radial from-transparent via-[#0B0C0E]/30 to-[#0B0C0E]/80" />

                {/* Floating Badge */}
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0B0C0E]/85 backdrop-blur-md border border-[#D4AF37]/40 text-xs font-mono text-[#D4AF37]">
                  <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
                  <span>ACTIVE ARCHITECTURE · {project.year}</span>
                </div>
              </div>

              {/* Title & Tagline */}
              <div>
                <h2 className="font-signature-serif text-3xl sm:text-5xl font-light tracking-tight text-[#F3EFE6] mb-3">
                  {project.title}
                </h2>
                <p className="font-signature-sans text-base sm:text-xl text-[#D4AF37] font-light leading-snug">
                  {project.tagline}
                </p>
                <p className="font-signature-sans text-sm sm:text-base text-[#C4C8D0] font-light leading-relaxed mt-4">
                  {project.description}
                </p>
              </div>

              {/* Architectural Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                {project.metrics.map((m, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 sm:p-4 rounded-xl bg-[#121316] border border-[#D4AF37]/20 shadow-sm"
                  >
                    <span className="font-mono text-[10px] text-[#A3A7AF] uppercase tracking-wider block mb-1">
                      {m.label}
                    </span>
                    <span className="font-mono text-xs sm:text-sm font-semibold text-[#F3EFE6]">
                      {m.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Problem & Solution Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="p-5 sm:p-6 rounded-2xl bg-[#121316] border border-[#D4AF37]/20 space-y-3">
                  <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-[#D4AF37] flex items-center gap-2">
                    <Server className="w-4 h-4 text-[#D4AF37]" />
                    PROBLEM &amp; CHALLENGE
                  </h3>
                  <p className="font-signature-sans text-xs sm:text-sm text-[#C4C8D0] leading-relaxed font-light">
                    {project.architectureDetails.problem}
                  </p>
                </div>

                <div className="p-5 sm:p-6 rounded-2xl bg-[#121316] border border-[#D4AF37]/20 space-y-3">
                  <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-[#D4AF37] flex items-center gap-2">
                    <Layers className="w-4 h-4 text-[#D4AF37]" />
                    ENGINEERED SOLUTION
                  </h3>
                  <p className="font-signature-sans text-xs sm:text-sm text-[#C4C8D0] leading-relaxed font-light">
                    {project.architectureDetails.solution}
                  </p>
                </div>
              </div>

              {/* Technical Highlights & Security */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="p-5 sm:p-6 rounded-2xl bg-[#121316] border border-[#D4AF37]/20 space-y-4">
                  <h4 className="font-mono text-xs text-[#D4AF37] uppercase tracking-widest font-semibold flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-[#D4AF37]" />
                    CORE ARCHITECTURAL HIGHLIGHTS
                  </h4>
                  <ul className="space-y-2.5 font-signature-sans text-xs sm:text-sm text-[#F3EFE6] font-light">
                    {project.architectureDetails.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-5 sm:p-6 rounded-2xl bg-[#121316] border border-[#D4AF37]/20 space-y-4">
                  <h4 className="font-mono text-xs text-[#D4AF37] uppercase tracking-widest font-semibold flex items-center gap-2">
                    <Lock className="w-4 h-4 text-[#D4AF37]" />
                    SECURITY &amp; INTEGRITY DEFENSE
                  </h4>
                  <ul className="space-y-2.5 font-mono text-xs text-[#C4C8D0]">
                    {project.architectureDetails.security.map((s, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shrink-0 mt-1.5" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Technology Ecosystem Badges */}
              <div>
                <h4 className="font-mono text-xs text-[#A3A7AF] uppercase tracking-wider mb-3">
                  TECHNOLOGY ECOSYSTEM
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-md bg-[#16181C] text-[#F3EFE6] border border-[#D4AF37]/25 font-mono text-xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-[#F3EFE6]/10">
                {project.liveUrl && (
                  <Magnetic strength={0.25}>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#D4AF37] text-[#0B0C0E] font-signature-sans text-xs font-semibold tracking-wider uppercase hover:bg-[#F3E5AB] transition-all shadow-lg"
                    >
                      <span>LAUNCH LIVE PLATFORM</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </Magnetic>
                )}

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#18191D] border border-[#D4AF37]/35 text-[#F3EFE6] font-signature-sans text-xs font-medium tracking-wider uppercase hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all"
                >
                  <GithubIcon className="w-4 h-4 text-[#D4AF37]" />
                  <span>VIEW REPOSITORY</span>
                </a>

                <button
                  onClick={closeProjectModal}
                  className="ml-auto font-mono text-xs text-[#A3A7AF] hover:text-[#D4AF37] underline underline-offset-4 cursor-pointer"
                >
                  Close Case Study
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
