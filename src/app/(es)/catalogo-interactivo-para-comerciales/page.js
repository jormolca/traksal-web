import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import CatalogoPresentacion from '@/components/CatalogoPresentacion';

export const metadata = {
  title: 'App Toma de Pedidos Comerciales en el Acto | Traksal CRM',
  description: 'Catálogo digital e interactivo para comerciales. Haz pedidos en el acto sin papel, actualizado en tiempo real y sincronizado con tu CRM.',
  keywords: ['catalogo digital ventas', 'app toma pedidos', 'catalogo interactivo', 'crm con catalogo', 'digitalizacion ventas'],
  alternates: {
    canonical: 'https://www.traksal.com/catalogo-interactivo-para-comerciales',
    languages: { 'es': 'https://www.traksal.com/catalogo-interactivo-para-comerciales', 'en': 'https://www.traksal.com/en/interactive-catalog' }
  },
  openGraph: {
    title: 'Catálogo Interactivo para Comerciales | Traksal',
    description: 'Olvídate del papel. Muestra todos tus productos, tarifas y stock en tiempo real desde la tablet o el móvil durante tus visitas comerciales.',
    url: 'https://www.traksal.com/catalogo-interactivo-para-comerciales',
    type: 'website',
  }
};

export default function CatalogoInteractivoPage() {
  return (
    <>
      <Navbar lang="es" />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Traksal Catálogo Interactivo",
            "operatingSystem": "Web, iOS, Android",
            "applicationCategory": "BusinessApplication",
            "featureList": [
              "Catálogo digital sin papel",
              "Toma de pedidos en el acto",
              "Sincronización en tiempo real con la central",
              "Gestión de familias de productos y stock"
            ],
            "offers": {
              "@type": "Offer",
              "price": "0.00",
              "priceCurrency": "EUR"
            }
          }),
        }}
      />

      <main style={{ paddingTop: '100px', minHeight: '100vh', background: 'var(--bg-color)', color: 'var(--text-color)' }}>
        
        {/* HERO SECTION */}
        <section className="section" style={{ paddingBottom: '40px' }}>
          <div className="container" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                        <span className="section-label">CATÁLOGO INTERACTIVO</span>
            <h1 className="hero-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', marginBottom: '24px', lineHeight: 1.1 }}>
              El catálogo definitivo: <br />
              <span className="gradient-text">vende en el acto sin salir de la app.</span>
            </h1>
            <p className="hero-subtitle" style={{ fontSize: '1.25rem', marginBottom: '40px', color: 'var(--text-secondary)' }}>
              Olvídate de imprimir catálogos pesados y desactualizados. Con Traksal, tu equipo lleva todo el portfolio en su tablet. Añade productos al pedido mientras le enseñas las novedades al cliente y sincroniza la venta al instante.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
              <Link href="/#contacto" className="btn btn-primary" style={{ padding: '14px 32px', fontSize: '1.1rem' }}>Quiero probar el catálogo</Link>
            </div>
          </div>
        </section>

        {/* MOCKUP SECTION */}
        <section className="section" style={{ paddingBottom: '0' }}>
          <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ width: '100%', position: 'relative' }}>
               <CatalogoPresentacion lang="es" />
            </div>
          </div>
        </section>

        {/* FEATURES TEXT */}
        <section className="section">
          <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
              
              <div className="feature-item" style={{ display: 'flex', gap: '20px' }}>
                <div style={{ fontSize: '2.5rem', flexShrink: 0 }}>📱</div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Digital y sin papel</h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>Catálogo siempre actualizado en el dispositivo del comercial. Cero gasto en impresión.</p>
                </div>
              </div>

              <div className="feature-item" style={{ display: 'flex', gap: '20px' }}>
                <div style={{ fontSize: '2.5rem', flexShrink: 0 }}>🛒</div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Pedido en el acto</h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>Añade cantidades desde el propio catálogo o mediante búsqueda por referencia.</p>
                </div>
              </div>

              <div className="feature-item" style={{ display: 'flex', gap: '20px' }}>
                <div style={{ fontSize: '2.5rem', flexShrink: 0 }}>🔗</div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Integrado con CRM</h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>Los precios cambian en tiempo real si la central los actualiza. El pedido se registra al instante.</p>
                </div>
              </div>

              <div className="feature-item" style={{ display: 'flex', gap: '20px' }}>
                <div style={{ fontSize: '2.5rem', flexShrink: 0 }}>📦</div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Gestión de productos</h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>Organización por familias, subfamilias y visibilidad de stock directo.</p>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>
      <Footer lang="es" />
    </>
  );
}
