import type { Metadata } from "next";
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
    url: "https://fitnessfixzone.com",
    siteName: "FitnessFixZone",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'FitnessFixZone',
  url: 'https://fitnessfixzone.com',
  description: 'Science-backed fitness guides, honest supplement reviews, and actionable training tips.',
  publisher: {
    '@type': 'Organization',
    name: 'FitnessFixZone',
    url: 'https://fitnessfixzone.com',
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
        <link rel="canonical" href="https://fitnessfixzone.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <nav className="nav">
          <div className="nav-inner">
            <a href="/" className="nav-logo">
              FITNESS<span className="accent">FIX</span>ZONE
            </a>
            <ul className="nav-links">
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
          </div>
        </nav>

        <main>{children}</main>

        <footer className="footer">
          <div className="footer-inner">
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
        </footer>
      </body>
    </html>
  );
}
