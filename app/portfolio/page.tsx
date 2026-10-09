import type { Metadata } from 'next';
import Script from 'next/script';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import BackToTop from '../../components/BackToTop';
import PageHero from '../../components/PageHero';
import PortfolioClient from './PortfolioClient';

export const metadata: Metadata = {
  title: 'Case Studies & Portfolio | Verified Client ROI | Beez Digital',
  description:
    'Explore verified case studies and performance data. See how Beez Digital generated +420% organic traffic growth, 3.8x ROAS, and over $75M in client revenue.',
  keywords: [
    'Beez Digital case studies',
    'digital marketing case studies',
    'SEO case study results',
    'PPC performance metrics',
    'CRO conversion benchmarks',
    'agency client portfolio',
    'B2B growth case studies',
  ].join(', '),
  alternates: {
    canonical: 'https://landing2025.bhathiya.dev/portfolio',
  },
  openGraph: {
    title: 'Case Studies & Portfolio | Verified Client ROI | Beez Digital',
    description:
      'Verified performance results and client case studies: +420% organic traffic, 3.8x ROAS, and $75M+ client revenue generated.',
    url: 'https://landing2025.bhathiya.dev/portfolio',
    siteName: 'Beez Digital Marketing Agency',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Beez Digital Case Studies',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Case Studies & Client ROI | Beez Digital',
    description:
      'Explore verified performance case studies and client testimonials from Beez Digital Marketing Agency.',
    images: ['/twitter-image.jpg'],
    creator: '@beezdigital',
  },
};

export default function PortfolioPage() {
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
        name: 'Portfolio',
        item: 'https://landing2025.bhathiya.dev/portfolio',
      },
    ],
  };

  const caseStudySchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Beez Digital Marketing Case Studies',
    description: 'Documented performance case studies and testimonials for SEO, PPC, and web development.',
    publisher: {
      '@type': 'Organization',
      name: 'Beez Digital Marketing Agency',
    },
  };

  return (
    <>
      <Script
        id="portfolio-breadcrumbs-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }}
      />
      <Script
        id="portfolio-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudySchema) }}
      />

      <main className="min-h-screen bg-background">
        <Header />
        <PageHero
          badge="Documented Results"
          title="Case Studies &amp;"
          titleHighlight="Verified Performance"
          description="We let our numbers do the talking. Explore how our multidisciplinary growth pods deliver measurable commercial ROI across diverse global industries."
          breadcrumbs={[{ name: 'Portfolio', href: '/portfolio' }]}
        />
        <PortfolioClient />
        <Footer />
        <BackToTop />
      </main>
    </>
  );
}
