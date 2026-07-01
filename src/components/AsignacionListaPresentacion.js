'use client';

export default function AsignacionListaPresentacion({ lang = 'es' }) {
  const t = {
    es: {
      client: 'CLIENTE',
      address: 'DIRECCIÓN',
      rep: 'COMERCIAL',
      save: 'Guardar Cambios'
    },
    en: {
      client: 'CLIENT',
      address: 'ADDRESS',
      rep: 'SALES REP',
      save: 'Save Changes'
    }
  }[lang];

  const rows = [
    { name: 'Estanco El Carmen', address: 'C/ Mayor 12, Madrid', rep: 'Laura M.' },
    { name: 'Papelería Central', address: 'Av. Libertad 45, BCN', rep: 'Carlos R.' },
    { name: 'Kiosco Sol', address: 'Plaza España 3, Valencia', rep: 'David J.' },
    { name: 'Tabacos Sur', address: 'C/ Granada 8, Sevilla', rep: '-- Asignar --', isUnassigned: true },
    { name: 'Librería Norte', address: 'Paseo Marítimo 2, Bilbao', rep: 'Laura M.' },
  ];

  return (
    <div className="demo-wrapper" style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', minHeight: '400px' }}>
      
      {/* Glow */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(194, 158, 94, 0.15) 0%, transparent 70%)',
        zIndex: 0, pointerEvents: 'none'
      }} />

      {/* Mac/Browser Frame */}
      <div style={{
        position: 'relative', width: '480px', height: '340px', borderRadius: '12px',
        border: '1px solid rgba(255,255,255,0.1)', background: '#1C2D44',
        boxShadow: '0 30px 60px rgba(0,0,0,0.5)', overflow: 'hidden', zIndex: 1,
        display: 'flex', flexDirection: 'column'
      }}>
        {/* Browser Top Bar */}
        <div style={{ height: '32px', background: '#0F1A2A', display: 'flex', alignItems: 'center', padding: '0 12px', gap: '6px' }}>
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#FF5F56' }} />
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#FFBD2E' }} />
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27C93F' }} />
          <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '2px 160px', borderRadius: '4px', fontSize: '0.6rem', color: 'rgba(255,255,255,0.3)' }}>
              app.traksal.com
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div style={{ flex: 1, background: '#162539', display: 'flex', flexDirection: 'column', padding: '20px' }}>
          
          {/* Table Header */}
          <div style={{ display: 'flex', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '12px', marginBottom: '12px' }}>
            <div style={{ flex: 2, fontSize: '0.65rem', color: 'var(--text-secondary)', fontWeight: 600, letterSpacing: '0.5px' }}>{t.client}</div>
            <div style={{ flex: 2, fontSize: '0.65rem', color: 'var(--text-secondary)', fontWeight: 600, letterSpacing: '0.5px' }}>{t.address}</div>
            <div style={{ flex: 1.5, fontSize: '0.65rem', color: 'var(--text-secondary)', fontWeight: 600, letterSpacing: '0.5px' }}>{t.rep}</div>
          </div>

          {/* Table Rows */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
            {rows.map((row, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', padding: '10px', background: 'rgba(255,255,255,0.02)', borderRadius: '6px', transition: 'background 0.2s', cursor: 'default' }} className="hover-bg-subtle">
                <div style={{ flex: 2, fontSize: '0.8rem', color: 'white', fontWeight: 500, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', paddingRight: '8px' }}>
                  {row.name}
                </div>
                <div style={{ flex: 2, fontSize: '0.75rem', color: 'var(--text-secondary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', paddingRight: '8px' }}>
                  {row.address}
                </div>
                <div style={{ flex: 1.5 }}>
                  <div style={{
                    background: row.isUnassigned ? 'rgba(194, 158, 94, 0.1)' : 'rgba(162, 217, 243, 0.1)',
                    border: `1px solid ${row.isUnassigned ? 'var(--accent)' : 'rgba(162, 217, 243, 0.3)'}`,
                    color: row.isUnassigned ? 'var(--accent)' : 'var(--secondary)',
                    padding: '4px 8px', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 600,
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    cursor: 'pointer'
                  }}>
                    {row.rep}
                    <span style={{ fontSize: '8px', opacity: 0.7 }}>▼</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Save Button */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '16px', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            <button style={{ background: 'var(--accent)', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '6px', fontSize: '0.8rem', fontWeight: 600, cursor: 'pointer' }}>
              {t.save}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
