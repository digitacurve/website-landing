import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Website Designer Melbourne | Premium Web Design Agency - Digitacurve',
  description: 'Digitacurve is Melbourne’s leading custom web design agency. We build custom-coded, mobile-first Next.js websites optimized for Google Ads conversions, SEO, and AI search engines. Claim your free web strategy today!',
  keywords: [
    'website designer melbourne',
    'web design agency melbourne',
    'web design melbourne',
    'custom web design melbourne',
    'website design melbourne',
    'small business website design melbourne',
    'performance web design',
    'conversion rate optimization melbourne',
    'nextjs web developer melbourne'
  ],
  alternates: {
    canonical: 'https://digitacurve.com/web-design-melbourne',
  },
  openGraph: {
    title: 'Website Designer Melbourne | Custom Web Design Agency - Digitacurve',
    description: 'Bespoke custom-coded websites built for high speed and Google Ads conversions. No templates, no bloat. Get a free website strategy from Melbourne paid search experts.',
    url: 'https://digitacurve.com/web-design-melbourne',
    siteName: 'Digitacurve',
    locale: 'en_AU',
    type: 'website',
    images: [
      {
        url: 'https://digitacurve.com/images/web-design-melbourne-og.png',
        width: 1200,
        height: 630,
        alt: 'Digitacurve Melbourne Custom Web Design Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website Designer Melbourne | Custom Web Design - Digitacurve',
    description: 'Stop wasting ad spend on slow templates. Digitacurve builds custom Next.js websites optimized for search, performance, and lead generation.',
    images: ['https://digitacurve.com/images/web-design-melbourne-og.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function WebDesignMelbourneLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
