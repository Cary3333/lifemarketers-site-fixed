const carrierGroups = {
  Life: ['John Hancock', 'Lincoln Financial', 'Pacific Life', 'Protective'],
  Protection: ['Principal', 'Mutual of Omaha', 'Legal & General', 'Corebridge'],
  Retirement: ['Athene', 'Nationwide', 'Global Atlantic', 'American Equity'],
  Specialty: ['Foresters', 'National Life Group', 'SBLI', 'Transamerica'],
};

export default function CarriersPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-card">
          <div className="page-hero-copy">
            <div className="badge">Carrier Access</div>
            <h1 style={{ marginTop: 18 }}>A premium carrier page that turns access into a trust signal</h1>
            <p>
              Instead of burying carrier relationships, this design presents them as a visible brand strength that supports credibility and better placement conversations.
            </p>
          </div>
          <div className="page-hero-side">
            <h3>What this communicates</h3>
            <ul className="kicker-list">
              <li>Strong market access</li>
              <li>Broad product coverage</li>
              <li>Confidence for agents evaluating a partner</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container info-grid">
          {Object.entries(carrierGroups).map(([group, carriers]) => (
            <div className="solution-card" key={group}>
              <div className="badge">{group}</div>
              <h3 style={{ marginTop: 14 }}>{group} carriers</h3>
              <div className="list">
                {carriers.map((carrier) => (
                  <div className="list-item" key={carrier}>
                    <div className="list-icon">•</div>
                    <div>{carrier}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
