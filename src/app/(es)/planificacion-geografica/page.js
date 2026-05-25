import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

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
          <div className="responsive-grid" style={{ position: 'relative' }}>
            
            {/* Text Side */}
            <div style={{ order: 1 }}>
              <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.82rem', color: 'var(--text-muted)', textDecoration: 'none', marginBottom: '24px' }}>
                ← Volver al inicio
              </Link>
              <span className="section-label">Módulo CRM</span>
              <h1 style={{ marginBottom: '24px', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', lineHeight: 1.1 }}>
                Menos kilómetros, <br />
                <span className="gradient-text">más visitas efectivas.</span>
              </h1>
              <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '40px', maxWidth: '500px', lineHeight: 1.6 }}>
                El tiempo de tu equipo de ventas es oro. Visualiza toda tu cartera en el mapa y agrupa a los clientes por cercanía para crear la ruta perfecta.
              </p>
              
              <div style={{ display: 'grid', gap: '24px' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ width: '40px', height: '40px', background: 'rgba(194, 158, 94, 0.1)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)', flexShrink: 0 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '4px', color: 'white' }}>Tus clientes en el Mapa</h3>
                    <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>Olvida las listas de direcciones interminables. Abre el mapa interactivo y descubre de un vistazo qué clientes y prospectos están en la misma zona.</p>
                  </div>
                </div>
                
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ width: '40px', height: '40px', background: 'rgba(162, 217, 243, 0.1)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--secondary)', flexShrink: 0 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="5" r="3"></circle><line x1="12" y1="22" x2="12" y2="8"></line><path d="M5 12H2a10 10 0 0 0 20 0h-3"></path></svg>
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '4px', color: 'white' }}>Rutas Inteligentes</h3>
                    <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>Selecciona los clientes que quieres visitar hoy y Traksal trazará el orden más lógico. Minimiza el tiempo al volante y el gasto en gasolina.</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ width: '40px', height: '40px', background: 'rgba(125, 255, 176, 0.08)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#7DFFB0', flexShrink: 0 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '4px', color: 'white' }}>Guía Diaria en el Móvil</h3>
                    <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>El comercial abre la app y tiene clara su hoja de ruta. Sabe exactamente a dónde ir primero, a qué hora, y a quién ver después.</p>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '56px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <Link href="/#contacto" className="btn btn-primary btn-lg">
                  Empieza a optimizar rutas
                </Link>
              </div>
            </div>

            {/* Visual Side */}
            <div style={{ order: 2, display: 'flex', justifyContent: 'center', position: 'sticky', top: '140px', alignSelf: 'start' }}>
               <div style={{ 
                  background: 'var(--primary-mid)', 
                  borderRadius: '20px', 
                  border: '1px solid rgba(162,217,243,0.2)', 
                  padding: '8px', 
                  boxShadow: '0 30px 80px rgba(0,0,0,0.4)',
                  width: '100%',
                  maxWidth: '450px',
                  overflow: 'hidden',
                  position: 'relative'
                }} className="animate-float">
                  
                  {/* Top Bar */}
                  <div style={{ padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(0,0,0,0.2)', borderRadius: '14px 14px 0 0' }}>
                    <div style={{ fontSize: '0.9rem', color: 'white', fontWeight: 600 }}>Ruta Comercial: Madrid Norte</div>
                    <span style={{ background: 'rgba(125, 255, 176, 0.1)', color: '#7DFFB0', fontSize: '0.75rem', padding: '4px 10px', borderRadius: '12px', fontWeight: 700 }}>Activa</span>
                  </div>

                  {/* Map Simulation */}
                  <div style={{ 
                    height: '280px', 
                    background: '#e0e9f0', 
                    position: 'relative',
                    backgroundImage: 'radial-gradient(#a3b8cc 1px, transparent 1px)',
                    backgroundSize: '20px 20px',
                    borderBottomRadius: '14px'
                  }}>
                    {/* SVG Route Line */}
                    <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
                      <path d="M 80,180 C 120,120 150,150 200,80 S 300,60 340,120" fill="none" stroke="var(--secondary)" strokeWidth="4" strokeDasharray="8 4" strokeLinecap="round" />
                    </svg>

                    {/* Pin 1 - Start */}
                    <div style={{ position: 'absolute', top: '160px', left: '60px', textAlign: 'center' }}>
                      <div style={{ width: '40px', height: '40px', background: 'var(--primary)', borderRadius: '50%', border: '4px solid white', boxShadow: '0 4px 10px rgba(0,0,0,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>1</div>
                      <div style={{ background: 'white', color: '#333', fontSize: '0.75rem', padding: '2px 6px', borderRadius: '4px', marginTop: '4px', fontWeight: 600, boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>Cliente 1</div>
                    </div>

                    {/* Pin 2 */}
                    <div style={{ position: 'absolute', top: '60px', left: '180px', textAlign: 'center' }}>
                      <div style={{ width: '40px', height: '40px', background: 'var(--accent)', borderRadius: '50%', border: '4px solid white', boxShadow: '0 4px 10px rgba(0,0,0,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#333', fontWeight: 'bold' }}>2</div>
                      <div style={{ background: 'white', color: '#333', fontSize: '0.75rem', padding: '2px 6px', borderRadius: '4px', marginTop: '4px', fontWeight: 600, boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>Cliente 2</div>
                    </div>

                    {/* Pin 3 - Destination */}
                    <div style={{ position: 'absolute', top: '100px', left: '320px', textAlign: 'center' }}>
                      <div style={{ width: '40px', height: '40px', background: 'var(--secondary)', borderRadius: '50%', border: '4px solid white', boxShadow: '0 4px 10px rgba(0,0,0,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', fontWeight: 'bold' }}>3</div>
                      <div style={{ background: 'white', color: '#333', fontSize: '0.75rem', padding: '2px 6px', borderRadius: '4px', marginTop: '4px', fontWeight: 600, boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>Cliente 3</div>
                    </div>
                  </div>

                  {/* Bottom Stats */}
                  <div style={{ padding: '20px', background: 'var(--primary-dark)', borderRadius: '0 0 14px 14px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                      <div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '4px', textTransform: 'uppercase' }}>Distancia Total</div>
                        <div style={{ fontSize: '1.2rem', color: 'white', fontWeight: 700 }}>24.5 km</div>
                      </div>
                      <div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '4px', textTransform: 'uppercase' }}>Tiempo Estimado</div>
                        <div style={{ fontSize: '1.2rem', color: 'white', fontWeight: 700 }}>1h 45m</div>
                      </div>
                    </div>
                  </div>

               </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
