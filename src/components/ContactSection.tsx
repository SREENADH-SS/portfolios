import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Mail, FileText, Check, Copy } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="relative bg-[#20211F] text-[#F8F7F3] py-28 sm:py-36 overflow-hidden">
      {/* Subtle architectural background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#2a2b28_1px,transparent_1px),linear-gradient(to_bottom,#2a2b28_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

      {/* Decorative terracotta ambient light */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#C97858]/10 rounded-full filter blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#C97858]"></span>
          <span className="font-mono text-xs text-[#C97858] tracking-widest uppercase font-semibold">
            CONTACT / 05
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-end">
          {/* Main Editorial Headline & Text */}
          <div className="lg:col-span-8">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#F8F7F3] leading-[1.05] mb-8"
            >
              Have something
              <br />
              <span className="text-[#C97858]">good in mind?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-xl text-[#77766F] max-w-xl leading-relaxed mb-10"
            >
              {PERSONAL_INFO.contact.subheading}
            </motion.p>

            {/* Main Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href={`mailto:${PERSONAL_INFO.contact.email}`}
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#C97858] text-[#F8F7F3] font-mono text-xs font-bold tracking-wider hover:bg-[#d68565] transition-colors shadow-lg"
              >
                <span>LET&apos;S TALK</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full border border-[#343532] bg-[#161715]/70 text-[#F8F7F3] font-mono text-xs font-medium tracking-wider hover:border-[#C97858] transition-colors"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#4ADE80]" />
                    <span className="text-[#4ADE80]">COPIED TO CLIPBOARD</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#77766F]" />
                    <span>COPY EMAIL</span>
                  </>
                )}
              </button>
            </motion.div>
          </div>

          {/* Connect Links Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-4 flex flex-col gap-3 font-mono text-xs"
          >
            <span className="text-[11px] text-[#77766F] uppercase tracking-widest mb-1">
              DIRECT CHANNELS
            </span>

            <a
              href={`mailto:${PERSONAL_INFO.contact.email}`}
              className="group flex items-center justify-between p-3.5 rounded-xl bg-[#161715] border border-[#343532] hover:border-[#C97858] text-[#F8F7F3] transition-all"
            >
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C97858]" />
                <span>Email Sreenadh</span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#77766F] group-hover:text-[#F8F7F3] transition-colors" />
            </a>

            <a
              href={PERSONAL_INFO.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-3.5 rounded-xl bg-[#161715] border border-[#343532] hover:border-[#C97858] text-[#F8F7F3] transition-all"
            >
              <div className="flex items-center gap-2.5">
                <GithubIcon className="w-4 h-4 text-[#C97858]" />
                <span>GitHub Profile</span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#77766F] group-hover:text-[#F8F7F3] transition-colors" />
            </a>

            <a
              href={PERSONAL_INFO.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-3.5 rounded-xl bg-[#161715] border border-[#343532] hover:border-[#C97858] text-[#F8F7F3] transition-all"
            >
              <div className="flex items-center gap-2.5">
                <LinkedinIcon className="w-4 h-4 text-[#C97858]" />
                <span>LinkedIn Network</span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#77766F] group-hover:text-[#F8F7F3] transition-colors" />
            </a>

            <a
              href={PERSONAL_INFO.contact.resumeUrl}
              download
              className="group flex items-center justify-between p-3.5 rounded-xl bg-[#161715] border border-[#343532] hover:border-[#C97858] text-[#F8F7F3] transition-all"
            >
              <div className="flex items-center gap-2.5">
                <FileText className="w-4 h-4 text-[#C97858]" />
                <span>Curriculum Vitae</span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#77766F] group-hover:text-[#F8F7F3] transition-colors" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
