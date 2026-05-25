import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import FichaVisitaPresentacion from '@/components/FichaVisitaPresentacion';

export const metadata = {
  title: 'Visit Report (GPV) | Traksal CRM',
  description: 'The sales rep logs each visit from their tablet: shelf status, order taking, incidents and geolocation. The ultimate tool for GPV.',
  keywords: ['visit report', 'gpv', 'point of sale manager', 'sales report', 'order taking', 'ipad crm', 'traksal'],
  alternates: {
    canonical: 'https://www.traksal.com/en/visit-report',
    languages: { 
      'es': 'https://www.traksal.com/ficha-de-visita', 
      'en': 'https://www.traksal.com/en/visit-report' 
    }
  },
  openGraph: {
    title: 'GPV Visit Report | Traksal',
    description: 'Control the point of sale from your tablet. Auditing, orders and time tracking on a single screen.',
    url: 'https://www.traksal.com/en/visit-report',
    type: 'website',
  }
};

export default function VisitReportPage() {
  return (
    <main style={{ background: 'var(--primary)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar lang="en" />
      
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
              <span className="section-label">Point of Sale Manager (GPV)</span>
              <h1 style={{ marginBottom: '24px', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)' }}>
                Visit report <br />
                <span className="gradient-text">all on your tablet.</span>
              </h1>
              <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '40px', maxWidth: '500px' }}>
                Forget paper reports. When the rep arrives at the store, they open their iPad and have everything they need to audit, order, and report back to HQ in record time.
              </p>
              
              <div style={{ display: 'grid', gap: '24px' }}>
                
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ width: '40px', height: '40px', background: 'rgba(162, 217, 243, 0.1)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--secondary)', flexShrink: 0 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '4px', color: 'white' }}>Geolocation and Time Tracking</h3>
                    <p style={{ fontSize: '0.95rem' }}>Traksal saves the <strong>exact GPS location</strong> when starting and ending the visit, automatically calculating the actual time spent inside the establishment.</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ width: '40px', height: '40px', background: 'rgba(255, 95, 86, 0.1)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FF5F56', flexShrink: 0 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '4px', color: 'white' }}>Smart Clock-in Alert</h3>
                    <p style={{ fontSize: '0.95rem' }}>Did the rep forget to clock in when leaving home? When trying to open the first visit of the day, the system will alert them, forcing them to register their <strong>Start of Shift</strong>.</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ width: '40px', height: '40px', background: 'rgba(194, 158, 94, 0.1)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)', flexShrink: 0 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '4px', color: 'white' }}>Order Taking and Catalog</h3>
                    <p style={{ fontSize: '0.95rem' }}>Add restock lines instantly (physical or electronic ticket) or switch to <Link href="#catalogo" style={{ color: 'var(--secondary)' }}>Interactive Catalog Mode</Link> to show new arrivals and close sales on the spot.</p>
                  </div>
                </div>

              </div>

              <div style={{ marginTop: '56px' }}>
                <Link href="/en/#contact" className="btn btn-primary btn-lg">
                  Try GPV Report for free
                </Link>
              </div>
            </div>

            {/* Visual Side */}
            <div style={{ order: 2, display: 'flex', justifyContent: 'center', position: 'sticky', top: '140px', alignSelf: 'start' }}>
              <FichaVisitaPresentacion lang="en" />
            </div>

          </div>
        </div>
      </section>

      <Footer lang="en" />
    </main>
  );
}
