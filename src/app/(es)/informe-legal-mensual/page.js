import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import InformeLegalPresentacion from '@/components/InformeLegalPresentacion';

export const metadata = {
  title: 'Informe Legal Mensual de Horas | Traksal',
  description: 'Genera automáticamente el informe legal mensual de horas trabajadas con firma del empleado. Cumple con la ley de control horario y prepárate para cualquier inspección de trabajo.',
  keywords: ['informe legal mensual', 'control horario ley', 'registro jornada laboral', 'firma empleado', 'inspección trabajo', 'traksal'],
  alternates: {
    canonical: 'https://www.traksal.com/informe-legal-mensual',
    languages: {
      'es': 'https://www.traksal.com/informe-legal-mensual',
      'en': 'https://www.traksal.com/en/monthly-legal-report'
    }
  },
  openGraph: {
    title: 'Informe Legal Mensual de Horas | Traksal',
    description: 'Cumple la ley de control horario. Genera informes firmados en un clic.',
    url: 'https://www.traksal.com/informe-legal-mensual',
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
    title: 'Generación automática',
    desc: 'El informe mensual se genera automáticamente con todos los registros de fichaje del empleado. Sin trabajo manual.'
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    color: 'var(--secondary)',
    bg: 'rgba(162, 217, 243, 0.1)',
    title: 'Listo para inspección',
    desc: 'El documento incluye todos los campos exigidos por la Ley de Control Horario. Siempre actualizado con la normativa vigente.'
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
    title: 'Firma del empleado',
    desc: 'El empleado firma digitalmente el informe desde su móvil. Queda registrado y almacenado para cualquier auditoría.'
  },
];

export default function InformeLegalMensualPage() {
  return (
    <main style={{ background: 'var(--primary)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

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
              <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.82rem', color: 'var(--text-muted)', textDecoration: 'none', marginBottom: '24px' }}>
                ← Volver al inicio
              </Link>
              <span className="section-label">Cumplimiento Legal</span>
              <h1 style={{ marginBottom: '24px', fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', lineHeight: 1.1 }}>
                Informe de fichaje <br />
                <span className="gradient-text">siempre preparado.</span>
              </h1>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '40px', maxWidth: '500px', lineHeight: 1.7 }}>
                Genera el informe mensual oficial de horas trabajadas con la firma del empleado incluida. 
                Cúmple la <strong style={{ color: 'white' }}>Ley de Control Horario</strong> sin esfuerzo y estate listo para cualquier inspección de trabajo.
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
                <Link href="/#contacto" className="btn btn-primary btn-lg">
                  Empieza gratis →
                </Link>
                <Link href="/fichaje-diario" className="btn btn-secondary btn-lg">
                  Ver cómo funciona el fichaje
                </Link>
              </div>

              <p style={{ marginTop: '16px', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                ✓ Sin tarjeta · ✓ Módulo de fichaje 100% gratuito · ✓ Conforme a la normativa española
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
            💡 <strong style={{ color: 'white' }}>¿Sabías que</strong> la Ley 8/2019 obliga a todas las empresas a registrar diariamente la jornada de sus empleados y conservar los registros durante <strong style={{ color: 'white' }}>4 años</strong>? Traksal lo hace por ti, automáticamente.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
