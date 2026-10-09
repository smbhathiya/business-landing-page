'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail, Sparkles, ArrowRight, ShieldCheck, Zap, Users, Briefcase } from 'lucide-react';

const fullTeam = [
  {
    name: 'Sarah Johnson',
    role: 'CEO & Founder',
    superpower: 'Enterprise Search Architecture',
    bio: '12+ years of enterprise marketing experience. Former Google Ads specialist overseeing $50M+ ARR growth architectures.',
    social: { linkedin: 'https://linkedin.com', twitter: 'https://twitter.com', email: 'sarah@beezdigital.com' },
    gradient: 'from-red-600 to-red-500',
  },
  {
    name: 'Michael Chen',
    role: 'Head of Technical SEO & AI',
    superpower: 'Programmatic Indexation & Semantic Graphs',
    bio: 'Data scientist and programmatic engineer specializing in enterprise crawls, semantic topic graphs, and indexation speed.',
    social: { linkedin: 'https://linkedin.com', twitter: 'https://twitter.com', email: 'michael@beezdigital.com' },
    gradient: 'from-red-600 to-red-500',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Creative Director',
    superpower: 'High-Converting Visual Systems',
    bio: 'Award-winning creative director crafting visual storytelling, viral social formats, and UI/UX design systems.',
    social: { linkedin: 'https://linkedin.com', twitter: 'https://twitter.com', email: 'emily@beezdigital.com' },
    gradient: 'from-red-600 to-red-500',
  },
  {
    name: 'David Kim',
    role: 'Lead Full-Stack Web Architect',
    superpower: 'Next.js 16 & Sub-Second Core Web Vitals',
    bio: 'Full-stack software engineer crafting ultra-fast web applications with 99+ PageSpeed scores and headless CRO integrations.',
    social: { linkedin: 'https://linkedin.com', twitter: 'https://twitter.com', email: 'david@beezdigital.com' },
    gradient: 'from-red-600 to-red-500',
  },
  {
    name: 'Lisa Thompson',
    role: 'Paid Acquisition Lead',
    superpower: 'Predictive Media Buying & ROAS Optimization',
    bio: 'Managing $20M+ in annual media spend across Google, Meta, and YouTube with strict focus on blended ROAS profitability.',
    social: { linkedin: 'https://linkedin.com', twitter: 'https://twitter.com', email: 'lisa@beezdigital.com' },
    gradient: 'from-red-600 to-red-500',
  },
  {
    name: 'Alex Morgan',
    role: 'Content Strategy Director',
    superpower: 'Inbound Demand Generation',
    bio: 'Deep-funnel content ecosystem architect turning organic searchers into qualified enterprise pipeline and booked sales calls.',
    social: { linkedin: 'https://linkedin.com', twitter: 'https://twitter.com', email: 'alex@beezdigital.com' },
    gradient: 'from-red-600 to-red-500',
  },
  {
    name: 'Jessica Reynolds',
    role: 'Senior CRO & Experimentation Specialist',
    superpower: 'Multivariate Conversion Funnels',
    bio: 'Behavioral psychologist and CRO engineer running hundreds of micro-experiments to eliminate friction from checkout flows.',
    social: { linkedin: 'https://linkedin.com', twitter: 'https://twitter.com', email: 'jessica@beezdigital.com' },
    gradient: 'from-red-600 to-red-500',
  },
  {
    name: 'Marcus Vance',
    role: 'Retention & Lifecycle Automation Lead',
    superpower: 'HubSpot & Klaviyo Dynamic Flows',
    bio: 'Architecting behavioral email and SMS nurture sequences that maximize customer lifetime value and drive repeat orders.',
    social: { linkedin: 'https://linkedin.com', twitter: 'https://twitter.com', email: 'marcus@beezdigital.com' },
    gradient: 'from-red-600 to-red-500',
  },
];

const openPositions = [
  {
    title: 'Senior Technical SEO Strategist',
    department: 'Organic Growth',
    type: 'Full-Time (Remote)',
    experience: '5+ Years',
  },
  {
    title: 'Performance Media Buyer (Meta & TikTok)',
    department: 'Paid Acquisition',
    type: 'Full-Time (Remote)',
    experience: '3+ Years',
  },
  {
    title: 'Next.js & Frontend Engineer',
    department: 'Web Engineering',
    type: 'Full-Time (Remote)',
    experience: '4+ Years',
  },
  {
    title: 'Conversion Copywriter & Content Strategist',
    department: 'Creative & Editorial',
    type: 'Full-Time (Remote)',
    experience: '3+ Years',
  },
];

export default function TeamClient() {
  return (
    <div className="relative pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28">
        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {fullTeam.map((member) => (
            <div
              key={member.name}
              className="glass-card rounded-3xl p-6 sm:p-8 text-center border border-white/5 flex flex-col justify-between hover:border-red-500/40 transition-all duration-300 group"
            >
              <div>
                <div className={`w-16 h-16 bg-gradient-to-br ${member.gradient} rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg shadow-red-600/30 group-hover:scale-105 transition-transform`}>
                  <span className="text-2xl font-black text-white font-poppins">{member.name.charAt(0)}</span>
                </div>

                <h3 className="text-lg font-bold text-white mb-0.5 font-poppins">{member.name}</h3>
                <p className="gradient-text font-bold text-xs mb-2">{member.role}</p>

                <div className="inline-block px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] text-gray-300 mb-4 font-semibold">
                  ⚡ {member.superpower}
                </div>

                <p className="text-gray-400 text-xs leading-relaxed mb-6">{member.bio}</p>
              </div>

              <div className="flex justify-center gap-2.5 pt-4 border-t border-white/5">
                {[
                  { href: member.social.linkedin, Icon: Linkedin, label: 'LinkedIn' },
                  { href: member.social.twitter, Icon: Twitter, label: 'Twitter' },
                  { href: `mailto:${member.social.email}`, Icon: Mail, label: 'Email' },
                ].map(({ href, Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 glass-card rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:border-red-500/40 transition-colors"
                    aria-label={label}
                  >
                    <Icon size={14} />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* The Pod Advantage */}
        <div className="glass-strong rounded-3xl p-10 sm:p-14 border border-white/10 bg-black/60">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block text-red-400 font-bold text-xs uppercase tracking-[0.2em] mb-3 bg-red-500/10 px-3.5 py-1 rounded-full border border-red-500/20">
              Operational Superiority
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 font-poppins">
              The Dedicated Pod Advantage
            </h2>
            <p className="text-gray-400 text-sm">
              Why our synchronized pods outperform bloated legacy agencies every single time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'No Junior Hand-Offs',
                desc: 'You only work with senior practitioners who have managed millions in ad spend and engineered complex search architectures.',
                icon: ShieldCheck,
              },
              {
                title: 'Direct Slack Communication',
                desc: 'No ticketing queues or layers of account coordinators. Chat directly with your growth architect in shared Slack channels.',
                icon: Zap,
              },
              {
                title: 'Synchronized Execution',
                desc: 'Your SEO lead, developer, and media buyer work from the same roadmap, ensuring unified creative, tagging, and attribution.',
                icon: Users,
              },
            ].map((item) => (
              <div key={item.title} className="glass-card rounded-2xl p-6 border border-white/5 text-center">
                <item.icon className="w-8 h-8 text-red-500 mx-auto mb-3" />
                <h3 className="text-base font-bold text-white mb-2 font-poppins">{item.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Careers & Open Positions */}
        <div className="glass-card rounded-3xl p-10 sm:p-14 border border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
            <div>
              <span className="inline-block text-red-400 font-bold text-xs uppercase tracking-[0.2em] mb-2 bg-red-500/10 px-3.5 py-1 rounded-full border border-red-500/20">
                Join Our Pods
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white font-poppins">
                We Are Actively Hiring
              </h2>
              <p className="text-gray-400 text-sm mt-2">
                Join a high-performance culture that values autonomy, continuous learning, and big results.
              </p>
            </div>
            <Link href="/contact">
              <button className="glass-card text-white px-6 py-2.5 rounded-full font-bold text-xs border border-white/20 hover:bg-white/5 cursor-pointer">
                Submit General Application
              </button>
            </Link>
          </div>

          <div className="space-y-4">
            {openPositions.map((job) => (
              <div
                key={job.title}
                className="glass-card rounded-2xl p-6 border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-red-500/30 transition-colors"
              >
                <div>
                  <h3 className="text-base font-bold text-white font-poppins mb-1">{job.title}</h3>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400">
                    <span>{job.department}</span>
                    <span>•</span>
                    <span className="text-emerald-400">{job.type}</span>
                    <span>•</span>
                    <span>{job.experience}</span>
                  </div>
                </div>

                <Link href="/contact">
                  <button className="bg-gradient-to-r from-red-600 to-red-500 text-white px-5 py-2.5 rounded-xl font-bold text-xs glow-btn cursor-pointer inline-flex items-center gap-1.5 self-start sm:self-auto">
                    <span>Apply Now</span>
                    <ArrowRight size={14} />
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="glass-strong rounded-3xl p-12 border border-red-500/30 bg-black/70 max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black text-white font-poppins">
              Ready to Accelerate With Our Dedicated Squad?
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              Book a strategic consultation to discover how our practitioners can deploy an integrated growth architecture for your business.
            </p>
            <div className="flex justify-center">
              <Link href="/contact">
                <button className="bg-gradient-to-r from-red-600 to-red-500 text-white px-8 py-4 rounded-full font-bold text-sm glow-btn cursor-pointer">
                  Schedule Free Strategy Session
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
