'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  BarChart3,
  Share2,
  PenTool,
  Smartphone,
  Zap,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  Layers,
  Sparkles,
  TrendingUp,
  Cpu,
  BarChart,
  Shield,
} from 'lucide-react';
import Services3DElement from '../../components/Services3DElement';

const detailedServices = [
  {
    id: 'seo',
    icon: Search,
    title: 'SEO Optimization & Search Dominance',
    tagline: 'Outrank enterprise competitors and capture high-intent commercial organic queries.',
    stat: '+310% Avg. Traffic Boost',
    gradient: 'from-red-600 to-red-500',
    deliverables: [
      'Comprehensive Technical Audits (Crawl depth, indexing, schema graphs)',
      'Programmatic SEO architecture for mass landing page expansion',
      'High-authority editorial link acquisition from Tier-1 publications',
      'Semantic content clusters targeting commercial purchase intent',
      'Core Web Vitals tuning for sub-second LCP & zero CLS',
      'Local & International geo-targeted ranking strategies',
    ],
    tools: ['Ahrefs', 'SEMrush', 'Screaming Frog', 'Google Search Console', 'Sitebulb'],
  },
  {
    id: 'ppc',
    icon: BarChart3,
    title: 'PPC Advertising & Paid Media Buying',
    tagline: 'High-velocity ad funnels designed to achieve scalable, predictable ROAS.',
    stat: '4.2x Average ROAS',
    gradient: 'from-red-600 to-red-500',
    deliverables: [
      'Google Search, Shopping & Performance Max campaign design',
      'Meta (Facebook & Instagram) creative testing engines & dynamic ads',
      'YouTube video ads capturing top-of-funnel customer intent',
      'B2B LinkedIn audience modeling & account-based targeting',
      'Multi-stage retargeting with behavioral trigger discounts',
      'Server-side CAPI tracking & post-cookie attribution models',
    ],
    tools: ['Google Ads', 'Meta Business Suite', 'Triple Whale', 'GA4', 'AppsFlyer'],
  },
  {
    id: 'social',
    icon: Share2,
    title: 'Social Media Marketing & Brand Presence',
    tagline: 'Turn casual scrollers into rabid brand advocates with high-converting creative.',
    stat: '85% Reach Amplification',
    gradient: 'from-red-600 to-red-500',
    deliverables: [
      'Viral short-form video production (TikTok, Reels, Shorts)',
      'Multi-channel editorial calendars aligned with brand voice',
      'Vetted creator & influencer partnership management',
      'Community growth, live event coverage, and comment moderation',
      'Paid social asset iteration & hooks testing sprints',
      'Detailed monthly sentiment & social listening reports',
    ],
    tools: ['Sprout Social', 'CapCut Pro', 'Brandwatch', 'Later', 'Figma'],
  },
  {
    id: 'content',
    icon: PenTool,
    title: 'Content Marketing & Inbound Demand Gen',
    tagline: 'High-authority editorial hubs that educate, convince, and convert buyers.',
    stat: '3.4x Lead Velocity',
    gradient: 'from-red-600 to-red-500',
    deliverables: [
      'Data-driven content strategy mapping to full buyer journey',
      'SEO-optimized long-form thought leadership & teardowns',
      'Whitepapers, industry benchmark reports, and case studies',
      'High-converting email newsletters and nurture automation',
      'Lead magnet production (calculators, templates, checklists)',
      'Quarterly content refresh sprints to preserve rank velocity',
    ],
    tools: ['Clearscope', 'SurferSEO', 'Notion', 'Grammarly Business', 'Substack'],
  },
  {
    id: 'web-design',
    icon: Smartphone,
    title: 'Web Design & Next.js Development',
    tagline: 'Next-generation web applications engineered for speed and conversion rates.',
    stat: '<1.2s Load Time (99/100 CWV)',
    gradient: 'from-red-600 to-red-500',
    deliverables: [
      'Modern bespoke UI/UX wireframes and high-fidelity Figma prototypes',
      'Next.js App Router architecture with static & edge rendering',
      'Tailwind CSS & Framer Motion interactive micro-animations',
      'A/B multivariate split-testing infrastructure',
      'Full ADA / WCAG accessible design compliance',
      'Seamless integration with CRMs, payment gateways, and analytics',
    ],
    tools: ['Next.js 16', 'React 19', 'Tailwind CSS', 'Vercel', 'Figma', 'TypeScript'],
  },
  {
    id: 'automation',
    icon: Zap,
    title: 'Marketing Automation & Retention Funnels',
    tagline: 'Automate repetitive workflows and nurture pipelines with intelligent triggers.',
    stat: '+62% LTV Retention',
    gradient: 'from-red-600 to-red-500',
    deliverables: [
      'HubSpot, Klaviyo & Salesforce CRM architecture setup',
      'Dynamic behavioral email drip sequences for cart abandonment',
      'Lead scoring matrix identifying sales-ready enterprise leads',
      'Automated SMS & webhook notifications for instant outreach',
      'Custom webhook integrations connecting marketing and sales stacks',
      'Closed-loop revenue attribution models for board reporting',
    ],
    tools: ['HubSpot', 'Klaviyo', 'Zapier', 'Make.com', 'Segment', 'Salesforce'],
  },
];

const methodology = [
  {
    step: '01',
    title: 'Deep Forensic Audit & Discovery',
    desc: 'We start by tearing down your current search presence, paid media efficiency, competitor positioning, and conversion bottlenecks.',
  },
  {
    step: '02',
    title: 'Bespoke Growth Blueprint',
    desc: 'We architect a custom 90-day sprint with precise target KPIs, resource allocations, creative requirements, and revenue benchmarks.',
  },
  {
    step: '03',
    title: 'Agile Multichannel Execution',
    desc: 'Our dedicated pods launch technical fixes, fresh ad creatives, programmatic landing pages, and content assets in rapid sprints.',
  },
  {
    step: '04',
    title: 'Continuous Optimization & Scale',
    desc: 'With real-time attribution data, we ruthlessly cut underperforming experiments, double down on winning funnels, and scale budget safely.',
  },
];

const faqs = [
  {
    q: 'How quickly can we expect to see tangible results from SEO?',
    a: 'While technical indexing fixes and low-hanging keyword gains often show measurable movement within 30 to 60 days, significant compound traffic and revenue exponential growth typically hit peak velocity between months 3 and 6 of continuous authority building.',
  },
  {
    q: 'Do you require long-term annual lock-in contracts?',
    a: 'No. We operate on transparent 3-month initial growth sprint commitments followed by flexible rolling retainers. Our 98% client retention rate is built on documented ROI, not restrictive contracts.',
  },
  {
    q: 'How do you track attribution and measure campaign ROI?',
    a: 'We implement server-side tracking, custom GA4 event funnels, and real-time live reporting dashboards. Every dollar in ad spend and organic traffic is directly mapped to pipeline value, closed revenue, and client lifetime value.',
  },
  {
    q: 'Will we have a dedicated account manager and team?',
    a: 'Yes. Every client is assigned a dedicated Growth Pod led by a Senior Strategist, supported by a Technical SEO Lead, Creative Designer, and Paid Media Specialist with direct Slack communication.',
  },
  {
    q: 'Can we customize our service package?',
    a: 'Absolutely. Many of our clients start with a combined SEO + PPC acquisition sprint or Web Redesign + CRO foundation before expanding into full-funnel retention automation.',
  },
];

export default function ServicesClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="relative pb-28">
      {/* 3D Visual Accent */}
      <div className="relative h-20 -mt-10 overflow-hidden pointer-events-none">
        <Services3DElement />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28">
        {/* Services List Breakdown */}
        <div className="space-y-16">
          {detailedServices.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                id={service.id}
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="glass-card rounded-3xl p-8 sm:p-12 border border-white/5 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/10 rounded-full blur-[100px] pointer-events-none" />

                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center`}>
                  {/* Service Header & Deliverables */}
                  <div className={`lg:col-span-7 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <div className={`p-3 rounded-2xl bg-gradient-to-br ${service.gradient} shadow-lg shadow-red-600/30`}>
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-xs font-bold text-red-400 bg-red-500/10 px-3.5 py-1 rounded-full border border-red-500/20">
                        {service.stat}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-black text-white mb-3 font-poppins">
                      {service.title}
                    </h2>
                    <p className="text-gray-300 text-base mb-8 leading-relaxed font-medium">
                      {service.tagline}
                    </p>

                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                      Included Deliverables &amp; Scope:
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                      {service.deliverables.map((item) => (
                        <div key={item} className="flex items-start text-xs text-gray-300">
                          <CheckCircle2 className="w-4 h-4 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 items-center pt-4 border-t border-white/10">
                      <span className="text-xs text-gray-500 font-semibold mr-2">Tools Stack:</span>
                      {service.tools.map((t) => (
                        <span key={t} className="text-[11px] font-medium text-gray-300 bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Service Card Highlight Box */}
                  <div className={`lg:col-span-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="glass-strong rounded-2xl p-8 border border-red-500/20 bg-black/60 relative">
                      <div className="flex items-center gap-2 text-xs font-bold text-red-400 uppercase tracking-wider mb-4">
                        <Sparkles size={14} />
                        <span>Executive Summary</span>
                      </div>
                      <p className="text-white text-lg font-bold mb-6 font-poppins leading-snug">
                        Ready to accelerate your {service.title.split(' ')[0]} pipeline with zero guesswork?
                      </p>
                      <div className="space-y-4 mb-8">
                        <div className="flex items-center justify-between text-xs py-2 border-b border-white/5">
                          <span className="text-gray-400">Typical Turnaround</span>
                          <span className="text-white font-semibold">Sprint starts in 7 business days</span>
                        </div>
                        <div className="flex items-center justify-between text-xs py-2 border-b border-white/5">
                          <span className="text-gray-400">Attribution Dashboard</span>
                          <span className="text-emerald-400 font-semibold">Included (Live GA4 / CAPI)</span>
                        </div>
                        <div className="flex items-center justify-between text-xs py-2 border-b border-white/5">
                          <span className="text-gray-400">Strategic Review</span>
                          <span className="text-white font-semibold">Weekly Sprint Sync</span>
                        </div>
                      </div>

                      <Link href="/contact" className="block">
                        <button className="w-full bg-gradient-to-r from-red-600 to-red-500 text-white py-3.5 rounded-xl font-bold text-sm glow-btn flex items-center justify-center gap-2 cursor-pointer">
                          <span>Request Proposal for this Service</span>
                          <ArrowRight size={16} />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 4-Step Methodology */}
        <div className="glass-card rounded-3xl p-10 sm:p-14 border border-white/5">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-red-400 font-bold text-xs uppercase tracking-[0.2em] mb-4 bg-red-500/10 px-3.5 py-1.5 rounded-full border border-red-500/20">
              Systematic Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 font-poppins">
              Our 4-Stage Growth Engine
            </h2>
            <p className="text-gray-400 text-sm">
              How we take brands from disjointed tactics to an integrated, high-velocity acquisition system.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodology.map((m) => (
              <div key={m.step} className="p-6 rounded-2xl glass-card border border-white/5 relative">
                <span className="text-4xl font-black gradient-text font-poppins block mb-3">{m.step}</span>
                <h3 className="text-base font-bold text-white mb-2 font-poppins">{m.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-red-400 font-bold text-xs uppercase tracking-[0.2em] mb-4 bg-red-500/10 px-3.5 py-1.5 rounded-full border border-red-500/20">
              Clear Answers
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 font-poppins">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-400 text-sm">Everything you need to know about partnering with Beez Digital.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={faq.q}
                  className="glass-card rounded-2xl border border-white/5 overflow-hidden transition-colors"
                >
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

        {/* Bottom CTA Banner */}
        <div className="text-center">
          <div className="glass-strong rounded-3xl p-12 relative overflow-hidden border border-red-500/30 bg-black/70">
            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <h2 className="text-3xl sm:text-4xl font-black text-white font-poppins">
                Ready to Unlock Your Brand&rsquo;s Full Growth Potential?
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                Book a confidential 30-minute growth consultation with our senior strategy directors. We will dissect your numbers and show you exactly where the hidden revenue lies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <button className="w-full sm:w-auto bg-gradient-to-r from-red-600 to-red-500 text-white px-8 py-4 rounded-full font-bold text-sm glow-btn cursor-pointer">
                    Book Free Growth Audit
                  </button>
                </Link>
                <Link href="/pricing">
                  <button className="w-full sm:w-auto glass-card text-white px-8 py-4 rounded-full font-bold text-sm border border-white/20 hover:bg-white/5 cursor-pointer">
                    Compare Pricing &amp; Plans
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
