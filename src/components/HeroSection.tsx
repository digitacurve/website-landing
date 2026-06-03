'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BadgeCheck, Zap, Smartphone, Sparkles, Send, Lock, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function HeroSection() {
  const whatsappUrl =
    "https://api.whatsapp.com/send/?phone=917572094201&text=Hi+Digitacurve%2C+I%27m+inquiring+about+your+Melbourne+Google+Ads+services.&type=phone_number&app_absent=0";

  const [formState, setFormState] = useState<'idle' | 'loading' | 'success'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    website: '',
    service: 'Website Design',
    budget: 'A$1,500 – A$3,000',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.businessName.trim()) newErrors.businessName = 'Business is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    } else if (formData.phone.length < 8) {
      newErrors.phone = 'Invalid phone';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setFormState('loading');

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setFormState('success');
      
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#f97316', '#fbbf24', '#60a5fa', '#34d399', '#ffffff'],
      });

      setTimeout(() => {
        window.location.href = whatsappUrl;
      }, 2500);

    } catch (err) {
      setFormState('idle');
      console.error(err);
    }
  };

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-slate-950 bg-grid-pattern">
      {/* Background neon glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-orange-500/5 blur-3xl pointer-events-none animate-glow"></div>
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-80 h-80 rounded-full bg-blue-500/5 blur-3xl pointer-events-none animate-glow-blue"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-slate-900/10 border border-white/[0.01] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left pt-4 lg:pt-8">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-orange-500 text-xs font-bold uppercase tracking-wider mb-6 animate-pulse-slow"
            >
              <BadgeCheck className="w-4 h-4 text-orange-500" />
              <span>Melbourne-Based Custom Web Specialists</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] font-sans"
            >
              Website Designer <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-500 to-blue-400 glow-orange">
                Melbourne
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-5 text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed"
            >
              Digitacurve builds premium mobile-first websites for Melbourne businesses designed to generate more leads, trust, and conversions.
            </motion.p>

            {/* Bullet trust tags */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5 w-full max-w-lg text-left"
            >
              <div className="flex items-center gap-2">
                <Zap className="w-4.5 h-4.5 text-orange-500 flex-shrink-0" />
                <span className="text-slate-200 text-sm font-semibold">No Templates (Pure Next.js Speed)</span>
              </div>
              <div className="flex items-center gap-2">
                <Smartphone className="w-4.5 h-4.5 text-orange-500 flex-shrink-0" />
                <span className="text-slate-200 text-sm font-semibold">Mobile-First Response Layouts</span>
              </div>
              <div className="flex items-center gap-2">
                <BadgeCheck className="w-4.5 h-4.5 text-orange-500 flex-shrink-0" />
                <span className="text-slate-200 text-sm font-semibold">SEO & AI Search Optimized</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4.5 h-4.5 text-orange-500 flex-shrink-0" />
                <span className="text-slate-200 text-sm font-semibold">Unlimited Design Revisions</span>
              </div>
            </motion.div>

            {/* Google Ads Copy Alignment Tags */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-6 flex flex-wrap gap-2 justify-center lg:justify-start"
            >
              {['Websites That Win Clients', 'Convert Visitors Into Customers', 'SEO-Ready From Day One'].map((badge) => (
                <span key={badge} className="px-2.5 py-1 rounded bg-slate-900 border border-white/5 text-slate-400 text-[10px] font-bold font-mono">
                  {badge}
                </span>
              ))}
            </motion.div>

            {/* Hero Left CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-4 w-full"
            >
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-xl text-sm sm:text-base font-extrabold text-slate-950 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg shadow-orange-500/25 active:scale-95 group gap-2"
              >
                <Smartphone className="w-4 h-4" />
                <span>Get Free Quote on WhatsApp</span>
              </a>

              <a
                href="#services-section"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-sm sm:text-base font-bold text-slate-300 bg-slate-900 border border-white/10 hover:bg-slate-800 transition-all active:scale-95 gap-1.5"
              >
                <span>Learn Our Services</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </a>
            </motion.div>
          </div>

          {/* Hero Right Lead Generation Form Card (Desktop: Right, Mobile: Stacks Below) */}
          <div id="hero-lead-form" className="lg:col-span-5 relative w-full flex justify-center lg:sticky lg:top-24">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full max-w-md xl:max-w-lg"
            >
              <div className="glass-panel p-5 sm:p-6 rounded-2xl border border-white/10 relative overflow-hidden shadow-2xl w-full">
                <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-orange-500 via-amber-500 to-blue-500"></div>

                {formState === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12 flex flex-col items-center justify-center"
                  >
                    <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-5 animate-pulse">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-black text-white">Strategy Request Submitted!</h3>
                    <p className="text-slate-300 mt-2 max-w-sm leading-relaxed text-xs">
                      Thank you! We have logged your details. We are now redirecting you to WhatsApp to start your instant web consultation...
                    </p>
                    <div className="mt-8 flex items-center gap-2 text-[10px] text-slate-500 font-bold uppercase tracking-wider font-mono">
                      <div className="w-2 h-2 rounded-full bg-orange-500 animate-ping"></div>
                      Connecting to WhatsApp...
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 text-left">
                    <div className="text-center mb-4">
                      <span className="px-2 py-0.5 rounded-full bg-orange-500/10 text-orange-500 text-[9px] font-bold uppercase tracking-wider flex items-center gap-1 w-fit mx-auto">
                        <Sparkles className="w-3 h-3" />
                        Free Strategy Session
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-white mt-1.5 leading-tight tracking-tight">
                        Claim Your Website Consultation
                      </h3>
                      <p className="text-[10px] text-slate-400 mt-0.5">
                        Tell us about your project and we’ll recommend a free wireframe strategy.
                      </p>
                    </div>

                    {/* Compact Inputs Grid */}
                    {/* Row 1: Name & Business */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div className="relative w-full">
                        <input
                          type="text"
                          id="hero-name-input"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder=" "
                          className={`peer w-full px-3 py-2.5 pt-4.5 rounded-xl bg-slate-950/80 border ${
                            errors.name ? 'border-rose-500' : 'border-white/10'
                          } text-white outline-none focus:border-orange-500/50 hover:border-white/20 transition-all font-sans text-xs`}
                        />
                        <label
                          htmlFor="hero-name-input"
                          className="absolute text-[9px] font-bold text-slate-500 duration-300 transform -translate-y-2.5 scale-90 top-3.5 z-10 origin-[0] left-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-2.5 peer-focus:text-orange-500 uppercase tracking-wider"
                        >
                          Full Name <span className="text-orange-500">*</span>
                        </label>
                        {errors.name && <span className="text-[9px] text-rose-500 mt-0.5 block font-semibold">{errors.name}</span>}
                      </div>

                      <div className="relative w-full">
                        <input
                          type="text"
                          id="hero-business-input"
                          name="businessName"
                          value={formData.businessName}
                          onChange={handleChange}
                          placeholder=" "
                          className={`peer w-full px-3 py-2.5 pt-4.5 rounded-xl bg-slate-950/80 border ${
                            errors.businessName ? 'border-rose-500' : 'border-white/10'
                          } text-white outline-none focus:border-orange-500/50 hover:border-white/20 transition-all font-sans text-xs`}
                        />
                        <label
                          htmlFor="hero-business-input"
                          className="absolute text-[9px] font-bold text-slate-500 duration-300 transform -translate-y-2.5 scale-90 top-3.5 z-10 origin-[0] left-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-2.5 peer-focus:text-orange-500 uppercase tracking-wider"
                        >
                          Business Name <span className="text-orange-500">*</span>
                        </label>
                        {errors.businessName && <span className="text-[9px] text-rose-500 mt-0.5 block font-semibold">{errors.businessName}</span>}
                      </div>
                    </div>

                    {/* Row 2: Email & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div className="relative w-full">
                        <input
                          type="email"
                          id="hero-email-input"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder=" "
                          className={`peer w-full px-3 py-2.5 pt-4.5 rounded-xl bg-slate-950/80 border ${
                            errors.email ? 'border-rose-500' : 'border-white/10'
                          } text-white outline-none focus:border-orange-500/50 hover:border-white/20 transition-all font-sans text-xs`}
                        />
                        <label
                          htmlFor="hero-email-input"
                          className="absolute text-[9px] font-bold text-slate-500 duration-300 transform -translate-y-2.5 scale-90 top-3.5 z-10 origin-[0] left-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-2.5 peer-focus:text-orange-500 uppercase tracking-wider"
                        >
                          Email Address <span className="text-orange-500">*</span>
                        </label>
                        {errors.email && <span className="text-[9px] text-rose-500 mt-0.5 block font-semibold">{errors.email}</span>}
                      </div>

                      <div className="relative w-full">
                        <input
                          type="tel"
                          id="hero-phone-input"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder=" "
                          className={`peer w-full px-3 py-2.5 pt-4.5 rounded-xl bg-slate-950/80 border ${
                            errors.phone ? 'border-rose-500' : 'border-white/10'
                          } text-white outline-none focus:border-orange-500/50 hover:border-white/20 transition-all font-sans text-xs`}
                        />
                        <label
                          htmlFor="hero-phone-input"
                          className="absolute text-[9px] font-bold text-slate-500 duration-300 transform -translate-y-2.5 scale-90 top-3.5 z-10 origin-[0] left-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-2.5 peer-focus:text-orange-500 uppercase tracking-wider"
                        >
                          Phone Number <span className="text-orange-500">*</span>
                        </label>
                        {errors.phone && <span className="text-[9px] text-rose-500 mt-0.5 block font-semibold">{errors.phone}</span>}
                      </div>
                    </div>

                    {/* Row 3: Website URL */}
                    <div className="relative w-full">
                      <input
                        type="text"
                        id="hero-website-input"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        placeholder=" "
                        className="peer w-full px-3 py-2.5 pt-4.5 rounded-xl bg-slate-950/80 border border-white/10 text-white outline-none focus:border-orange-500/50 hover:border-white/20 transition-all font-sans text-xs"
                      />
                      <label
                        htmlFor="hero-website-input"
                        className="absolute text-[9px] font-bold text-slate-500 duration-300 transform -translate-y-2.5 scale-90 top-3.5 z-10 origin-[0] left-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-2.5 peer-focus:text-orange-500 uppercase tracking-wider"
                      >
                        Website URL <span className="text-slate-500 font-medium">(Optional)</span>
                      </label>
                    </div>

                    {/* Row 4: Dropdowns */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div className="flex flex-col text-left">
                        <label htmlFor="hero-service-sel" className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-1.5 ml-1">
                          Services Needed
                        </label>
                        <select
                          id="hero-service-sel"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-3 py-2 rounded-xl bg-slate-950/80 border border-white/10 text-white outline-none focus:border-orange-500/50 hover:border-white/20 transition-all font-sans text-xs cursor-pointer"
                        >
                          <option value="Website Design">Website Design</option>
                          <option value="Website Redesign">Website Redesign</option>
                          <option value="Ecommerce Website">Ecommerce Website</option>
                          <option value="Shopify Store">Shopify Store</option>
                          <option value="Landing Page Design">Landing Page Design</option>
                          <option value="SEO">SEO</option>
                          <option value="Google Ads">Google Ads</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>

                      <div className="flex flex-col text-left">
                        <label htmlFor="hero-budget-sel" className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-1.5 ml-1">
                          Project Budget
                        </label>
                        <select
                          id="hero-budget-sel"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full px-3 py-2 rounded-xl bg-slate-950/80 border border-white/10 text-white outline-none focus:border-orange-500/50 hover:border-white/20 transition-all font-sans text-xs cursor-pointer"
                        >
                          <option value="Under A$1,500">Under A$1,500</option>
                          <option value="A$1,500 – A$3,000">A$1,500 – A$3,000</option>
                          <option value="A$3,000 – A$5,000">A$3,000 – A$5,000</option>
                          <option value="A$5,000+">A$5,000+</option>
                        </select>
                      </div>
                    </div>

                    {/* Row 5: Message */}
                    <div className="relative w-full">
                      <textarea
                        id="hero-msg-input"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={2}
                        placeholder=" "
                        className={`peer w-full px-3 py-2.5 pt-4.5 rounded-xl bg-slate-950/80 border ${
                          errors.message ? 'border-rose-500' : 'border-white/10'
                        } text-white outline-none focus:border-orange-500/50 hover:border-white/20 transition-all font-sans text-xs resize-none`}
                      ></textarea>
                      <label
                        htmlFor="hero-msg-input"
                        className="absolute text-[9px] font-bold text-slate-500 duration-300 transform -translate-y-2.5 scale-90 top-3.5 z-10 origin-[0] left-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-2.5 peer-focus:text-orange-500 uppercase tracking-wider"
                      >
                        Tell Us About Your Project <span className="text-orange-500">*</span>
                      </label>
                      {errors.message && <span className="text-[9px] text-rose-500 mt-0.5 block font-semibold">{errors.message}</span>}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={formState === 'loading'}
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-extrabold text-slate-950 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-md shadow-orange-500/10 cursor-pointer active:scale-[0.99] disabled:opacity-50 mt-1"
                    >
                      {formState === 'loading' ? (
                        <>
                          <div className="w-4.5 h-4.5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></div>
                          <span>Processing Details...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5 text-slate-950" />
                          <span>Get Free Strategy recommendation</span>
                        </>
                      )}
                    </button>

                    {/* Privacy notice */}
                    <div className="flex items-center justify-center gap-1 text-[9px] text-slate-500 font-bold uppercase tracking-wider mt-1">
                      <Lock className="w-3 h-3 text-slate-500" />
                      <span>100% Secure. Zero Sales Spam.</span>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
