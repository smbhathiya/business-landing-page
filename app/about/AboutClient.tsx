'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Award,
  Users,
  Target,
  TrendingUp,
  ShieldCheck,
  Zap,
  Globe2,
  CheckCircle,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import About3DElement from '../../components/About3DElement';

const milestones = [
  {
    year: '2018',
    title: 'Inception in Tech City',
    description: 'Founded with a tight squad of 4 ex-Google data analysts committed to bringing algorithmic science to digital acquisition.',
  },
  {
    year: '2020',
    title: 'Enterprise Search Pivot',
    description: 'Expanded into enterprise technical SEO & headless web architecture, crossing $15M in client pipeline generated.',
  },
  {
    year: '2022',
    title: 'Performance Agency of the Year',
    description: 'Awarded Top Growth Agency by Clutch and recognized for surpassing 300% average organic traffic growth benchmarks.',
  },
  {
    year: '2024',
    title: 'AI Attribution & Programmatic Scale',
    description: 'Launched our proprietary real-time attribution data models and programmatic content testing engines.',
  },
  {
    year: '2026',
    title: 'Global Multichannel Operations',
    description: 'Supporting 200+ active enterprise clients worldwide with over 50 specialists across 3 continents.',
  },
];

const pillars = [
  {
    title: 'Radical Ownership',
    desc: 'We treat your capital as our own. We never hide behind ambiguous agency retainers; we celebrate transparent, audited ROI.',
    icon: ShieldCheck,
  },
  {
    title: 'Algorithmic Precision',
    desc: 'No arbitrary opinions or guesswork. Every hypothesis is tested with statistical significance, search intent graphs, and behavioral tracking.',
    icon: Target,
  },
  {
    title: 'Velocity & Agility',
    desc: 'The digital marketing landscape evolves weekly. We deploy rapid weekly sprints, continuously testing creatives and landing experiences.',
    icon: Zap,
  },
  {
    title: 'Full-Funnel Synergy',
    desc: 'SEO feeds paid media audiences; paid media data uncovers top-converting organic keywords; CRO doubles efficiency for both.',
    icon: TrendingUp,
  },
];

const accreditations = [
  { title: 'Google Premier Partner', desc: 'Top 3% of agencies recognized for client growth and spend management' },
  { title: 'Meta Certified Agency Partner', desc: 'Expertise in advanced creative experimentation and CAPI integrations' },
  { title: 'HubSpot Diamond Solutions Partner', desc: 'Masters of CRM lifecycle automation and closed-loop attribution' },
  { title: 'Clutch Global Leader', desc: 'Ranked #1 for B2B Digital Marketing and Search Engine Optimization' },
];

export default function AboutClient() {
  return (
    <div className="relative pb-28">
      {/* 3D Visual Accent */}
      <div className="relative h-20 -mt-10 overflow-hidden pointer-events-none">
        <About3DElement />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28">
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="inline-block text-red-400 font-bold text-xs uppercase tracking-[0.2em] mb-4 bg-red-500/10 px-3.5 py-1.5 rounded-full border border-red-500/20">
              The Genesis
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-6 font-poppins leading-tight">
              Why We Built An Agency That Operates Like A Software Company
            </h2>
            <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
              <p>
                In 2018, most digital agencies operated like black boxes. Clients were handed glossy PDF reports full of impressions and clicks, but had zero visibility into whether those metrics actually generated money in the bank.
              </p>
              <p>
                We believed businesses deserved something dramatically better: a multidisciplinary partner that combines the technical rigor of software engineers with the storytelling of world-class creatives.
              </p>
              <p>
                Today, ABC manages over $50M in annual media spend and powers organic acquisition for both fast-growing startups and Fortune 500 enterprises across North America, Europe, and Asia-Pacific.
              </p>
            </div>
          </div>

          <div className="glass-strong rounded-3xl p-8 sm:p-10 border border-white/10 bg-black/60 relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-[80px] pointer-events-none" />
            <h3 className="text-xl font-bold text-white mb-6 font-poppins flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-red-500" />
              <span>Agency Quick Facts</span>
            </h3>

            <div className="space-y-4">
              {[
                { label: 'Year Established', value: '2018 (8+ Years of Excellence)' },
                { label: 'Client Retention Rate', value: '98% Annual Retainer Renewals' },
                { label: 'Average Client Pipeline Lift', value: '300% Within 6 Months' },
                { label: 'Global Team Size', value: '50+ In-House Specialists' },
                { label: 'Core Capabilities', value: 'SEO, PPC, Next.js, CRO, CRM' },
              ].map((item) => (
                <div key={item.label} className="flex justify-between items-center py-3 border-b border-white/5 text-xs sm:text-sm">
                  <span className="text-gray-400 font-medium">{item.label}</span>
                  <span className="text-white font-bold font-poppins">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Milestone Timeline */}
        <div className="glass-card rounded-3xl p-10 sm:p-14 border border-white/5">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-red-400 font-bold text-xs uppercase tracking-[0.2em] mb-4 bg-red-500/10 px-3.5 py-1.5 rounded-full border border-red-500/20">
              Our Journey
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 font-poppins">
              Key Growth Milestones
            </h2>
            <p className="text-gray-400 text-sm">
              Eight years of continuous iteration, expanding client impact, and algorithmic breakthroughs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
            {milestones.map((m, index) => (
              <div key={m.year} className="glass-card rounded-2xl p-6 border border-white/5 relative">
                <span className="text-3xl font-black gradient-text font-poppins block mb-2">{m.year}</span>
                <h3 className="text-sm font-bold text-white mb-2 font-poppins">{m.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{m.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Operating Pillars */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-red-400 font-bold text-xs uppercase tracking-[0.2em] mb-4 bg-red-500/10 px-3.5 py-1.5 rounded-full border border-red-500/20">
              Our DNA
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 font-poppins">
              Our Core Operating Principles
            </h2>
            <p className="text-gray-400 text-sm">
              The fundamental beliefs that guide how we engineer client campaigns every single day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="glass-card rounded-2xl p-8 border border-white/5 text-left flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center text-red-500 mb-6 border border-red-500/20">
                    <pillar.icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 font-poppins">{pillar.title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Accreditations & Badges */}
        <div className="glass-strong rounded-3xl p-10 sm:p-14 border border-white/10 bg-black/60">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-red-400 font-bold text-xs uppercase tracking-[0.2em] mb-3 bg-red-500/10 px-3.5 py-1 rounded-full border border-red-500/20">
              Verified Excellence
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-3 font-poppins">
              Industry Certifications &amp; Accreditations
            </h2>
            <p className="text-gray-400 text-xs">
              Direct access to tier-one beta ad programs, search engine support, and executive partner networks.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {accreditations.map((acc) => (
              <div key={acc.title} className="glass-card rounded-2xl p-6 border border-white/5 text-center">
                <CheckCircle className="w-8 h-8 text-red-500 mx-auto mb-3" />
                <h3 className="text-sm font-bold text-white mb-2 font-poppins">{acc.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{acc.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Next Step CTA */}
        <div className="text-center">
          <div className="glass-card rounded-3xl p-12 border border-red-500/30 bg-black/70 max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black text-white font-poppins">
              Meet the Humans Behind Our High-Output Campaigns
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              Explore the bios, skills, and backgrounds of our senior team or request an exploratory consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/team">
                <button className="w-full sm:w-auto bg-gradient-to-r from-red-600 to-red-500 text-white px-8 py-3.5 rounded-full font-bold text-sm glow-btn cursor-pointer inline-flex items-center justify-center gap-2">
                  <span>Meet Our Leadership &amp; Team</span>
                  <ArrowRight size={16} />
                </button>
              </Link>
              <Link href="/contact">
                <button className="w-full sm:w-auto glass-card text-white px-8 py-3.5 rounded-full font-bold text-sm border border-white/20 hover:bg-white/5 cursor-pointer">
                  Schedule Discovery Call
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
