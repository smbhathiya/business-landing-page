'use client';

import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const footerLinks = {
  services: [
    { name: 'SEO Optimization', href: '#services' },
    { name: 'PPC Advertising', href: '#services' },
    { name: 'Social Media Marketing', href: '#services' },
    { name: 'Content Marketing', href: '#services' },
    { name: 'Web Design & Development', href: '#services' },
    { name: 'Marketing Automation', href: '#services' },
  ],
  company: [
    { name: 'About Us', href: '#about' },
    { name: 'Our Team', href: '#team' },
    { name: 'Careers', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ],
  resources: [
    { name: 'Digital Marketing Guide', href: '#' },
    { name: 'SEO Best Practices', href: '#' },
    { name: 'Social Media Tips', href: '#' },
    { name: 'Content Strategy', href: '#' },
    { name: 'Analytics Tools', href: '#' },
    { name: 'Industry Reports', href: '#' },
  ],
};

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

const contactItems = [
  { Icon: Mail, text: 'hello@abc.com' },
  { Icon: Phone, text: '+1 (555) 123-4567' },
  { Icon: MapPin, text: '123 Digital Street, Tech City, TC 12345' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-background overflow-hidden">
      {/* Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-red-900/30 rounded-full blur-[140px] opacity-50" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-900/20 rounded-full blur-[140px] opacity-50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              viewport={{ once: true }}
            >
              <span className="text-3xl font-bold gradient-text block mb-4">ABC</span>
              <p className="text-gray-500 dark:text-gray-400 mb-6 leading-relaxed text-sm">
                Transform your business with cutting-edge digital marketing solutions.
                We help businesses grow their online presence and achieve remarkable results.
              </p>
              <div className="space-y-2.5">
                {contactItems.map(({ Icon, text }) => (
                  <div key={text} className="flex items-center text-gray-500 dark:text-gray-400 text-sm gap-3">
                    <Icon className="w-4 h-4 text-red-500 flex-shrink-0" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-5 uppercase tracking-widest">Services</h3>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-500 dark:text-gray-400 hover:text-red-500 transition-colors duration-200 text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-5 uppercase tracking-widest">Company</h3>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-500 dark:text-gray-400 hover:text-red-500 transition-colors duration-200 text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.26 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-5 uppercase tracking-widest">Resources</h3>
            <ul className="space-y-2.5">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-500 dark:text-gray-400 hover:text-red-500 transition-colors duration-200 text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-gray-500 dark:text-gray-400 text-xs"
            >
              © {currentYear} abc. All rights reserved.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex gap-2.5"
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-9 h-9 glass-card rounded-lg flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-red-500 transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
