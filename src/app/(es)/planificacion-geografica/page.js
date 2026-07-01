import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

import PlanificacionInteractiva from '@/components/PlanificacionInteractiva';

export const metadata = {
  title: 'Planificación Geográfica de Visitas Comerciales | Traksal CRM',
  description: 'Optimiza las rutas de tu equipo comercial con el mapa interactivo de Traksal. Agrupa clientes cercanos y reduce los tiempos muertos en carretera.',
  keywords: ['planificación rutas comerciales', 'mapa clientes crm', 'optimizar visitas ventas', 'geolocalización clientes', 'traksal crm'],
  alternates: {
    canonical: 'https://www.traksal.com/planificacion-geografica',
    languages: { 'es': 'https://www.traksal.com/planificacion-geografica', 'en': 'https://www.traksal.com/en/geographic-planning' }
  },
  openGraph: {
    title: 'Planificación Geográfica de Rutas | Traksal',
    description: 'Ahorra gasolina y tiempo planificando las visitas de tus comerciales en el mapa.',
    url: 'https://www.traksal.com/planificacion-geografica',
    type: 'website',
  }
};

export default function PlanificacionGeograficaPage() {
  return (
    <main style={{ background: 'var(--primary)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Traksal Planificación Geográfica",
            "operatingSystem": "Web, iOS, Android",
            "applicationCategory": "BusinessApplication",
            "featureList": [
              "Visualización de clientes en mapa",
              "Optimización de rutas comerciales",
              "Reducción de tiempos en carretera",
              "Guía paso a paso para comerciales"
            ],
            "offers": {
              "@type": "Offer",
              "price": "0.00",
              "priceCurrency": "EUR"
            }
          }),
        }}
      />
      
      <section style={{
        paddingTop: 'calc(var(--nav-height) + 10px)',
        paddingBottom: '80px',
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <div className="container">
          <PlanificacionInteractiva lang="es" />
        </div>
      </section>

      <Footer />
    </main>
  );
}
