import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import PreparacionVisitasPresentacion from '@/components/PreparacionVisitasPresentacion';

export const metadata = {
  title: 'Commercial Visits Programming | Traksal CRM',
  description: 'Software for commercial visits programming. Prepare every sale by checking objectives, daily agenda, and order history from your mobile before entering.',
  keywords: ['commercial visits programming', 'sales visit preparation', 'sales rep agenda', 'crm sales routes', 'client order history'],
  alternates: {
    canonical: 'https://www.traksal.com/en/commercial-visits-programming',
    languages: { 'es': 'https://www.traksal.com/programacion-visitas-comerciales', 'en': 'https://www.traksal.com/en/commercial-visits-programming' }
  },
  openGraph: {
    title: 'Commercial Visits Programming | Traksal',
    description: 'Prepare every sale by checking your clients\' agenda, objectives, and history before entering.',
    url: 'https://www.traksal.com/en/commercial-visits-programming',
    type: 'website',
  }
};

export default function CommercialVisitsProgrammingPage() {
  return (
    <main style={{ background: 'var(--primary)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar lang="en" />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Traksal Commercial Visits Programming",
            "operatingSystem": "Web, iOS, Android",
            "applicationCategory": "BusinessApplication",
            "featureList": [
              "Sales rep daily agenda",
              "Check objectives per client",
              "Sales history and physical orders",
              "Real-time sync with headquarters"
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
                                <h2 className="section-label">COMMERCIAL VISITS PROGRAMMING</h2>
                
                <h1 style={{ marginBottom: '24px', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', lineHeight: 1.1 }}>
                  Information is power: <br />
                  <span className="gradient-text">prepare every sale before crossing the door.</span>
                </h1>
                <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '40px', maxWidth: '500px', lineHeight: 1.6 }}>
                  Your daily agenda, objectives per client, and order history, always in your rep's pocket. Once the route is optimized, success depends on preparation. No improvisations: ensure a perfect negotiation and allow them to review placed orders instantly.
                </p>
                
                <div style={{ display: 'grid', gap: '24px' }}>
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(194, 158, 94, 0.2)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '1.2rem' }}>
                      🎯
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.1rem', marginBottom: '4px', color: 'white' }}>Strategic preparation</h3>
                      <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', margin: 0 }}>Check history, client status, and key notes from the car. No more blind sales.</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(162, 217, 243, 0.2)', color: 'var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '1.2rem' }}>
                      📈
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.1rem', marginBottom: '4px', color: 'white' }}>Clear objectives per client</h3>
                      <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', margin: 0 }}>Visualize the specific goals assigned to each retailer to focus the sales pitch.</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(235, 153, 255, 0.2)', color: '#EB99FF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '1.2rem' }}>
                      🛒
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.1rem', marginBottom: '4px', color: 'white' }}>Total post-visit control</h3>
                      <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', margin: 0 }}>Review closed orders during the route at any time to confirm details.</p>
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
                    <PreparacionVisitasPresentacion lang="en" />
                 </div>
              </div>

           </div>
        </div>
      </section>

      <Footer lang="en" />
    </main>
  );
}
