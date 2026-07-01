import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import KpisPresentacion from '@/components/KpisPresentacion';

export const metadata = {
  title: 'AI Sales Team KPIs & Evaluation | Traksal CRM',
  description: 'Sales team KPIs and evaluation software. Control metrics in real time, calculate incentives, and generate reports with Artificial Intelligence.',
  keywords: ['sales team kpis', 'ai sales evaluation', 'commercial reports', 'sales incentives calculation', 'sales kpis software', 'traksal crm reports'],
  alternates: {
    canonical: 'https://www.traksal.com/en/sales-team-kpis-evaluation',
    languages: { 'es': 'https://www.traksal.com/kpis-y-evaluacion-equipo-comercial', 'en': 'https://www.traksal.com/en/sales-team-kpis-evaluation' }
  },
  openGraph: {
    title: 'AI Sales Team KPIs & Evaluation | Traksal',
    description: 'Absolute control of your sales team. Real-time metrics, incentives calculation, and automatically written AI evaluations.',
    url: 'https://www.traksal.com/en/sales-team-kpis-evaluation',
    type: 'website',
  }
};

export default function SalesTeamKpisEvaluationPage() {
  return (
    <main style={{ background: 'var(--primary)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar lang="en" />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Traksal Sales KPIs & Evaluation",
            "operatingSystem": "Web",
            "applicationCategory": "BusinessApplication",
            "featureList": [
              "Real-time sales team KPIs",
              "AI-written commercial evaluation",
              "Automatic calculation of incentives and commissions",
              "Export reports to Excel"
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
        paddingTop: 'calc(var(--nav-height) + 40px)',
        paddingBottom: '80px',
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <div className="container">
           <div className="responsive-grid" style={{ position: 'relative', alignItems: 'center' }}>
      
              {/* Text Side */}
              <div style={{ order: 1 }}>
                                <h2 className="section-label">SALES KPIs & EVALUATION</h2>
                
                <h1 style={{ marginBottom: '24px', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', lineHeight: 1.1 }}>
                  Absolute control: <br />
                  <span className="gradient-text">evaluate your sales team with AI.</span>
                </h1>
                <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '40px', maxWidth: '500px', lineHeight: 1.6 }}>
                  Audit performance in one click and let Artificial Intelligence analyze the data for you. Traksal centralizes metrics, coverage, and objectives of your entire team so you can make data-driven decisions.
                </p>
                
                <div style={{ display: 'grid', gap: '24px' }}>
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(194, 158, 94, 0.2)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '1.2rem' }}>
                      📊
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.1rem', marginBottom: '4px', color: 'white' }}>Real-time metrics</h3>
                      <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', margin: 0 }}>Control the number of visits, product distribution, and global objectives progression.</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(162, 217, 243, 0.2)', color: 'var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '1.2rem' }}>
                      💰
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.1rem', marginBottom: '4px', color: 'white' }}>Incentives Calculation</h3>
                      <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', margin: 0 }}>Automatically calculate commissions and objectives achieved for each rep. Ready for payroll.</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(235, 153, 255, 0.2)', color: '#EB99FF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '1.2rem' }}>
                      ✨
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.1rem', marginBottom: '4px', color: 'white' }}>AI Analytical Assistant</h3>
                      <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', margin: 0 }}>Artificial Intelligence writes detailed evaluation reports for each rep, highlighting strengths and areas for improvement.</p>
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: '40px' }}>
                  <Link href="/en#contact" className="btn btn-primary btn-lg">
                    Start now
                  </Link>
                </div>
              </div>

              {/* Visual Side */}
              <div style={{ order: 2, display: 'flex', justifyContent: 'center', position: 'sticky', top: '140px', alignSelf: 'start' }}>
                 <div style={{ width: '100%', maxWidth: '650px', position: 'relative' }}>
                    <KpisPresentacion lang="en" />
                 </div>
              </div>

           </div>
        </div>
      </section>

      <Footer lang="en" />
    </main>
  );
}
