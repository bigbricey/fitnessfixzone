import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "FitnessFixZone — Science-Backed Fitness Guides & Reviews",
  description:
    "Fix your fitness with evidence-based workout guides, honest supplement reviews, and actionable training tips. No BS, no bro-science — just results.",
  keywords: [
    "fitness",
    "workout guides",
    "supplement reviews",
    "weight loss",
    "home gym",
    "exercise tips",
    "protein powder reviews",
    "strength training",
  ],
  openGraph: {
    title: "FitnessFixZone — Your Science-Backed Fitness Fix",
    description:
      "Evidence-based workout guides, honest reviews, and tools to fix your fitness.",
    type: "website",
    url: "https://www.fitnessfixzone.com",
    siteName: "FitnessFixZone",
    images: [
      {
        url: "https://www.fitnessfixzone.com/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "FitnessFixZone — Evidence-Based Fitness, Honest Reviews, Free Tools",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FitnessFixZone — Science-Backed Fitness Guides & Reviews",
    description:
      "Evidence-based workout guides, honest reviews, and tools to fix your fitness.",
    images: ["https://www.fitnessfixzone.com/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.fitnessfixzone.com",
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'FitnessFixZone',
  url: 'https://www.fitnessfixzone.com',
  description: 'Science-backed fitness guides, honest supplement reviews, and actionable training tips.',
  publisher: {
    '@type': 'Organization',
    name: 'FitnessFixZone',
    url: 'https://www.fitnessfixzone.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics GA4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-93GT0GQWG3"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-93GT0GQWG3');
          `}
        </Script>
        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="VybRWVensgirJoFDTZ0EzYzyPkrMT0BjiCyZp5nhPOM" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">Skip to content</a>
        <header>
          <nav className="nav">
            <div className="nav-inner">
              <a href="/" className="nav-logo">
                FITNESS<span className="accent">FIX</span>ZONE
              </a>
              <ul className="nav-links" id="nav-menu">
                <li>
                  <a href="/guides">Guides</a>
                </li>
                <li>
                  <a href="/reviews">Reviews</a>
                </li>
                <li>
                  <a href="/tools">Tools</a>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
              </ul>
              <MobileMenuButton />
            </div>
          </nav>
        </header>

        <main id="main-content">{children}</main>

        <footer className="footer">
          <div className="footer-inner" style={{ flexDirection: 'column', gap: 'var(--space-xl)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', flexWrap: 'wrap', gap: 'var(--space-md)' }}>
              <div>
                © {new Date().getFullYear()} FitnessFixZone. All rights reserved.
              </div>
              <ul className="footer-links">
                <li>
                  <a href="/privacy">Privacy Policy</a>
                </li>
                <li>
                  <a href="/disclaimer">Disclaimer</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

function MobileMenuButton() {
  return (
    <>
      <input type="checkbox" id="mobile-menu-toggle" className="mobile-menu-checkbox" aria-label="Toggle navigation menu" />
      <label htmlFor="mobile-menu-toggle" className="hamburger" aria-label="Menu">
        <span className="hamburger-line" />
        <span className="hamburger-line" />
        <span className="hamburger-line" />
      </label>
      <div className="mobile-menu-overlay">
        <ul className="mobile-menu-links">
          <li><a href="/guides">Guides</a></li>
          <li><a href="/reviews">Reviews</a></li>
          <li><a href="/tools">Tools</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    </>
  );
}
