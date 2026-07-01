import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import CatalogoPresentacion from '@/components/CatalogoPresentacion';

export const metadata = {
  title: 'On-The-Spot Sales Order Taking App | Traksal CRM',
  description: 'Digital and interactive catalog for sales reps. Take orders on the spot without paper, updated in real time and synchronized with your CRM.',
  keywords: ['digital sales catalog', 'order taking app', 'interactive catalog', 'crm with catalog', 'sales digitalization'],
  alternates: {
    canonical: 'https://www.traksal.com/en/interactive-catalog',
    languages: { 'es': 'https://www.traksal.com/catalogo-interactivo-para-comerciales', 'en': 'https://www.traksal.com/en/interactive-catalog' }
  },
  openGraph: {
    title: 'Interactive Catalog & Order Taking | Traksal',
    description: 'Replace paper. Your sales reps will be able to take orders right from the catalog on their tablet immediately.',
    url: 'https://www.traksal.com/en/interactive-catalog',
    type: 'website',
  }
};

export default function InteractiveCatalogPage() {
  return (
    <>
      <Navbar lang="en" />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Traksal Interactive Catalog",
            "operatingSystem": "Web, iOS, Android",
            "applicationCategory": "BusinessApplication",
            "featureList": [
              "Paperless digital catalog",
              "On-the-spot order taking",
              "Real-time synchronization with HQ",
              "Product families and stock management"
            ],
            "offers": {
              "@type": "Offer",
              "price": "0.00",
              "priceCurrency": "EUR"
            }
          }),
        }}
      />

      <main style={{ paddingTop: '100px', minHeight: '100vh', background: 'var(--bg-color)', color: 'var(--text-color)' }}>
        
        {/* HERO SECTION */}
        <section className="section" style={{ paddingBottom: '40px' }}>
          <div className="container" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                        <span className="section-label">INTERACTIVE CATALOG</span>
            <h1 className="hero-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', marginBottom: '24px', lineHeight: 1.1 }}>
              The ultimate catalog: <br />
              <span className="gradient-text">sell on the spot without leaving the app.</span>
            </h1>
            <p className="hero-subtitle" style={{ fontSize: '1.25rem', marginBottom: '40px', color: 'var(--text-secondary)' }}>
              Forget about printing heavy, outdated catalogs. With Traksal, your team carries the entire portfolio on their tablet. Add products to the order while showing new items to the client and synchronize the sale instantly.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
              <Link href="/en#contact" className="btn btn-primary" style={{ padding: '14px 32px', fontSize: '1.1rem' }}>I want to try the catalog</Link>
            </div>
          </div>
        </section>

        {/* MOCKUP SECTION */}
        <section className="section" style={{ paddingBottom: '0' }}>
          <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ width: '100%', position: 'relative' }}>
               <CatalogoPresentacion lang="en" />
            </div>
          </div>
        </section>

        {/* FEATURES TEXT */}
        <section className="section">
          <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
              
              <div className="feature-item" style={{ display: 'flex', gap: '20px' }}>
                <div style={{ fontSize: '2.5rem', flexShrink: 0 }}>📱</div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Digital and paperless</h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>Catalog always updated on the rep's device. Zero printing costs.</p>
                </div>
              </div>

              <div className="feature-item" style={{ display: 'flex', gap: '20px' }}>
                <div style={{ fontSize: '2.5rem', flexShrink: 0 }}>🛒</div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>On-the-spot orders</h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>Add quantities directly from the catalog or by searching by SKU.</p>
                </div>
              </div>

              <div className="feature-item" style={{ display: 'flex', gap: '20px' }}>
                <div style={{ fontSize: '2.5rem', flexShrink: 0 }}>🔗</div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Integrated with CRM</h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>Prices change in real time if HQ updates them. The order is registered instantly.</p>
                </div>
              </div>

              <div className="feature-item" style={{ display: 'flex', gap: '20px' }}>
                <div style={{ fontSize: '2.5rem', flexShrink: 0 }}>📦</div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Product management</h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>Organized by families, subfamilies, and direct stock visibility.</p>
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
