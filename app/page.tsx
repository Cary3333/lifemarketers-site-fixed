import Link from 'next/link';

const solutions = [
  {
    title: 'Life Insurance',
    text: 'Case design, advanced illustrations, underwriting support, and product positioning that help agents place more business.',
  },
  {
    title: 'Disability Insurance',
    text: 'Responsive brokerage support for income protection, business DI strategies, and carrier matching.',
  },
  {
    title: 'Long-Term Care',
    text: 'Traditional and hybrid LTC planning support with practical guidance for client education and placement.',
  },
  {
    title: 'Annuities',
    text: 'Fixed and indexed annuity support with product comparisons and efficient case follow-through.',
  },
];

const trustPoints = [
  'Family-owned values and personalized support',
  'Direct access to experienced underwriting guidance',
  'Strong relationships with top insurance carriers',
  'Fast, responsive case management from quote to issue',
];

const carriers = ['John Hancock', 'AIG', 'Pacific Life', 'Mutual of Omaha', 'Legal & General', 'Lincoln Financial'];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">Trusted brokerage support for independent agents nationwide</div>
            <h1 style={{ marginTop: 18 }}>
              A General Agency Built for <span className="accent">Agent Success</span>
            </h1>
            <p>
              A <strong style={{ color: 'var(--navy)' }}>family-owned insurance brokerage</strong> helping agents grow their business with top carriers, expert underwriting support, and faster case management.
            </p>
            <div className="hero-actions">
              <Link href="/contact" className="button">Become a Partner</Link>
              <Link href="/solutions" className="button-outline">Explore Solutions</Link>
            </div>
          </div>

          <div className="panel" style={{ padding: 18 }}>
            <div className="dashboard">
              <div className="spread" style={{ justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div className="small" style={{ color: 'rgba(255,255,255,.78)' }}>Broker dashboard</div>
                  <h3 style={{ color: 'white', marginTop: 6 }}>Fast Case Workflow</h3>
                </div>
                <div className="badge">Live Support</div>
              </div>
              <div className="dashboard-grid">
                <div className="dashboard-card">
                  <div className="spread" style={{ justifyContent: 'space-between' }}>
                    <span>Quote request</span>
                    <strong style={{ color: '#ffd19f' }}>Same-day response</strong>
                  </div>
                  <div style={{ marginTop: 14, height: 12, background: 'rgba(255,255,255,.14)', borderRadius: 999 }}>
                    <div style={{ width: '82%', height: '100%', background: 'var(--orange)', borderRadius: 999 }} />
                  </div>
                </div>
                <div className="feature-grid">
                  <div className="dashboard-card light">
                    <div className="small muted">Family-owned advantage</div>
                    <h3 style={{ marginTop: 8 }}>Personal service</h3>
                    <p>Long-term relationships with agents, not just transactions.</p>
                  </div>
                  <div className="dashboard-card" style={{ background: 'var(--orange)' }}>
                    <div className="small" style={{ color: 'rgba(255,255,255,.9)' }}>What agents need</div>
                    <h3 style={{ marginTop: 8, color: 'white' }}>Top carriers</h3>
                    <p>Market access paired with underwriting and case design help.</p>
                  </div>
                </div>
                <div className="feature-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
                  <div className="dashboard-card">Case Design</div>
                  <div className="dashboard-card">Underwriting</div>
                  <div className="dashboard-card">E-Apps</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="stats">
          {[
            ['2002', 'family-owned since'],
            ['4', 'core product lines'],
            ['1:1', 'hands-on case support'],
            ['100%', 'focused on agent success'],
          ].map(([value, label]) => (
            <div className="stat-card" key={label}>
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--navy)' }}>{value}</div>
              <div className="muted">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container panel" style={{ padding: '38px 32px' }}>
          <div className="section-head center">
            <div className="badge">Why LifeMarketers</div>
            <h2 style={{ marginTop: 14 }}>A Family-Owned Partner You Can Trust</h2>
            <p>
              Since 2002, LifeMarketers has remained a <strong style={{ color: 'var(--navy)' }}>family-owned general agency</strong> dedicated to supporting independent insurance professionals with responsive service, practical guidance, and long-term relationships.
            </p>
          </div>
          <div className="feature-grid">
            {trustPoints.map((item) => (
              <div className="list-item" key={item}>
                <div className="list-icon">✓</div>
                <div>{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="badge">Solutions</div>
            <h2 style={{ marginTop: 14 }}>Built around the core lines your agents need most</h2>
            <p>The new website organizes your offerings into clear, high-converting sections that are easier to understand and easier to navigate.</p>
          </div>
          <div className="card-grid">
            {solutions.map((item) => (
              <div className="solution-card" key={item.title}>
                <div className="badge">{item.title[0]}</div>
                <h3 style={{ marginTop: 14 }}>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section band">
        <div className="container">
          <div className="section-head">
            <div className="badge">Carrier relationships</div>
            <h2 style={{ marginTop: 14, color: 'white' }}>Partnered with the nation&apos;s leading carriers</h2>
            <p>This section makes carrier access a visible credibility signal instead of burying it deep in the site.</p>
          </div>
          <div className="feature-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {carriers.map((carrier) => (
              <div className="solution-card" key={carrier}>{carrier}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container quote-card">
          <div className="quote-avatar">JA</div>
          <div>
            <p style={{ fontSize: '1.2rem', margin: 0 }}>
              “LifeMarketers is hands down the best agency I’ve worked with. Their underwriting support has helped me close more cases and grow my business significantly.”
            </p>
            <h3 style={{ marginTop: 12 }}>John Anderson</h3>
            <div className="muted">Insurance Agent</div>
          </div>
        </div>
      </section>

      <section className="section band">
        <div className="container two-col">
          <div>
            <div className="badge">Get started</div>
            <h2 style={{ marginTop: 14, color: 'white' }}>Ready to grow with a family-owned brokerage partner?</h2>
            <p>Get a quote, start a conversation, or tell the team what kind of case support you need.</p>
            <a href="tel:8008975446" className="button-outline" style={{ marginTop: 12 }}>(800) 897-5446</a>
          </div>
          <div className="contact-card">
            <h3>Request a quote</h3>
            <p>Name, email, phone, and a short case summary.</p>
            <div className="form-grid">
              <input placeholder="Your name" />
              <input placeholder="Your email" />
              <input placeholder="Your phone" />
              <textarea placeholder="How can we help?" />
              <button className="submit-btn">Become a Partner</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
