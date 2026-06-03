'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Lock, Sparkles, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function LeadFormSection() {
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
    if (!formData.name.trim()) newErrors.name = 'Full Name is required';
    if (!formData.businessName.trim()) newErrors.businessName = 'Business Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone Number is required';
    } else if (formData.phone.length < 8) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.message.trim()) newErrors.message = 'Message details are required';
    
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

    // Simulate submission (or post to a backend log)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      setFormState('success');
      
      // Trigger confetti fireworks
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#f97316', '#fbbf24', '#60a5fa', '#34d399', '#ffffff'],
      });

      // Redirect to WhatsApp link after a short duration
      setTimeout(() => {
        window.location.href = whatsappUrl;
      }, 2500);

    } catch (err) {
      setFormState('idle');
      console.error(err);
    }
  };

  return (
    <section id="lead-form-section" className="relative py-24 bg-slate-950 bg-grid-pattern border-t border-white/5">
      {/* Background glow blobs */}
      <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-80 h-80 rounded-full bg-blue-500/5 blur-[120px] pointer-events-none animate-pulse-slow"></div>
      <div className="absolute bottom-1/3 left-1/4 translate-y-1/2 w-80 h-80 rounded-full bg-orange-500/5 blur-[120px] pointer-events-none animate-pulse-slow"></div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-500 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 w-fit mx-auto">
            <Sparkles className="w-3.5 h-3.5" />
            Claim Your Free Web Consultation
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 tracking-tight leading-tight">
            Start Your Custom Project
          </h2>
          <p className="text-slate-300 mt-4 text-base">
            Tell us about your project and we’ll send you a free strategy recommendation within 24 hours.
          </p>
        </div>

        {/* Form Container */}
        <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-white/10 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-orange-500 via-amber-500 to-blue-500"></div>

          {formState === 'success' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-10 flex flex-col items-center justify-center"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6 animate-pulse">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-white">Strategy Request Submitted!</h3>
              <p className="text-slate-300 mt-3 max-w-md leading-relaxed text-sm">
                Thank you! We have logged your project information. We are now redirecting you to WhatsApp to start your instant consultation with our lead Melbourne developer...
              </p>
              <div className="mt-8 flex items-center gap-2 text-xs text-slate-500 font-bold uppercase tracking-wider font-mono">
                <div className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-ping"></div>
                Redirecting to WhatsApp...
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 text-left">
              {/* Row 1: Name & Business */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label htmlFor="form-name" className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Full Name <span className="text-orange-500 font-black">*</span>
                  </label>
                  <input
                    type="text"
                    id="form-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. John Doe"
                    className={`w-full px-4 py-3.5 rounded-xl bg-slate-950/80 border ${
                      errors.name ? 'border-rose-500' : 'border-white/10'
                    } text-white placeholder-slate-500 outline-none focus:border-orange-500/50 hover:border-white/20 transition-all font-sans text-sm`}
                  />
                  {errors.name && <span className="text-xs text-rose-500 mt-1 font-semibold">{errors.name}</span>}
                </div>

                <div className="flex flex-col">
                  <label htmlFor="form-businessName" className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Business Name <span className="text-orange-500 font-black">*</span>
                  </label>
                  <input
                    type="text"
                    id="form-businessName"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    placeholder="e.g. Melbourne Enterprises"
                    className={`w-full px-4 py-3.5 rounded-xl bg-slate-950/80 border ${
                      errors.businessName ? 'border-rose-500' : 'border-white/10'
                    } text-white placeholder-slate-500 outline-none focus:border-orange-500/50 hover:border-white/20 transition-all font-sans text-sm`}
                  />
                  {errors.businessName && <span className="text-xs text-rose-500 mt-1 font-semibold">{errors.businessName}</span>}
                </div>
              </div>

              {/* Row 2: Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label htmlFor="form-email" className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Email Address <span className="text-orange-500 font-black">*</span>
                  </label>
                  <input
                    type="email"
                    id="form-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. john@business.com.au"
                    className={`w-full px-4 py-3.5 rounded-xl bg-slate-950/80 border ${
                      errors.email ? 'border-rose-500' : 'border-white/10'
                    } text-white placeholder-slate-500 outline-none focus:border-orange-500/50 hover:border-white/20 transition-all font-sans text-sm`}
                  />
                  {errors.email && <span className="text-xs text-rose-500 mt-1 font-semibold">{errors.email}</span>}
                </div>

                <div className="flex flex-col">
                  <label htmlFor="form-phone" className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Phone Number <span className="text-orange-500 font-black">*</span>
                  </label>
                  <input
                    type="tel"
                    id="form-phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. +61 400 000 000"
                    className={`w-full px-4 py-3.5 rounded-xl bg-slate-950/80 border ${
                      errors.phone ? 'border-rose-500' : 'border-white/10'
                    } text-white placeholder-slate-500 outline-none focus:border-orange-500/50 hover:border-white/20 transition-all font-sans text-sm`}
                  />
                  {errors.phone && <span className="text-xs text-rose-500 mt-1 font-semibold">{errors.phone}</span>}
                </div>
              </div>

              {/* Row 3: Website URL */}
              <div className="flex flex-col">
                <label htmlFor="form-website" className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Current Website URL <span className="text-slate-500 font-medium">(Optional)</span>
                </label>
                <input
                  type="text"
                  id="form-website"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  placeholder="e.g. www.mybusiness.com.au"
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-950/80 border border-white/10 text-white placeholder-slate-500 outline-none focus:border-orange-500/50 hover:border-white/20 transition-all font-sans text-sm"
                />
              </div>

              {/* Row 4: Service & Budget dropdowns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label htmlFor="form-service" className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Services Needed <span className="text-orange-500 font-black">*</span>
                  </label>
                  <select
                    id="form-service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-950/80 border border-white/10 text-white outline-none focus:border-orange-500/50 hover:border-white/20 transition-all font-sans text-sm cursor-pointer"
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

                <div className="flex flex-col">
                  <label htmlFor="form-budget" className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Project Budget <span className="text-orange-500 font-black">*</span>
                  </label>
                  <select
                    id="form-budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-950/80 border border-white/10 text-white outline-none focus:border-orange-500/50 hover:border-white/20 transition-all font-sans text-sm cursor-pointer"
                  >
                    <option value="Under A$1,500">Under A$1,500</option>
                    <option value="A$1,500 – A$3,000">A$1,500 – A$3,000</option>
                    <option value="A$3,000 – A$5,000">A$3,000 – A$5,000</option>
                    <option value="A$5,000+">A$5,000+</option>
                  </select>
                </div>
              </div>

              {/* Row 5: Message */}
              <div className="flex flex-col">
                <label htmlFor="form-message" className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Tell Us About Your Project <span className="text-orange-500 font-black">*</span>
                </label>
                <textarea
                  id="form-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Describe your goals, desired timelines, and integrations..."
                  className={`w-full px-4 py-3.5 rounded-xl bg-slate-950/80 border ${
                    errors.message ? 'border-rose-500' : 'border-white/10'
                  } text-white placeholder-slate-500 outline-none focus:border-orange-500/50 hover:border-white/20 transition-all font-sans text-sm resize-none`}
                ></textarea>
                {errors.message && <span className="text-xs text-rose-500 mt-1 font-semibold">{errors.message}</span>}
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={formState === 'loading'}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-extrabold text-slate-950 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg shadow-orange-500/20 cursor-pointer active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed mt-2"
              >
                {formState === 'loading' ? (
                  <>
                    <div className="w-5 h-5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></div>
                    <span>Processing Details...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 text-slate-950" />
                    <span>Get Free Strategy Recommendation</span>
                  </>
                )}
              </button>

              {/* Privacy Footer */}
              <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 font-bold uppercase tracking-wider pt-1.5">
                <Lock className="w-3.5 h-3.5 text-slate-500" />
                <span>100% Secure. We respect your email privacy.</span>
              </div>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
