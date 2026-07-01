import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

import PlanificacionInteractiva from '@/components/PlanificacionInteractiva';

export const metadata = {
  title: 'Geographic Visit Planning for Sales Reps | Traksal CRM',
  description: 'Optimize your sales team routes with Traksal\'s interactive map. Group nearby clients and reduce idle time on the road.',
  keywords: ['sales route planning', 'crm client map', 'optimize sales visits', 'client geolocation', 'traksal crm'],
  alternates: {
    canonical: 'https://www.traksal.com/en/geographic-planning',
    languages: { 'es': 'https://www.traksal.com/planificacion-geografica', 'en': 'https://www.traksal.com/en/geographic-planning' }
  },
  openGraph: {
    title: 'Geographic Route Planning | Traksal',
    description: 'Save gas and time by planning your sales rep visits on the map.',
    url: 'https://www.traksal.com/en/geographic-planning',
    type: 'website',
  }
};

export default function GeographicPlanningPage() {
  return (
    <main style={{ background: 'var(--primary)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar lang="en" />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Traksal Geographic Planning",
            "operatingSystem": "Web, iOS, Android",
            "applicationCategory": "BusinessApplication",
            "featureList": [
              "Map visualization of clients",
              "Sales route optimization",
              "Reduction of road time",
              "Step-by-step guide for reps"
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
          <PlanificacionInteractiva lang="en" />
        </div>
      </section>

      <Footer lang="en" />
    </main>
  );
}
