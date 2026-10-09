'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  TrendingUp,
  ArrowRight,
  Star,
  Quote,
  CheckCircle2,
  Sparkles,
  Calculator,
  DollarSign,
  Users,
} from 'lucide-react';

type Category = 'all' | 'seo' | 'ppc' | 'web' | 'funnel';

const categories: { id: Category; label: string }[] = [
  { id: 'all', label: 'All Projects' },
  { id: 'seo', label: 'SEO & Search Dominance' },
  { id: 'ppc', label: 'Paid Media & PPC' },
  { id: 'web', label: 'Next.js Web & CRO' },
  { id: 'funnel', label: 'Full-Funnel Lifecycle' },
];

const caseStudies = [
  {
    id: 1,
    category: 'seo',
    client: 'Apex FinTech',
    industry: 'Financial Technology',
    title: 'How Apex FinTech Grew Organic Pipeline by 420% in 6 Months',
    summary: 'A massive architectural crawl overhaul and programmatic SEO rollout targeting 800+ commercial intent keywords.',
    highlight: '+420% Organic Traffic',
    secondaryMetric: '$4.2M Pipeline Added',
    deliverables: ['Programmatic Page Engine', 'Technical Indexation Fix', 'High-Tier Financial Links'],
    testimonial: 'Beez Digital took our stagnant organic search and turned it into our primary demo acquisition pipeline. The ROI has been phenomenal.',
    author: 'David Sterling, Chief Marketing Officer',
  },
  {
    id: 2,
    category: 'ppc',
    client: 'EcoStyle Global',
    industry: 'D2C Sustainable Retail',
    title: 'Scaling Paid Media to 5.4x ROAS and $1.8M in Q4 Holiday Sales',
    summary: 'Creative iteration testing coupled with Advantage+ Shopping campaigns and multi-touch post-purchase attribution.',
    highlight: '5.4x Blended ROAS',
    secondaryMetric: '-45% Lower CAC',
    deliverables: ['Dynamic Catalog Ads', 'UGC Creative Testing Pod', 'Triple Whale Attribution Setup'],
    testimonial: 'We previously burned money with other agencies. Beez Digital made our ad spend predictable, profitable, and ready to scale.',
    author: 'Emily Rodriguez, Founder & CEO',
  },
  {
    id: 3,
    category: 'web',
    client: 'Veloce Logistics',
    industry: 'Enterprise Supply Chain',
    title: 'Headless Next.js Platform Redesign Yields +85% Lead Form Submissions',
    summary: 'Re-engineering a legacy 8-second slow site into a blazing fast Next.js App Router application with sub-second page transitions.',
    highlight: '99/100 Core Web Vitals',
    secondaryMetric: '+85% Lead Form Rate',
    deliverables: ['Next.js 16 Edge Architecture', 'Tailwind CRO Redesign', 'HubSpot Form Pipeline'],
    testimonial: 'Our bounce rates plummeted overnight. Enterprise prospects commented on how fast and seamless our portal feels.',
    author: 'Mark Vance, VP of Technology',
  },
  {
    id: 4,
    category: 'funnel',
    client: 'NovaTech SaaS',
    industry: 'B2B Enterprise Software',
    title: 'Synchronizing Paid Acquisition with Behavioral Lifecycle Retention',
    summary: 'Building automated HubSpot lifecycle nurture sequences to double SQL-to-Deal close velocity.',
    highlight: '+68% Demo Conversion',
    secondaryMetric: '520+ Enterprise SQLs/Qtr',
    deliverables: ['Behavioral Email Flows', 'Lead Scoring Triggers', 'LinkedIn Account-Based Ads'],
    testimonial: 'Their growth pod acts as an elite extension of our marketing leadership. They treat our numbers with absolute accountability.',
    author: 'Sarah Lin, VP of Demand Generation',
  },
  {
    id: 5,
    category: 'seo',
    client: 'Pulse Health',
    industry: 'Telehealth & Medical',
    title: 'Dominating High-Competition Telemedicine Queries Nationwide',
    summary: 'Semantic topic cluster architecture and medical review board schema mapping to exceed Google E-E-A-T criteria.',
    highlight: '10x Search Visibility',
    secondaryMetric: '+310% App Downloads',
    deliverables: ['E-E-A-T Compliance Audit', 'Medical Schema Graph', 'Local City Landing Engines'],
    testimonial: 'In a medical sector where trust is everything, Beez Digital gave us an authoritative organic footprint that outranks legacy hospital networks.',
    author: 'Dr. Arthur Campbell, Chief Medical Officer',
  },
  {
    id: 6,
    category: 'ppc',
    client: 'HyperScale Cloud',
    industry: 'Cloud Infrastructure',
    title: 'Hyper-Targeted Google Search & YouTube Ads for Developer Acquisition',
    summary: 'Restructuring low-intent broad match campaigns into precision single-theme ad groups with strict negative keyword filters.',
    highlight: '3.8x Blended ROAS',
    secondaryMetric: '+180% Qualified Trials',
    deliverables: ['Google Search Re-architecture', 'Technical YouTube Pre-rolls', 'Server-Side CAPI'],
    testimonial: 'Our cost per activated developer dropped by half within 60 days. Best paid media execution we have experienced.',
    author: 'Michael Chen, Growth Director',
  },
];

export default function PortfolioClient() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [monthlySpend, setMonthlySpend] = useState<number>(10000);

  const filteredStudies =
    activeCategory === 'all'
      ? caseStudies
      : caseStudies.filter((item) => item.category === activeCategory);

  // Projected Growth Calculations
  const projectedRevenue = Math.round(monthlySpend * 3.8);
  const projectedNewCustomers = Math.round(monthlySpend / 45);

  return (
    <div className="relative pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-red-600 to-red-500 text-white shadow-lg shadow-red-600/30 glow-btn'
                    : 'glass-card text-gray-400 hover:text-white border border-white/5 hover:border-white/20'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Case Studies Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredStudies.map((study) => (
              <div
                key={study.id}
                className="glass-card rounded-3xl p-8 border border-white/5 flex flex-col justify-between hover:border-red-500/40 transition-all duration-300 group"
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[11px] font-bold text-red-400 uppercase tracking-wider bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20">
                      {study.industry}
                    </span>
                    <span className="text-xs font-bold text-white font-poppins">{study.client}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 font-poppins leading-snug group-hover:text-red-400 transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-gray-400 text-xs leading-relaxed mb-6">{study.summary}</p>

                  {/* Metrics Badge */}
                  <div className="grid grid-cols-2 gap-3 mb-6 p-4 rounded-xl bg-white/5 border border-white/5">
                    <div>
                      <span className="text-[10px] text-gray-400 block mb-0.5">Primary Win</span>
                      <span className="text-sm font-black gradient-text font-poppins">{study.highlight}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-gray-400 block mb-0.5">Bottom Line</span>
                      <span className="text-sm font-bold text-white font-poppins">{study.secondaryMetric}</span>
                    </div>
                  </div>

                  <div className="space-y-1.5 mb-6">
                    {study.deliverables.map((d) => (
                      <div key={d} className="flex items-center text-xs text-gray-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-red-500 mr-2 flex-shrink-0" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <p className="text-gray-400 text-xs italic mb-3">&ldquo;{study.testimonial}&rdquo;</p>
                  <p className="text-gray-300 text-[11px] font-semibold">{study.author}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Interactive ROI Calculator */}
        <div className="glass-strong rounded-3xl p-8 sm:p-14 border border-white/10 bg-black/70">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-red-400 uppercase tracking-wider bg-red-500/10 px-3.5 py-1.5 rounded-full border border-red-500/20">
                <Calculator size={14} />
                <span>Interactive Projection Model</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white font-poppins leading-tight">
                Calculate Your Projected Revenue Multiplier
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                Based on historical benchmarks across our 200+ portfolio clients, estimate the revenue return on your digital marketing investment.
              </p>

              <div className="space-y-3 pt-4">
                <div className="flex justify-between items-center text-sm font-bold text-white">
                  <span>Target Monthly Investment:</span>
                  <span className="text-xl gradient-text font-poppins">${monthlySpend.toLocaleString()} / mo</span>
                </div>
                <input
                  type="range"
                  min="2500"
                  max="50000"
                  step="2500"
                  value={monthlySpend}
                  onChange={(e) => setMonthlySpend(Number(e.target.value))}
                  className="w-full accent-red-500 h-2 bg-gray-800 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-500 font-semibold">
                  <span>$2,500/mo</span>
                  <span>$25,000/mo</span>
                  <span>$50,000/mo</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="glass-card rounded-2xl p-8 border border-red-500/30 bg-black/80 space-y-6">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block">
                  Projected 6-Month Returns (Avg. 3.8x ROAS)
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                    <span className="text-xs text-gray-400 block mb-1">Projected Monthly Pipeline</span>
                    <span className="text-3xl font-black gradient-text font-poppins">
                      ${projectedRevenue.toLocaleString()}
                    </span>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                    <span className="text-xs text-gray-400 block mb-1">Estimated Conversions</span>
                    <span className="text-3xl font-black text-white font-poppins">
                      ~{projectedNewCustomers.toLocaleString()}
                    </span>
                  </div>
                </div>

                <p className="text-[11px] text-gray-400 leading-relaxed">
                  *Projections represent median historical results from clients with full-funnel engagements. Your actual return will be customized during our free forensic audit.
                </p>

                <Link href="/contact" className="block">
                  <button className="w-full bg-gradient-to-r from-red-600 to-red-500 text-white py-4 rounded-xl font-bold text-sm glow-btn cursor-pointer">
                    Request Custom Audit For This Budget
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="text-center">
          <div className="glass-card rounded-3xl p-12 border border-red-500/30 bg-black/70 max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black text-white font-poppins">
              Want Results Like These For Your Business?
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              Schedule a 30-minute teardown. We will analyze your search profile and ad accounts and present actionable steps to duplicate these results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="w-full sm:w-auto bg-gradient-to-r from-red-600 to-red-500 text-white px-8 py-3.5 rounded-full font-bold text-sm glow-btn cursor-pointer inline-flex items-center justify-center gap-2">
                  <span>Book Free Growth Audit</span>
                  <ArrowRight size={16} />
                </button>
              </Link>
              <Link href="/pricing">
                <button className="w-full sm:w-auto glass-card text-white px-8 py-3.5 rounded-full font-bold text-sm border border-white/20 hover:bg-white/5 cursor-pointer">
                  View Transparent Pricing
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
