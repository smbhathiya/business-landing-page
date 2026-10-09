'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail, ArrowRight, Sparkles } from 'lucide-react';

const teamMembers = [
  {
    name: 'Sarah Johnson',
    role: 'CEO & Founder',
    expertise: 'Growth Architecture & Search Strategy',
    bio: '12+ years of enterprise growth experience. Former Google ads lead architecting systems for $50M+ ARR businesses.',
    social: { linkedin: 'https://linkedin.com', twitter: 'https://twitter.com', email: 'sarah@abc.com' },
    gradient: 'from-red-600 to-red-500',
  },
  {
    name: 'Michael Chen',
    role: 'Head of Technical SEO & AI',
    expertise: 'Algorithmic Optimization & Core Web Vitals',
    bio: 'Data scientist and programmatic engineer specializing in enterprise crawls, semantic graphs, and indexation speed.',
    social: { linkedin: 'https://linkedin.com', twitter: 'https://twitter.com', email: 'michael@abc.com' },
    gradient: 'from-red-600 to-red-500',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Creative Director',
    expertise: 'Brand Identity & High-Converting UX',
    bio: 'Award-winning creative strategist crafting visual narratives and viral short-form media for top global brands.',
    social: { linkedin: 'https://linkedin.com', twitter: 'https://twitter.com', email: 'emily@abc.com' },
    gradient: 'from-red-600 to-red-500',
  },
  {
    name: 'David Kim',
    role: 'Lead Full-Stack Web Architect',
    expertise: 'Next.js, Edge Compute & Performance',
    bio: 'Full-stack software engineer crafting ultra-fast web applications with sub-second page loads and 100/100 Core Web Vitals.',
    social: { linkedin: 'https://linkedin.com', twitter: 'https://twitter.com', email: 'david@abc.com' },
    gradient: 'from-red-600 to-red-500',
  },
  {
    name: 'Lisa Thompson',
    role: 'Paid Acquisition Lead',
    expertise: 'Performance Media & Multi-Touch Attribution',
    bio: 'Managing $20M+ in annual media spend across Google, Meta, and YouTube with strict focus on blended ROAS profitability.',
    social: { linkedin: 'https://linkedin.com', twitter: 'https://twitter.com', email: 'lisa@abc.com' },
    gradient: 'from-red-600 to-red-500',
  },
  {
    name: 'Alex Morgan',
    role: 'Content Strategy Director',
    expertise: 'Inbound Demand Gen & Thought Leadership',
    bio: 'Specialist in deep-funnel content ecosystems that capture high-intent searches and convert organic readers into booked demos.',
    social: { linkedin: 'https://linkedin.com', twitter: 'https://twitter.com', email: 'alex@abc.com' },
    gradient: 'from-red-600 to-red-500',
  },
];

export default function Team() {
  return (
    <section id="team" className="relative py-28 bg-background overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[450px] h-[450px] bg-red-600/10 rounded-full blur-[140px] opacity-60" />
        <div className="absolute bottom-0 left-1/4 w-[450px] h-[450px] bg-red-900/20 rounded-full blur-[140px] opacity-50" />
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
            Growth Architects
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-5 font-poppins">
            Meet the Minds Behind
            <span className="block gradient-text">Your Revenue Multipliers</span>
          </h2>
          <p className="text-lg text-gray-400">
            We don&rsquo;t outsource to junior contractors. You partner with elite practitioners who eat, breathe, and live growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(239, 68, 68, 0.15)" }}
              className="glass-card rounded-2xl p-8 text-center transition-all duration-300 border border-white/5 flex flex-col justify-between"
            >
              <div>
                <div className={`w-16 h-16 bg-gradient-to-br ${member.gradient} rounded-2xl mx-auto mb-5 flex items-center justify-center shadow-lg shadow-red-600/30`}>
                  <span className="text-2xl font-black text-white font-poppins">{member.name.charAt(0)}</span>
                </div>

                <h3 className="text-lg font-bold text-white mb-1 font-poppins">{member.name}</h3>
                <p className="gradient-text font-bold text-xs mb-2">{member.role}</p>
                <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] text-gray-300 mb-4 font-medium">
                  {member.expertise}
                </div>
                <p className="text-gray-400 text-xs leading-relaxed mb-6">{member.bio}</p>
              </div>

              <div className="flex justify-center gap-3 pt-4 border-t border-white/5">
                {[
                  { href: member.social.linkedin, Icon: Linkedin, label: 'LinkedIn' },
                  { href: member.social.twitter, Icon: Twitter, label: 'Twitter' },
                  { href: `mailto:${member.social.email}`, Icon: Mail, label: 'Email' },
                ].map(({ href, Icon, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-9 h-9 glass-card rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:border-red-500/40 transition-colors"
                    aria-label={label}
                  >
                    <Icon size={14} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Link to Full Team Page & Join Us */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass-strong rounded-3xl p-10 md:p-12 relative overflow-hidden border border-white/10 bg-black/60">
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 via-transparent to-red-600/10 pointer-events-none" />
            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-red-400 uppercase tracking-wider mb-3">
                <Sparkles size={14} />
                <span>Careers &amp; Leadership</span>
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-4 font-poppins">
                Want to Work With or Join Our Elite Team?
              </h3>
              <p className="text-gray-300 text-sm mb-8 leading-relaxed">
                Learn more about our agency culture, leadership vision, and open positions on our dedicated team page.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/team">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto glass-card text-white px-8 py-3.5 rounded-full font-bold text-sm border border-red-500/40 hover:bg-white/5 transition-all inline-flex items-center justify-center gap-2"
                  >
                    <span>View All Team &amp; Careers</span>
                    <ArrowRight size={16} />
                  </motion.button>
                </Link>
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto bg-gradient-to-r from-red-600 to-red-500 text-white px-8 py-3.5 rounded-full font-bold text-sm glow-btn transition-all"
                  >
                    Schedule a Consultation
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
