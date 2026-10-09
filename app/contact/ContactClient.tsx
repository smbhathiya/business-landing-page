'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Sparkles,
  ChevronDown,
  Building,
  Shield,
  MessageSquare,
} from 'lucide-react';
import Contact3DElement from '../../components/Contact3DElement';

const contactInfo = [
  {
    icon: Mail,
    title: 'Direct Strategic Email',
    details: ['hello@abc.com', 'partnerships@abc.com'],
    note: 'Inquiries answered in under 2 hours',
  },
  {
    icon: Phone,
    title: 'Direct Phone & SMS',
    details: ['+1 (555) 123-4567', '+1 (555) 987-6543'],
    note: 'Monday – Friday, 9am – 6pm EST',
  },
  {
    icon: MapPin,
    title: 'Global Headquarters',
    details: ['123 Digital Street', 'Tech City, TC 12345'],
    note: 'Innovation & Media District',
  },
  {
    icon: Clock,
    title: 'Operating SLA',
    details: ['Dedicated Slack Channels', '24/7 Monitoring for Retainers'],
    note: 'Guaranteed rapid response',
  },
];

const consultationFaqs = [
  {
    q: 'What actually happens during the free 30-minute growth consultation?',
    a: 'We skip generic sales slide decks. A Senior Growth Director will review your current search visibility, ad account structure, competitor benchmarks, and provide 3 immediate, high-impact tactical recommendations you can execute immediately.',
  },
  {
    q: 'Do you sign non-disclosure agreements (NDAs) before reviewing our accounts?',
    a: 'Yes. We routinely work with proprietary business models, enterprise software platforms, and sensitive financial metrics. We are happy to execute standard or custom mutual NDAs prior to accessing your analytics.',
  },
  {
    q: 'How quickly can our growth sprint launch after agreement?',
    a: 'Once onboarding access is granted to your Google Search Console, ad accounts, and analytics, our team begins forensic auditing within 48 hours and deploys your initial sprint roadmap within 7 business days.',
  },
  {
    q: 'Can we schedule an in-person meeting at your office?',
    a: 'Yes! Our Tech City headquarters is open for client planning sessions, quarterly board reviews, and strategy workshops by appointment.',
  },
];

const inputCls = [
  'w-full px-4 py-3.5 rounded-xl text-white text-sm placeholder-gray-500',
  'bg-white/5 border border-white/10',
  'focus:outline-none focus:border-red-500 focus:bg-black/60 focus:ring-1 focus:ring-red-500/50',
  'transition-all duration-200',
].join(' ');

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
    budget: '$5,000 - $10,000/mo',
    timeline: 'Immediately (Next 1-2 weeks)',
    service: 'seo',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="relative pb-28">
      {/* 3D Visual Accent */}
      <div className="relative h-20 -mt-10 overflow-hidden pointer-events-none">
        <Contact3DElement />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* Contact Form and Information Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-8 sm:p-12 border border-white/10 relative">
              {submitted ? (
                <div className="text-center py-16 space-y-4">
                  <div className="w-16 h-16 bg-red-500/20 text-red-400 rounded-full flex items-center justify-center mx-auto border border-red-500/40">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="text-2xl font-black text-white font-poppins">Consultation Request Confirmed</h3>
                  <p className="text-gray-300 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-red-400 font-semibold">{formData.name}</span>. One of our Senior Growth Strategists is reviewing {formData.company || 'your project'} and will email you with available calendar slots within 2 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-xs font-semibold text-gray-400 hover:text-white underline cursor-pointer"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <>
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-5 h-5 text-red-500" />
                    <span className="text-xs font-bold text-red-400 uppercase tracking-wider">
                      Discovery Questionnaire
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-white mb-2 font-poppins">
                    Request Your Free Strategy Audit
                  </h2>
                  <p className="text-gray-400 text-xs mb-8">
                    Fill out the parameters below so we can tailor our initial forensic audit to your exact business model.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-xs font-semibold text-gray-300 mb-1.5">
                          Your Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className={inputCls}
                          placeholder="Jane Doe"
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
                          placeholder="jane@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="company" className="block text-xs font-semibold text-gray-300 mb-1.5">
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className={inputCls}
                          placeholder="Acme Technologies"
                        />
                      </div>
                      <div>
                        <label htmlFor="website" className="block text-xs font-semibold text-gray-300 mb-1.5">
                          Website URL *
                        </label>
                        <input
                          type="text"
                          id="website"
                          name="website"
                          value={formData.website}
                          onChange={handleChange}
                          required
                          className={inputCls}
                          placeholder="https://acme.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="service" className="block text-xs font-semibold text-gray-300 mb-1.5">
                          Primary Growth Focus
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className={inputCls}
                        >
                          <option value="seo" className="bg-gray-900">SEO &amp; Search Dominance</option>
                          <option value="ppc" className="bg-gray-900">Paid Media (Google &amp; Meta Ads)</option>
                          <option value="web-design" className="bg-gray-900">Next.js Web Redesign &amp; CRO</option>
                          <option value="content" className="bg-gray-900">Content Strategy &amp; Inbound</option>
                          <option value="automation" className="bg-gray-900">Lifecycle Automation &amp; CRM</option>
                          <option value="all" className="bg-gray-900">Full-Funnel Omnichannel Sprint</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="budget" className="block text-xs font-semibold text-gray-300 mb-1.5">
                          Target Monthly Investment
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className={inputCls}
                        >
                          <option value="$2,500 - $5,000/mo" className="bg-gray-900">$2,500 – $5,000 / month</option>
                          <option value="$5,000 - $10,000/mo" className="bg-gray-900">$5,000 – $10,000 / month (Recommended)</option>
                          <option value="$10,000 - $25,000/mo" className="bg-gray-900">$10,000 – $25,000 / month</option>
                          <option value="$25,000+/mo" className="bg-gray-900">$25,000+ / month (Enterprise)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="timeline" className="block text-xs font-semibold text-gray-300 mb-1.5">
                        Anticipated Start Timeline
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className={inputCls}
                      >
                        <option value="Immediately (Next 1-2 weeks)" className="bg-gray-900">Immediately (Next 1-2 weeks)</option>
                        <option value="Within 30 days" className="bg-gray-900">Within 30 days</option>
                        <option value="Next Quarter" className="bg-gray-900">Next Quarter</option>
                        <option value="Exploring & Budgeting" className="bg-gray-900">Exploring options &amp; annual budgeting</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs font-semibold text-gray-300 mb-1.5">
                        Current Acquisition Bottlenecks &amp; Growth Goals *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className={`${inputCls} resize-none`}
                        placeholder="Tell us what you want to achieve (e.g., scale pipeline from $1M to $5M, fix technical SEO indexing drops, reduce paid CPA)..."
                      />
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-red-600 to-red-500 text-white py-4 rounded-xl font-bold text-base glow-btn flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-red-600/30"
                    >
                      <Send size={18} />
                      <span>Submit Discovery Request</span>
                    </motion.button>
                  </form>
                </>
              )}
            </div>
          </div>

          {/* Contact Details & Headquarters Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((info) => (
                <div key={info.title} className="glass-card rounded-2xl p-5 border border-white/5">
                  <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-500 rounded-xl flex items-center justify-center text-white mb-3 shadow-md shadow-red-600/20">
                    <info.icon size={18} />
                  </div>
                  <h3 className="text-xs font-bold text-white mb-1 font-poppins">{info.title}</h3>
                  <div className="space-y-0.5 mb-2">
                    {info.details.map((d) => (
                      <p key={d} className="text-xs font-semibold text-gray-300">{d}</p>
                    ))}
                  </div>
                  <p className="text-[10px] text-gray-500">{info.note}</p>
                </div>
              ))}
            </div>

            {/* Headquarters Visual Card */}
            <div className="glass-strong rounded-3xl p-8 border border-white/10 bg-black/60 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-red-600/15 rounded-full blur-[70px] pointer-events-none" />
              <div className="flex items-center gap-2 mb-4 text-xs font-bold text-red-400 uppercase tracking-wider">
                <Building size={16} />
                <span>Headquarters Location</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 font-poppins">Tech City Innovation Campus</h3>
              <p className="text-xs text-gray-300 leading-relaxed mb-6">
                123 Digital Street, Suite 400<br />
                Tech City, TC 12345, United States
              </p>

              <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-2 text-xs">
                <div className="flex justify-between text-gray-400">
                  <span>In-Person Meetings:</span>
                  <span className="text-white font-medium">By Appointment</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Client Parking:</span>
                  <span className="text-white font-medium">Reserved On-Site</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Airport Transit:</span>
                  <span className="text-white font-medium">15 min from TCX</span>
                </div>
              </div>
            </div>

            {/* Confidentiality Guarantee */}
            <div className="glass-card rounded-2xl p-6 border border-red-500/20 bg-red-950/20 flex items-start gap-3">
              <Shield className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-white mb-1">Strict Confidentiality Policy</h4>
                <p className="text-[11px] text-gray-300 leading-relaxed">
                  All audit requests, proprietary data, and marketing metrics are held in strict confidence under our agency mutual NDA terms.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Consultation FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-red-400 font-bold text-xs uppercase tracking-[0.2em] mb-4 bg-red-500/10 px-3.5 py-1.5 rounded-full border border-red-500/20">
              Clear Expectations
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 font-poppins">
              Consultation FAQ
            </h2>
          </div>

          <div className="space-y-4">
            {consultationFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={faq.q} className="glass-card rounded-2xl border border-white/5 overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="text-base font-bold text-white font-poppins">{faq.q}</span>
                    <ChevronDown
                      size={18}
                      className={`text-red-400 transition-transform duration-300 flex-shrink-0 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 text-sm text-gray-300 leading-relaxed border-t border-white/5 pt-4">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
