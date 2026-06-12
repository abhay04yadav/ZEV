import { Link } from 'react-router-dom';
import TopBar from '../components/layout/TopBar';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import FloatingButtons from '../components/layout/FloatingButtons';
import ZevImage from '../components/ui/ZevImage';
import RevealWrapper from '../components/ui/RevealWrapper';
import Gallery from '../components/ui/Gallery';
import FooterCTA from '../components/ui/FooterCTA';
import PageBanner from '../components/ui/PageBanner';

const CK = () => (
  <span className="ck">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6 9 17l-5-5"/>
    </svg>
  </span>
);

const GALLERY_IDS = [
  '1530062845289-9109b2c9c868',
  '1442512595331-e89e73853f31',
  '1517248135467-4c7edcad34c4',
  '1559339352-11d035aa65de',
  '1414235077428-338989a2e8c0',
  '1504754524776-8f4f37790ca0',
  '1467003909585-2f8a72700288',
  '1551218808-94e220e084d2',
];
const GALLERY_ALTS = [
  'Catering buffet setup',
  'Barista & coffee station',
  'Corporate dining room',
  'Event reception area',
  'Plated fine dining',
  'Buffet spread',
  'Conference refreshments',
  'Service & staffing',
];

export default function Catering() {
  return (
    <>
      <TopBar />
      <Navbar />

      <PageBanner
        crumbs={[{ to: '/', label: 'Home' }, { label: 'Catering Services' }]}
        eyebrow="Hospitality & Events"
        title="Catering that elevates every occasion."
        subtitle="From boardroom lunches to large corporate events, ZEV delivers fresh, beautifully presented catering with professional service — tailored to your guests and your brand."
      />

      {/* OVERVIEW */}
      <section className="section">
        <div className="wrap">
          <RevealWrapper className="booth-row">
            <div className="booth-media">
              <ZevImage className="bimg" id="1555244162-803834f70033" w={900} alt="Full-service catering, thoughtfully delivered." priority>Full-service catering, thoughtfully delivered.</ZevImage>
              <div className="bpill">ZEV Services</div>
            </div>
            <div className="booth-text">
              <span className="tag">Corporate &amp; Events</span>
              <h3>Full-service catering, thoughtfully delivered.</h3>
              <p>Whether it's a daily office spread, a VIP reception or a multi-day conference, our team plans the menu, sets up, serves and clears — so you can focus on your guests, not the logistics.</p>
              <ul className="pd-feats">
                <li><CK />Fresh menus prepared to the highest hygiene standards</li>
                <li><CK />Halal options and dietary requirements catered for</li>
                <li><CK />Setup, service staff and full clear-down included</li>
                <li><CK />Reliable delivery across Dubai and the wider UAE</li>
              </ul>
              <div style={{ marginTop: '6px' }}>
                <Link to="/contact" className="btn btn-primary">
                  Plan Your Event
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
              </div>
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* WHAT WE OFFER */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="wrap">
          <RevealWrapper className="sec-head">
            <span className="eyebrow">What We Offer</span>
            <h2>Catering for every kind of gathering</h2>
            <p>One partner for corporate hospitality, events and everything in between.</p>
          </RevealWrapper>
          <RevealWrapper className="value-grid">
            <div className="value-card">
              <div className="vic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3.5"/></svg>
              </div>
              <h3>Corporate Catering</h3>
              <p>Daily office catering, working lunches and meeting refreshments delivered on schedule.</p>
            </div>
            <div className="value-card">
              <div className="vic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M6 13.87V20h12v-6.13a4 4 0 1 0-3.5-6.9 4 4 0 0 0-5 0A4 4 0 1 0 6 13.87z"/><path d="M6 17h12"/></svg>
              </div>
              <h3>Events &amp; Hospitality</h3>
              <p>Receptions, conferences and celebrations catered end-to-end with elegant presentation.</p>
            </div>
            <div className="value-card">
              <div className="vic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8h1a3 3 0 0 1 0 6h-1"/><path d="M2 8h16v5a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5z"/><path d="M6 1v3M10 1v3M14 1v3"/></svg>
              </div>
              <h3>Coffee &amp; Barista</h3>
              <p>Live barista stations and premium coffee service to keep guests energised.</p>
            </div>
            <div className="value-card">
              <div className="vic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 2v7a3 3 0 0 0 6 0V2M6 2v20M21 15V2a5 5 0 0 0-3 9v4z"/></svg>
              </div>
              <h3>Buffet &amp; Fine Dining</h3>
              <p>From generous buffets to plated fine dining, matched to the formality of your event.</p>
            </div>
            <div className="value-card">
              <div className="vic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <h3>Staffing &amp; Service</h3>
              <p>Professional, presentable service staff, supervisors and waiters for any scale.</p>
            </div>
            <div className="value-card">
              <div className="vic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
              </div>
              <h3>Custom Menus</h3>
              <p>Tailored menus — international, regional and dietary — designed around your guests.</p>
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* GALLERY */}
      <section className="section">
        <div className="wrap">
          <RevealWrapper className="sec-head">
            <span className="eyebrow">A Taste of Our Work</span>
            <h2>Presentation that impresses</h2>
            <p>A glimpse of our setups and service.</p>
          </RevealWrapper>
          <RevealWrapper>
            <Gallery images={GALLERY_IDS} alts={GALLERY_ALTS} />
          </RevealWrapper>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="wrap">
          <RevealWrapper className="sec-head">
            <span className="eyebrow">How It Works</span>
            <h2>Effortless from enquiry to service</h2>
            <p>We make catering simple — you approve the plan, we handle the rest.</p>
          </RevealWrapper>
          <RevealWrapper className="ai-steps">
            <div className="ai-step">
              <div className="n">1</div>
              <h4>Consult</h4>
              <p>We learn your event, guest count, budget and preferences.</p>
            </div>
            <div className="ai-step">
              <div className="n">2</div>
              <h4>Menu &amp; Tasting</h4>
              <p>We propose a tailored menu and arrange a tasting where needed.</p>
            </div>
            <div className="ai-step">
              <div className="n">3</div>
              <h4>Setup</h4>
              <p>Our team arrives early, sets up and prepares everything on-site.</p>
            </div>
            <div className="ai-step">
              <div className="n">4</div>
              <h4>Serve &amp; Clear</h4>
              <p>We serve professionally and clear down completely afterwards.</p>
            </div>
          </RevealWrapper>
        </div>
      </section>

      <FooterCTA
        title="Hosting something soon?"
        desc="Tell us your date, guest count and style — we'll craft a menu and a quote to match."
      >
        <a href="https://api.whatsapp.com/send/?phone=971509191055&text=Hi%20ZEV%2C%20I%27d%20like%20to%20discuss%20catering%20for%20an%20event." target="_blank" rel="noopener" className="btn btn-wa">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.06 2.88 1.21 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35z"/></svg>
          Chat on WhatsApp
        </a>
        <Link to="/contact" className="btn btn-sand">Request a Quote</Link>
      </FooterCTA>

      <Footer />
      <FloatingButtons />
    </>
  );
}
