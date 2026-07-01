'use client';
import { useState, useEffect } from 'react';

export default function FichaVisitaPresentacion({ lang = 'es' }) {
  const t = {
    es: {
      title: 'VISITA',
      catalogBtn: 'Modo Venta (Catálogo)',
      date: 'Lunes, 25 De Mayo De 2026 · 02:17',
      tab1: 'Boleto Físico',
      tab2: 'Boleto Electrónico',
      ticketNum: 'Nº Boleto:',
      headers: ['Cód. SAP', 'Denominación', 'Cantidad', 'Formato'],
      search: 'Buscar producto...',
      notesLabel: 'Notas de la visita',
      notesPlaceholder: 'Observaciones generales de esta visita...',
      notesText: 'Visitar el próximo día y entregar catálogo actualizado.',
      modalTitle: 'CONFIRMACIÓN DE CIERRE',
      modalDesc: '¿Estás seguro de cerrar la visita?',
      modalWarn: 'Asegúrate de que el cliente ha confirmado el pedido electrónico.',
      cancel: 'Cancelar',
      close: 'Cerrar Visita',
      products: [
        { sap: '14760', name: 'Premium Blend 20g', qty: 10, format: 'EST' },
        { sap: '31000', name: 'Classic Blue (20u)', qty: 10, format: 'EST' },
        { sap: '31432', name: 'Gold Label (5u)', qty: 10, format: 'EST' }
      ]
    },
    en: {
      title: 'VISIT',
      catalogBtn: 'Sales Mode (Catalog)',
      date: 'Monday, May 25, 2026 · 02:17',
      tab1: 'Physical Ticket',
      tab2: 'Electronic Ticket',
      ticketNum: 'Ticket No:',
      headers: ['SAP Code', 'Description', 'Quantity', 'Format'],
      search: 'Search product...',
      notesLabel: 'Visit Notes',
      notesPlaceholder: 'General observations for this visit...',
      notesText: 'Visit next time and deliver updated catalog.',
      modalTitle: 'CLOSING CONFIRMATION',
      modalDesc: 'Are you sure you want to close the visit?',
      modalWarn: 'Make sure the client has confirmed the electronic order.',
      cancel: 'Cancel',
      close: 'Close Visit',
      products: [
        { sap: '14760', name: 'Premium Blend 20g', qty: 10, format: 'BOX' },
        { sap: '31000', name: 'Classic Blue (20u)', qty: 10, format: 'BOX' },
        { sap: '31432', name: 'Gold Label (5u)', qty: 10, format: 'BOX' }
      ]
    }
  }[lang];

  // Animation phases
  // 0: Initial
  // 1: Dropdown open (searching)
  // 2: Products added to table
  // 3: Typing notes
  // 4: Modal appears
  // 5: Closed success
  const [phase, setPhase] = useState(0);
  const [typedNotes, setTypedNotes] = useState('');

  useEffect(() => {
    let timers = [];
    
    const runCycle = () => {
      setPhase(0);
      setTypedNotes('');
      timers.push(setTimeout(() => setPhase(1), 1500)); // Open dropdown
      timers.push(setTimeout(() => setPhase(2), 3000)); // Add products
      
      timers.push(setTimeout(() => {
        setPhase(3);
        // Typewriter effect for notes
        let currentText = '';
        const fullText = t.notesText;
        for (let i = 0; i < fullText.length; i++) {
          timers.push(setTimeout(() => {
            currentText += fullText[i];
            setTypedNotes(currentText);
          }, i * 40));
        }
      }, 4500)); 
      
      timers.push(setTimeout(() => setPhase(4), 8500)); // Show modal
      timers.push(setTimeout(() => setPhase(5), 10000)); // Click close
      timers.push(setTimeout(() => runCycle(), 13000)); // Restart
    };

    runCycle();

    return () => timers.forEach(clearTimeout);
  }, [t.notesText]);

  return (
    <div className="demo-wrapper" style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', minHeight: '440px' }}>
      
      {/* Glow */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        width: '600px', height: '400px', background: 'radial-gradient(circle, rgba(162, 217, 243, 0.1) 0%, transparent 70%)',
        zIndex: 0, pointerEvents: 'none'
      }} />

      {/* iPad Frame (Landscape) */}
      <div style={{
        position: 'relative', width: '600px', height: '420px', borderRadius: '24px',
        border: '12px solid #111', background: '#0F1A2A',
        boxShadow: '0 40px 80px rgba(0,0,0,0.6), inset 0 0 0 1px rgba(255,255,255,0.1)', overflow: 'hidden', zIndex: 1,
        display: 'flex', flexDirection: 'column',
        fontFamily: 'system-ui, -apple-system, sans-serif'
      }}>
        {/* iPad Camera Hole */}
        <div style={{ position: 'absolute', top: '50%', left: '-6px', transform: 'translateY(-50%)', width: '6px', height: '6px', borderRadius: '50%', background: '#222', zIndex: 20 }} />

        {/* Content Area */}
        <div style={{ flex: 1, position: 'relative', padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          
          {/* Top Bar */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h1 style={{ fontSize: '1.4rem', fontWeight: 800, margin: 0, color: 'white', letterSpacing: '1px' }}>{t.title}</h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ background: 'rgba(162, 217, 243, 0.15)', border: '1px solid rgba(162, 217, 243, 0.3)', color: '#A2D9F3', padding: '6px 16px', borderRadius: '8px', fontSize: '0.8rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px', boxShadow: '0 0 15px rgba(162, 217, 243, 0.2)' }}>
                📱 {t.catalogBtn}
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{t.date}</div>
            </div>
          </div>

          {/* Client Card */}
          <div style={{ background: '#162539', borderRadius: '12px', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>
              🛍️
            </div>
            <div>
              <div style={{ fontWeight: 700, color: 'white', fontSize: '1rem', marginBottom: '2px' }}>Estanco-002</div>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>SAP: 40111 &nbsp;&nbsp; Saca: D</div>
            </div>
            <div style={{ marginLeft: 'auto', color: 'var(--text-muted)' }}>▼</div>
          </div>

          {/* Ticket Section */}
          <div style={{ background: '#162539', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
            {/* Tabs */}
            <div style={{ display: 'flex', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ flex: 1, textAlign: 'center', padding: '12px', color: 'var(--text-secondary)', fontSize: '0.85rem', fontWeight: 600 }}>
                {t.tab1}
              </div>
              <div style={{ flex: 1, textAlign: 'center', padding: '12px', color: '#A2D9F3', fontSize: '0.85rem', fontWeight: 600, borderBottom: '2px solid #A2D9F3', background: 'rgba(162, 217, 243, 0.05)' }}>
                {t.tab2}
              </div>
            </div>

            <div style={{ padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {/* Ticket No */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: 'white', fontWeight: 600 }}>
                {t.ticketNum}
                <div style={{ width: '100px', height: '24px', background: 'rgba(0,0,0,0.2)', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.05)' }} />
              </div>

              {/* Table Headers */}
              <div style={{ display: 'flex', fontSize: '0.7rem', color: 'var(--text-secondary)', padding: '0 8px' }}>
                <div style={{ flex: 1 }}>{t.headers[0]}</div>
                <div style={{ flex: 2 }}>{t.headers[1]}</div>
                <div style={{ flex: 1, textAlign: 'center' }}>{t.headers[2]}</div>
                <div style={{ flex: 0.5, textAlign: 'center' }}>{t.headers[3]}</div>
              </div>

              {/* Input Row */}
              {phase < 2 ? (
                <div style={{ position: 'relative' }}>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <div style={{ flex: 1, background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '4px', padding: '6px 8px', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                      Buscar SAP...
                    </div>
                    <div style={{ flex: 2, background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '4px', padding: '6px 8px', fontSize: '0.75rem', color: phase === 1 ? 'white' : 'var(--text-muted)' }}>
                      {phase === 1 ? 'pre' : t.search}
                      {phase === 1 && <span style={{ width: '2px', height: '10px', background: 'white', display: 'inline-block', animation: 'blink 1s infinite', marginLeft: '2px' }} />}
                    </div>
                    <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
                      <div style={{ width: '24px', height: '24px', background: 'rgba(0,0,0,0.2)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>-</div>
                      <div style={{ width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)', fontSize: '0.8rem' }}>+</div>
                    </div>
                    <div style={{ flex: 0.5, background: 'rgba(0,0,0,0.2)', borderRadius: '4px' }} />
                  </div>
                  
                  {/* Dropdown */}
                  {phase === 1 && (
                    <div style={{ position: 'absolute', top: '100%', left: '33%', width: '60%', background: '#1C2D44', borderRadius: '6px', border: '1px solid rgba(162,217,243,0.2)', marginTop: '4px', zIndex: 10, boxShadow: '0 10px 20px rgba(0,0,0,0.5)', overflow: 'hidden' }}>
                      <div style={{ padding: '8px 12px', fontSize: '0.75rem', color: 'white', borderBottom: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.05)' }}>
                        <span style={{ fontWeight: 700 }}>14760</span> {t.products[0].name}
                      </div>
                      <div style={{ padding: '8px 12px', fontSize: '0.75rem', color: 'var(--text-secondary)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <span style={{ fontWeight: 700 }}>31000</span> {t.products[1].name}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                /* Selected Products Rows */
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {t.products.map((p, i) => (
                    <div key={i} style={{ display: 'flex', gap: '8px', alignItems: 'center', animation: `fade-up 0.3s ease forwards ${i * 0.1}s`, opacity: 0 }}>
                      <div style={{ color: '#FF5F56', fontSize: '0.8rem', width: '16px', textAlign: 'center' }}>⊗</div>
                      <div style={{ flex: 1, background: 'rgba(0,0,0,0.2)', borderRadius: '4px', padding: '6px 8px', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{p.sap}</div>
                      <div style={{ flex: 2, background: 'rgba(0,0,0,0.2)', borderRadius: '4px', padding: '6px 8px', fontSize: '0.75rem', color: 'white' }}>{p.name}</div>
                      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                        <div style={{ width: '20px', height: '20px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)' }}>-</div>
                        <div style={{ fontSize: '0.75rem', color: 'white', width: '20px', textAlign: 'center' }}>{p.qty}</div>
                        <div style={{ width: '20px', height: '20px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>+</div>
                      </div>
                      <div style={{ flex: 0.5, background: 'rgba(0,0,0,0.2)', borderRadius: '4px', padding: '6px 0', fontSize: '0.7rem', color: 'var(--text-secondary)', textAlign: 'center' }}>{p.format}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Notes Section */}
          <div style={{ background: '#162539', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', padding: '12px', height: '90px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '8px' }}>
              📄 {t.notesLabel}
            </div>
            <div style={{ flex: 1, background: 'rgba(0,0,0,0.2)', borderRadius: '6px', padding: '8px', fontSize: '0.75rem', color: phase >= 3 ? 'white' : 'var(--text-muted)', border: '1px solid rgba(255,255,255,0.02)' }}>
              {phase >= 3 ? typedNotes : t.notesPlaceholder}
              {phase === 3 && <span style={{ width: '2px', height: '10px', background: 'white', display: 'inline-block', animation: 'blink 1s infinite' }} />}
            </div>
          </div>

        </div>

        {/* Modal Overlay */}
        <div style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
          background: 'rgba(15, 26, 42, 0.7)', backdropFilter: 'blur(4px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          opacity: phase >= 4 && phase < 5 ? 1 : 0,
          visibility: phase >= 4 && phase < 5 ? 'visible' : 'hidden',
          transition: 'opacity 0.3s ease',
          zIndex: 50
        }}>
          <div style={{
            background: '#162539', width: '380px', borderRadius: '16px', padding: '24px',
            border: '1px solid rgba(255,255,255,0.1)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
            transform: phase >= 4 && phase < 5 ? 'scale(1)' : 'scale(0.95)',
            transition: 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
          }}>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#0F1A2A', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#A2D9F3', fontSize: '1.5rem', flexShrink: 0 }}>
                ⓘ
              </div>
              <div>
                <h3 style={{ color: 'white', fontSize: '1.1rem', margin: '0 0 8px 0', letterSpacing: '0.5px' }}>{t.modalTitle}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: '0 0 16px 0' }}>{t.modalDesc}</p>
                
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center', color: '#A2D9F3', fontSize: '0.85rem', fontWeight: 600, marginBottom: '24px' }}>
                  💻 {t.modalWarn}
                </div>

                <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
                  <button style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: 'var(--text-secondary)', padding: '10px 20px', borderRadius: '8px', fontSize: '0.85rem', fontWeight: 600 }}>
                    {t.cancel}
                  </button>
                  <button style={{ background: 'var(--accent)', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '8px', fontSize: '0.85rem', fontWeight: 700 }}>
                    {t.close}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Success State Overlay */}
        <div style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
          background: '#0F1A2A',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          opacity: phase === 5 ? 1 : 0,
          visibility: phase === 5 ? 'visible' : 'hidden',
          transition: 'opacity 0.4s ease',
          zIndex: 60
        }}>
          <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(39, 174, 96, 0.2)', color: '#27ae60', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '32px', marginBottom: '16px' }}>
            ✓
          </div>
          <h3 style={{ color: 'white', fontSize: '1.2rem', margin: 0 }}>Visita Cerrada</h3>
        </div>

      </div>
    </div>
  );
}
