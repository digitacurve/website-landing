'use client';

import { useState, useEffect } from 'react';
import { MessageSquare, ArrowRight } from 'lucide-react';

export default function Widgets() {
  const [isVisible, setIsVisible] = useState(false);

  const whatsappUrl =
    "https://api.whatsapp.com/send/?phone=917572094201&text=Hi+Digitacurve%2C+I%27m+inquiring+about+your+Melbourne+Google+Ads+services.&type=phone_number&app_absent=0";

  useEffect(() => {
    const handleScroll = () => {
      // Show floating buttons once user scrolls past 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Floating WhatsApp Button (Heartbeat pulse animation) */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className={`fixed bottom-6 right-6 z-40 p-4 rounded-full bg-emerald-500 hover:bg-emerald-600 text-slate-950 shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0 pointer-events-none'
        } ${
          // Push button higher on mobile to clear the sticky footer
          'max-sm:bottom-20'
        }`}
      >
        <span className="relative flex items-center justify-center">
          {/* Ring pulse */}
          <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping z-0"></span>
          <MessageSquare className="w-6 h-6 text-slate-950 fill-slate-950 relative z-10" />
        </span>
      </a>

      {/* Sticky Mobile Bottom CTA Bar (Only visible on mobile screens) */}
      <div
        className={`sm:hidden fixed bottom-0 left-0 right-0 z-40 p-3 bg-slate-950/90 backdrop-blur-md border-t border-white/5 transition-all duration-300 ease-in-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3.5 px-5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 active:scale-95 transition-transform"
        >
          <MessageSquare className="w-4.5 h-4.5 fill-slate-950 text-slate-950" />
          <span>Get Free Quote on WhatsApp</span>
          <ArrowRight className="w-4 h-4 ml-1 stroke-[2.5]" />
        </a>
      </div>
    </>
  );
}
