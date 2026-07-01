import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import KpisPresentacion from '@/components/KpisPresentacion';

export const metadata = {
  title: 'KPIs y Evaluación Comercial por IA | Traksal CRM',
  description: 'Software de KPIs y evaluación de equipos de ventas. Controla métricas en tiempo real e incentivos, y genera informes con Inteligencia Artificial.',
  keywords: ['kpis equipo comercial', 'evaluacion ventas ia', 'informes comerciales', 'calculo de incentivos ventas', 'software kpis ventas', 'traksal crm informes'],
  alternates: {
    canonical: 'https://www.traksal.com/kpis-y-evaluacion-equipo-comercial',
    languages: { 'es': 'https://www.traksal.com/kpis-y-evaluacion-equipo-comercial', 'en': 'https://www.traksal.com/en/sales-team-kpis-evaluation' }
  },
  openGraph: {
    title: 'KPIs y Evaluación Comercial por IA | Traksal',
    description: 'Control absoluto del equipo de ventas. Métricas en tiempo real, cálculo de incentivos y evaluaciones redactadas automáticamente por IA.',
    url: 'https://www.traksal.com/kpis-y-evaluacion-equipo-comercial',
    type: 'website',
  }
};

export default function KpisYEvaluacionPage() {
  return (
    <main style={{ background: 'var(--primary)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar lang="es" />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Traksal KPIs y Evaluación de Ventas",
            "operatingSystem": "Web",
            "applicationCategory": "BusinessApplication",
            "featureList": [
              "KPIs del equipo comercial en tiempo real",
              "Evaluación comercial redactada por Inteligencia Artificial",
              "Cálculo automático de incentivos y comisiones",
              "Exportación de informes a Excel"
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
                                <h2 className="section-label">KPIS Y EVALUACIÓN DE VENTAS</h2>
                
                <h1 style={{ marginBottom: '24px', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', lineHeight: 1.1 }}>
                  Control absoluto: <br />
                  <span className="gradient-text">evalúa a tu equipo comercial con IA.</span>
                </h1>
                <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '40px', maxWidth: '500px', lineHeight: 1.6 }}>
                  Audita el rendimiento en un clic y deja que la Inteligencia Artificial analice los datos por ti. Traksal centraliza las métricas, cobertura y objetivos de todo tu equipo para que puedas tomar decisiones basadas en datos reales.
                </p>
                
                <div style={{ display: 'grid', gap: '24px' }}>
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(194, 158, 94, 0.2)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '1.2rem' }}>
                      📊
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.1rem', marginBottom: '4px', color: 'white' }}>Métricas en tiempo real</h3>
                      <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', margin: 0 }}>Controla el número de visitas, la distribución por producto y la progresión de objetivos globales.</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(162, 217, 243, 0.2)', color: 'var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '1.2rem' }}>
                      💰
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.1rem', marginBottom: '4px', color: 'white' }}>Cálculo de Incentivos</h3>
                      <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', margin: 0 }}>Calcula automáticamente comisiones y objetivos logrados de cada vendedor. Listo para nóminas.</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(235, 153, 255, 0.2)', color: '#EB99FF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '1.2rem' }}>
                      ✨
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.1rem', marginBottom: '4px', color: 'white' }}>Asistente Analítico IA</h3>
                      <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', margin: 0 }}>La Inteligencia Artificial redacta informes detallados de evaluación de cada comercial, destacando puntos fuertes y áreas de mejora.</p>
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
                    <KpisPresentacion lang="es" />
                 </div>
              </div>

           </div>
        </div>
      </section>

      <Footer lang="es" />
    </main>
  );
}
