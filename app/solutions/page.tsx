const solutions = [
  {
    title: 'Life Insurance',
    text: 'Advanced case design, underwriting support, and product positioning for agents who need stronger placement outcomes and cleaner carrier fit.',
  },
  {
    title: 'Disability Insurance',
    text: 'Business DI and individual income protection support backed by responsive brokerage guidance and practical sales insight.',
  },
  {
    title: 'Long-Term Care',
    text: 'Traditional and hybrid LTC support designed to help producers present solutions clearly and move planning conversations forward.',
  },
  {
    title: 'Annuities',
    text: 'Fixed and indexed annuity support with product comparison, suitability awareness, and faster case follow-through.',
  },
];

export default function SolutionsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-card">
          <div className="page-hero-copy">
            <div className="badge">Solutions</div>
            <h1 style={{ marginTop: 18 }}>Built around the lines that matter most to your producers</h1>
            <p>
              The upgraded site treats each product line like a premium service offering, with cleaner explanations, stronger hierarchy, and clearer conversion paths.
            </p>
          </div>
          <div className="page-hero-side">
            <h3>Why this page works</h3>
            <ul className="kicker-list">
              <li>Turns product pages into real sales support pages</li>
              <li>Creates stronger internal linking and SEO structure</li>
              <li>Feels more premium than a generic brochure layout</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container card-grid">
          {solutions.map((item) => (
            <div className="solution-card" key={item.title}>
              <div className="badge">{item.title[0]}</div>
              <h3 style={{ marginTop: 14 }}>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="section band-wrap">
        <div className="container band" style={{ padding: 36 }}>
          <div className="two-col">
            <div>
              <div className="badge">Producer support</div>
              <h2 style={{ marginTop: 14, color: 'white' }}>Every solution page should help agents move faster</h2>
              <p>
                This redesign gives LifeMarketers room to add underwriting guidance, carrier notes, FAQs, and quote calls-to-action without clutter.
              </p>
            </div>
            <div className="info-card">
              <h3 style={{ color: 'white' }}>Suggested additions</h3>
              <ul className="kicker-list" style={{ marginTop: 12 }}>
                <li>Case studies by product line</li>
                <li>Carrier fit and underwriting notes</li>
                <li>Dedicated quote request buttons</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
