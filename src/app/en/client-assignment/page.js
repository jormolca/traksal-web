import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import AsignacionInteractiva from '@/components/AsignacionInteractiva';

export const metadata = {
  title: 'Map-based Client Assignment | Traksal CRM',
  description: 'Assign client portfolios to your sales reps by drawing a polygon on the map or via bulk import. Optimise your sales territories.',
  keywords: ['client assignment', 'sales territories', 'assign clients', 'crm map', 'traksal'],
  alternates: {
    canonical: 'https://www.traksal.com/en/client-assignment',
    languages: { 
      'es': 'https://www.traksal.com/asignacion-de-clientes', 
      'en': 'https://www.traksal.com/en/client-assignment' 
    }
  },
  openGraph: {
    title: 'Bulk Client Assignment | Traksal',
    description: 'Draw on the map and assign dozens of clients to a sales rep in seconds.',
    url: 'https://www.traksal.com/en/client-assignment',
    type: 'website',
  }
};

export default function ClientAssignmentPage() {
  return (
    <main style={{ background: 'var(--primary)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar lang="en" />
      
      <section style={{
        paddingTop: 'calc(var(--nav-height) + 10px)',
        paddingBottom: '80px',
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <div className="container">
          <AsignacionInteractiva lang="en" />
        </div>
      </section>

      <Footer lang="en" />
    </main>
  );
}
