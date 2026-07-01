import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Integrated Vacation & Time Off Requests | Traksal',
  description: 'Discover how to manage your team\'s vacations and time off with Traksal. Built-in request flow, manager review, and automatic approval with notifications.',
  keywords: ['vacation requests', 'time off management', 'approve employee vacations', 'absences', 'traksal'],
  alternates: {
    canonical: 'https://www.traksal.com/en/vacation-requests',
    languages: { 'es': 'https://www.traksal.com/solicitud-vacaciones', 'en': 'https://www.traksal.com/en/vacation-requests' }
  },
  openGraph: {
    title: 'Integrated Vacation & Time Off Requests | Traksal',
    description: 'Simplify absence management in your company with automatic approval flows.',
    url: 'https://www.traksal.com/en/vacation-requests',
    type: 'website',
  }
};

export default function VacationRequestsPage() {
  return (
    <main style={{ background: 'var(--primary)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar lang="en" />
      
      {/* Schema.org JSON-LD for Software Application Feature */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Traksal Vacation Management",
            "operatingSystem": "iOS, Android, Web",
            "applicationCategory": "BusinessApplication",
            "featureList": [
              "In-app requests",
              "Overlap prevention",
              "Manager review inbox",
              "Automatic email notifications"
            ],
            "offers": {
              "@type": "Offer",
              "price": "0.00",
              "priceCurrency": "EUR"
            }
          }),
        }}
      />
      
      {/* Content */}
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
              <span className="section-label">Feature</span>
              <h1 style={{ marginBottom: '24px', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', lineHeight: 1.1 }}>
                Vacation management <br />
                <span className="gradient-text">made easy.</span>
              </h1>
              <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '40px', maxWidth: '500px', lineHeight: 1.6 }}>
                Say goodbye to lost emails and outdated spreadsheets. Traksal integrates the entire absence request and approval cycle into a single platform.
              </p>
              
              <div style={{ display: 'grid', gap: '24px' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ width: '40px', height: '40px', background: 'rgba(194, 158, 94, 0.1)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)', flexShrink: 0 }}>
                    1
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '4px', color: 'white' }}>The employee makes a request</h3>
                    <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>From the app, the worker selects the dates for their vacation or time off. The system automatically blocks requests that overlap with already approved dates.</p>
                  </div>
                </div>
                
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ width: '40px', height: '40px', background: 'rgba(162, 217, 243, 0.1)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--secondary)', flexShrink: 0 }}>
                    2
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '4px', color: 'white' }}>Manager notification</h3>
                    <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>The direct supervisor receives an instant email alert. From their centralized <em>Review Inbox</em>, they can approve or deny the request with a single click.</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ width: '40px', height: '40px', background: 'rgba(125, 255, 176, 0.08)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#7DFFB0', flexShrink: 0 }}>
                    3
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '4px', color: 'white' }}>Automatic confirmation</h3>
                    <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>As soon as the manager makes a decision, the employee receives an email notification and the company calendar is instantly updated.</p>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '56px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <Link href="/en#contact" className="btn btn-primary btn-lg">
                  Try it free now
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
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Review Inbox</div>
                    <span style={{ background: '#E74C3C', color: 'white', fontSize: '0.75rem', padding: '2px 8px', borderRadius: '12px', fontWeight: 800 }}>3 PENDING</span>
                  </div>

                  {[
                    { name: 'Anna Martin', type: 'Vacation', dates: '10/08/2026 - 24/08/2026' },
                    { name: 'Charles Lopez', type: 'Time Off', dates: '05/09/2026 - 05/09/2026' },
                    { name: 'Helen Garcia', type: 'Vacation', dates: '22/12/2026 - 02/01/2027' }
                  ].map((req, i) => (
                    <div key={i} style={{ padding: '16px', background: 'var(--bg-surface)', borderRadius: '12px', border: '1px solid var(--border-light)', marginBottom: '16px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                        <div>
                          <div style={{ fontWeight: 600, fontSize: '1rem', color: 'white', marginBottom: '4px' }}>{req.name}</div>
                          <div style={{ fontSize: '0.85rem', color: 'var(--secondary)', fontWeight: 500 }}>{req.type}</div>
                        </div>
                        <span style={{ background: 'rgba(243, 156, 18, 0.1)', color: '#F39C12', padding: '4px 8px', borderRadius: '6px', fontSize: '0.7rem', fontWeight: 700 }}>PENDING</span>
                      </div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '16px' }}>
                        Dates: {req.dates}
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
