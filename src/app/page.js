import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Traksal | Software CRM para Redes Comerciales – Fichaje Gratuito',
  description: 'Gestiona tu fuerza de ventas con Traksal. Fichaje digital gratuito, CRM de visitas comerciales, planificación de rutas, nota de gastos y catálogo interactivo para pedidos.',
  alternates: { canonical: 'https://www.traksal.com', languages: { 'en': 'https://www.traksal.com/en' } }
};

const features_fichaje = [
  { icon: '🕐', title: 'Fichaje diario', desc: 'Los empleados fichan desde el móvil con un clic. Con o sin geolocalización.' },
  { icon: '📊', title: 'Informes de horas', desc: 'Cada empleado ve su propio resumen de horas trabajadas en tiempo real.' },
  { icon: '🏖️', title: 'Solicitud de vacaciones', desc: 'Flujo completo de petición y aprobación de vacaciones integrado.' },
  { icon: '📄', title: 'Informe legal mensual', desc: 'Genera el informe mensual con firma del empleado. Listo para inspección.' },
  { icon: '📧', title: 'Alertas automáticas', desc: 'Aviso por email si el empleado no ficha a la hora prevista.' },
  { icon: '✅', title: 'Gestión de solicitudes', desc: 'Panel centralizado para que el responsable apruebe o deniegue solicitudes.' },
];

const features_crm = [
  { icon: '🗺️', title: 'Planificación geográfica', desc: 'Organiza las visitas por orden de ruta para optimizar el tiempo en carretera.' },
  { icon: '👥', title: 'Asignación de clientes', desc: 'Asigna carteras de clientes a cada comercial con un clic o importación masiva.' },
  { icon: '📋', title: 'Ficha de visita (GPV)', desc: 'El comercial registra cada visita: estado del lineal, incidencias y resultados.' },
  { icon: '📅', title: 'Programación de visitas', desc: 'Planifica las visitas de toda la semana y consulta el estado en tiempo real.' },
  { icon: '💰', title: 'Nota de gastos', desc: 'Los comerciales registran sus gastos de desplazamiento y dietas desde el móvil.' },
  { icon: '📈', title: 'KPIs del equipo', desc: 'Tasas de visita, cobertura de clientes y rendimiento por comercial.' },
];

const stats = [
  { value: '100%', label: 'Fichaje gratuito, siempre', sub: 'Sin límite de usuarios ni tiempo' },
  { value: '<2min', label: 'Para empezar', sub: 'Sin instalaciones ni servidores' },
  { value: '1', label: 'Plataforma, todo integrado', sub: 'RRHH + CRM + Catálogo' },
];

export default function HomePage() {
  return (
    <>
      <Navbar lang="es" />
      <main>

        {/* ── HERO ── */}
        <section style={{
          minHeight: '100vh', display: 'flex', alignItems: 'center',
          paddingTop: 'calc(var(--nav-height) + 40px)',
          background: 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(162,217,243,0.12) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(194,158,94,0.08) 0%, transparent 60%), var(--primary)',
          position: 'relative', overflow: 'hidden'
        }}>
          {/* Decorative orbs */}
          <div style={{ position: 'absolute', top: '15%', right: '-5%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(162,217,243,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: '10%', left: '-10%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(194,158,94,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />

          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
              <span className="tag tag-accent" style={{ marginBottom: '24px', display: 'inline-flex' }}>
                🚀 Fichaje digital 100% gratuito
              </span>

              <h1 style={{ marginBottom: '24px', fontSize: 'clamp(2.5rem, 6vw, 4.2rem)', lineHeight: 1.1 }}>
                El software que{' '}
                <span className="gradient-text">mueve a tu equipo</span>{' '}
                de ventas
              </h1>

              <p style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: 'var(--text-secondary)', marginBottom: '40px', maxWidth: '580px', margin: '0 auto 40px' }}>
                Traksal conecta tu oficina con tu fuerza comercial en la calle. Desde el fichaje hasta el pedido, todo en una sola plataforma.
              </p>

              <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="https://app.traksal.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
                  Empieza gratis hoy →
                </a>
                <a href="#caracteristicas" className="btn btn-secondary btn-lg">
                  Ver características
                </a>
              </div>

              <p style={{ marginTop: '20px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                ✓ Sin tarjeta de crédito &nbsp;·&nbsp; ✓ Sin instalaciones &nbsp;·&nbsp; ✓ Listo en 2 minutos
              </p>
            </div>

            {/* Mock UI card */}
            <div style={{
              marginTop: '64px', background: 'var(--primary-mid)', borderRadius: '20px',
              border: '1px solid var(--border-light)', padding: '24px',
              boxShadow: '0 40px 100px rgba(0,0,0,0.5), 0 0 0 1px rgba(162,217,243,0.08)',
              maxWidth: '900px', margin: '64px auto 0'
            }} className="animate-pulse-glow">
              {/* Fake browser bar */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px', paddingBottom: '16px', borderBottom: '1px solid var(--border)' }}>
                <div style={{ display: 'flex', gap: '6px' }}>
                  {['#E74C3C','#F39C12','#27AE60'].map(c => <div key={c} style={{ width: '12px', height: '12px', borderRadius: '50%', background: c }} />)}
                </div>
                <div style={{ flex: 1, background: 'var(--primary-light)', borderRadius: '6px', padding: '6px 14px', fontSize: '0.78rem', color: 'var(--text-muted)', textAlign: 'center' }}>
                  app.traksal.com
                </div>
              </div>
              {/* Fake dashboard */}
              <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: '16px', minHeight: '280px' }}>
                {/* Sidebar mock */}
                <div style={{ background: 'rgba(162,217,243,0.04)', borderRadius: '12px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {['Fichaje','Estancos','Ruteros','Planificación','Productos','Equipo'].map((item, i) => (
                    <div key={item} style={{ padding: '8px 12px', borderRadius: '8px', background: i === 2 ? 'rgba(162,217,243,0.15)' : 'transparent', borderLeft: i === 2 ? '3px solid var(--secondary)' : '3px solid transparent', fontSize: '0.82rem', color: i === 2 ? 'white' : 'rgba(255,255,255,0.5)', fontWeight: i === 2 ? 600 : 400 }}>
                      {item}
                    </div>
                  ))}
                </div>
                {/* Content mock */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{ display: 'flex', gap: '12px' }}>
                    {[['247', 'Clientes asignados','var(--secondary)'],['18', 'Visitas hoy','var(--accent)'],['94%', 'Cobertura','#7DFFB0']].map(([val, label, color]) => (
                      <div key={label} style={{ flex: 1, background: 'var(--primary-light)', borderRadius: '12px', padding: '16px', textAlign: 'center' }}>
                        <div style={{ fontSize: '1.8rem', fontWeight: 800, color, fontFamily: 'var(--font-head)' }}>{val}</div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '4px' }}>{label}</div>
                      </div>
                    ))}
                  </div>
                  <div style={{ flex: 1, background: 'var(--primary-light)', borderRadius: '12px', padding: '16px' }}>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Visitas recientes</div>
                    {['Comercial A - Madrid Norte', 'Comercial B - Barcelona Centro', 'Comercial C - Valencia'].map((name, i) => (
                      <div key={name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0', borderBottom: i < 2 ? '1px solid var(--border)' : 'none' }}>
                        <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>{name}</span>
                        <span style={{ fontSize: '0.72rem', padding: '2px 8px', borderRadius: '99px', background: 'rgba(39,174,96,0.15)', color: '#7DFFB0' }}>Realizada</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── STATS ── */}
        <section className="section-sm" style={{ background: 'rgba(162,217,243,0.04)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
              {stats.map(s => (
                <div key={s.label} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, fontFamily: 'var(--font-head)', background: 'linear-gradient(135deg, var(--secondary), var(--accent))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '8px' }}>{s.value}</div>
                  <div style={{ fontWeight: 700, color: 'white', marginBottom: '4px', fontSize: '0.95rem' }}>{s.label}</div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FICHAJE FREE ── */}
        <section id="caracteristicas" className="section">
          <div className="container">
            <div style={{ maxWidth: '640px', marginBottom: '64px' }}>
              <span className="section-label">Módulo gratuito</span>
              <h2 style={{ marginBottom: '20px' }}>Fichaje digital <span className="text-accent">100% gratuito</span>, para siempre</h2>
              <p>Sin límites de usuarios, sin caducidad. Tu equipo ficha desde el móvil en segundos y tú tienes el control total desde la oficina.</p>
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
              <a href="https://app.traksal.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
                Empieza gratis — sin tarjeta →
              </a>
            </div>
          </div>
        </section>

        {/* ── CRM ── */}
        <section className="section" style={{ background: 'linear-gradient(180deg, var(--primary) 0%, rgba(22,37,57,0.5) 50%, var(--primary) 100%)' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
              <div>
                <span className="section-label" style={{ color: 'var(--secondary)' }}>Próximamente</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px', flexWrap: 'wrap' }}>
                  <h2 style={{ margin: 0 }}>CRM para <span className="text-secondary">fuerza de ventas</span></h2>
                  <span className="tag tag-blue">En desarrollo</span>
                </div>
                <p style={{ marginBottom: '32px', fontSize: '1.05rem' }}>
                  Conecta a tu equipo comercial con sus clientes. Planifica rutas, registra visitas y mide el rendimiento de cada comercial desde un solo panel.
                </p>
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
              {/* Visual */}
              <div style={{ position: 'relative' }}>
                <div style={{ background: 'var(--primary-mid)', borderRadius: '20px', border: '1px solid rgba(162,217,243,0.2)', padding: '28px', boxShadow: '0 30px 80px rgba(0,0,0,0.4)' }} className="animate-float">
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>Planificación de Visitas — Hoy</div>
                  {[
                    { name: 'Estanco Madrid 001', time: '09:30', status: 'Realizada', color: '#7DFFB0' },
                    { name: 'Estanco Madrid 002', time: '11:00', status: 'En curso', color: 'var(--secondary)' },
                    { name: 'Estanco Madrid 003', time: '12:30', status: 'Pendiente', color: 'var(--accent)' },
                    { name: 'Estanco Madrid 004', time: '16:00', status: 'Pendiente', color: 'var(--accent)' },
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
          </div>
        </section>

        {/* ── CATALOG ── */}
        <section className="section">
          <div className="container" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <span className="section-label" style={{ justifyContent: 'center' }}>Innovación</span>
            <h2 style={{ marginBottom: '20px' }}>Catálogo interactivo + <span className="gradient-text">toma de pedidos</span></h2>
            <p style={{ fontSize: '1.05rem', marginBottom: '48px' }}>
              Tu comercial muestra el catálogo de productos en el tablet o móvil y toma el pedido al instante, integrado directamente con el CRM. Sin papeles, sin llamadas, sin errores.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
              {[
                { icon: '📱', title: 'Digital y sin papel', desc: 'El catálogo siempre actualizado en el dispositivo del comercial' },
                { icon: '🛒', title: 'Pedido en el acto', desc: 'El cliente confirma el pedido en el momento de la visita' },
                { icon: '🔗', title: 'Integrado con CRM', desc: 'El pedido queda registrado automáticamente en la ficha del cliente' },
                { icon: '📦', title: 'Gestión de productos', desc: 'Familias, subfamilias, precios y stock en tiempo real' },
              ].map(f => (
                <div key={f.title} className="card" style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '14px' }}>{f.icon}</div>
                  <h3 style={{ fontSize: '1rem', marginBottom: '8px' }}>{f.title}</h3>
                  <p style={{ fontSize: '0.85rem', margin: 0 }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRICING ── */}
        <section id="precios" className="section" style={{ background: 'rgba(162,217,243,0.03)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <span className="section-label" style={{ justifyContent: 'center' }}>Precios</span>
            <h2 style={{ marginBottom: '16px' }}>Empieza gratis. <span className="text-accent">Crece cuando quieras.</span></h2>
            <p style={{ maxWidth: '500px', margin: '0 auto 56px', fontSize: '1.05rem' }}>Sin compromisos. El fichaje siempre gratuito. El CRM, cuando estés listo.</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', maxWidth: '900px', margin: '0 auto' }}>
              {/* Free */}
              <div className="card" style={{ textAlign: 'left', border: '1px solid rgba(162,217,243,0.3)' }}>
                <span className="tag tag-green" style={{ marginBottom: '20px' }}>✓ Gratis para siempre</span>
                <h3 style={{ fontSize: '1.6rem', marginBottom: '8px' }}>Fichaje</h3>
                <div style={{ fontSize: '2.8rem', fontWeight: 900, fontFamily: 'var(--font-head)', color: 'var(--secondary)', margin: '16px 0' }}>0€</div>
                <p style={{ marginBottom: '24px', fontSize: '0.9rem' }}>Usuarios ilimitados, sin límite de tiempo.</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' }}>
                  {['Fichaje diario con geolocalización','Cálculo de horas trabajadas','Solicitud y gestión de vacaciones','Informes legales con firma','Alertas por email automáticas'].map(f => (
                    <div key={f} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                      <span style={{ color: '#7DFFB0', fontWeight: 700, flexShrink: 0 }}>✓</span> {f}
                    </div>
                  ))}
                </div>
                <a href="https://app.traksal.com" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>
                  Empezar gratis →
                </a>
              </div>

              {/* CRM */}
              <div className="card" style={{ textAlign: 'left', border: '2px solid var(--accent)', background: 'linear-gradient(135deg, var(--primary-mid) 0%, rgba(194,158,94,0.06) 100%)' }}>
                <span className="tag tag-accent" style={{ marginBottom: '20px' }}>⭐ Próximamente</span>
                <h3 style={{ fontSize: '1.6rem', marginBottom: '8px' }}>CRM Comercial</h3>
                <div style={{ fontSize: '2.8rem', fontWeight: 900, fontFamily: 'var(--font-head)', color: 'var(--accent)', margin: '16px 0' }}>?€<span style={{ fontSize: '1rem', fontWeight: 400, color: 'var(--text-muted)' }}>/mes</span></div>
                <p style={{ marginBottom: '24px', fontSize: '0.9rem' }}>Precio especial para los primeros clientes.</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' }}>
                  {['Todo lo del plan gratuito','Gestión de clientes (CRM)','Planificación de visitas por ruta','Ficha GPV de cada visita','Nota de gastos de comerciales','Catálogo interactivo + pedidos'].map(f => (
                    <div key={f} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                      <span style={{ color: 'var(--accent)', fontWeight: 700, flexShrink: 0 }}>✓</span> {f}
                    </div>
                  ))}
                </div>
                <a href="#contacto" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  Quiero ser el primero →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── CONTACT CTA ── */}
        <section id="contacto" className="section">
          <div className="container" style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto' }}>
            <span className="section-label" style={{ justifyContent: 'center' }}>Contacto</span>
            <h2 style={{ marginBottom: '20px' }}>¿Hablamos sobre <span className="gradient-text">tu equipo comercial</span>?</h2>
            <p style={{ marginBottom: '40px', fontSize: '1.05rem' }}>Cuéntanos cómo funciona tu red de ventas y te mostramos cómo Traksal puede ayudarte.</p>
            <ContactForm lang="es" />
          </div>
        </section>

      </main>
      <Footer lang="es" />
    </>
  );
}
