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
  '1572044162444-ad60f128bdea',
  '1581291518857-4e27b48ff24e',
  '1611532736597-de2d4265fba3',
  '1456735190827-d1262f71b8a3',
  '1597007030739-6d2e7172ee5b',
  '1542435503-956c469947f6',
  '1517842645767-c639042777db',
  '1453928582365-b6ad33cbcf64',
];
const GALLERY_ALTS = [
  'Colour & proofing',
  'Design & artwork',
  'Branding & identity',
  'Studio & materials',
  'Vehicle graphics',
  'Corporate stationery',
  'Notebooks & print',
  'Proofing & finishing',
];

export default function Printing() {
  return (
    <>
      <TopBar />
      <Navbar />

      <PageBanner
        crumbs={[{ to: '/', label: 'Home' }, { label: 'Printing & Production' }]}
        eyebrow="Print & Production"
        title="Printing that makes your brand look its best."
        subtitle="From business cards to building-sized banners, ZEV delivers sharp, durable, on-brand print and production — quick turnarounds and consistent quality across every format."
      />

      {/* OVERVIEW */}
      <section className="section">
        <div className="wrap">
          <RevealWrapper className="booth-row">
            <div className="booth-media">
              <ZevImage className="bimg" id="1503694978374-8a2fa686963a" w={900} alt="One partner for every print job." priority>One partner for every print job.</ZevImage>
              <div className="bpill">ZEV Services</div>
            </div>
            <div className="booth-text">
              <span className="tag">Commercial Print</span>
              <h3>One partner for every print job.</h3>
              <p>Marketing collateral, signage, branded merchandise and large-format graphics — produced to a consistent standard and delivered on time. We manage colour, materials and finishing so your brand always looks deliberate.</p>
              <ul className="pd-feats">
                <li><CK />Offset, digital and large-format under one roof</li>
                <li><CK />Accurate, consistent brand colour management</li>
                <li><CK />Premium substrates and durable outdoor materials</li>
                <li><CK />Fast turnarounds with reliable UAE-wide delivery</li>
              </ul>
              <div style={{ marginTop: '6px' }}>
                <Link to="/contact" className="btn btn-primary">
                  Request a Print Quote
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
              </div>
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* WHAT WE PRODUCE */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="wrap">
          <RevealWrapper className="sec-head">
            <span className="eyebrow">What We Produce</span>
            <h2>Print &amp; production, end to end</h2>
            <p>Whatever you need to put your brand in front of people — designed, produced and finished.</p>
          </RevealWrapper>
          <RevealWrapper className="value-grid">
            <div className="value-card">
              <div className="vic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
              </div>
              <h3>Large Format &amp; Signage</h3>
              <p>Banners, roll-ups, hoardings and illuminated signage that hold up indoors and out.</p>
            </div>
            <div className="value-card">
              <div className="vic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9V2h12v7M6 18H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>
              </div>
              <h3>Offset &amp; Digital Print</h3>
              <p>Brochures, flyers, reports and packaging — short or long runs with crisp quality.</p>
            </div>
            <div className="value-card">
              <div className="vic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41 13.42 20.6a2 2 0 0 1-2.83 0l-7.18-7.18a2 2 0 0 1-.59-1.42V4a2 2 0 0 1 2-2h7.99a2 2 0 0 1 1.41.59l7.18 7.18a2 2 0 0 1 0 2.82z"/><circle cx="7.5" cy="7.5" r="1.5"/></svg>
              </div>
              <h3>Branding &amp; Stationery</h3>
              <p>Business cards, letterheads and complete corporate identity collateral.</p>
            </div>
            <div className="value-card">
              <div className="vic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13M5 12v9h14v-9"/><path d="M12 8a3 3 0 1 0-3-3M12 8a3 3 0 1 1 3-3"/></svg>
              </div>
              <h3>Promotional Items</h3>
              <p>Branded merchandise and giveaways that keep your name in people's hands.</p>
            </div>
            <div className="value-card">
              <div className="vic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 17H3v-5l2-5h14l2 5v5h-2M7 17h10"/><circle cx="7.5" cy="17.5" r="1.5"/><circle cx="16.5" cy="17.5" r="1.5"/></svg>
              </div>
              <h3>Vehicle &amp; Wall Graphics</h3>
              <p>Fleet wraps, window and wall graphics that turn surfaces into brand space.</p>
            </div>
            <div className="value-card">
              <div className="vic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="m12 2 10 5-10 5L2 7z"/><path d="m2 17 10 5 10-5M2 12l10 5 10-5"/></svg>
              </div>
              <h3>Finishing &amp; Delivery</h3>
              <p>Lamination, cutting, mounting and on-time delivery to your door or venue.</p>
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* GALLERY */}
      <section className="section">
        <div className="wrap">
          <RevealWrapper className="sec-head">
            <span className="eyebrow">Print Showcase</span>
            <h2>Quality you can see</h2>
            <p>A sample of formats and finishes we produce.</p>
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
            <span className="eyebrow">How We Work</span>
            <h2>Simple, fast, reliable</h2>
            <p>A straightforward path from your files to finished, delivered print.</p>
          </RevealWrapper>
          <RevealWrapper className="ai-steps">
            <div className="ai-step">
              <div className="n">1</div>
              <h4>Brief</h4>
              <p>Tell us the format, quantity, materials and deadline.</p>
            </div>
            <div className="ai-step">
              <div className="n">2</div>
              <h4>Design &amp; Proof</h4>
              <p>We prepare or check artwork and send a proof for sign-off.</p>
            </div>
            <div className="ai-step">
              <div className="n">3</div>
              <h4>Print</h4>
              <p>We produce on the right press and material for the job.</p>
            </div>
            <div className="ai-step">
              <div className="n">4</div>
              <h4>Finish &amp; Deliver</h4>
              <p>We finish, quality-check and deliver across the UAE.</p>
            </div>
          </RevealWrapper>
        </div>
      </section>

      <FooterCTA
        title="Need something printed?"
        desc="Send your artwork, format and quantity — we'll return a quote and a realistic timeline."
      >
        <a href="https://api.whatsapp.com/send/?phone=971509191055&text=Hi%20ZEV%2C%20I%27d%20like%20a%20print%20quote." target="_blank" rel="noopener" className="btn btn-wa">
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
