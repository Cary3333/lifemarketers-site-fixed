import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';

const navItems = [
  ['Solutions', '/solutions'],
  ['Carriers', '/carriers'],
  ['About', '/about'],
  ['Blog', '/blog'],
  ['Contact', '/contact'],
] as const;

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <Link href="/" className="brand">
            <Image src="/logo.jpg" alt="LifeMarketers logo" width={64} height={64} className="brand-logo" />
            <div className="brand-copy">
              <strong>
                <span style={{ color: 'white', letterSpacing: '-0.04em' }}>Life</span>
                <span style={{ color: 'var(--orange)', letterSpacing: '-0.04em' }}>Marketers</span>
              </strong>
              <span>Family Owned Since 2002</span>
            </div>
          </Link>

          <nav className="nav-links">
            {navItems.map(([label, href]) => (
              <Link key={href} href={href}>{label}</Link>
            ))}
          </nav>

          <div className="header-cta">
            <a className="phone-link" href="tel:8008975446">(800) 897-5446</a>
            <Link className="button" href="/contact">Get a Quote</Link>
          </div>
        </div>
      </header>
      <main>{children}</main>
      <footer>
        <div className="container footer-grid">
          <div>
            <div className="brand" style={{ marginBottom: 14 }}>
              <Image src="/logo.jpg" alt="LifeMarketers logo" width={54} height={54} className="brand-logo" />
              <div className="brand-copy">
                <strong>
                  <span style={{ color: 'var(--navy)', letterSpacing: '-0.04em' }}>Life</span>
                  <span style={{ color: 'var(--orange)', letterSpacing: '-0.04em' }}>Marketers</span>
                </strong>
                <span style={{ color: 'var(--orange)' }}>Family Owned Since 2002</span>
              </div>
            </div>
            <p>
              LifeMarketers is a family-owned insurance brokerage dedicated to supporting independent agents nationwide with carrier access, underwriting guidance, and responsive case management.
            </p>
          </div>
          <div>
            <h4>Solutions</h4>
            <div className="footer-list">
              <Link href="/solutions">Life Insurance</Link>
              <Link href="/solutions">Disability Insurance</Link>
              <Link href="/solutions">Long-Term Care</Link>
              <Link href="/solutions">Annuities</Link>
            </div>
          </div>
          <div>
            <h4>Company</h4>
            <div className="footer-list">
              <Link href="/about">About Us</Link>
              <Link href="/carriers">Carrier Access</Link>
              <Link href="/blog">Insights</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
          <div>
            <h4>Contact</h4>
            <div className="footer-list">
              <a href="tel:8008975446">(800) 897-5446</a>
              <a href="mailto:info@lifemarketers.com">info@lifemarketers.com</a>
              <div>Family Owned Since 2002</div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
