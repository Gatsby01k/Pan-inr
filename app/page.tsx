import Image from 'next/image';
import LeadForm from '../components/LeadForm'

const merchantPoints = [
  'Stable INR deposit flow for India-facing traffic',
  'Controlled routing across verified active capacity',
  'Reduced downtime, failures, and processing noise',
  'Built for operators who already understand scale',
];

const traderPoints = [
  'Structured daily flow instead of random one-off traffic',
  'Direct access to merchant-side demand',
  'Predictable turnover and long-term working relationships',
  'Private access only for partners who can execute',
];

const stats = [
  { value: 'Controlled', label: 'Execution environment' },
  { value: 'INR', label: 'Flow focus' },
  { value: 'Daily', label: 'Volume orientation' },
  { value: '<60m', label: 'Payout discipline' },
  { value: 'Private', label: 'Access model' },
];

const process = [
  {
    step: '01',
    title: 'Merchant flow enters the network',
    text: 'India-facing operators bring active INR deposit demand into a controlled environment built for throughput.',
  },
  {
    step: '02',
    title: 'Flow is allocated',
    text: 'Routing is distributed only across verified execution partners with active capacity and working coverage.',
  },
  {
    step: '03',
    title: 'Execution is enforced',
    text: 'PayIns, PayOuts, and response handling run inside structured timing, monitored workflow, and real accountability.',
  },
  {
    step: '04',
    title: 'Settlement closes the loop',
    text: 'Balances are cleared, capacity is restored, and the network stays ready for repeatable daily flow.',
  },
];

const edge = [
  {
    title: 'Controlled environment',
    text: 'Private network. No open market chaos. No uncontrolled routing.',
  },
  {
    title: 'Deposit-backed execution',
    text: 'Partners are expected to be committed, accountable, and operationally stable.',
  },
  {
    title: 'Fast response discipline',
    text: 'Built around timing, availability, and real execution instead of vague promises.',
  },
  {
    title: 'Real volume orientation',
    text: 'Designed for repeatable throughput, not vanity traffic or temporary spikes.',
  },
  {
    title: 'Private access',
    text: 'Not everyone gets in. Applications are reviewed manually to protect flow quality.',
  },
];

export default function HomePage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://pan-network.vercel.app';
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        name: 'PAN',
        alternateName: 'Private Affiliate Network',
        url: siteUrl,
        logo: `${siteUrl}/crown-logo.png`,
        description:
          'Private INR flow network connecting merchant demand with verified execution partners.',
      },
      {
        '@type': 'WebSite',
        name: 'PAN',
        url: siteUrl,
        potentialAction: {
          '@type': 'SearchAction',
          target: `${siteUrl}/?q={search_term_string}`,
          'query-input': 'required name=search_term_string',
        },
      },
    ],
  };

  return (
    <main className="page-shell">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="hero-section" id="top">
        <div className="hero-bg">
          <Image src="/lava-bg.png" alt="PAN lava background" fill priority className="hero-bg-image" />
          <div className="hero-overlay" />
          <div className="hero-grid" />
        </div>

        <header className="site-header">
          <a href="#top" className="brand-mark" aria-label="PAN home">
            <Image src="/crown-logo.png" alt="PAN crown logo" width={62} height={62} className="brand-crown" />
            <div className="brand-copy">
              <div className="brand-title">PAN</div>
              <div className="brand-subtitle">Private Affiliate Network</div>
            </div>
          </a>

          <nav className="site-nav">
            <a href="#merchants">For Merchants</a>
            <a href="#traders">For Traders</a>
            <a href="#process">How It Works</a>
            <a href="#edge">Our Edge</a>
            <a href="#access">Access</a>
          </nav>

          <a className="header-cta" href="#access">
            Request Access
          </a>
        </header>

        <div className="hero-content wrap">
          <div className="hero-copy">
            <div className="eyebrow">Private network. Real volume.</div>
            <h1>
              INR FLOW.
              <br />
              <span>CONTROLLED.</span>
              <br />
              EXECUTED.
            </h1>
            <p className="hero-text">
              PAN connects merchants with India traffic and trusted execution partners who can
              handle stable daily volume. Built around deposits, routing, and consistent
              execution.
            </p>
            <div className="hero-tags">
              <span>Deposits</span>
              <span>Routing</span>
              <span>Execution</span>
              <span>Scale</span>
            </div>
            <div className="hero-actions">
              <a href="#access" className="primary-btn">
                Request Access
              </a>
              <a href="#process" className="ghost-btn">
                See How It Works
              </a>
            </div>
            <div className="hero-note">Access is limited to verified partners only.</div>
          </div>

          <div className="hero-visual">
            <div className="crown-frame">
              <Image src="/crown-logo.png" alt="PAN crown" width={560} height={560} priority className="hero-crown" />
              <div className="visual-glow" />
            </div>
          </div>
        </div>
      </section>

      <section className="split-cards wrap" id="merchants">
        <article className="feature-card merchant-card">
          <div className="card-kicker">For Merchants</div>
          <h2>Stable INR deposits for India traffic.</h2>
          <p>
            We work with merchants who need more than a generic payment pitch. The focus
            is active flow, routing stability, and execution capacity that can actually hold volume.
          </p>
          <ul>
            {merchantPoints.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <a href="#access" className="card-btn">
            Apply as Merchant
          </a>
        </article>

        <article className="feature-card trader-card" id="traders">
          <div className="card-kicker">For Traders</div>
          <h2>Consistent flow. Real volume.</h2>
          <p>
            PAN gives traders structured demand from real merchants instead of random
            one-off traffic. Access is reserved for disciplined partners who can stay active,
            process consistently, and scale with demand.
          </p>
          <ul>
            {traderPoints.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <a href="#access" className="card-btn">
            Apply as Trader
          </a>
        </article>
      </section>

      <section className="stats-bar wrap" aria-label="PAN network highlights">
        {stats.map((item) => (
          <div className="stat-item" key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </section>

      <section className="process-section wrap" id="process">
        <div className="section-heading centered">
          <div className="eyebrow">How it works</div>
          <h2>Controlled execution of INR flow.</h2>
          <p>
            The network is centered around real deposit activity, structured allocation,
            enforced execution, and repeatable settlement cycles.
          </p>
        </div>

        <div className="process-grid">
          {process.map((item) => (
            <article className="process-card" key={item.step}>
              <div className="process-step">{item.step}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="edge-section wrap" id="edge">
        <div className="section-heading centered">
          <div className="eyebrow">Our edge</div>
          <h2>Execution-backed. Private by design.</h2>
          <p>
            This is not a public marketplace. PAN is a private allocation layer for merchant demand,
            trader-side liquidity, and controlled routing quality.
          </p>
        </div>

        <div className="edge-grid">
          {edge.map((item) => (
            <article className="edge-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="forms-section wrap" id="access">
        <div className="section-heading">
          <div className="eyebrow">Access is limited</div>
          <h2>Quality over quantity.</h2>
          <p>
            The network is built for merchants with active or scalable volume and traders
            with real execution capacity. Applications are reviewed manually.
          </p>
        </div>

        <div className="forms-grid">
          <LeadForm type="merchant" />
          <LeadForm type="trader" />
        </div>
      </section>

      <section className="final-cta">
        <div className="cta-bg">
          <Image src="/lava-bg.png" alt="PAN background" fill className="cta-bg-image" />
          <div className="cta-overlay" />
        </div>
        <div className="cta-panel wrap">
          <div>
            <div className="eyebrow">Private access</div>
            <h2>Built for partners with real volume only.</h2>
            <p>
              PAN is a private INR flow network. Merchant demand. Trader execution. Controlled routing.
            </p>
          </div>
          <a href="#top" className="primary-btn">
            Back to Top
          </a>
        </div>
      </section>

      <footer className="site-footer wrap">
        <div className="footer-brand">
          <Image src="/crown-logo.png" alt="PAN logo" width={44} height={44} />
          <div>
            <strong>PAN</strong>
            <span>Private Affiliate Network</span>
          </div>
        </div>
        <div className="footer-links">
          <a href="#merchants">Merchants</a>
          <a href="#traders">Traders</a>
          <a href="#process">How It Works</a>
          <a href="#access">Apply</a>
        </div>
      </footer>
    </main>
  );
}
