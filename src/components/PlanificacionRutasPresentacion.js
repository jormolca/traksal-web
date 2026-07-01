'use client';
import { useState, useEffect } from 'react';

const delay = (ms) => new Promise(res => setTimeout(res, ms));

export default function PlanificacionRutasPresentacion({ lang = 'es' }) {
  const [isOptimized, setIsOptimized] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showGoogleMaps, setShowGoogleMaps] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  
  const [cursorPos, setCursorPos] = useState({ x: 500, y: 400 });
  const [cursorActive, setCursorActive] = useState(false);

  useEffect(() => {
    let isRunning = true;
    
    const runAnimation = async () => {
      while (isRunning) {
        setIsOptimized(false);
        setShowModal(false);
        setShowGoogleMaps(false);
        setIsDragging(null);
        setCursorPos({ x: 225, y: 350 });
        await delay(1000);
        if (!isRunning) break;

        setCursorPos({ x: 30, y: 240 });
        await delay(600);
        setIsDragging(2);
        await delay(1000);
        setIsDragging(null);
        if (!isRunning) break;

        setCursorPos({ x: 380, y: 135 });
        await delay(800);
        if (!isRunning) break;

        setCursorActive(true);
        await delay(200);
        setCursorActive(false);
        setIsOptimized(true);
        setTimeout(() => isRunning && setShowModal(true), 1500);
        await delay(2500);
        if (!isRunning) break;

        setCursorPos({ x: 340, y: 290 });
        await delay(800);
        
        setCursorActive(true);
        await delay(200);
        setCursorActive(false);
        setShowModal(false);
        await delay(1000);
        if (!isRunning) break;

        setCursorPos({ x: 420, y: 135 });
        await delay(600);

        setCursorActive(true);
        await delay(200);
        setCursorActive(false);
        setShowGoogleMaps(true);
        
        await delay(3000);
      }
    };

    runAnimation();
    return () => { isRunning = false; };
  }, []);

  // Fake data for the table
  const initialClients = [
    { id: 1, name: 'INNOVA SYSTEMS', address: 'Calle de Alcalá, 112', cp: '28009', city: 'MADRID' },
    { id: 2, name: 'TECH SOLUTIONS S.L.', address: 'Calle Gran Vía, 45', cp: '28013', city: 'MADRID' },
    { id: 3, name: 'GRUPO FINANCIERO', address: 'Calle Princesa, 21', cp: '28008', city: 'MADRID' },
    { id: 4, name: 'GLOBAL TRADE CORP', address: 'Paseo de la Castellana, 89', cp: '28046', city: 'MADRID' },
  ];

  const optimizedClients = [
    { id: 2, name: 'TECH SOLUTIONS S.L.', address: 'Calle Gran Vía, 45', cp: '28013', city: 'MADRID' },
    { id: 3, name: 'GRUPO FINANCIERO', address: 'Calle Princesa, 21', cp: '28008', city: 'MADRID' },
    { id: 1, name: 'INNOVA SYSTEMS', address: 'Calle de Alcalá, 112', cp: '28009', city: 'MADRID' },
    { id: 4, name: 'GLOBAL TRADE CORP', address: 'Paseo de la Castellana, 89', cp: '28046', city: 'MADRID' },
  ];

  const clients = isOptimized ? optimizedClients : initialClients;

  const handleOptimize = () => {
    setIsOptimized(true);
    setShowModal(true);
  };

  const handleNavigate = () => {
    setShowGoogleMaps(true);
  };

  const t = {
    es: {
      title: 'VISITAS PROGRAMADAS',
      subtitle: 'Revisa tu agenda diaria y abre la ficha de cada cliente.',
      filter: 'Filtrar por fecha:',
      date: '29/06/2026',
      total: 'Total visitas en esta fecha:',
      col1: 'CLIENTE',
      col2: 'DIRECCIÓN',
      col3: 'C.P.',
      col4: 'PROVINCIA',
      col5: 'ACCIÓN',
      modalTitle: 'RUTA OPTIMIZADA',
      modalDesc: 'Se ha ordenado la ruta geográficamente para las visitas pendientes. Puedes ajustar el orden manualmente arrastrando las filas.',
      accept: 'Aceptar',
      nav: 'Navegar'
    },
    en: {
      title: 'SCHEDULED VISITS',
      subtitle: 'Check your daily agenda and open each client\'s profile.',
      filter: 'Filter by date:',
      date: '29/06/2026',
      total: 'Total visits on this date:',
      col1: 'CLIENT',
      col2: 'ADDRESS',
      col3: 'ZIP',
      col4: 'PROVINCE',
      col5: 'ACTION',
      modalTitle: 'OPTIMIZED ROUTE',
      modalDesc: 'The route has been geographically sorted for pending visits. You can manually adjust the order by dragging the rows.',
      accept: 'Accept',
      nav: 'Navigate'
    }
  }[lang];

  return (
    <div style={{
      background: '#151f2e',
      borderRadius: '16px',
      border: '1px solid rgba(162,217,243,0.2)',
      boxShadow: '0 30px 80px rgba(0,0,0,0.5)',
      width: '100%',
      maxWidth: '650px',
      overflow: 'hidden',
      fontFamily: 'Inter, sans-serif',
      color: '#e2e8f0',
      margin: '0 auto',
      position: 'relative'
    }}>

      {/* Fake Cursor */}
      <div style={{
        position: 'absolute', top: 0, left: 0,
        transform: `translate(${cursorPos.x}px, ${cursorPos.y}px)`,
        transition: 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)',
        zIndex: 9999, pointerEvents: 'none'
      }}>
        {cursorActive && (
          <div style={{
            position: 'absolute', top: -5, left: -5, width: 20, height: 20,
            background: 'rgba(59, 130, 246, 0.4)', borderRadius: '50%',
            animation: 'ping 0.5s ease-out'
          }} />
        )}
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes ping {
          0% { transform: scale(0.5); opacity: 1; }
          100% { transform: scale(2); opacity: 0; }
        }
      `}} />
      
      {/* Header */}
      <div style={{ padding: '20px 24px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
          <div style={{ marginTop: '4px', color: '#a2d9f3' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
          </div>
          <div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800, margin: 0, color: '#a2d9f3', letterSpacing: '0.5px' }}>{t.title}</h2>
            <p style={{ fontSize: '0.8rem', color: '#94a3b8', margin: '4px 0 0 0' }}>{t.subtitle}</p>
          </div>
        </div>
      </div>

      {/* Filter Bar with Action Buttons */}
      <div style={{ padding: '12px 24px', background: 'rgba(0,0,0,0.2)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontWeight: 600 }}>{t.filter}</span>
          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '6px 12px', borderRadius: '6px', display: 'flex', alignItems: 'center', gap: '8px', border: '1px solid rgba(255,255,255,0.1)' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
            {t.date}
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', color: '#cbd5e1' }}>
          <span>{t.total} <strong style={{ color: 'white', fontSize: '1rem' }}>4</strong></span>
          <div style={{ display: 'flex', gap: '8px' }}>
            {/* Optimize Button */}
            <div 
              onClick={handleOptimize}
              title="Optimizar ruta"
              style={{ 
                width: '32px', height: '32px', border: '1px solid rgba(162,217,243,0.5)', borderRadius: '6px', 
                display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#a2d9f3',
                cursor: 'pointer', background: 'rgba(162,217,243,0.1)', transition: 'background 0.2s'
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 3v4M21 7h-4M7 21v-4M3 17h4"></path>
                <circle cx="17" cy="7" r="3"></circle>
                <circle cx="7" cy="17" r="3"></circle>
                <path d="M14.5 9.5L9.5 14.5" strokeDasharray="2 2"></path>
              </svg>
            </div>
            {/* Navigate Button */}
            <div 
              onClick={handleNavigate}
              title={t.nav}
              style={{ 
                width: '32px', height: '32px', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '6px', 
                display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white',
                cursor: 'pointer', background: 'transparent', transition: 'background 0.2s'
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
            </div>
          </div>
        </div>
      </div>

      {/* Table */}
      <div style={{ padding: '0', fontSize: '0.75rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        {/* Table Header */}
        <div style={{ display: 'grid', gridTemplateColumns: '40px 1.5fr 2fr 0.8fr 1fr 80px', padding: '10px 0', background: 'rgba(255,255,255,0.02)', color: '#94a3b8', fontWeight: 600, borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ textAlign: 'center' }}>⇅</div>
          <div>{t.col1}</div>
          <div>{t.col2}</div>
          <div>{t.col3}</div>
          <div>{t.col4}</div>
          <div style={{ textAlign: 'center' }}>{t.col5}</div>
        </div>
        
        {/* Table Rows */}
        {clients.map((client, idx) => (
          <div 
            key={client.id} 
            onMouseEnter={() => setIsDragging(client.id)}
            onMouseLeave={() => setIsDragging(null)}
            style={{ 
              display: 'grid', gridTemplateColumns: '40px 1.5fr 2fr 0.8fr 1fr 80px', padding: '10px 0', 
              borderBottom: '1px solid rgba(255,255,255,0.03)', alignItems: 'center',
              background: isDragging === client.id ? 'rgba(255,255,255,0.05)' : 'transparent',
              transform: isDragging === client.id ? 'scale(1.01)' : 'none',
              transition: 'all 0.2s', cursor: 'grab'
            }}
          >
            <div style={{ textAlign: 'center', color: isDragging === client.id ? 'white' : '#64748b' }}>⋮⋮</div>
            <div style={{ fontWeight: 700, color: 'white', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
              {client.name}
            </div>
            <div style={{ color: '#cbd5e1', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{client.address}</div>
            <div style={{ color: '#cbd5e1' }}>{client.cp}</div>
            <div style={{ color: '#cbd5e1' }}>{client.city}</div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '8px' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
            </div>
          </div>
        ))}
      </div>

      {/* Map Area */}
      <div style={{ position: 'relative', height: '280px', width: '100%', background: '#e2e8f0', overflow: 'hidden' }}>
        
        {/* Google Maps view or Normal map view */}
        {showGoogleMaps ? (
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: '#f0f4f8' }}>
            {/* Google Maps Simulation */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.8, backgroundImage: 'radial-gradient(#9ca3af 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
               <svg width="100%" height="100%" style={{ position: 'absolute' }}>
                  <path d="M 50,150 Q 150,180 250,100 T 500,120" fill="none" stroke="#2563eb" strokeWidth="8" strokeLinejoin="round" />
                  <path d="M 50,150 Q 150,180 250,100 T 500,120" fill="none" stroke="#60a5fa" strokeWidth="4" strokeLinejoin="round" />
               </svg>
            </div>
            
            {/* Google Maps ETA Box */}
            <div style={{ position: 'absolute', bottom: '30px', left: '30px', background: 'white', padding: '12px 16px', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column', color: '#333' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 'bold', fontSize: '1.2rem' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="10" rx="2" ry="2"></rect><path d="M6 11V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4"></path><circle cx="8" cy="16" r="1"></circle><circle cx="16" cy="16" r="1"></circle></svg>
                46 min
              </div>
              <div style={{ color: '#666', fontSize: '0.9rem', marginTop: '2px' }}>28 km</div>
            </div>

            {/* Stop markers */}
            <div style={{ position: 'absolute', top: '140px', left: '40px', width: '16px', height: '16px', background: 'white', border: '4px solid #3b82f6', borderRadius: '50%' }}></div>
            <div style={{ position: 'absolute', top: '90px', left: '240px', width: '16px', height: '16px', background: 'white', border: '4px solid #3b82f6', borderRadius: '50%' }}></div>
            <div style={{ position: 'absolute', top: '110px', left: '490px', color: '#ef4444', transform: 'translate(-50%, -100%)' }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" stroke="white" strokeWidth="1">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3" fill="white"></circle>
              </svg>
            </div>
            
            <div 
              onClick={() => setShowGoogleMaps(false)}
              style={{ position: 'absolute', top: '16px', right: '16px', background: 'white', color: '#333', padding: '6px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}
            >
              Volver
            </div>
          </div>
        ) : (
          <>
            {/* Fake Map Background using CSS pattern */}
            <div style={{ 
              position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', 
              backgroundColor: '#e5e5f7', 
              opacity: 0.8, 
              backgroundImage: 'radial-gradient(#444cf7 0.5px, #e5e5f7 0.5px)', 
              backgroundSize: '10px 10px' 
            }}>
               <svg width="100%" height="100%" style={{ position: 'absolute', opacity: 0.2 }}>
                  <path d="M 0,50 Q 150,80 300,40 T 650,100" fill="none" stroke="#3b82f6" strokeWidth="8" />
                  <path d="M 100,280 Q 200,150 400,180 T 650,250" fill="none" stroke="#eab308" strokeWidth="6" />
                  <path d="M 200,0 L 250,280" fill="none" stroke="#fff" strokeWidth="12" />
               </svg>
            </div>

            {/* Optimized Route Line */}
            {isOptimized && (
              <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 5 }}>
                <path d="M 300,90 L 360,150 L 420,110 L 480,160" fill="none" stroke="#10b981" strokeWidth="3" strokeDasharray="4 4" />
              </svg>
            )}

            {/* Pins based on optimized state */}
            <div style={{ position: 'absolute', top: '90px', left: '300px', transform: 'translate(-50%, -100%)', zIndex: 10 }}>
              <div style={{ color: '#10b981', filter: 'drop-shadow(0px 3px 3px rgba(0,0,0,0.3))' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" stroke="white" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3" fill="white"></circle></svg>
              </div>
              {isOptimized && <div style={{ position: 'absolute', top: '-10px', right: '-10px', background: '#1e293b', color: 'white', width: '16px', height: '16px', borderRadius: '50%', fontSize: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid white' }}>1</div>}
            </div>

            <div style={{ position: 'absolute', top: '150px', left: '360px', transform: 'translate(-50%, -100%)', zIndex: 10 }}>
              <div style={{ color: '#10b981', filter: 'drop-shadow(0px 3px 3px rgba(0,0,0,0.3))' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" stroke="white" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3" fill="white"></circle></svg>
              </div>
              {isOptimized && <div style={{ position: 'absolute', top: '-10px', right: '-10px', background: '#1e293b', color: 'white', width: '16px', height: '16px', borderRadius: '50%', fontSize: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid white' }}>2</div>}
            </div>

            <div style={{ position: 'absolute', top: '110px', left: '420px', transform: 'translate(-50%, -100%)', zIndex: 10 }}>
              <div style={{ color: '#10b981', filter: 'drop-shadow(0px 3px 3px rgba(0,0,0,0.3))' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" stroke="white" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3" fill="white"></circle></svg>
              </div>
              {isOptimized && <div style={{ position: 'absolute', top: '-10px', right: '-10px', background: '#1e293b', color: 'white', width: '16px', height: '16px', borderRadius: '50%', fontSize: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid white' }}>3</div>}
            </div>

            <div style={{ position: 'absolute', top: '160px', left: '480px', transform: 'translate(-50%, -100%)', zIndex: 10 }}>
              <div style={{ color: '#10b981', filter: 'drop-shadow(0px 3px 3px rgba(0,0,0,0.3))' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" stroke="white" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3" fill="white"></circle></svg>
              </div>
              {isOptimized && <div style={{ position: 'absolute', top: '-10px', right: '-10px', background: '#1e293b', color: 'white', width: '16px', height: '16px', borderRadius: '50%', fontSize: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid white' }}>4</div>}
            </div>

            {/* Map Controls */}
            <div style={{ position: 'absolute', top: '10px', left: '10px', display: 'flex', flexDirection: 'column', gap: '4px', zIndex: 5 }}>
              <div style={{ width: '30px', height: '30px', background: 'white', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#333', fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 2px 5px rgba(0,0,0,0.2)' }}>+</div>
              <div style={{ width: '30px', height: '30px', background: 'white', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#333', fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 2px 5px rgba(0,0,0,0.2)' }}>-</div>
            </div>
          </>
        )}
      </div>

      {/* Optimization Modal */}
      {showModal && (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(15, 23, 42, 0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 50, backdropFilter: 'blur(4px)' }}>
          <div style={{ background: '#1e293b', padding: '24px', borderRadius: '16px', width: '90%', maxWidth: '400px', boxShadow: '0 25px 50px rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)' }}>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <div style={{ width: '48px', height: '48px', background: '#10b981', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', flexShrink: 0 }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              </div>
              <div>
                <h3 style={{ margin: '0 0 8px 0', fontSize: '1.2rem', color: 'white' }}>{t.modalTitle}</h3>
                <p style={{ margin: 0, fontSize: '0.9rem', color: '#94a3b8', lineHeight: 1.5 }}>
                  {t.modalDesc}
                </p>
              </div>
            </div>
            <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'flex-end' }}>
              <button 
                onClick={() => setShowModal(false)}
                style={{ background: '#d4af37', color: 'white', border: 'none', padding: '10px 24px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}
              >
                {t.accept}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
