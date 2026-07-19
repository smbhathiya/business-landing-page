'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechStart Inc.',
    content: 'abc transformed our online presence completely. Our organic traffic increased by 400% in just 6 months, and our conversion rates improved dramatically.',
    rating: 5,
    gradient: 'from-red-600 to-red-500',
  },
  {
    name: 'Michael Chen',
    role: 'Marketing Director, GrowthCo',
    content: 'The team at abc is exceptional. They not only delivered on their promises but exceeded our expectations. Our ROI has been incredible.',
    rating: 5,
    gradient: 'from-red-600 to-red-500',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Founder, EcoStyle',
    content: 'Working with abc has been a game-changer for our business. Their strategic approach and attention to detail have helped us scale rapidly.',
    rating: 5,
    gradient: 'from-red-600 to-red-500',
  },
];

const impactStats = [
  { value: '500+', label: 'Campaigns Launched' },
  { value: '200+', label: 'Happy Clients' },
  { value: '95%', label: 'Success Rate' },
  { value: '300%', label: 'Avg. Traffic Increase' },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="relative py-24 bg-background overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-red-900/30 rounded-full blur-[120px] opacity-50" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-red-900/20 rounded-full blur-[120px] opacity-50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-red-500 font-semibold text-xs uppercase tracking-[0.18em] mb-4">
            Testimonials
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-5">
            Success Stories &amp;
            <span className="block gradient-text">Testimonials</span>
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            See how we&apos;ve helped businesses achieve remarkable growth through our digital marketing expertise.
          </p>
        </motion.div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16" style={{ perspective: 1200 }}>
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.12 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02, rotateX: 3, rotateY: -3, zIndex: 10, boxShadow: "0 25px 50px -12px rgba(220, 38, 38, 0.2)" }}
              className="glass-card rounded-2xl p-7 transition-all duration-300 flex flex-col transform-gpu"
            >
              <Quote className="w-7 h-7 text-red-500 mb-5 flex-shrink-0" />

              <div className="flex mb-3">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-red-500 fill-current" />
                ))}
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-7 leading-relaxed text-sm flex-1">
                &ldquo;{t.content}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 bg-gradient-to-br ${t.gradient} rounded-full flex items-center justify-center text-gray-900 dark:text-white font-bold text-sm flex-shrink-0`}>
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white text-sm">{t.name}</div>
                  <div className="text-gray-500 dark:text-gray-400 text-xs">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats banner */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="glass-strong rounded-3xl p-10 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 to-black/20 pointer-events-none" />
          <h3 className="relative z-10 text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Our <span className="gradient-text">Impact in Numbers</span>
          </h3>
          <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-4">
            {impactStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45, delay: i * 0.09 }}
                viewport={{ once: true }}
                className="glass-card rounded-xl py-5 px-3"
              >
                <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                <div className="text-gray-500 dark:text-gray-400 text-xs">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
