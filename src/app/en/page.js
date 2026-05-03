import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Traksal | CRM Software for Sales Teams – Free Clock-In',
  description: 'Traksal is the CRM software built for field sales teams. Free digital clock-in, visit planning, geographic route optimization, expense reports and interactive catalog.',
  alternates: { canonical: 'https://www.traksal.com/en', languages: { 'es': 'https://www.traksal.com' } }
};

const features_fichaje = [
  { icon: '🕐', title: 'Daily Clock-In', desc: 'Employees clock in from their phone in seconds. With or without geolocation.' },
  { icon: '📊', title: 'Hours Reports', desc: 'Each employee sees their own worked hours summary in real time.' },
  { icon: '🏖️', title: 'Vacation Requests', desc: 'Full request and approval flow for vacation days, built in.' },
  { icon: '📄', title: 'Legal Monthly Report', desc: 'Generate the monthly report with employee signature. Ready for inspection.' },
  { icon: '📧', title: 'Automatic Alerts', desc: 'Email alert if an employee forgets to clock in at the expected time.' },
  { icon: '✅', title: 'Request Management', desc: 'Centralised panel for managers to approve or reject requests.' },
];

const features_crm = [
  { icon: '🗺️', title: 'Geographic Planning', desc: 'Organise visits by route order to optimise time on the road.' },
  { icon: '👥', title: 'Client Assignment', desc: 'Assign client portfolios to each rep with one click or bulk import.' },
  { icon: '📋', title: 'Visit Report (GPV)', desc: 'The rep logs each visit: shelf status, incidents and results.' },
  { icon: '📅', title: 'Visit Scheduling', desc: 'Plan the whole week\'s visits and check status in real time.' },
  { icon: '💰', title: 'Expense Reports', desc: 'Reps log travel expenses and allowances from their phone.' },
  { icon: '📈', title: 'Team KPIs', desc: 'Visit rates, client coverage and individual rep performance.' },
];

export default function EnglishHomePage() {
  return (
    <>
      <Navbar lang="en" />
      <main>

        {/* ── HERO ── */}
        <section style={{
          minHeight: '100vh', display: 'flex', alignItems: 'center',
          paddingTop: 'calc(var(--nav-height) + 40px)',
          background: 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(162,217,243,0.12) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(194,158,94,0.08) 0%, transparent 60%), var(--primary)',
          position: 'relative', overflow: 'hidden'
        }}>
          <div style={{ position: 'absolute', top: '15%', right: '-5%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(162,217,243,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
              <span className="tag tag-accent" style={{ marginBottom: '24px', display: 'inline-flex' }}>
                🚀 Digital clock-in — 100% free
              </span>
              <h1 style={{ marginBottom: '24px', fontSize: 'clamp(2.5rem, 6vw, 4.2rem)', lineHeight: 1.1 }}>
                The software that{' '}
                <span className="gradient-text">drives your sales team</span>{' '}
                forward
              </h1>
              <p style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: 'var(--text-secondary)', maxWidth: '580px', margin: '0 auto 40px' }}>
                Traksal connects your office with your field sales force. From clock-in to order, everything in one single platform.
              </p>
              <div className="hero-buttons" style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="#contact" className="btn btn-primary btn-lg">Start free today →</a>
                <a href="#features" className="btn btn-secondary btn-lg">See features</a>
              </div>
              <p style={{ marginTop: '20px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                ✓ No credit card &nbsp;·&nbsp; ✓ No setup &nbsp;·&nbsp; ✓ Ready in 2 minutes
              </p>
            </div>
          </div>
        </section>

        {/* ── FICHAJE ── */}
        <section id="features" className="section">
          <div className="container">
            <div style={{ maxWidth: '640px', marginBottom: '64px' }}>
              <span className="section-label">Free module</span>
              <h2 style={{ marginBottom: '20px' }}>Digital clock-in, <span className="text-accent">free forever</span></h2>
              <p>No user limits, no expiry. Your team clocks in from their phone in seconds and you have full control from the office.</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
              {features_fichaje.map(f => (
                <div key={f.title} className="card">
                  <div style={{ fontSize: '2rem', marginBottom: '16px' }}>{f.icon}</div>
                  <h3 style={{ marginBottom: '10px', fontSize: '1.05rem' }}>{f.title}</h3>
                  <p style={{ fontSize: '0.9rem', margin: 0 }}>{f.desc}</p>
                </div>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: '48px' }}>
              <a href="#contact" className="btn btn-primary btn-lg">Start free — no card needed →</a>
            </div>
          </div>
        </section>

        {/* ── CRM ── */}
        <section className="section" style={{ background: 'linear-gradient(180deg, var(--primary) 0%, rgba(22,37,57,0.5) 50%, var(--primary) 100%)' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
              <div>
                <span className="section-label" style={{ color: 'var(--secondary)' }}>Coming soon</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px', flexWrap: 'wrap' }}>
                  <h2 style={{ margin: 0 }}>CRM for <span className="text-secondary">field sales</span></h2>
                  <span className="tag tag-blue">In development</span>
                </div>
                <p style={{ marginBottom: '32px', fontSize: '1.05rem' }}>Connect your sales reps with their clients. Plan routes, log visits and measure performance from a single dashboard.</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {features_crm.map(f => (
                    <div key={f.title} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                      <span style={{ fontSize: '1.3rem', flexShrink: 0, marginTop: '2px' }}>{f.icon}</span>
                      <div>
                        <div style={{ fontWeight: 700, color: 'white', marginBottom: '4px', fontSize: '0.95rem' }}>{f.title}</div>
                        <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>{f.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ background: 'var(--primary-mid)', borderRadius: '20px', border: '1px solid rgba(162,217,243,0.2)', padding: '28px', boxShadow: '0 30px 80px rgba(0,0,0,0.4)' }} className="animate-float">
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>Today&apos;s Visit Plan</div>
                {[
                  { name: 'Client 1 Madrid', time: '09:30', status: 'Done', color: '#7DFFB0' },
                  { name: 'Client 2 Barcelona', time: '11:00', status: 'In progress', color: 'var(--secondary)' },
                  { name: 'Client 3 Sevilla', time: '12:30', status: 'Pending', color: 'var(--accent)' },
                  { name: 'Client 4 Valencia', time: '16:00', status: 'Pending', color: 'var(--accent)' },
                ].map(v => (
                  <div key={v.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: '1px solid var(--border)' }}>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '0.88rem', marginBottom: '2px' }}>{v.name}</div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{v.time}</div>
                    </div>
                    <span style={{ fontSize: '0.75rem', padding: '4px 10px', borderRadius: '99px', background: `${v.color}20`, color: v.color, fontWeight: 700 }}>{v.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── PRICING ── */}
        <section id="pricing" className="section" style={{ background: 'rgba(162,217,243,0.03)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <span className="section-label" style={{ justifyContent: 'center' }}>Pricing</span>
            <h2 style={{ marginBottom: '16px' }}>Start free. <span className="text-accent">Scale when ready.</span></h2>
            <p style={{ maxWidth: '500px', margin: '0 auto 56px', fontSize: '1.05rem' }}>No commitments. Clock-in is always free. CRM when you are ready.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', maxWidth: '900px', margin: '0 auto' }}>
              <div className="card" style={{ textAlign: 'left', border: '1px solid rgba(162,217,243,0.3)' }}>
                <span className="tag tag-green" style={{ marginBottom: '20px' }}>✓ Free forever</span>
                <h3 style={{ fontSize: '1.6rem', marginBottom: '8px' }}>Clock-In</h3>
                <div style={{ fontSize: '2.8rem', fontWeight: 900, fontFamily: 'var(--font-head)', color: 'var(--secondary)', margin: '16px 0' }}>€0</div>
                <p style={{ marginBottom: '24px', fontSize: '0.9rem' }}>Unlimited users, no time limit.</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' }}>
                  {['Daily clock-in with geolocation','Worked hours calculation','Vacation request & approval','Legal monthly reports with signature','Automatic email alerts'].map(f => (
                    <div key={f} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                      <span style={{ color: '#7DFFB0', fontWeight: 700, flexShrink: 0 }}>✓</span> {f}
                    </div>
                  ))}
                </div>
                <a href="#contact" className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>Start free →</a>
              </div>
              <div className="card" style={{ textAlign: 'left', border: '2px solid var(--accent)', background: 'linear-gradient(135deg, var(--primary-mid) 0%, rgba(194,158,94,0.06) 100%)' }}>
                <span className="tag tag-accent" style={{ marginBottom: '20px' }}>⭐ Coming soon</span>
                <h3 style={{ fontSize: '1.6rem', marginBottom: '8px' }}>Sales CRM</h3>
                <div style={{ fontSize: '2.8rem', fontWeight: 900, fontFamily: 'var(--font-head)', color: 'var(--accent)', margin: '16px 0' }}>TBA<span style={{ fontSize: '1rem', fontWeight: 400, color: 'var(--text-muted)' }}>/mo</span></div>
                <p style={{ marginBottom: '24px', fontSize: '0.9rem' }}>Special price for early adopters.</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' }}>
                  {['Everything in free plan','Client management (CRM)','Route-based visit planning','GPV visit log','Sales rep expense reports','Interactive catalog + orders'].map(f => (
                    <div key={f} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                      <span style={{ color: 'var(--accent)', fontWeight: 700, flexShrink: 0 }}>✓</span> {f}
                    </div>
                  ))}
                </div>
                <a href="#contact" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Get early access →</a>
              </div>
            </div>
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section id="contact" className="section">
          <div className="container" style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto' }}>
            <span className="section-label" style={{ justifyContent: 'center' }}>Contact</span>
            <h2 style={{ marginBottom: '20px' }}>Let&apos;s talk about <span className="gradient-text">your sales team</span></h2>
            <p style={{ marginBottom: '40px', fontSize: '1.05rem' }}>Tell us how your sales network works and we will show you how Traksal can help.</p>
            <ContactForm lang="en" />
          </div>
        </section>
      </main>
      <Footer lang="en" />
    </>
  );
}
