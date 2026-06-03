'use client';

import { motion } from 'framer-motion';
import { Scale, HeartPulse, Building2, ShoppingBag, Hammer, Briefcase } from 'lucide-react';

export default function IndustriesServed() {
  const industries = [
    {
      title: 'Professional Services',
      description: 'Law firms, financial consultants, accounting practices, and business agencies seeking to construct high-trust pipelines that convert searchers into client retainers.',
      icon: Scale,
    },
    {
      title: 'Medical & Healthcare',
      description: 'Private clinics, dentists, physiotherapists, and medical practitioners requiring HIPAA/Privacy compliant, fast-booking sites optimized for local patient capture.',
      icon: HeartPulse,
    },
    {
      title: 'E-commerce Brands',
      description: 'Apparel labels, boutique retail stores, and custom manufacturing outlets looking to scale their digital transactions using high-speed custom storefront solutions.',
      icon: ShoppingBag,
    },
    {
      title: 'Real Estate & Property',
      description: 'Residential brokerages, property developers, and buyer agencies needing dynamic mapping tools, fast load portfolios, and high-fidelity project listings.',
      icon: Building2,
    },
    {
      title: 'Local Trade Services',
      description: 'Building contractors, custom plumbers, commercial electricians, and landscaping designers aiming to out-market local competitors and secure phone calls.',
      icon: Hammer,
    },
    {
      title: 'Consultancies & B2B',
      description: 'Technology consultants, corporate trainers, SaaS platforms, and enterprise advisors seeking authority positioning and direct discovery call bookings.',
      icon: Briefcase,
    },
  ];

  return (
    <section className="relative py-24 bg-slate-950 bg-grid-pattern border-t border-white/5">
      {/* Light blobs */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 rounded-full bg-blue-500/5 blur-[120px] pointer-events-none animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 left-1/4 translate-x-1/2 translate-y-1/2 w-80 h-80 rounded-full bg-orange-500/5 blur-[120px] pointer-events-none animate-pulse-slow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-500 text-xs font-bold uppercase tracking-wider">
            Sectors We Support
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 tracking-tight leading-tight">
            Tailored Solutions For Every Industry
          </h2>
          <p className="text-slate-400 mt-4 text-base sm:text-lg">
            We adapt visual languages, technical elements, and copywriting strategies to fit the expectations and intent of your industry&apos;s specific target audience.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((ind, index) => {
            const Icon = ind.icon;
            return (
              <motion.div
                key={ind.title}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-panel p-6 sm:p-7 rounded-2xl border border-white/5 hover:border-orange-500/25 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-white/5 flex items-center justify-center mb-5 text-orange-500 group-hover:scale-105 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 tracking-tight group-hover:text-orange-400 transition-colors">
                  {ind.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {ind.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
