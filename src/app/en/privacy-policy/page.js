import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Privacy Policy | Traksal CRM',
  description: 'Privacy Policy and data protection for Traksal.',
  robots: 'noindex, nofollow'
};

export default function PrivacyPolicyPage() {
  return (
    <main style={{ background: 'var(--primary)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar lang="en" />
      
      <section style={{ flex: 1, paddingTop: 'calc(var(--nav-height) + 40px)', paddingBottom: '80px' }}>
        <div className="container" style={{ maxWidth: '800px', color: 'var(--text-secondary)' }}>
          <h1 style={{ color: 'white', marginBottom: '24px', fontSize: '2.5rem' }}>Privacy Policy</h1>
          <p style={{ marginBottom: '24px' }}><em>Last updated: [DATE]</em></p>
          
          <div style={{ lineHeight: 1.8 }}>
            <p><strong>[Disclaimer: This is a standard template document. It must be completed with your company details and reviewed by legal counsel].</strong></p>
            
            <h2 style={{ color: 'white', marginTop: '32px', marginBottom: '16px', fontSize: '1.5rem' }}>1. Data Controller Information</h2>
            <p>In compliance with the General Data Protection Regulation (GDPR), the data controller is <strong>[LEGAL COMPANY NAME]</strong>, VAT number <strong>[NUMBER]</strong>, located at <strong>[ADDRESS]</strong>. Contact email: <strong>[LEGAL EMAIL]</strong>.</p>
            
            <h2 style={{ color: 'white', marginTop: '32px', marginBottom: '16px', fontSize: '1.5rem' }}>2. Data We Collect</h2>
            <p>Traksal CRM collects data necessary for providing the SaaS service, including:</p>
            <ul>
              <li>Identifying data: name, surname, email address.</li>
              <li>Platform usage and navigation data.</li>
              <li>Geolocation data (exclusively for the clock-in and routing modules, upon user authorization on their device).</li>
            </ul>

            <h2 style={{ color: 'white', marginTop: '32px', marginBottom: '16px', fontSize: '1.5rem' }}>3. Purpose of Processing</h2>
            <p>The data is used to:</p>
            <ul>
              <li>Provide access and support to the Traksal software.</li>
              <li>Generate reports requested by the client (the contracting company).</li>
              <li>Send operational system notifications.</li>
            </ul>

            <h2 style={{ color: 'white', marginTop: '32px', marginBottom: '16px', fontSize: '1.5rem' }}>4. User Rights</h2>
            <p>Any user can exercise their rights of access, rectification, erasure, limitation, and opposition by sending an email to <strong>[LEGAL EMAIL]</strong>.</p>
          </div>
        </div>
      </section>

      <Footer lang="en" />
    </main>
  );
}
