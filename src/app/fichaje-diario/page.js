'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function FichajeDiarioPage() {
  return (
    <main style={{ background: 'var(--primary)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      
      {/* Content */}
      <div className="container" style={{ flex: 1, display: 'flex', alignItems: 'center', padding: '120px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '80px', alignItems: 'center', width: '100%' }}>
          
          {/* Visual Side */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            <div style={{ 
              width: '280px', 
              height: '560px', 
              background: '#0B131E', 
              borderRadius: '40px', 
              border: '8px solid #1E314A',
              boxShadow: '0 50px 100px rgba(0,0,0,0.6), 0 0 0 1px rgba(162,217,243,0.1)',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative'
            }}>
              {/* Notch */}
              <div style={{ position: 'absolute', top: '0', width: '120px', height: '25px', background: '#1E314A', borderBottomLeftRadius: '15px', borderBottomRightRadius: '15px' }}></div>
              
              <div style={{ textAlign: 'center', width: '100%' }}>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '40px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Traksal App</div>
                
                {/* Giant Button */}
                <button style={{
                  width: '140px',
                  height: '140px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-dark) 100%)',
                  border: 'none',
                  boxShadow: '0 0 40px rgba(194, 158, 94, 0.4)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '1.2rem',
                  fontWeight: '800',
                  marginBottom: '60px',
                  transition: 'transform 0.2s'
                }} className="animate-pulse-glow">
                  FICHAR
                </button>

                {/* Geolocation Toggle Mock */}
                <div style={{ 
                  background: 'rgba(255,255,255,0.05)', 
                  padding: '16px', 
                  borderRadius: '16px', 
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <span style={{ fontSize: '0.85rem', color: 'white' }}>Geolocalización</span>
                  <div style={{ width: '44px', height: '24px', background: 'var(--secondary)', borderRadius: '12px', position: 'relative' }}>
                    <div style={{ width: '20px', height: '20px', background: 'white', borderRadius: '50%', position: 'absolute', right: '2px', top: '2px' }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background Glow */}
            <div style={{ 
              position: 'absolute', 
              top: '50%', left: '50%', 
              transform: 'translate(-50%, -50%)', 
              width: '400px', height: '400px', 
              background: 'radial-gradient(circle, rgba(162,217,243,0.1) 0%, transparent 70%)',
              zIndex: -1 
            }}></div>
          </div>

          {/* Text Side */}
          <div>
            <span className="section-label">Funcionalidad</span>
            <h1 style={{ marginBottom: '24px', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)' }}>
              Fichaje diario <br />
              <span className="gradient-text">en un solo clic.</span>
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '40px', maxWidth: '500px' }}>
              Hemos eliminado la complejidad. Tus empleados solo necesitan abrir la app y pulsar un botón. Sin formularios, sin esperas.
            </p>
            
            <div style={{ display: 'grid', gap: '24px' }}>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ width: '40px', height: '40px', background: 'rgba(194, 158, 94, 0.1)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)', flexShrink: 0 }}>
                  ✓
                </div>
                <div>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '4px', color: 'white' }}>Con o sin geolocalización</h3>
                  <p style={{ fontSize: '0.95rem' }}>Tú decides si quieres registrar la ubicación exacta del fichaje o mantenerlo privado. Configurable por el administrador.</p>
                </div>
              </div>
              
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ width: '40px', height: '40px', background: 'rgba(162, 217, 243, 0.1)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--secondary)', flexShrink: 0 }}>
                  ✓
                </div>
                <div>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '4px', color: 'white' }}>Disponibilidad inmediata</h3>
                  <p style={{ fontSize: '0.95rem' }}>El fichaje se sincroniza al instante con el panel de administración para que tengas el control en tiempo real.</p>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '56px' }}>
              <Link href="/#contacto" className="btn btn-primary btn-lg">
                Probar gratis ahora
              </Link>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}
