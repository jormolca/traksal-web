'use client';
import { useState, useEffect } from 'react';

export default function AsignacionClientesPresentacion({ lang = 'es' }) {
  const t = {
    es: {
      mapLayer: 'Mapa Base',
      title: 'ASIGNAR 7 CLIENTES',
      desc: 'Selecciona el comercial al que deseas asignar los clientes seleccionados en el mapa.',
      select: '-- Elige un Comercial --',
      rep: 'Laura M.',
      cancel: 'Cancelar',
      assign: 'Asignar',
      success: '¡Asignados!'
    },
    en: {
      mapLayer: 'Base Map',
      title: 'ASSIGN 7 CLIENTS',
      desc: 'Select the sales rep to whom you want to assign the selected clients on the map.',
      select: '-- Choose a Rep --',
      rep: 'Laura M.',
      cancel: 'Cancel',
      assign: 'Assign',
      success: 'Assigned!'
    }
  }[lang];

  // Animation states: 0: initial, 1: drawing polygon, 2: selected, 3: modal open, 4: assigning, 5: assigned
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    let timers = [];
    
    const runCycle = () => {
      setPhase(0);
      timers.push(setTimeout(() => setPhase(1), 1500)); // Start drawing
      timers.push(setTimeout(() => setPhase(2), 3000)); // Polygon drawn, points highlighted
      timers.push(setTimeout(() => setPhase(3), 4000)); // Show modal
      timers.push(setTimeout(() => setPhase(4), 5500)); // Rep selected in modal
      timers.push(setTimeout(() => setPhase(5), 6500)); // Click assign -> Success!
      timers.push(setTimeout(() => runCycle(), 9500));  // Restart cycle
    };

    runCycle();

    return () => timers.forEach(clearTimeout);
  }, []);

  // Static points on the map
  const points = [
    { x: 30, y: 40, inPolygon: false },
    { x: 45, y: 25, inPolygon: false },
    { x: 80, y: 70, inPolygon: false },
    { x: 85, y: 45, inPolygon: false },
    { x: 20, y: 70, inPolygon: false },
    
    // Points that will be inside the polygon
    { x: 45, y: 55, inPolygon: true },
    { x: 55, y: 45, inPolygon: true },
    { x: 65, y: 60, inPolygon: true },
    { x: 50, y: 70, inPolygon: true },
    { x: 70, y: 75, inPolygon: true },
    { x: 60, y: 85, inPolygon: true },
    { x: 45, y: 80, inPolygon: true },
  ];

  return (
    <div className="demo-wrapper" style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', minHeight: '400px' }}>
      
      {/* Glow */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(162, 217, 243, 0.15) 0%, transparent 70%)',
        zIndex: 0, pointerEvents: 'none'
      }} />

      {/* Mac/Browser Frame */}
      <div className="animate-float" style={{
        position: 'relative', width: '480px', height: '340px', borderRadius: '12px',
        border: '1px solid rgba(255,255,255,0.1)', background: '#1C2D44',
        boxShadow: '0 30px 60px rgba(0,0,0,0.5)', overflow: 'hidden', zIndex: 1,
        display: 'flex', flexDirection: 'column'
      }}>
        {/* Browser Top Bar */}
        <div style={{ height: '32px', background: '#0F1A2A', display: 'flex', alignItems: 'center', padding: '0 12px', gap: '6px' }}>
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#FF5F56' }} />
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#FFBD2E' }} />
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27C93F' }} />
          <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '2px 160px', borderRadius: '4px', fontSize: '0.6rem', color: 'rgba(255,255,255,0.3)' }}>
              app.traksal.com
            </div>
          </div>
        </div>

        {/* Map Area */}
        <div style={{ flex: 1, position: 'relative', background: '#e0e5ec', overflow: 'hidden' }}>
          
          {/* Abstract Map Background (CSS Pattern to look like a map) */}
          <div style={{
            position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
            opacity: 0.5,
            backgroundImage: `
              radial-gradient(circle at 20% 30%, #d4dacd 20%, transparent 21%),
              radial-gradient(circle at 80% 70%, #d4dacd 20%, transparent 21%),
              radial-gradient(circle at 50% 50%, #c4d4e0 40%, transparent 41%)
            `,
            backgroundSize: '200px 200px',
            filter: 'blur(8px)'
          }} />
          
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M 20 0 L 0 0 0 20\' fill=\'none\' stroke=\'rgba(0,0,0,0.05)\' stroke-width=\'1\'/%3E%3C/svg%3E")' }} />

          {/* Points (Estancos) */}
          {points.map((p, i) => {
            const isSelected = p.inPolygon && phase >= 2;
            return (
              <div key={i} style={{
                position: 'absolute',
                top: `${p.y}%`, left: `${p.x}%`,
                width: '14px', height: '14px',
                background: isSelected ? 'var(--accent)' : '#1C2D44',
                border: '2px solid white',
                borderRadius: '50%',
                transform: 'translate(-50%, -50%)',
                boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
                transition: 'all 0.3s ease',
                zIndex: isSelected ? 15 : 10
              }}>
                {/* Map Pin Dot */}
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '4px', height: '4px', background: 'white', borderRadius: '50%' }} />
              </div>
            );
          })}

          {/* Polygon Drawing SVG */}
          <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 12, pointerEvents: 'none' }}>
            {/* The polygon covers the points with inPolygon: true */}
            {/* Path approx: (40, 45) -> (75, 45) -> (80, 80) -> (40, 95) -> close */}
            <path
              d="M 180 130 L 350 140 L 360 280 L 190 310 Z"
              fill={phase >= 2 ? 'rgba(162, 217, 243, 0.3)' : 'transparent'}
              stroke="var(--secondary)"
              strokeWidth="2"
              strokeDasharray="1000"
              strokeDashoffset={phase >= 1 ? "0" : "1000"}
              style={{
                transition: phase === 1 ? 'stroke-dashoffset 1.5s ease-in-out' : (phase >= 2 ? 'fill 0.5s ease' : 'none'),
                opacity: phase >= 1 ? 1 : 0
              }}
            />
          </svg>

          {/* Simulated Toolbar */}
          <div style={{ position: 'absolute', top: '10px', right: '10px', background: 'white', borderRadius: '6px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', padding: '4px', display: 'flex', flexDirection: 'column', gap: '4px', zIndex: 20 }}>
            <div style={{ width: '24px', height: '24px', background: '#f0f0f0', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>+</div>
            <div style={{ width: '24px', height: '24px', background: '#f0f0f0', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>-</div>
            <div style={{ width: '24px', height: '2px', background: '#e0e0e0', margin: '2px 0' }} />
            {/* Polygon Tool Active */}
            <div style={{ width: '24px', height: '24px', background: phase >= 1 && phase < 3 ? 'var(--secondary)' : '#f0f0f0', color: phase >= 1 && phase < 3 ? 'white' : '#666', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              ⬠
            </div>
          </div>

          {/* Assignment Modal Overlay */}
          <div style={{
            position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
            background: 'rgba(15, 26, 42, 0.6)', backdropFilter: 'blur(2px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            opacity: phase >= 3 ? 1 : 0,
            visibility: phase >= 3 ? 'visible' : 'hidden',
            transition: 'opacity 0.4s ease',
            zIndex: 50
          }}>
            <div style={{
              background: '#162539', width: '300px', borderRadius: '12px', padding: '20px',
              border: '1px solid rgba(162,217,243,0.1)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
              transform: phase >= 3 ? 'scale(1)' : 'scale(0.9)',
              transition: 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
            }}>
              {phase === 5 ? (
                <div style={{ textAlign: 'center', padding: '20px 0', animation: 'fade-up 0.5s ease' }}>
                  <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(39, 174, 96, 0.2)', color: '#27ae60', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', fontSize: '24px' }}>
                    ✓
                  </div>
                  <h3 style={{ color: 'white', margin: 0, fontSize: '1.2rem' }}>{t.success}</h3>
                </div>
              ) : (
                <>
                  <h3 style={{ color: 'white', fontSize: '1rem', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    {t.title}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.75rem', marginBottom: '20px', lineHeight: 1.4 }}>
                    {t.desc}
                  </p>
                  
                  {/* Custom Select */}
                  <div style={{
                    width: '100%', padding: '10px 12px', borderRadius: '6px',
                    background: '#0F1A2A', border: '1px solid rgba(255,255,255,0.1)',
                    color: phase >= 4 ? 'white' : 'var(--text-secondary)', fontSize: '0.85rem',
                    marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'
                  }}>
                    {phase >= 4 ? t.rep : t.select}
                    <span style={{ fontSize: '10px' }}>▼</span>
                  </div>

                  {/* Buttons */}
                  <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
                    <button style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: 'var(--text-secondary)', padding: '8px 16px', borderRadius: '6px', fontSize: '0.8rem' }}>
                      {t.cancel}
                    </button>
                    <button style={{ background: phase >= 4 ? 'var(--accent)' : 'rgba(194, 158, 94, 0.4)', color: phase >= 4 ? 'white' : 'rgba(255,255,255,0.5)', border: 'none', padding: '8px 16px', borderRadius: '6px', fontSize: '0.8rem', fontWeight: 600, transition: 'all 0.3s ease' }}>
                      {t.assign}
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
