'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar({ lang = 'es' }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const t = {
    es: { features: 'Características', pricing: 'Precios', contact: 'Contacto', access: 'Acceder →', free: 'Gratis' },
    en: { features: 'Features', pricing: 'Pricing', contact: 'Contact', access: 'Sign In →', free: 'Free' }
  }[lang];

  const base = lang === 'en' ? '/en' : '';
  const otherLang = lang === 'es' ? { href: '/en', label: 'EN' } : { href: '/', label: 'ES' };

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      height: 'var(--nav-height)',
      background: 'rgba(15, 26, 42, 0.85)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(162,217,243,0.08)',
      display: 'flex', alignItems: 'center'
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
        {/* Logo */}
        <Link href={base || '/'} style={{ display: 'flex', alignItems: 'center' }}>
          <Image src="/tkl-logo.png" alt="Traksal Sales Drive" width={160} height={44} style={{ objectFit: 'contain', mixBlendMode: 'lighten' }} priority />
        </Link>

        {/* Desktop Nav */}
        <div className="hide-mobile" style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          <a href={`${base}/#caracteristicas`} style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.9rem', fontWeight: 500, transition: 'color 0.2s' }}
            onMouseOver={e => e.target.style.color = 'white'} onMouseOut={e => e.target.style.color = 'rgba(255,255,255,0.75)'}>
            {t.features}
          </a>
          <a href={`${base}/#precios`} style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.9rem', fontWeight: 500, transition: 'color 0.2s' }}
            onMouseOver={e => e.target.style.color = 'white'} onMouseOut={e => e.target.style.color = 'rgba(255,255,255,0.75)'}>
            {t.pricing}
          </a>
          <a href={`${base}/#contacto`} style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.9rem', fontWeight: 500, transition: 'color 0.2s' }}
            onMouseOver={e => e.target.style.color = 'white'} onMouseOut={e => e.target.style.color = 'rgba(255,255,255,0.75)'}>
            {t.contact}
          </a>
        </div>

        {/* Right Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Link href={otherLang.href} style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', padding: '6px 10px', borderRadius: '8px', border: '1px solid var(--border)', transition: 'all 0.2s' }}
            onMouseOver={e => { e.currentTarget.style.color = 'var(--secondary)'; e.currentTarget.style.borderColor = 'var(--secondary)'; }}
            onMouseOut={e => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.borderColor = 'var(--border)'; }}>
            {otherLang.label}
          </Link>
          <a href="https://app.traksal.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
            {t.access}
          </a>
        </div>
      </div>
    </nav>
  );
}
