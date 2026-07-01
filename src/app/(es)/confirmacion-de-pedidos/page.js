import Head from 'next/head';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Software Confirmación de Pedidos en el Acto | Traksal CRM',
  description: 'Envía un resumen de compra automático a tus clientes y almacén al instante. Firma digital en la visita y elimina los errores de pedidos manuales.',
  openGraph: {
    title: 'Confirmación de Pedidos en el Acto | Traksal',
    description: 'Firma digital y correos automatizados en tus visitas comerciales.',
    url: 'https://traksal.com/confirmacion-de-pedidos',
    siteName: 'Traksal',
    locale: 'es_ES',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.traksal.com/confirmacion-de-pedidos',
    languages: { 'es': 'https://www.traksal.com/confirmacion-de-pedidos', 'en': 'https://www.traksal.com/en/order-confirmation' }
  },
};

export default function ConfirmacionPedidos() {
  return (
    <>
      <Navbar lang="es" />
      <main style={{ paddingTop: '100px', minHeight: '100vh', background: 'var(--bg-color)', color: 'var(--text-color)' }}>
        
        {/* HERO SECTION */}
        <section className="section" style={{ paddingBottom: '40px' }}>
          <div className="container" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <span className="section-label">Pedidos 100% Seguros</span>
            <h1 className="hero-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '24px', lineHeight: 1.1 }}>
              Cierra la venta y <span className="text-accent">confirma</span> antes de salir por la puerta.
            </h1>
            <p className="hero-subtitle" style={{ fontSize: '1.25rem', marginBottom: '40px', color: 'var(--text-secondary)' }}>
              Se acabaron las dudas de los clientes *"creo que pedí 5 en vez de 3"*. Traksal envía un correo automático con el resumen exacto al cliente y notifica al almacén en el mismo segundo.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
              <Link href="/#contacto" className="btn btn-primary" style={{ padding: '14px 32px', fontSize: '1.1rem' }}>Probar Traksal Gratis</Link>
            </div>
          </div>
        </section>

        {/* MOCKUP & FEATURES SECTION */}
        <section className="section" style={{ background: 'rgba(255,255,255,0.02)', borderTop: '1px solid var(--border)' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
              
              {/* CSS MOBILE MOCKUP */}
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{
                  width: '320px',
                  height: '650px',
                  background: '#0F172A',
                  borderRadius: '40px',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 10px #1E293B',
                  position: 'relative',
                  overflow: 'hidden',
                  fontFamily: 'system-ui, sans-serif'
                }}>
                  {/* Status Bar */}
                  <div style={{ height: '30px', background: '#0F172A', display: 'flex', justifyContent: 'space-between', padding: '0 20px', alignItems: 'center', color: 'white', fontSize: '0.75rem' }}>
                    <span>14:30</span>
                    <div style={{ display: 'flex', gap: '5px' }}>
                      <span>5G</span>
                      <span>🔋</span>
                    </div>
                  </div>
                  
                  {/* Email App Header */}
                  <div style={{ padding: '15px 20px', background: '#1E293B', borderBottom: '1px solid #334155' }}>
                    <div style={{ color: '#94A3B8', fontSize: '0.8rem', marginBottom: '5px' }}>De: pedidos@tuempresa.com</div>
                    <div style={{ color: 'white', fontSize: '1rem', fontWeight: 'bold' }}>Confirmación de su pedido #4092</div>
                  </div>

                  {/* Email Content */}
                  <div style={{ background: 'white', height: '100%', padding: '25px 20px', color: '#1E293B' }}>
                    <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                      <div style={{ width: '60px', height: '60px', background: '#4ADE80', borderRadius: '50%', margin: '0 auto 15px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '30px' }}>✓</div>
                      <h2 style={{ fontSize: '1.2rem', margin: 0, color: '#0F172A' }}>¡Gracias por tu compra!</h2>
                      <p style={{ fontSize: '0.85rem', color: '#64748B', marginTop: '5px' }}>Tu pedido ya está siendo preparado.</p>
                    </div>

                    <div style={{ background: '#F8FAFC', borderRadius: '12px', padding: '15px', marginBottom: '20px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #E2E8F0', paddingBottom: '8px', marginBottom: '8px', fontSize: '0.85rem', fontWeight: 'bold' }}>
                        <span>Artículos</span>
                        <span>Cant.</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: '#334155', marginBottom: '6px' }}>
                        <span>SilVer Original (Caja 5u)</span>
                        <span>12</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: '#334155' }}>
                        <span>PureLeaf Extra Fino</span>
                        <span>5</span>
                      </div>
                    </div>

                    <div style={{ border: '2px dashed #CBD5E1', borderRadius: '12px', padding: '15px', textAlign: 'center' }}>
                       <div style={{ fontSize: '0.75rem', color: '#64748B', textTransform: 'uppercase', marginBottom: '10px' }}>Conformidad del cliente</div>
                       {/* SVG Signature Mockup */}
                       <svg viewBox="0 0 200 60" style={{ width: '100%', height: '40px' }}>
                         <path d="M 20 40 Q 40 10, 60 30 T 100 20 T 130 45 T 160 15 T 180 35" fill="transparent" stroke="#0F172A" strokeWidth="3" />
                       </svg>
                       <div style={{ fontSize: '0.85rem', fontWeight: 'bold', marginTop: '10px' }}>Fdo. Cliente Autorizado</div>
                    </div>

                  </div>
                </div>
              </div>

              {/* FEATURES TEXT */}
              <div>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '30px', lineHeight: 1.2 }}>Profesionalidad que se nota. <span className="gradient-text">Errores que desaparecen.</span></h2>
                
                <div style={{ display: 'grid', gap: '30px' }}>
                  <div className="feature-item" style={{ display: 'flex', gap: '20px' }}>
                    <div style={{ fontSize: '2.5rem', flexShrink: 0 }}>📧</div>
                    <div>
                      <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Notificación Automática al Cliente</h3>
                      <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>Cuando el comercial cierra la visita, el cliente recibe un email con el resumen exacto de lo comprado y un mensaje de "Pedido en preparación". Permite que tu empresa transmita confianza y profesionalidad.</p>
                    </div>
                  </div>

                  <div className="feature-item" style={{ display: 'flex', gap: '20px' }}>
                    <div style={{ fontSize: '2.5rem', flexShrink: 0 }}>✍️</div>
                    <div>
                      <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Firma Digital Opcional</h3>
                      <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>Para mayor seguridad, la tablet permite que el cliente firme con el dedo su conformidad. La firma se incrusta en el PDF del pedido que recibe.</p>
                    </div>
                  </div>

                  <div className="feature-item" style={{ display: 'flex', gap: '20px' }}>
                    <div style={{ fontSize: '2.5rem', flexShrink: 0 }}>🏭</div>
                    <div>
                      <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Conexión Directa con Almacén</h3>
                      <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>Olvídate de acumular papeles para pasarlos a final del día. Mientras el comercial arranca el coche hacia el siguiente cliente, el almacén ya está preparando el pedido.</p>
                    </div>
                  </div>
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
