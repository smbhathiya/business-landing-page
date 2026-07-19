'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { useState } from 'react';

const contactInfo = [
  { icon: Mail, title: 'Email Us', details: ['hello@abc.com', 'support@abc.com'], description: 'Get in touch with our team', gradient: 'from-red-600 to-red-500' },
  { icon: Phone, title: 'Call Us', details: ['+1 (555) 123-4567', '+1 (555) 987-6543'], description: 'Speak with our experts', gradient: 'from-red-600 to-red-500' },
  { icon: MapPin, title: 'Visit Us', details: ['123 Digital Street', 'Tech City, TC 12345'], description: 'Our office location', gradient: 'from-red-600 to-red-500' },
  { icon: Clock, title: 'Business Hours', details: ['Mon – Fri: 9AM – 6PM', 'Sat: 10AM – 4PM'], description: 'When we are available', gradient: 'from-red-600 to-red-500' },
];

const inputCls = [
  'w-full px-4 py-3 rounded-xl text-gray-900 dark:text-white text-sm placeholder-gray-400',
  'bg-background/70 border border-gray-200 dark:border-gray-800',
  'focus:outline-none focus:border-red-600 focus:bg-background',
  'transition-all duration-200',
].join(' ');

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', service: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="relative py-24 bg-background overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[420px] h-[420px] bg-red-900/30 rounded-full blur-[140px] opacity-50" />
        <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-red-900/20 rounded-full blur-[140px] opacity-50" />
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
            Get In Touch
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-5">
            Ready to Get Started?
            <span className="block gradient-text">Contact Us Today</span>
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Let&rsquo;s discuss how we can help transform your business. Get your free consultation today.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-8"
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Send us a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-gray-600 dark:text-gray-300 mb-1.5">Full Name *</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className={inputCls} placeholder="Your full name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-gray-600 dark:text-gray-300 mb-1.5">Email Address *</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className={inputCls} placeholder="your@email.com" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="company" className="block text-xs font-medium text-gray-600 dark:text-gray-300 mb-1.5">Company Name</label>
                  <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} className={inputCls} placeholder="Your company" />
                </div>
                <div>
                  <label htmlFor="service" className="block text-xs font-medium text-gray-600 dark:text-gray-300 mb-1.5">Service Interest</label>
                  <select id="service" name="service" value={formData.service} onChange={handleChange} className={inputCls}>
                    <option value="">Select a service</option>
                    <option value="seo">SEO Optimization</option>
                    <option value="ppc">PPC Advertising</option>
                    <option value="social">Social Media Marketing</option>
                    <option value="content">Content Marketing</option>
                    <option value="web-design">Web Design &amp; Development</option>
                    <option value="automation">Marketing Automation</option>
                    <option value="consultation">General Consultation</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-medium text-gray-600 dark:text-gray-300 mb-1.5">Message *</label>
                <textarea
                  id="message" name="message" value={formData.message} onChange={handleChange}
                  required rows={5} className={`${inputCls} resize-none`}
                  placeholder="Tell us about your project and goals..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-red-600 to-red-500 text-white py-4 rounded-xl font-semibold text-base glow-btn transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send size={18} />
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col gap-5"
          >
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Get in Touch</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                We&rsquo;re here to help you succeed. Reach out through any channel below and we&rsquo;ll respond within 24 hours.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: index * 0.09 }}
                  viewport={{ once: true }}
                  className="glass-card rounded-xl p-5"
                >
                  <div className={`w-9 h-9 bg-gradient-to-br ${info.gradient} rounded-xl flex items-center justify-center mb-3`}>
                    <info.icon className="w-4 h-4 text-gray-900 dark:text-white" />
                  </div>
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-0.5">{info.title}</h4>
                  <p className="text-gray-500 dark:text-gray-400 text-xs mb-1.5">{info.description}</p>
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-gray-600 dark:text-gray-300 text-xs font-medium">{detail}</p>
                  ))}
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              viewport={{ once: true }}
              className="glass-strong rounded-2xl p-7 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 to-black/20 pointer-events-none rounded-2xl" />
              <div className="relative z-10">
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Free Consultation</h4>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-5 leading-relaxed">
                  Book a free 30-minute consultation to discuss your digital marketing needs and get personalized recommendations.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-red-600 to-red-500 text-white px-6 py-3 rounded-xl font-semibold text-sm glow-btn transition-all duration-300"
                >
                  Schedule Consultation
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
