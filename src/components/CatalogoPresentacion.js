'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function CatalogoPresentacion({ lang = 'es' }) {
  const [step, setStep] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [quantities, setQuantities] = useState({ 0: 0, 1: 0, 2: 0, 3: 0, 4: 0 });
  const [showToast, setShowToast] = useState(false);

  const t = {
    es: { update: 'ACTUALIZAR PEDIDO', finish: 'Finalizar', added: 'Pedido actualizado en CRM ✓' },
    en: { update: 'UPDATE ORDER', finish: 'Finish', added: 'Order updated in CRM ✓' }
  }[lang];

  const pages = [
    {
      title: 'SilVer',
      subtitle: 'AMERICAN BLEND',
      price: "4'50 €",
      bgColor: '#FDF6E3',
      headerColor: '#E65100',
      showCards: true,
      layout: 'row3',
      images: ['/catalog/silver_tobacco.png', '/catalog/silver_tobacco_grey.png', '/catalog/silver_tobacco_blue.png'],
      items: [
        { id: '14760', name: 'SilVer Original (5u)', format: 'EST' },
        { id: '14757', name: 'SilVer Menthol (5u)', format: 'EST' },
        { id: '20313', name: 'SilVer Light (5u)', format: 'EST' },
      ]
    },
    {
      title: 'YumBites',
      subtitle: 'GOMINOLAS PREMIUM',
      price: "1'20 €",
      bgColor: '#FCE4EC',
      headerColor: '#C2185B',
      showCards: false,
      layout: 'grid2x2',
      images: ['/catalog/gummy_bag.png', '/catalog/gummy_bag_green.png', '/catalog/gummy_bag_blue.png', '/catalog/gummy_bag_yellow.png'],
      items: [
        { id: '30101', name: 'YumBites Fresa 1kg', format: 'UDS' },
        { id: '30102', name: 'YumBites Limón 1kg', format: 'UDS' },
        { id: '30103', name: 'YumBites Cola 1kg', format: 'UDS' },
        { id: '30104', name: 'YumBites Surtido 1kg', format: 'UDS' },
      ]
    },
    {
      title: 'PureLeaf',
      subtitle: 'PAPEL DE LIAR',
      price: "0'80 €",
      bgColor: '#FFF3E0',
      headerColor: '#E65100',
      showCards: false,
      layout: 'grid2x2',
      images: ['/catalog/rolling_paper_box.png', '/catalog/rolling_paper_black.png', '/catalog/rolling_paper_lightblue.png', '/catalog/rolling_paper_green.png'],
      items: [
        { id: '40201', name: 'PureLeaf Fino (Caja 25)', format: 'DISP' },
        { id: '40202', name: 'PureLeaf Extra Fino', format: 'DISP' },
        { id: '40203', name: 'PureLeaf Organic', format: 'DISP' },
        { id: '40204', name: 'PureLeaf King Size', format: 'DISP' },
      ]
    },
    {
      title: 'Fizzy',
      subtitle: 'REFRESCOS ARTESANALES',
      price: "2'00 €",
      bgColor: '#E0F7FA',
      headerColor: '#006064',
      showCards: false,
      layout: 'bottles_cans',
      images: [
        '/catalog/soda_bottle_cola.png', '/catalog/soda_bottle_orange.png', '/catalog/soda_bottle_lemon.png',
        '/catalog/soda_can_cola.png', '/catalog/soda_can_orange.png'
      ],
      items: [
        { id: '50111', name: 'Fizzy Cola Cristal', format: 'CAJA' },
        { id: '50112', name: 'Fizzy Naranja Cristal', format: 'CAJA' },
        { id: '50113', name: 'Fizzy Limón Cristal', format: 'CAJA' },
        { id: '50114', name: 'Fizzy Cola Lata', format: 'PACK' },
        { id: '50115', name: 'Fizzy Naranja Lata', format: 'PACK' },
      ]
    },
    {
      title: 'DermaGlow',
      subtitle: 'LÍNEA HIDRATANTE',
      price: "15'50 €",
      bgColor: '#F1F8E9',
      headerColor: '#33691E',
      showCards: false,
      layout: 'grid2x2_creams',
      images: ['/catalog/cream_dispenser.png', '/catalog/cream_dispenser.png', '/catalog/cream_dispenser.png', '/catalog/cream_dispenser.png'],
      items: [
        { id: '80501', name: 'DermaGlow Facial 50ml', format: 'UDS' },
        { id: '80502', name: 'DermaGlow Corporal 200ml', format: 'UDS' },
        { id: '80503', name: 'DermaGlow Noche', format: 'UDS' },
        { id: '80504', name: 'DermaGlow Sérum', format: 'UDS' },
      ]
    }
  ];

  useEffect(() => {
    let timer;
    const sequence = async () => {
      setCurrentPage(0); setDrawerOpen(false); setQuantities({0:0,1:0,2:0,3:0,4:0}); setShowToast(false);
      await new Promise(r => setTimeout(r, 4000));
      
      setDrawerOpen(true);
      await new Promise(r => setTimeout(r, 1500));
      
      setQuantities(q => ({...q, 0: 1}));
      await new Promise(r => setTimeout(r, 500));
      setQuantities(q => ({...q, 0: 2}));
      await new Promise(r => setTimeout(r, 1500));
      
      setShowToast(true);
      await new Promise(r => setTimeout(r, 2000));
      setShowToast(false);
      setDrawerOpen(false);
      setQuantities({0:0,1:0,2:0,3:0,4:0});
      await new Promise(r => setTimeout(r, 1000));
      
      setCurrentPage(1);
      await new Promise(r => setTimeout(r, 3000));
      
      setDrawerOpen(true);
      await new Promise(r => setTimeout(r, 1000));
      setQuantities(q => ({...q, 2: 5}));
      await new Promise(r => setTimeout(r, 1000));
      setShowToast(true);
      await new Promise(r => setTimeout(r, 1500));
      setShowToast(false);
      setDrawerOpen(false);
      setQuantities({0:0,1:0,2:0,3:0,4:0});
      await new Promise(r => setTimeout(r, 1000));
      
      setCurrentPage(2);
      await new Promise(r => setTimeout(r, 3000));
      
      setCurrentPage(3);
      await new Promise(r => setTimeout(r, 3000));
      
      setCurrentPage(4);
      await new Promise(r => setTimeout(r, 3000));

      setStep(s => s + 1);
    };
    
    sequence();
    return () => clearTimeout(timer);
  }, [step]);

  const activePage = pages[currentPage];

  const renderLayout = () => {
    if (activePage.layout === 'row3') {
      return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginTop: '30px' }}>
          {activePage.images.map((src, i) => (
             <div key={i} style={{ position: 'relative', height: '160px', background: 'white', borderRadius: '10px', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}>
               <Image src={src} alt="Product" fill style={{ objectFit: 'contain', padding: '10px' }} />
             </div>
          ))}
        </div>
      );
    }
    
    if (activePage.layout === 'grid2x2') {
      return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px', marginTop: '30px', height: '280px' }}>
          {activePage.images.map((src, i) => (
             <div key={i} style={{ position: 'relative', background: 'white', borderRadius: '10px', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}>
               <Image src={src} alt="Product" fill style={{ objectFit: 'contain', padding: '10px' }} />
             </div>
          ))}
        </div>
      );
    }

    if (activePage.layout === 'grid2x2_creams') {
      const filters = [
        'none', 
        'sepia(0.8) hue-rotate(180deg) saturate(3)', // Blueish
        'sepia(0.8) hue-rotate(300deg) saturate(3)', // Pinkish
        'sepia(0.6) hue-rotate(60deg) saturate(1.5)' // Soft greenish (aloe)
      ];
      return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px', marginTop: '30px', height: '280px' }}>
          {activePage.images.map((src, i) => (
             <div key={i} style={{ position: 'relative', background: 'white', borderRadius: '10px', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}>
               <div style={{ filter: filters[i], width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}>
                 <Image src={src} alt="Product" fill style={{ objectFit: 'contain', padding: '10px' }} />
               </div>
             </div>
          ))}
        </div>
      );
    }

    if (activePage.layout === 'bottles_cans') {
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '20px', height: '300px' }}>
          {/* Top 3 Bottles */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', flex: 1.5 }}>
            {activePage.images.slice(0, 3).map((src, i) => (
               <div key={i} style={{ position: 'relative', background: 'white', borderRadius: '10px', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}>
                 <Image src={src} alt="Bottle" fill style={{ objectFit: 'contain', padding: '10px' }} />
               </div>
            ))}
          </div>
          {/* Bottom 2 Cans */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px', flex: 1, padding: '0 20px' }}>
            {activePage.images.slice(3, 5).map((src, i) => (
               <div key={i} style={{ position: 'relative', background: 'white', borderRadius: '10px', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}>
                 <Image src={src} alt="Can" fill style={{ objectFit: 'contain', padding: '10px' }} />
               </div>
            ))}
          </div>
        </div>
      );
    }
  };

  return (
    <div style={{
      width: '100%',
      maxWidth: '700px',
      margin: '0 auto',
      background: '#1A1A1A',
      borderRadius: '30px',
      padding: '12px',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255,255,255,0.1)',
      position: 'relative'
    }}>
      <div style={{
        background: activePage.bgColor,
        borderRadius: '20px',
        overflow: 'hidden',
        height: '620px', // Taller to fit all visuals
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        transition: 'background 0.5s ease'
      }}>
        
        <div style={{ flex: 1, padding: '30px 30px', position: 'relative' }}>
          
          <h1 style={{ color: activePage.headerColor, fontSize: '3rem', margin: 0, fontWeight: 800 }}>{activePage.title}</h1>
          <h2 style={{ color: '#333', fontSize: '1.2rem', margin: 0, letterSpacing: '2px' }}>{activePage.subtitle}</h2>
          
          <div style={{
            position: 'absolute',
            top: '20px', right: '20px',
            width: '120px', height: '120px',
            background: '#E53935',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            color: 'white',
            fontSize: '1.8rem',
            whiteSpace: 'nowrap',
            fontWeight: 'bold',
            boxShadow: '0 10px 25px rgba(229, 57, 53, 0.4)',
            transform: 'rotate(10deg)',
            zIndex: 10
          }}>
            {activePage.price}
          </div>

          {renderLayout()}

          {activePage.showCards && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '30px' }}>
              <div>
                <div style={{ background: '#E65100', color: 'white', padding: '4px 10px', fontWeight: 'bold' }}>■ Pedidos</div>
                <div style={{ fontSize: '0.75rem', color: '#555', marginTop: '6px', paddingLeft: '10px' }}>
                  ■ {activePage.title} (25): <strong>SAP 3513954</strong><br/>
                  ■ Múltiplos de 8 unidades
                </div>
              </div>
              <div>
                <div style={{ background: '#43A047', color: 'white', padding: '4px 10px', fontWeight: 'bold' }}>■ Competencia</div>
                <div style={{ fontSize: '0.75rem', color: '#555', marginTop: '6px', paddingLeft: '10px' }}>
                  ■ AUSTIN, BRAVO, DESSERT GOLD
                </div>
              </div>
            </div>
          )}

        </div>

        <div style={{
          position: 'absolute',
          bottom: drawerOpen ? '0' : '-20px',
          left: 0, right: 0,
          background: '#1A233A',
          borderTopLeftRadius: '16px',
          borderTopRightRadius: '16px',
          height: drawerOpen ? '320px' : '60px',
          transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 -10px 30px rgba(0,0,0,0.3)',
          cursor: 'pointer',
          zIndex: 20
        }}>
          
          {!drawerOpen && (
            <div style={{ display: 'flex', justifyContent: 'center', padding: '10px', color: 'white', alignItems: 'center', height: '100%' }}>
              <span style={{ width: '40px', height: '4px', background: 'rgba(255,255,255,0.3)', borderRadius: '2px', position: 'absolute', top: '10px' }}></span>
              <div style={{ marginTop: '5px', fontSize: '0.9rem', color: '#A2D9F3' }}>
                Ver productos y hacer pedido ⬆
              </div>
            </div>
          )}

          {drawerOpen && (
            <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
              
              <div style={{ display: 'grid', gridTemplateColumns: '60px 1fr 120px 60px', color: '#A2D9F3', fontSize: '0.7rem', paddingBottom: '10px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <div>SAP</div>
                <div>DENOMINACIÓN</div>
                <div style={{ textAlign: 'center' }}>CANTIDAD</div>
                <div style={{ textAlign: 'center' }}>FORMATO</div>
              </div>

              <div style={{ flex: 1, overflowY: 'auto', marginTop: '10px' }}>
                {activePage.items.map((item, idx) => (
                  <div key={item.id} style={{ display: 'grid', gridTemplateColumns: '60px 1fr 120px 60px', color: 'white', fontSize: '0.8rem', padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,0.05)', alignItems: 'center' }}>
                    <div style={{ fontWeight: 'bold' }}>{item.id}</div>
                    <div>{item.name}</div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                      <div style={{ display: 'flex', background: 'rgba(255,255,255,0.1)', borderRadius: '6px', overflow: 'hidden' }}>
                        <div style={{ width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>-</div>
                        <div style={{ width: '40px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.3)' }}>{quantities[idx] || 0}</div>
                        <div style={{ width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', background: quantities[idx] > 0 ? 'var(--accent)' : 'transparent' }}>+</div>
                      </div>
                    </div>
                    <div style={{ textAlign: 'center', color: '#888' }}>{item.format}</div>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '15px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ color: '#888', fontSize: '0.8rem', cursor: 'pointer' }}>← {t.finish}</div>
                <div style={{ 
                  background: 'var(--accent)', 
                  color: 'white', 
                  padding: '10px 20px', 
                  borderRadius: '6px', 
                  fontSize: '0.85rem', 
                  fontWeight: 'bold', 
                  cursor: 'pointer',
                  boxShadow: '0 4px 15px rgba(194, 158, 94, 0.4)'
                }}>
                  {t.update}
                </div>
              </div>

            </div>
          )}
        </div>

        <div style={{
          position: 'absolute',
          top: showToast ? '20px' : '-100px',
          left: '50%',
          transform: 'translateX(-50%)',
          background: '#4ade80',
          color: '#064e3b',
          padding: '12px 24px',
          borderRadius: '30px',
          fontWeight: 'bold',
          boxShadow: '0 10px 25px rgba(74, 222, 128, 0.4)',
          transition: 'top 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          zIndex: 100
        }}>
          {t.added}
        </div>

      </div>
    </div>
  );
}
