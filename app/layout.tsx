import type { Metadata, Viewport } from "next";
import "./globals.css";
import "material-symbols/index.css";

const outfit = {
  variable: "font-sans",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://the-triangle-analytics.web.app"),
  title: {
    default: "Triangle Analytics — Lightweight, Privacy-Friendly Web Telemetry",
    template: "%s | Triangle Analytics",
  },
  description: "Lightweight, privacy-friendly web analytics platform providing real-time telemetry, session streams, and automated conversion tracking without cookies.",
  alternates: {
    canonical: "https://the-triangle-analytics.web.app/",
  },
  openGraph: {
    title: "Triangle Analytics — Lightweight, Privacy-Friendly Web Telemetry",
    description: "Lightweight, privacy-friendly web analytics platform providing real-time telemetry, session streams, and automated conversion tracking without cookies.",
    url: "https://the-triangle-analytics.web.app/",
    siteName: "Triangle Analytics",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Triangle Analytics",
    description: "Lightweight, privacy-friendly web analytics platform for modern applications.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

// Sitelinks Structured Data for Google Search Engine Optimization
const sitelinksJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://the-triangle-analytics.web.app/#website",
      "url": "https://the-triangle-analytics.web.app/",
      "name": "Triangle Analytics",
      "description": "Lightweight, privacy-friendly web analytics platform for modern applications.",
      "publisher": {
        "@type": "Organization",
        "name": "Triangle Analytics",
        "url": "https://the-triangle-analytics.web.app/"
      }
    },
    {
      "@type": "ItemList",
      "name": "Triangle Analytics Sitelinks",
      "itemListElement": [
        {
          "@type": "SiteNavigationElement",
          "position": 1,
          "name": "Features",
          "description": "Sub-second visitor session streams, zero cookies, auto-tracked goals",
          "url": "https://the-triangle-analytics.web.app/#features"
        },
        {
          "@type": "SiteNavigationElement",
          "position": 2,
          "name": "Pricing",
          "description": "Transparent pricing for high-performance product teams",
          "url": "https://the-triangle-analytics.web.app/#pricing"
        },
        {
          "@type": "SiteNavigationElement",
          "position": 3,
          "name": "Sign In",
          "description": "Access your real-time analytics dashboard",
          "url": "https://the-triangle-analytics.web.app/auth/signin"
        },
        {
          "@type": "SiteNavigationElement",
          "position": 4,
          "name": "Join / Sign Up",
          "description": "Create your account and start streaming telemetry in minutes",
          "url": "https://the-triangle-analytics.web.app/auth/join"
        },
        {
          "@type": "SiteNavigationElement",
          "position": 5,
          "name": "Privacy Policy",
          "description": "100% Cookieless, GDPR and CCPA compliant analytics disclosures",
          "url": "https://the-triangle-analytics.web.app/privacy"
        },
        {
          "@type": "SiteNavigationElement",
          "position": 6,
          "name": "Terms of Service",
          "description": "Triangle Analytics terms of service and conditions",
          "url": "https://the-triangle-analytics.web.app/terms"
        }
      ]
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={` ${outfit.variable} h-full antialiased w-full max-w-full overflow-x-hidden`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(sitelinksJsonLd) }}
        />
      </head>
      <body className="min-h-full w-full max-w-full overflow-x-hidden flex flex-col">{children}</body>
    </html>
  );
}
