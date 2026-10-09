import type { Metadata } from 'next';
import Script from 'next/script';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import BackToTop from '../../components/BackToTop';
import PageHero from '../../components/PageHero';
import PricingClient from './PricingClient';

export const metadata: Metadata = {
  title: 'Transparent Pricing & Growth Plans | Beez Digital',
  description:
    'Predictable, value-driven digital marketing pricing. Compare Starter, Growth Engine, and Enterprise Scale packages. Zero long-term lock-in contracts.',
  keywords: [
    'Beez Digital pricing',
    'digital marketing agency pricing',
    'SEO agency cost',
    'PPC management fees',
    'marketing retainer packages',
    'transparent marketing agency pricing',
    'enterprise growth pricing',
  ].join(', '),
  alternates: {
    canonical: 'https://landing2025.bhathiya.dev/pricing',
  },
  openGraph: {
    title: 'Transparent Pricing & Growth Plans | Beez Digital',
    description:
      'Predictable, performance-backed pricing plans. Compare our Starter, Growth Engine, and Enterprise packages.',
    url: 'https://landing2025.bhathiya.dev/pricing',
    siteName: 'Beez Digital Marketing Agency',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Beez Digital Pricing Plans',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Transparent Pricing & Growth Plans | Beez Digital',
    description:
      'Compare our predictable marketing retainer plans with zero hidden fees and documented ROI.',
    images: ['/twitter-image.jpg'],
    creator: '@beezdigital',
  },
};

export default function PricingPage() {
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
        name: 'Pricing',
        item: 'https://landing2025.bhathiya.dev/pricing',
      },
    ],
  };

  const pricingSchema = {
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    name: 'Beez Digital Marketing Growth Plans',
    itemListElement: [
      {
        '@type': 'Offer',
        name: 'Starter Launch',
        price: '2499',
        priceCurrency: 'USD',
        description: 'Ideal for emerging businesses seeking initial search and ad traction.',
      },
      {
        '@type': 'Offer',
        name: 'Growth Engine',
        price: '4999',
        priceCurrency: 'USD',
        description: 'Our most popular omnichannel sprint for scaling brands ready to capture market share.',
      },
      {
        '@type': 'Offer',
        name: 'Enterprise Scale',
        price: '9999',
        priceCurrency: 'USD',
        description: 'Omnichannel market dominance with dedicated senior pods and custom attribution models.',
      },
    ],
  };

  return (
    <>
      <Script
        id="pricing-breadcrumbs-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }}
      />
      <Script
        id="pricing-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }}
      />

      <main className="min-h-screen bg-background">
        <Header />
        <PageHero
          badge="Predictable Investment"
          title="Transparent Pricing."
          titleHighlight="Zero Hidden Surprises."
          description="Invest in proven growth engines with flexible 3-month sprints, transparent weekly dashboards, and dedicated multi-disciplinary squads."
          breadcrumbs={[{ name: 'Pricing', href: '/pricing' }]}
        />
        <PricingClient />
        <Footer />
        <BackToTop />
      </main>
    </>
  );
}
