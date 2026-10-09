'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, Sparkles } from 'lucide-react';
import { useState } from 'react';
import Contact3DElement from './Contact3DElement';

const contactInfo = [
  { icon: Mail, title: 'Email Directly', details: ['hello@abc.com', 'partnerships@abc.com'], description: 'Average response under 2 hours', gradient: 'from-red-600 to-red-500' },
  { icon: Phone, title: 'Direct Phone', details: ['+1 (555) 123-4567', '+1 (555) 987-6543'], description: 'Mon-Fri 9am-6pm EST', gradient: 'from-red-600 to-red-500' },
  { icon: MapPin, title: 'Global Headquarters', details: ['123 Digital Street', 'Tech City, TC 12345'], description: 'Innovation District', gradient: 'from-red-600 to-red-500' },
  { icon: Clock, title: 'Dedicated Support', details: ['24/7 Priority for Retainers', 'Daily Slack Channel Sync'], description: 'Always accessible', gradient: 'from-red-600 to-red-500' },
];

const inputCls = [
  'w-full px-4 py-3.5 rounded-xl text-white text-sm placeholder-gray-500',
  'bg-white/5 border border-white/10',
  'focus:outline-none focus:border-red-500 focus:bg-black/60 focus:ring-1 focus:ring-red-500/50',
  'transition-all duration-200',
].join(' ');

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '$5,000 - $10,000/mo',
    service: 'seo',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="relative py-28 bg-background overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[420px] h-[420px] bg-red-600/10 rounded-full blur-[140px] opacity-60" />
        <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-red-900/20 rounded-full blur-[140px] opacity-50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <span className="inline-block text-red-400 font-bold text-xs uppercase tracking-[0.2em] mb-4 bg-red-500/10 px-3.5 py-1.5 rounded-full border border-red-500/20">
            Start Your Growth Sprint
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-5 font-poppins">
            Ready to Multiply Your Revenue?
            <span className="block gradient-text">Request a Free Growth Audit</span>
          </h2>
          <p className="text-lg text-gray-400">
            Tell us about your acquisition bottlenecks. Our senior strategists will analyze your market and deliver a custom blueprint.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-8 sm:p-10 border border-white/10"
          >
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-red-500/20 text-red-400 rounded-full flex items-center justify-center mx-auto border border-red-500/40">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="text-2xl font-black text-white font-poppins">Audit Request Received!</h3>
                <p className="text-gray-300 text-sm max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="text-red-400 font-semibold">{formData.name}</span>. One of our growth directors is analyzing your digital presence and will be in touch within 2 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-xs font-semibold text-gray-400 hover:text-white underline cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-2 mb-6">
                  <Sparkles className="w-5 h-5 text-red-500" />
                  <h3 className="text-xl font-bold text-white font-poppins">Direct Consultation Request</h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-gray-300 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className={inputCls}
                        placeholder="Elon Musk"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-gray-300 mb-1.5">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={inputCls}
                        placeholder="elon@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="company" className="block text-xs font-semibold text-gray-300 mb-1.5">
                        Company Name / URL
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className={inputCls}
                        placeholder="Acme Corp (acme.com)"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-xs font-semibold text-gray-300 mb-1.5">
                        Primary Service
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className={inputCls}
                      >
                        <option value="seo" className="bg-gray-900">SEO &amp; Organic Dominance</option>
                        <option value="ppc" className="bg-gray-900">Paid Media &amp; PPC</option>
                        <option value="social" className="bg-gray-900">Social Media &amp; Content Engine</option>
                        <option value="web-design" className="bg-gray-900">Next.js Web Design &amp; CRO</option>
                        <option value="automation" className="bg-gray-900">Marketing Automation &amp; CRM</option>
                        <option value="all" className="bg-gray-900">Full-Funnel Omnichannel Growth</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-xs font-semibold text-gray-300 mb-1.5">
                      Estimated Monthly Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className={inputCls}
                    >
                      <option value="$2,500 - $5,000/mo" className="bg-gray-900">$2,500 - $5,000 / month</option>
                      <option value="$5,000 - $10,000/mo" className="bg-gray-900">$5,000 - $10,000 / month</option>
                      <option value="$10,000 - $25,000/mo" className="bg-gray-900">$10,000 - $25,000 / month</option>
                      <option value="$25,000+/mo" className="bg-gray-900">$25,000+ / month (Enterprise)</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-gray-300 mb-1.5">
                      Current Goals &amp; Pain Points *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className={`${inputCls} resize-none`}
                      placeholder="Describe what you want to achieve (e.g. increase organic leads by 3x, scale Google Ads ROAS, redesign web platform)..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-red-600 to-red-500 text-white py-4 rounded-xl font-bold text-base glow-btn flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-red-600/30"
                  >
                    <Send size={18} />
                    <span>Submit Free Audit Request</span>
                  </motion.button>
                </form>
              </>
            )}
          </motion.div>

          {/* Contact Info & Guarantees */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6 relative"
          >
            {/* 3D Background Element */}
            <Contact3DElement />

            <div className="relative z-10">
              <h3 className="text-xl font-bold text-white mb-2 font-poppins">Get Direct Access to Decision Makers</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Skip the generic sales gatekeepers. You will connect directly with strategists who examine your real market opportunities.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="glass-card rounded-xl p-5 border border-white/5"
                >
                  <div className={`w-9 h-9 bg-gradient-to-br ${info.gradient} rounded-xl flex items-center justify-center mb-3 shadow-md shadow-red-600/20`}>
                    <info.icon className="w-4 h-4 text-white" />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-0.5 font-poppins">{info.title}</h4>
                  <p className="text-gray-500 text-[11px] mb-2">{info.description}</p>
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-gray-300 text-xs font-semibold">{detail}</p>
                  ))}
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass-strong rounded-2xl p-7 relative overflow-hidden border border-red-500/30 bg-black/70 shadow-2xl z-10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent pointer-events-none rounded-2xl" />
              <div className="relative z-10">
                <span className="text-xs font-bold text-red-400 uppercase tracking-wider block mb-1">
                  100% Risk-Free Guarantee
                </span>
                <h4 className="text-lg font-bold text-white mb-2 font-poppins">Our 30-Day Growth Benchmark</h4>
                <p className="text-gray-300 text-xs mb-4 leading-relaxed">
                  Every engagement starts with mutually agreed KPIs. If we don&rsquo;t demonstrate clear progress against those milestones in month one, we work for free until we hit them.
                </p>
                <div className="flex items-center gap-2 text-xs font-semibold text-gray-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>Verified 98% Client Satisfaction Rate</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
