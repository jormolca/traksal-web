import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import InformeLegalPresentacion from '@/components/InformeLegalPresentacion';

export const metadata = {
  title: 'Monthly Legal Working Hours Report | Traksal',
  description: 'Automatically generate the official monthly working hours report with employee signature. Comply with labor law and be ready for any workplace inspection.',
  keywords: ['monthly legal report', 'labor law compliance', 'working hours register', 'employee signature', 'workplace inspection', 'traksal'],
  alternates: {
    canonical: 'https://www.traksal.com/en/monthly-legal-report',
    languages: {
      'es': 'https://www.traksal.com/informe-legal-mensual',
      'en': 'https://www.traksal.com/en/monthly-legal-report'
    }
  },
  openGraph: {
    title: 'Monthly Legal Working Hours Report | Traksal',
    description: 'Comply with labor law. Generate signed reports in one click.',
    url: 'https://www.traksal.com/en/monthly-legal-report',
    type: 'website',
  }
};

const features = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
    ),
    color: 'var(--accent)',
    bg: 'rgba(194, 158, 94, 0.1)',
    title: 'Automatic Generation',
    desc: 'The monthly report is generated automatically with all employee clock-in records. No manual work required.'
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    color: 'var(--secondary)',
    bg: 'rgba(162, 217, 243, 0.1)',
    title: 'Inspection Ready',
    desc: 'The document includes all fields required by labor law. Always up to date with current regulations.'
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    color: '#7DFFB0',
    bg: 'rgba(125, 255, 176, 0.08)',
    title: 'Employee Signature',
    desc: 'Employees sign the report digitally from their phone. Stored and accessible for any audit.'
  },
];

export default function MonthlyLegalReportPage() {
  return (
    <main style={{ background: 'var(--primary)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar lang="en" />

      {/* ── HERO ── */}
      <section style={{
        paddingTop: 'calc(var(--nav-height) + 40px)',
        paddingBottom: '80px',
        background: 'radial-gradient(ellipse 80% 50% at 50% -5%, rgba(194,158,94,0.10) 0%, transparent 70%), var(--primary)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container">
          <div className="responsive-grid" style={{ alignItems: 'center' }}>

            {/* Text */}
            <div style={{ order: 1 }}>
              <Link href="/en" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.82rem', color: 'var(--text-muted)', textDecoration: 'none', marginBottom: '24px' }}>
                ← Back to home
              </Link>
              <span className="section-label">Legal Compliance</span>
              <h1 style={{ marginBottom: '24px', fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', lineHeight: 1.1 }}>
                Working hours report <br />
                <span className="gradient-text">always ready.</span>
              </h1>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '40px', maxWidth: '500px', lineHeight: 1.7 }}>
                Generate the official monthly working hours report with employee signature included.
                Comply with <strong style={{ color: 'white' }}>labor law</strong> effortlessly and be ready for any workplace inspection.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '48px' }}>
                {features.map((f) => (
                  <div key={f.title} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <div style={{ width: '40px', height: '40px', background: f.bg, borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: f.color, flexShrink: 0 }}>
                      {f.icon}
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1rem', marginBottom: '4px', color: 'white' }}>{f.title}</h3>
                      <p style={{ fontSize: '0.9rem', margin: 0, lineHeight: 1.6 }}>{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <Link href="/en/#contact" className="btn btn-primary btn-lg">
                  Start for free →
                </Link>
                <Link href="/en/clock-in-clock-out" className="btn btn-secondary btn-lg">
                  See how clock-in works
                </Link>
              </div>

              <p style={{ marginTop: '16px', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                ✓ No card required · ✓ Clock-in 100% free · ✓ Compliant with Spanish labor law
              </p>
            </div>

            {/* Visual */}
            <div style={{ order: 2, display: 'flex', justifyContent: 'center' }}>
              <InformeLegalPresentacion />
            </div>
          </div>
        </div>
      </section>

      {/* ── CALLOUT ── */}
      <section className="section-sm" style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', background: 'rgba(194,158,94,0.04)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
            💡 <strong style={{ color: 'white' }}>Did you know</strong> that Spanish law (Ley 8/2019) requires all companies to record daily working hours and keep records for <strong style={{ color: 'white' }}>4 years</strong>? Traksal does it automatically.
          </p>
        </div>
      </section>

      <Footer lang="en" />
    </main>
  );
}
