import Head from 'next/head';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'On-The-Spot Order Confirmation Software | Traksal CRM',
  description: 'Send an automatic purchase summary to your clients and warehouse instantly. Digital signature on visit and eliminate manual order errors.',
  openGraph: {
    title: 'On-the-spot Order Confirmation | Traksal',
    description: 'Digital signature and automated emails during your sales visits.',
    url: 'https://traksal.com/en/order-confirmation',
    siteName: 'Traksal',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.traksal.com/en/order-confirmation',
    languages: { 'es': 'https://www.traksal.com/confirmacion-de-pedidos', 'en': 'https://www.traksal.com/en/order-confirmation' }
  },
};

export default function OrderConfirmation() {
  return (
    <>
      <Navbar lang="en" />
      <main style={{ paddingTop: '100px', minHeight: '100vh', background: 'var(--bg-color)', color: 'var(--text-color)' }}>
        
        {/* HERO SECTION */}
        <section className="section" style={{ paddingBottom: '40px' }}>
          <div className="container" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <span className="section-label">100% Secure Orders</span>
            <h1 className="hero-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '24px', lineHeight: 1.1 }}>
              Close the sale and <span className="text-accent">confirm</span> before walking out the door.
            </h1>
            <p className="hero-subtitle" style={{ fontSize: '1.25rem', marginBottom: '40px', color: 'var(--text-secondary)' }}>
              No more clients saying *"I think I ordered 5 instead of 3"*. Traksal sends an automatic email with the exact summary to the client and notifies the warehouse in the same second.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
              <Link href="/en#contact" className="btn btn-primary" style={{ padding: '14px 32px', fontSize: '1.1rem' }}>Try Traksal for Free</Link>
            </div>
          </div>
        </section>

        {/* MOCKUP & FEATURES SECTION */}
        <section className="section" style={{ background: 'rgba(255,255,255,0.02)', borderTop: '1px solid var(--border)' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
              
              {/* CSS MOBILE MOCKUP */}
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{
                  width: '320px',
                  height: '650px',
                  background: '#0F172A',
                  borderRadius: '40px',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 10px #1E293B',
                  position: 'relative',
                  overflow: 'hidden',
                  fontFamily: 'system-ui, sans-serif'
                }}>
                  {/* Status Bar */}
                  <div style={{ height: '30px', background: '#0F172A', display: 'flex', justifyContent: 'space-between', padding: '0 20px', alignItems: 'center', color: 'white', fontSize: '0.75rem' }}>
                    <span>14:30</span>
                    <div style={{ display: 'flex', gap: '5px' }}>
                      <span>5G</span>
                      <span>🔋</span>
                    </div>
                  </div>
                  
                  {/* Email App Header */}
                  <div style={{ padding: '15px 20px', background: '#1E293B', borderBottom: '1px solid #334155' }}>
                    <div style={{ color: '#94A3B8', fontSize: '0.8rem', marginBottom: '5px' }}>From: orders@yourcompany.com</div>
                    <div style={{ color: 'white', fontSize: '1rem', fontWeight: 'bold' }}>Confirmation of your order #4092</div>
                  </div>

                  {/* Email Content */}
                  <div style={{ background: 'white', height: '100%', padding: '25px 20px', color: '#1E293B' }}>
                    <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                      <div style={{ width: '60px', height: '60px', background: '#4ADE80', borderRadius: '50%', margin: '0 auto 15px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '30px' }}>✓</div>
                      <h2 style={{ fontSize: '1.2rem', margin: 0, color: '#0F172A' }}>Thank you for your purchase!</h2>
                      <p style={{ fontSize: '0.85rem', color: '#64748B', marginTop: '5px' }}>Your order is already being prepared.</p>
                    </div>

                    <div style={{ background: '#F8FAFC', borderRadius: '12px', padding: '15px', marginBottom: '20px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #E2E8F0', paddingBottom: '8px', marginBottom: '8px', fontSize: '0.85rem', fontWeight: 'bold' }}>
                        <span>Items</span>
                        <span>Qty.</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: '#334155', marginBottom: '6px' }}>
                        <span>SilVer Original (Box 5u)</span>
                        <span>12</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: '#334155' }}>
                        <span>PureLeaf Extra Thin</span>
                        <span>5</span>
                      </div>
                    </div>

                    <div style={{ border: '2px dashed #CBD5E1', borderRadius: '12px', padding: '15px', textAlign: 'center' }}>
                       <div style={{ fontSize: '0.75rem', color: '#64748B', textTransform: 'uppercase', marginBottom: '10px' }}>Client Agreement</div>
                       {/* SVG Signature Mockup */}
                       <svg viewBox="0 0 200 60" style={{ width: '100%', height: '40px' }}>
                         <path d="M 20 40 Q 40 10, 60 30 T 100 20 T 130 45 T 160 15 T 180 35" fill="transparent" stroke="#0F172A" strokeWidth="3" />
                       </svg>
                       <div style={{ fontSize: '0.85rem', fontWeight: 'bold', marginTop: '10px' }}>Sign. Authorized Client</div>
                    </div>

                  </div>
                </div>
              </div>

              {/* FEATURES TEXT */}
              <div>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '30px', lineHeight: 1.2 }}>Professionalism you can see. <span className="gradient-text">Errors that disappear.</span></h2>
                
                <div style={{ display: 'grid', gap: '30px' }}>
                  <div className="feature-item" style={{ display: 'flex', gap: '20px' }}>
                    <div style={{ fontSize: '2.5rem', flexShrink: 0 }}>📧</div>
                    <div>
                      <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Automatic Notification to the Client</h3>
                      <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>Upon checkout, the client receives a professional email with the exact summary of their purchase and an "Order in preparation" message. Instills trust from second zero.</p>
                    </div>
                  </div>

                  <div className="feature-item" style={{ display: 'flex', gap: '20px' }}>
                    <div style={{ fontSize: '2.5rem', flexShrink: 0 }}>✍️</div>
                    <div>
                      <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Optional Digital Signature</h3>
                      <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>For added security, the tablet allows the client to sign their agreement with a finger. The signature is embedded in the order PDF they receive.</p>
                    </div>
                  </div>

                  <div className="feature-item" style={{ display: 'flex', gap: '20px' }}>
                    <div style={{ fontSize: '2.5rem', flexShrink: 0 }}>🏭</div>
                    <div>
                      <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Direct Connection with Warehouse</h3>
                      <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>Forget about piling up papers to hand in at the end of the day. While the sales rep is starting the car for the next client, the warehouse is already preparing the box.</p>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

      </main>
      <Footer lang="en" />
    </>
  );
}
