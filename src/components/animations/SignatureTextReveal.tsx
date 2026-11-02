import React from 'react';
import { motion, useInView } from 'motion/react';

interface SignatureTextRevealProps {
  lines: string[];
  className?: string;
  italicIndices?: number[];
  serif?: boolean;
  delay?: number;
  theme?: 'dark' | 'light';
}

export const SignatureTextReveal: React.FC<SignatureTextRevealProps> = ({
  lines,
  className = '',
  italicIndices = [],
  serif = true,
  delay = 0,
  theme = 'dark',
}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <div ref={ref} className={`select-none ${className}`}>
      {lines.map((line, idx) => {
        const isItalic = italicIndices.includes(idx);

        const textClass = theme === 'light'
          ? isItalic
            ? 'italic font-light text-[#6E4808] drop-shadow-sm'
            : 'text-[#0B0C0E] font-medium'
          : isItalic
            ? 'italic font-light text-gold-metallic'
            : 'text-[#F3EFE6]';

        return (
          <span key={idx} className="signature-line-mask">
            <motion.span
              initial={{ y: '115%', rotate: 2.5, opacity: 0 }}
              animate={isInView ? { y: '0%', rotate: 0, opacity: 1 } : { y: '115%', rotate: 2.5, opacity: 0 }}
              transition={{
                duration: 1.0,
                ease: [0.16, 1, 0.3, 1],
                delay: delay + idx * 0.12,
              }}
              className={`inline-block origin-bottom-left will-change-transform ${
                serif ? 'font-signature-serif' : 'font-editorial-display'
              } ${textClass}`}
            >
              {line}
            </motion.span>
          </span>
        );
      })}
    </div>
  );
};
