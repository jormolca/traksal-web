import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import NotaGastosPresentacion from '@/components/NotaGastosPresentacion';

export const metadata = {
  title: 'AI Expense Reports | Traksal CRM',
  description: 'Smart expense report software. Sales reps upload a picture of the receipt and Artificial Intelligence automatically fills in the expenses.',
  keywords: ['commercial expense reports', 'digitalize expense receipts', 'sales expense app', 'ai business expenses', 'traksal crm expenses'],
  alternates: {
    canonical: 'https://www.traksal.com/en/expense-reports',
    languages: { 'es': 'https://www.traksal.com/nota-de-gastos-comerciales', 'en': 'https://www.traksal.com/en/expense-reports' }
  },
  openGraph: {
    title: 'AI Expense Reports | Traksal',
    description: 'Digitalize expenses with a single photo. AI extracts the data and eliminates end-of-month paperwork.',
    url: 'https://www.traksal.com/en/expense-reports',
    type: 'website',
  }
};

export default function ExpenseReportsPage() {
  return (
    <main style={{ background: 'var(--primary)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar lang="en" />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Traksal AI Expense Reports",
            "operatingSystem": "Web, iOS, Android",
            "applicationCategory": "BusinessApplication",
            "featureList": [
              "AI receipt scanning",
              "Auto-fill amount and date",
              "Secure cloud storage",
              "Export expenses to Excel"
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
                                <h2 className="section-label">COMMERCIAL EXPENSE REPORTS</h2>
                
                <h1 style={{ marginBottom: '24px', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', lineHeight: 1.1 }}>
                  Forget paper tickets: <br />
                  <span className="gradient-text">digitalize expenses with a photo.</span>
                </h1>
                <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '40px', maxWidth: '500px', lineHeight: 1.6 }}>
                  End-of-month doesn't have to be a mess of crumpled tickets. With Traksal, your reps take a picture of their receipts and our AI extracts all the data automatically. Everything is centralized, eliminating paper and connecting with admin.
                </p>
                
                <div style={{ display: 'grid', gap: '24px' }}>
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(194, 158, 94, 0.2)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '1.2rem' }}>
                      📸
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.1rem', marginBottom: '4px', color: 'white' }}>AI Recognition</h3>
                      <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', margin: 0 }}>Take a photo of the ticket and Traksal automatically fills in the amount, date, and concept. Without typing.</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(162, 217, 243, 0.2)', color: 'var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '1.2rem' }}>
                      ☁️
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.1rem', marginBottom: '4px', color: 'white' }}>Zero lost paper</h3>
                      <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', margin: 0 }}>Forget stapling tickets and mailing them. All receipts are securely stored in the cloud.</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(235, 153, 255, 0.2)', color: '#EB99FF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '1.2rem' }}>
                      📊
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.1rem', marginBottom: '4px', color: 'white' }}>Excel reports in one click</h3>
                      <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', margin: 0 }}>Select a date range and download a detailed report ready for accounting.</p>
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
                    <NotaGastosPresentacion lang="en" />
                 </div>
              </div>

           </div>
        </div>
      </section>

      <Footer lang="en" />
    </main>
  );
}
