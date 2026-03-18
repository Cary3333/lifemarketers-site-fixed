const posts = [
  {
    category: 'Underwriting',
    title: 'How to reduce delays in life insurance case submissions',
    excerpt: 'A stronger content design helps LifeMarketers look like a real strategic partner, not just a directory of products.',
  },
  {
    category: 'LTC Planning',
    title: 'Traditional vs hybrid LTC solutions: a simple planning framework',
    excerpt: 'Use educational content to support producers during early client conversations while building SEO depth over time.',
  },
  {
    category: 'Annuities',
    title: 'What agents should compare before presenting a fixed indexed annuity',
    excerpt: 'A premium blog layout gives the brand more authority while creating natural paths into solution and contact pages.',
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-card">
          <div className="page-hero-copy">
            <div className="badge">Insights</div>
            <h1 style={{ marginTop: 18 }}>A more modern insights section for SEO and trust-building</h1>
            <p>
              These starter cards show how LifeMarketers can publish educational content that helps agents while making the site feel more current and authoritative.
            </p>
          </div>
          <div className="page-hero-side">
            <h3>Why content matters</h3>
            <ul className="kicker-list">
              <li>Improves discoverability</li>
              <li>Builds credibility with agents</li>
              <li>Supports internal linking across the site</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container blog-grid">
          {posts.map((post) => (
            <article className="blog-card" key={post.title}>
              <div className="blog-card-top">
                <div className="badge">{post.category}</div>
              </div>
              <div className="blog-card-body">
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
