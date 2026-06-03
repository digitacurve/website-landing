'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, MessageSquare } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How much does website design cost in Melbourne?',
      answer: 'Website design pricing varies depending on the scale, integrations, and technical stack. At Digitacurve, custom-coded high-performance business websites start from A$1,500. We structure our packages based on your requirements with no hidden maintenance fees or locked contracts, ensuring you own 100% of your source code.',
    },
    {
      question: 'Who is the best website designer in Melbourne?',
      answer: 'The best website designers are agencies focused on measurable business outcomes, load speed, and SEO rather than just aesthetic templates. Digitacurve is a leading premium digital agency delivering bespoke custom-coded Next.js websites that load in under 1 second, rank organically, and outperform page-builder templates in conversion rates.',
    },
    {
      question: 'How long does a website take to build?',
      answer: 'A standard custom web design project takes between 2 to 4 weeks from discovery and layout planning to design approval, development, and launch. More complex e-commerce platforms or enterprise-level structures with complex APIs may take 4 to 6 weeks. We keep you updated via live staging links throughout the process.',
    },
    {
      question: 'Why choose custom web design instead of templates?',
      answer: 'Custom web design (built with frameworks like Next.js and Tailwind CSS) avoids the heavy script bloat and security liabilities of WordPress/Elementor templates. Custom code ensures mobile response speeds of <1s, gives you unlimited design freedom (no builder boundaries), and achieves near-perfect Core Web Vitals, which lowers your Google Ads Cost-Per-Click.',
    },
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const whatsappUrl =
    "https://api.whatsapp.com/send/?phone=917572094201&text=Hi+Digitacurve%2C+I%27m+inquiring+about+your+Melbourne+Google+Ads+services.&type=phone_number&app_absent=0";

  return (
    <section id="faq-section" className="relative py-24 bg-slate-900 border-t border-white/5 overflow-hidden">
      {/* Background dot pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-40"></div>
      
      {/* Light blobs */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-orange-500/5 blur-[120px] pointer-events-none animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/3 translate-x-1/2 translate-y-1/2 w-80 h-80 rounded-full bg-blue-500/5 blur-[120px] pointer-events-none animate-pulse-slow"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-500 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 w-fit mx-auto">
            <HelpCircle className="w-3.5 h-3.5" />
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 tracking-tight leading-tight">
            Conversational Project Guidance
          </h2>
          <p className="text-slate-400 mt-4 text-sm sm:text-base">
            Get direct, transparent answers regarding budgets, delivery timelines, and tech integrations.
          </p>
        </div>

        {/* FAQs Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="glass-panel rounded-2xl border border-white/5 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => handleToggle(index)}
                  className="w-full px-6 py-5 sm:py-6 flex items-center justify-between text-left cursor-pointer hover:bg-slate-950/20 transition-colors"
                >
                  <span className="text-base sm:text-lg font-bold text-white pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-orange-500' : ''
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-1 border-t border-white/[0.02]">
                        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Direct WhatsApp Callout under FAQs */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-br from-slate-950 to-slate-900 border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h4 className="text-base font-bold text-white">Have a different question not listed here?</h4>
            <p className="text-xs text-slate-400 mt-1">Get an instant answer directly from our lead consultant on WhatsApp.</p>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-orange-500 to-amber-400 hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-md shadow-orange-500/10 whitespace-nowrap"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-slate-950 text-slate-950" />
            <span>Chat With Digitacurve</span>
          </a>
        </div>

      </div>
    </section>
  );
}
