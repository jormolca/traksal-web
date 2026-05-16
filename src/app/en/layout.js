import '../globals.css';

export const metadata = {
  metadataBase: new URL('https://www.traksal.com'),
  title: {
    default: 'Traksal | CRM Software for Sales Teams',
    template: '%s | Traksal'
  },
  description: 'Traksal is the CRM software built for field sales teams. Free digital clock-in, visit planning, geographic route optimization, expense reports and interactive catalog.',
  keywords: [
    'sales CRM', 'field sales software', 'sales team management',
    'sales visit planning', 'free clock-in app', 'retail execution',
    'sales expense reports', 'CRM Spain', 'commercial visit software',
    'sales route management', 'SME CRM', 'sales rep control software',
    'digital order catalog', 'sales force SaaS'
  ],
  authors: [{ name: 'Traksal', url: 'https://www.traksal.com' }],
  creator: 'Traksal',
  publisher: 'Traksal',
  verification: {},
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 }
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    alternateLocales: ['es_ES'],
    url: 'https://www.traksal.com/en',
    siteName: 'Traksal',
    title: 'Traksal | CRM Software for Sales Teams',
    description: 'Connect your office with your field team. Free clock-in, visit CRM, interactive catalog and expense reports for sales reps.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Traksal - CRM Software for Sales Teams' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Traksal | CRM Software for Sales Teams',
    description: 'Connect your office with your field team. Free clock-in, visit CRM and expense reports for sales reps.',
    images: ['/og-image.png']
  },
  alternates: {
    canonical: 'https://www.traksal.com/en',
    languages: { 'es': 'https://www.traksal.com', 'en': 'https://www.traksal.com/en' }
  },
  icons: {
    icon: '/icon.svg',
    apple: '/apple-icon.png',
  }
};

export default function EnglishRootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
