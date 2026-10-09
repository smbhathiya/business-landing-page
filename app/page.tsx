import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Zap, TrendingUp } from 'lucide-react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Team from '../components/Team';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';

export const metadata: Metadata = {
  title: 'Beez Digital Marketing Agency | Enterprise SEO, PPC & Growth Engineering',
  description:
    'Scale your business with Beez Digital Marketing Agency. We engineer high-velocity growth architectures: Technical SEO, Google & Meta Ads, Next.js web applications, and marketing automation.',
  keywords: [
    'Beez Digital',
    'digital marketing agency',
    'enterprise SEO services',
    'PPC advertising agency',
    'Google Ads management',
    'social media marketing',
    'conversion rate optimization',
    'Next.js web development agency',
    'B2B growth agency',
    'marketing automation consultant',
    'performance marketing',
  ].join(', '),
  authors: [{ name: 'Beez Digital Agency' }],
  metadataBase: new URL('https://landing2025.bhathiya.dev'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Beez Digital Marketing Agency | Enterprise SEO, PPC & Growth Engineering',
    description:
      'Transform your customer acquisition with Beez Digital. We build full-funnel search, paid acquisition, and headless web platforms delivering documented revenue.',
    url: 'https://landing2025.bhathiya.dev',
    siteName: 'Beez Digital Marketing Agency',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Beez Digital Marketing Agency - Enterprise Growth Architecture',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Beez Digital Marketing Agency | Growth Engineering',
    description:
      'Scale your business with algorithmic SEO, paid media buying, and modern Next.js web development.',
    images: ['/twitter-image.jpg'],
    creator: '@beezdigital',
    site: '@beezdigital',
  },
};

export default function Home() {
  // Structured Data for Organization
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Beez Digital Marketing Agency',
    url: 'https://landing2025.bhathiya.dev',
    logo: 'https://landing2025.bhathiya.dev/logo.png',
    description:
      "Transform your business with Beez Digital's cutting-edge digital marketing solutions. We specialize in SEO optimization, PPC advertising, social media marketing, content strategy, web design, and marketing automation.",
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Digital Street',
      addressLocality: 'Tech City',
      addressRegion: 'TC',
      postalCode: '12345',
      addressCountry: 'US',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-555-123-4567',
      contactType: 'customer service',
      email: 'hello@beezdigital.com',
    },
    sameAs: [
      'https://www.facebook.com/beezdigital',
      'https://www.twitter.com/beezdigital',
      'https://www.linkedin.com/company/beezdigital',
      'https://www.instagram.com/beezdigital',
    ],
  };

  // Structured Data for Website
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Beez Digital Marketing Agency',
    url: 'https://landing2025.bhathiya.dev',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://landing2025.bhathiya.dev/services?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />

      <main className="min-h-screen bg-background">
        <Header />
        <Hero />
        <Services />
        <About />
        <Portfolio />

        {/* Pricing Teaser Section */}
        <section className="relative py-24 bg-background overflow-hidden border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glass-strong rounded-3xl p-10 sm:p-16 border border-white/10 bg-black/60 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
                <div className="lg:col-span-7 space-y-5">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-red-400 uppercase tracking-wider bg-red-500/10 px-3.5 py-1.5 rounded-full border border-red-500/20">
                    <Sparkles size={14} />
                    <span>Predictable Retainers</span>
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-black text-white font-poppins leading-tight">
                    Transparent Growth Packages.
                    <span className="block gradient-text">Zero Lock-In Contracts.</span>
                  </h2>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    Choose from our Starter, Growth Engine, or Enterprise Scale retainers. Every plan includes dedicated senior strategists, weekly sprint reviews, and live 24/7 attribution dashboards.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {[
                      '90-Day Initial Growth Sprints',
                      '100% IP & Creative Ownership',
                      'Live GA4 & CAPI Dashboards',
                      'Dedicated Pod with Senior Leads',
                    ].map((perk) => (
                      <div key={perk} className="flex items-center text-xs text-gray-300 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-red-500 mr-2 flex-shrink-0" />
                        <span>{perk}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5 text-center lg:text-right">
                  <div className="glass-card rounded-2xl p-8 border border-red-500/30 bg-black/80 space-y-6 text-left">
                    <div className="flex justify-between items-baseline">
                      <span className="text-xs text-gray-400 font-semibold uppercase">Plans Starting From</span>
                      <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full">
                        Save 20% Annual
                      </span>
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl sm:text-5xl font-black text-white font-poppins">$2,499</span>
                      <span className="text-xs text-gray-400 font-medium">/ month</span>
                    </div>
                    <p className="text-xs text-gray-400">
                      Everything needed to establish search dominance, profitably scale ads, and build high-converting funnels.
                    </p>
                    <Link href="/pricing" className="block">
                      <button className="w-full bg-gradient-to-r from-red-600 to-red-500 text-white py-3.5 rounded-xl font-bold text-sm glow-btn cursor-pointer flex items-center justify-center gap-2">
                        <span>Compare All Plans &amp; Features</span>
                        <ArrowRight size={16} />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Team />
        <Contact />
        <Footer />
        <BackToTop />
      </main>
    </>
  );
}
