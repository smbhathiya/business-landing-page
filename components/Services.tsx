'use client';

import { motion } from 'framer-motion';
import { Search, BarChart3, Share2, PenTool, Smartphone, Zap } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Improve your search engine rankings and drive organic traffic with comprehensive SEO strategies.',
    features: ['Keyword Research', 'On-Page SEO', 'Technical SEO', 'Link Building'],
    gradient: 'from-amber-500 to-orange-400',
  },
  {
    icon: BarChart3,
    title: 'PPC Advertising',
    description: 'Maximize your ROI with targeted pay-per-click campaigns across Google Ads, Facebook, and more.',
    features: ['Google Ads', 'Facebook Ads', 'Remarketing', 'Conversion Tracking'],
    gradient: 'from-yellow-500 to-amber-400',
  },
  {
    icon: Share2,
    title: 'Social Media Marketing',
    description: 'Build meaningful connections with your audience through strategic social media campaigns.',
    features: ['Content Strategy', 'Community Management', 'Paid Social', 'Analytics'],
    gradient: 'from-orange-500 to-amber-500',
  },
  {
    icon: PenTool,
    title: 'Content Marketing',
    description: 'Create compelling content that resonates with your audience and drives engagement.',
    features: ['Blog Writing', 'Video Content', 'Infographics', 'Email Marketing'],
    gradient: 'from-amber-400 to-yellow-500',
  },
  {
    icon: Smartphone,
    title: 'Web Design & Development',
    description: 'Build stunning, high-converting websites that provide exceptional user experiences.',
    features: ['Responsive Design', 'UX/UI Design', 'E-commerce', 'Performance Optimization'],
    gradient: 'from-amber-500 to-yellow-500',
  },
  {
    icon: Zap,
    title: 'Marketing Automation',
    description: 'Streamline your marketing processes and nurture leads with smart automation tools.',
    features: ['Email Automation', 'Lead Scoring', 'CRM Integration', 'Analytics Dashboard'],
    gradient: 'from-yellow-500 to-amber-500',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

const Services = () => {
  return (
    <section id="services" className="relative py-24 bg-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 right-16 w-80 h-80 bg-amber-200 rounded-full blur-[110px] opacity-50" />
        <div className="absolute bottom-16 left-16 w-80 h-80 bg-yellow-200 rounded-full blur-[110px] opacity-50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-amber-600 font-semibold text-xs uppercase tracking-[0.18em] mb-4">
            What We Do
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
            Our Digital Marketing
            <span className="block gradient-text">Services</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Comprehensive digital marketing solutions designed to grow your business and achieve
            measurable results in today&rsquo;s competitive landscape.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          style={{ perspective: 1200 }}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.03, rotateX: 4, rotateY: 4, zIndex: 10, boxShadow: "0 25px 50px -12px rgba(245, 158, 11, 0.2)" }}
              className="glass-card rounded-2xl p-7 transition-all duration-300 transform-gpu"
            >
              <div
                className={`inline-flex items-center justify-center bg-gradient-to-br ${service.gradient} rounded-xl mb-5 shadow-lg`}
                style={{ width: 52, height: 52 }}
              >
                <service.icon className="w-6 h-6 text-white" />
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-2.5">{service.title}</h3>
              <p className="text-gray-500 text-sm mb-5 leading-relaxed">{service.description}</p>

              <ul className="space-y-1.5">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-600 text-sm">
                    <span className="w-1.5 h-1.5 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full mr-2.5 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="glass-strong rounded-2xl p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-50/60 to-yellow-50/60 pointer-events-none" />
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to Transform Your Business?</h3>
              <p className="text-lg mb-8 text-gray-500">
                Let&rsquo;s discuss how our services can help you achieve your goals.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-8 py-4 rounded-full font-semibold text-base glow-btn transition-all duration-300"
              >
                Get Free Consultation
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
