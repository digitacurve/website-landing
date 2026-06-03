'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Zap, BarChart3, HelpCircle, Code, Eye } from 'lucide-react';

export default function WhyChooseUs() {
  const points = [
    {
      title: 'No Bloated Templates',
      description: 'We never use pre-made WordPress themes or drag-and-drop builders that load hundreds of unused scripts. Every site is custom-coded using Next.js and Tailwind CSS for instant rendering speeds.',
      icon: Code,
    },
    {
      title: 'SEO-First From the Start',
      description: 'We integrate semantic schema tags, search-optimized heading hierarchies, canonical mappings, and image lazy loading directly into the code. Your site is search-ready from minute one.',
      icon: Zap,
    },
    {
      title: 'Laser CRO Conversion Focus',
      description: 'We strategically design visual hierarchies, floating contact triggers, fast inputs, and lead validation paths. We don’t just build pretty pages; we build automated lead pipelines.',
      icon: BarChart3,
    },
    {
      title: 'Google Quality Score Focus',
      description: 'By matching landing page copy precisely with search intent and maintaining high Lighthouse speeds, we help lower your average Cost-Per-Click (CPC) and improve ad rankings.',
      icon: ShieldCheck,
    },
    {
      title: '100% Direct Transparency',
      description: 'Work directly with expert developers and design specialists. Enjoy clear progress reports, direct communication channels, and zero hidden lock-in contracts.',
      icon: Eye,
    },
    {
      title: 'Unlimited Revisions',
      description: 'We stand behind our craft. We work with you iteratively, polishing copy, spacing, and animations, and we offer unlimited revisions during the design phase until it is flawless.',
      icon: HelpCircle,
    },
  ];

  const badges = [
    { value: '99+', label: 'Mobile PageSpeed' },
    { value: '-45%', label: 'Average CPA Reduction' },
    { value: '100%', label: 'Bespoke Code (No templates)' },
    { value: 'Zero', label: 'Lock-in Contracts' },
  ];

  return (
    <section id="why-choose-us" className="relative py-24 bg-slate-900 border-y border-white/5 overflow-hidden">
      {/* Background dot pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-50"></div>
      
      {/* Light blobs */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-orange-500/5 blur-[120px] pointer-events-none animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-80 h-80 rounded-full bg-blue-500/5 blur-[120px] pointer-events-none animate-pulse-slow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-500 text-xs font-bold uppercase tracking-wider">
            Why Digitacurve?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 tracking-tight leading-tight">
            How Custom Web Design Beats Cookie-Cutter Templates
          </h2>
          <p className="text-slate-400 mt-4 text-base sm:text-lg">
            Template sites load hundreds of bloated third-party dependencies that tank your speed and drive away mobile visitors. Here is how our custom-coded engineering sets you apart.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {points.map((point, index) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-panel p-6 sm:p-7 rounded-2xl border border-white/5 hover:border-orange-500/20 hover:bg-slate-900/60 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-950 border border-white/5 flex items-center justify-center mb-5 text-orange-500 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 tracking-tight group-hover:text-orange-400 transition-colors">
                  {point.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {point.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Counter / Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 border-t border-white/5 pt-16 text-center">
          {badges.map((badge, index) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center p-4 rounded-xl bg-slate-950/40 border border-white/[0.02]"
            >
              <span className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-400 font-sans tracking-tight">
                {badge.value}
              </span>
              <span className="text-xs sm:text-sm font-semibold text-slate-400 mt-2">
                {badge.label}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
