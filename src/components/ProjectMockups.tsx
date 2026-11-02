import React from 'react';
import { Shield, Key, Bell, CheckCircle2, ShoppingBag, ArrowRight, Layout, Sliders, Cpu, Activity } from 'lucide-react';

interface MockupProps {
  theme: 'security' | 'ecommerce' | 'creative';
}

export const ProjectMockup: React.FC<MockupProps> = ({ theme }) => {
  if (theme === 'security') {
    return (
      <div className="w-full h-full min-h-[300px] sm:min-h-[360px] bg-[#161715] p-5 sm:p-7 flex flex-col justify-between select-none relative overflow-hidden group/canvas font-mono">
        {/* Subtle decorative grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#252623_1px,transparent_1px),linear-gradient(to_bottom,#252623_1px,transparent_1px)] bg-[size:24px_24px] opacity-25" />

        {/* Browser / Application Top Bar */}
        <div className="relative z-10 flex items-center justify-between border-b border-[#2A2B28] pb-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#343532]"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#343532]"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#343532]"></span>
            <span className="ml-2 text-[#77766F] text-[11px] font-sans">c4secure.internal/platform</span>
          </div>
          <div className="flex items-center gap-2 text-[10px] text-[#C97858] font-mono bg-[#20211F] px-2.5 py-0.5 rounded border border-[#343532]">
            <Shield className="w-3 h-3 text-[#C97858]" />
            <span>SPRING_SECURITY · RBAC_OK</span>
          </div>
        </div>

        {/* Dashboard Grid Interface Simulation */}
        <div className="relative z-10 grid grid-cols-12 gap-3 my-4">
          {/* Main Security Hub Card */}
          <div className="col-span-12 sm:col-span-7 bg-[#20211F]/90 rounded-lg p-4 border border-[#343532] shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] text-[#77766F] uppercase tracking-wider font-mono">Authentication Gateway</span>
              <span className="text-[10px] text-[#4ADE80] flex items-center gap-1 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80] animate-pulse"></span>
                ACTIVE
              </span>
            </div>

            <div className="space-y-2 text-xs">
              <div className="p-2.5 rounded bg-[#161715] border border-[#2A2B28] flex items-center justify-between">
                <div className="flex items-center gap-2 text-[#F8F7F3]">
                  <Key className="w-3.5 h-3.5 text-[#C97858]" />
                  <span className="font-mono text-[11px]">JWT Auth Filter &amp; Session</span>
                </div>
                <span className="text-[9px] text-[#77766F] font-mono">HMAC256</span>
              </div>

              <div className="p-2.5 rounded bg-[#161715] border border-[#2A2B28] flex items-center justify-between">
                <div className="flex items-center gap-2 text-[#F8F7F3]">
                  <Activity className="w-3.5 h-3.5 text-[#C97858]" />
                  <span className="font-mono text-[11px]">Installation Dispatch Scheduler</span>
                </div>
                <span className="text-[9px] text-[#77766F] font-mono">Async Jobs</span>
              </div>
            </div>
          </div>

          {/* Right Metrics / Notification Feed Card */}
          <div className="col-span-12 sm:col-span-5 bg-[#20211F]/90 rounded-lg p-4 border border-[#343532] flex flex-col justify-between shadow-sm">
            <div>
              <span className="text-[10px] text-[#77766F] uppercase tracking-wider font-mono block mb-2">Event Pipeline</span>
              <div className="space-y-1.5 text-[10px]">
                <div className="flex items-center gap-1.5 text-[#F8F7F3]">
                  <CheckCircle2 className="w-3 h-3 text-[#4ADE80]" />
                  <span>Hardware Order #4920</span>
                </div>
                <div className="flex items-center gap-1.5 text-[#77766F]">
                  <Bell className="w-3 h-3 text-[#C97858]" />
                  <span>Dispatcher Notified</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-[#2A2B28] flex items-center justify-between text-[10px] text-[#77766F] font-mono">
              <span>DB: MySQL Cluster</span>
              <span className="text-[#C97858]">0.8ms latency</span>
            </div>
          </div>
        </div>

        {/* Bottom Platform Status Bar */}
        <div className="relative z-10 flex items-center justify-between pt-2 border-t border-[#2A2B28] text-[10px] text-[#77766F]">
          <span className="font-mono">REST: 18 Endpoints Defined</span>
          <span className="text-[#F8F7F3] font-mono">React 19 Frontend Client</span>
        </div>
      </div>
    );
  }

  if (theme === 'ecommerce') {
    return (
      <div className="w-full h-full min-h-[300px] sm:min-h-[360px] bg-[#EAE7E0]/70 p-5 sm:p-7 flex flex-col justify-between select-none relative overflow-hidden group/canvas">
        {/* Subtle dot pattern */}
        <div className="absolute inset-0 bg-radial from-[#20211F]/5 to-transparent bg-[size:16px_16px]" />

        {/* Top Header Mockup */}
        <div className="relative z-10 flex items-center justify-between border-b border-[#DCD9D1] pb-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#DCD9D1]"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#DCD9D1]"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#DCD9D1]"></span>
            <span className="ml-2 text-xs font-mono text-[#77766F]">nexus-commerce.store</span>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#F8F7F3] border border-[#DCD9D1] text-[11px] font-mono text-[#20211F]">
            <ShoppingBag className="w-3 h-3 text-[#C97858]" />
            <span>Cart: 3 items</span>
          </div>
        </div>

        {/* Product Grid Mockup */}
        <div className="relative z-10 grid grid-cols-2 gap-3 my-4">
          <div className="p-3.5 rounded-lg bg-[#F8F7F3] border border-[#DCD9D1] shadow-sm">
            <div className="w-full aspect-video rounded bg-[#EAE7E0] mb-2.5 flex items-center justify-center text-[#77766F]">
              <span className="font-mono text-[10px] tracking-widest uppercase">Catalog Item 01</span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="font-semibold text-[#20211F]">Architectural Lamp</span>
              <span className="font-mono text-[#C97858] font-medium">$145</span>
            </div>
            <span className="text-[10px] text-[#77766F] block mt-0.5">JPA Stock Sync: Instant</span>
          </div>

          <div className="p-3.5 rounded-lg bg-[#F8F7F3] border border-[#DCD9D1] shadow-sm">
            <div className="w-full aspect-video rounded bg-[#EAE7E0] mb-2.5 flex items-center justify-center text-[#77766F]">
              <span className="font-mono text-[10px] tracking-widest uppercase">Catalog Item 02</span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="font-semibold text-[#20211F]">Ceramic Vessel</span>
              <span className="font-mono text-[#C97858] font-medium">$88</span>
            </div>
            <span className="text-[10px] text-[#77766F] block mt-0.5">PostgreSQL ACID Safety</span>
          </div>
        </div>

        {/* Bottom checkout workflow preview */}
        <div className="relative z-10 p-3 rounded-lg bg-[#F8F7F3] border border-[#DCD9D1] flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C97858]"></span>
            <span className="font-mono text-[11px] text-[#20211F]">Checkout API Pipeline</span>
          </div>
          <div className="flex items-center gap-1 font-mono text-[11px] text-[#C97858]">
            <span>Payload Validated</span>
            <ArrowRight className="w-3 h-3" />
          </div>
        </div>
      </div>
    );
  }

  // theme === 'creative'
  return (
    <div className="w-full h-full min-h-[300px] sm:min-h-[360px] bg-[#20211F] p-5 sm:p-7 flex flex-col justify-between select-none relative overflow-hidden group/canvas">
      {/* Dynamic diagonal artistic lines */}
      <div className="absolute inset-0 opacity-15">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="0" x2="100%" y2="100%" stroke="#F8F7F3" strokeWidth="1" strokeDasharray="4 6" />
          <line x1="100%" y1="0" x2="0" y2="100%" stroke="#C97858" strokeWidth="1" strokeDasharray="4 6" />
          <circle cx="50%" cy="50%" r="80" stroke="#F8F7F3" strokeWidth="1" fill="none" />
        </svg>
      </div>

      {/* Top Controls Mockup */}
      <div className="relative z-10 flex items-center justify-between border-b border-[#343532] pb-3 text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#C97858]"></span>
          <span className="text-[#F8F7F3] font-display font-medium text-xs tracking-wider">LUMINA STUDIO</span>
        </div>
        <div className="flex items-center gap-2 text-[10px] font-mono text-[#77766F]">
          <span>60 FPS</span>
          <span>·</span>
          <span>FLUID ENGINE</span>
        </div>
      </div>

      {/* Center Interactive Motion Canvas Illustration */}
      <div className="relative z-10 my-4 p-4 rounded-lg bg-[#161715]/80 border border-[#343532] text-center">
        <div className="font-display text-2xl sm:text-3xl font-extrabold text-[#F8F7F3] tracking-tighter mb-2">
          FLUID<span className="text-[#C97858]">.MOTION</span>
        </div>
        <p className="font-mono text-[11px] text-[#77766F] max-w-xs mx-auto">
          Spring physics · Responsive typography clamps · Gesture tracking
        </p>
      </div>

      {/* Bottom parameter dials */}
      <div className="relative z-10 grid grid-cols-3 gap-2 text-[10px] font-mono">
        <div className="p-2 rounded bg-[#161715] border border-[#2A2B28] flex items-center gap-1.5 text-[#F8F7F3]">
          <Sliders className="w-3 h-3 text-[#C97858]" />
          <span>DAMPING: 28</span>
        </div>
        <div className="p-2 rounded bg-[#161715] border border-[#2A2B28] flex items-center gap-1.5 text-[#F8F7F3]">
          <Cpu className="w-3 h-3 text-[#C97858]" />
          <span>STIFF: 300</span>
        </div>
        <div className="p-2 rounded bg-[#161715] border border-[#2A2B28] flex items-center gap-1.5 text-[#F8F7F3]">
          <Layout className="w-3 h-3 text-[#C97858]" />
          <span>CLAMP: FLUID</span>
        </div>
      </div>
    </div>
  );
};
