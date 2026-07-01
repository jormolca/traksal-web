import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Política de Privacidad | Traksal CRM',
  description: 'Política de Privacidad y protección de datos de Traksal.',
  robots: 'noindex, nofollow' // Es recomendable no indexar plantillas genéricas hasta que sean definitivas
};

export default function PoliticaPrivacidadPage() {
  return (
    <main style={{ background: 'var(--primary)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar lang="es" />
      
      <section style={{ flex: 1, paddingTop: 'calc(var(--nav-height) + 40px)', paddingBottom: '80px' }}>
        <div className="container" style={{ maxWidth: '800px', color: 'var(--text-secondary)' }}>
          <h1 style={{ color: 'white', marginBottom: '24px', fontSize: '2.5rem' }}>Política de Privacidad</h1>
          <p style={{ marginBottom: '24px' }}><em>Última actualización: [FECHA]</em></p>
          
          <div style={{ lineHeight: 1.8 }}>
            <p><strong>[Aviso: Este es un documento de plantilla estándar. Debes completarlo con los datos de tu empresa y ser revisado por un asesor legal].</strong></p>
            
            <h2 style={{ color: 'white', marginTop: '32px', marginBottom: '16px', fontSize: '1.5rem' }}>1. Información del Responsable</h2>
            <p>En cumplimiento con el Reglamento General de Protección de Datos (RGPD), se informa que el responsable del tratamiento de los datos es <strong>[NOMBRE EMPRESA LEGAL]</strong>, con NIF/CIF <strong>[NUMERO]</strong> y domicilio en <strong>[DIRECCION]</strong>. Correo de contacto: <strong>[EMAIL LEGAL]</strong>.</p>
            
            <h2 style={{ color: 'white', marginTop: '32px', marginBottom: '16px', fontSize: '1.5rem' }}>2. Datos que recopilamos</h2>
            <p>Traksal CRM recopila datos necesarios para la prestación del servicio SaaS, incluyendo:</p>
            <ul>
              <li>Datos identificativos: nombre, apellidos, correo electrónico.</li>
              <li>Datos de uso y navegación en la plataforma.</li>
              <li>Datos de geolocalización (exclusivamente para el módulo de fichaje y rutas, previa autorización del usuario en su dispositivo).</li>
            </ul>

            <h2 style={{ color: 'white', marginTop: '32px', marginBottom: '16px', fontSize: '1.5rem' }}>3. Finalidad del tratamiento</h2>
            <p>Los datos son utilizados para:</p>
            <ul>
              <li>Proporcionar acceso y soporte al software Traksal.</li>
              <li>Generar reportes e informes solicitados por el cliente (la empresa contratante).</li>
              <li>Enviar notificaciones operativas del sistema.</li>
            </ul>

            <h2 style={{ color: 'white', marginTop: '32px', marginBottom: '16px', fontSize: '1.5rem' }}>4. Derechos de los Usuarios</h2>
            <p>Cualquier usuario puede ejercer sus derechos de acceso, rectificación, supresión, limitación y oposición enviando un correo electrónico a <strong>[EMAIL LEGAL]</strong>.</p>
          </div>
        </div>
      </section>

      <Footer lang="es" />
    </main>
  );
}
