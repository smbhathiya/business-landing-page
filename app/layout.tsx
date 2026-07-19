import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ABC - Digital Marketing Agency | SEO, PPC, Social Media Marketing",
  description: "Transform your business with ABC's cutting-edge digital marketing solutions. We specialize in SEO optimization, PPC advertising, social media marketing, content strategy, web design, and marketing automation. Get measurable results and grow your business today.",
  keywords: [
    "digital marketing agency",
    "SEO services",
    "PPC advertising",
    "social media marketing",
    "content marketing",
    "web design",
    "marketing automation",
    "search engine optimization",
    "Google Ads",
    "Facebook Ads",
    "lead generation",
    "conversion optimization",
    "brand awareness",
    "digital strategy",
    "online marketing",
    "e-commerce marketing",
    "local SEO",
    "technical SEO",
    "link building",
    "email marketing",
    "analytics",
    "ROI optimization",
    "business growth",
    "digital transformation",
    "marketing consulting"
  ].join(", "),
  authors: [{ name: "Bhathiya Lakshan" }],
  creator: "Bhathiya Lakshan",
  publisher: "Bhathiya Lakshan",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://landing2025.bhathiya.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ABC - Digital Marketing Agency | SEO, PPC, Social Media Marketing",
    description: "Transform your business with ABC's cutting-edge digital marketing solutions. We specialize in SEO optimization, PPC advertising, social media marketing, content strategy, web design, and marketing automation. Get measurable results and grow your business today.",
    url: "https://landing2025.bhathiya.dev",
    siteName: "ABC Digital Marketing Agency",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ABC Digital Marketing Agency - Transform Your Business",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ABC - Digital Marketing Agency | SEO, PPC, Social Media Marketing",
    description: "Transform your business with ABC's cutting-edge digital marketing solutions. We specialize in SEO optimization, PPC advertising, social media marketing, content strategy, web design, and marketing automation.",
    images: ["/twitter-image.jpg"],
    creator: "@abc_digital",
    site: "@abc_digital",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${poppins.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
