import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Geographic Visit Planning for Sales Reps | Traksal CRM',
  description: 'Optimize your sales team routes with Traksal\'s interactive map. Group nearby clients and reduce idle time on the road.',
  keywords: ['sales route planning', 'crm client map', 'optimize sales visits', 'client geolocation', 'traksal crm'],
  alternates: {
    canonical: 'https://www.traksal.com/en/geographic-planning',
    languages: { 'es': 'https://www.traksal.com/planificacion-geografica', 'en': 'https://www.traksal.com/en/geographic-planning' }
  },
  openGraph: {
    title: 'Geographic Route Planning | Traksal',
    description: 'Save gas and time by planning your sales rep visits on the map.',
    url: 'https://www.traksal.com/en/geographic-planning',
    type: 'website',
  }
};

export default function GeographicPlanningPage() {
  return (
    <main style={{ background: 'var(--primary)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar lang="en" />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Traksal Geographic Planning",
            "operatingSystem": "Web, iOS, Android",
            "applicationCategory": "BusinessApplication",
            "featureList": [
              "Map visualization of clients",
              "Sales route optimization",
              "Reduction of road time",
              "Step-by-step guide for reps"
            ],
            "offers": {
              "@type": "Offer",
              "price": "0.00",
              "priceCurrency": "EUR"
            }
          }),
        }}
      />
      
      <section style={{
        paddingTop: 'calc(var(--nav-height) + 10px)',
        paddingBottom: '80px',
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <div className="container">
          <div className="responsive-grid" style={{ position: 'relative' }}>
            
            {/* Text Side */}
            <div style={{ order: 1 }}>
              <Link href="/en" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.82rem', color: 'var(--text-muted)', textDecoration: 'none', marginBottom: '24px' }}>
                ← Back to home
              </Link>
              <span className="section-label">CRM Module</span>
              <h1 style={{ marginBottom: '24px', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', lineHeight: 1.1 }}>
                Fewer miles, <br />
                <span className="gradient-text">more effective visits.</span>
              </h1>
              <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '40px', maxWidth: '500px', lineHeight: 1.6 }}>
                Your sales team's time is money. Visualize your entire portfolio on the map and group clients by proximity to create the perfect route.
              </p>
              
              <div style={{ display: 'grid', gap: '24px' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ width: '40px', height: '40px', background: 'rgba(194, 158, 94, 0.1)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)', flexShrink: 0 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '4px', color: 'white' }}>Your Clients on the Map</h3>
                    <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>Forget endless lists of addresses. Open the interactive map and discover at a glance which clients and prospects are in the same area.</p>
                  </div>
                </div>
                
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ width: '40px', height: '40px', background: 'rgba(162, 217, 243, 0.1)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--secondary)', flexShrink: 0 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="5" r="3"></circle><line x1="12" y1="22" x2="12" y2="8"></line><path d="M5 12H2a10 10 0 0 0 20 0h-3"></path></svg>
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '4px', color: 'white' }}>Smart Routes</h3>
                    <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>Select the clients you want to visit today and Traksal will trace the most logical order. Minimize time behind the wheel and gas expenses.</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ width: '40px', height: '40px', background: 'rgba(125, 255, 176, 0.08)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#7DFFB0', flexShrink: 0 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '4px', color: 'white' }}>Daily Guide on Mobile</h3>
                    <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>The sales rep opens the app and has their roadmap clear. They know exactly where to go first, at what time, and who to see next.</p>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '56px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <Link href="/en#contact" className="btn btn-primary btn-lg">
                  Start optimizing routes
                </Link>
              </div>
            </div>

            {/* Visual Side */}
            <div style={{ order: 2, display: 'flex', justifyContent: 'center', position: 'sticky', top: '140px', alignSelf: 'start' }}>
               <div style={{ 
                  background: 'var(--primary-mid)', 
                  borderRadius: '20px', 
                  border: '1px solid rgba(162,217,243,0.2)', 
                  padding: '8px', 
                  boxShadow: '0 30px 80px rgba(0,0,0,0.4)',
                  width: '100%',
                  maxWidth: '450px',
                  overflow: 'hidden',
                  position: 'relative'
                }} className="animate-float">
                  
                  {/* Top Bar */}
                  <div style={{ padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(0,0,0,0.2)', borderRadius: '14px 14px 0 0' }}>
                    <div style={{ fontSize: '0.9rem', color: 'white', fontWeight: 600 }}>Sales Route: North Zone</div>
                    <span style={{ background: 'rgba(125, 255, 176, 0.1)', color: '#7DFFB0', fontSize: '0.75rem', padding: '4px 10px', borderRadius: '12px', fontWeight: 700 }}>Active</span>
                  </div>

                  {/* Map Simulation */}
                  <div style={{ 
                    height: '280px', 
                    background: '#e0e9f0', 
                    position: 'relative',
                    backgroundImage: 'radial-gradient(#a3b8cc 1px, transparent 1px)',
                    backgroundSize: '20px 20px',
                    borderBottomRadius: '14px'
                  }}>
                    {/* SVG Route Line */}
                    <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
                      <path d="M 80,180 C 120,120 150,150 200,80 S 300,60 340,120" fill="none" stroke="var(--secondary)" strokeWidth="4" strokeDasharray="8 4" strokeLinecap="round" />
                    </svg>

                    {/* Pin 1 - Start */}
                    <div style={{ position: 'absolute', top: '160px', left: '60px', textAlign: 'center' }}>
                      <div style={{ width: '40px', height: '40px', background: 'var(--primary)', borderRadius: '50%', border: '4px solid white', boxShadow: '0 4px 10px rgba(0,0,0,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>1</div>
                      <div style={{ background: 'white', color: '#333', fontSize: '0.75rem', padding: '2px 6px', borderRadius: '4px', marginTop: '4px', fontWeight: 600, boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>Client 1</div>
                    </div>

                    {/* Pin 2 */}
                    <div style={{ position: 'absolute', top: '60px', left: '180px', textAlign: 'center' }}>
                      <div style={{ width: '40px', height: '40px', background: 'var(--accent)', borderRadius: '50%', border: '4px solid white', boxShadow: '0 4px 10px rgba(0,0,0,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#333', fontWeight: 'bold' }}>2</div>
                      <div style={{ background: 'white', color: '#333', fontSize: '0.75rem', padding: '2px 6px', borderRadius: '4px', marginTop: '4px', fontWeight: 600, boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>Client 2</div>
                    </div>

                    {/* Pin 3 - Destination */}
                    <div style={{ position: 'absolute', top: '100px', left: '320px', textAlign: 'center' }}>
                      <div style={{ width: '40px', height: '40px', background: 'var(--secondary)', borderRadius: '50%', border: '4px solid white', boxShadow: '0 4px 10px rgba(0,0,0,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', fontWeight: 'bold' }}>3</div>
                      <div style={{ background: 'white', color: '#333', fontSize: '0.75rem', padding: '2px 6px', borderRadius: '4px', marginTop: '4px', fontWeight: 600, boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>Client 3</div>
                    </div>
                  </div>

                  {/* Bottom Stats */}
                  <div style={{ padding: '20px', background: 'var(--primary-dark)', borderRadius: '0 0 14px 14px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                      <div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '4px', textTransform: 'uppercase' }}>Total Distance</div>
                        <div style={{ fontSize: '1.2rem', color: 'white', fontWeight: 700 }}>15.2 mi</div>
                      </div>
                      <div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '4px', textTransform: 'uppercase' }}>Estimated Time</div>
                        <div style={{ fontSize: '1.2rem', color: 'white', fontWeight: 700 }}>1h 45m</div>
                      </div>
                    </div>
                  </div>

               </div>
            </div>

          </div>
        </div>
      </section>

      <Footer lang="en" />
    </main>
  );
}
