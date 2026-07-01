import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import PreparacionVisitasPresentacion from '@/components/PreparacionVisitasPresentacion';

export const metadata = {
  title: 'Programación de Visitas Comerciales | Traksal CRM',
  description: 'Software para programación de visitas comerciales. Prepara cada venta consultando objetivos, agenda e histórico de pedidos desde tu móvil antes de entrar al cliente.',
  keywords: ['programación de visitas comerciales', 'preparación de visitas ventas', 'agenda comercial', 'crm rutas comerciales', 'histórico pedidos clientes'],
  alternates: {
    canonical: 'https://www.traksal.com/programacion-visitas-comerciales',
    languages: { 'es': 'https://www.traksal.com/programacion-visitas-comerciales', 'en': 'https://www.traksal.com/en/commercial-visits-programming' }
  },
  openGraph: {
    title: 'Programación de Visitas Comerciales | Traksal',
    description: 'Prepara cada venta consultando la agenda, objetivos e histórico de tus clientes antes de entrar.',
    url: 'https://www.traksal.com/programacion-visitas-comerciales',
    type: 'website',
  }
};

export default function ProgramacionVisitasComercialesPage() {
  return (
    <main style={{ background: 'var(--primary)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar lang="es" />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Traksal Programación de Visitas Comerciales",
            "operatingSystem": "Web, iOS, Android",
            "applicationCategory": "BusinessApplication",
            "featureList": [
              "Agenda diaria del comercial",
              "Consulta de objetivos por cliente",
              "Histórico de ventas y pedidos físicos",
              "Sincronización en tiempo real con central"
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
        paddingTop: 'calc(var(--nav-height) + 40px)',
        paddingBottom: '80px',
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <div className="container">
           <div className="responsive-grid" style={{ position: 'relative', alignItems: 'center' }}>
      
              {/* Text Side */}
              <div style={{ order: 1 }}>
                                <h2 className="section-label">PROGRAMACIÓN DE VISITAS COMERCIALES</h2>
                
                <h1 style={{ marginBottom: '24px', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', lineHeight: 1.1 }}>
                  La información es poder: <br />
                  <span className="gradient-text">prepara cada venta antes de cruzar la puerta.</span>
                </h1>
                <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '40px', maxWidth: '500px', lineHeight: 1.6 }}>
                  Tu agenda diaria, los objetivos por cliente y el histórico de pedidos, siempre en el bolsillo de tu comercial. Una vez optimizada la ruta, el éxito depende de la preparación. Sin improvisaciones: aseguras una negociación perfecta y permites revisar los pedidos al instante.
                </p>
                
                <div style={{ display: 'grid', gap: '24px' }}>
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(194, 158, 94, 0.2)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '1.2rem' }}>
                      🎯
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.1rem', marginBottom: '4px', color: 'white' }}>Preparación estratégica</h3>
                      <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', margin: 0 }}>Consulta el historial, el estado del cliente y notas clave desde el coche. No más ventas a ciegas.</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(162, 217, 243, 0.2)', color: 'var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '1.2rem' }}>
                      📈
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.1rem', marginBottom: '4px', color: 'white' }}>Objetivos claros por cliente</h3>
                      <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', margin: 0 }}>Visualiza las metas específicas asignadas a cada estanco para enfocar el discurso comercial.</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(235, 153, 255, 0.2)', color: '#EB99FF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '1.2rem' }}>
                      🛒
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.1rem', marginBottom: '4px', color: 'white' }}>Control total post-visita</h3>
                      <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', margin: 0 }}>Revisa en cualquier momento los pedidos cerrados durante la ruta para confirmar detalles.</p>
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: '40px' }}>
                  <Link href="/#contacto" className="btn btn-primary btn-lg">
                    Empezar ahora
                  </Link>
                </div>
              </div>

              {/* Visual Side */}
              <div style={{ order: 2, display: 'flex', justifyContent: 'center', position: 'sticky', top: '140px', alignSelf: 'start' }}>
                 <div style={{ width: '100%', maxWidth: '650px', position: 'relative' }}>
                    <PreparacionVisitasPresentacion lang="es" />
                 </div>
              </div>

           </div>
        </div>
      </section>

      <Footer lang="es" />
    </main>
  );
}
