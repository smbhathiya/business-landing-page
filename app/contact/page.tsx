import type { Metadata } from 'next';
import Script from 'next/script';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import BackToTop from '../../components/BackToTop';
import PageHero from '../../components/PageHero';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact Us & Free Growth Audit | Beez Digital Agency',
  description:
    'Schedule a free 30-minute digital marketing strategy consultation with Beez Digital. Speak directly with senior growth architects. Zero sales pressure.',
  keywords: [
    'contact digital marketing agency',
    'free SEO audit',
    'hire digital marketing agency',
    'PPC consultation',
    'marketing agency contact phone email',
    'Beez Digital agency headquarters',
  ].join(', '),
  alternates: {
    canonical: 'https://landing2025.bhathiya.dev/contact',
  },
  openGraph: {
    title: 'Contact Us & Free Growth Audit | Beez Digital Agency',
    description:
      'Book a confidential 30-minute growth consultation with Beez Digital. Speak directly with senior practitioners.',
    url: 'https://landing2025.bhathiya.dev/contact',
    siteName: 'Beez Digital Marketing Agency',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Beez Digital Marketing Agency',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Beez Digital Marketing Agency',
    description:
      'Connect with Beez Digital for a comprehensive growth audit and tailored marketing proposal.',
    images: ['/twitter-image.jpg'],
    creator: '@beez_digital',
  },
};

export default function ContactPage() {
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
        name: 'Contact',
        item: 'https://landing2025.bhathiya.dev/contact',
      },
    ],
  };

  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Beez Digital Marketing Agency',
    description: 'Get in touch with Beez Digital for free consultations and client inquiries.',
    mainEntity: {
      '@type': 'LocalBusiness',
      name: 'Beez Digital Marketing Agency',
      telephone: '+1-555-123-4567',
      email: 'hello@beezdigital.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '123 Digital Street',
        addressLocality: 'Tech City',
        addressRegion: 'TC',
        postalCode: '12345',
        addressCountry: 'US',
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '18:00',
        },
      ],
    },
  };

  return (
    <>
      <Script
        id="contact-breadcrumbs-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }}
      />
      <Script
        id="contact-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />

      <main className="min-h-screen bg-background">
        <Header />
        <PageHero
          badge="Direct Strategist Access"
          title="Let's Engineer Your Next"
          titleHighlight="Growth Sprint"
          description="Ready to scale past your current customer acquisition plateau? Reach out today for an unvarnished audit of your search and paid media economics."
          breadcrumbs={[{ name: 'Contact', href: '/contact' }]}
        />
        <ContactClient />
        <Footer />
        <BackToTop />
      </main>
    </>
  );
}
