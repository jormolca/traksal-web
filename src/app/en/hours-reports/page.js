import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import InformesPresentacion from '@/components/InformesPresentacion';

export const metadata = {
  title: 'Working Hours Reports | Traksal',
  description: 'Generate and export official documentation for HR and audits. Access historical overtime data and working day logs.',
  keywords: ['hours report', 'time tracking', 'overtime', 'HR documentation', 'labor audit', 'traksal'],
  alternates: {
    canonical: 'https://www.traksal.com/en/hours-reports',
    languages: { 
      'es': 'https://www.traksal.com/informe-de-horas', 
      'en': 'https://www.traksal.com/en/hours-reports' 
    }
  },
  openGraph: {
    title: 'Real-Time Working Hours Reports | Traksal',
    description: 'Generate official working hours reports ready for audits.',
    url: 'https://www.traksal.com/en/hours-reports',
    type: 'website',
  }
};

export default function HoursReportsPage() {
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
          <div className="responsive-grid">
            
            {/* Text Side */}
            <div style={{ order: 1 }}>
              <span className="section-label">Transparent Management</span>
              <h1 style={{ marginBottom: '24px', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)' }}>
                Real-time <br />
                <span className="gradient-text">hours reports.</span>
              </h1>
              <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '40px', maxWidth: '500px' }}>
                Generate and export the official documentation required for HR and audits. Both the company and the employee have access to their history with total transparency.
              </p>
              
              <div style={{ display: 'grid', gap: '24px' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ width: '40px', height: '40px', background: 'rgba(194, 158, 94, 0.1)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)', flexShrink: 0 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '4px', color: 'white' }}>Official Documentation</h3>
                    <p style={{ fontSize: '0.95rem' }}>View and export complete working day logs, signature control, and staff history.</p>
                  </div>
                </div>
                
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ width: '40px', height: '40px', background: 'rgba(162, 217, 243, 0.1)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--secondary)', flexShrink: 0 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '4px', color: 'white' }}>Overtime Control</h3>
                    <p style={{ fontSize: '0.95rem' }}>Easily visualize the balance of worked hours vs. theoretical hours for each team member.</p>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '56px' }}>
                <Link href="/en/#contact" className="btn btn-primary btn-lg">
                  Start for free now
                </Link>
              </div>
            </div>

            {/* Visual Side */}
            <div style={{ order: 2 }}>
              <InformesPresentacion />
            </div>

          </div>
        </div>
      </section>

      <Footer lang="en" />
    </main>
  );
}
