'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function InformesPresentacion({ lang = 'es' }) {
  const t = {
    es: {
      date1: '30/04/2026',
      date2: '29/04/2026',
      dateLabel: 'FECHA',
      records: 'REGISTROS',
      start: 'INICIO',
      break: 'PAUSA',
      resume: 'INICIO',
      end: 'PAUSA',
      startTag: '(Entrada)',
      breakTag: '(Pausa)',
      resumeTag: '(Reanudado)',
      endTag: '(Salida)',
      total: 'TOTAL EFECTIVO',
      status: 'ESTADO',
      completed: 'Completado',
      logout: 'Salir'
    },
    en: {
      date1: '04/30/2026',
      date2: '04/29/2026',
      dateLabel: 'DATE',
      records: 'LOGS',
      start: 'START',
      break: 'BREAK',
      resume: 'RESUME',
      end: 'END',
      startTag: '(Clock In)',
      breakTag: '(Break)',
      resumeTag: '(Resumed)',
      endTag: '(Clock Out)',
      total: 'TOTAL HOURS',
      status: 'STATUS',
      completed: 'Completed',
      logout: 'Logout'
    }
  }[lang];

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
        background: '#0a1017', /* Darker background for the app inside */
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

        {/* App Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '40px 16px 16px 16px',
          background: '#131e2c',
          borderBottom: '1px solid rgba(255,255,255,0.05)'
        }}>
          <Image src="/logo.svg" alt="Logo" width={60} height={20} />
          <div style={{
            background: 'var(--primary)',
            padding: '4px 8px',
            borderRadius: '20px',
            fontSize: '0.65rem',
            color: 'var(--text-secondary)',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            border: '1px solid rgba(255,255,255,0.1)'
          }}>
            <div style={{ width: '14px', height: '14px', background: 'var(--secondary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', fontWeight: 'bold', fontSize: '8px' }}>D</div>
            <span>David J.</span>
          </div>
          <button style={{
            background: 'transparent',
            border: '1px solid rgba(255,255,255,0.2)',
            color: 'var(--text-secondary)',
            fontSize: '0.65rem',
            padding: '4px 8px',
            borderRadius: '6px',
            display: 'flex',
            alignItems: 'center',
            gap: '4px'
          }}>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
            {t.logout}
          </button>
        </div>

        {/* App Content */}
        <div style={{ padding: '16px', flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          
          {/* Record Card 1 */}
          <div style={{
            background: '#131e2c',
            borderRadius: '12px',
            border: '1px solid rgba(255,255,255,0.05)',
            overflow: 'hidden'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 16px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', fontWeight: 600 }}>{t.dateLabel}</span>
              <span style={{ fontSize: '0.8rem', color: 'white', fontWeight: 600 }}>{t.date1}</span>
            </div>
            <div style={{ padding: '16px', display: 'flex', gap: '16px' }}>
              <div style={{ width: '60px', fontSize: '0.65rem', color: 'var(--text-secondary)', fontWeight: 600, marginTop: '2px' }}>{t.records}</div>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>{t.start}</span>
                  <span style={{ color: 'white', fontWeight: 600 }}>09:00</span>
                  <span style={{ color: 'var(--text-muted)' }}>{t.startTag}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>{t.break}</span>
                  <span style={{ color: 'white', fontWeight: 600 }}>14:00</span>
                  <span style={{ color: 'var(--text-muted)' }}>{t.breakTag}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>{t.resume}</span>
                  <span style={{ color: 'white', fontWeight: 600 }}>17:00</span>
                  <span style={{ color: 'var(--text-muted)' }}>{t.resumeTag}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>{t.end}</span>
                  <span style={{ color: 'white', fontWeight: 600 }}>20:00</span>
                  <span style={{ color: 'var(--text-muted)' }}>{t.endTag}</span>
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 16px', borderTop: '1px solid rgba(255,255,255,0.05)', background: 'rgba(0,0,0,0.2)' }}>
              <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', fontWeight: 600 }}>{t.total}</span>
              <span style={{ fontSize: '0.85rem', color: 'white', fontWeight: 700 }}>8h 0m</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 16px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
              <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', fontWeight: 600 }}>{t.status}</span>
              <span style={{ fontSize: '0.7rem', background: 'rgba(39,174,96,0.15)', color: '#7DFFB0', padding: '4px 10px', borderRadius: '12px', fontWeight: 600 }}>{t.completed}</span>
            </div>
          </div>

          {/* Record Card 2 (Partially visible) */}
          <div style={{
            background: '#131e2c',
            borderRadius: '12px',
            border: '1px solid rgba(255,255,255,0.05)',
            overflow: 'hidden'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 16px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', fontWeight: 600 }}>{t.dateLabel}</span>
              <span style={{ fontSize: '0.8rem', color: 'white', fontWeight: 600 }}>{t.date2}</span>
            </div>
            <div style={{ padding: '16px', display: 'flex', gap: '16px' }}>
              <div style={{ width: '60px', fontSize: '0.65rem', color: 'var(--text-secondary)', fontWeight: 600, marginTop: '2px' }}>{t.records}</div>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>{t.start}</span>
                  <span style={{ color: 'white', fontWeight: 600 }}>09:15</span>
                  <span style={{ color: 'var(--text-muted)' }}>{t.startTag}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>{t.break}</span>
                  <span style={{ color: 'white', fontWeight: 600 }}>14:30</span>
                  <span style={{ color: 'var(--text-muted)' }}>{t.breakTag}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>{t.resume}</span>
                  <span style={{ color: 'white', fontWeight: 600 }}>17:15</span>
                  <span style={{ color: 'var(--text-muted)' }}>{t.resumeTag}</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
