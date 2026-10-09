'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface PageHeroProps {
  badge: string;
  title: string;
  titleHighlight?: string;
  description: string;
  breadcrumbs: BreadcrumbItem[];
  backgroundElement?: ReactNode;
  children?: ReactNode;
}

export default function PageHero({
  badge,
  title,
  titleHighlight,
  description,
  breadcrumbs,
  backgroundElement,
  children,
}: PageHeroProps) {
  return (
    <section className="relative pt-36 pb-20 overflow-hidden bg-background">
      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-red-600/15 rounded-full blur-[140px] opacity-70" />
        <div className="absolute top-10 left-10 w-80 h-80 bg-red-900/20 rounded-full blur-[100px] opacity-40" />
        <div className="absolute inset-0 bg-grid-ambient opacity-50" />
      </div>

      {/* Optional 3D background */}
      {backgroundElement}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          aria-label="Breadcrumb"
          className="flex items-center space-x-2 text-xs font-medium text-gray-400 mb-8"
        >
          <Link
            href="/"
            className="flex items-center gap-1 hover:text-white transition-colors py-1 px-2 rounded-md hover:bg-white/5"
          >
            <Home size={13} className="text-red-500" />
            <span>Home</span>
          </Link>
          {breadcrumbs.map((crumb, idx) => {
            const isLast = idx === breadcrumbs.length - 1;
            return (
              <div key={crumb.href} className="flex items-center space-x-2">
                <ChevronRight size={12} className="text-gray-600" />
                {isLast ? (
                  <span className="text-red-400 font-semibold px-2 py-1 bg-red-500/10 rounded-md border border-red-500/20">
                    {crumb.name}
                  </span>
                ) : (
                  <Link
                    href={crumb.href}
                    className="hover:text-white transition-colors py-1 px-2 rounded-md hover:bg-white/5"
                  >
                    {crumb.name}
                  </Link>
                )}
              </div>
            );
          })}
        </motion.nav>

        {/* Hero Content */}
        <div className="max-w-4xl">
          {/* Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-red-500/30 bg-red-950/20 text-red-400 text-xs font-semibold tracking-wider uppercase mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span>{badge}</span>
          </motion.div>

          {/* H1 Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] mb-6 font-poppins"
          >
            {title}{' '}
            {titleHighlight && (
              <span className="block sm:inline gradient-text">{titleHighlight}</span>
            )}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg sm:text-xl text-gray-400 leading-relaxed max-w-3xl mb-8"
          >
            {description}
          </motion.p>

          {children && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {children}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
