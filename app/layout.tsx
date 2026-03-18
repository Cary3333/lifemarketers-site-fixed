import './globals.css';
import SiteLayout from '../components/SiteLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LifeMarketers | Family Owned Since 2002',
  description: 'Family-owned insurance brokerage supporting independent agents with carrier access, underwriting guidance, and faster case management.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
