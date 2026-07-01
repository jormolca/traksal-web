import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import NotaGastosPresentacion from '@/components/NotaGastosPresentacion';

export const metadata = {
  title: 'Nota de Gastos Comerciales por IA | Traksal CRM',
  description: 'Software de nota de gastos inteligente. Los comerciales suben una foto del ticket y la Inteligencia Artificial rellena los gastos automáticamente.',
  keywords: ['nota de gastos comerciales', 'digitalizar tickets gastos', 'app control gastos comerciales', 'ia gastos empresas', 'traksal crm gastos'],
  alternates: {
    canonical: 'https://www.traksal.com/nota-de-gastos-comerciales',
    languages: { 'es': 'https://www.traksal.com/nota-de-gastos-comerciales', 'en': 'https://www.traksal.com/en/expense-reports' }
  },
  openGraph: {
    title: 'Nota de Gastos Comerciales por IA | Traksal',
    description: 'Digitaliza los gastos con una sola foto. La IA extrae los datos y elimina el papeleo de fin de mes.',
    url: 'https://www.traksal.com/nota-de-gastos-comerciales',
    type: 'website',
  }
};

export default function NotaDeGastosComercialesPage() {
  return (
    <main style={{ background: 'var(--primary)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar lang="es" />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Traksal Nota de Gastos Inteligente",
            "operatingSystem": "Web, iOS, Android",
            "applicationCategory": "BusinessApplication",
            "featureList": [
              "Escaneo de tickets con Inteligencia Artificial",
              "Auto-rellenado de importe y fecha",
              "Almacenamiento seguro en la nube",
              "Exportación de gastos a Excel"
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
                                <h2 className="section-label">NOTA DE GASTOS COMERCIALES</h2>
                
                <h1 style={{ marginBottom: '24px', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', lineHeight: 1.1 }}>
                  Olvídate de los tickets: <br />
                  <span className="gradient-text">digitaliza tus gastos con una foto.</span>
                </h1>
                <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '40px', maxWidth: '500px', lineHeight: 1.6 }}>
                  El cierre de mes no tiene por qué ser un caos de tickets arrugados. Con Traksal, tus comerciales hacen una foto a sus recibos y nuestra IA extrae todos los datos automáticamente. Todo queda centralizado, eliminando el papel y conectando con administración.
                </p>
                
                <div style={{ display: 'grid', gap: '24px' }}>
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(194, 158, 94, 0.2)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '1.2rem' }}>
                      📸
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.1rem', marginBottom: '4px', color: 'white' }}>Reconocimiento por IA</h3>
                      <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', margin: 0 }}>Haz una foto al ticket y Traksal rellena automáticamente el importe, fecha y concepto. Sin teclear nada.</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(162, 217, 243, 0.2)', color: 'var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '1.2rem' }}>
                      ☁️
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.1rem', marginBottom: '4px', color: 'white' }}>Cero pérdidas de papel</h3>
                      <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', margin: 0 }}>Olvídate de grapar tickets y enviarlos por correo. Todos los recibos se guardan en la nube seguros.</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(235, 153, 255, 0.2)', color: '#EB99FF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '1.2rem' }}>
                      📊
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.1rem', marginBottom: '4px', color: 'white' }}>Informes Excel en un clic</h3>
                      <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', margin: 0 }}>Selecciona un rango de fechas y descarga un informe detallado listo para contabilidad.</p>
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
                    <NotaGastosPresentacion lang="es" />
                 </div>
              </div>

           </div>
        </div>
      </section>

      <Footer lang="es" />
    </main>
  );
}
