# Beez Digital — Enterprise Growth Architecture Platform

![Next.js](https://img.shields.io/badge/Next.js-16.4-black?logo=next.js)
![React](https://img.shields.io/badge/React-19.3-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript)
![Three.js](https://img.shields.io/badge/Three.js-WebGL-black?logo=three.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-emerald)

An ultra-luxury, high-converting digital marketing and growth architecture platform for **Beez Digital**. Built with **Next.js 16 (Turbopack)**, **React 19**, **Three.js**, **Framer Motion**, and a customized dark-mode glassmorphic design system.

---

## ⚡ Key Highlights

- **Multi-Page Architecture**: Scaled from a single-page landing into 7 dedicated, deeply architected routes:
  - [`/`](app/page.tsx) — Flagship homepage with live KPI dashboard, interactive proof, and executive summaries.
  - [`/services`](app/services/page.tsx) — 6 forensic growth capabilities, 4-stage engineering roadmap, and deliverables FAQ.
  - [`/about`](app/about/page.tsx) — Company story, 2018–2026 milestone timeline, core values, and industry certifications.
  - [`/portfolio`](app/portfolio/page.tsx) — Interactive category filter, 6 audited enterprise case studies, and ROI projection calculator.
  - [`/pricing`](app/pricing/page.tsx) — Starter, Growth Engine, and Enterprise tiers with monthly/annual switch (20% discount) and feature comparison matrix.
  - [`/team`](app/team/page.tsx) — Leadership roster, executive superpowers, multi-disciplinary pods, and open career roles.
  - [`/contact`](app/contact/page.tsx) — Comprehensive strategic consultation booking form with budget selector, office details, and SLA guarantees.
- **Fixed Glassmorphism Navigation**: Floating top navigation bar with live route indicator pills and backdrop blur.
- **Minimalist Geometric Honeycomb 'B' Brandmark**: Bespoke vector SVG logo with deep obsidian badge, crimson-to-amber brand gradient, and radiant gold apex energy spark.
- **Vector Favicon Integration**: Native high-DPI vector SVG favicon (`/icon.svg`) automatically configured across modern browsers and mobile homescreens.
- **Mobile-First High-Tech Hero**: Redesigned mobile experience featuring live revenue engine KPI card with vector sparkline trajectory, compact 3-column metrics dock, and continuous smooth partner marquee.
- **Adaptive 3D Hardware Intelligence**: Conditionally boots Three.js WebGL canvas on capable devices, automatically offloading small mobile screens (`<768px`) or low-spec devices to GPU-efficient ambient CSS radial blurs for 60 FPS and zero battery drain.
- **Enterprise SEO & Structured Data**: Dynamic `sitemap.ts`, `manifest.ts`, Open Graph / Twitter cards, canonical tags, and Schema.org JSON-LD (Organization, WebSite, Breadcrumbs, ContactPage, LocalBusiness).
- **Interactive Luxury Preloader**: Smooth initial asset loader with animated status progression and session-aware caching.

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| **Framework** | [Next.js 16](https://nextjs.org/) (Turbopack, App Router) |
| **Runtime** | [React 19](https://react.dev/) |
| **Language** | [TypeScript 5.9](https://www.typescriptlang.org/) |
| **3D Graphics** | [Three.js](https://threejs.org/) (Custom WebGL particle fields & procedural meshes) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) + Custom Glassmorphism System |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Typography** | Poppins & Inter (Google Fonts) |
| **Package Manager** | [pnpm](https://pnpm.io/) |

---

## 📁 Repository Structure

```
business-landing-page/
├── app/
│   ├── about/               # About Us route & client interactive roadmap
│   ├── contact/             # Contact consultation & audit booking
│   ├── portfolio/           # Case studies & ROI calculator
│   ├── pricing/             # Subscription tiers & comparison matrix
│   ├── services/            # Full deliverables & service roadmap
│   ├── team/                # Leadership & career opportunities
│   ├── globals.css          # Design system tokens, utilities & animations
│   ├── icon.svg             # Vector SVG favicon & app icon
│   ├── layout.tsx           # Root layout with SEO metadata & ThemeProvider
│   ├── manifest.ts          # Web App Manifest (PWA metadata)
│   ├── page.tsx             # Flagship home route
│   ├── robots.ts            # Dynamic robots.txt
│   └── sitemap.ts           # Dynamic canonical sitemap
├── components/
│   ├── About.tsx            # Executive about teaser section
│   ├── About3DElement.tsx   # Three.js 3D crystal element
│   ├── BackToTop.tsx        # Floating smooth scroll button
│   ├── Contact.tsx          # Contact teaser section
│   ├── Contact3DElement.tsx # Three.js interactive mesh
│   ├── Footer.tsx           # Global luxury footer
│   ├── Header.tsx           # Fixed glassmorphism header & mobile navigation
│   ├── Hero.tsx             # Flagship hero with live KPI dashboard card
│   ├── Hero3DBackground.tsx # Three.js WebGL particle field
│   ├── Logo.tsx             # Honeycomb 'B' vector brandmark
│   ├── PageHero.tsx         # Reusable internal page hero with breadcrumbs
│   ├── PageLoader.tsx       # Luxury session-aware page preloader
│   ├── Portfolio.tsx        # Portfolio showcase section
│   ├── Services.tsx         # Services overview section
│   ├── Services3DElement.tsx# Three.js orbiting spheres
│   └── Team.tsx             # Team overview section
├── hooks/
│   └── useDeviceCapability.ts # Hardware tier, WebGL & screen detection
├── public/
│   └── icon.svg             # Public static vector favicon
├── next.config.ts           # Next.js configuration & allowed dev origins
├── package.json             # Scripts & dependencies
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js `18.18+` or `20+`
- [pnpm](https://pnpm.io/) installed globally:
  ```bash
  npm install -g pnpm
  ```

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/business-landing-page.git
   cd business-landing-page
   ```

2. **Install dependencies**:
   ```bash
   pnpm install
   ```

3. **Run development server**:
   ```bash
   pnpm dev
   ```

4. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000).

---

## 📦 Scripts

- `pnpm dev` — Start the Next.js development server with Turbopack.
- `pnpm build` — Build optimized production bundle and generate static sitemaps.
- `pnpm start` — Run production server.
- `pnpm lint` — Run ESLint across all codebase files with zero warnings.

---

## 🌐 SEO & Performance Architecture

- **Canonical Routes**: Explicit canonical URL mapping for all 7 routes.
- **Structured Data**: Schema.org JSON-LD for Organization, WebSite, BreadcrumbList, and LocalBusiness.
- **Device-Tier Optimization**: Automatic hardware capability evaluation protects mobile batteries while delivering 3D WebGL experiences on high-spec desktops.
- **Accessibility & Contrast**: Built to meet WCAG AA contrast standards with high-contrast text and semantic HTML5 landmarks (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`).

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
