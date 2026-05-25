'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function FichajeDemo({ lang = 'es' }) {
  const t = {
    es: {
      s1: 'Haz clic en Iniciar Sesión',
      s2: 'Haz clic en Inicio de Jornada',
      s3: '¡Jornada iniciada!',
      s4: 'Consulta tus informes en tiempo real',
      email: 'usuario@traksal.com',
      pass: '••••••••',
      login: 'Iniciar Sesión',
      welcome: '¡Hola, David!',
      clockIn: 'Inicio de jornada',
      active: 'Jornada activa',
      timer: '00:00:03',
      reports: 'Tus registros de hoy',
      start: 'Entrada',
      total: 'Total hoy'
    },
    en: {
      s1: 'Click on Sign In',
      s2: 'Click on Clock In',
      s3: 'Clocked in successfully!',
      s4: 'Check your reports in real time',
      email: 'user@traksal.com',
      pass: '••••••••',
      login: 'Sign In',
      welcome: 'Hello, David!',
      clockIn: 'Clock In',
      active: 'Active shift',
      timer: '00:00:03',
      reports: 'Your logs for today',
      start: 'Clock In',
      total: 'Total today'
    }
  }[lang];

  const steps = [
    { id: 1, text: t.s1, cursorPos: { top: '65%', left: '50%' }, duration: 2000 },
    { id: 2, text: t.s2, cursorPos: { top: '55%', left: '50%' }, duration: 2000 },
    { id: 3, text: t.s3, cursorPos: null, duration: 2000 },
    { id: 4, text: t.s4, cursorPos: null, duration: 3000 }
  ];

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
  }, [currentStep, lang]); // added lang dependency just in case

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

      <div className="phone-frame animate-float" style={{
        position: 'relative',
        width: '280px',
        height: '580px',
        borderRadius: '40px',
        border: '12px solid #1C2D44',
        background: '#0a1017',
        boxShadow: '0 50px 100px -20px rgba(0,0,0,0.6), 0 0 0 1px rgba(162,217,243,0.1)',
        overflow: 'hidden',
        zIndex: 1,
        display: 'flex',
        flexDirection: 'column'
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

        {/* Screen Content Views */}
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          
          {/* View 1: Login */}
          <div style={{
            position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
            opacity: currentStep === 0 ? 1 : 0,
            transition: 'opacity 0.5s ease',
            display: 'flex', flexDirection: 'column', padding: '40px 24px', alignItems: 'center', justifyContent: 'center',
            background: '#0a1017'
          }}>
            <Image src="/logo.svg" alt="Logo" width={140} height={40} style={{ marginBottom: '60px' }} />
            <div style={{ width: '100%', background: 'rgba(255,255,255,0.05)', padding: '12px 16px', borderRadius: '12px', marginBottom: '16px', color: 'white', fontSize: '0.85rem' }}>
              {t.email}
            </div>
            <div style={{ width: '100%', background: 'rgba(255,255,255,0.05)', padding: '12px 16px', borderRadius: '12px', marginBottom: '32px', color: 'white', fontSize: '0.85rem', letterSpacing: '2px' }}>
              {t.pass}
            </div>
            <div style={{
              width: '100%', padding: '14px', background: 'var(--accent)', borderRadius: '12px', color: 'white', fontWeight: 700, textAlign: 'center', fontSize: '0.9rem',
              boxShadow: isClicking && currentStep === 0 ? 'inset 0 0 0 100px rgba(0,0,0,0.1)' : '0 4px 15px rgba(194, 158, 94, 0.4)',
              transform: isClicking && currentStep === 0 ? 'scale(0.97)' : 'scale(1)',
              transition: 'all 0.2s'
            }}>
              {t.login}
            </div>
          </div>

          {/* View 2: Dashboard Clock In */}
          <div style={{
            position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
            opacity: currentStep === 1 ? 1 : 0,
            transition: 'opacity 0.5s ease',
            display: 'flex', flexDirection: 'column', padding: '60px 24px 24px 24px', alignItems: 'center',
            background: '#0a1017'
          }}>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '60px' }}>
              <div style={{ color: 'white', fontSize: '1rem', fontWeight: 600 }}>{t.welcome}</div>
              <div style={{ width: '32px', height: '32px', background: 'var(--secondary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', fontWeight: 'bold' }}>D</div>
            </div>
            
            {/* Big Clock In Button */}
            <div style={{
              width: '180px', height: '180px', borderRadius: '50%', background: 'rgba(162, 217, 243, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center',
              border: '2px solid var(--secondary)',
              boxShadow: isClicking && currentStep === 1 ? 'inset 0 0 0 100px rgba(162, 217, 243, 0.2)' : '0 0 40px rgba(162, 217, 243, 0.2)',
              transform: isClicking && currentStep === 1 ? 'scale(0.95)' : 'scale(1)',
              transition: 'all 0.2s'
            }}>
              <div style={{ textAlign: 'center', color: 'var(--secondary)', fontWeight: 700, fontSize: '1.2rem', padding: '20px' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ margin: '0 auto 8px auto' }}><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                {t.clockIn}
              </div>
            </div>
          </div>

          {/* View 3: Dashboard Clocked In */}
          <div style={{
            position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
            opacity: currentStep === 2 ? 1 : 0,
            transition: 'opacity 0.5s ease',
            display: 'flex', flexDirection: 'column', padding: '60px 24px 24px 24px', alignItems: 'center',
            background: '#0a1017'
          }}>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '60px' }}>
              <div style={{ color: 'white', fontSize: '1rem', fontWeight: 600 }}>{t.welcome}</div>
              <div style={{ width: '32px', height: '32px', background: 'var(--secondary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', fontWeight: 'bold' }}>D</div>
            </div>
            
            {/* Big Active Button */}
            <div style={{
              width: '180px', height: '180px', borderRadius: '50%', background: 'rgba(39, 174, 96, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center',
              border: '2px solid #27ae60',
              boxShadow: '0 0 40px rgba(39, 174, 96, 0.3)',
              animation: currentStep === 2 ? 'pulse-glow 2s infinite' : 'none'
            }}>
              <div style={{ textAlign: 'center', color: '#7DFFB0' }}>
                <div style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '4px' }}>{t.active}</div>
                <div style={{ fontSize: '1.8rem', fontWeight: 800 }}>{t.timer}</div>
              </div>
            </div>
          </div>

          {/* View 4: Reports */}
          <div style={{
            position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
            opacity: currentStep === 3 ? 1 : 0,
            transition: 'opacity 0.5s ease',
            display: 'flex', flexDirection: 'column', padding: '60px 20px 24px 20px', alignItems: 'flex-start',
            background: '#0a1017'
          }}>
            <div style={{ color: 'white', fontSize: '1.1rem', fontWeight: 700, marginBottom: '24px' }}>{t.reports}</div>
            
            <div style={{ width: '100%', background: '#131e2c', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', padding: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', fontSize: '0.8rem' }}>
                <span style={{ color: 'var(--text-secondary)' }}>{t.start}</span>
                <span style={{ color: 'white', fontWeight: 600 }}>09:00</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', fontSize: '0.8rem' }}>
                <span style={{ color: 'var(--text-secondary)' }}>{t.total}</span>
                <span style={{ color: 'white', fontWeight: 600 }}>00:00:03</span>
              </div>
              <div style={{ width: '100%', height: '2px', background: 'rgba(255,255,255,0.1)', marginBottom: '16px' }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>Estado</span>
                <span style={{ background: 'rgba(39, 174, 96, 0.2)', color: '#7DFFB0', fontSize: '0.7rem', padding: '4px 8px', borderRadius: '12px', fontWeight: 600 }}>En curso</span>
              </div>
            </div>
          </div>

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
          <div className="caption-bubble" key={currentStep} style={{
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
    </div>
  );
}
