import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Centralized Request Management for Managers | Traksal',
  description: 'Control all vacation requests, time off, and clock-in corrections from your team in a single centralized dashboard. Save time and approve in one click.',
  keywords: ['request management', 'approve absences', 'hr dashboard', 'review clock-ins', 'traksal'],
  alternates: {
    canonical: 'https://www.traksal.com/en/request-management',
    languages: { 'es': 'https://www.traksal.com/gestion-de-solicitudes', 'en': 'https://www.traksal.com/en/request-management' }
  },
  openGraph: {
    title: 'Centralized Request Management | Traksal',
    description: 'Control all your team\'s requests in a single dashboard.',
    url: 'https://www.traksal.com/en/request-management',
    type: 'website',
  }
};

export default function RequestManagementPage() {
  return (
    <main style={{ background: 'var(--primary)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar lang="en" />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Traksal Manager Dashboard",
            "operatingSystem": "Web",
            "applicationCategory": "BusinessApplication",
            "featureList": [
              "Centralized manager dashboard",
              "Vacation and time-off approval",
              "Clock-in correction management",
              "Complete resolution history"
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
              <span className="section-label">For Managers</span>
              <h1 style={{ marginBottom: '24px', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', lineHeight: 1.1 }}>
                Your whole team, <br />
                <span className="gradient-text">under control.</span>
              </h1>
              <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '40px', maxWidth: '500px', lineHeight: 1.6 }}>
                The ultimate dashboard for managers. View, review and respond to all your employees' requests without leaving the platform.
              </p>
              
              <div style={{ display: 'grid', gap: '24px' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ width: '40px', height: '40px', background: 'rgba(194, 158, 94, 0.1)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)', flexShrink: 0 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '4px', color: 'white' }}>Unified Review Inbox</h3>
                    <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>From a single screen, you can see who has requested a vacation, who is asking for time off, or who needs to correct a missed clock-in.</p>
                  </div>
                </div>
                
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ width: '40px', height: '40px', background: 'rgba(162, 217, 243, 0.1)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--secondary)', flexShrink: 0 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '4px', color: 'white' }}>1-Click Resolution</h3>
                    <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>Stop wasting time replying to emails. Approve or deny any request instantly, keeping your history always clean and organized.</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ width: '40px', height: '40px', background: 'rgba(125, 255, 176, 0.08)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#7DFFB0', flexShrink: 0 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '4px', color: 'white' }}>Records & History</h3>
                    <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>Every decision is saved in the system so you have an auditable record of corrected hours and approved vacations month by month.</p>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '56px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <Link href="/en#contact" className="btn btn-primary btn-lg">
                  Simplify your management
                </Link>
              </div>
            </div>

            {/* Visual Side */}
            <div style={{ order: 2, display: 'flex', justifyContent: 'center', position: 'sticky', top: '140px', alignSelf: 'start' }}>
               <div style={{ 
                  background: 'var(--primary-mid)', 
                  borderRadius: '20px', 
                  border: '1px solid rgba(162,217,243,0.2)', 
                  padding: '28px', 
                  boxShadow: '0 30px 80px rgba(0,0,0,0.4)',
                  width: '100%',
                  maxWidth: '450px'
                }} className="animate-float">
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>My Tasks as Manager</div>
                  </div>

                  <div style={{ display: 'flex', gap: '8px', marginBottom: '16px', borderBottom: '1px solid var(--border-light)', paddingBottom: '12px' }}>
                    <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', borderBottom: '2px solid var(--secondary)', paddingBottom: '10px' }}>Review Inbox</span>
                    <span style={{ background: '#E74C3C', color: 'white', fontSize: '0.65rem', padding: '2px 6px', borderRadius: '10px', fontWeight: 800 }}>2</span>
                  </div>

                  {[
                    { name: 'Xavier Ruiz', type: 'Clock-In Correction', details: 'Forgot to clock out at 6:00 PM', date: 'Yesterday' },
                    { name: 'Helen Garcia', type: 'Vacation', details: 'From 12/22/2026 to 01/02/2027', date: '2 hours ago' }
                  ].map((req, i) => (
                    <div key={i} style={{ padding: '16px', background: 'var(--bg-surface)', borderRadius: '12px', border: '1px solid var(--border-light)', marginBottom: '16px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                        <div>
                          <div style={{ fontWeight: 600, fontSize: '1rem', color: 'white', marginBottom: '4px' }}>{req.name}</div>
                          <div style={{ fontSize: '0.85rem', color: i === 0 ? 'var(--accent)' : 'var(--secondary)', fontWeight: 500 }}>{req.type}</div>
                        </div>
                        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{req.date}</span>
                      </div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '16px', background: 'rgba(255,255,255,0.03)', padding: '8px', borderRadius: '6px' }}>
                        {req.details}
                      </div>
                      <div style={{ display: 'flex', gap: '8px' }}>
                        <button style={{ flex: 1, padding: '8px', background: 'rgba(231,76,60,0.1)', color: '#E74C3C', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 600, fontSize: '0.85rem' }}>Deny</button>
                        <button style={{ flex: 1, padding: '8px', background: 'var(--secondary)', color: 'var(--primary)', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 600, fontSize: '0.85rem' }}>Approve</button>
                      </div>
                    </div>
                  ))}

               </div>
            </div>

          </div>
        </div>
      </section>

      <Footer lang="en" />
    </main>
  );
}
