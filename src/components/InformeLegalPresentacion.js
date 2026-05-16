'use client';
import { useState, useEffect } from 'react';

const images = [
  '/images/demo/Informe legal fichaje/informe_legal_fichaje_1.webp',
  '/images/demo/Informe legal fichaje/informe_legal_fichaje_2.webp',
  '/images/demo/Informe legal fichaje/informe_legal_fichaje_3.webp',
];

export default function InformeLegalPresentacion() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="demo-wrapper" style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '600px' }}>
      {/* Background Glow */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(194, 158, 94, 0.12) 0%, transparent 70%)',
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
        zIndex: 1,
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

        {/* Sliding Strip */}
        <div style={{
          display: 'flex',
          width: `${images.length * 100}%`,
          height: '100%',
          transform: `translateX(-${(current * 100) / images.length}%)`,
          transition: 'transform 0.55s cubic-bezier(0.77, 0, 0.175, 1)',
        }}>
          {images.map((img, idx) => (
            <div
              key={idx}
              role="img"
              aria-label={`Pantalla ${idx + 1} del informe legal`}
              style={{
                width: `${100 / images.length}%`,
                flexShrink: 0,
                height: '100%',
                backgroundImage: `url('${img}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'top center',
              }}
            />
          ))}
        </div>
      </div>

      {/* Dot Indicators */}
      <div style={{
        position: 'absolute',
        bottom: '0px',
        display: 'flex',
        gap: '10px',
        zIndex: 10,
      }}>
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            aria-label={`Ver pantalla ${idx + 1}`}
            style={{
              width: current === idx ? '28px' : '10px',
              height: '10px',
              borderRadius: '5px',
              background: current === idx ? 'var(--accent)' : 'rgba(162, 217, 243, 0.3)',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              padding: 0,
            }}
          />
        ))}
      </div>
    </div>
  );
}
