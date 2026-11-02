import React from 'react';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { PROFILE } from '../../data/content';
import { Magnetic } from '../animations/Magnetic';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B0C0E] text-[#F3EFE6] pt-16 sm:pt-24 pb-10 sm:pb-14 border-t border-[#D4AF37]/25 relative overflow-hidden">
      {/* Background Architectural Subtle Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#D4AF37]/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        {/* Large Statement Branding in Cormorant Garamond */}
        <div className="border-b border-[#F3EFE6]/10 pb-16 mb-16 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div>
            <span className="font-mono text-xs text-[#D4AF37] tracking-widest uppercase block mb-3 font-semibold">
              SIGNATURE ATELIER // ARCHIVE
            </span>
            <h2 className="font-signature-serif text-5xl sm:text-7xl md:text-8xl font-light tracking-tight text-[#F3EFE6]">
              SREENADH S.S<span className="text-gold-metallic italic"></span>
            </h2>
          </div>

          <div className="max-w-md font-signature-sans text-sm text-[#A3A7AF] leading-relaxed font-light">
            High-end Java architectures engineered with the quiet clarity of an architectural design publication. Located in {PROFILE.location}.
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-16 border-b border-[#F3EFE6]/10 font-mono text-xs">
          <div>
            <span className="text-[#A3A7AF] uppercase tracking-wider block mb-4 text-[11px] font-medium">INDEX</span>
            <ul className="space-y-2.5">
              <li><a href="#hero" className="text-[#C4C8D0] hover:text-[#D4AF37] transition-colors">01 / Index</a></li>
              <li><a href="#work" className="text-[#C4C8D0] hover:text-[#D4AF37] transition-colors">02 / Selected Works</a></li>
              <li><a href="#about" className="text-[#C4C8D0] hover:text-[#D4AF37] transition-colors">03 / About Atelier</a></li>
              <li><a href="#expertise" className="text-[#C4C8D0] hover:text-[#D4AF37] transition-colors">04 / Stack Matrix</a></li>
              <li><a href="#contact" className="text-[#C4C8D0] hover:text-[#D4AF37] transition-colors">05 / Transmit</a></li>
            </ul>
          </div>

          <div>
            <span className="text-[#A3A7AF] uppercase tracking-wider block mb-4 text-[11px] font-medium">ENGINEERING</span>
            <ul className="space-y-2.5 text-[#A3A7AF]">
              <li>Java 21 &amp; Spring Boot</li>
              <li>Spring Security &amp; RBAC</li>
              <li>React 19 &amp; TypeScript</li>
              <li>PostgreSQL &amp; MySQL</li>
              <li>GSAP &amp; Lenis Physics</li>
            </ul>
          </div>

          <div>
            <span className="text-[#A3A7AF] uppercase tracking-wider block mb-4 text-[11px] font-medium">SOCIAL &amp; CODE</span>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={PROFILE.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#C4C8D0] hover:text-[#D4AF37] transition-colors"
                >
                  GitHub <ArrowUpRight className="w-3 h-3 text-[#D4AF37]" />
                </a>
              </li>
              <li>
                <a
                  href={PROFILE.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#C4C8D0] hover:text-[#D4AF37] transition-colors"
                >
                  LinkedIn <ArrowUpRight className="w-3 h-3 text-[#D4AF37]" />
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${PROFILE.contact.email}`}
                  className="inline-flex items-center gap-1 text-[#C4C8D0] hover:text-[#D4AF37] transition-colors"
                >
                  Direct Email <ArrowUpRight className="w-3 h-3 text-[#D4AF37]" />
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <span className="text-[#A3A7AF] uppercase tracking-wider block mb-4 text-[11px] font-medium">LOCATION</span>
              <p className="text-[#F3EFE6] font-medium">{PROFILE.location}</p>
              <p className="text-[#A3A7AF] text-[11px] mt-1">{PROFILE.timezone}</p>
            </div>

            <div className="pt-6">
              <Magnetic strength={0.4}>
                <button
                  onClick={scrollToTop}
                  className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-[#D4AF37]/30 bg-[#17191D] text-[#F3EFE6] text-xs font-mono font-medium tracking-wider hover:border-[#D4AF37] hover:bg-[#22242B] transition-all shadow-md cursor-pointer"
                  aria-label="Back to top"
                >
                  <span>RETURN TO TOP</span>
                  <ArrowUp className="w-3.5 h-3.5 text-[#D4AF37] group-hover:-translate-y-1 transition-transform" />
                </button>
              </Magnetic>
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-[#A3A7AF]">
          <p>© {new Date().getFullYear()} {PROFILE.brand}. SIGNATURE ATELIER.</p>
          <p className="flex items-center gap-1">
            Complete visual &amp; code production with the calm of a design magazine.
          </p>
        </div>
      </div>
    </footer>
  );
};
