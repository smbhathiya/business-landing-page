'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  TrendingUp,
  Users,
  Target,
  ShieldCheck,
  Zap,
  Activity,
  CheckCircle2,
} from 'lucide-react';
import Hero3DBackground from './Hero3DBackground';

const stats = [
  { icon: TrendingUp, value: '500+', label: 'Campaigns Launched', trend: '+120% YoY', sub: 'Scaled in 2025-2026' },
  { icon: Users, value: '200+', label: 'Enterprise Clients', trend: '98% Retained', sub: 'Global footprint' },
  { icon: Target, value: '95%', label: 'Audited Success Rate', trend: '4.8x Avg ROAS', sub: 'Forensic validation' },
];

const partners = [
  'Apex Ventures',
  'NovaTech Systems',
  'HyperScale Cloud',
  'Orbit Media',
  'FinPulse Global',
  'Veloce Health',
  'Nexus AI Labs',
  'Vertex Commerce',
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-background pt-28 sm:pt-36 lg:pt-40 pb-12 sm:pb-20"
    >
      {/* 3D Canvas Background (Automatically optimized for mobile/low-spec devices) */}
      <Hero3DBackground />

      {/* Grid ambient texture */}
      <div className="absolute inset-0 bg-grid-ambient opacity-30 pointer-events-none" />

      {/* Radial Mobile Glow Backlight */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[340px] sm:w-[600px] h-[340px] sm:h-[500px] bg-red-600/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center max-w-4xl mx-auto">
          {/* Eyebrow badge: Modern interactive micro-pill */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 glass-card px-3.5 py-1.5 sm:px-5 sm:py-2 rounded-full mb-6 sm:mb-8 border border-red-500/25 bg-red-950/20 backdrop-blur-md shadow-lg shadow-red-950/30"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
            </span>
            <span className="text-gray-300 text-xs sm:text-sm font-semibold tracking-wide">
              2026 AI-Powered Growth Architecture
            </span>
            <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-red-500/50" />
            <span className="hidden sm:inline text-red-400 text-xs font-bold">200+ Enterprises Scaled</span>
          </motion.div>

          {/* Heading: High-Impact Responsive Scale */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl xs:text-4xl sm:text-6xl lg:text-7xl font-black text-white mb-5 sm:mb-6 leading-[1.12] sm:leading-[1.08] tracking-tight font-poppins"
          >
            Engineering High-Velocity
            <span className="block gradient-text mt-1 sm:mt-2">Digital Dominance</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-sm sm:text-lg md:text-xl text-gray-300/90 sm:text-gray-400 mb-8 sm:mb-10 max-w-xl mx-auto sm:max-w-2xl leading-relaxed font-normal"
          >
            We deploy forensic SEO algorithms, predictive PPC media buying, and modern web architectures that transform customer acquisition into predictable enterprise revenue.
          </motion.p>

          {/* Modern Mobile CTA Action Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-4 sm:mb-6"
          >
            <Link href="/contact" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto bg-gradient-to-r from-red-600 via-red-500 to-amber-500 text-white px-7 py-3.5 sm:py-4 rounded-full font-bold text-sm sm:text-base glow-btn flex items-center justify-center gap-2 cursor-pointer shadow-xl shadow-red-600/30 min-h-[48px]"
              >
                <span>Book Free Growth Audit</span>
                <ArrowRight size={18} />
              </motion.button>
            </Link>

            <Link href="/services" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto glass-card text-gray-200 hover:text-white px-6 py-3.5 sm:py-4 rounded-full font-semibold text-sm sm:text-base flex items-center justify-center gap-2 transition-all duration-300 border border-white/10 hover:border-red-500/40 cursor-pointer min-h-[48px]"
              >
                <Sparkles size={17} className="text-red-400" />
                <span>Explore Solutions</span>
              </motion.button>
            </Link>
          </motion.div>

          {/* Micro Trust Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-[11px] sm:text-xs text-gray-400 font-medium mb-8 sm:mb-12"
          >
            <span className="flex items-center gap-1">
              <Zap size={13} className="text-amber-400" />
              <span>Free 30-Min Forensic Roadmap</span>
            </span>
            <span className="text-gray-600 hidden xs:inline">•</span>
            <span className="flex items-center gap-1">
              <CheckCircle2 size={13} className="text-red-400" />
              <span>Zero Long-Term Lock-in</span>
            </span>
            <span className="text-gray-600 hidden sm:inline">•</span>
            <span className="hidden sm:flex items-center gap-1">
              <Activity size={13} className="text-emerald-400" />
              <span>Avg +318% ROAS Sprint</span>
            </span>
          </motion.div>

          {/* ── Modern Interactive KPI Dashboard Card (WOW Factor on Mobile) ── */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass-card rounded-2xl p-4 sm:p-6 max-w-2xl mx-auto mb-10 sm:mb-14 border border-white/10 relative overflow-hidden text-left shadow-2xl"
          >
            {/* Subtle top accent line */}
            <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-red-600 via-amber-500 to-red-600" />

            {/* Dashboard Header */}
            <div className="flex items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-sm shadow-emerald-500" />
                <div>
                  <div className="text-xs sm:text-sm font-bold text-white font-poppins flex items-center gap-1.5">
                    <span>Live Revenue Engine</span>
                    <span className="text-[10px] bg-red-500/15 text-red-400 border border-red-500/30 px-1.5 py-0.5 rounded font-mono">
                      Active Sprint
                    </span>
                  </div>
                  <div className="text-[10px] sm:text-xs text-gray-400">Real-time omnichannel conversion trajectory</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm sm:text-base font-black text-emerald-400 font-poppins">+318%</div>
                <div className="text-[9px] sm:text-[10px] text-gray-400 uppercase tracking-wider font-semibold">ROAS Velocity</div>
              </div>
            </div>

            {/* Live Sparkline Chart Vector */}
            <div className="relative h-16 sm:h-20 w-full mb-3">
              <svg viewBox="0 0 400 80" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#ef4444" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#ef4444" stopOpacity="0.0" />
                  </linearGradient>
                  <linearGradient id="chartLine" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#fbbf24" />
                    <stop offset="50%" stopColor="#ef4444" />
                    <stop offset="100%" stopColor="#ff4d4d" />
                  </linearGradient>
                </defs>
                {/* Horizontal reference lines */}
                <line x1="0" y1="20" x2="400" y2="20" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />
                <line x1="0" y1="50" x2="400" y2="50" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />
                {/* Area under curve */}
                <path
                  d="M 0,65 Q 40,58 80,60 T 160,42 T 240,32 T 320,18 T 400,6 L 400,80 L 0,80 Z"
                  fill="url(#chartGradient)"
                />
                {/* Curve stroke */}
                <path
                  d="M 0,65 Q 40,58 80,60 T 160,42 T 240,32 T 320,18 T 400,6"
                  fill="none"
                  stroke="url(#chartLine)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                {/* Apex node */}
                <circle cx="400" cy="6" r="4" fill="#fbbf24" />
                <circle cx="400" cy="6" r="7" stroke="#ef4444" strokeWidth="1.5" opacity="0.75" />
              </svg>
            </div>

            {/* 3 Inline Micro-KPIs */}
            <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/5 text-center">
              <div className="p-1.5 sm:p-2 rounded-lg bg-white/[0.03]">
                <div className="text-[10px] sm:text-xs text-gray-400 font-medium">Search Traffic</div>
                <div className="text-xs sm:text-sm font-bold text-white font-poppins">+248%</div>
              </div>
              <div className="p-1.5 sm:p-2 rounded-lg bg-white/[0.03]">
                <div className="text-[10px] sm:text-xs text-gray-400 font-medium">Blended CAC</div>
                <div className="text-xs sm:text-sm font-bold text-emerald-400 font-poppins">-42%</div>
              </div>
              <div className="p-1.5 sm:p-2 rounded-lg bg-white/[0.03]">
                <div className="text-[10px] sm:text-xs text-gray-400 font-medium">Qualified Leads</div>
                <div className="text-xs sm:text-sm font-bold text-amber-400 font-poppins">4.8x</div>
              </div>
            </div>
          </motion.div>

          {/* ── High-Density Mobile Metrics Strip / Desktop Stat Cards ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mb-12 sm:mb-16"
          >
            {/* Mobile View: Single Compact 3-Column Glass Dock (saves huge vertical scroll) */}
            <div className="grid grid-cols-3 divide-x divide-white/10 glass-card rounded-2xl p-3 sm:hidden border border-white/10 text-center">
              {stats.map((stat) => (
                <div key={stat.label} className="px-2 py-1">
                  <div className="text-xl font-black text-white font-poppins">{stat.value}</div>
                  <div className="text-[10px] text-gray-300 font-medium leading-tight truncate">{stat.label.split(' ')[0]}</div>
                  <span className="text-[9px] font-bold text-red-400 block mt-0.5">{stat.trend}</span>
                </div>
              ))}
            </div>

            {/* Tablet / Desktop View: Expanded Interactive Glass Cards */}
            <div className="hidden sm:grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(239, 68, 68, 0.15)' }}
                  className="glass-card rounded-2xl p-6 text-center border border-white/5 relative overflow-hidden"
                >
                  <div className="flex justify-between items-center mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-amber-500 rounded-xl flex items-center justify-center shadow-md">
                      <stat.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-[11px] font-semibold text-red-400 bg-red-500/10 px-2.5 py-1 rounded-full border border-red-500/20">
                      {stat.trend}
                    </span>
                  </div>
                  <div className="text-3xl font-black text-white mb-1 font-poppins">{stat.value}</div>
                  <div className="text-gray-300 text-xs font-semibold">{stat.label}</div>
                  <div className="text-gray-500 text-[10px] mt-0.5">{stat.sub}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── Brand Trust Infinite Marquee (Mobile & Desktop Dynamic Ticker) ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="pt-6 sm:pt-8 border-t border-white/10"
          >
            <p className="text-[10px] sm:text-xs uppercase tracking-widest text-gray-500 font-semibold mb-4 sm:mb-6 flex items-center justify-center gap-2">
              <ShieldCheck size={14} className="text-red-500" />
              <span>Trusted by industry market leaders</span>
            </p>

            {/* Infinite Continuous Marquee Container with Gradient Fade Masks */}
            <div
              className="relative overflow-hidden w-full py-2"
              style={{
                maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
                WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
              }}
            >
              <div className="animate-marquee flex items-center gap-8 sm:gap-14">
                {[...partners, ...partners].map((partner, idx) => (
                  <span
                    key={`${partner}-${idx}`}
                    className="text-xs sm:text-sm font-bold tracking-wider uppercase text-gray-400 hover:text-white transition-colors flex-shrink-0 flex items-center gap-3 select-none"
                  >
                    <span>{partner}</span>
                    <span className="w-1 h-1 rounded-full bg-red-500/50" />
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
