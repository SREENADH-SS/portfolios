import React from 'react';
import { Shield, Key, Bell, Activity, CheckCircle2, ShoppingBag, ArrowRight, Database } from 'lucide-react';

interface MockupProps {
  id: string;
}

export const ProjectGraphic: React.FC<MockupProps> = ({ id }) => {
  if (id === 'c4secure') {
    return (
      <div className="w-full h-full min-h-[340px] sm:min-h-[420px] bg-[#18191B]/95 text-[#FAF7F2] p-6 sm:p-8 flex flex-col justify-between relative select-none overflow-hidden font-signature-sans group/visual">
        {/* Top Operational Status Bar */}
        <div className="relative z-10 flex items-center justify-between border-b border-[#FAF7F2]/10 pb-4 text-xs font-mono">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#DFC07A]"></span>
            <span className="text-[#C4C8D0] text-[11px]">c4secure-production.internal</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 rounded bg-[#24262A] border border-[#C5A059]/40 text-[#DFC07A] text-[10px] font-semibold">
            <Shield className="w-3.5 h-3.5" />
            <span>SPRING SECURITY / RBAC VERIFIED</span>
          </div>
        </div>

        {/* Main Interface Center Composition */}
        <div className="relative z-10 grid grid-cols-12 gap-4 my-6">
          {/* JWT Gateway & RBAC Pipeline */}
          <div className="col-span-12 sm:col-span-7 bg-[#24262A]/90 p-5 rounded-xl border border-[#C5A059]/25 shadow-xl">
            <div className="flex items-center justify-between mb-4 font-mono">
              <span className="text-[10px] text-[#C4C8D0] tracking-widest uppercase">
                AUTHENTICATION GATEWAY
              </span>
              <span className="text-[10px] text-[#DFC07A] flex items-center gap-1.5 font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#DFC07A] animate-pulse"></span>
                ACTIVE
              </span>
            </div>

            <div className="space-y-3">
              <div className="p-3 rounded-lg bg-[#18191B] border border-[#FAF7F2]/10 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2.5">
                  <Key className="w-4 h-4 text-[#DFC07A]" />
                  <span className="font-mono text-xs">Stateless JWT Claim Filter</span>
                </div>
                <span className="text-[10px] font-mono text-[#8E939D]">HMAC-256</span>
              </div>

              <div className="p-3 rounded-lg bg-[#18191B] border border-[#FAF7F2]/10 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2.5">
                  <Activity className="w-4 h-4 text-[#DFC07A]" />
                  <span className="font-mono text-xs">Installation Dispatch Scheduler</span>
                </div>
                <span className="text-[10px] font-mono text-[#8E939D]">Async Cron</span>
              </div>
            </div>
          </div>

          {/* Right Metrics Box */}
          <div className="col-span-12 sm:col-span-5 bg-[#24262A]/90 p-5 rounded-xl border border-[#C5A059]/25 flex flex-col justify-between shadow-xl">
            <div>
              <span className="text-[10px] font-mono text-[#C4C8D0] tracking-widest uppercase block mb-3">
                DISPATCH PIPELINE
              </span>
              <div className="space-y-2 text-xs">
                <div className="flex items-center gap-2 text-[#FAF7F2]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#DFC07A]" />
                  <span>Hardware Order #8841</span>
                </div>
                <div className="flex items-center gap-2 text-[#C4C8D0]">
                  <Bell className="w-3.5 h-3.5 text-[#E6D5B8]" />
                  <span>Cloudinary Media Verified</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#FAF7F2]/10 flex items-center justify-between text-[11px] font-mono text-[#C4C8D0]">
              <span className="flex items-center gap-1">
                <Database className="w-3 h-3 text-[#DFC07A]" />
                MySQL ACID
              </span>
              <span className="text-[#DFC07A] font-semibold">0.6ms latency</span>
            </div>
          </div>
        </div>

        {/* Bottom Platform Status */}
        <div className="relative z-10 flex items-center justify-between pt-3 border-t border-[#FAF7F2]/10 text-[11px] font-mono text-[#8E939D]">
          <span className="text-[#FAF7F2]">Java 21 · Spring Boot 3.2</span>
          <span className="text-[#DFC07A]">React 19 Console Client</span>
        </div>
      </div>
    );
  }

  if (id === 'nexus-engine') {
    return (
      <div className="w-full h-full min-h-[340px] sm:min-h-[420px] bg-[#18191B]/95 text-[#FAF7F2] p-6 sm:p-8 flex flex-col justify-between relative select-none overflow-hidden font-signature-sans group/visual">
        <div className="relative z-10 flex items-center justify-between border-b border-[#FAF7F2]/10 pb-4 font-mono text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#DFC07A]"></span>
            <span className="text-[#C4C8D0] text-[11px]">nexus-order-engine.internal</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 rounded bg-[#24262A] border border-[#FAF7F2]/10 text-[11px] text-[#FAF7F2]">
            <ShoppingBag className="w-3.5 h-3.5 text-[#DFC07A]" />
            <span>PostgreSQL Transaction Pool</span>
          </div>
        </div>

        <div className="relative z-10 grid grid-cols-2 gap-4 my-6">
          <div className="p-4 rounded-xl bg-[#24262A]/90 border border-[#C5A059]/25 shadow-sm">
            <span className="font-mono text-[10px] text-[#C4C8D0] tracking-widest uppercase block mb-1">
              INVENTORY LOCKING
            </span>
            <p className="font-signature-serif text-2xl font-light text-[#FAF7F2] mb-1">Pessimistic Write</p>
            <span className="text-xs text-[#DFC07A] font-mono">Race Condition Defeated</span>
          </div>

          <div className="p-4 rounded-xl bg-[#24262A]/90 border border-[#C5A059]/25 shadow-sm">
            <span className="font-mono text-[10px] text-[#C4C8D0] tracking-widest uppercase block mb-1">
              IDEMPOTENCY KEY
            </span>
            <p className="font-signature-serif text-2xl font-light text-[#FAF7F2] mb-1">UUIDv4 Verified</p>
            <span className="text-xs text-[#DFC07A] font-mono">Zero Duplicate Charges</span>
          </div>
        </div>

        <div className="relative z-10 p-3.5 rounded-xl bg-[#24262A] border border-[#FAF7F2]/10 flex items-center justify-between text-xs font-mono">
          <span className="text-[#C4C8D0]">Spring JPA Repository Hook</span>
          <span className="text-[#DFC07A] font-semibold flex items-center gap-1">
            <span>Payload Processed</span>
            <ArrowRight className="w-3 h-3" />
          </span>
        </div>
      </div>
    );
  }

  // lumina-interactive
  return (
    <div className="w-full h-full min-h-[340px] sm:min-h-[420px] bg-[#18191B]/95 text-[#FAF7F2] p-6 sm:p-8 flex flex-col justify-between relative select-none overflow-hidden font-signature-sans group/visual">
      <div className="relative z-10 flex items-center justify-between border-b border-[#FAF7F2]/10 pb-4 font-mono text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#DFC07A]"></span>
          <span className="text-[#FAF7F2] tracking-wider">LUMINA KINETIC LAB</span>
        </div>
        <span className="text-[10px] text-[#8E939D]">GSAP + LENIS ENGINE</span>
      </div>

      <div className="relative z-10 my-6 p-6 rounded-xl bg-[#24262A] border border-[#C5A059]/25 text-center">
        <h4 className="font-signature-serif text-3xl sm:text-4xl font-light text-[#FAF7F2] tracking-tight">
          Momentum &amp; <span className="text-gold-gradient italic">Inertia</span>
        </h4>
        <p className="font-signature-sans text-xs text-[#C4C8D0] mt-2 font-light">
          Mathematical inertia · Magnetic cursor anchors · Sub-millisecond latency
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-3 gap-2 text-[10px] font-mono">
        <div className="p-2.5 rounded-lg bg-[#24262A] border border-[#FAF7F2]/10 text-center text-[#FAF7F2]">
          <span className="text-[#8E939D] block">DAMPING</span>
          <span className="font-bold text-[#DFC07A]">24 MS</span>
        </div>
        <div className="p-2.5 rounded-lg bg-[#24262A] border border-[#FAF7F2]/10 text-center text-[#FAF7F2]">
          <span className="text-[#8E939D] block">LERP</span>
          <span className="font-bold text-[#DFC07A]">0.085</span>
        </div>
        <div className="p-2.5 rounded-lg bg-[#24262A] border border-[#FAF7F2]/10 text-center text-[#FAF7F2]">
          <span className="text-[#8E939D] block">FPS</span>
          <span className="font-bold text-[#DFC07A]">60.0</span>
        </div>
      </div>
    </div>
  );
};
