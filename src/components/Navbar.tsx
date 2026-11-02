import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO, NAV_LINKS } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Simple active section detection
      const sections = ['hero', 'about', 'projects', 'skills', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#F8F7F3]/90 backdrop-blur-md border-b border-[#DCD9D1]/80 py-3.5 shadow-[0_2px_12px_rgba(32,33,31,0.03)]'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#hero"
            className="group flex items-center gap-2 text-foreground font-display font-semibold tracking-tight text-lg"
          >
            <span className="w-8 h-8 rounded-full bg-[#20211F] text-[#F8F7F3] flex items-center justify-center text-xs font-mono group-hover:bg-[#C97858] transition-colors duration-300">
              S
            </span>
            <span className="tracking-wider text-sm font-bold">
              {PERSONAL_INFO.brandName}
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-[13px] tracking-wide font-medium text-[#77766F]">
            {NAV_LINKS.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`editorial-link transition-colors duration-200 py-1 ${
                    isActive
                      ? 'text-[#20211F] font-semibold after:w-full after:bg-[#C97858]'
                      : 'hover:text-[#20211F]'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Availability Status & Contact CTA */}
          <div className="hidden md:flex items-center gap-5">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#DCD9D1] bg-[#F8F7F3]/80 text-[11px] font-medium tracking-wider text-[#20211F]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C97858] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C97858]"></span>
              </span>
              <span className="font-mono text-[10px] tracking-widest text-[#77766F] uppercase">
                {PERSONAL_INFO.status}
              </span>
            </div>

            <a
              href="#contact"
              className="group flex items-center gap-1.5 text-xs font-semibold text-[#20211F] hover:text-[#C97858] transition-colors"
            >
              <span>Say Hello</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#20211F] hover:text-[#C97858] focus:outline-none"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="fixed inset-0 top-[60px] z-40 bg-[#F8F7F3]/95 backdrop-blur-xl border-b border-[#DCD9D1] p-6 lg:hidden flex flex-col justify-between"
          >
            <div className="flex flex-col gap-6 pt-6">
              <div className="flex items-center gap-2 pb-4 border-b border-[#DCD9D1]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C97858] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C97858]"></span>
                </span>
                <span className="text-xs font-mono text-[#77766F] uppercase tracking-wider">
                  {PERSONAL_INFO.status}
                </span>
              </div>

              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-display text-2xl font-semibold tracking-tight text-[#20211F] hover:text-[#C97858] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-8 border-t border-[#DCD9D1] flex flex-col gap-3">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 bg-[#20211F] text-[#F8F7F3] rounded-full text-sm font-medium tracking-wide hover:bg-[#C97858] transition-colors"
              >
                Let&apos;s Connect ↗
              </a>
              <p className="text-center text-xs text-[#77766F]">
                © {new Date().getFullYear()} {PERSONAL_INFO.brandName}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
