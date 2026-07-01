import { useState, useEffect } from 'react';

const delay = (ms) => new Promise(res => setTimeout(res, ms));

export default function PlanificacionUnClicPresentacion({ lang = 'es' }) {
  const [selectedClients, setSelectedClients] = useState([]);
  const [showManagerModal, setShowManagerModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [routeClientsCount, setRouteClientsCount] = useState(0);
  const [isScheduled, setIsScheduled] = useState(false);
  
  const [cursorPos, setCursorPos] = useState({ x: 500, y: 400 });
  const [cursorActive, setCursorActive] = useState(false);

  useEffect(() => {
    let isRunning = true;
    
    const runAnimation = async () => {
      while (isRunning) {
        // Reset
        setSelectedClients([]);
        setShowManagerModal(false);
        setShowSuccessModal(false);
        setRouteClientsCount(0);
        setIsScheduled(false);
        setCursorPos({ x: 325, y: 400 });
        await delay(1000);
        if (!isRunning) break;

        // Move to select all
        setCursorPos({ x: 42, y: 240 });
        await delay(800);
        
        // Click select all
        setCursorActive(true);
        await delay(200);
        setCursorActive(false);
        setSelectedClients([1, 2, 3, 4]);
        await delay(1000);
        if (!isRunning) break;

        // Move to routes button
        setCursorPos({ x: 580, y: 140 });
        await delay(800);

        // Click routes button
        setCursorActive(true);
        await delay(200);
        setCursorActive(false);
        setShowManagerModal(true);
        await delay(1500);
        if (!isRunning) break;

        // Move to assign clients button
        setCursorPos({ x: 325, y: 340 });
        await delay(800);

        // Click assign clients
        setCursorActive(true);
        await delay(200);
        setCursorActive(false);
        setShowManagerModal(false);
        setShowSuccessModal(true);
        await delay(1500);
        if (!isRunning) break;

        // Move to accept button
        setCursorPos({ x: 460, y: 280 });
        await delay(800);

        // Click accept
        setCursorActive(true);
        await delay(200);
        setCursorActive(false);
        setShowSuccessModal(false);
        setRouteClientsCount(4);
        setSelectedClients([]);
        await delay(1000);
        if (!isRunning) break;

        // Move to programar button
        setCursorPos({ x: 600, y: 200 });
        await delay(800);

        // Click programar
        setCursorActive(true);
        await delay(200);
        setCursorActive(false);
        setIsScheduled(true);
        
        await delay(3000);
      }
    };

    runAnimation();
    return () => { isRunning = false; };
  }, []);

  const clients = [
    { id: 1, sap: '32813', name: 'TECH SOLUTIONS S.L.', cp: '28013', city: 'MADRID' },
    { id: 2, sap: '47181', name: 'GLOBAL TRADE CORP', cp: '28046', city: 'MADRID' },
    { id: 3, sap: '33956', name: 'INNOVA SYSTEMS', cp: '28009', city: 'MADRID' },
    { id: 4, sap: '47010', name: 'LOGÍSTICA EXPRESS', cp: '28028', city: 'MADRID' }
  ];

  const handleSelectAll = () => {
    if (selectedClients.length === clients.length) {
      setSelectedClients([]);
    } else {
      setSelectedClients(clients.map(c => c.id));
    }
  };

  const handleSelectClient = (id) => {
    if (selectedClients.includes(id)) {
      setSelectedClients(selectedClients.filter(clientId => clientId !== id));
    } else {
      setSelectedClients([...selectedClients, id]);
    }
  };

  const handleAddRoute = () => {
    setShowManagerModal(false);
    setShowSuccessModal(true);
  };

  const handleAcceptSuccess = () => {
    setShowSuccessModal(false);
    setRouteClientsCount(selectedClients.length);
    setSelectedClients([]); // clear selection
  };

  const handleSchedule = () => {
    if (routeClientsCount > 0) {
      setIsScheduled(true);
      setTimeout(() => setIsScheduled(false), 2000);
    }
  };

  const t = {
    es: {
      title: 'PLANIFICACIÓN DE VISITAS',
      subtitle: 'Clientes asignados: 1951',
      tabs: ['Clientes', 'Rutas', 'Vista Mapa'],
      dateLabel: 'Fecha a programar:',
      routesBtn: selectedClients.length > 0 ? `Rutas (${selectedClients.length} sel.)` : 'Rutas',
      savedRoutes: 'MIS RUTAS GUARDADAS',
      routeName: 'Ruta Centro',
      routeDesc: `(${routeClientsCount} clientes asignados)`,
      programBtn: isScheduled ? '¡Programada!' : 'Programar',
      pending: `CLIENTES PENDIENTES DE ENRUTAR (${clients.length})`,
      cols: ['FECHA', 'SAP', 'CLIENTE', 'CÓD. POSTAL', 'PROVINCIA'],
      date: '30/06/2026',
      modalTitle: 'GESTOR INTELIGENTE DE RUTAS',
      modalDesc: 'Crea nuevas rutas comerciales o asigna los clientes seleccionados a una ruta existente.',
      createTitle: 'CREAR NUEVA RUTA',
      createBtn: 'Crear Ruta',
      assignTitle: `ASIGNAR CLIENTES SELECCIONADOS (${selectedClients.length})`,
      assignBtn: `Añadir ${selectedClients.length} clientes a esta ruta`,
      close: 'Cerrar',
      successTitle: 'ÉXITO',
      successDesc: `Se han asignado ${selectedClients.length} clientes a la ruta "Ruta Centro".`,
      accept: 'Aceptar'
    },
    en: {
      title: 'VISIT PLANNING',
      subtitle: 'Assigned clients: 1951',
      tabs: ['Clients', 'Routes', 'Map View'],
      dateLabel: 'Date to schedule:',
      routesBtn: selectedClients.length > 0 ? `Routes (${selectedClients.length} sel.)` : 'Routes',
      savedRoutes: 'MY SAVED ROUTES',
      routeName: 'Central Route',
      routeDesc: `(${routeClientsCount} assigned clients)`,
      programBtn: isScheduled ? 'Scheduled!' : 'Schedule',
      pending: `CLIENTS PENDING ROUTING (${clients.length})`,
      cols: ['DATE', 'SAP', 'CLIENT', 'ZIP', 'PROVINCE'],
      date: '30/06/2026',
      modalTitle: 'SMART ROUTE MANAGER',
      modalDesc: 'Create new commercial routes or assign the selected clients to an existing route.',
      createTitle: 'CREATE NEW ROUTE',
      createBtn: 'Create Route',
      assignTitle: `ASSIGN SELECTED CLIENTS (${selectedClients.length})`,
      assignBtn: `Add ${selectedClients.length} clients to this route`,
      close: 'Close',
      successTitle: 'SUCCESS',
      successDesc: `${selectedClients.length} clients have been assigned to the "Central Route".`,
      accept: 'Accept'
    }
  }[lang];

  return (
    <div style={{
      background: '#0f172a',
      borderRadius: '16px',
      border: '1px solid rgba(162,217,243,0.2)',
      boxShadow: '0 30px 80px rgba(0,0,0,0.5)',
      width: '100%',
      maxWidth: '650px',
      height: '420px',
      overflow: 'hidden',
      fontFamily: 'Inter, sans-serif',
      color: '#e2e8f0',
      margin: '0 auto',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column'
    }}>
      
      {/* Fake Cursor */}
      <div style={{
        position: 'absolute', top: 0, left: 0,
        transform: `translate(${cursorPos.x}px, ${cursorPos.y}px)`,
        transition: 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)',
        zIndex: 9999, pointerEvents: 'none'
      }}>
        {cursorActive && (
          <div style={{
            position: 'absolute', top: -5, left: -5, width: 20, height: 20,
            background: 'rgba(59, 130, 246, 0.4)', borderRadius: '50%',
            animation: 'ping 0.5s ease-out'
          }} />
        )}
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes ping {
          0% { transform: scale(0.5); opacity: 1; }
          100% { transform: scale(2); opacity: 0; }
        }
      `}} />
      
      {/* Header */}
      <div style={{ padding: '20px 24px 0 24px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
          <div style={{ marginTop: '2px', color: '#e2e8f0' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
          </div>
          <div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800, margin: 0, color: '#a2d9f3', letterSpacing: '0.5px' }}>{t.title}</h2>
            <p style={{ fontSize: '0.75rem', color: '#94a3b8', margin: '4px 0 16px 0', fontWeight: 600 }}>{t.subtitle}</p>
          </div>
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: '24px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <div style={{ padding: '8px 4px', fontSize: '0.85rem', color: '#94a3b8', fontWeight: 600 }}>{t.tabs[0]}</div>
          <div style={{ padding: '8px 4px', fontSize: '0.85rem', color: 'white', fontWeight: 700, borderBottom: '2px solid #a2d9f3' }}>{t.tabs[1]}</div>
          <div style={{ padding: '8px 4px', fontSize: '0.85rem', color: '#94a3b8', fontWeight: 600 }}>{t.tabs[2]}</div>
        </div>
      </div>

      {/* Main Content Area */}
      <div style={{ flex: 1, padding: '16px 20px', background: '#151f2e', overflowY: 'auto' }}>
        
        {/* Actions Bar */}
        <div style={{ background: '#1e293b', borderRadius: '8px', padding: '12px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', border: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#e2e8f0' }}>{t.dateLabel}</span>
            <div style={{ background: '#0f172a', padding: '6px 12px', borderRadius: '6px', display: 'flex', alignItems: 'center', gap: '8px', border: '1px solid rgba(255,255,255,0.1)', fontSize: '0.8rem' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
              {t.date}
            </div>
            
            <div 
              onClick={() => { if(selectedClients.length > 0) setShowManagerModal(true) }}
              style={{ 
                background: '#0f172a', padding: '6px 16px', borderRadius: '6px', 
                display: 'flex', alignItems: 'center', gap: '8px', 
                border: '1px solid rgba(255,255,255,0.1)', fontSize: '0.8rem', fontWeight: 600,
                cursor: selectedClients.length > 0 ? 'pointer' : 'default',
                color: selectedClients.length > 0 ? 'white' : '#94a3b8',
                transition: 'all 0.2s',
                boxShadow: selectedClients.length > 0 ? '0 0 0 1px rgba(235, 153, 255, 0.4)' : 'none'
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={selectedClients.length > 0 ? '#EB99FF' : 'currentColor'} strokeWidth="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
              {t.routesBtn}
            </div>
          </div>
        </div>

        {/* Saved Routes */}
        <div style={{ marginBottom: '24px' }}>
          <h3 style={{ fontSize: '0.8rem', fontWeight: 800, color: 'white', marginBottom: '12px', letterSpacing: '0.5px' }}>{t.savedRoutes}</h3>
          <div style={{ background: '#1e293b', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '8px', padding: '12px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
              <span style={{ fontWeight: 700, color: 'white' }}>{t.routeName}</span>
              <span style={{ color: '#64748b' }}>{t.routeDesc}</span>
            </div>
            <button 
              onClick={handleSchedule}
              disabled={routeClientsCount === 0 || isScheduled}
              style={{ 
                background: isScheduled ? '#10b981' : (routeClientsCount > 0 ? '#1e293b' : '#0f172a'), 
                color: isScheduled ? 'white' : (routeClientsCount > 0 ? 'white' : '#64748b'), 
                border: isScheduled ? '1px solid #10b981' : (routeClientsCount > 0 ? '1px solid rgba(255,255,255,0.2)' : '1px solid rgba(255,255,255,0.05)'), 
                padding: '6px 16px', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 700,
                cursor: routeClientsCount > 0 ? 'pointer' : 'default',
                transition: 'all 0.2s',
                boxShadow: routeClientsCount > 0 && !isScheduled ? '0 2px 5px rgba(0,0,0,0.2)' : 'none'
              }}
            >
              {t.programBtn}
            </button>
          </div>
        </div>

        {/* Pending Clients */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
            <span style={{ fontSize: '1rem' }}>📋</span>
            <h3 style={{ fontSize: '0.8rem', fontWeight: 800, color: 'white', margin: 0, letterSpacing: '0.5px' }}>{t.pending}</h3>
          </div>

          <div style={{ border: '1px solid rgba(255,255,255,0.05)', borderRadius: '8px', overflow: 'hidden', fontSize: '0.75rem' }}>
            {/* Table Header */}
            <div style={{ display: 'grid', gridTemplateColumns: '40px 80px 70px 2fr 1fr 1fr', padding: '10px 0', background: 'rgba(255,255,255,0.02)', color: '#94a3b8', fontWeight: 600, borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div 
                  onClick={handleSelectAll}
                  style={{ width: '14px', height: '14px', background: selectedClients.length === clients.length ? 'white' : 'transparent', border: '1px solid white', borderRadius: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
                >
                  {selectedClients.length === clients.length && <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#0f172a" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>}
                </div>
              </div>
              <div>{t.cols[0]}</div>
              <div>{t.cols[1]}</div>
              <div>{t.cols[2]}</div>
              <div>{t.cols[3]}</div>
              <div>{t.cols[4]}</div>
            </div>

            {/* Table Rows */}
            {clients.map(client => (
              <div key={client.id} style={{ display: 'grid', gridTemplateColumns: '40px 80px 70px 2fr 1fr 1fr', padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.03)', alignItems: 'center' }}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <div 
                    onClick={() => handleSelectClient(client.id)}
                    style={{ width: '14px', height: '14px', background: selectedClients.includes(client.id) ? 'white' : 'transparent', border: '1px solid white', borderRadius: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
                  >
                    {selectedClients.includes(client.id) && <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#0f172a" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>}
                  </div>
                </div>
                <div style={{ color: '#cbd5e1' }}>{t.date}</div>
                <div style={{ color: '#cbd5e1' }}>{client.sap}</div>
                <div style={{ fontWeight: 700, color: 'white' }}>{client.name}</div>
                <div style={{ color: '#cbd5e1' }}>{client.cp}</div>
                <div style={{ color: '#cbd5e1' }}>{client.city}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Route Manager Modal */}
      {showManagerModal && (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(15, 23, 42, 0.85)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 50, backdropFilter: 'blur(2px)' }}>
          <div style={{ background: '#151f2e', padding: '24px', borderRadius: '16px', width: '90%', maxWidth: '450px', boxShadow: '0 25px 50px rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)' }}>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#EB99FF" strokeWidth="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                <h3 style={{ margin: 0, fontSize: '1.1rem', color: 'white', fontWeight: 800 }}>{t.modalTitle}</h3>
              </div>
              <div onClick={() => setShowManagerModal(false)} style={{ cursor: 'pointer', color: '#64748b', padding: '4px', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '50%' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </div>
            </div>
            <p style={{ fontSize: '0.8rem', color: '#94a3b8', marginBottom: '20px' }}>{t.modalDesc}</p>

            {/* Create New Route */}
            <div style={{ background: '#1e293b', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '8px', padding: '16px', marginBottom: '16px' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'white', marginBottom: '12px', letterSpacing: '0.5px' }}>{t.createTitle}</div>
              <div style={{ display: 'flex', gap: '12px' }}>
                <input type="text" value={t.routeName} readOnly style={{ flex: 1, background: '#0f172a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '6px', color: 'white', padding: '8px 12px', fontSize: '0.85rem' }} />
                <button style={{ background: '#0f172a', color: 'white', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '6px', padding: '8px 16px', fontSize: '0.85rem', fontWeight: 700 }}>{t.createBtn}</button>
              </div>
            </div>

            {/* Assign Route */}
            <div style={{ background: '#1e293b', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '8px', padding: '16px' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'white', marginBottom: '12px', letterSpacing: '0.5px' }}>{t.assignTitle}</div>
              
              <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
                <div style={{ flex: 1, background: '#0f172a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '6px', color: 'white', padding: '8px 12px', fontSize: '0.85rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span>{t.routeName} (0 {lang === 'es' ? 'clientes' : 'clients'})</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </div>
                <div style={{ width: '36px', height: '36px', background: '#0f172a', border: '1px solid rgba(162,217,243,0.3)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#a2d9f3' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                </div>
                <div style={{ width: '36px', height: '36px', background: '#0f172a', border: '1px solid rgba(239,68,68,0.3)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ef4444' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                </div>
              </div>

              <button 
                onClick={handleAddRoute}
                style={{ width: '100%', background: '#10b981', color: 'white', border: 'none', borderRadius: '6px', padding: '12px', fontSize: '0.9rem', fontWeight: 700, cursor: 'pointer', boxShadow: '0 4px 10px rgba(16,185,129,0.2)' }}
              >
                {t.assignBtn}
              </button>
            </div>

            <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'flex-end' }}>
              <button 
                onClick={() => setShowManagerModal(false)}
                style={{ background: 'transparent', color: '#94a3b8', border: '1px solid rgba(255,255,255,0.1)', padding: '8px 16px', borderRadius: '6px', fontSize: '0.85rem', cursor: 'pointer' }}
              >
                {t.close}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {showSuccessModal && (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(15, 23, 42, 0.85)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 60, backdropFilter: 'blur(2px)' }}>
          <div style={{ background: '#1e293b', padding: '24px', borderRadius: '16px', width: '90%', maxWidth: '350px', boxShadow: '0 25px 50px rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)' }}>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <div style={{ width: '48px', height: '48px', background: '#10b981', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', flexShrink: 0 }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <div>
                <h3 style={{ margin: '0 0 8px 0', fontSize: '1.2rem', color: 'white' }}>{t.successTitle}</h3>
                <p style={{ margin: 0, fontSize: '0.9rem', color: '#94a3b8', lineHeight: 1.5 }}>
                  {t.successDesc}
                </p>
              </div>
            </div>
            <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'flex-end' }}>
              <button 
                onClick={handleAcceptSuccess}
                style={{ background: '#d4af37', color: 'white', border: 'none', padding: '10px 24px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}
              >
                {t.accept}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
