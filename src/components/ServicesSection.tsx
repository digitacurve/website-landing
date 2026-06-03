'use client';

import { motion } from 'framer-motion';
import { Layout, ShoppingCart, Target, ChevronRight } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      title: 'Bespoke Custom Web Design',
      tag: 'website designer melbourne',
      description: 'Fully custom-coded, high-performance websites built from the ground up without restrictive templates. Perfect for established brands needing speed, scalability, and premium design.',
      keywords: ['custom web design melbourne', 'web design agency melbourne'],
      icon: Layout,
      color: 'from-orange-500 to-amber-500',
      bullets: [
        'Bespoke hand-crafted layouts (No templates)',
        'Built with Next.js & Tailwind CSS for speeds < 1s',
        'SEO-ready structure from day one',
        'Unlimited revisions until you are 100% satisfied',
      ],
      btnText: 'Start Your Custom Project',
    },
    {
      title: 'E-commerce & Shopify Stores',
      tag: 'shopify & e-commerce',
      description: 'High-conversion retail experiences and custom Shopify store builds configured to turn cold traffic into recurring checkouts. Integrates seamlessly with payment portals and CRM software.',
      keywords: ['small business website design melbourne', 'ecommerce website melbourne'],
      icon: ShoppingCart,
      color: 'from-blue-400 to-blue-600',
      bullets: [
        'Shopify Plus & custom storefront integrations',
        'Fast checkout flows and abandoned cart setup',
        'Mobile commerce optimization for mobile buyers',
        'Inventory sync and multi-currency routing',
      ],
      btnText: 'Start Your E-commerce Build',
    },
    {
      title: 'High-Conversion Landing Pages',
      tag: 'web design melbourne',
      description: 'Laser-focused single-page layouts designed explicitly for Google Ads, Facebook Ads, and LinkedIn campaigns. Built to lower Cost-Per-Acquisition (CPA) and boost conversion rates.',
      keywords: ['landing page design melbourne', 'web design melbourne'],
      icon: Target,
      color: 'from-amber-400 to-orange-500',
      bullets: [
        'Optimized for maximum Google Ads Quality Score',
        'Rigorous A/B testing structure configuration',
        'Integrated WhatsApp CTAs and lead logs',
        'Fast page speeds reducing click bounce rates',
      ],
      btnText: 'Get Landing Page Quote',
    },
  ];

  const handleScrollToForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.getElementById('lead-form-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="services-section" className="relative py-24 bg-slate-950 bg-grid-pattern border-t border-white/5">
      {/* Background decoration */}
      <div className="absolute top-0 right-1/4 -translate-y-1/2 w-72 h-72 rounded-full bg-blue-500/5 blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 translate-y-1/2 w-72 h-72 rounded-full bg-orange-500/5 blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-500 text-xs font-bold uppercase tracking-wider">
            Premium Design Offerings
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 tracking-tight leading-tight">
            How Do You Scale Your Melbourne Business Online?
          </h2>
          <p className="text-slate-400 mt-4 text-base sm:text-lg">
            We build custom, performance-tuned web structures engineered around your sales funnel. Choose the targeted approach that matches your project goals.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group flex flex-col justify-between rounded-2xl glass-panel p-6 sm:p-8 border border-white/5 transition-all duration-300 hover:border-orange-500/30 hover:shadow-lg hover:shadow-orange-500/[0.02] hover:-translate-y-1 relative overflow-hidden"
              >
                <div>
                  {/* Icon + Title block */}
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 border border-white/5 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white tracking-tight leading-tight">
                        {service.title}
                      </h3>
                      <p className="text-[10px] text-orange-500 font-bold uppercase tracking-wider mt-0.5">
                        {service.tag}
                      </p>
                    </div>
                  </div>

                  {/* Target Match Badge */}
                  <div className="mb-6 p-3 rounded-lg bg-slate-950 border border-white/[0.03]">
                    <p className="text-[9px] uppercase font-bold text-slate-500 tracking-wider mb-2">
                      TARGET SEARCH MATCHES:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {service.keywords.map((kw) => (
                        <span
                          key={kw}
                          className="text-[9px] bg-slate-900 text-slate-300 border border-white/5 px-2 py-0.5 rounded font-mono font-medium"
                        >
                          &quot;{kw}&quot;
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-3.5 mb-8 text-left">
                    {service.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2.5">
                        <ChevronRight className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5 group-hover:translate-x-0.5 transition-transform" />
                        <span className="text-slate-300 text-sm leading-snug">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button inside card */}
                <button
                  onClick={handleScrollToForm}
                  className="w-full inline-flex items-center justify-center px-5 py-3 rounded-xl text-sm font-bold text-white bg-slate-900 border border-white/10 group-hover:border-orange-500/30 group-hover:bg-slate-800 transition-all cursor-pointer active:scale-98"
                >
                  <span>{service.btnText}</span>
                  <ChevronRight className="w-4 h-4 ml-1.5 text-slate-400 group-hover:text-orange-500 group-hover:translate-x-0.5 transition-all" />
                </button>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
