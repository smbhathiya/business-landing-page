'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play, TrendingUp, Users, Target } from 'lucide-react';
import Hero3DBackground from './Hero3DBackground';

const stats = [
  { icon: TrendingUp, value: '500+', label: 'Campaigns Launched' },
  { icon: Users, value: '200+', label: 'Happy Clients' },
  { icon: Target, value: '95%', label: 'Success Rate' },
];

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <Hero3DBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="text-center">
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 glass-card px-5 py-2.5 rounded-full mb-10"
          >
            <span className="w-2 h-2 bg-red-900/30 rounded-full animate-pulse" />
            <span className="text-gray-600 dark:text-gray-300 text-sm font-medium">Trusted by 200+ Businesses Worldwide</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
          >
            Transform Your Business with
            <span className="block gradient-text mt-2">Digital Excellence</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            We help businesses grow their digital presence with cutting-edge marketing strategies,
            data-driven insights, and innovative solutions that deliver real results.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-red-600 to-red-500 text-white px-8 py-4 rounded-full font-semibold text-base glow-btn transition-all duration-300 flex items-center gap-2"
            >
              Start Your Journey
              <ArrowRight size={18} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glass-card text-gray-600 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white px-8 py-4 rounded-full font-semibold text-base flex items-center gap-2 transition-all duration-300"
            >
              <Play size={18} className="text-red-500" />
              Watch Demo
            </motion.button>
          </motion.div>

          {/* Stat Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-xl mx-auto"
            style={{ perspective: 1000 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -8, rotateX: 5, rotateY: -5, zIndex: 10, boxShadow: "0 20px 40px rgba(220, 38, 38, 0.15)" }}
                className="glass-card rounded-2xl p-5 text-center transform-gpu"
              >
                <div className="flex justify-center mb-3">
                  <div className="w-9 h-9 bg-gradient-to-br from-red-600 to-red-500 rounded-xl flex items-center justify-center">
                    <stat.icon className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-0.5">{stat.value}</div>
                <div className="text-gray-500 dark:text-gray-400 text-xs">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.3 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-400 dark:border-gray-800 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-gradient-to-b from-red-600 to-red-500 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
