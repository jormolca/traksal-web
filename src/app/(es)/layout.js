import '../globals.css';

export const metadata = {
  metadataBase: new URL('https://www.traksal.com'),
  title: {
    default: 'Traksal | Software CRM para Redes Comerciales y Gestión de Equipos',
    template: '%s | Traksal'
  },
  description: 'Traksal es el software CRM diseñado para gestionar tu fuerza de ventas en campo. Planificación de visitas, gestión de clientes, fichaje digital gratuito y nota de gastos para comerciales.',
  keywords: [
    'CRM comerciales', 'software fuerza de ventas', 'gestión equipo comercial',
    'planificación visitas comerciales', 'fichaje digital gratuito', 'GPV gestión punto de venta',
    'nota de gastos comerciales', 'CRM España', 'software visitas comerciales',
    'gestión rutas comerciales', 'CRM pymes', 'software control comerciales',
    'catálogo digital pedidos', 'SaaS fuerza de ventas'
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
    locale: 'es_ES',
    alternateLocales: ['en_GB'],
    url: 'https://www.traksal.com',
    siteName: 'Traksal',
    title: 'Traksal | Software CRM para Redes Comerciales',
    description: 'Conecta tu oficina con tu equipo en la calle. Fichaje gratuito, CRM de visitas, catálogo interactivo y nota de gastos para comerciales.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Traksal - Software CRM para Redes Comerciales' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Traksal | Software CRM para Redes Comerciales',
    description: 'Conecta tu oficina con tu equipo en la calle. Fichaje gratuito, CRM de visitas y nota de gastos para comerciales.',
    images: ['/og-image.png']
  },
  alternates: {
    canonical: 'https://www.traksal.com',
    languages: { 'es': 'https://www.traksal.com', 'en': 'https://www.traksal.com/en' }
  },
  icons: {
    icon: '/icon.svg',
    apple: '/apple-icon.png',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}
