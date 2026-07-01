import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Software de Gestión de Productos y Catálogo | Traksal CRM',
  description: 'Controla el inventario, actualiza precios en tiempo real y gestiona las familias de productos de tu catálogo comercial.',
  openGraph: {
    title: 'Gestión de Productos y Catálogo | Traksal',
    description: 'Controla el inventario, actualiza precios en tiempo real y gestiona las familias de productos de tu catálogo comercial.',
    url: 'https://traksal.com/gestion-de-productos',
    siteName: 'Traksal',
    locale: 'es_ES',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.traksal.com/gestion-de-productos',
    languages: { 'es': 'https://www.traksal.com/gestion-de-productos', 'en': 'https://www.traksal.com/en/product-management' }
  },
};

export default function GestionProductos() {
  const products = [
    { sap: '14760', desc: 'SilVer Original (5u)', family: 'TABACO', stock: 15, pvp: '4.50 €', active: true, lowStock: true },
    { sap: '14757', desc: 'SilVer Menthol (5u)', family: 'TABACO', stock: 1250, pvp: '4.50 €', active: true, lowStock: false },
    { sap: '30101', desc: 'YumBites Fresa 1kg', family: 'GOLOSINAS', stock: 10, pvp: '1.20 €', active: true, lowStock: true },
    { sap: '30104', desc: 'YumBites Surtido 1kg', family: 'GOLOSINAS', stock: 8500, pvp: '1.20 €', active: true, lowStock: false },
    { sap: '40201', desc: 'PureLeaf Fino (Caja 25)', family: 'FUMADOR', stock: 5400, pvp: '0.80 €', active: true, lowStock: false },
    { sap: '50111', desc: 'Fizzy Cola Cristal', family: 'BEBIDAS', stock: 850, pvp: '2.00 €', active: false, lowStock: false },
    { sap: '80501', desc: 'DermaGlow Facial 50ml', family: 'FARMACIA', stock: 1400, pvp: '15.50 €', active: true, lowStock: false },
  ];

  return (
    <>
      <Navbar lang="es" />
      <main style={{ paddingTop: '100px', minHeight: '100vh', background: 'var(--bg-color)', color: 'var(--text-color)' }}>
        
        {/* HERO SECTION */}
        <section className="section" style={{ paddingBottom: '40px' }}>
          <div className="container" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <span className="section-label">Backoffice Potente</span>
            <h1 className="hero-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '24px', lineHeight: 1.1 }}>
              Control total de tu catálogo en <span className="text-accent">tiempo real</span>.
            </h1>
            <p className="hero-subtitle" style={{ fontSize: '1.25rem', marginBottom: '40px', color: 'var(--text-secondary)' }}>
              El caos de tener listas de precios en Excel desactualizadas es historia. Modifica precios, oculta productos y controla el stock para que tus comerciales siempre vendan sobre seguro.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
              <Link href="/#contacto" className="btn btn-primary" style={{ padding: '14px 32px', fontSize: '1.1rem' }}>Probar Traksal Gratis</Link>
            </div>
          </div>
        </section>

        {/* MOCKUP SECTION */}
        <section className="section" style={{ paddingBottom: '0' }}>
          <div className="container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
            
            {/* CSS TABLE MOCKUP */}
            <div style={{ background: '#0F172A', borderRadius: '16px', padding: '24px', boxShadow: '0 30px 60px rgba(0,0,0,0.4)', border: '1px solid #1E293B', overflowX: 'auto' }}>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '16px' }}>
                <div style={{ color: '#94A3B8', fontSize: '0.9rem' }}>Gestionando 177 productos.</div>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <div style={{ background: 'var(--accent)', color: 'white', padding: '8px 16px', borderRadius: '8px', fontSize: '0.9rem', fontWeight: 'bold', cursor: 'pointer' }}>+ Nuevo Producto</div>
                  <div style={{ background: '#1E293B', color: 'white', padding: '8px 16px', borderRadius: '8px', fontSize: '0.9rem', border: '1px solid #334155', cursor: 'pointer' }}>↓ Exportar</div>
                  <div style={{ background: '#1E293B', color: 'white', padding: '8px 16px', borderRadius: '8px', fontSize: '0.9rem', border: '1px solid #334155', cursor: 'pointer' }}>↑ Importar</div>
                  <div style={{ background: '#1E293B', color: 'white', padding: '8px 16px', borderRadius: '8px', fontSize: '0.9rem', border: '1px solid #334155', cursor: 'pointer' }}>⚙ Columnas</div>
                </div>
              </div>

              <div style={{ minWidth: '900px' }}>
                {/* Header */}
                <div style={{ display: 'grid', gridTemplateColumns: '60px 100px 2fr 1fr 100px 80px 80px 80px', gap: '16px', color: '#F8FAFC', fontSize: '0.8rem', fontWeight: 'bold', borderBottom: '2px solid #1E293B', paddingBottom: '12px', marginBottom: '12px' }}>
                  <div>FOTO</div>
                  <div>CÓDIGO SAP</div>
                  <div>DESCRIPCIÓN ↑</div>
                  <div>FAMILIA</div>
                  <div style={{ textAlign: 'right' }}>STOCK</div>
                  <div style={{ textAlign: 'right' }}>PVP</div>
                  <div style={{ textAlign: 'center' }}>ESTADO</div>
                  <div style={{ textAlign: 'center' }}>ACCIONES</div>
                </div>

                {/* Rows */}
                {products.map((p, idx) => (
                  <div key={p.sap} style={{ display: 'grid', gridTemplateColumns: '60px 100px 2fr 1fr 100px 80px 80px 80px', gap: '16px', alignItems: 'center', color: '#CBD5E1', fontSize: '0.9rem', padding: '12px 0', borderBottom: '1px solid #1E293B' }}>
                    <div style={{ width: '36px', height: '36px', background: '#1E293B', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', color: '#64748B' }}>📷</div>
                    <div style={{ fontFamily: 'monospace' }}>{p.sap}</div>
                    <div style={{ color: '#A2D9F3', fontWeight: '500' }}>{p.desc}</div>
                    <div style={{ fontSize: '0.8rem' }}>{p.family}</div>
                    <div style={{ textAlign: 'right', fontWeight: 'bold', color: p.lowStock ? '#EF4444' : '#4ADE80' }}>{p.stock}</div>
                    <div style={{ textAlign: 'right' }}>{p.pvp}</div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                      {/* CSS Toggle Switch */}
                      <div style={{ width: '40px', height: '22px', background: p.active ? 'var(--accent)' : '#334155', borderRadius: '20px', position: 'relative', cursor: 'pointer', transition: 'background 0.3s' }}>
                        <div style={{ width: '16px', height: '16px', background: 'white', borderRadius: '50%', position: 'absolute', top: '3px', left: p.active ? '21px' : '3px', transition: 'left 0.3s' }}></div>
                      </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                      <div style={{ width: '32px', height: '32px', border: '1px solid #334155', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#94A3B8' }}>✏️</div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* FEATURES TEXT */}
        <section className="section">
          <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
              
              <div className="feature-item" style={{ display: 'flex', gap: '20px' }}>
                <div style={{ fontSize: '2.5rem', flexShrink: 0 }}>🔄</div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Sincronización Inmediata</h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>Modifica un precio o descripción en el panel y automáticamente se actualizará en la tablet de todos los comerciales. Olvídate de tarifas obsoletas.</p>
                </div>
              </div>

              <div className="feature-item" style={{ display: 'flex', gap: '20px' }}>
                <div style={{ fontSize: '2.5rem', flexShrink: 0 }}>📦</div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Control de Stock y Alertas</h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>Si el stock baja al mínimo (ej. 10 unidades), se alerta en tiempo real. Evita vender lo que no puedes entregar y mejora la imagen con el cliente.</p>
                </div>
              </div>

              <div className="feature-item" style={{ display: 'flex', gap: '20px' }}>
                <div style={{ fontSize: '2.5rem', flexShrink: 0 }}>👁️</div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Activar/Desactivar Productos</h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>Oculta productos del catálogo comercial con un clic en lugar de borrarlos. Así mantienes intacto todo tu histórico de pedidos sin perder datos vitales.</p>
                </div>
              </div>

              <div className="feature-item" style={{ display: 'flex', gap: '20px' }}>
                <div style={{ fontSize: '2.5rem', flexShrink: 0 }}>📥</div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Importación Excel Masiva</h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>Carga todo tu inventario de golpe mediante Excel o añade referencias nuevas una a una para casos puntuales. Flexibilidad total.</p>
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
