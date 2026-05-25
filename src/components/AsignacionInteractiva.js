'use client';
import { useState } from 'react';
import Link from 'next/link';
import AsignacionClientesPresentacion from './AsignacionClientesPresentacion';
import AsignacionExcelPresentacion from './AsignacionExcelPresentacion';
import AsignacionListaPresentacion from './AsignacionListaPresentacion';

export default function AsignacionInteractiva({ lang = 'es' }) {
  const [activeTab, setActiveTab] = useState(0);

  const t = {
    es: {
      tag: 'Gestión de Carteras',
      title1: 'Asignación de clientes',
      title2: 'por áreas geográficas.',
      subtitle: 'Elige el método que mejor se adapte a tu operativa. Desde dibujar en un mapa hasta importar un Excel, asignar carteras a tus comerciales nunca fue tan rápido.',
      tabs: [
        {
          id: 0,
          title: 'Selección Múltiple Visual',
          desc: 'Dibuja un polígono sobre el mapa interactivo para seleccionar decenas de clientes de un barrio o provincia y asignarlos en 1 clic.',
          icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="3 11 22 2 13 21 11 13 3 11"></polygon></svg>
        },
        {
          id: 1,
          title: 'Asignación Masiva',
          desc: 'Importa un archivo Excel con las asociaciones entre códigos de cliente y el ID del comercial para actualizar toda tu base de datos al instante.',
          icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line></svg>
        },
        {
          id: 2,
          title: 'Asignación Individual',
          desc: 'Busca clientes concretos en el listado y asígnales un comercial rápidamente desde el panel de administración.',
          icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
        }
      ],
      cta: 'Empieza gratis ahora'
    },
    en: {
      tag: 'Territory Management',
      title1: 'Client assignment',
      title2: 'by geographic areas.',
      subtitle: 'Choose the method that best fits your operations. From drawing on a map to importing an Excel file, assigning portfolios to your reps has never been faster.',
      tabs: [
        {
          id: 0,
          title: 'Visual Multiple Selection',
          desc: 'Draw a polygon on the interactive map to select dozens of clients from a neighbourhood or province and assign them in 1 click.',
          icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="3 11 22 2 13 21 11 13 3 11"></polygon></svg>
        },
        {
          id: 1,
          title: 'Bulk Assignment',
          desc: 'Import an Excel file with the associations between client codes and the rep ID to update your entire database instantly.',
          icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line></svg>
        },
        {
          id: 2,
          title: 'Individual Assignment',
          desc: 'Search for specific clients in the list and quickly assign them a sales rep from the administration panel.',
          icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
        }
      ],
      cta: 'Start for free now'
    }
  }[lang];

  return (
    <div className="responsive-grid" style={{ position: 'relative' }}>
      
      {/* Text Side (Tabs) */}
      <div style={{ order: 1 }}>
        <span className="section-label">{t.tag}</span>
        <h1 style={{ marginBottom: '24px', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)' }}>
          {t.title1} <br />
          <span className="gradient-text">{t.title2}</span>
        </h1>
        <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', marginBottom: '40px', maxWidth: '500px' }}>
          {t.subtitle}
        </p>
        
        <div style={{ display: 'grid', gap: '16px' }}>
          {t.tabs.map((tab) => (
            <div 
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{ 
                display: 'flex', gap: '16px', alignItems: 'flex-start',
                padding: '16px', borderRadius: '12px',
                cursor: 'pointer', transition: 'all 0.3s ease',
                background: activeTab === tab.id ? 'rgba(255,255,255,0.05)' : 'transparent',
                border: `1px solid ${activeTab === tab.id ? 'rgba(255,255,255,0.1)' : 'transparent'}`
              }}
              className={activeTab !== tab.id ? "hover-bg-subtle" : ""}
            >
              <div style={{ 
                width: '40px', height: '40px', borderRadius: '10px', 
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                transition: 'all 0.3s ease',
                background: activeTab === tab.id ? (tab.id === 0 ? 'rgba(194, 158, 94, 0.2)' : tab.id === 1 ? 'rgba(39, 174, 96, 0.2)' : 'rgba(162, 217, 243, 0.2)') : 'rgba(255,255,255,0.05)', 
                color: activeTab === tab.id ? (tab.id === 0 ? 'var(--accent)' : tab.id === 1 ? '#27ae60' : 'var(--secondary)') : 'var(--text-muted)'
              }}>
                {tab.icon}
              </div>
              <div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '6px', color: activeTab === tab.id ? 'white' : 'var(--text-secondary)', transition: 'color 0.3s ease' }}>
                  {tab.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: activeTab === tab.id ? 'var(--text-secondary)' : 'var(--text-muted)', margin: 0, transition: 'color 0.3s ease', lineHeight: 1.4 }}>
                  {tab.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '48px', paddingLeft: '16px' }}>
          <Link href={lang === 'en' ? "/en/#contact" : "/#contacto"} className="btn btn-primary btn-lg">
            {t.cta}
          </Link>
        </div>
      </div>

      {/* Visual Side */}
      <div style={{ order: 2, display: 'flex', justifyContent: 'center', position: 'sticky', top: '140px', alignSelf: 'start' }}>
        <div style={{ position: 'relative', width: '100%' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', opacity: activeTab === 0 ? 1 : 0, visibility: activeTab === 0 ? 'visible' : 'hidden', transition: 'all 0.4s ease' }}>
            {activeTab === 0 && <AsignacionClientesPresentacion lang={lang} />}
          </div>
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', opacity: activeTab === 1 ? 1 : 0, visibility: activeTab === 1 ? 'visible' : 'hidden', transition: 'all 0.4s ease' }}>
            {activeTab === 1 && <AsignacionExcelPresentacion lang={lang} />}
          </div>
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', opacity: activeTab === 2 ? 1 : 0, visibility: activeTab === 2 ? 'visible' : 'hidden', transition: 'all 0.4s ease' }}>
            {activeTab === 2 && <AsignacionListaPresentacion lang={lang} />}
          </div>
          
          {/* Invisible placeholder to keep the height since the others are absolute */}
          <div style={{ opacity: 0, pointerEvents: 'none' }}>
             <AsignacionClientesPresentacion lang={lang} />
          </div>
        </div>
      </div>

    </div>
  );
}
