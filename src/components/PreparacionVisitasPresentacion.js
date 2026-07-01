'use client';
import { useState, useEffect } from 'react';

const delay = (ms) => new Promise(res => setTimeout(res, ms));

export default function PreparacionVisitasPresentacion({ lang = 'es' }) {
  const [expandedClient, setExpandedClient] = useState(null);
  const [showHistoryModal, setShowHistoryModal] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [cursorActive, setCursorActive] = useState(false);

  useEffect(() => {
    let isRunning = true;
    
    const runAnimation = async () => {
      while (isRunning) {
        // Reset state
        setExpandedClient(null);
        setShowHistoryModal(false);
        setCursorPos({ x: 300, y: 200 }); // Center of iPad roughly
        await delay(1000);
        if (!isRunning) break;

        // 1. Move to first client (Pending)
        setCursorPos({ x: 80, y: 140 }); // Click row
        await delay(800);
        
        setCursorActive(true);
        await delay(200);
        setCursorActive(false);
        setExpandedClient(1); // Open Objetivos
        await delay(3000); // Read objetivos
        if (!isRunning) break;

        // Close first client
        setCursorActive(true);
        await delay(200);
        setCursorActive(false);
        setExpandedClient(null);
        await delay(1000);
        if (!isRunning) break;

        // 2. Move to second client (Realized)
        setCursorPos({ x: 80, y: 195 });
        await delay(800);

        setCursorActive(true);
        await delay(200);
        setCursorActive(false);
        setExpandedClient(2); // Open Pedido Físico
        await delay(3000);
        if (!isRunning) break;

        // Close second client
        setCursorActive(true);
        await delay(200);
        setCursorActive(false);
        setExpandedClient(null);
        await delay(1000);
        if (!isRunning) break;

        // 3. Move to History button on second client row
        setCursorPos({ x: 535, y: 195 });
        await delay(800);

        setCursorActive(true);
        await delay(200);
        setCursorActive(false);
        setShowHistoryModal(true);
        await delay(3500); // Read history
        if (!isRunning) break;

        // Close modal
        setCursorPos({ x: 410, y: 95 }); // Close button in modal (x=410, right edge of modal inside 600)
        await delay(600);

        setCursorActive(true);
        await delay(200);
        setCursorActive(false);
        setShowHistoryModal(false);

        await delay(2000);
      }
    };

    runAnimation();
    return () => { isRunning = false; };
  }, []);

  const clients = [
    { id: 1, name: 'Estanco El Centro', address: 'Calle Mayor, 12', cp: '28012', province: 'MADRID', status: 'pending' },
    { id: 2, name: 'Kiosco La Plaza', address: 'Plaza España, 4', cp: '46002', province: 'VALENCIA', status: 'realizada' },
    { id: 3, name: 'Papelería Norte', address: 'Av. Libertad, 89', cp: '08015', province: 'BARCELONA', status: 'pending' },
  ];

  return (
    <div style={{
      width: '100%',
      maxWidth: '650px',
      margin: '0 auto',
      position: 'relative'
    }}>

      {/* iPad Frame (Landscape) */}
      <div style={{
        position: 'relative', width: '600px', height: '420px', borderRadius: '24px',
        border: '12px solid #111', background: '#0F1A2A',
        boxShadow: '0 40px 80px rgba(0,0,0,0.6), inset 0 0 0 1px rgba(255,255,255,0.1)', overflow: 'hidden', zIndex: 1,
        margin: '0 auto'
      }}>
        
        {/* Fake Cursor ping */}
        <div style={{
          position: 'absolute', top: 0, left: 0,
          transform: `translate(${cursorPos.x}px, ${cursorPos.y}px)`,
          transition: 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)',
          zIndex: 9999, pointerEvents: 'none'
        }}>
          {cursorActive && (
            <div style={{
              position: 'absolute', top: -10, left: -10, width: 20, height: 20,
              background: 'rgba(59, 130, 246, 0.4)', borderRadius: '50%',
              animation: 'ping 0.5s ease-out'
            }} />
          )}
        </div>

        {/* Top Header */}
        <div style={{
          padding: '16px 20px', background: '#131e30', borderBottom: '1px solid rgba(255,255,255,0.05)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '0.85rem', color: '#cbd5e1' }}>Filtrar por fecha:</span>
            <div style={{
              background: 'rgba(255,255,255,0.05)', padding: '6px 12px', borderRadius: '4px',
              color: '#fff', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '8px'
            }}>
              📅 30/06/2026
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Total visitas en esta fecha: <strong style={{ color: 'white', fontSize: '1rem'}}>8</strong></span>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button style={{ width: 32, height: 32, borderRadius: 6, background: 'none', border: '1px solid rgba(255,255,255,0.2)', color: 'white' }}>📍</button>
              <button style={{ width: 32, height: 32, borderRadius: 6, background: 'none', border: '1px solid rgba(255,255,255,0.2)', color: 'white' }}>↗</button>
            </div>
          </div>
        </div>

        {/* Table Header */}
        <div style={{
          display: 'grid', gridTemplateColumns: '40px 140px 180px 60px 80px 1fr',
          padding: '12px 20px', fontSize: '0.7rem', color: '#94a3b8', borderBottom: '1px solid rgba(255,255,255,0.05)',
          alignItems: 'center', fontWeight: 'bold'
        }}>
          <div>⇅</div>
          <div>ESTANCO</div>
          <div>DIRECCIÓN</div>
          <div>C.P.</div>
          <div>PROVINCIA</div>
          <div style={{ textAlign: 'right' }}>ACCIÓN</div>
        </div>

        {/* Clients List */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {clients.map((client) => (
            <div key={client.id}>
              {/* Row */}
              <div style={{
                display: 'grid', gridTemplateColumns: '40px 140px 180px 60px 80px 1fr',
                padding: '16px 20px', borderBottom: '1px solid rgba(255,255,255,0.05)',
                alignItems: 'center', fontSize: '0.8rem', background: expandedClient === client.id ? 'rgba(255,255,255,0.02)' : 'transparent',
                transition: 'all 0.3s'
              }}>
                <div style={{ color: '#475569' }}>⠿</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 'bold', color: 'white' }}>
                  <span style={{ fontSize: '0.6rem', color: '#94a3b8' }}>{expandedClient === client.id ? 'v' : '>'}</span>
                  {client.name}
                </div>
                <div style={{ color: '#cbd5e1' }}>{client.address}</div>
                <div style={{ color: '#cbd5e1' }}>{client.cp}</div>
                <div style={{ color: '#cbd5e1' }}>{client.province}</div>
                <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
                  {client.status === 'realizada' ? (
                    <span style={{ color: '#22c55e', fontSize: '1rem' }}>✓</span>
                  ) : (
                    <span style={{ color: '#f59e0b', fontSize: '1rem' }}>⏳</span>
                  )}
                  {client.status === 'realizada' && (
                    <span style={{ color: '#3b82f6', fontSize: '0.9rem' }}>📊</span>
                  )}
                </div>
              </div>

              {/* Expanded Area */}
              {expandedClient === client.id && (
                <div style={{ background: '#111827', padding: '16px 20px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  
                  {/* Objetivos View (Pending Client) */}
                  {client.status === 'pending' && (
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', color: '#94a3b8', fontSize: '0.7rem', paddingBottom: '8px', borderBottom: '1px solid rgba(255,255,255,0.05)', fontWeight: 'bold' }}>
                        <div>FAMILIA DE PRODUCTO / DISTRIBUCIÓN</div>
                        <div>% DIST.</div>
                      </div>
                      <div style={{ marginTop: '8px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', color: 'white', fontSize: '0.8rem', padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.02)' }}>
                          <div style={{ fontWeight: 'bold' }}>v Premium Cigarros <span style={{ background: 'rgba(255,255,255,0.1)', padding: '2px 6px', borderRadius: 4, fontSize: '0.6rem', marginLeft: 8 }}>Ciclo</span></div>
                          <div></div>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', color: '#cbd5e1', fontSize: '0.75rem', padding: '6px 0 6px 16px', borderBottom: '1px solid rgba(255,255,255,0.02)' }}>
                          <div>↳ 20551 - Premium Habana (5u)</div>
                          <div>4%</div>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', color: '#cbd5e1', fontSize: '0.75rem', padding: '6px 0 6px 16px' }}>
                          <div>↳ 20552 - Premium Clásico (5u)</div>
                          <div>2%</div>
                        </div>
                        
                        <div style={{ display: 'flex', justifyContent: 'space-between', color: 'white', fontSize: '0.8rem', padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.02)', marginTop: 8 }}>
                          <div style={{ fontWeight: 'bold' }}>v Gama Standard <span style={{ background: 'rgba(255,255,255,0.1)', padding: '2px 6px', borderRadius: 4, fontSize: '0.6rem', marginLeft: 8 }}>Ciclo</span></div>
                          <div></div>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', color: '#cbd5e1', fontSize: '0.75rem', padding: '6px 0 6px 16px' }}>
                          <div>↳ 10222 - Standard Red (20u)</div>
                          <div>1%</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Pedido Realizado View (Realizada Client) */}
                  {client.status === 'realizada' && (
                    <div>
                       <div style={{ display: 'flex', justifyContent: 'space-between', color: 'white', fontSize: '0.8rem', paddingBottom: '12px', borderBottom: '1px dashed rgba(255,255,255,0.1)', fontWeight: 'bold' }}>
                        <div>PEDIDO FÍSICO - Nº D5000097</div>
                        <div style={{ fontSize: '0.7rem', fontWeight: 'normal' }}>30/6/26, 12:45</div>
                      </div>
                      <div style={{ marginTop: '8px' }}>
                         <div style={{ display: 'flex', justifyContent: 'space-between', color: '#cbd5e1', fontSize: '0.75rem', padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.02)' }}>
                          <div>↳ Premium Habana (5u)</div>
                          <div style={{ fontWeight: 'bold' }}>20</div>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', color: '#cbd5e1', fontSize: '0.75rem', padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.02)' }}>
                          <div>↳ Gama Standard Red (20u)</div>
                          <div style={{ fontWeight: 'bold' }}>10</div>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', color: '#cbd5e1', fontSize: '0.75rem', padding: '8px 0' }}>
                          <div>↳ Gama Standard Blue (20u)</div>
                          <div style={{ fontWeight: 'bold' }}>5</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* History Modal Overlay */}
        {showHistoryModal && (
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
            background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 50
          }}>
            <div style={{
              width: '450px', background: '#131e30', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
            }}>
              {/* Modal Header */}
              <div style={{ padding: '20px', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'white', fontWeight: 'bold', fontSize: '0.9rem' }}>
                  <span style={{ background: 'rgba(255,255,255,0.1)', padding: '6px 8px', borderRadius: '8px' }}>📊</span>
                  HISTÓRICO DE VENTAS
                </div>
                <button style={{ background: 'none', border: 'none', color: '#94a3b8', fontSize: '1.2rem', cursor: 'pointer' }}>×</button>
              </div>
              
              {/* Modal Table */}
              <div style={{ padding: '20px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 60px 60px 60px', paddingBottom: '12px', borderBottom: '1px solid rgba(255,255,255,0.05)', fontSize: '0.7rem', color: '#fff', fontWeight: 'bold', textAlign: 'center' }}>
                  <div style={{ textAlign: 'left' }}>FABRICANTE / PRODUCTO</div>
                  <div>MARZO '26</div>
                  <div>ABRIL '26</div>
                  <div>MAYO '26</div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 60px 60px 60px', padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,0.02)', fontSize: '0.75rem', color: '#cbd5e1', textAlign: 'center' }}>
                   <div style={{ textAlign: 'left', fontWeight: 'bold', color: 'white' }}>{'>'} Premium Brands Inc</div>
                   <div style={{ color: '#475569' }}>-</div>
                   <div style={{ color: '#475569' }}>-</div>
                   <div style={{ fontWeight: 'bold', color: 'white' }}>20</div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 60px 60px 60px', padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,0.02)', fontSize: '0.75rem', color: '#cbd5e1', textAlign: 'center' }}>
                   <div style={{ textAlign: 'left', fontWeight: 'bold', color: 'white' }}>{'>'} Standard Tobacco</div>
                   <div style={{ color: '#475569' }}>-</div>
                   <div style={{ color: '#475569' }}>-</div>
                   <div style={{ fontWeight: 'bold', color: 'white' }}>40</div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 60px 60px 60px', padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,0.02)', fontSize: '0.75rem', color: '#cbd5e1', textAlign: 'center' }}>
                   <div style={{ textAlign: 'left', fontWeight: 'bold', color: 'white' }}>{'>'} Vapers Plus</div>
                   <div style={{ color: '#475569' }}>-</div>
                   <div style={{ color: '#475569' }}>-</div>
                   <div style={{ color: '#475569' }}>-</div>
                </div>
              </div>
            </div>
          </div>
        )}

        <style dangerouslySetInnerHTML={{__html: `
          @keyframes ping {
            0% { transform: scale(0.5); opacity: 1; }
            100% { transform: scale(2); opacity: 0; }
          }
        `}} />
      </div>
    </div>
  );
}
