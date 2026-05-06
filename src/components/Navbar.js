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
            padding: '8px',
            cursor: 'pointer',
            position: 'relative',
            zIndex: 3000, /* Higher than overlay */
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '44px',
            height: '44px'
          }}
        >
          {menuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="6" width="18" height="2" rx="1" fill="white" />
              <rect x="3" y="11" width="18" height="2" rx="1" fill="white" />
              <rect x="3" y="16" width="18" height="2" rx="1" fill="white" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay - OUTSIDE of container for total control */}
      <div className={`mobile-overlay ${menuOpen ? 'open' : ''}`} style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: '#0B121E', /* Solid dark blue */
        zIndex: 2500, /* Between container and button */
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: menuOpen ? 1 : 0,
        visibility: menuOpen ? 'visible' : 'hidden',
        transition: 'opacity 0.3s ease-in-out'
      }}>
        <div style={{ 
          width: '100%', 
          maxWidth: '320px',
          display: 'flex', 
          flexDirection: 'column', 
          gap: '32px', 
          textAlign: 'center', 
          padding: '20px' 
        }}>
          <div style={{ marginBottom: '20px' }}>
            <Image src="/tkl-logo.png" alt="Traksal" width={150} height={45} style={{ objectFit: 'contain', mixBlendMode: 'lighten', margin: '0 auto' }} />
          </div>
          
          <a href={`${base}/#caracteristicas`} onClick={closeMenu} className="mobile-link" style={{ fontSize: '1.5rem', textDecoration: 'none' }}>{t.features}</a>
          <a href={`${base}/#precios`} onClick={closeMenu} className="mobile-link" style={{ fontSize: '1.5rem', textDecoration: 'none' }}>{t.pricing}</a>
          <a href={`${base}/#contacto`} onClick={closeMenu} className="mobile-link" style={{ fontSize: '1.5rem', textDecoration: 'none' }}>{t.contact}</a>
          
          <div style={{ height: '1px', background: 'rgba(162,217,243,0.1)', margin: '10px 0' }} />
          
          <a href="https://app.traksal.com" onClick={closeMenu} className="btn btn-primary btn-lg" style={{ width: '100%', justifyContent: 'center', fontSize: '1.1rem', padding: '16px' }}>
            {t.access}
          </a>
          
          <Link href={otherLang.href} onClick={closeMenu} style={{ color: 'var(--secondary)', fontWeight: 600, fontSize: '1rem', textDecoration: 'none' }}>
            {otherLang.label}
          </Link>
        </div>
      </div>
    </nav>
  );
}
