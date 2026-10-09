'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, TrendingUp, Users, Target, ShieldCheck } from 'lucide-react';
import Hero3DBackground from './Hero3DBackground';

const stats = [
  { icon: TrendingUp, value: '500+', label: 'Campaigns Launched', trend: '+120% YoY' },
  { icon: Users, value: '200+', label: 'Happy Global Clients', trend: '98% Retention' },
  { icon: Target, value: '95%', label: 'Target Success Rate', trend: 'Verified ROI' },
];

const partners = [
  'Apex Ventures',
  'NovaTech Systems',
  'HyperScale Cloud',
  'Orbit Media',
  'FinPulse Global',
  'Veloce Health',
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-background pt-24 pb-16">
      {/* 3D Canvas Background */}
      <Hero3DBackground />

      {/* Grid ambient texture */}
      <div className="absolute inset-0 bg-grid-ambient opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center max-w-4xl mx-auto">
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 glass-card px-5 py-2.5 rounded-full mb-8 border border-red-500/25 bg-red-950/20"
          >
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse shadow-sm shadow-red-500" />
            <span className="text-gray-300 text-xs sm:text-sm font-semibold tracking-wide">
              Trusted by 200+ High-Growth Enterprises Worldwide
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.08] tracking-tight font-poppins"
          >
            Transform Your Business With
            <span className="block gradient-text mt-2">Digital Excellence</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            We engineer high-converting digital marketing systems with proprietary SEO algorithms,
            predictive PPC media buying, and modern web architectures that deliver measurable revenue.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Link href="/contact" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="w-full sm:w-auto bg-gradient-to-r from-red-600 to-red-500 text-white px-8 py-4 rounded-full font-bold text-base glow-btn flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-red-600/30"
              >
                <span>Book Free Growth Audit</span>
                <ArrowRight size={18} />
              </motion.button>
            </Link>

            <Link href="/services" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="w-full sm:w-auto glass-card text-gray-200 hover:text-white px-8 py-4 rounded-full font-semibold text-base flex items-center justify-center gap-2 transition-all duration-300 border border-white/10 hover:border-red-500/40 cursor-pointer"
              >
                <Sparkles size={18} className="text-red-400" />
                <span>Explore Services</span>
              </motion.button>
            </Link>
          </motion.div>

          {/* Stat Cards */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(239, 68, 68, 0.15)" }}
                className="glass-card rounded-2xl p-6 text-center border border-white/5 relative overflow-hidden"
              >
                <div className="flex justify-between items-center mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-500 rounded-xl flex items-center justify-center shadow-md">
                    <stat.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-[11px] font-semibold text-red-400 bg-red-500/10 px-2.5 py-1 rounded-full border border-red-500/20">
                    {stat.trend}
                  </span>
                </div>
                <div className="text-3xl font-black text-white mb-1 font-poppins">{stat.value}</div>
                <div className="text-gray-400 text-xs font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Brand trust badges / marquee */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="pt-6 border-t border-white/10"
          >
            <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-6 flex items-center justify-center gap-2">
              <ShieldCheck size={14} className="text-red-500" />
              <span>Trusted by industry innovators</span>
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 opacity-70">
              {partners.map((partner) => (
                <span
                  key={partner}
                  className="text-sm font-semibold tracking-wider uppercase text-gray-400 hover:text-white transition-colors"
                >
                  {partner}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
