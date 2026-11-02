import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useForm } from 'react-hook-form';
import confetti from 'canvas-confetti';
import { ArrowUpRight, Copy, Check, Send, Sparkles, MapPin } from 'lucide-react';
import { PROFILE } from '../data/content';
import { Magnetic } from '../components/animations/Magnetic';
import { GithubIcon, LinkedinIcon } from '../components/Icons';
import { SignatureTextReveal } from '../components/animations/SignatureTextReveal';

interface ContactFormData {
  name: string;
  email: string;
  organization?: string;
  message: string;
}

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>();

  const onFormSubmit = async (data: ContactFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 800));
    setSubmitted(true);
    confetti({
      particleCount: 75,
      spread: 65,
      origin: { y: 0.6 },
      colors: ['#DFC07A', '#C5A059', '#FAF7F2', '#8E939D'],
    });
    reset();
    setTimeout(() => setSubmitted(false), 6000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="relative bg-[#EEDBBE] text-[#17191D] py-20 sm:py-32 md:py-40 overflow-hidden">
      {/* Background Architectural Glow and Textures */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2200&q=80"
          alt="Architectural space"
          className="w-full h-full object-cover filter contrast-[1.1] brightness-90"
        />
        <div className="absolute inset-0 bg-[#EEDBBE]/80" />
      </div>

      {/* Golden Ambient Halo in bottom-right */}
      <div className="absolute -bottom-36 -right-36 w-[550px] h-[550px] bg-[#D4AF37]/20 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-12 z-10">
        {/* Section Pill */}
        <div className="inline-flex items-center gap-2 font-mono text-xs text-[#6B4709] bg-[#6B4709]/10 border border-[#6B4709]/30 px-3.5 py-1.5 rounded-full tracking-widest uppercase font-bold mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#6B4709]"></span>
          INITIATE COMMISSION / 05
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-24 items-start">
          {/* Left Column: Big Editorial Heading & Direct Channels */}
          <div className="lg:col-span-6 space-y-10">
            <div>
              <h2 className="text-hero-signature text-[#0B0C0E] leading-[0.95] mb-6">
                <SignatureTextReveal
                  lines={["Have an enterprise", "challenge in mind?"]}
                  italicIndices={[1]}
                  serif={true}
                  theme="light"
                />
              </h2>

              <p className="font-signature-sans text-base sm:text-lg text-[#23252A] leading-relaxed max-w-md font-normal">
                Whether you require high-throughput Java microservices, strict Spring Security architectures, or an editorial web experience, let&apos;s build with intention.
              </p>
            </div>

            {/* Quick Email Copy & Status Pill */}
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={`mailto:${PROFILE.contact.email}`}
                  className="font-signature-serif text-2xl sm:text-3xl font-normal text-[#0B0C0E] hover:text-[#6B4709] transition-colors signature-link-dark"
                >
                  {PROFILE.contact.email}
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#6B4709]/40 bg-[#FAF7F2] font-mono text-xs text-[#0B0C0E] hover:border-[#6B4709] hover:bg-white transition-all shadow-sm cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#6B4709]" />
                      <span className="text-[#6B4709] font-bold">COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#23252A]" />
                      <span className="font-semibold">COPY</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center gap-2 font-mono text-xs text-[#23252A] font-medium">
                <MapPin className="w-3.5 h-3.5 text-[#6B4709]" />
                <span>Base: {PROFILE.location} · Available Worldwide</span>
              </div>
            </div>

            {/* Direct Channel Cards */}
            <div className="space-y-3 font-mono text-xs">
              <span className="text-[#0B0C0E] uppercase tracking-wider block mb-2 font-bold">DIRECT CHANNELS</span>
              <a
                href={PROFILE.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 rounded-xl bg-[#FAF7F2] border border-[#6B4709]/30 hover:border-[#6B4709] hover:shadow-md transition-all shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <GithubIcon className="w-4 h-4 text-[#6B4709]" />
                  <span className="text-[#0B0C0E] font-semibold">GitHub Profile &amp; Repositories</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#23252A] group-hover:text-[#6B4709] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href={PROFILE.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 rounded-xl bg-[#FAF7F2] border border-[#6B4709]/30 hover:border-[#6B4709] hover:shadow-md transition-all shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <LinkedinIcon className="w-4 h-4 text-[#6B4709]" />
                  <span className="text-[#0B0C0E] font-semibold">LinkedIn Professional Network</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#23252A] group-hover:text-[#6B4709] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column: Clean Luxury Form */}
          <div className="lg:col-span-6">
            <div className="p-8 sm:p-12 rounded-2xl bg-[#FAF7F2]/95 backdrop-blur-md border border-[#C5A059]/40 shadow-xl relative">
              <span className="font-mono text-xs text-[#9E7D3B] uppercase tracking-widest font-semibold block mb-6">
                TRANSMIT INQUIRY SPECIFICATION
              </span>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="w-14 h-14 rounded-full bg-[#9E7D3B]/10 border border-[#9E7D3B] text-[#9E7D3B] flex items-center justify-center mx-auto shadow-md">
                    <Sparkles className="w-7 h-7" />
                  </div>
                  <h3 className="font-signature-serif text-3xl font-light text-[#17191D]">
                    Message Transmitted
                  </h3>
                  <p className="font-signature-sans text-sm text-[#565961] max-w-sm mx-auto font-light">
                    Thank you. Your inquiry has been dispatched. I will review the scope and reply promptly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-6">
                  <div>
                    <label className="block font-mono text-xs text-[#565961] uppercase tracking-wider mb-2 font-medium">
                      YOUR FULL NAME *
                    </label>
                    <input
                      {...register('name', { required: 'Name is required' })}
                      type="text"
                      placeholder="e.g. Alex Mercer"
                      className="w-full px-4 py-3.5 rounded-lg bg-white border border-[#C5A059]/35 text-[#17191D] placeholder-[#9E9E9E] font-signature-sans text-sm focus:outline-none focus:border-[#9E7D3B] transition-colors shadow-inner"
                    />
                    {errors.name && (
                      <p className="font-mono text-xs text-[#D9534F] mt-1.5">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block font-mono text-xs text-[#565961] uppercase tracking-wider mb-2 font-medium">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address',
                        },
                      })}
                      type="email"
                      placeholder="e.g. alex@company.com"
                      className="w-full px-4 py-3.5 rounded-lg bg-white border border-[#C5A059]/35 text-[#17191D] placeholder-[#9E9E9E] font-signature-sans text-sm focus:outline-none focus:border-[#9E7D3B] transition-colors shadow-inner"
                    />
                    {errors.email && (
                      <p className="font-mono text-xs text-[#D9534F] mt-1.5">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block font-mono text-xs text-[#565961] uppercase tracking-wider mb-2 font-medium">
                      ORGANIZATION / CONTEXT (OPTIONAL)
                    </label>
                    <input
                      {...register('organization')}
                      type="text"
                      placeholder="e.g. Enterprise Security Corp"
                      className="w-full px-4 py-3.5 rounded-lg bg-white border border-[#C5A059]/35 text-[#17191D] placeholder-[#9E9E9E] font-signature-sans text-sm focus:outline-none focus:border-[#9E7D3B] transition-colors shadow-inner"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs text-[#565961] uppercase tracking-wider mb-2 font-medium">
                      MESSAGE &amp; SCOPE *
                    </label>
                    <textarea
                      {...register('message', {
                        required: 'Please provide brief details on your project',
                        minLength: { value: 10, message: 'Minimum 10 characters' },
                      })}
                      rows={4}
                      placeholder="Describe your backend engineering requirements, architecture, or full-stack project..."
                      className="w-full px-4 py-3.5 rounded-lg bg-white border border-[#C5A059]/35 text-[#17191D] placeholder-[#9E9E9E] font-signature-sans text-sm focus:outline-none focus:border-[#9E7D3B] transition-colors resize-none shadow-inner"
                    />
                    {errors.message && (
                      <p className="font-mono text-xs text-[#D9534F] mt-1.5">{errors.message.message}</p>
                    )}
                  </div>

                  <Magnetic strength={0.25} className="w-full">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full group inline-flex items-center justify-center gap-3 py-4 rounded-full bg-[#17191D] text-[#FAF7F2] font-signature-sans text-xs font-semibold tracking-widest uppercase hover:bg-[#9E7D3B] hover:text-[#FAF7F2] transition-all disabled:opacity-50 shadow-lg cursor-pointer"
                    >
                      <span>{isSubmitting ? 'TRANSMITTING...' : 'TRANSMIT INQUIRY'}</span>
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#DFC07A]" />
                    </button>
                  </Magnetic>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
