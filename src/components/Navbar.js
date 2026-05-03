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
        >
          <div style={{ width: '24px', height: '2px', background: 'white', marginBottom: menuOpen ? '0' : '6px', transform: menuOpen ? 'rotate(45deg) translateY(0)' : 'none', transition: '0.3s' }} />
          <div style={{ width: '24px', height: '2px', background: 'white', marginBottom: '6px', opacity: menuOpen ? 0 : 1, transition: '0.3s' }} />
          <div style={{ width: '24px', height: '2px', background: 'white', transform: menuOpen ? 'rotate(-45deg) translateY(-2px)' : 'none', transition: '0.3s' }} />
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`mobile-overlay ${menuOpen ? 'open' : ''}`}>
          <div style={{ 
            width: '100%', 
            maxWidth: '400px',
            display: 'flex', 
            flexDirection: 'column', 
            gap: '20px', 
            textAlign: 'center', 
            padding: '40px 24px' 
          }}>
            <div style={{ marginBottom: '20px' }}>
              <Image src="/tkl-logo.png" alt="Traksal" width={120} height={34} style={{ objectFit: 'contain', mixBlendMode: 'lighten', margin: '0 auto' }} />
            </div>
            
            <a href={`${base}/#caracteristicas`} onClick={closeMenu} style={{ fontSize: '1.2rem', fontWeight: 600, color: 'white' }}>{t.features}</a>
            <a href={`${base}/#precios`} onClick={closeMenu} style={{ fontSize: '1.2rem', fontWeight: 600, color: 'white' }}>{t.pricing}</a>
            <a href={`${base}/#contacto`} onClick={closeMenu} style={{ fontSize: '1.2rem', fontWeight: 600, color: 'white' }}>{t.contact}</a>
            
            <div style={{ height: '1px', background: 'rgba(255,255,255,0.1)', margin: '10px 0' }} />
            
            <a href="https://app.traksal.com" onClick={closeMenu} className="btn btn-primary btn-lg" style={{ width: '100%', justifyContent: 'center' }}>
              {t.access}
            </a>
            
            <Link href={otherLang.href} onClick={closeMenu} style={{ color: 'var(--secondary)', fontWeight: 600, fontSize: '0.9rem', marginTop: '10px' }}>
              Switch to {otherLang.label}
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .nav-link {
          color: rgba(255,255,255,0.75);
          font-size: 0.9rem;
          font-weight: 500;
          transition: color 0.2s;
        }
        .nav-link:hover { color: white; }
        
        .lang-selector {
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--text-muted);
          padding: 6px 10px;
          border-radius: 8px;
          border: 1px solid var(--border);
          transition: all 0.2s;
        }
        .lang-selector:hover {
          color: var(--secondary);
          border-color: var(--secondary);
        }

        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          padding: 8px;
          cursor: pointer;
          position: relative;
          z-index: 1100;
          width: 44px;
          height: 44px;
        }

        .mobile-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: #0F1A2A; /* Solid corporate color */
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          opacity: 0;
          visibility: hidden;
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease;
          transform: translateY(-20px);
          z-index: 1050;
        }

        .mobile-overlay.open {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        @media (max-width: 768px) {
          .mobile-menu-btn { display: flex; flex-direction: column; justify-content: center; align-items: center; }
          .hide-mobile { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
