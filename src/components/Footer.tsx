'use client';

import { ArrowRight, MessageSquare, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const whatsappUrl =
    "https://api.whatsapp.com/send/?phone=917572094201&text=Hi+Digitacurve%2C+I%27m+inquiring+about+your+Melbourne+Google+Ads+services.&type=phone_number&app_absent=0";

  const socialLinks = [
    { 
      name: 'Facebook', 
      href: 'https://www.facebook.com/people/DigitaCurve/61586495587348/', 
      icon: ({ className }: { className?: string }) => (
        <svg className={`${className} fill-current`} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.8z"/>
        </svg>
      )
    },
    { 
      name: 'Instagram', 
      href: 'https://www.instagram.com/digitacurve/', 
      icon: ({ className }: { className?: string }) => (
        <svg className={`${className} stroke-current fill-none`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
        </svg>
      )
    },
    { 
      name: 'LinkedIn', 
      href: 'https://www.linkedin.com/in/rishabhjaisal0425/', 
      icon: ({ className }: { className?: string }) => (
        <svg className={`${className} fill-current`} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      )
    },
  ];

  return (
    <>
      {/* FINAL CTA SECTION */}
      <section className="relative py-24 bg-slate-950 border-t border-white/5 overflow-hidden">
        {/* Background glow blobs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-orange-500/5 blur-[130px] pointer-events-none animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-500 text-xs font-bold uppercase tracking-wider">
            Let&apos;s Collaborate
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-6 tracking-tight leading-tight">
            Ready to Build a Website <br />
            That Brings You More Leads?
          </h2>
          <p className="text-slate-300 mt-5 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Let’s create a premium, high-speed website custom-designed to scale your Melbourne business.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-extrabold text-slate-950 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-xl shadow-orange-500/25 active:scale-95 group gap-2"
            >
              <MessageSquare className="w-5 h-5 fill-slate-950 text-slate-950" />
              <span>Get Free Quote on WhatsApp</span>
              <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 border-t border-white/5 pt-16 pb-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
            
            {/* Column 1: Brand details */}
            <div className="md:col-span-5 text-left">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="group flex items-center"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="/logo.png" 
                  alt="Digitacurve Logo" 
                  className="h-16 sm:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
                />
              </a>
              
              <p className="text-slate-400 mt-4 text-sm leading-relaxed max-w-sm">
                Digitacurve is a premium digital agency engineering custom-coded, high-performance web structures for ambitious businesses. No templates, no bloat, just absolute conversion performance.
              </p>

              {/* Social Channels */}
              <div className="flex items-center gap-3 mt-6">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-lg bg-slate-900 border border-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:border-orange-500/30 transition-all"
                      aria-label={`Follow us on ${social.name}`}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Column 2: Contact Info */}
            <div className="md:col-span-4 text-left">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-5">Get In Touch</h3>
              <div className="space-y-4">
                <a
                  href="mailto:sale@digitacurve.com"
                  className="flex items-center gap-3 text-slate-300 hover:text-orange-500 transition-colors text-sm group"
                >
                  <Mail className="w-4.5 h-4.5 text-slate-500 group-hover:text-orange-500" />
                  <span>sale@digitacurve.com</span>
                </a>
                <a
                  href="tel:+917572094201"
                  className="flex items-center gap-3 text-slate-300 hover:text-orange-500 transition-colors text-sm group"
                >
                  <Phone className="w-4.5 h-4.5 text-slate-500 group-hover:text-orange-500" />
                  <span>+91 75720 94201</span>
                </a>
                <div className="flex items-start gap-3 text-slate-300 text-sm">
                  <MapPin className="w-4.5 h-4.5 text-slate-500 mt-0.5" />
                  <span>
                    Sector 62, <br />
                    Noida, Uttar Pradesh 201309, India
                  </span>
                </div>
              </div>
            </div>

            {/* Column 3: Trust Badge / Links */}
            <div className="md:col-span-3 text-left">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-5">Melbourne Support</h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Serving local businesses in Melbourne, Victoria, and across Australia.
              </p>
              <div className="p-4 rounded-xl bg-slate-900 border border-white/5 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-500 flex-shrink-0 font-bold">
                  ★
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Customer Rating</div>
                  <div className="text-xs font-bold text-white">4.9/5 Star Rating</div>
                </div>
              </div>
            </div>

          </div>

          {/* Copyright line */}
          <div className="border-t border-white/5 pt-8 mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <div>
              © {new Date().getFullYear()} Digitacurve. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a href="https://digitacurve.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                Main Website
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
