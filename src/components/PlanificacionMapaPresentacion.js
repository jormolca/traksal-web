import { useState, useEffect } from 'react';

const delay = (ms) => new Promise(res => setTimeout(res, ms));

export default function PlanificacionMapaPresentacion({ lang = 'es' }) {
  const [activePin, setActivePin] = useState(null);
  const [isTracking, setIsTracking] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 500, y: 400 });
  const [cursorActive, setCursorActive] = useState(false);

  useEffect(() => {
    let isRunning = true;
    
    const runAnimation = async () => {
      while (isRunning) {
        // Reset
        setActivePin(null);
        setIsTracking(false);
        setCursorPos({ x: 225, y: 350 });
        await delay(1000);
        if (!isRunning) break;

        // Move to pin 3
        setCursorPos({ x: 340, y: 170 });
        await delay(800);
        if (!isRunning) break;
        
        // Click pin
        setCursorActive(true);
        await delay(200);
        setCursorActive(false);
        setActivePin(1);
        await delay(1500);
        if (!isRunning) break;

        // Move to tracking button
        setCursorPos({ x: 400, y: 300 });
        await delay(800);
        if (!isRunning) break;

        // Click tracking button
        setCursorActive(true);
        await delay(200);
        setCursorActive(false);
        setIsTracking(true);
        await delay(2500);
      }
    };

    runAnimation();
    return () => { isRunning = false; };
  }, []);

  // Fake data for the table and map
  const clients = [
    { id: 1, name: 'TECH SOLUTIONS S.L.', address: 'Calle Gran Vía, 45', cp: '28013', city: 'MADRID', top: '35%', left: '45%', status: 'green' },
    { id: 2, name: 'GLOBAL TRADE CORP', address: 'Paseo de la Castellana, 89', cp: '28046', city: 'MADRID', top: '25%', left: '55%', status: 'green' },
    { id: 3, name: 'INNOVA SYSTEMS', address: 'Calle de Alcalá, 112', cp: '28009', city: 'MADRID', top: '45%', left: '60%', status: 'yellow' },
    { id: 4, name: 'LOGÍSTICA EXPRESS', address: 'Avenida de América, 32', cp: '28028', city: 'MADRID', top: '30%', left: '70%', status: 'yellow' },
    { id: 5, name: 'GRUPO FINANCIERO', address: 'Calle Princesa, 21', cp: '28008', city: 'MADRID', top: '50%', left: '35%', status: 'green' },
  ];

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
      col5: 'ACCIÓN'
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
      col5: 'ACTION'
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
      margin: '0 auto'
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

      {/* Filter Bar */}
      <div style={{ padding: '12px 24px', background: 'rgba(0,0,0,0.2)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontWeight: 600 }}>{t.filter}</span>
          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '6px 12px', borderRadius: '6px', display: 'flex', alignItems: 'center', gap: '8px', border: '1px solid rgba(255,255,255,0.1)' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
            {t.date}
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', color: '#cbd5e1' }}>
          <span>{t.total} <strong style={{ color: 'white', fontSize: '1rem' }}>5</strong></span>
          <div style={{ display: 'flex', gap: '8px' }}>
            <div style={{ width: '28px', height: '28px', border: '1px solid rgba(162,217,243,0.5)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#a2d9f3' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            </div>
            <div style={{ width: '28px', height: '28px', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
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
        {clients.slice(0, 4).map((client) => (
          <div key={client.id} style={{ display: 'grid', gridTemplateColumns: '40px 1.5fr 2fr 0.8fr 1fr 80px', padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.03)', alignItems: 'center', background: activePin === client.id ? 'rgba(162,217,243,0.05)' : 'transparent', transition: 'background 0.2s' }}>
            <div style={{ textAlign: 'center', color: '#64748b' }}>⋮⋮</div>
            <div style={{ fontWeight: 700, color: 'white', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
              {client.name}
            </div>
            <div style={{ color: '#cbd5e1', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{client.address}</div>
            <div style={{ color: '#cbd5e1' }}>{client.cp}</div>
            <div style={{ color: '#cbd5e1' }}>{client.city}</div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '8px' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={client.status === 'green' ? '#10b981' : '#f59e0b'} strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
            </div>
          </div>
        ))}
      </div>

      {/* Map Area */}
      <div style={{ position: 'relative', height: '280px', width: '100%', background: '#e2e8f0', overflow: 'hidden' }}>
        {/* Fake Map Background using CSS pattern */}
        <div style={{ 
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', 
          backgroundColor: '#e5e5f7', 
          opacity: 0.8, 
          backgroundImage: 'radial-gradient(#444cf7 0.5px, #e5e5f7 0.5px)', 
          backgroundSize: '10px 10px' 
        }}>
           {/* Add some fake map elements */}
           <svg width="100%" height="100%" style={{ position: 'absolute', opacity: 0.2 }}>
              <path d="M 0,50 Q 150,80 300,40 T 650,100" fill="none" stroke="#3b82f6" strokeWidth="8" />
              <path d="M 100,280 Q 200,150 400,180 T 650,250" fill="none" stroke="#eab308" strokeWidth="6" />
              <path d="M 200,0 L 250,280" fill="none" stroke="#fff" strokeWidth="12" />
           </svg>
        </div>

        {/* Tracking Path (shows when tracking is active) */}
        {isTracking && (
          <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 5 }}>
            <path d="M 50%,80% L 45%,35%" fill="none" stroke="#3b82f6" strokeWidth="4" strokeDasharray="6 6" />
          </svg>
        )}

        {/* Current Location Dot (shows when tracking) */}
        {isTracking && (
          <div style={{
            position: 'absolute',
            top: '80%', left: '50%',
            width: '16px', height: '16px',
            background: '#3b82f6',
            borderRadius: '50%',
            border: '3px solid white',
            boxShadow: '0 0 0 4px rgba(59, 130, 246, 0.3)',
            transform: 'translate(-50%, -50%)',
            zIndex: 10
          }}></div>
        )}

        {/* Pins */}
        {clients.map((client) => (
          <div 
            key={client.id}
            onClick={() => setActivePin(activePin === client.id ? null : client.id)}
            style={{
              position: 'absolute',
              top: client.top,
              left: client.left,
              transform: 'translate(-50%, -100%)',
              cursor: 'pointer',
              zIndex: activePin === client.id ? 20 : 10
            }}
          >
            {/* Map Pin Icon */}
            <div style={{ 
              color: client.status === 'green' ? '#10b981' : '#f59e0b',
              filter: 'drop-shadow(0px 3px 3px rgba(0,0,0,0.3))',
              transform: activePin === client.id ? 'scale(1.2)' : 'scale(1)',
              transition: 'transform 0.2s'
            }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" stroke="white" strokeWidth="1.5">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3" fill="white"></circle>
              </svg>
            </div>

            {/* Popup */}
            {activePin === client.id && (
              <div style={{
                position: 'absolute',
                bottom: '100%',
                left: '50%',
                transform: 'translateX(-50%)',
                background: '#1e293b',
                padding: '12px',
                borderRadius: '8px',
                width: 'max-content',
                maxWidth: '220px',
                boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
                border: '1px solid rgba(255,255,255,0.1)',
                marginBottom: '8px',
                zIndex: 30
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '4px' }}>
                  <strong style={{ color: 'white', fontSize: '0.8rem' }}>{client.name}</strong>
                  <div 
                    onClick={(e) => { e.stopPropagation(); setActivePin(null); }}
                    style={{ cursor: 'pointer', color: '#94a3b8', marginLeft: '8px' }}
                  >
                    ×
                  </div>
                </div>
                <div style={{ fontSize: '0.7rem', color: '#cbd5e1', lineHeight: 1.4 }}>
                  {client.address}<br/>
                  {client.cp} - {client.city}
                </div>
                {/* Arrow pointing down */}
                <div style={{
                  position: 'absolute',
                  bottom: '-6px',
                  left: '50%',
                  transform: 'translateX(-50%) rotate(45deg)',
                  width: '12px',
                  height: '12px',
                  background: '#1e293b',
                  borderRight: '1px solid rgba(255,255,255,0.1)',
                  borderBottom: '1px solid rgba(255,255,255,0.1)',
                }}></div>
              </div>
            )}
          </div>
        ))}

        {/* Map Controls */}
        <div style={{ position: 'absolute', top: '10px', left: '10px', display: 'flex', flexDirection: 'column', gap: '4px', zIndex: 5 }}>
          <div style={{ width: '30px', height: '30px', background: 'white', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#333', fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 2px 5px rgba(0,0,0,0.2)' }}>+</div>
          <div style={{ width: '30px', height: '30px', background: 'white', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#333', fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 2px 5px rgba(0,0,0,0.2)' }}>-</div>
        </div>

        {/* Target/Tracking Button */}
        <div 
          onClick={() => setIsTracking(!isTracking)}
          style={{ 
            position: 'absolute', bottom: '20px', right: '20px', 
            width: '40px', height: '40px', 
            background: isTracking ? '#3b82f6' : '#1e293b', 
            borderRadius: '8px', 
            display: 'flex', alignItems: 'center', justifyContent: 'center', 
            color: 'white', cursor: 'pointer', 
            boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
            transition: 'background 0.3s',
            zIndex: 5
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"></circle>
            <circle cx="12" cy="12" r="3"></circle>
            <line x1="12" y1="2" x2="12" y2="4"></line>
            <line x1="12" y1="20" x2="12" y2="22"></line>
            <line x1="2" y1="12" x2="4" y2="12"></line>
            <line x1="20" y1="12" x2="22" y2="12"></line>
          </svg>
        </div>
      </div>
    </div>
  );
}
