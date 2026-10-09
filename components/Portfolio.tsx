'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Star, Quote, ArrowRight, TrendingUp } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechStart Inc.',
    company: 'FinTech',
    content: 'Beez Digital completely transformed our organic acquisition. Our organic traffic increased by 420% in just 6 months, and our customer acquisition cost dropped by 45%.',
    rating: 5,
    metrics: '+420% Organic Traffic',
    gradient: 'from-red-600 to-red-500',
  },
  {
    name: 'Michael Chen',
    role: 'VP of Growth, HyperScale',
    company: 'Enterprise SaaS',
    content: 'The technical depth and data rigor at Beez Digital is unmatched. They built programmatic SEO architectures and automated funnels that generated 3.8x ROAS consistently.',
    rating: 5,
    metrics: '3.8x Blended ROAS',
    gradient: 'from-red-600 to-red-500',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Founder, EcoStyle Goods',
    company: 'D2C E-Commerce',
    content: 'Working with Beez Digital has been our highest ROI agency partnership. Their creative team paired with paid social media buying drove over $1.8M during Q4 alone.',
    rating: 5,
    metrics: '$1.8M Q4 Revenue',
    gradient: 'from-red-600 to-red-500',
  },
];

const impactStats = [
  { value: '500+', label: 'Campaigns Launched', sub: 'Across 12 global markets' },
  { value: '$75M+', label: 'Client Revenue Generated', sub: 'Audited digital attribution' },
  { value: '98%', label: 'Client Retention Rate', sub: 'Annual retainer renewals' },
  { value: '300%', label: 'Average Traffic Increase', sub: 'First 6 months engagement' },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-28 bg-background overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] opacity-50" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-red-900/20 rounded-full blur-[120px] opacity-40" />
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
            Validated Case Studies
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-5 font-poppins">
            Real Impact.
            <span className="block gradient-text">Documented Client Results.</span>
          </h2>
          <p className="text-lg text-gray-400">
            Discover how our data-driven growth strategies unlock exponential revenue for world-class brands.
          </p>
        </motion.div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgba(239, 68, 68, 0.2)" }}
              className="glass-card rounded-2xl p-8 transition-all duration-300 flex flex-col justify-between border border-white/5"
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <div className="flex gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-red-500 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-red-500/40" />
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold mb-5">
                  <TrendingUp size={12} />
                  <span>{t.metrics}</span>
                </div>

                <p className="text-gray-300 mb-8 leading-relaxed text-sm">
                  &ldquo;{t.content}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className={`w-11 h-11 bg-gradient-to-br ${t.gradient} rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md shadow-red-600/30 flex-shrink-0`}>
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-white text-sm font-poppins">{t.name}</div>
                  <div className="text-gray-400 text-xs">{t.role}</div>
                  <div className="text-red-400 text-[11px] font-medium">{t.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed Case Studies Link CTA */}
        <div className="text-center mb-16">
          <Link href="/portfolio">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glass-card text-white px-8 py-3.5 rounded-full font-bold text-sm border border-red-500/40 hover:bg-white/5 transition-all inline-flex items-center gap-2"
            >
              <span>Explore All Verified Case Studies</span>
              <ArrowRight size={16} />
            </motion.button>
          </Link>
        </div>

        {/* Stats banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="glass-strong rounded-3xl p-10 md:p-12 text-center relative overflow-hidden border border-white/10 bg-black/60"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 via-transparent to-red-600/10 pointer-events-none" />
          <h3 className="relative z-10 text-2xl sm:text-3xl font-black text-white mb-10 font-poppins">
            Our Aggregate <span className="gradient-text">Agency Performance</span>
          </h3>
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="glass-card rounded-2xl py-6 px-4 border border-white/5"
              >
                <div className="text-3xl sm:text-4xl font-black gradient-text mb-1 font-poppins">{stat.value}</div>
                <div className="text-white text-sm font-semibold mb-1">{stat.label}</div>
                <div className="text-gray-400 text-xs">{stat.sub}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
