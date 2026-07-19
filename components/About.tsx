'use client';

import { motion } from 'framer-motion';
import { Award, Users, Target, TrendingUp } from 'lucide-react';
import About3DElement from './About3DElement';

const highlights = [
  { icon: Award, title: 'Industry Awards', description: 'Recognized as a top digital marketing agency for 3 consecutive years', gradient: 'from-red-600 to-red-500' },
  { icon: Users, title: 'Expert Team', description: 'Certified professionals with 10+ years of combined experience', gradient: 'from-red-600 to-red-500' },
  { icon: Target, title: 'Data-Driven', description: 'Results-focused approach with measurable ROI for every campaign', gradient: 'from-red-600 to-red-500' },
  { icon: TrendingUp, title: 'Proven Results', description: 'Average 300% increase in organic traffic for our clients', gradient: 'from-red-600 to-red-500' },
];

const coreValues = [
  { icon: Target, title: 'Results-Driven', desc: 'We focus on delivering measurable results that directly impact your business growth and success.', gradient: 'from-red-600 to-red-500' },
  { icon: Users, title: 'Client-First', desc: 'Your success is our priority. We build lasting partnerships based on trust, transparency, and mutual growth.', gradient: 'from-red-600 to-red-500' },
  { icon: TrendingUp, title: 'Innovation', desc: 'We stay ahead of industry trends and leverage cutting-edge technologies to give you a competitive edge.', gradient: 'from-red-600 to-red-500' },
];

const About = () => {
  return (
    <section id="about" className="relative py-24 bg-background overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-[450px] h-[450px] bg-red-900/30 rounded-full blur-[140px] opacity-60" />
        <div className="absolute bottom-1/3 left-0 w-[450px] h-[450px] bg-red-900/20 rounded-full blur-[140px] opacity-60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-red-500 font-semibold text-xs uppercase tracking-[0.18em] mb-4">
              Who We Are
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About
              <span className="block gradient-text">ABC</span>
            </h2>

            <p className="text-lg text-gray-500 dark:text-gray-400 mb-5 leading-relaxed">
              Founded in 2018, abc has been at the forefront of digital marketing innovation,
              helping businesses of all sizes achieve remarkable growth through strategic digital solutions.
            </p>

            <p className="text-base text-gray-500 dark:text-gray-400 mb-10 leading-relaxed">
              Our mission is to empower businesses with cutting-edge digital marketing strategies that
              not only drive traffic and conversions but also build lasting relationships with their audiences.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((h, index) => (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card rounded-xl p-4 flex items-start gap-3"
                >
                  <div className={`flex-shrink-0 w-9 h-9 bg-gradient-to-br ${h.gradient} rounded-xl flex items-center justify-center`}>
                    <h.icon className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">{h.title}</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed">{h.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* 3D Background Element peeking from behind the glass card */}
            <About3DElement />
            
            <div className="glass-strong rounded-3xl p-8 relative overflow-hidden z-10">
              <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 to-transparent dark:from-red-900/20 dark:to-transparent pointer-events-none rounded-3xl" />
              <div className="relative z-10 text-center">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Our Success Story</h3>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    { value: '500+', label: 'Campaigns' },
                    { value: '200+', label: 'Clients' },
                    { value: '95%', label: 'Success Rate' },
                    { value: '5+', label: 'Years' },
                  ].map((item) => (
                    <div key={item.label} className="glass-card rounded-xl p-4 text-center">
                      <div className="text-3xl font-bold gradient-text mb-1">{item.value}</div>
                      <div className="text-gray-500 dark:text-gray-400 text-xs">{item.label}</div>
                    </div>
                  ))}
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed italic">
                  &ldquo;We&rsquo;ve helped businesses achieve remarkable growth through innovative digital strategies
                  and unwavering commitment to results.&rdquo;
                </p>
              </div>
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3.5, repeat: Infinity }}
              className="absolute -top-5 -left-5 z-20 glass-strong rounded-2xl px-5 py-4 shadow-xl"
            >
              <div className="text-2xl font-bold gradient-text">300%</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Avg. Traffic Increase</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-5 -right-5 z-20 glass-strong rounded-2xl px-5 py-4 shadow-xl"
            >
              <div className="text-2xl font-bold gradient-text">24/7</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Support Available</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">
            Our <span className="gradient-text">Core Values</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {coreValues.map((val, index) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: index * 0.12 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="glass-card rounded-2xl p-8 transition-all duration-300"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${val.gradient} rounded-xl flex items-center justify-center mx-auto mb-5`}>
                  <val.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-base font-semibold text-gray-900 dark:text-white mb-3">{val.title}</h4>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
