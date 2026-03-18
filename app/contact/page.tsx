export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-card">
          <div className="page-hero-copy">
            <div className="badge">Contact</div>
            <h1 style={{ marginTop: 18 }}>A polished contact experience built to convert serious inquiries</h1>
            <p>
              This page is designed to make quote requests, case discussions, and partnership conversations feel easier, faster, and more premium.
            </p>
          </div>
          <div className="page-hero-side">
            <h3>What belongs here</h3>
            <ul className="kicker-list">
              <li>Quote requests</li>
              <li>Case support inquiries</li>
              <li>New producer conversations</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container two-col">
          <div>
            <h2>Talk to the LifeMarketers team</h2>
            <p>
              Use this page as the primary conversion point for quote requests and business development. The design now matches the elevated visual style used across the rest of the site.
            </p>
            <div className="list">
              {['(800) 897-5446', 'info@lifemarketers.com', 'Family Owned Since 2002', 'Built for agent success nationwide'].map((item) => (
                <div className="list-item" key={item}>
                  <div className="list-icon">✓</div>
                  <div>{item}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="contact-card">
            <h3>Request a quote</h3>
            <p>Name, email, phone, and a short case summary.</p>
            <div className="form-grid">
              <input placeholder="Your name" />
              <input placeholder="Your email" />
              <input placeholder="Your phone" />
              <textarea placeholder="Tell us about the case" />
              <button className="submit-btn">Submit Request</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
