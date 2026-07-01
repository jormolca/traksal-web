import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Sobre Traksal | El CRM creado por y para comerciales',
  description: 'Conoce la historia detrás de Traksal. Un software CRM desarrollado por expertos con años de experiencia en ventas y gestión de equipos comerciales.',
  keywords: ['sobre traksal', 'historia traksal', 'equipo traksal', 'crm ventas españa', 'desarrollo software comercial'],
  alternates: {
    canonical: 'https://www.traksal.com/sobre-traksal',
    languages: { 'es': 'https://www.traksal.com/sobre-traksal', 'en': 'https://www.traksal.com/en/about-us' }
  },
  openGraph: {
    title: 'Sobre Traksal | El CRM creado por comerciales',
    description: 'Descubre cómo nuestra experiencia en la calle nos llevó a crear el CRM definitivo para equipos de ventas.',
    url: 'https://www.traksal.com/sobre-traksal',
    type: 'website',
  }
};

export default function SobreTraksalPage() {
  return (
    <main style={{ background: 'var(--primary)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar lang="es" />
      
      <section style={{
        paddingTop: 'calc(var(--nav-height) + 60px)',
        paddingBottom: '80px',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <div className="container">
           
           {/* Hero Section */}
           <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 80px auto' }}>
              <h2 className="section-label" style={{ justifyContent: 'center' }}>SOBRE TRAKSAL</h2>
              <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.1, margin: '24px 0' }}>
                Conocemos la calle. <br />
                <span className="gradient-text">Por eso creamos Traksal.</span>
              </h1>
              <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Traksal no es solo una empresa de tecnología. Somos un equipo con un extenso recorrido comercial que decidió construir la herramienta que siempre quiso tener en sus manos.
              </p>
           </div>

           {/* Story Section */}
           <div className="responsive-grid" style={{ alignItems: 'center', gap: '60px', marginBottom: '100px' }}>
              <div style={{ order: 1 }}>
                <h3 style={{ fontSize: '2rem', color: 'white', marginBottom: '24px' }}>De comerciales, para comerciales</h3>
                <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '20px', lineHeight: 1.7 }}>
                  Durante años, sufrimos los problemas clásicos de la gestión de ventas: CRMs complejos diseñados para oficinistas, reportes interminables a final de mes, tickets de gastos perdidos y rutas mal planificadas.
                </p>
                <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                  Nos dimos cuenta de que la mayoría de softwares del mercado no entendían el día a día del vendedor. Por eso, decidimos unir nuestra profunda experiencia en ventas con tecnología de vanguardia para crear <strong>Traksal Sales Drive</strong>.
                </p>
                <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                  Además, sabemos que cada negocio es un mundo. Hemos diseñado un sistema "universal" y robusto para todos los sectores, pero mantenemos la flexibilidad técnica para desarrollar un <strong>traje a medida</strong> que encaje perfectamente con los procesos únicos de tu empresa.
                </p>
              </div>
              <div style={{ order: 2, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '24px', padding: '40px', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '200px', height: '200px', background: 'var(--accent)', filter: 'blur(100px)', opacity: 0.2, borderRadius: '50%' }}></div>
                <div style={{ fontSize: '4rem', marginBottom: '20px' }}>🤝</div>
                <h4 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '16px' }}>Nuestra Ventaja Injusta</h4>
                <p style={{ color: '#94a3b8', lineHeight: 1.6 }}>
                  Saber exactamente qué necesita un Jefe de Ventas para auditar a su equipo, y qué necesita un Comercial para no perder tiempo delante del cliente. Esa empatía es el núcleo de nuestro código.
                </p>
              </div>
           </div>

           {/* Philosophy Section */}
           <div style={{ textAlign: 'center', marginBottom: '60px' }}>
             <h2 style={{ fontSize: '2.5rem', color: 'white' }}>Nuestra Filosofía de Desarrollo</h2>
           </div>

           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', marginBottom: '80px' }}>
              <div style={{ background: '#0F1A2A', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px', padding: '32px' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(162, 217, 243, 0.1)', color: 'var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', marginBottom: '20px' }}>
                  📱
                </div>
                <h4 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '12px' }}>Mobile First, de verdad</h4>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                  El comercial no lleva un portátil en el coche. Todo en Traksal está diseñado para ser rápido, intuitivo y manejable con un solo dedo desde un smartphone o tablet.
                </p>
              </div>

              <div style={{ background: '#0F1A2A', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px', padding: '32px' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(194, 158, 94, 0.1)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', marginBottom: '20px' }}>
                  ⚡
                </div>
                <h4 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '12px' }}>Inteligencia Artificial Práctica</h4>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                  No usamos IA porque esté de moda. La usamos para resolver problemas reales: leer tickets de gastos arrugados, redactar evaluaciones de rendimiento y optimizar rutas.
                </p>
              </div>

              <div style={{ background: '#0F1A2A', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px', padding: '32px' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(235, 153, 255, 0.1)', color: '#EB99FF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', marginBottom: '20px' }}>
                  📈
                </div>
                <h4 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '12px' }}>Datos sin ruido</h4>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                  Los directores comerciales no tienen tiempo para bucear en Excel. Entregamos KPIs, coberturas y ratios de efectividad procesados, limpios y en tiempo real.
                </p>
              </div>
           </div>

           {/* CTA */}
           <div style={{ background: 'linear-gradient(135deg, rgba(162, 217, 243, 0.1) 0%, rgba(194, 158, 94, 0.1) 100%)', borderRadius: '24px', padding: '60px 20px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.1)' }}>
             <h2 style={{ color: 'white', fontSize: '2rem', marginBottom: '20px' }}>¿Listo para digitalizar tu equipo?</h2>
             <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px auto' }}>
               Únete a las empresas que ya han dejado atrás el papel y han tomado el control absoluto de sus ventas.
             </p>
             <Link href="/#contacto" className="btn btn-primary btn-lg">
               Habla con un experto en ventas
             </Link>
           </div>

        </div>
      </section>

      <Footer lang="es" />
    </main>
  );
}
