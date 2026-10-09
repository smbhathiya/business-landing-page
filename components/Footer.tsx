'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight, Sparkles } from 'lucide-react';
import Logo from './Logo';

const footerNav = {
  services: [
    { name: 'SEO Optimization', href: '/services#seo' },
    { name: 'PPC Advertising', href: '/services#ppc' },
    { name: 'Social Media Marketing', href: '/services#social' },
    { name: 'Content Marketing', href: '/services#content' },
    { name: 'Web Design & Development', href: '/services#web-design' },
    { name: 'Marketing Automation', href: '/services#automation' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Case Studies', href: '/portfolio' },
    { name: 'Pricing & Plans', href: '/pricing' },
    { name: 'Contact Us', href: '/contact' },
  ],
  resources: [
    { name: 'Growth Audit Checklist', href: '/services' },
    { name: 'SEO ROI Calculator', href: '/portfolio' },
    { name: 'Client Success Stories', href: '/portfolio' },
    { name: 'Consultation Booking', href: '/contact' },
  ],
};

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-background border-t border-red-500/15 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-[140px] opacity-60" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-900/20 rounded-full blur-[140px] opacity-40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Info & Newsletter */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="inline-flex items-center gap-2.5 group" aria-label="Beez Digital Home">
              <Logo size="md" />
            </Link>

            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Empowering forward-thinking companies to dominate organic search, maximize paid acquisition,
              and build high-converting digital experiences with data-backed engineering.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center text-gray-400 text-sm gap-3">
                <Mail className="w-4 h-4 text-red-500 flex-shrink-0" />
                <a href="mailto:hello@beezdigital.com" className="hover:text-white transition-colors">hello@beezdigital.com</a>
              </div>
              <div className="flex items-center text-gray-400 text-sm gap-3">
                <Phone className="w-4 h-4 text-red-500 flex-shrink-0" />
                <a href="tel:+15551234567" className="hover:text-white transition-colors">+1 (555) 123-4567</a>
              </div>
              <div className="flex items-center text-gray-400 text-sm gap-3">
                <MapPin className="w-4 h-4 text-red-500 flex-shrink-0" />
                <span>123 Digital Street, Tech City, TC 12345</span>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-xs font-bold text-white mb-5 uppercase tracking-widest font-poppins">
              Growth Services
            </h3>
            <ul className="space-y-3">
              {footerNav.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-red-400 transition-colors duration-200 text-sm flex items-center gap-1 group"
                  >
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-xs font-bold text-white mb-5 uppercase tracking-widest font-poppins">
              Company
            </h3>
            <ul className="space-y-3">
              {footerNav.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-red-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-xs font-bold text-white mb-5 uppercase tracking-widest font-poppins">
              Resources &amp; ROI
            </h3>
            <ul className="space-y-3">
              {footerNav.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-red-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8 p-4 rounded-xl glass-card border border-red-500/20 bg-red-950/20">
              <span className="text-xs font-bold text-white block mb-1">Free Strategy Call</span>
              <p className="text-[11px] text-gray-400 mb-3">Speak with a senior growth architect today.</p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-red-400 hover:text-red-300 transition-colors"
              >
                <span>Book now</span>
                <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            &copy; {currentYear} Beez Digital Agency. All rights reserved.
          </p>

          <div className="flex items-center space-x-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-xl glass-card flex items-center justify-center text-gray-400 hover:text-white hover:border-red-500/50 transition-colors"
                  aria-label={social.label}
                >
                  <Icon size={16} />
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
