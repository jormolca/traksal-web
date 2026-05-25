import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Solicitud de Vacaciones y Libranzas Integrada | Traksal',
  description: 'Descubre cómo gestionar las vacaciones y libranzas de tu equipo con Traksal. Flujo integrado de solicitud, revisión del responsable y aprobación automática con notificaciones.',
  keywords: ['solicitud vacaciones', 'gestión libranzas', 'aprobar vacaciones empleados', 'ausencias', 'traksal'],
  alternates: {
    canonical: 'https://www.traksal.com/solicitud-vacaciones',
    languages: { 'es': 'https://www.traksal.com/solicitud-vacaciones', 'en': 'https://www.traksal.com/en/vacation-requests' }
  },
  openGraph: {
    title: 'Solicitud de Vacaciones y Libranzas Integrada | Traksal',
    description: 'Simplifica la gestión de ausencias en tu empresa con flujos de aprobación automáticos.',
    url: 'https://www.traksal.com/solicitud-vacaciones',
    type: 'website',
  }
};

export default function SolicitudVacacionesPage() {
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
            "name": "Traksal Gestión de Vacaciones",
            "operatingSystem": "iOS, Android, Web",
            "applicationCategory": "BusinessApplication",
            "featureList": [
              "Solicitud desde la app",
              "Prevención de solapamientos",
              "Bandeja de revisión de responsables",
              "Notificaciones por email automáticas"
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
          <div className="responsive-grid" style={{ position: 'relative' }}>
            
            {/* Text Side */}
            <div style={{ order: 1 }}>
              <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.82rem', color: 'var(--text-muted)', textDecoration: 'none', marginBottom: '24px' }}>
                ← Volver al inicio
              </Link>
              <span className="section-label">Funcionalidad</span>
              <h1 style={{ marginBottom: '24px', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', lineHeight: 1.1 }}>
                Gestión de vacaciones <br />
                <span className="gradient-text">fácil y organizada.</span>
              </h1>
              <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '40px', maxWidth: '500px', lineHeight: 1.6 }}>
                Despídete de los emails perdidos y los Excel desactualizados. Traksal integra todo el ciclo de solicitud y aprobación de ausencias en una sola plataforma.
              </p>
              
              <div style={{ display: 'grid', gap: '24px' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ width: '40px', height: '40px', background: 'rgba(194, 158, 94, 0.1)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)', flexShrink: 0 }}>
                    1
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '4px', color: 'white' }}>El empleado hace la solicitud</h3>
                    <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>Desde la app, el trabajador selecciona las fechas de sus vacaciones o libranza. El sistema bloquea automáticamente peticiones que se solapan con fechas ya aprobadas.</p>
                  </div>
                </div>
                
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ width: '40px', height: '40px', background: 'rgba(162, 217, 243, 0.1)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--secondary)', flexShrink: 0 }}>
                    2
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '4px', color: 'white' }}>Notificación al responsable</h3>
                    <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>El supervisor directo recibe una alerta por email instantánea. Desde su <em>Bandeja de Revisión</em> puede aceptar o denegar la solicitud con un solo clic.</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ width: '40px', height: '40px', background: 'rgba(125, 255, 176, 0.08)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#7DFFB0', flexShrink: 0 }}>
                    3
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '4px', color: 'white' }}>Confirmación automática</h3>
                    <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>En cuanto el responsable toma una decisión, el empleado recibe un aviso por email y el calendario de la empresa se actualiza al instante.</p>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '56px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <Link href="/#contacto" className="btn btn-primary btn-lg">
                  Probar gratis ahora
                </Link>
              </div>
            </div>

            {/* Visual Side */}
            <div style={{ order: 2, display: 'flex', justifyContent: 'center', position: 'sticky', top: '140px', alignSelf: 'start' }}>
               <div style={{ 
                  background: 'var(--primary-mid)', 
                  borderRadius: '20px', 
                  border: '1px solid rgba(162,217,243,0.2)', 
                  padding: '28px', 
                  boxShadow: '0 30px 80px rgba(0,0,0,0.4)',
                  width: '100%',
                  maxWidth: '450px'
                }} className="animate-float">
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Bandeja de Revisión</div>
                    <span style={{ background: '#E74C3C', color: 'white', fontSize: '0.75rem', padding: '2px 8px', borderRadius: '12px', fontWeight: 800 }}>3 PENDIENTES</span>
                  </div>

                  {[
                    { name: 'Ana Martínez', type: 'Vacaciones', dates: '10/08/2026 - 24/08/2026' },
                    { name: 'Carlos López', type: 'Libranza', dates: '05/09/2026 - 05/09/2026' },
                    { name: 'Elena García', type: 'Vacaciones', dates: '22/12/2026 - 02/01/2027' }
                  ].map((req, i) => (
                    <div key={i} style={{ padding: '16px', background: 'var(--bg-surface)', borderRadius: '12px', border: '1px solid var(--border-light)', marginBottom: '16px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                        <div>
                          <div style={{ fontWeight: 600, fontSize: '1rem', color: 'white', marginBottom: '4px' }}>{req.name}</div>
                          <div style={{ fontSize: '0.85rem', color: 'var(--secondary)', fontWeight: 500 }}>{req.type}</div>
                        </div>
                        <span style={{ background: 'rgba(243, 156, 18, 0.1)', color: '#F39C12', padding: '4px 8px', borderRadius: '6px', fontSize: '0.7rem', fontWeight: 700 }}>PENDIENTE</span>
                      </div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '16px' }}>
                        Fechas: {req.dates}
                      </div>
                      <div style={{ display: 'flex', gap: '8px' }}>
                        <button style={{ flex: 1, padding: '8px', background: 'rgba(231,76,60,0.1)', color: '#E74C3C', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 600, fontSize: '0.85rem' }}>Denegar</button>
                        <button style={{ flex: 1, padding: '8px', background: 'var(--secondary)', color: 'var(--primary)', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 600, fontSize: '0.85rem' }}>Aprobar</button>
                      </div>
                    </div>
                  ))}

               </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
