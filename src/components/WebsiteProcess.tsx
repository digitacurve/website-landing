'use client';

import { motion } from 'framer-motion';
import { Search, Compass, Cpu, LineChart, Rocket } from 'lucide-react';

export default function WebsiteProcess() {
  const steps = [
    {
      num: '01',
      title: 'Discovery & Search Strategy',
      description: 'We map out your Melbourne business competitors, target search intent clusters, and conversion funnels. This establishes the structural blueprint for your site architecture.',
      icon: Search,
    },
    {
      num: '02',
      title: 'High-Fidelity Custom Design',
      description: 'Our design specialists build premium custom mockups in a dark premium or bespoke brand layout. We refine the visual feel iteratively with you, offering unlimited revisions.',
      icon: Compass,
    },
    {
      num: '03',
      title: 'Custom Next.js Development',
      description: 'We translate approved designs into semantic, responsive code using React, Next.js App Router, and Tailwind CSS. This ensures clean, lightning-fast execution without templates.',
      icon: Cpu,
    },
    {
      num: '04',
      title: 'SEO & Speed Performance Tuning',
      description: 'We audit Core Web Vitals to achieve 99+ mobile speed. We inject JSON-LD local schemas, customize meta titles, configure headings, and ensure semantic readiness for AI engines.',
      icon: LineChart,
    },
    {
      num: '05',
      title: 'Conversion Launch & Tracking',
      description: 'We install conversion tracking triggers (leads logging, WhatsApp clicks), execute cross-device rendering audits, hook up form submissions, and push the live site to Vercel/AWS.',
      icon: Rocket,
    },
  ];

  return (
    <section id="website-process" className="relative py-24 bg-slate-950 bg-grid-pattern border-t border-white/5">
      {/* Glow blobs */}
      <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-80 h-80 rounded-full bg-orange-500/5 blur-[120px] pointer-events-none animate-pulse-slow"></div>
      <div className="absolute bottom-1/3 left-1/4 translate-y-1/2 w-80 h-80 rounded-full bg-blue-500/5 blur-[120px] pointer-events-none animate-pulse-slow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-500 text-xs font-bold uppercase tracking-wider">
            Our Work Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 tracking-tight leading-tight">
            How We Build Web Structures That Convert
          </h2>
          <p className="text-slate-400 mt-4 text-base sm:text-lg">
            We employ a rigorous, developer-driven engineering process designed to secure high Quality Scores, fast load speeds, and organic search superiority.
          </p>
        </div>

        {/* Process Steps Timeline */}
        <div className="relative">
          {/* Vertical line connecting steps (hidden on mobile, visible on desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-orange-500 via-amber-500 to-blue-500 -translate-x-1/2"></div>

          <div className="space-y-16 lg:space-y-24">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={step.num}
                  className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 relative ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Timeline point (center dot) */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-slate-950 border-2 border-orange-500 items-center justify-center text-xs font-bold text-orange-500 z-10 shadow-lg shadow-orange-500/20 font-mono">
                    {step.num}
                  </div>

                  {/* Left/Right Side Block (Content Card) */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -25 : 25 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                    className="w-full lg:w-[45%] text-left"
                  >
                    <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/5 hover:border-orange-500/20 transition-all duration-300 relative group">
                      {/* Step number badge (visible on mobile layout inside card) */}
                      <span className="lg:hidden absolute top-4 right-4 text-3xl font-black text-white/[0.04] font-mono">
                        {step.num}
                      </span>
                      
                      <div className="w-10 h-10 rounded-xl bg-slate-950 border border-white/5 flex items-center justify-center mb-5 text-orange-500 group-hover:scale-105 transition-transform duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-orange-400 transition-colors">
                        {step.title}
                      </h3>
                      
                      <p className="text-slate-300 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>

                  {/* Empty matching column on the other side for spacing */}
                  <div className="hidden lg:block w-[45%]"></div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
