'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Award, Users, Target, TrendingUp, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import About3DElement from './About3DElement';

const highlights = [
  { icon: Award, title: 'Industry Recognized', description: 'Recognized as Top Growth Agency by Clutch and SearchEngineLand for 3 consecutive years.', gradient: 'from-red-600 to-red-500' },
  { icon: Users, title: 'Elite Talent Pods', description: 'Certified strategists, data scientists, and senior engineers with 10+ years enterprise experience.', gradient: 'from-red-600 to-red-500' },
  { icon: Target, title: 'Direct Attribution', description: 'Full transparency with custom real-time dashboards mapping directly to client revenue.', gradient: 'from-red-600 to-red-500' },
  { icon: TrendingUp, title: 'Proven Multipliers', description: 'Average 300% increase in qualified organic pipeline within the first 6 months.', gradient: 'from-red-600 to-red-500' },
];

const coreValues = [
  { icon: Target, title: 'Revenue-First Focus', desc: 'We do not chase vanity metrics. Every dollar and keyword is measured against your bottom-line profitability and customer lifetime value.', gradient: 'from-red-600 to-red-500' },
  { icon: ShieldCheck, title: 'Radical Transparency', desc: 'No smoke and mirrors. You get live analytics dashboards, weekly strategic sprint reviews, and unfiltered performance data.', gradient: 'from-red-600 to-red-500' },
  { icon: Zap, title: 'Relentless Innovation', desc: 'We continuously test bleeding-edge AI models, programmatic frameworks, and conversion funnels to give you an unassailable edge.', gradient: 'from-red-600 to-red-500' },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 bg-background overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-[450px] h-[450px] bg-red-600/10 rounded-full blur-[140px] opacity-60" />
        <div className="absolute bottom-1/3 left-0 w-[450px] h-[450px] bg-red-900/20 rounded-full blur-[140px] opacity-60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-red-400 font-bold text-xs uppercase tracking-[0.2em] mb-4 bg-red-500/10 px-3.5 py-1.5 rounded-full border border-red-500/20">
              Agency Heritage
            </span>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 font-poppins">
              Engineered For Growth.
              <span className="block gradient-text">Driven by Data.</span>
            </h2>

            <p className="text-lg text-gray-300 mb-5 leading-relaxed">
              Founded in 2018, Beez Digital has evolved into a tier-one digital acceleration agency. We partner with ambitious
              startups and established enterprises to transform their search footprint and acquisition economics.
            </p>

            <p className="text-base text-gray-400 mb-10 leading-relaxed">
              Our multidisciplinary squads unite technical SEO architects, creative brand strategists, and performance
              media buyers into a synchronized growth engine.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {highlights.map((h, index) => (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card rounded-xl p-4 flex items-start gap-3.5 border border-white/5"
                >
                  <div className={`flex-shrink-0 w-10 h-10 bg-gradient-to-br ${h.gradient} rounded-xl flex items-center justify-center shadow-md shadow-red-600/20`}>
                    <h.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white mb-1 font-poppins">{h.title}</h3>
                    <p className="text-gray-400 text-xs leading-relaxed">{h.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link href="/about" className="inline-flex items-center gap-2 text-sm font-bold text-red-400 hover:text-white transition-colors group">
              <span>Read our full company story &amp; milestones</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* 3D Background Element */}
            <About3DElement />
            
            <div className="glass-strong rounded-3xl p-8 sm:p-10 relative overflow-hidden z-10 border border-white/10 bg-black/60 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 via-transparent to-transparent pointer-events-none rounded-3xl" />
              <div className="relative z-10 text-center">
                <h3 className="text-2xl font-bold text-white mb-8 font-poppins">Our Track Record</h3>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    { value: '$75M+', label: 'Client Revenue Generated' },
                    { value: '200+', label: 'Active Enterprise Clients' },
                    { value: '98%', label: 'Annual Retention Rate' },
                    { value: '50+', label: 'In-House Specialists' },
                  ].map((item) => (
                    <div key={item.label} className="glass-card rounded-xl p-5 text-center border border-white/5">
                      <div className="text-3xl font-black gradient-text mb-1 font-poppins">{item.value}</div>
                      <div className="text-gray-400 text-xs font-medium">{item.label}</div>
                    </div>
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed italic">
                  &ldquo;We don&rsquo;t believe in guesswork. We treat digital marketing as an exact science of customer intent, high-velocity testing, and disciplined execution.&rdquo;
                </p>
              </div>
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3.5, repeat: Infinity }}
              className="absolute -top-6 -left-6 z-20 glass-strong rounded-2xl px-5 py-4 shadow-xl border border-red-500/30 bg-black/80"
            >
              <div className="text-2xl font-black gradient-text font-poppins">300%</div>
              <div className="text-[11px] text-gray-300 font-medium">Avg. Pipeline Growth</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-6 -right-6 z-20 glass-strong rounded-2xl px-5 py-4 shadow-xl border border-red-500/30 bg-black/80"
            >
              <div className="text-2xl font-black gradient-text font-poppins">24/7</div>
              <div className="text-[11px] text-gray-300 font-medium">Monitoring &amp; Support</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-28 text-center"
        >
          <h3 className="text-3xl font-black text-white mb-12 font-poppins">
            Our Guiding <span className="gradient-text">Core Principles</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {coreValues.map((val, index) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="glass-card rounded-2xl p-8 transition-all duration-300 border border-white/5 text-left flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 bg-gradient-to-br ${val.gradient} rounded-xl flex items-center justify-center mb-6 shadow-md shadow-red-600/20`}>
                    <val.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-3 font-poppins">{val.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{val.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
