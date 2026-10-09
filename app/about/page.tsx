import type { Metadata } from 'next';
import Script from 'next/script';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import BackToTop from '../../components/BackToTop';
import PageHero from '../../components/PageHero';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: 'About Us | Beez Digital Marketing Agency - Story & Philosophy',
  description:
    'Discover Beez Digital Marketing Agency. Founded in 2018, our multidisciplinary team of SEO engineers, media buyers, and developers scale revenue with scientific rigor.',
  keywords: [
    'about Beez Digital',
    'Beez Digital agency',
    'growth marketing team',
    'SEO agency leadership',
    'digital agency history',
    'data-driven marketing agency',
    'enterprise marketing partner',
  ].join(', '),
  alternates: {
    canonical: 'https://landing2025.bhathiya.dev/about',
  },
  openGraph: {
    title: 'About Us | Beez Digital Marketing Agency - Story & Philosophy',
    description:
      'Learn about Beez Digital Marketing Agency: our mission, values, engineering-first culture, and verified client milestones.',
    url: 'https://landing2025.bhathiya.dev/about',
    siteName: 'Beez Digital Marketing Agency',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'About Beez Digital Marketing Agency',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | Beez Digital Marketing Agency',
    description:
      'Our story, mission, and the engineering principles behind Beez Digital Marketing Agency.',
    images: ['/twitter-image.jpg'],
    creator: '@beezdigital',
  },
};

export default function AboutPage() {
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
        name: 'About',
        item: 'https://landing2025.bhathiya.dev/about',
      },
    ],
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Beez Digital Marketing Agency',
    url: 'https://landing2025.bhathiya.dev',
    foundingDate: '2018',
    founder: {
      '@type': 'Person',
      name: 'Sarah Johnson',
    },
    numberOfEmployees: '50+',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Digital Street',
      addressLocality: 'Tech City',
      addressRegion: 'TC',
      postalCode: '12345',
      addressCountry: 'US',
    },
  };

  return (
    <>
      <Script
        id="about-breadcrumbs-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }}
      />
      <Script
        id="about-organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <main className="min-h-screen bg-background">
        <Header />
        <PageHero
          badge="Agency Heritage &amp; Mission"
          title="Engineering Growth With"
          titleHighlight="Scientific Rigor"
          description="Since 2018, we have rejected vanity agency jargon in favor of measurable pipeline velocity, programmatic infrastructure, and relentless revenue optimization."
          breadcrumbs={[{ name: 'About Us', href: '/about' }]}
        />
        <AboutClient />
        <Footer />
        <BackToTop />
      </main>
    </>
  );
}
