'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar({ lang = 'es' }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const t = {
    es: { features: 'Características', pricing: 'Precios', contact: 'Contacto', access: 'Acceder', free: 'Gratis' },
    en: { features: 'Features', pricing: 'Pricing', contact: 'Contact', access: 'Sign In', free: 'Free' }
  }[lang];

  const base = lang === 'en' ? '/en' : '';
  const otherLang = lang === 'es' ? { href: '/en', label: 'EN' } : { href: '/', label: 'ES' };

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      height: 'var(--nav-height)',
      background: 'rgba(15, 26, 42, 0.9)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(162,217,243,0.1)',
      display: 'flex', alignItems: 'center'
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
        {/* Logo */}
        <Link href={base || '/'} onClick={closeMenu} style={{ display: 'flex', alignItems: 'center', position: 'relative', zIndex: 1001 }}>
          <Image src="/tkl-logo.png" alt="Traksal" width={140} height={40} style={{ objectFit: 'contain', mixBlendMode: 'lighten' }} priority />
        </Link>

        {/* Desktop Nav */}
        <div className="hide-mobile" style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          <a href={`${base}/#caracteristicas`} className="nav-link">{t.features}</a>
          <a href={`${base}/#precios`} className="nav-link">{t.pricing}</a>
          <a href={`${base}/#contacto`} className="nav-link">{t.contact}</a>
        </div>

        {/* Right Actions (Desktop) */}
        <div className="hide-mobile" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Link href={otherLang.href} className="lang-selector">
            {otherLang.label}
          </Link>
          <a href="https://app.traksal.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
            {t.access} →
          </a>
        </div>

        {/* Hamburger Toggle (Mobile Only) */}
        <button 
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
          style={{
            background: 'none',
            border: 'none',
            padding: '10px',
            cursor: 'pointer',
            position: 'relative',
            zIndex: 1100,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect 
              x="3" y="6" width="18" height="2" rx="1" fill="white" 
              style={{ 
                transform: menuOpen ? 'rotate(45deg) translate(5px, -4px)' : 'none', 
                transformOrigin: 'center',
                transition: '0.3s' 
              }} 
            />
            <rect 
              x="3" y="11" width="18" height="2" rx="1" fill="white" 
              style={{ 
                opacity: menuOpen ? 0 : 1, 
                transition: '0.2s' 
              }} 
            />
            <rect 
              x="3" y="16" width="18" height="2" rx="1" fill="white" 
              style={{ 
                transform: menuOpen ? 'rotate(-45deg) translate(5px, 4px)' : 'none', 
                transformOrigin: 'center',
                transition: '0.3s' 
              }} 
            />
          </svg>
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`mobile-overlay ${menuOpen ? 'open' : ''}`} style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: '#0F1A2A',
          zIndex: 1050,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: menuOpen ? 1 : 0,
          visibility: menuOpen ? 'visible' : 'hidden',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          transform: menuOpen ? 'translateY(0)' : 'translateY(-20px)'
        }}>
          <div style={{ 
            width: '100%', 
            maxWidth: '320px',
            display: 'flex', 
            flexDirection: 'column', 
            gap: '28px', 
            textAlign: 'center', 
            padding: '40px 24px' 
          }}>
            <div style={{ marginBottom: '20px' }}>
              <Image src="/tkl-logo.png" alt="Traksal" width={140} height={40} style={{ objectFit: 'contain', mixBlendMode: 'lighten', margin: '0 auto' }} />
            </div>
            
            <a href={`${base}/#caracteristicas`} onClick={closeMenu} className="mobile-link">{t.features}</a>
            <a href={`${base}/#precios`} onClick={closeMenu} className="mobile-link">{t.pricing}</a>
            <a href={`${base}/#contacto`} onClick={closeMenu} className="mobile-link">{t.contact}</a>
            
            <div style={{ height: '1px', background: 'rgba(162,217,243,0.15)', margin: '10px 0' }} />
            
            <a href="https://app.traksal.com" onClick={closeMenu} className="btn btn-primary btn-lg" style={{ width: '100%', justifyContent: 'center', fontSize: '1.1rem' }}>
              {t.access}
            </a>
            
            <Link href={otherLang.href} onClick={closeMenu} style={{ color: 'var(--secondary)', fontWeight: 600, fontSize: '1rem', marginTop: '10px' }}>
              Switch to {otherLang.label}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
