import type { Metadata } from 'next';
import Script from 'next/script';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import BackToTop from '../../components/BackToTop';
import PageHero from '../../components/PageHero';
import TeamClient from './TeamClient';

export const metadata: Metadata = {
  title: 'Our Team & Leadership | Growth Engineers & Strategists | ABC Agency',
  description:
    'Meet the multidisciplinary team behind ABC Agency. Senior SEO architects, performance media buyers, Next.js developers, and creative directors driving client revenue.',
  keywords: [
    'digital marketing agency team',
    'growth marketing leaders',
    'technical SEO specialists',
    'PPC media buyers',
    'Next.js web agency developers',
    'ABC leadership team',
  ].join(', '),
  alternates: {
    canonical: 'https://landing2025.bhathiya.dev/team',
  },
  openGraph: {
    title: 'Our Team & Leadership | Growth Engineers & Strategists | ABC Agency',
    description:
      'Meet the elite practitioners driving measurable growth at ABC Digital Marketing Agency.',
    url: 'https://landing2025.bhathiya.dev/team',
    siteName: 'ABC Digital Marketing Agency',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ABC Agency Leadership Team',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Team & Leadership | ABC Agency',
    description:
      'Meet the senior practitioners and growth architects at ABC Digital Marketing Agency.',
    images: ['/twitter-image.jpg'],
    creator: '@abc_digital',
  },
};

export default function TeamPage() {
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
        name: 'Team',
        item: 'https://landing2025.bhathiya.dev/team',
      },
    ],
  };

  const teamSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ABC Digital Marketing Agency',
    member: [
      {
        '@type': 'Person',
        name: 'Sarah Johnson',
        jobTitle: 'CEO & Founder',
      },
      {
        '@type': 'Person',
        name: 'Michael Chen',
        jobTitle: 'Head of Technical SEO & AI',
      },
      {
        '@type': 'Person',
        name: 'Emily Rodriguez',
        jobTitle: 'Creative Director',
      },
      {
        '@type': 'Person',
        name: 'David Kim',
        jobTitle: 'Lead Full-Stack Web Architect',
      },
    ],
  };

  return (
    <>
      <Script
        id="team-breadcrumbs-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }}
      />
      <Script
        id="team-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(teamSchema) }}
      />

      <main className="min-h-screen bg-background">
        <Header />
        <PageHero
          badge="Senior Growth Squads"
          title="Meet the Practitioners Driving"
          titleHighlight="Your Exponential Revenue"
          description="We do not pass your account down to junior interns. You work directly with veteran strategists, software developers, and media buyers who possess deep domain mastery."
          breadcrumbs={[{ name: 'Team', href: '/team' }]}
        />
        <TeamClient />
        <Footer />
        <BackToTop />
      </main>
    </>
  );
}
