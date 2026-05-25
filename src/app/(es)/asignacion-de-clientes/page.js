import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import AsignacionInteractiva from '@/components/AsignacionInteractiva';

export const metadata = {
  title: 'Asignación de Clientes por Mapa | Traksal CRM',
  description: 'Asigna carteras de clientes a tus comerciales dibujando un polígono en el mapa o mediante importación masiva. Optimiza tus áreas de ventas.',
  keywords: ['asignacion de clientes', 'rutas comerciales', 'asignar estancos', 'zonas de ventas', 'mapa crm', 'traksal'],
  alternates: {
    canonical: 'https://www.traksal.com/asignacion-de-clientes',
    languages: { 
      'es': 'https://www.traksal.com/asignacion-de-clientes', 
      'en': 'https://www.traksal.com/en/client-assignment' 
    }
  },
  openGraph: {
    title: 'Asignación Masiva de Clientes | Traksal',
    description: 'Dibuja en el mapa y asigna decenas de clientes a un comercial en un segundo.',
    url: 'https://www.traksal.com/asignacion-de-clientes',
    type: 'website',
  }
};

export default function AsignacionClientesPage() {
  return (
    <main style={{ background: 'var(--primary)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      
      <section style={{
        paddingTop: 'calc(var(--nav-height) + 10px)',
        paddingBottom: '80px',
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <div className="container">
          <AsignacionInteractiva lang="es" />
        </div>
      </section>

      <Footer />
    </main>
  );
}
