import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import FichajeDemo from '@/components/FichajeDemo';


export const metadata = {
  title: 'Fichaje Diario Digital en un Clic | Control Horario Traksal',
  description: 'Descubre cómo el fichaje diario de Traksal simplifica el control horario de tu equipo comercial. Un solo clic desde el móvil, con geolocalización opcional y cumplimiento legal total.',
  keywords: ['fichaje diario', 'control horario', 'fichaje digital', 'geolocalización empleados', 'ley de control horario', 'traksal'],
  alternates: {
    canonical: 'https://www.traksal.com/fichaje-diario',
    languages: { 'es': 'https://www.traksal.com/fichaje-diario', 'en': 'https://www.traksal.com/en/clock-in-clock-out' }
  },
  openGraph: {
    title: 'Fichaje Diario Digital en un Clic | Traksal',
    description: 'La forma más sencilla y rápida de cumplir con el control horario obligatorio.',
    url: 'https://www.traksal.com/fichaje-diario',
    type: 'website',
  }
};

export default function FichajeDiarioPage() {
  return (
    <main style={{ background: 'var(--primary)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      
      {/* Schema.org JSON-LD for Software Application Feature */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Traksal Fichaje Diario",
            "operatingSystem": "iOS, Android, Web",
            "applicationCategory": "BusinessApplication",
            "featureList": [
              "Fichaje en un clic",
              "Geolocalización opcional",
              "Informes legales mensuales",
              "Sincronización en tiempo real"
            ],
            "offers": {
              "@type": "Offer",
              "price": "0.00",
              "priceCurrency": "EUR"
            }
          }),
        }}
      />
      
      {/* Content */}
      <section style={{
        paddingTop: 'calc(var(--nav-height) + 10px)',
        paddingBottom: '80px',
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <div className="container">
          <div className="responsive-grid">
            
            {/* Text Side */}
            <div style={{ order: 1 }}>
              <span className="section-label">Funcionalidad</span>
              <h1 style={{ marginBottom: '24px', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)' }}>
                Fichaje diario <br />
                <span className="gradient-text">en un solo clic.</span>
              </h1>
              <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '40px', maxWidth: '500px' }}>
                Hemos eliminado la complejidad. Tus empleados solo necesitan abrir la app y pulsar un botón. Sin formularios, sin esperas.
              </p>
              
              <div style={{ display: 'grid', gap: '24px' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ width: '40px', height: '40px', background: 'rgba(194, 158, 94, 0.1)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)', flexShrink: 0 }}>
                    ✓
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '4px', color: 'white' }}>Con o sin geolocalización</h3>
                    <p style={{ fontSize: '0.95rem' }}>Tú decides si quieres registrar la ubicación exacta del fichaje o mantenerlo privado. Configurable por el administrador.</p>
                  </div>
                </div>
                
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ width: '40px', height: '40px', background: 'rgba(162, 217, 243, 0.1)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--secondary)', flexShrink: 0 }}>
                    ✓
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '4px', color: 'white' }}>Disponibilidad inmediata</h3>
                    <p style={{ fontSize: '0.95rem' }}>El fichaje se sincroniza al instante con el panel de administración para que tengas el control en tiempo real.</p>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '56px' }}>
                <Link href="/#contacto" className="btn btn-primary btn-lg">
                  Probar gratis ahora
                </Link>
              </div>
            </div>

            {/* Visual Side */}
            <div style={{ order: 2 }}>
              <FichajeDemo />
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
