import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import FichajeDemo from '@/components/FichajeDemo';


export const metadata = {
  title: 'One-Click Daily Clock-In & Out | Traksal Attendance Control',
  description: 'Discover how Traksal simple clock-in simplified time tracking for your sales team. One click from mobile, optional geolocation and full legal compliance.',
  keywords: ['daily clock-in', 'time tracking', 'attendance control', 'employee geolocation', 'labor law compliance', 'traksal'],
  alternates: {
    canonical: 'https://traksal.com/en/clock-in-clock-out',
    languages: { 'es': 'https://traksal.com/fichaje-diario', 'en': 'https://traksal.com/en/clock-in-clock-out' }
  },
  openGraph: {
    title: 'One-Click Daily Clock-In & Out | Traksal',
    description: 'The easiest and fastest way to comply with mandatory time tracking.',
    url: 'https://traksal.com/en/clock-in-clock-out',
    type: 'website',
  }
};

export default function ClockInPage() {
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
            "name": "Traksal Clock-In & Clock-Out",
            "operatingSystem": "iOS, Android, Web",
            "applicationCategory": "BusinessApplication",
            "featureList": [
              "One-click clock-in",
              "Optional geolocation",
              "Monthly legal reports",
              "Real-time sync"
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
          <div className="responsive-grid">
            
            {/* Text Side */}
            <div style={{ order: 1 }}>
              <span className="section-label">Feature</span>
              <h1 style={{ marginBottom: '24px', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)' }}>
                Daily clock-in <br />
                <span className="gradient-text">in just one click.</span>
              </h1>
              <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '40px', maxWidth: '500px' }}>
                We have removed complexity. Your employees only need to open the app and tap a button. No forms, no waiting.
              </p>
              
              <div style={{ display: 'grid', gap: '24px' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ width: '40px', height: '40px', background: 'rgba(194, 158, 94, 0.1)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)', flexShrink: 0 }}>
                    ✓
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '4px', color: 'white' }}>With or without Geolocation</h3>
                    <p style={{ fontSize: '0.95rem' }}>You decide if you want to record the exact location of the clock-in or keep it private. Fully configurable by the administrator.</p>
                  </div>
                </div>
                
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ width: '40px', height: '40px', background: 'rgba(162, 217, 243, 0.1)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--secondary)', flexShrink: 0 }}>
                    ✓
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '4px', color: 'white' }}>Immediate Availability</h3>
                    <p style={{ fontSize: '0.95rem' }}>The clock-in syncs instantly with the admin panel so you have real-time control of your team.</p>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '56px' }}>
                <Link href="/en/#contact" className="btn btn-primary btn-lg">
                  Try it for free now
                </Link>
              </div>
            </div>

            {/* Visual Side */}
            <div style={{ order: 2 }}>
              <FichajeDemo />
            </div>

          </div>
        </div>
      </section>

      <Footer lang="en" />
    </main>
  );
}
