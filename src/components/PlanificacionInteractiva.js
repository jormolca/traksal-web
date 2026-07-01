'use client';
import { useState } from 'react';
import Link from 'next/link';
import PlanificacionMapaPresentacion from './PlanificacionMapaPresentacion';
import PlanificacionRutasPresentacion from './PlanificacionRutasPresentacion';
import PlanificacionUnClicPresentacion from './PlanificacionUnClicPresentacion';

export default function PlanificacionInteractiva({ lang = 'es' }) {
  const [activeTab, setActiveTab] = useState(0);

  const t = {
    es: {
      tag: 'Módulo CRM',
      title1: 'Menos kilómetros,',
      title2: 'más visitas efectivas.',
      subtitle: 'El tiempo de tu equipo de ventas es oro. Visualiza toda tu cartera en el mapa y agrupa a los clientes por cercanía para crear la ruta perfecta.',
      tabs: [
        {
          id: 0,
          title: 'Tus clientes en el Mapa',
          desc: 'Olvida las listas de direcciones interminables. Abre el mapa interactivo y descubre de un vistazo qué clientes y prospectos están en la misma zona.',
          icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
        },
        {
          id: 1,
          title: 'Rutas Inteligentes',
          desc: 'Selecciona los clientes que quieres visitar hoy y Traksal trazará el orden más lógico. Minimiza el tiempo al volante y el gasto en gasolina.',
          icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="5" r="3"></circle><line x1="12" y1="22" x2="12" y2="8"></line><path d="M5 12H2a10 10 0 0 0 20 0h-3"></path></svg>
        },
        {
          id: 2,
          title: 'Planificación de rutas en un clic',
          desc: 'Agrupa a tus clientes en rutas personalizadas (crea, edita o elimina según necesites). Olvídate de programar visitas una a una: planifica una ruta entera de 10 clientes para un día específico al instante. Ideal para repetir tus visitas el próximo mes sin perder tiempo en el calendario.',
          icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line><path d="M9 16l2 2 4-4"></path></svg>
        }
      ],
      cta: 'Empieza a optimizar rutas'
    },
    en: {
      tag: 'CRM Module',
      title1: 'Fewer miles,',
      title2: 'more effective visits.',
      subtitle: 'Your sales team\'s time is money. Visualize your entire portfolio on the map and group clients by proximity to create the perfect route.',
      tabs: [
        {
          id: 0,
          title: 'Your Clients on the Map',
          desc: 'Forget endless lists of addresses. Open the interactive map and discover at a glance which clients and prospects are in the same area.',
          icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
        },
        {
          id: 1,
          title: 'Smart Routes',
          desc: 'Select the clients you want to visit today and Traksal will trace the most logical order. Minimize time behind the wheel and gas expenses.',
          icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="5" r="3"></circle><line x1="12" y1="22" x2="12" y2="8"></line><path d="M5 12H2a10 10 0 0 0 20 0h-3"></path></svg>
        },
        {
          id: 2,
          title: '1-Click Route Planning',
          desc: 'Group your clients into custom routes (create, edit, or delete as needed). Forget scheduling visits one by one: instantly plan an entire route of 10 clients for a specific day. Ideal for repeating your visits next month without wasting time on the calendar.',
          icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line><path d="M9 16l2 2 4-4"></path></svg>
        }
      ],
      cta: 'Start optimizing routes'
    }
  }[lang];

  return (
    <div className="responsive-grid" style={{ position: 'relative' }}>
      
      {/* Text Side (Tabs) */}
      <div style={{ order: 1 }}>
                <span className="section-label">{t.tag}</span>
        <h1 style={{ marginBottom: '24px', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', lineHeight: 1.1 }}>
          {t.title1} <br />
          <span className="gradient-text">{t.title2}</span>
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '40px', maxWidth: '500px', lineHeight: 1.6 }}>
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
                background: activeTab === tab.id ? (tab.id === 0 ? 'rgba(194, 158, 94, 0.2)' : tab.id === 1 ? 'rgba(162, 217, 243, 0.2)' : 'rgba(235, 153, 255, 0.2)') : 'rgba(255,255,255,0.05)', 
                color: activeTab === tab.id ? (tab.id === 0 ? 'var(--accent)' : tab.id === 1 ? 'var(--secondary)' : '#EB99FF') : 'var(--text-muted)'
              }}>
                {tab.icon}
              </div>
              <div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '4px', color: activeTab === tab.id ? 'white' : 'var(--text-primary)', transition: 'all 0.3s ease' }}>{tab.title}</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', margin: 0 }}>{tab.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '40px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <Link href={lang === 'es' ? '/#contacto' : '/en#contact'} className="btn btn-primary btn-lg">
            {t.cta}
          </Link>
        </div>
      </div>

      {/* Visual Side (Dynamic Presentation) */}
      <div style={{ order: 2, display: 'flex', justifyContent: 'center', position: 'sticky', top: '140px', alignSelf: 'start', perspective: '1000px' }}>
         <div style={{ width: '100%', maxWidth: '650px', position: 'relative' }}>
           
           {/* Tab 0: Clientes en el Mapa */}
           <div style={{ 
              position: activeTab === 0 ? 'relative' : 'absolute',
              top: 0, left: 0, width: '100%',
              opacity: activeTab === 0 ? 1 : 0,
              transform: activeTab === 0 ? 'rotateY(0deg)' : 'rotateY(10deg)',
              pointerEvents: activeTab === 0 ? 'auto' : 'none',
              transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
              zIndex: activeTab === 0 ? 10 : 1
           }}>
             <PlanificacionMapaPresentacion lang={lang} />
           </div>

           {/* Tab 1: Rutas Inteligentes */}
           <div style={{ 
              position: activeTab === 1 ? 'relative' : 'absolute',
              top: 0, left: 0, width: '100%',
              opacity: activeTab === 1 ? 1 : 0,
              transform: activeTab === 1 ? 'rotateY(0deg)' : 'rotateY(10deg)',
              pointerEvents: activeTab === 1 ? 'auto' : 'none',
              transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
              zIndex: activeTab === 1 ? 10 : 1
           }}>
             <PlanificacionRutasPresentacion lang={lang} />
           </div>

           {/* Tab 2: Planificación Un Clic */}
           <div style={{ 
              position: activeTab === 2 ? 'relative' : 'absolute',
              top: 0, left: 0, width: '100%',
              opacity: activeTab === 2 ? 1 : 0,
              transform: activeTab === 2 ? 'rotateY(0deg)' : 'rotateY(10deg)',
              pointerEvents: activeTab === 2 ? 'auto' : 'none',
              transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
              zIndex: activeTab === 2 ? 10 : 1
           }}>
             <PlanificacionUnClicPresentacion lang={lang} />
           </div>

         </div>
      </div>

    </div>
  );
}
