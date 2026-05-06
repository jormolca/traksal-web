'use client';
import { useState, useEffect } from 'react';

const steps = [
  {
    id: 1,
    image: '/images/demo/fichaje-1.webp',
    text: 'Haz clic en Iniciar Sesión',
    cursorPos: { top: '72%', left: '50%' },
    duration: 1500
  },
  {
    id: 2,
    image: '/images/demo/fichaje-2.webp',
    text: 'Haz clic en Inicio de Jornada',
    cursorPos: { top: '70%', left: '50%' },
    duration: 1500
  },
  {
    id: 3,
    image: '/images/demo/fichaje-3.webp',
    text: '¡Jornada iniciada!',
    cursorPos: null,
    duration: 2500
  },
  {
    id: 4,
    image: '/images/demo/fichaje-4.webp',
    text: 'Consulta tus informes en tiempo real',
    cursorPos: null,
    duration: 3000
  }
];

export default function FichajeDemo() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const step = steps[currentStep];
    
    // Simulate click if cursorPos exists
    let clickTimeout;
    if (step.cursorPos) {
      clickTimeout = setTimeout(() => {
        setIsClicking(true);
        setTimeout(() => setIsClicking(false), 300);
      }, step.duration - 400);
    }

    const timer = setTimeout(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, step.duration);

    return () => {
      clearTimeout(timer);
      clearTimeout(clickTimeout);
    };
  }, [currentStep]);

  return (
    <div className="demo-wrapper" style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center' }}>
      {/* Background Glow */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '400px',
        height: '400px',
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
          {steps.map((step, index) => (
            <div
              key={step.id}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                opacity: currentStep === index ? 1 : 0,
                transition: 'opacity 0.6s ease-in-out',
                backgroundImage: `url(${step.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
          ))}

          {/* Cursor Simulation */}
          {steps[currentStep].cursorPos && (
            <div style={{
              position: 'absolute',
              top: steps[currentStep].cursorPos.top,
              left: steps[currentStep].cursorPos.left,
              width: '28px',
              height: '28px',
              background: 'rgba(255, 255, 255, 0.4)',
              border: '2px solid white',
              borderRadius: '50%',
              transform: `translate(-50%, -50%) scale(${isClicking ? 0.8 : 1})`,
              boxShadow: '0 0 20px rgba(0,0,0,0.4)',
              transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
              zIndex: 20,
              pointerEvents: 'none'
            }}>
              {isClicking && (
                <div className="ripple" />
              )}
            </div>
          )}

          {/* Caption/Globo */}
          <div className="caption-bubble" style={{
            position: 'absolute',
            bottom: '40px',
            left: '20px',
            right: '20px',
            background: 'rgba(15, 26, 42, 0.85)',
            backdropFilter: 'blur(12px)',
            padding: '12px 16px',
            borderRadius: '16px',
            border: '1px solid rgba(162, 217, 243, 0.25)',
            color: 'white',
            fontSize: '0.82rem',
            fontWeight: '500',
            textAlign: 'center',
            boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
            zIndex: 30,
            animation: 'fade-up 0.5s ease'
          }}>
            {steps[currentStep].text}
          </div>
        </div>
      </div>

      <style jsx>{`
        .ripple {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 0;
          height: 0;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          animation: click-ripple 0.4s ease-out;
        }
        @keyframes click-ripple {
          from { opacity: 1; width: 0; height: 0; }
          to { opacity: 0; width: 80px; height: 80px; }
        }
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
