'use client';

import { motion } from 'framer-motion';
import { Search, Brain, Volume2, Sparkles, Check } from 'lucide-react';

export default function SeoReadySection() {
  const pillars = [
    {
      title: 'Google SEO Engine Ready',
      description: 'We code custom semantic HTML5 structures, configure precise meta hierarchies, set up canonical URL links, and write robots mappings to ensure Google bots crawl your pages flawlessly.',
      icon: Search,
    },
    {
      title: 'AI Search Optimization (AEO)',
      description: 'AI answer engines like ChatGPT, Gemini, Claude, and Perplexity query web data differently. We structure our sections using clean question-answer patterns to maximize citations.',
      icon: Brain,
    },
    {
      title: 'Voice Search optimized',
      description: 'Most voice queries are natural questions (e.g., "Who is the best website designer in Melbourne?"). We map direct, long-tail conversational answers directly into the FAQ schema code.',
      icon: Volume2,
    },
  ];

  return (
    <section className="relative py-24 bg-slate-950 bg-grid-pattern border-t border-white/5">
      {/* Background glow blobs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-orange-500/5 blur-[90px] pointer-events-none animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-72 h-72 rounded-full bg-blue-500/5 blur-[90px] pointer-events-none animate-pulse-slow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Column 1: Copy details */}
          <div className="lg:col-span-6 text-left">
            <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-500 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 w-fit">
              <Sparkles className="w-3.5 h-3.5" />
              SEO + AI + Voice Readiness
            </span>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 tracking-tight leading-tight">
              Rank in Organic Search. <br />
              Be Cited by ChatGPT & Gemini.
            </h2>
            
            <p className="text-slate-300 mt-5 text-base leading-relaxed">
              Standard web builders ignore technical search parameters because they prioritize visual drag-and-drop features. At Digitacurve, we write search optimization directly into the core code.
            </p>
            
            <p className="text-slate-400 mt-4 text-sm leading-relaxed">
              We build using Next.js App Router for server-rendered HTML, providing search crawlers with immediate access to structured text. This aligns your pages with both traditional keyword parameters and conversational AI retrieval models.
            </p>

            <div className="mt-8 space-y-3.5">
              {[
                'Schema Markups (LocalBusiness, Services, FAQPage)',
                '100% Core Web Vitals compliance (Green scores)',
                'Optimized heading structures with high keyword relevancy',
                'Fast-loading semantic layouts optimized for LLM scrapers',
              ].map((bullet) => (
                <div key={bullet} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-orange-500/15 flex items-center justify-center text-orange-500 flex-shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span className="text-sm font-semibold text-slate-300">{bullet}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Tech pillars cards */}
          <div className="lg:col-span-6 grid grid-cols-1 gap-6">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-orange-500/20 transition-all duration-300 flex flex-col sm:flex-row gap-5 text-left group"
                >
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-white/5 flex items-center justify-center text-orange-500 group-hover:scale-105 transition-transform flex-shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2 tracking-tight group-hover:text-orange-400 transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
