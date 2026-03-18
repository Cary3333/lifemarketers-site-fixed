export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-card">
          <div className="page-hero-copy">
            <div className="badge">About Us</div>
            <h1 style={{ marginTop: 18 }}>A family-owned brokerage story told with more confidence</h1>
            <p>
              This page brings the LifeMarketers story forward with a more premium visual style while reinforcing relationships, responsiveness, and long-term trust.
            </p>
          </div>
          <div className="page-hero-side">
            <h3>Family-owned since 2002</h3>
            <p>
              Position the company as a relationship-first brokerage partner with the experience and service model agents want from a long-term general agency.
            </p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container two-col">
          <div className="quote-card" style={{ gridTemplateColumns: '1fr', minHeight: 320 }}>
            <div className="quote-avatar" style={{ width: 160, height: 160 }}>LM</div>
            <div style={{ textAlign: 'center' }}>
              <h3>Built on relationships</h3>
              <p>Long-term trust, practical support, and a family-owned identity that feels personal instead of corporate.</p>
            </div>
          </div>
          <div>
            <h2>Family Owned Since 2002</h2>
            <p>
              Since 2002, LifeMarketers has supported independent insurance professionals with carrier access, underwriting insight, and a more personal service model than large, impersonal distribution organizations.
            </p>
            <p>
              The upgraded design gives that story a stronger digital presence, with better visual polish and a more premium tone across every page.
            </p>
            <div className="list">
              {[
                'Personalized support for independent agents',
                'Long-term relationships over short-term transactions',
                'Responsive communication and hands-on case management',
                'Credibility rooted in consistency and trust',
              ].map((item) => (
                <div className="list-item" key={item}>
                  <div className="list-icon">✓</div>
                  <div>{item}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
