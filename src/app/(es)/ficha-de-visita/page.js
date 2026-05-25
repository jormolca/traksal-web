import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import FichaVisitaPresentacion from '@/components/FichaVisitaPresentacion';

export const metadata = {
  title: 'Ficha de Visita (GPV) | Traksal CRM',
  description: 'El comercial registra cada visita desde su tablet: estado del lineal, toma de pedidos, incidencias y geolocalización. La herramienta definitiva para el GPV.',
  keywords: ['ficha de visita', 'gpv', 'gestor punto de venta', 'reporte comercial', 'toma de pedidos', 'crm ipad', 'traksal'],
  alternates: {
    canonical: 'https://www.traksal.com/ficha-de-visita',
    languages: { 
      'es': 'https://www.traksal.com/ficha-de-visita', 
      'en': 'https://www.traksal.com/en/visit-report' 
    }
  },
  openGraph: {
    title: 'Reporte de Visita GPV | Traksal',
    description: 'Controla el punto de venta desde tu tablet. Auditoría, pedidos y control horario en una sola pantalla.',
    url: 'https://www.traksal.com/ficha-de-visita',
    type: 'website',
  }
};

export default function FichaVisitaPage() {
  return (
    <main style={{ background: 'var(--primary)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      
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
              <span className="section-label">Gestor en el Punto de Venta (GPV)</span>
              <h1 style={{ marginBottom: '24px', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)' }}>
                Ficha de visita <br />
                <span className="gradient-text">todo en tu tablet.</span>
              </h1>
              <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '40px', maxWidth: '500px' }}>
                Olvida los reportes en papel. Cuando el comercial llega al estanco, abre su iPad y tiene todo lo necesario para auditar, pedir y reportar a la central en tiempo récord.
              </p>
              
              <div style={{ display: 'grid', gap: '24px' }}>
                
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ width: '40px', height: '40px', background: 'rgba(162, 217, 243, 0.1)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--secondary)', flexShrink: 0 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '4px', color: 'white' }}>Geolocalización y Tiempos</h3>
                    <p style={{ fontSize: '0.95rem' }}>Traksal guarda la <strong>ubicación GPS exacta</strong> al iniciar y finalizar la visita, calculando automáticamente el tiempo real transcurrido dentro del establecimiento.</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ width: '40px', height: '40px', background: 'rgba(255, 95, 86, 0.1)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FF5F56', flexShrink: 0 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '4px', color: 'white' }}>Aviso Inteligente de Fichaje</h3>
                    <p style={{ fontSize: '0.95rem' }}>¿El comercial olvidó fichar al salir de casa? Al intentar abrir la primera visita del día, el sistema le avisará obligándole a realizar el fichaje de <strong>Inicio de Jornada</strong>.</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ width: '40px', height: '40px', background: 'rgba(194, 158, 94, 0.1)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)', flexShrink: 0 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '4px', color: 'white' }}>Toma de Pedidos y Catálogo</h3>
                    <p style={{ fontSize: '0.95rem' }}>Añade líneas de reposición al instante (boleto físico o electrónico) o pasa al <Link href="#catalogo" style={{ color: 'var(--secondary)' }}>Modo Catálogo Interactivo</Link> para mostrar novedades y cerrar ventas en el acto.</p>
                  </div>
                </div>

              </div>

              <div style={{ marginTop: '56px' }}>
                <Link href="/#contacto" className="btn btn-primary btn-lg">
                  Prueba la Ficha GPV gratis
                </Link>
              </div>
            </div>

            {/* Visual Side */}
            <div style={{ order: 2, display: 'flex', justifyContent: 'center', position: 'sticky', top: '140px', alignSelf: 'start' }}>
              <FichaVisitaPresentacion lang="es" />
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
