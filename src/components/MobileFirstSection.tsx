'use client';

import { motion } from 'framer-motion';
import { Smartphone, Zap, CheckCircle2, MessageSquare } from 'lucide-react';

export default function MobileFirstSection() {
  const whatsappUrl =
    "https://api.whatsapp.com/send/?phone=917572094201&text=Hi+Digitacurve%2C+I%27m+inquiring+about+your+Melbourne+Google+Ads+services.&type=phone_number&app_absent=0";

  return (
    <section className="relative py-24 bg-slate-900 border-t border-white/5 overflow-hidden">
      {/* Background dot pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-40"></div>
      
      {/* Light blobs */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-blue-500/5 blur-[120px] pointer-events-none animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/3 translate-x-1/2 translate-y-1/2 w-80 h-80 rounded-full bg-orange-500/5 blur-[120px] pointer-events-none animate-pulse-slow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Mobile phone mock graphic column */}
          <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-72 h-[550px] bg-slate-950 rounded-[40px] border-4 border-slate-800 shadow-2xl p-3 flex flex-col justify-between overflow-hidden"
            >
              {/* Phone ear speaker & camera notch */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 h-5 w-32 bg-slate-950 rounded-full flex items-center justify-center z-20">
                <div className="w-12 h-1 bg-slate-800 rounded-full"></div>
                <div className="w-2 h-2 bg-slate-900 rounded-full ml-3 border border-white/5"></div>
              </div>

              {/* Dynamic screen display content */}
              <div className="w-full h-full bg-slate-950 rounded-[30px] border border-white/5 p-4 pt-8 flex flex-col justify-between relative overflow-hidden">
                {/* Background grid */}
                <div className="absolute inset-0 bg-grid-pattern opacity-30 z-0"></div>

                {/* Internal UI */}
                <div className="relative z-10 flex flex-col gap-4 text-left">
                  {/* Top header row */}
                  <div className="flex items-center justify-between border-b border-white/5 pb-2">
                    <span className="text-[10px] font-black text-white">DIGITACURVE</span>
                    <span className="text-[9px] text-emerald-400 font-bold px-1.5 py-0.5 rounded bg-emerald-500/10">Active</span>
                  </div>

                  {/* Visual hero */}
                  <div>
                    <h4 className="text-sm font-black text-white leading-tight">
                      Web Design Built For <span className="text-orange-500">Melbourne</span>
                    </h4>
                    <p className="text-[9px] text-slate-400 mt-1 leading-relaxed">
                      Instant load speeds, premium custom components, and direct WhatsApp CRO hooks.
                    </p>
                  </div>

                  {/* Core KPI cards */}
                  <div className="space-y-2">
                    <div className="p-2.5 bg-slate-900/90 border border-white/5 rounded-xl flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <Zap className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-[9px] font-bold text-slate-300">Page Speed</span>
                      </div>
                      <span className="text-xs font-black text-emerald-400 font-mono">0.6s</span>
                    </div>

                    <div className="p-2.5 bg-slate-900/90 border border-white/5 rounded-xl flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <Smartphone className="w-3.5 h-3.5 text-blue-400" />
                        <span className="text-[9px] font-bold text-slate-300">Mobile Score</span>
                      </div>
                      <span className="text-xs font-black text-blue-400 font-mono">99%</span>
                    </div>
                  </div>

                  {/* Mock lead form teaser */}
                  <div className="p-3 bg-slate-900/90 border border-white/5 rounded-xl flex flex-col gap-1.5">
                    <div className="w-full h-2 bg-slate-950 rounded border border-white/5"></div>
                    <div className="w-full h-2 bg-slate-950 rounded border border-white/5"></div>
                    <div className="w-full h-5 bg-gradient-to-r from-orange-500 to-amber-500 rounded flex items-center justify-center">
                      <span className="text-[8px] text-slate-950 font-black">Submit Strategy Request</span>
                    </div>
                  </div>
                </div>

                {/* Floating WhatsApp CTA inside phone mockup */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 w-full p-2.5 bg-emerald-500 hover:bg-emerald-600 rounded-xl flex items-center justify-center gap-1.5 text-slate-950 font-extrabold text-[10px] shadow-lg shadow-emerald-500/20 active:scale-95 transition-transform"
                >
                  <MessageSquare className="w-3 h-3 text-slate-950 fill-slate-950" />
                  <span>Get Free Quote on WhatsApp</span>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Copy description column */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left order-1 lg:order-2">
            <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-500 text-xs font-bold uppercase tracking-wider">
              Mobile-First Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 tracking-tight leading-tight">
              60%+ of Melbourne Paid Traffic is Mobile.
            </h2>
            <p className="text-slate-300 mt-5 text-base sm:text-lg leading-relaxed">
              Mobile screen visitors make decisions fast. If your page takes longer than 2.5 seconds to open on 4G networks, over 40% of click budget is instantly wasted.
            </p>
            <p className="text-slate-400 mt-4 text-sm leading-relaxed">
              Digitacurve constructs lean, CSS-optimized components built from the ground up to render flawlessly on mobile viewport dimensions. We make sure conversion paths are always within thumb-reach.
            </p>

            <div className="mt-8 space-y-4 w-full max-w-xl text-left">
              <div className="flex items-start gap-3 p-4 bg-slate-950/40 border border-white/[0.03] rounded-xl">
                <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Thumb-Reach Conversion Anchors</h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Sticky mobile bottom CTA widgets enable customers to launch direct WhatsApp consultations with a single tap, bypassing complicated multi-step menus.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-slate-950/40 border border-white/[0.03] rounded-xl">
                <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Reduced Bounce Rates</h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    By purging heavy code libraries, we guarantee mobile response speeds that reduce traffic abandonment, lowering your overall Cost-Per-Acquisition.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
