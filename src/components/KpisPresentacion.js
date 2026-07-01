'use client';
import { useState, useEffect, useRef } from 'react';

const delay = (ms) => new Promise(res => setTimeout(res, ms));

export default function KpisPresentacion({ lang = 'es' }) {
  const [activeTab, setActiveTab] = useState(0); // 0: Ciclo, 1: Incentivos, 2: Evaluación IA
  
  // Animation states for Tab 0
  const [cicloData, setCicloData] = useState([]);
  const [isFiltering, setIsFiltering] = useState(false);

  // Animation states for Tab 2
  const [barsFilled, setBarsFilled] = useState(false);
  const [aiAnalyzing, setAiAnalyzing] = useState(false);
  const [aiReport, setAiReport] = useState('');
  
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [cursorActive, setCursorActive] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(false);

  // Initial mock data
  const initialCiclo = [
    { id: 1, nombre: 'Carlos Martínez', zona: 'Norte', dias: 0, estancos: 850, cob: '0.0%', vis: 0, med: 0.0, efec: 0, pefec: '0.0%', ciclo: 'Junio', acc: 120, obj: 200, estado: 'En curso' },
    { id: 2, nombre: 'Ana Gómez', zona: 'Sur', dias: 0, estancos: 920, cob: '0.0%', vis: 0, med: 0.0, efec: 0, pefec: '0.0%', ciclo: 'Junio', acc: 90, obj: 220, estado: 'En curso' },
    { id: 3, nombre: 'Luis Torres', zona: 'Este', dias: 0, estancos: 780, cob: '0.0%', vis: 0, med: 0.0, efec: 0, pefec: '0.0%', ciclo: 'Junio', acc: 150, obj: 180, estado: 'En curso' },
    { id: 4, nombre: 'Elena Ruiz', zona: 'Oeste', dias: 0, estancos: 1050, cob: '0.0%', vis: 0, med: 0.0, efec: 0, pefec: '0.0%', ciclo: 'Junio', acc: 80, obj: 250, estado: 'En curso' }
  ];

  const filteredCiclo = [
    { id: 1, nombre: 'Carlos Martínez', zona: 'Norte', dias: 20, estancos: 850, cob: '85.4%', vis: 726, med: 36.3, efec: 690, pefec: '95.0%', ciclo: 'Junio', acc: 245, obj: 200, estado: '¡Logrado!' },
    { id: 2, nombre: 'Ana Gómez', zona: 'Sur', dias: 21, estancos: 920, cob: '92.1%', vis: 847, med: 40.3, efec: 780, pefec: '92.0%', ciclo: 'Junio', acc: 235, obj: 220, estado: '¡Logrado!' },
    { id: 3, nombre: 'Luis Torres', zona: 'Este', dias: 19, estancos: 780, cob: '78.5%', vis: 612, med: 32.2, efec: 500, pefec: '81.6%', ciclo: 'Junio', acc: 160, obj: 180, estado: 'En curso' },
    { id: 4, nombre: 'Elena Ruiz', zona: 'Oeste', dias: 22, estancos: 1050, cob: '98.0%', vis: 1029, med: 46.7, efec: 990, pefec: '96.2%', ciclo: 'Junio', acc: 290, obj: 250, estado: '¡Logrado!' }
  ];

  const incentivos = [
    { nombre: 'Carlos M.', p1: '0,00 €', p2: '118,00 €', p3: '100,00 €', p4: '0,00 €', p5: '101,00 €', p6: '114,00 €', p7: '106,00 €' },
    { nombre: 'Ana G.', p1: '50,00 €', p2: '0,00 €', p3: '85,00 €', p4: '120,00 €', p5: '0,00 €', p6: '140,00 €', p7: '0,00 €' },
    { nombre: 'Luis T.', p1: '0,00 €', p2: '45,00 €', p3: '0,00 €', p4: '0,00 €', p5: '70,00 €', p6: '0,00 €', p7: '90,00 €' },
    { nombre: 'Elena R.', p1: '120,00 €', p2: '150,00 €', p3: '130,00 €', p4: '95,00 €', p5: '140,00 €', p6: '160,00 €', p7: '125,00 €' }
  ];

  const productsAI = [
    { name: 'Aqua Fresh 500ml', pct: 160, cons: 40, obj: 25 },
    { name: 'ChocoBite Pro', pct: 103, cons: 31, obj: 30 },
    { name: 'CerealMix Vital', pct: 172, cons: 43, obj: 25 },
    { name: 'Energy Boost X', pct: 67, cons: 20, obj: 30 },
    { name: 'Cafeina Plus', pct: 30, cons: 9, obj: 30 },
    { name: 'NutriBar 20g', pct: 100, cons: 25, obj: 25 }
  ];

  // Sequencer
  useEffect(() => {
    let isRunning = true;
    
    const runSequence = async () => {
      while (isRunning) {
        // --- TAB 0: Ciclo ---
        setActiveTab(0);
        setCicloData(initialCiclo);
        setCursorVisible(true);
        setCursorPos({ x: 300, y: 350 });
        await delay(1000);
        if (!isRunning) break;

        // Move to filter button
        setCursorPos({ x: 550, y: 150 });
        await delay(800);
        setCursorActive(true); await delay(200); setCursorActive(false);
        
        setIsFiltering(true);
        await delay(500);
        setCicloData(filteredCiclo);
        setIsFiltering(false);
        await delay(2500);
        if (!isRunning) break;

        // --- TAB 1: Incentivos ---
        setActiveTab(1);
        setCursorPos({ x: 300, y: 350 });
        await delay(3000);
        if (!isRunning) break;

        // --- TAB 2: Evaluación IA ---
        setActiveTab(2);
        setBarsFilled(false);
        setAiAnalyzing(false);
        setAiReport('');
        
        await delay(500);
        setBarsFilled(true); // Animate bars
        await delay(1500);
        if (!isRunning) break;

        // Move to AI Button
        setCursorPos({ x: 570, y: 90 });
        await delay(800);
        setCursorActive(true); await delay(200); setCursorActive(false);
        setCursorVisible(false); // Hide cursor during text generation
        
        setAiAnalyzing(true);
        const fullText = "Evaluación de Carlos Martínez:\n\n✅ Puntos Fuertes:\nExcelente rendimiento en la familia Aqua Fresh y CerealMix Vital, superando los objetivos con un 160% y 172% respectivamente. La efectividad de visitas (95%) demuestra una alta capacidad de cierre.\n\n⚠️ Áreas de Mejora:\nAtención requerida en Energy Boost X (67%) y Cafeina Plus (30%). Se recomienda ajustar el discurso de ventas para estos productos o revisar la segmentación de clientes visitados en la zona Norte.";
        
        for (let i = 0; i <= fullText.length; i++) {
          if (!isRunning) break;
          setAiReport(fullText.substring(0, i));
          await delay(20);
        }
        setAiAnalyzing(false);
        
        await delay(5000); // Wait reading time
      }
    };

    runSequence();
    return () => { isRunning = false; };
  }, []);

  return (
    <div style={{ width: '100%', maxWidth: '650px', margin: '0 auto', position: 'relative' }}>
      
      {/* Fake Cursor */}
      <div style={{
        position: 'absolute', top: 0, left: 0,
        transform: `translate(${cursorPos.x}px, ${cursorPos.y}px)`,
        transition: 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)',
        zIndex: 9999, pointerEvents: 'none',
        opacity: cursorVisible ? 1 : 0
      }}>
        {cursorActive && (
          <div style={{ position: 'absolute', top: -10, left: -10, width: 20, height: 20, background: 'rgba(59, 130, 246, 0.4)', borderRadius: '50%', animation: 'ping 0.5s ease-out' }} />
        )}
      </div>

      {/* Main UI Container */}
      <div style={{
        width: '100%', height: '480px', borderRadius: '12px',
        border: '1px solid rgba(255,255,255,0.1)', background: '#0B1423',
        boxShadow: '0 40px 80px rgba(0,0,0,0.6)', overflow: 'hidden',
        display: 'flex', flexDirection: 'column', fontFamily: 'Inter, sans-serif'
      }}>
        
        {/* Top Navigation Tabs */}
        <div style={{ display: 'flex', borderBottom: '1px solid rgba(255,255,255,0.05)', background: '#0F1A2A' }}>
          {['Informe de Ciclo', 'Incentivos', 'Evaluación IA'].map((tab, idx) => (
            <div key={idx} style={{
              flex: 1, padding: '16px', textAlign: 'center', fontSize: '0.85rem', fontWeight: 'bold',
              color: activeTab === idx ? '#A2D9F3' : '#64748b', cursor: 'pointer',
              borderBottom: activeTab === idx ? '2px solid #A2D9F3' : '2px solid transparent',
              transition: 'all 0.3s'
            }}>
              {tab}
            </div>
          ))}
        </div>

        {/* Content Area */}
        <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
          
          {/* TAB 0: CICLO */}
          <div style={{ position: 'absolute', inset: 0, padding: '20px', opacity: activeTab === 0 ? 1 : 0, transition: 'opacity 0.3s', pointerEvents: activeTab === 0 ? 'auto' : 'none' }}>
            <h2 style={{ color: 'white', fontSize: '1.2rem', margin: '0 0 4px 0' }}>INFORME DE CICLO</h2>
            <p style={{ color: '#64748b', fontSize: '0.75rem', margin: '0 0 16px 0' }}>Analiza el rendimiento comercial, cobertura y consecución de objetivos.</p>
            
            {/* Filters */}
            <div style={{ display: 'flex', gap: '12px', marginBottom: '20px', background: '#131e30', padding: '12px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '0.65rem', color: '#94a3b8', fontWeight: 'bold', marginBottom: '4px' }}>CICLO</div>
                <div style={{ background: '#0F1A2A', border: '1px solid rgba(255,255,255,0.1)', padding: '6px', borderRadius: '4px', color: 'white', fontSize: '0.75rem' }}>Junio</div>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '0.65rem', color: '#94a3b8', fontWeight: 'bold', marginBottom: '4px' }}>COMERCIAL</div>
                <div style={{ background: '#0F1A2A', border: '1px solid rgba(255,255,255,0.1)', padding: '6px', borderRadius: '4px', color: 'white', fontSize: '0.75rem' }}>Todos los comerciales</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                <div style={{ background: isFiltering ? '#3b82f6' : 'rgba(255,255,255,0.05)', padding: '6px 12px', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.1)', color: 'white', fontSize: '0.75rem', transition: 'background 0.3s' }}>
                  🔄 Actualizar
                </div>
              </div>
            </div>

            {/* Table */}
            <div style={{ background: '#131e30', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)', overflow: 'hidden' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr 1fr', gap: '8px', padding: '10px 12px', borderBottom: '1px solid rgba(255,255,255,0.05)', color: '#94a3b8', fontSize: '0.65rem', fontWeight: 'bold' }}>
                <div>COMERCIAL</div>
                <div style={{ textAlign: 'right' }}>COBERTURA</div>
                <div style={{ textAlign: 'right' }}>% VIS. EFEC.</div>
                <div style={{ textAlign: 'right' }}>ACC / OBJ</div>
                <div style={{ textAlign: 'right' }}>ESTADO</div>
              </div>
              {cicloData.map((row) => (
                <div key={row.id} style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr 1fr', gap: '8px', padding: '10px 12px', borderBottom: '1px solid rgba(255,255,255,0.02)', alignItems: 'center' }}>
                  <div>
                    <div style={{ color: 'white', fontSize: '0.75rem', fontWeight: 'bold' }}>{row.nombre}</div>
                    <div style={{ color: '#64748b', fontSize: '0.65rem' }}>{row.zona}</div>
                  </div>
                  <div style={{ color: 'white', fontSize: '0.75rem', textAlign: 'right' }}>{row.cob}</div>
                  <div style={{ color: 'white', fontSize: '0.75rem', textAlign: 'right' }}>{row.pefec}</div>
                  <div style={{ color: 'white', fontSize: '0.75rem', textAlign: 'right' }}>{row.acc} / {row.obj}</div>
                  <div style={{ textAlign: 'right' }}>
                    {row.estado === '¡Logrado!' ? (
                      <span style={{ background: 'rgba(34, 197, 94, 0.2)', color: '#4ade80', padding: '4px 8px', borderRadius: '4px', fontSize: '0.65rem', fontWeight: 'bold' }}>✓ ¡Logrado!</span>
                    ) : (
                      <span style={{ color: '#94a3b8', fontSize: '0.7rem' }}>En curso</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* TAB 1: INCENTIVOS */}
          <div style={{ position: 'absolute', inset: 0, padding: '20px', opacity: activeTab === 1 ? 1 : 0, transition: 'opacity 0.3s', pointerEvents: activeTab === 1 ? 'auto' : 'none' }}>
            <h2 style={{ color: 'white', fontSize: '1.2rem', margin: '0 0 4px 0' }}>INFORME DE INCENTIVOS</h2>
            <p style={{ color: '#64748b', fontSize: '0.75rem', margin: '0 0 20px 0' }}>Calcula y exporta los importes a liquidar por objetivos logrados.</p>
            
            <div style={{ background: '#131e30', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)', overflow: 'hidden' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1.5fr repeat(5, 1fr)', gap: '4px', padding: '10px', borderBottom: '1px solid rgba(255,255,255,0.05)', color: '#94a3b8', fontSize: '0.6rem', fontWeight: 'bold', textAlign: 'right' }}>
                <div style={{ textAlign: 'left' }}>COMERCIAL</div>
                <div>AQUA FRESH</div>
                <div>CHOCOBITE</div>
                <div>CEREALMIX</div>
                <div>ENERGY X</div>
                <div>CAFEINA+</div>
              </div>
              {incentivos.map((row, idx) => (
                <div key={idx} style={{ display: 'grid', gridTemplateColumns: '1.5fr repeat(5, 1fr)', gap: '4px', borderBottom: '1px solid rgba(255,255,255,0.02)', alignItems: 'center', fontSize: '0.7rem' }}>
                  <div style={{ padding: '10px', color: 'white', fontWeight: 'bold' }}>{row.nombre}</div>
                  {[row.p1, row.p2, row.p3, row.p4, row.p5].map((val, i) => {
                    const isZero = val === '0,00 €';
                    return (
                      <div key={i} style={{ 
                        padding: '10px', textAlign: 'right', 
                        color: isZero ? '#64748b' : '#4ade80',
                        background: isZero ? 'transparent' : 'rgba(34, 197, 94, 0.05)'
                      }}>
                        {val}
                      </div>
                    )
                  })}
                </div>
              ))}
            </div>
          </div>

          {/* TAB 2: EVALUACION IA */}
          <div style={{ position: 'absolute', inset: 0, padding: '20px', opacity: activeTab === 2 ? 1 : 0, transition: 'opacity 0.3s', pointerEvents: activeTab === 2 ? 'auto' : 'none', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <h2 style={{ color: 'white', fontSize: '1.2rem', margin: '0 0 4px 0' }}>EVALUACIÓN COMERCIAL SEMANAL</h2>
                <p style={{ color: '#64748b', fontSize: '0.75rem', margin: '0 0 16px 0' }}>Analiza el progreso y genera alertas inteligentes.</p>
              </div>
              
              {/* IA Button */}
              <div style={{
                background: aiAnalyzing ? 'rgba(194, 158, 94, 0.2)' : 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(194, 158, 94, 0.3)',
                padding: '8px 16px', borderRadius: '8px', color: '#C29E5E', fontSize: '0.8rem',
                display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 'bold', transition: 'all 0.3s',
                boxShadow: aiAnalyzing ? '0 0 15px rgba(194, 158, 94, 0.3)' : 'none'
              }}>
                ✨ ASISTENTE IA
              </div>
            </div>

            {/* AI Report Box */}
            <div style={{
              height: aiReport ? '130px' : '0px', overflow: 'hidden', transition: 'height 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
              background: 'rgba(194, 158, 94, 0.05)', border: aiReport ? '1px solid rgba(194, 158, 94, 0.2)' : 'none',
              borderRadius: '8px', marginBottom: aiReport ? '16px' : '0'
            }}>
              <div style={{ padding: '12px', color: '#e2e8f0', fontSize: '0.75rem', lineHeight: 1.5, whiteSpace: 'pre-line' }}>
                {aiReport}
                {aiAnalyzing && <span style={{ display: 'inline-block', width: '6px', height: '12px', background: '#C29E5E', animation: 'blink 1s infinite' }}/>}
              </div>
            </div>
            
            {/* Progress Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px', flex: 1, overflowY: 'auto' }}>
              {productsAI.map((p, idx) => {
                const isRed = p.pct < 100;
                const barColor = isRed ? '#ef4444' : '#22c55e';
                return (
                  <div key={idx} style={{ background: '#131e30', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)', padding: '12px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <span style={{ color: 'white', fontSize: '0.7rem', fontWeight: 'bold' }}>{p.name}</span>
                      <span style={{ color: barColor, fontSize: '0.7rem', fontWeight: 'bold' }}>{p.pct}%</span>
                    </div>
                    {/* Progress Bar */}
                    <div style={{ width: '100%', height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px', overflow: 'hidden', marginBottom: '8px' }}>
                      <div style={{ 
                        height: '100%', background: barColor, borderRadius: '2px', 
                        width: barsFilled ? `${Math.min(p.pct, 100)}%` : '0%',
                        transition: 'width 1s cubic-bezier(0.25, 1, 0.5, 1)'
                      }} />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', color: '#64748b', fontSize: '0.6rem' }}>
                      <span>Cons: {p.cons}</span>
                      <span>Obj: {p.obj}</span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

        </div>

        <style dangerouslySetInnerHTML={{__html: `
          @keyframes ping { 0% { transform: scale(0.5); opacity: 1; } 100% { transform: scale(2); opacity: 0; } }
          @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        `}} />
      </div>
    </div>
  );
}
