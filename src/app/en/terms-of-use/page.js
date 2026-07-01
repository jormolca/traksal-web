import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Terms of Use | Traksal CRM',
  description: 'Terms and conditions of use for Traksal.',
  robots: 'noindex, nofollow'
};

export default function TermsOfUsePage() {
  return (
    <main style={{ background: 'var(--primary)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar lang="en" />
      
      <section style={{ flex: 1, paddingTop: 'calc(var(--nav-height) + 40px)', paddingBottom: '80px' }}>
        <div className="container" style={{ maxWidth: '800px', color: 'var(--text-secondary)' }}>
          <h1 style={{ color: 'white', marginBottom: '24px', fontSize: '2.5rem' }}>Terms of Use</h1>
          <p style={{ marginBottom: '24px' }}><em>Last updated: [DATE]</em></p>
          
          <div style={{ lineHeight: 1.8 }}>
            <p><strong>[Disclaimer: This is a standard template document. It must be completed with your company details and reviewed by legal counsel].</strong></p>
            
            <h2 style={{ color: 'white', marginTop: '32px', marginBottom: '16px', fontSize: '1.5rem' }}>1. Acceptance of Terms</h2>
            <p>By accessing and using Traksal CRM, the client agrees to comply with these Terms of Use and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.</p>
            
            <h2 style={{ color: 'white', marginTop: '32px', marginBottom: '16px', fontSize: '1.5rem' }}>2. Use License (SaaS)</h2>
            <p>Permission is granted to temporarily use the Traksal CRM software exclusively for business purposes, subject to the payment of the agreed subscription fees. This is a grant of a license, not a transfer of title.</p>
            
            <h2 style={{ color: 'white', marginTop: '32px', marginBottom: '16px', fontSize: '1.5rem' }}>3. Limitations</h2>
            <p>In no event shall Traksal or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Traksal CRM.</p>
          </div>
        </div>
      </section>

      <Footer lang="en" />
    </main>
  );
}
