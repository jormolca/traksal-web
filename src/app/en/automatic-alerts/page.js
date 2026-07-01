import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Automatic Clock-In Alerts & Notifications | Traksal',
  description: 'Traksal automatically notifies you by email if an employee forgets to clock in at their expected time. Avoid end-of-month errors and stay on top of time tracking.',
  keywords: ['clock in alerts', 'forgot to clock in', 'time tracking notifications', 'employee alerts', 'traksal'],
  alternates: {
    canonical: 'https://www.traksal.com/en/automatic-alerts',
    languages: { 'es': 'https://www.traksal.com/alertas-automaticas', 'en': 'https://www.traksal.com/en/automatic-alerts' }
  },
  openGraph: {
    title: 'Automatic Clock-In Alerts | Traksal',
    description: 'Get instant alerts when an employee forgets to clock in.',
    url: 'https://www.traksal.com/en/automatic-alerts',
    type: 'website',
  }
};

export default function AutomaticAlertsPage() {
  return (
    <main style={{ background: 'var(--primary)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar lang="en" />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Traksal Automatic Alerts",
            "operatingSystem": "Web",
            "applicationCategory": "BusinessApplication",
            "featureList": [
              "Real-time schedule monitoring",
              "Automatic email notifications",
              "Missed clock-in detection",
              "Proactive HR management"
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
              <span className="section-label">Error Prevention</span>
              <h1 style={{ marginBottom: '24px', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', lineHeight: 1.1 }}>
                The system that <br />
                <span className="gradient-text">watches out for you.</span>
              </h1>
              <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '40px', maxWidth: '500px', lineHeight: 1.6 }}>
                No more reaching the end of the month only to discover half the clock-ins are missing. Traksal detects missed entries instantly and proactively alerts you.
              </p>
              
              <div style={{ display: 'grid', gap: '24px' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ width: '40px', height: '40px', background: 'rgba(194, 158, 94, 0.1)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)', flexShrink: 0 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '4px', color: 'white' }}>Schedule Monitoring</h3>
                    <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>Traksal knows each worker's expected schedule. If their start time passes and the system hasn't registered any activity, the alarms go off.</p>
                  </div>
                </div>
                
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ width: '40px', height: '40px', background: 'rgba(162, 217, 243, 0.1)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--secondary)', flexShrink: 0 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '4px', color: 'white' }}>Direct Email Alert</h3>
                    <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>As the person responsible for your clock-ins, you receive an immediate email indicating that you haven't clocked in and at what time you should have. No need to open the app.</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ width: '40px', height: '40px', background: 'rgba(125, 255, 176, 0.08)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#7DFFB0', flexShrink: 0 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '4px', color: 'white' }}>Quick Correction</h3>
                    <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>By finding out right away, you can access through the link to clock in or request a time correction, keeping legal reports perfect at all times.</p>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '56px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <Link href="/en#contact" className="btn btn-primary btn-lg">
                  Start automating today
                </Link>
              </div>
            </div>

            {/* Visual Side */}
            <div style={{ order: 2, display: 'flex', justifyContent: 'center', position: 'sticky', top: '140px', alignSelf: 'start' }}>
               <div style={{ 
                  background: '#FFFFFF', // Email background is usually white
                  borderRadius: '12px', 
                  border: '1px solid rgba(0,0,0,0.1)', 
                  padding: '0', 
                  boxShadow: '0 30px 80px rgba(0,0,0,0.4)',
                  width: '100%',
                  maxWidth: '450px',
                  overflow: 'hidden'
                }} className="animate-float">
                  
                  {/* Email Header Mockup */}
                  <div style={{ background: '#F2F2F2', padding: '16px', borderBottom: '1px solid #E0E0E0' }}>
                    <div style={{ fontSize: '0.8rem', color: '#666', marginBottom: '4px' }}>From: <strong>Traksal Notifications</strong></div>
                    <div style={{ fontSize: '0.8rem', color: '#666', marginBottom: '8px' }}>To: <strong>David Jimenez</strong></div>
                    <div style={{ fontSize: '1rem', color: '#222', fontWeight: 600 }}>Alert: Missed clock-in detected ⚠️</div>
                  </div>

                  {/* Email Body Mockup */}
                  <div style={{ padding: '24px' }}>
                    <div style={{ width: '40px', height: '40px', background: 'var(--primary)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                    </div>
                    
                    <h2 style={{ fontSize: '1.2rem', color: '#222', marginBottom: '12px', marginTop: 0 }}>Hello,</h2>
                    <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.5, marginBottom: '20px' }}>
                      The system has detected that you failed to register your clock-in at the scheduled time:
                    </p>
                    
                    <div style={{ background: '#F9F9F9', padding: '16px', borderRadius: '8px', border: '1px solid #EEEEEE', marginBottom: '24px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                        <span style={{ fontSize: '0.85rem', color: '#777' }}>User:</span>
                        <strong style={{ fontSize: '0.9rem', color: '#222' }}>David Jimenez</strong>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                        <span style={{ fontSize: '0.85rem', color: '#777' }}>Expected time:</span>
                        <strong style={{ fontSize: '0.9rem', color: '#222' }}>09:00 AM</strong>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span style={{ fontSize: '0.85rem', color: '#777' }}>Current status:</span>
                        <span style={{ fontSize: '0.8rem', background: '#FFEBEE', color: '#D32F2F', padding: '2px 8px', borderRadius: '4px', fontWeight: 600 }}>Missed</span>
                      </div>
                    </div>
                    
                    <div style={{ textAlign: 'center' }}>
                      <button style={{ background: 'var(--primary)', color: 'white', border: 'none', padding: '12px 24px', borderRadius: '6px', fontSize: '0.95rem', fontWeight: 600, cursor: 'pointer', width: '100%' }}>
                        Go to clock-in now
                      </button>
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
