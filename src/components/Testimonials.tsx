'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: 'James Anderson',
      role: 'Founder',
      company: 'Melbourne Legal Advisory',
      quote: 'Digitacurve rebuilt our legacy website on Next.js. The difference is night and day. Mobile inquiries increased by 140% in the first month, and our Google Ads Quality Scores jumped to 9/10, significantly lowering our CPC.',
      metric: '+140% Lead Inquiries',
      stars: 5,
    },
    {
      name: 'Sarah Chen',
      role: 'Marketing Director',
      company: 'Aura Boutique Australia',
      quote: 'We hired Digitacurve to design a custom Shopify store storefront. The page speed score is 99 on mobile, and the user interface feels incredibly premium. It has helped us acquire customers for far less than our old WooCommerce site.',
      metric: '99 Mobile PageSpeed',
      stars: 5,
    },
    {
      name: 'Marcus Croft',
      role: 'Director',
      company: 'Croft Structural Group',
      quote: 'Most web design agencies in Melbourne just wrap template builders in expensive contracts. Digitacurve coded a custom speed machine. The floating WhatsApp widget and clean lead form convert visitors immediately.',
      metric: '4.5x Conversion ROI',
      stars: 5,
    },
  ];

  return (
    <section className="relative py-24 bg-slate-900 border-t border-white/5 overflow-hidden">
      {/* Background dot pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30"></div>
      
      {/* Light blobs */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-orange-500/5 blur-[120px] pointer-events-none animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-80 h-80 rounded-full bg-blue-500/5 blur-[120px] pointer-events-none animate-pulse-slow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-500 text-xs font-bold uppercase tracking-wider">
            Client Success Proof
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 tracking-tight leading-tight">
            Websites That Win Customers & Leads
          </h2>
          <p className="text-slate-400 mt-4 text-base sm:text-lg">
            Hear from Melbourne business owners who upgraded their digital presence from slow builder templates to custom Next.js engineering.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/5 hover:border-orange-500/20 transition-all duration-300 relative flex flex-col justify-between text-left group"
            >
              <div>
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 text-white/[0.03] group-hover:text-orange-500/5 transition-colors">
                  <Quote className="w-12 h-12 stroke-[1.5]" />
                </div>

                {/* Stars */}
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(review.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-orange-500 fill-orange-500" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-slate-200 text-sm sm:text-base italic leading-relaxed mb-6">
                  &quot;{review.quote}&quot;
                </p>
              </div>

              {/* Client Info Block */}
              <div className="border-t border-white/5 pt-5 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white tracking-tight">{review.name}</h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">{review.role}, {review.company}</p>
                </div>
                <div className="px-2.5 py-1 rounded-lg bg-orange-500/10 text-orange-500 text-[10px] font-bold font-mono">
                  {review.metric}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
