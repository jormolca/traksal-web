'use client';
import { useState, useEffect } from 'react';

const images = [
  '/images/demo/Informes de horas/informe_horas_1.webp',
  '/images/demo/Informes de horas/informe_horas_2.webp',
  '/images/demo/Informes de horas/informe_horas_3.webp'
];

export default function InformesPresentacion() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="demo-wrapper" style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '500px' }}>
      {/* Background Glow */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(162, 217, 243, 0.15) 0%, transparent 70%)',
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      <div className="phone-frame" style={{
        position: 'relative',
        width: '280px',
        height: '580px',
        borderRadius: '40px',
        border: '12px solid #1C2D44',
        background: '#0F1A2A',
        boxShadow: '0 50px 100px -20px rgba(0,0,0,0.6), 0 0 0 1px rgba(162,217,243,0.1)',
        overflow: 'hidden',
        zIndex: 1
      }}>
        {/* Notch */}
        <div style={{
          position: 'absolute',
          top: '0',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100px',
          height: '25px',
          background: '#1C2D44',
          borderBottomLeftRadius: '15px',
          borderBottomRightRadius: '15px',
          zIndex: 10
        }} />

        {/* Screen Content */}
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          {images.map((img, idx) => (
            <div
              key={idx}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: `url('${img}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'top center',
                opacity: current === idx ? 1 : 0,
                transform: current === idx ? 'scale(1)' : 'scale(1.05)',
                transition: 'opacity 0.8s ease-in-out, transform 3s ease-in-out'
              }}
            />
          ))}
        </div>
      </div>

      {/* Thumbnails / Indicators */}
      <div style={{
        position: 'absolute',
        bottom: '-40px',
        display: 'flex',
        gap: '12px',
        zIndex: 10
      }}>
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            aria-label={`Ver imagen ${idx + 1}`}
            style={{
              width: current === idx ? '32px' : '12px',
              height: '12px',
              borderRadius: '6px',
              background: current === idx ? 'var(--accent)' : 'rgba(162, 217, 243, 0.3)',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          />
        ))}
      </div>
    </div>
  );
}
