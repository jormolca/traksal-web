import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'About Traksal | The CRM built by and for sales reps',
  description: 'Learn the story behind Traksal. A CRM software developed by experts with years of experience in sales and commercial team management.',
  keywords: ['about traksal', 'traksal story', 'traksal team', 'sales crm', 'commercial software development'],
  alternates: {
    canonical: 'https://www.traksal.com/en/about-us',
    languages: { 'es': 'https://www.traksal.com/sobre-traksal', 'en': 'https://www.traksal.com/en/about-us' }
  },
  openGraph: {
    title: 'About Traksal | The CRM built by sales reps',
    description: 'Discover how our street experience led us to create the ultimate CRM for sales teams.',
    url: 'https://www.traksal.com/en/about-us',
    type: 'website',
  }
};

export default function AboutUsPage() {
  return (
    <main style={{ background: 'var(--primary)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar lang="en" />
      
      <section style={{
        paddingTop: 'calc(var(--nav-height) + 60px)',
        paddingBottom: '80px',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <div className="container">
           
           {/* Hero Section */}
           <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 80px auto' }}>
              <h2 className="section-label" style={{ justifyContent: 'center' }}>ABOUT TRAKSAL</h2>
              <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.1, margin: '24px 0' }}>
                We know the streets. <br />
                <span className="gradient-text">That's why we built Traksal.</span>
              </h1>
              <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Traksal isn't just a technology company. We are a team with an extensive commercial background who decided to build the tool we always wished we had in our hands.
              </p>
           </div>

           {/* Story Section */}
           <div className="responsive-grid" style={{ alignItems: 'center', gap: '60px', marginBottom: '100px' }}>
              <div style={{ order: 1 }}>
                <h3 style={{ fontSize: '2rem', color: 'white', marginBottom: '24px' }}>By sales reps, for sales reps</h3>
                <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '20px', lineHeight: 1.7 }}>
                  For years, we suffered the classic problems of sales management: complex CRMs designed for office workers, endless end-of-month reports, lost expense receipts, and poorly planned routes.
                </p>
                <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                  We realized that most software on the market didn't understand the day-to-day life of a salesperson. That's why we decided to merge our deep sales experience with cutting-edge technology to create <strong>Traksal Sales Drive</strong>.
                </p>
                <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                  Furthermore, we understand that every business is unique. We have designed a robust, "universal" system for all sectors, while maintaining the technical flexibility to build a <strong>tailor-made suit</strong> that fits perfectly with your company's unique processes.
                </p>
              </div>
              <div style={{ order: 2, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '24px', padding: '40px', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '200px', height: '200px', background: 'var(--accent)', filter: 'blur(100px)', opacity: 0.2, borderRadius: '50%' }}></div>
                <div style={{ fontSize: '4rem', marginBottom: '20px' }}>🤝</div>
                <h4 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '16px' }}>Our Unfair Advantage</h4>
                <p style={{ color: '#94a3b8', lineHeight: 1.6 }}>
                  Knowing exactly what a Sales Manager needs to audit their team, and what a Sales Rep needs to not waste time in front of the client. That empathy is the core of our code.
                </p>
              </div>
           </div>

           {/* Philosophy Section */}
           <div style={{ textAlign: 'center', marginBottom: '60px' }}>
             <h2 style={{ fontSize: '2.5rem', color: 'white' }}>Our Development Philosophy</h2>
           </div>

           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', marginBottom: '80px' }}>
              <div style={{ background: '#0F1A2A', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px', padding: '32px' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(162, 217, 243, 0.1)', color: 'var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', marginBottom: '20px' }}>
                  📱
                </div>
                <h4 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '12px' }}>True Mobile First</h4>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                  Sales reps don't carry a laptop in their car. Everything in Traksal is designed to be fast, intuitive, and manageable with a single finger from a smartphone or tablet.
                </p>
              </div>

              <div style={{ background: '#0F1A2A', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px', padding: '32px' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(194, 158, 94, 0.1)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', marginBottom: '20px' }}>
                  ⚡
                </div>
                <h4 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '12px' }}>Practical AI</h4>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                  We don't use AI because it's trendy. We use it to solve real problems: reading crumpled expense receipts, writing performance evaluations, and optimizing routes.
                </p>
              </div>

              <div style={{ background: '#0F1A2A', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px', padding: '32px' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(235, 153, 255, 0.1)', color: '#EB99FF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', marginBottom: '20px' }}>
                  📈
                </div>
                <h4 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '12px' }}>Data without noise</h4>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                  Sales directors don't have time to dive into Excel. We deliver KPIs, coverage, and effectiveness ratios processed, clean, and in real time.
                </p>
              </div>
           </div>

           {/* CTA */}
           <div style={{ background: 'linear-gradient(135deg, rgba(162, 217, 243, 0.1) 0%, rgba(194, 158, 94, 0.1) 100%)', borderRadius: '24px', padding: '60px 20px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.1)' }}>
             <h2 style={{ color: 'white', fontSize: '2rem', marginBottom: '20px' }}>Ready to digitalize your team?</h2>
             <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px auto' }}>
               Join the companies that have already left paper behind and taken absolute control of their sales.
             </p>
             <Link href="/en#contact" className="btn btn-primary btn-lg">
               Speak with a sales expert
             </Link>
           </div>

        </div>
      </section>

      <Footer lang="en" />
    </main>
  );
}
