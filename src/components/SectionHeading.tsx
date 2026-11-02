import React from 'react';
import { motion } from 'motion/react';

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  dark?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  label,
  title,
  description,
  align = 'left',
  dark = false,
}) => {
  return (
    <div
      className={`mb-12 md:mb-16 ${
        align === 'center' ? 'text-center mx-auto max-w-2xl' : 'max-w-3xl'
      }`}
    >
      {/* Category Pill / Label */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 mb-3.5"
      >
        <span
          className={`h-1.5 w-1.5 rounded-full ${
            dark ? 'bg-[#C97858]' : 'bg-[#C97858]'
          }`}
        />
        <span
          className={`font-mono text-xs tracking-widest uppercase font-semibold ${
            dark ? 'text-[#C97858]' : 'text-[#77766F]'
          }`}
        >
          {label}
        </span>
      </motion.div>

      {/* Main Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`font-display text-section-title font-bold tracking-tight mb-4 ${
          dark ? 'text-[#F8F7F3]' : 'text-[#20211F]'
        }`}
      >
        {title}
      </motion.h2>

      {/* Optional Description */}
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`text-base md:text-lg leading-relaxed ${
            dark ? 'text-[#77766F]' : 'text-[#77766F]'
          }`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};
