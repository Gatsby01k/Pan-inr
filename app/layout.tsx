import type { Metadata } from 'next';
import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://pan-network.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'PAN — Private INR Flow Network',
    template: '%s | PAN',
  },
  description:
    'Private Affiliate Network connecting merchant demand with verified execution partners for controlled INR payment flow, routing, and daily volume.',
  applicationName: 'PAN',
  keywords: [
    'PAN',
    'Private Affiliate Network',
    'INR payment flow',
    'India traffic',
    'merchant deposits',
    'routing',
    'P2P liquidity',
    'high risk payments',
    'iGaming payments',
    'UPI deposits',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: 'PAN',
    title: 'PAN — Private INR Flow Network',
    description:
      'Controlled INR flow for merchants and execution partners. Deposits, routing, settlement, and real daily volume.',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'PAN Private INR Flow Network',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PAN — Private INR Flow Network',
    description:
      'Controlled INR flow for merchants and execution partners. Deposits, routing, settlement, and real daily volume.',
    images: ['/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  category: 'finance',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
