'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Search, BarChart3, Share2, PenTool, Smartphone, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';
import Services3DElement from './Services3DElement';

const services = [
  {
    id: 'seo',
    icon: Search,
    title: 'SEO Optimization',
    description: 'Dominate organic search rankings and capture high-intent buyers with data-driven technical, on-page, and authority SEO.',
    features: ['Keyword Intelligence', 'Technical SEO Architecture', 'High-Authority Link Building', 'Programmatic Pages'],
    gradient: 'from-red-600 to-red-500',
    stat: '+310% Traffic',
  },
  {
    id: 'ppc',
    icon: BarChart3,
    title: 'PPC Advertising',
    description: 'Maximize your advertising return with hyper-targeted paid media across Google Ads, YouTube, and Meta ecosystems.',
    features: ['Google Search & Shopping', 'Retargeting Funnels', 'ROAS Optimization', 'Real-time Bidding Algorithms'],
    gradient: 'from-red-600 to-red-500',
    stat: '4.2x ROAS Avg',
  },
  {
    id: 'social',
    icon: Share2,
    title: 'Social Media Marketing',
    description: 'Build loyal brand advocates through viral short-form video creative, community management, and influencer campaigns.',
    features: ['Content Production', 'Community Engagement', 'Influencer Partnerships', 'Social Commerce Funnels'],
    gradient: 'from-red-600 to-red-500',
    stat: '85% More Reach',
  },
  {
    id: 'content',
    icon: PenTool,
    title: 'Content Marketing',
    description: 'Produce high-converting content hubs, thought-leadership whitepapers, and customer acquisition copy.',
    features: ['Editorial Calendar', 'SEO Thought Leadership', 'Ebooks & Whitepapers', 'Newsletter Architecture'],
    gradient: 'from-red-600 to-red-500',
    stat: '3.4x Lead Velocity',
  },
  {
    id: 'web-design',
    icon: Smartphone,
    title: 'Web Design & Development',
    description: 'Ultra-fast Next.js web applications and landing pages engineered specifically for high conversion rates and Core Web Vitals.',
    features: ['Responsive UI/UX', 'Next.js App Router', 'Speed Optimization (95+ score)', 'A/B Experimentation'],
    gradient: 'from-red-600 to-red-500',
    stat: '<1.2s Load Time',
  },
  {
    id: 'automation',
    icon: Zap,
    title: 'Marketing Automation',
    description: 'Streamline client lifecycles with behavioral CRM sequences, lead scoring, and automated retention funnels.',
    features: ['CRM Integration', 'Automated Email Flows', 'Lead Scoring Triggers', 'Multi-Touch Attribution'],
    gradient: 'from-red-600 to-red-500',
    stat: '+62% Retention',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Services() {
  return (
    <section id="services" className="relative py-28 bg-background overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 right-16 w-80 h-80 bg-red-600/10 rounded-full blur-[120px] opacity-60" />
        <div className="absolute bottom-16 left-16 w-80 h-80 bg-red-900/20 rounded-full blur-[120px] opacity-40" />
      </div>

      {/* 3D Background Element */}
      <Services3DElement />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <span className="inline-block text-red-400 font-bold text-xs uppercase tracking-[0.2em] mb-4 bg-red-500/10 px-3.5 py-1.5 rounded-full border border-red-500/20">
            Engineered Growth Services
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-5 font-poppins">
            Holistic Digital Marketing
            <span className="block gradient-text">Built to Scale Revenue</span>
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            Data-backed multi-channel execution designed to turn casual browsers into loyal, high-lifetime-value customers.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-20"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgba(239, 68, 68, 0.2)" }}
              className="glass-card rounded-2xl p-8 transition-all duration-300 border border-white/5 flex flex-col justify-between group"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div
                    className={`inline-flex items-center justify-center bg-gradient-to-br ${service.gradient} rounded-xl shadow-lg shadow-red-600/25 p-3`}
                  >
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xs font-semibold text-red-400 bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20">
                    {service.stat}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors font-poppins">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2.5 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-300 text-xs">
                      <CheckCircle2 className="w-3.5 h-3.5 text-red-500 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href={`/services#${service.id}`}
                className="inline-flex items-center gap-2 text-xs font-bold text-red-400 hover:text-white transition-colors group/link pt-4 border-t border-white/5"
              >
                <span>Deep dive &amp; deliverables</span>
                <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* View All & CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="glass-strong rounded-3xl p-10 md:p-14 relative overflow-hidden border border-red-500/20 bg-black/60">
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 via-transparent to-red-600/10 pointer-events-none" />
            <div className="relative z-10 max-w-2xl mx-auto">
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-4 font-poppins">
                Need a Custom Multichannel Strategy?
              </h3>
              <p className="text-base mb-8 text-gray-300 leading-relaxed">
                Explore our full service blueprints or book a discovery call to build a tailored roadmap for your revenue goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/services">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto glass-card text-white px-8 py-3.5 rounded-full font-bold text-sm border border-red-500/40 hover:bg-white/5 transition-all"
                  >
                    View All Service Details
                  </motion.button>
                </Link>
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto bg-gradient-to-r from-red-600 to-red-500 text-white px-8 py-3.5 rounded-full font-bold text-sm glow-btn transition-all"
                  >
                    Get Free Consultation
                  </motion.button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
