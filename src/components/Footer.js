'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer({ lang = 'es' }) {
  const t = {
    es: {
      tagline: 'El software que mueve a tu equipo de ventas.',
      modules: 'Módulos', fichaje: 'Fichaje Digital', crm: 'CRM Comercial', catalog: 'Catálogo Interactivo', expenses: 'Nota de Gastos',
      company: 'Empresa', about: 'Sobre Traksal', contact: 'Contacto', privacy: 'Política de Privacidad', terms: 'Términos de Uso',
      access: 'Acceder a la App →',
      copy: `© ${new Date().getFullYear()} Traksal. Todos los derechos reservados.`
    },
    en: {
      tagline: 'The software that moves your sales team.',
      modules: 'Modules', fichaje: 'Digital Clock-In', crm: 'Sales CRM', catalog: 'Interactive Catalog', expenses: 'Expense Reports',
      company: 'Company', about: 'About Traksal', contact: 'Contact', privacy: 'Privacy Policy', terms: 'Terms of Use',
      access: 'Go to App →',
      copy: `© ${new Date().getFullYear()} Traksal. All rights reserved.`
    }
  }[lang];

  return (
    <footer style={{ background: 'rgba(11,19,31,1)', borderTop: '1px solid var(--border)', paddingTop: '64px', paddingBottom: '32px' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '48px', marginBottom: '48px' }}>
          {/* Brand */}
          <div>
            <Image src="/logo.svg" alt="Traksal" width={150} height={51} style={{ objectFit: 'contain', marginBottom: '16px' }} />
            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', maxWidth: '300px', marginTop: '16px' }}>{t.tagline}</p>
            <a href="https://app.traksal.com" target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginTop: '24px', padding: '12px 24px', background: 'var(--accent)', color: 'white', borderRadius: '10px', fontSize: '0.9rem', fontWeight: 600, transition: 'all 0.2s' }}
              onMouseOver={e => e.currentTarget.style.background = 'var(--accent-dark)'}
              onMouseOut={e => e.currentTarget.style.background = 'var(--accent)'}>
              {t.access}
            </a>
          </div>

          {/* Modules */}
          <div>
            <h4 style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', marginBottom: '20px' }}>{t.modules}</h4>
            {[{ label: t.fichaje, href: '/fichaje-diario' }, { label: t.crm }, { label: t.catalog }, { label: t.expenses }].map(item => (
              <div key={item.label} style={{ marginBottom: '12px' }}>
                {item.href ? (
                  <Link href={item.href} style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', transition: 'color 0.2s' }}
                    onMouseOver={e => e.target.style.color = 'white'} onMouseOut={e => e.target.style.color = 'var(--text-secondary)'}>
                    {item.label}
                  </Link>
                ) : (
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', cursor: 'default' }}>{item.label}</span>
                )}
              </div>
            ))}
          </div>

          {/* Company */}
          <div>
            <h4 style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', marginBottom: '20px' }}>{t.company}</h4>
            {[{ label: t.about }, { label: t.contact, href: '#contacto' }, { label: t.privacy }, { label: t.terms }].map(item => (
              <div key={item.label} style={{ marginBottom: '12px' }}>
                {item.href ? (
                  <a href={item.href} style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', transition: 'color 0.2s' }}
                    onMouseOver={e => e.target.style.color = 'white'} onMouseOut={e => e.target.style.color = 'var(--text-secondary)'}>
                    {item.label}
                  </a>
                ) : (
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', cursor: 'default' }}>{item.label}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--border)', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', margin: 0 }}>{t.copy}</p>
          <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', margin: 0 }}>
            Made with ❤️ for sales teams
          </p>
        </div>
      </div>
    </footer>
  );
}
