import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1a1b19] text-[#77766F] py-12 border-t border-[#2A2B28]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-xs font-mono">
          <span className="font-display font-bold text-[#F8F7F3] text-sm tracking-tight">
            {PERSONAL_INFO.brandName}
          </span>
          <span className="hidden sm:inline text-[#343532]">/</span>
          <span>© {new Date().getFullYear()} Sreenadh S.S All rights reserved.</span>
        </div>

        {/* Studio note */}
        <div className="text-[11px] font-mono text-[#77766F] tracking-wider text-center">
          Crafted with code, typography &amp; intentional motion.
        </div>

        {/* Back to top & Socials */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4 text-xs font-mono">
            <a
              href={PERSONAL_INFO.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F8F7F3] transition-colors"
            >
              GitHub
            </a>
            <a
              href={PERSONAL_INFO.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F8F7F3] transition-colors"
            >
              LinkedIn
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="group flex items-center justify-center w-9 h-9 rounded-full bg-[#20211F] border border-[#343532] text-[#F8F7F3] hover:bg-[#C97858] hover:border-[#C97858] transition-all"
            aria-label="Back to top"
            title="Back to top"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};
