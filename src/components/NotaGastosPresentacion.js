'use client';
import { useState, useEffect } from 'react';

const delay = (ms) => new Promise(res => setTimeout(res, ms));

export default function NotaGastosPresentacion({ lang = 'es' }) {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showExportModal, setShowExportModal] = useState(false);
  const [scanning, setScanning] = useState(false);
  const [aiFilled, setAiFilled] = useState(false);
  const [expenses, setExpenses] = useState([
    { id: 1, type: 'Gasolina', provider: 'Repsol', amount: '45.00' },
    { id: 2, type: 'Parking', provider: 'Saba Estación', amount: '12.50' },
    { id: 3, type: 'Peaje', provider: 'AP-7', amount: '4.80' },
    { id: 4, type: 'Dieta', provider: 'Cafetería Centro', amount: '10.20' },
  ]);
  
  const [cursorPos, setCursorPos] = useState({ x: 300, y: 200 });
  const [cursorActive, setCursorActive] = useState(false);

  useEffect(() => {
    let isRunning = true;
    
    const runAnimation = async () => {
      while (isRunning) {
        // Reset state
        setShowAddModal(false);
        setShowExportModal(false);
        setScanning(false);
        setAiFilled(false);
        setExpenses([
          { id: 1, type: 'Gasolina', provider: 'Repsol', amount: '45.00' },
          { id: 2, type: 'Parking', provider: 'Saba Estación', amount: '12.50' },
          { id: 3, type: 'Peaje', provider: 'AP-7', amount: '4.80' },
          { id: 4, type: 'Dieta', provider: 'Cafetería Centro', amount: '10.20' },
        ]);
        setCursorPos({ x: 300, y: 200 });
        await delay(1000);
        if (!isRunning) break;

        // 1. Move to "Añadir Gasto"
        setCursorPos({ x: 530, y: 35 }); 
        await delay(800);
        
        setCursorActive(true);
        await delay(200);
        setCursorActive(false);
        setShowAddModal(true);
        await delay(1000);
        if (!isRunning) break;

        // 2. Move to Camera Icon
        setCursorPos({ x: 260, y: 155 });
        await delay(800);

        setCursorActive(true);
        await delay(200);
        setCursorActive(false);
        setScanning(true);
        await delay(2000); // Simulate AI processing
        if (!isRunning) break;

        setScanning(false);
        setAiFilled(true);
        await delay(2500); // Let user read the auto-filled fields
        if (!isRunning) break;

        // 3. Move to Guardar Gasto
        setCursorPos({ x: 420, y: 375 });
        await delay(800);

        setCursorActive(true);
        await delay(200);
        setCursorActive(false);
        setShowAddModal(false);
        
        // Add new expense to list
        setExpenses(prev => [...prev, { id: 5, type: 'Comida', provider: 'Restaurante Manolo', amount: '24.50' }]);
        await delay(1000);
        if (!isRunning) break;

        // 4. Move to Exportar Excel
        setCursorPos({ x: 400, y: 35 });
        await delay(800);

        setCursorActive(true);
        await delay(200);
        setCursorActive(false);
        setShowExportModal(true);
        await delay(1500); // Read modal
        if (!isRunning) break;

        // 5. Move to Descargar Excel
        setCursorPos({ x: 420, y: 285 });
        await delay(800);

        setCursorActive(true);
        await delay(200);
        setCursorActive(false);
        setShowExportModal(false);

        await delay(2500); // Wait before looping
      }
    };

    runAnimation();
    return () => { isRunning = false; };
  }, []);

  return (
    <div style={{
      width: '100%',
      maxWidth: '650px',
      margin: '0 auto',
      position: 'relative'
    }}>

      {/* Main App Frame */}
      <div style={{
        position: 'relative', width: '600px', height: '420px', borderRadius: '12px',
        border: '1px solid rgba(255,255,255,0.1)', background: '#0F1A2A',
        boxShadow: '0 40px 80px rgba(0,0,0,0.6)', overflow: 'hidden', zIndex: 1,
        margin: '0 auto', fontFamily: 'Inter, sans-serif'
      }}>
        
        {/* Fake Cursor ping */}
        <div style={{
          position: 'absolute', top: 0, left: 0,
          transform: `translate(${cursorPos.x}px, ${cursorPos.y}px)`,
          transition: 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)',
          zIndex: 9999, pointerEvents: 'none'
        }}>
          {cursorActive && (
            <div style={{
              position: 'absolute', top: -10, left: -10, width: 20, height: 20,
              background: 'rgba(59, 130, 246, 0.4)', borderRadius: '50%',
              animation: 'ping 0.5s ease-out'
            }} />
          )}
        </div>

        {/* Top Header */}
        <div style={{
          padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          borderBottom: '1px solid rgba(255,255,255,0.05)'
        }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
            <div style={{ color: 'white', marginTop: 4 }}>💳</div>
            <div>
              <h2 style={{ margin: 0, color: 'white', fontSize: '1.2rem', fontWeight: 'bold' }}>GESTIÓN DE GASTOS</h2>
              <p style={{ margin: 0, color: '#94a3b8', fontSize: '0.75rem' }}>Registra y gestiona todos tus gastos de trabajo.</p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button style={{ 
              background: 'none', border: '1px solid rgba(255,255,255,0.1)', color: '#cbd5e1', 
              padding: '8px 16px', borderRadius: '6px', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '8px'
            }}>
              📥 Exportar Excel
            </button>
            <button style={{ 
              background: '#C29E5E', border: 'none', color: 'white', fontWeight: 'bold',
              padding: '8px 16px', borderRadius: '6px', fontSize: '0.8rem'
            }}>
              + Añadir ticket
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', padding: '20px', gap: '20px', height: 'calc(100% - 75px)' }}>
          
          {/* Calendar Sidebar */}
          <div style={{ background: '#131e30', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)', padding: '16px' }}>
            <h3 style={{ margin: '0 0 16px 0', color: 'white', fontSize: '0.85rem' }}>CALENDARIO</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'white', marginBottom: '16px' }}>
              <span style={{ fontSize: '0.8rem' }}>{'<'}</span>
              <span style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>JUNIO 2026</span>
              <span style={{ fontSize: '0.8rem', opacity: 0.5 }}>{'>'}</span>
            </div>
            {/* Fake Calendar Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '8px', textAlign: 'center', color: '#94a3b8', fontSize: '0.7rem' }}>
              <div>lu</div><div>ma</div><div>mi</div><div>ju</div><div>vi</div><div>sá</div><div>do</div>
              <div>1</div><div>2</div><div>3</div><div>4</div><div>5</div><div>6</div><div>7</div>
              <div>8</div><div>9</div><div>10</div><div>11</div><div>12</div><div>13</div><div>14</div>
              <div>15</div><div>16</div><div>17</div><div>18</div><div>19</div><div>20</div><div>21</div>
              <div>22</div><div>23</div><div>24</div><div>25</div><div>26</div><div>27</div><div>28</div>
              <div>29</div>
              <div style={{ background: '#C29E5E', color: 'white', borderRadius: '50%', width: 20, height: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }}>30</div>
              <div style={{ opacity: 0.3 }}>1</div><div style={{ opacity: 0.3 }}>2</div><div style={{ opacity: 0.3 }}>3</div><div style={{ opacity: 0.3 }}>4</div><div style={{ opacity: 0.3 }}>5</div>
            </div>
          </div>

          {/* Expenses List */}
          <div style={{ background: '#131e30', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)', padding: '20px' }}>
            <h3 style={{ margin: '0 0 16px 0', color: 'white', fontSize: '0.9rem', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '12px' }}>MARTES, 30 DE JUNIO</h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1fr', color: '#94a3b8', fontSize: '0.7rem', fontWeight: 'bold', paddingBottom: '4px' }}>
                <div>TIPO</div>
                <div>PROVEEDOR</div>
                <div style={{ textAlign: 'right' }}>IMPORTE</div>
              </div>
              
              {expenses.map((expense) => (
                <div key={expense.id} style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1fr', alignItems: 'center', background: 'rgba(255,255,255,0.02)', padding: '10px 12px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.02)' }}>
                  <div style={{ color: 'white', fontSize: '0.8rem' }}>{expense.type}</div>
                  <div style={{ color: '#cbd5e1', fontSize: '0.8rem' }}>{expense.provider}</div>
                  <div style={{ color: 'white', fontSize: '0.85rem', fontWeight: 'bold', textAlign: 'right' }}>{expense.amount} €</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Add Expense Modal Overlay */}
        {showAddModal && (
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
            background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(2px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 50
          }}>
            <div style={{
              width: '480px', background: '#131e30', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
            }}>
              <div style={{ padding: '20px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <h3 style={{ margin: 0, color: 'white', fontSize: '1rem' }}>AÑADIR TICKET</h3>
                <p style={{ margin: '4px 0 0 0', color: '#94a3b8', fontSize: '0.75rem' }}>Sube tu ticket. El sistema intentará rellenar los datos automáticamente.</p>
              </div>
              
              <div style={{ padding: '20px' }}>
                {/* Dropzone */}
                <div style={{ 
                  border: '1.5px dashed rgba(255,255,255,0.2)', borderRadius: '8px', padding: '20px', 
                  textAlign: 'center', marginBottom: '20px', background: 'rgba(255,255,255,0.02)',
                  position: 'relative', overflow: 'hidden'
                }}>
                  <div style={{ fontSize: '1.5rem', color: '#94a3b8', marginBottom: '8px' }}>📤</div>
                  <div style={{ color: 'white', fontSize: '0.8rem', fontWeight: 'bold', marginBottom: '12px' }}>Añadir foto del ticket</div>
                  <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
                    <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#C29E5E', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>📷</div>
                    <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>🖼️</div>
                  </div>

                  {/* AI Scanning Effect */}
                  {scanning && (
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(15, 26, 42, 0.8)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                      <div style={{ width: '100%', height: '2px', background: '#3b82f6', animation: 'scanLine 1s linear infinite', position: 'absolute', top: 0, left: 0, boxShadow: '0 0 10px #3b82f6' }} />
                      <span style={{ color: '#3b82f6', fontSize: '0.8rem', fontWeight: 'bold' }}>Procesando con IA...</span>
                    </div>
                  )}
                </div>

                {/* Form Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                  <div>
                    <div style={{ color: '#94a3b8', fontSize: '0.7rem', fontWeight: 'bold', marginBottom: '6px' }}>FECHA *</div>
                    <div style={{ background: '#0F1A2A', border: '1px solid rgba(255,255,255,0.1)', padding: '8px 12px', borderRadius: '6px', color: 'white', fontSize: '0.8rem' }}>
                      {aiFilled ? '30/06/2026' : 'dd/mm/aaaa'}
                    </div>
                  </div>
                  <div>
                    <div style={{ color: '#94a3b8', fontSize: '0.7rem', fontWeight: 'bold', marginBottom: '6px' }}>TIPO *</div>
                    <div style={{ background: '#0F1A2A', border: `1px solid ${aiFilled ? '#22c55e' : 'rgba(255,255,255,0.1)'}`, padding: '8px 12px', borderRadius: '6px', color: 'white', fontSize: '0.8rem', transition: 'border-color 0.3s' }}>
                      {aiFilled ? 'Comida / Dieta' : 'Seleccionar...'}
                    </div>
                  </div>
                  <div style={{ gridColumn: '1 / -1' }}>
                    <div style={{ color: '#94a3b8', fontSize: '0.7rem', fontWeight: 'bold', marginBottom: '6px' }}>PROVEEDOR</div>
                    <div style={{ background: '#0F1A2A', border: `1px solid ${aiFilled ? '#22c55e' : 'rgba(255,255,255,0.1)'}`, padding: '8px 12px', borderRadius: '6px', color: 'white', fontSize: '0.8rem', transition: 'border-color 0.3s' }}>
                      {aiFilled ? 'Restaurante Manolo' : 'Ej. Restaurante Manolo'}
                    </div>
                  </div>
                  <div>
                    <div style={{ color: '#94a3b8', fontSize: '0.7rem', fontWeight: 'bold', marginBottom: '6px' }}>FORMA PAGO *</div>
                    <div style={{ background: '#0F1A2A', border: '1px solid rgba(255,255,255,0.1)', padding: '8px 12px', borderRadius: '6px', color: 'white', fontSize: '0.8rem' }}>
                      {aiFilled ? 'Tarjeta Crédito' : 'Seleccionar...'}
                    </div>
                  </div>
                  <div>
                    <div style={{ color: '#94a3b8', fontSize: '0.7rem', fontWeight: 'bold', marginBottom: '6px' }}>TOTAL *</div>
                    <div style={{ background: '#0F1A2A', border: `1px solid ${aiFilled ? '#22c55e' : 'rgba(255,255,255,0.1)'}`, padding: '8px 12px', borderRadius: '6px', color: 'white', fontSize: '0.8rem', transition: 'border-color 0.3s' }}>
                      {aiFilled ? '24.50' : '0.00'}
                    </div>
                  </div>
                </div>

                {/* Footer Buttons */}
                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '20px', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '20px' }}>
                  <button style={{ background: 'none', border: '1px solid rgba(255,255,255,0.1)', color: '#cbd5e1', padding: '8px 16px', borderRadius: '6px', fontSize: '0.8rem' }}>
                    Cancelar
                  </button>
                  <button style={{ background: '#C29E5E', border: 'none', color: 'white', fontWeight: 'bold', padding: '8px 16px', borderRadius: '6px', fontSize: '0.8rem' }}>
                    Guardar Ticket
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Export Excel Modal Overlay */}
        {showExportModal && (
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
            background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(2px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 60
          }}>
            <div style={{
              width: '400px', background: '#131e30', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
            }}>
              <div style={{ padding: '24px' }}>
                <h3 style={{ margin: '0 0 16px 0', color: 'white', fontSize: '1.1rem' }}>EXPORTAR GASTOS A EXCEL</h3>
                <p style={{ margin: '0 0 24px 0', color: '#94a3b8', fontSize: '0.85rem', lineHeight: 1.5 }}>Selecciona el rango de fechas para descargar tus registros de gastos en formato .xlsx.</p>
                
                <div style={{ marginBottom: '16px' }}>
                  <div style={{ color: '#94a3b8', fontSize: '0.7rem', fontWeight: 'bold', marginBottom: '8px' }}>FECHA DE INICIO *</div>
                  <div style={{ background: '#0F1A2A', border: '1px solid rgba(255,255,255,0.1)', padding: '12px', borderRadius: '6px', color: 'white', fontSize: '0.85rem', display: 'flex', justifyContent: 'space-between' }}>
                    <span>01/05/2026</span>
                    <span style={{ color: '#94a3b8' }}>🕒</span>
                  </div>
                </div>
                
                <div style={{ marginBottom: '24px' }}>
                  <div style={{ color: '#94a3b8', fontSize: '0.7rem', fontWeight: 'bold', marginBottom: '8px' }}>FECHA FINAL *</div>
                  <div style={{ background: '#0F1A2A', border: '1px solid rgba(255,255,255,0.1)', padding: '12px', borderRadius: '6px', color: 'white', fontSize: '0.85rem', display: 'flex', justifyContent: 'space-between' }}>
                    <span>31/05/2026</span>
                    <span style={{ color: '#94a3b8' }}>🕒</span>
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '20px' }}>
                  <button style={{ background: 'none', border: '1px solid rgba(255,255,255,0.1)', color: '#cbd5e1', padding: '10px 20px', borderRadius: '6px', fontSize: '0.85rem', fontWeight: 'bold' }}>
                    Cancelar
                  </button>
                  <button style={{ background: '#C29E5E', border: 'none', color: 'white', fontWeight: 'bold', padding: '10px 20px', borderRadius: '6px', fontSize: '0.85rem' }}>
                    Descargar Excel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        <style dangerouslySetInnerHTML={{__html: `
          @keyframes ping {
            0% { transform: scale(0.5); opacity: 1; }
            100% { transform: scale(2); opacity: 0; }
          }
          @keyframes scanLine {
            0% { top: 0%; }
            50% { top: 100%; }
            100% { top: 0%; }
          }
        `}} />
      </div>
    </div>
  );
}
