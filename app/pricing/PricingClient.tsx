'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, Sparkles, ArrowRight, ShieldCheck, HelpCircle, ChevronDown } from 'lucide-react';

const tiers = [
  {
    name: 'Starter Launch',
    badge: 'Emerging Brands',
    monthlyPrice: 2499,
    annualPrice: 1999,
    description: 'Perfect for startups and local leaders looking to build steady organic traffic and profitable ad testbeds.',
    popular: false,
    features: [
      'Core Technical SEO Audit & Ongoing Fixes',
      'Targeting up to 50 Commercial Keywords',
      'Google Ads or Meta Ads Management (Up to $10k spend)',
      '2 High-Authority Editorial Backlinks / Month',
      'Monthly Strategy & KPI Review',
      'Standard Email & Slack Support',
    ],
    ctaText: 'Start with Starter',
  },
  {
    name: 'Growth Engine',
    badge: 'Most Popular',
    monthlyPrice: 4999,
    annualPrice: 3999,
    description: 'Our flagship full-funnel acceleration system for fast-scaling brands needing aggressive market share acquisition.',
    popular: true,
    features: [
      'Full Programmatic & Technical SEO Engine',
      'Targeting up to 250 Commercial Keywords',
      'Multi-Channel Google + Meta + YouTube Media Buying',
      '6 Tier-1 High-Authority Backlinks / Month',
      '4 High-Converting Thought Leadership Content Pieces',
      'Continuous Conversion Rate Optimization (CRO)',
      'Bi-Weekly Sprint Syncs + Dedicated Slack Channel',
      'Real-Time Live Attribution Dashboard',
    ],
    ctaText: 'Accelerate with Growth',
  },
  {
    name: 'Enterprise Scale',
    badge: 'Industry Dominance',
    monthlyPrice: 9999,
    annualPrice: 7999,
    description: 'Full-service digital dominance for enterprise market leaders managing high-volume multichannel funnels.',
    popular: false,
    features: [
      'Comprehensive Omni-Channel Search & Media Architecture',
      'Unlimited Enterprise Keyword Clusters & Graphs',
      'Ad Management for $50k+ Monthly Media Budgets',
      '12+ Tier-1 Editorial Links & Digital PR Campaigns',
      'Bespoke Next.js Landing Pages & Full Web Development',
      'Advanced Marketing Automation & CRM Attribution (HubSpot)',
      'Weekly Executive Leadership Reviews',
      'Dedicated 24/7 Senior Growth Pod',
    ],
    ctaText: 'Scale Enterprise',
  },
];

const comparisonRows = [
  { feature: 'Dedicated Growth Pod & Strategist', starter: 'Lead Strategist', growth: 'Full Dedicated Pod', enterprise: 'Executive Squad' },
  { feature: 'Active Paid Media Platforms', starter: '1 Platform', growth: '3 Platforms (Google + Meta + YT)', enterprise: 'All Global Channels' },
  { feature: 'Core Web Vitals & CRO Sprints', starter: 'Quarterly', growth: 'Continuous Monthly', enterprise: 'Bi-Weekly Sprints' },
  { feature: 'Live GA4 & CAPI Dashboards', starter: 'Standard', growth: 'Custom Real-Time', enterprise: 'Enterprise Data Warehouse' },
  { feature: 'Next.js Web Development Support', starter: false, growth: 'Minor Tweaks & CRO', enterprise: 'Full Headless Engineering' },
  { feature: 'HubSpot & CRM Lifecycle Automations', starter: false, growth: true, enterprise: 'Advanced Multi-Touch' },
  { feature: 'Weekly Sprint Sync Calls', starter: 'Monthly', growth: 'Bi-Weekly', enterprise: 'Weekly + On-Demand' },
  { feature: 'Contract Commitment', starter: '3 Months Sprint', growth: '3 Months Sprint', enterprise: 'Rolling 90-Day Sprint' },
];

const pricingFaqs = [
  {
    q: 'Why do you operate in 3-month initial sprints instead of month-to-month?',
    a: 'Sustainable algorithmic SEO and creative media buying require meaningful data feedback loops. 90 days allows us to execute deep technical fixes, establish statistically significant ad tests, and demonstrate undeniable pipeline growth.',
  },
  {
    q: 'Does the retainer price include our advertising spend?',
    a: 'No. The retainer covers all agency strategy, creative asset production, landing page engineering, and media management. Your ad spend is billed directly by Google and Meta to your own corporate credit card.',
  },
  {
    q: 'Who owns the creative assets, code, and landing pages?',
    a: 'You do. 100%. All copy, code, ad accounts, domain setups, and creative assets remain your intellectual property with zero agency lock-in or hostage clauses.',
  },
  {
    q: 'Can we upgrade or adjust our package as we scale?',
    a: 'Yes. Many clients start on the Starter plan for initial testing and smoothly graduate to Growth Engine once positive ROAS benchmarks are unlocked.',
  },
];

export default function PricingClient() {
  const [annual, setAnnual] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="relative pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* Billing Switcher */}
        <div className="flex items-center justify-center gap-4">
          <span className={`text-sm font-semibold transition-colors ${!annual ? 'text-white' : 'text-gray-400'}`}>
            Monthly Billing
          </span>
          <button
            onClick={() => setAnnual(!annual)}
            className="w-16 h-8 rounded-full bg-black/60 border border-white/20 p-1 flex items-center transition-colors cursor-pointer relative"
            aria-label="Toggle annual billing"
          >
            <motion.div
              layout
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              className={`w-6 h-6 rounded-full bg-gradient-to-r from-red-600 to-red-500 shadow-md ${
                annual ? 'translate-x-8' : 'translate-x-0'
              }`}
            />
          </button>
          <div className="flex items-center gap-2">
            <span className={`text-sm font-semibold transition-colors ${annual ? 'text-white' : 'text-gray-400'}`}>
              Annual Billing
            </span>
            <span className="text-[11px] font-bold text-red-400 bg-red-500/15 border border-red-500/30 px-2.5 py-0.5 rounded-full">
              Save 20%
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier) => {
            const price = annual ? tier.annualPrice : tier.monthlyPrice;
            return (
              <div
                key={tier.name}
                className={`glass-card rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 relative ${
                  tier.popular
                    ? 'border-2 border-red-500/60 shadow-2xl shadow-red-600/15 bg-black/80 -translate-y-2'
                    : 'border border-white/10 hover:border-white/20'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-red-600 to-red-500 text-white text-[11px] font-extrabold uppercase tracking-widest px-4 py-1 rounded-full shadow-lg">
                    {tier.badge}
                  </div>
                )}

                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-white font-poppins">{tier.name}</h3>
                    {!tier.popular && (
                      <span className="text-[11px] font-semibold text-gray-400 bg-white/5 px-2.5 py-1 rounded-md">
                        {tier.badge}
                      </span>
                    )}
                  </div>

                  <p className="text-gray-400 text-xs leading-relaxed mb-6">{tier.description}</p>

                  <div className="flex items-baseline gap-1 mb-8 pb-6 border-b border-white/10">
                    <span className="text-4xl sm:text-5xl font-black text-white font-poppins">${price.toLocaleString()}</span>
                    <span className="text-xs text-gray-400 font-medium">/ month</span>
                  </div>

                  <div className="space-y-3 mb-8">
                    <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block">
                      What&rsquo;s Included:
                    </span>
                    {tier.features.map((feature) => (
                      <div key={feature} className="flex items-start text-xs text-gray-300">
                        <Check className="w-4 h-4 text-red-500 mr-2.5 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link href="/contact" className="block pt-4">
                  <button
                    className={`w-full py-4 rounded-xl font-bold text-sm transition-all cursor-pointer flex items-center justify-center gap-2 ${
                      tier.popular
                        ? 'bg-gradient-to-r from-red-600 to-red-500 text-white glow-btn shadow-lg shadow-red-600/30'
                        : 'glass-card text-white border border-white/20 hover:bg-white/5'
                    }`}
                  >
                    <span>{tier.ctaText}</span>
                    <ArrowRight size={16} />
                  </button>
                </Link>
              </div>
            );
          })}
        </div>

        {/* Feature Comparison Table */}
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-white/5 overflow-x-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-red-400 font-bold text-xs uppercase tracking-[0.2em] mb-3 bg-red-500/10 px-3.5 py-1 rounded-full border border-red-500/20">
              Side-By-Side Comparison
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white font-poppins">
              Detailed Plan Capabilities
            </h2>
          </div>

          <table className="w-full text-left text-xs min-w-[650px]">
            <thead>
              <tr className="border-b border-white/10 text-gray-400 font-semibold uppercase tracking-wider">
                <th className="pb-4">Feature &amp; Deliverable</th>
                <th className="pb-4">Starter</th>
                <th className="pb-4 text-red-400">Growth Engine</th>
                <th className="pb-4">Enterprise</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {comparisonRows.map((row) => (
                <tr key={row.feature} className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-4 font-medium text-white">{row.feature}</td>
                  <td className="py-4 text-gray-300">
                    {typeof row.starter === 'boolean' ? (
                      row.starter ? <Check size={16} className="text-red-500" /> : <X size={16} className="text-gray-600" />
                    ) : (
                      row.starter
                    )}
                  </td>
                  <td className="py-4 font-semibold text-white">
                    {typeof row.growth === 'boolean' ? (
                      row.growth ? <Check size={16} className="text-red-500" /> : <X size={16} className="text-gray-600" />
                    ) : (
                      row.growth
                    )}
                  </td>
                  <td className="py-4 text-gray-300">
                    {typeof row.enterprise === 'boolean' ? (
                      row.enterprise ? <Check size={16} className="text-red-500" /> : <X size={16} className="text-gray-600" />
                    ) : (
                      row.enterprise
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Guarantees Box */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'Zero Hostage Clauses',
              desc: 'You own 100% of all ad accounts, custom code, landing pages, and creative assets produced during our sprints.',
            },
            {
              title: 'Real-Time Visibility',
              desc: 'Live 24/7 custom attribution dashboards with direct mapping to closed CRM deals and net revenue.',
            },
            {
              title: '30-Day Benchmark Check',
              desc: 'Clear upfront milestone targets. If we miss benchmark progression in month one, we work free until achieved.',
            },
          ].map((g) => (
            <div key={g.title} className="glass-card rounded-2xl p-6 border border-white/5 text-center">
              <ShieldCheck className="w-8 h-8 text-red-500 mx-auto mb-3" />
              <h3 className="text-base font-bold text-white mb-2 font-poppins">{g.title}</h3>
              <p className="text-gray-400 text-xs leading-relaxed">{g.desc}</p>
            </div>
          ))}
        </div>

        {/* Pricing FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-red-400 font-bold text-xs uppercase tracking-[0.2em] mb-4 bg-red-500/10 px-3.5 py-1.5 rounded-full border border-red-500/20">
              Pricing Clarity
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 font-poppins">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {pricingFaqs.map((faq, idx) => {
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

        {/* Enterprise Custom Plan CTA */}
        <div className="text-center">
          <div className="glass-strong rounded-3xl p-12 border border-red-500/30 bg-black/70 max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black text-white font-poppins">
              Have Specialized Enterprise Requirements?
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              Managing complex multi-brand international properties or budgets over $100k/month? We construct bespoke, dedicated pods for enterprise organizations.
            </p>
            <div className="flex justify-center">
              <Link href="/contact">
                <button className="bg-gradient-to-r from-red-600 to-red-500 text-white px-8 py-4 rounded-full font-bold text-sm glow-btn cursor-pointer inline-flex items-center gap-2">
                  <span>Speak with our Enterprise Solutions Director</span>
                  <ArrowRight size={16} />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
