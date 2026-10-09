import type { Metadata } from 'next';
import Script from 'next/script';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import BackToTop from '../../components/BackToTop';
import PageHero from '../../components/PageHero';
import ServicesClient from './ServicesClient';

export const metadata: Metadata = {
  title: 'Digital Marketing Services | SEO, PPC & Growth Strategy | Beez Digital',
  description:
    'Comprehensive digital marketing services engineered for revenue growth. Technical SEO, Google & Meta PPC campaigns, custom Next.js web development, content marketing, and marketing automation.',
  keywords: [
    'Beez Digital',
    'digital marketing services',
    'enterprise SEO services',
    'PPC agency',
    'Google Ads management',
    'social media marketing',
    'content strategy agency',
    'Next.js web development',
    'conversion rate optimization',
    'marketing automation services',
    'B2B growth agency',
  ].join(', '),
  alternates: {
    canonical: 'https://landing2025.bhathiya.dev/services',
  },
  openGraph: {
    title: 'Digital Marketing Services | SEO, PPC & Growth Strategy | Beez Digital',
    description:
      'Engineered digital marketing services designed to scale revenue. Technical SEO, PPC media buying, content engines, and modern web applications.',
    url: 'https://landing2025.bhathiya.dev/services',
    siteName: 'Beez Digital Marketing Agency',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Beez Digital Marketing Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing Services | SEO, PPC & Growth Strategy | Beez Digital',
    description:
      'Engineered digital marketing services designed to scale revenue. Technical SEO, PPC media buying, and modern web applications.',
    images: ['/twitter-image.jpg'],
    creator: '@beezdigital',
  },
};

export default function ServicesPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Digital Marketing Services',
    provider: {
      '@type': 'Organization',
      name: 'Beez Digital Marketing Agency',
      url: 'https://landing2025.bhathiya.dev',
    },
    areaServed: 'Worldwide',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Digital Growth Catalog',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'SEO Optimization & Organic Dominance',
            description: 'Technical audits, programmatic SEO, and link acquisition for high search rankings.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'PPC Advertising & Paid Acquisition',
            description: 'Targeted pay-per-click management across Google Ads, YouTube, and Meta platforms.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Web Design & Next.js Development',
            description: 'Ultra-fast, high-converting digital web applications optimized for Core Web Vitals.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Marketing Automation & Retention Funnels',
            description: 'Lead scoring, behavioral email sequences, and CRM attribution architecture.',
          },
        },
      ],
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How quickly can we expect to see results from SEO?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'While initial technical crawl fixes and keyword wins often manifest within 30 to 60 days, significant compound traffic and revenue exponential growth typically hit peak velocity between months 3 and 6.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you require long-term annual contracts?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. We operate with flexible 3-month initial growth sprints followed by rolling monthly retainers. Our 98% retention rate is earned by delivering documented ROI, not locking clients into rigid contracts.',
        },
      },
      {
        '@type': 'Question',
        name: 'What ad platforms do you specialize in?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We are certified Google Premier Partners and Meta Certified professionals, managing high-performing budgets across Google Search, Google Shopping, YouTube Ads, Instagram, Facebook, and LinkedIn.',
        },
      },
    ],
  };

  const breadcrumbsSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://landing2025.bhathiya.dev/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Services',
        item: 'https://landing2025.bhathiya.dev/services',
      },
    ],
  };

  return (
    <>
      <Script
        id="services-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="services-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="services-breadcrumbs-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }}
      />

      <main className="min-h-screen bg-background">
        <Header />
        <PageHero
          badge="End-to-End Growth Architecture"
          title="Digital Marketing Services"
          titleHighlight="Engineered for Exponential ROI"
          description="We combine algorithmic precision, creative brand execution, and high-performance web engineering to dominate competitive search landscapes and maximize acquisition profits."
          breadcrumbs={[{ name: 'Services', href: '/services' }]}
        />
        <ServicesClient />
        <Footer />
        <BackToTop />
      </main>
    </>
  );
}
