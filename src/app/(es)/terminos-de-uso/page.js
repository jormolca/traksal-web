import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Términos de Uso | Traksal CRM',
  description: 'Términos y condiciones de uso de Traksal.',
  robots: 'noindex, nofollow'
};

export default function TerminosUsoPage() {
  return (
    <main style={{ background: 'var(--primary)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar lang="es" />
      
      <section style={{ flex: 1, paddingTop: 'calc(var(--nav-height) + 40px)', paddingBottom: '80px' }}>
        <div className="container" style={{ maxWidth: '800px', color: 'var(--text-secondary)' }}>
          <h1 style={{ color: 'white', marginBottom: '24px', fontSize: '2.5rem' }}>Términos de Uso</h1>
          <p style={{ marginBottom: '24px' }}><em>Última actualización: [FECHA]</em></p>
          
          <div style={{ lineHeight: 1.8 }}>
            <p><strong>[Aviso: Este es un documento de plantilla estándar. Debes completarlo con los datos de tu empresa y ser revisado por un asesor legal].</strong></p>
            
            <h2 style={{ color: 'white', marginTop: '32px', marginBottom: '16px', fontSize: '1.5rem' }}>1. Aceptación de los términos</h2>
            <p>Al acceder y utilizar Traksal CRM, el cliente acepta cumplir con estos Términos de Uso y todas las leyes y regulaciones aplicables. Si no estás de acuerdo con alguno de estos términos, tienes prohibido usar o acceder a este sitio.</p>
            
            <h2 style={{ color: 'white', marginTop: '32px', marginBottom: '16px', fontSize: '1.5rem' }}>2. Licencia de uso (SaaS)</h2>
            <p>Se concede permiso para utilizar temporalmente el software Traksal CRM exclusivamente con fines empresariales, sujeto al pago de las tarifas de suscripción acordadas. Esta es una concesión de licencia, no una transferencia de título.</p>
            
            <h2 style={{ color: 'white', marginTop: '32px', marginBottom: '16px', fontSize: '1.5rem' }}>3. Limitaciones</h2>
            <p>En ningún caso Traksal o sus proveedores serán responsables de ningún daño (incluyendo, sin limitación, daños por pérdida de datos o beneficios, o debido a la interrupción del negocio) que surja del uso o la incapacidad de usar los materiales en Traksal CRM.</p>
          </div>
        </div>
      </section>

      <Footer lang="es" />
    </main>
  );
}
