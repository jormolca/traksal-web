'use client';
import { useState, useEffect } from 'react';

export default function AsignacionExcelPresentacion({ lang = 'es' }) {
  const t = {
    es: {
      drag: 'Arrastra tu archivo Excel aquí',
      or: 'o haz clic para explorar',
      uploading: 'Subiendo archivo...',
      processing: 'Procesando 1.250 filas...',
      success: '¡Importación completada!',
      details: '1.250 clientes han sido asignados correctamente a sus comerciales.'
    },
    en: {
      drag: 'Drag your Excel file here',
      or: 'or click to browse',
      uploading: 'Uploading file...',
      processing: 'Processing 1,250 rows...',
      success: 'Import complete!',
      details: '1,250 clients have been successfully assigned to their sales reps.'
    }
  }[lang];

  // 0: idle, 1: dragging, 2: uploading, 3: processing, 4: success
  const [phase, setPhase] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let timers = [];
    
    const runCycle = () => {
      setPhase(0);
      setProgress(0);
      timers.push(setTimeout(() => setPhase(1), 1000)); // Simulate file drag hover
      timers.push(setTimeout(() => { setPhase(2); simulateProgress(0, 100, 1500, setProgress); }, 2000)); // Uploading
      timers.push(setTimeout(() => { setPhase(3); simulateProgress(0, 100, 2000, setProgress); }, 3800)); // Processing
      timers.push(setTimeout(() => setPhase(4), 6000)); // Success
      timers.push(setTimeout(() => runCycle(), 10000)); // Restart
    };

    const simulateProgress = (start, end, duration, setter) => {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        setter(Math.floor(progress * (end - start) + start));
        if (progress < 1) {
          timers.push(requestAnimationFrame(step));
        }
      };
      timers.push(requestAnimationFrame(step));
    };

    runCycle();

    return () => timers.forEach(t => typeof t === 'number' ? clearTimeout(t) : cancelAnimationFrame(t));
  }, []);

  return (
    <div className="demo-wrapper" style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', minHeight: '400px' }}>
      
      {/* Glow */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(39, 174, 96, 0.15) 0%, transparent 70%)',
        zIndex: 0, pointerEvents: 'none'
      }} />

      {/* Mac/Browser Frame */}
      <div style={{
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

        {/* Content Area */}
        <div style={{ flex: 1, position: 'relative', background: '#162539', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px' }}>
          
          {phase <= 1 && (
            <div style={{
              width: '100%', height: '100%', border: `2px dashed ${phase === 1 ? 'var(--accent)' : 'rgba(255,255,255,0.2)'}`,
              borderRadius: '12px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              background: phase === 1 ? 'rgba(194, 158, 94, 0.05)' : 'transparent',
              transition: 'all 0.3s ease'
            }}>
              <div style={{ fontSize: '48px', marginBottom: '16px', filter: phase === 1 ? 'drop-shadow(0 0 10px rgba(194,158,94,0.5))' : 'none', transform: phase === 1 ? 'scale(1.1)' : 'scale(1)', transition: 'all 0.3s' }}>
                📄
              </div>
              <h3 style={{ color: phase === 1 ? 'var(--accent)' : 'white', fontSize: '1.1rem', margin: '0 0 8px 0' }}>{t.drag}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', margin: 0 }}>{t.or}</p>
            </div>
          )}

          {(phase === 2 || phase === 3) && (
            <div style={{ width: '100%', maxWidth: '300px', animation: 'fade-up 0.5s ease', textAlign: 'center' }}>
              <div style={{ fontSize: '40px', marginBottom: '24px', animation: phase === 3 ? 'pulse-glow 2s infinite' : 'none' }}>
                ⚙️
              </div>
              <h3 style={{ color: 'white', fontSize: '1rem', margin: '0 0 16px 0' }}>
                {phase === 2 ? t.uploading : t.processing}
              </h3>
              <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{ width: `${progress}%`, height: '100%', background: phase === 2 ? 'var(--secondary)' : 'var(--accent)', transition: 'width 0.1s linear' }} />
              </div>
              <div style={{ marginTop: '8px', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{progress}%</div>
            </div>
          )}

          {phase === 4 && (
            <div style={{ width: '100%', maxWidth: '320px', animation: 'fade-up 0.5s ease', textAlign: 'center' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(39, 174, 96, 0.2)', color: '#27ae60', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', fontSize: '32px' }}>
                ✓
              </div>
              <h3 style={{ color: 'white', fontSize: '1.2rem', margin: '0 0 12px 0' }}>{t.success}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.5, margin: 0 }}>
                {t.details}
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
