'use client';

import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const teamMembers = [
  {
    name: 'Sarah Johnson', role: 'CEO & Founder',
    bio: '10+ years of digital marketing experience. Former Google Ads specialist with a passion for data-driven strategies.',
    social: { linkedin: '#', twitter: '#', email: 'sarah@abc.com' },
    gradient: 'from-amber-500 to-orange-400',
  },
  {
    name: 'Michael Chen', role: 'Head of Strategy',
    bio: 'Strategic marketing expert with expertise in SEO, content marketing, and conversion optimization.',
    social: { linkedin: '#', twitter: '#', email: 'michael@abc.com' },
    gradient: 'from-yellow-500 to-amber-400',
  },
  {
    name: 'Emily Rodriguez', role: 'Creative Director',
    bio: 'Award-winning creative professional specializing in brand development and visual storytelling.',
    social: { linkedin: '#', twitter: '#', email: 'emily@abc.com' },
    gradient: 'from-orange-500 to-amber-500',
  },
  {
    name: 'David Kim', role: 'Technical Lead',
    bio: 'Full-stack developer and technical SEO expert with deep knowledge of web performance and user experience.',
    social: { linkedin: '#', twitter: '#', email: 'david@abc.com' },
    gradient: 'from-amber-400 to-yellow-500',
  },
  {
    name: 'Lisa Thompson', role: 'PPC Specialist',
    bio: 'Google Ads certified professional with 8+ years optimizing campaigns for maximum ROI.',
    social: { linkedin: '#', twitter: '#', email: 'lisa@abc.com' },
    gradient: 'from-amber-500 to-yellow-500',
  },
  {
    name: 'Alex Morgan', role: 'Content Strategist',
    bio: 'Content marketing expert with a background in journalism and digital storytelling.',
    social: { linkedin: '#', twitter: '#', email: 'alex@abc.com' },
    gradient: 'from-orange-500 to-amber-500',
  },
];

const Team = () => {
  return (
    <section id="team" className="relative py-24 bg-[#fafafa] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[450px] h-[450px] bg-orange-200 rounded-full blur-[140px] opacity-60" />
        <div className="absolute bottom-0 left-1/4 w-[450px] h-[450px] bg-yellow-200 rounded-full blur-[140px] opacity-60" />
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
            The Team
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
            Meet Our
            <span className="block gradient-text">Expert Team</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Our talented team brings together diverse expertise to deliver exceptional results for our clients.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" style={{ perspective: 1200 }}>
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.09 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.05, rotateX: 5, rotateY: 5, zIndex: 10, boxShadow: "0 20px 40px rgba(245, 158, 11, 0.15)" }}
              className="glass-card rounded-2xl p-7 text-center transition-all duration-300 transform-gpu"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${member.gradient} rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg`}>
                <span className="text-2xl font-bold text-white">{member.name.charAt(0)}</span>
              </div>

              <h3 className="text-base font-bold text-gray-900 mb-1">{member.name}</h3>
              <p className="gradient-text font-semibold text-sm mb-3">{member.role}</p>
              <p className="text-gray-500 text-xs leading-relaxed mb-5">{member.bio}</p>

              <div className="flex justify-center gap-2.5">
                {[
                  { href: member.social.linkedin, Icon: Linkedin, label: 'LinkedIn' },
                  { href: member.social.twitter, Icon: Twitter, label: 'Twitter' },
                  { href: `mailto:${member.social.email}`, Icon: Mail, label: 'Email' },
                ].map(({ href, Icon, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    whileHover={{ scale: 1.12, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-9 h-9 glass-card rounded-full flex items-center justify-center text-gray-400 hover:text-gray-700 transition-colors"
                    aria-label={label}
                  >
                    <Icon size={14} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

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
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to Work with Our Team?</h3>
              <p className="text-lg mb-8 text-gray-500">
                Let&rsquo;s discuss your project and see how our experts can help you achieve your goals.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-8 py-4 rounded-full font-semibold text-base glow-btn transition-all duration-300"
              >
                Get Started Today
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
