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
  '1505373877841-8d25f7d46678',
  '1492684223066-81342ee5ff30',
  '1559136555-9303baea8ebd',
  '1515187029135-18ee286d815b',
  '1540575467063-178a50c2df87',
  '1582192730841-2a682d7375f9',
  '1531058020387-3be344556be6',
  '1587825140708-dfaf72ae4b04',
];
const GALLERY_ALTS = [
  'Custom exhibition stand',
  'Brand activation',
  'Meeting lounge build',
  'Exhibition display wall',
  'Event & activation',
  'Interactive tech display',
  'Conference environment',
  'Stage & build',
];

export default function ExpoStand() {
  return (
    <>
      <TopBar />
      <Navbar />

      <PageBanner
        crumbs={[{ to: '/', label: 'Home' }, { label: 'Expo Stand Design & Build' }]}
        eyebrow="Exhibition & Events"
        title="Expo stands that command the floor."
        subtitle="From concept to construction, ZEV designs and builds exhibition stands that make your brand the centre of attention — delivered turnkey, anywhere in the UAE."
      />

      {/* OVERVIEW */}
      <section className="section">
        <div className="wrap">
          <RevealWrapper className="booth-row">
            <div className="booth-media">
              <ZevImage className="bimg" id="1511578314322-379afb476865" w={900} alt="Turnkey exhibition stands, start to finish." priority>Turnkey exhibition stands, start to finish.</ZevImage>
              <div className="bpill">ZEV Services</div>
            </div>
            <div className="booth-text">
              <span className="tag">Design &amp; Build</span>
              <h3>Turnkey exhibition stands, start to finish.</h3>
              <p>We handle every stage under one roof — so you arrive to a finished, on-brand stand and walk away without lifting a tool. Our team manages design, fabrication, logistics, installation and dismantling, keeping your timeline and budget on track.</p>
              <ul className="pd-feats">
                <li><CK />Single point of contact from brief to breakdown</li>
                <li><CK />In-house design, 3D visualisation and fabrication</li>
                <li><CK />Compliance with venue and organiser regulations</li>
                <li><CK />On-time delivery for ADNEC, DWTC and major venues</li>
              </ul>
              <div style={{ marginTop: '6px' }}>
                <Link to="/contact" className="btn btn-primary">
                  Plan Your Stand
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
              </div>
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* WHAT WE DELIVER */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="wrap">
          <RevealWrapper className="sec-head">
            <span className="eyebrow">What We Deliver</span>
            <h2>Everything your stand needs</h2>
            <p>A complete exhibition capability — bespoke or modular, small kiosks to double-decker builds.</p>
          </RevealWrapper>
          <RevealWrapper className="value-grid">
            <div className="value-card">
              <div className="vic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>
              </div>
              <h3>Custom Stand Design</h3>
              <p>Bespoke, brand-led concepts with photoreal 3D visualisation so you see the stand before we build it.</p>
            </div>
            <div className="value-card">
              <div className="vic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/></svg>
              </div>
              <h3>Modular &amp; Reusable Systems</h3>
              <p>Smart modular systems that reconfigure across multiple shows — lowering your cost per event.</p>
            </div>
            <div className="value-card">
              <div className="vic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4l-6.9 6.9a1.5 1.5 0 1 0 2.1 2.1l6.9-6.9a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.1-2.1 2.5-2.5z"/></svg>
              </div>
              <h3>Fabrication &amp; Build</h3>
              <p>Joinery, metalwork and finishing in our workshop, built to exhibition-grade quality and safety.</p>
            </div>
            <div className="value-card">
              <div className="vic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41 13.42 20.6a2 2 0 0 1-2.83 0l-7.18-7.18a2 2 0 0 1-.59-1.42V4a2 2 0 0 1 2-2h7.99a2 2 0 0 1 1.41.59l7.18 7.18a2 2 0 0 1 0 2.82z"/><circle cx="7.5" cy="7.5" r="1.5"/></svg>
              </div>
              <h3>Graphics &amp; Branding</h3>
              <p>Large-format print, illuminated logos and finishes that keep your identity crisp on the floor.</p>
            </div>
            <div className="value-card">
              <div className="vic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.3h6c0-1 .4-1.8 1-2.3A7 7 0 0 0 12 2z"/></svg>
              </div>
              <h3>AV, Lighting &amp; Tech</h3>
              <p>Screens, lighting, interactive displays and power planning to draw and hold a crowd.</p>
            </div>
            <div className="value-card">
              <div className="vic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M1 3h15v13H1zM16 8h4l3 3v5h-7"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
              </div>
              <h3>Install &amp; Dismantle</h3>
              <p>Logistics, on-site installation, supervision and clean dismantling — fully managed for you.</p>
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* GALLERY */}
      <section className="section">
        <div className="wrap">
          <RevealWrapper className="sec-head">
            <span className="eyebrow">Selected Work</span>
            <h2>A look at what we build</h2>
            <p>A snapshot of stands, activations and event environments.</p>
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
            <h2>From brief to build in four steps</h2>
            <p>A clear, managed process that keeps you informed and in control at every stage.</p>
          </RevealWrapper>
          <RevealWrapper className="ai-steps">
            <div className="ai-step">
              <div className="n">1</div>
              <h4>Brief &amp; Concept</h4>
              <p>We capture your goals, space and budget, then shape the creative direction.</p>
            </div>
            <div className="ai-step">
              <div className="n">2</div>
              <h4>Design &amp; 3D</h4>
              <p>You approve a photoreal 3D design, layout and material selection.</p>
            </div>
            <div className="ai-step">
              <div className="n">3</div>
              <h4>Fabrication</h4>
              <p>We build, print and pre-assemble your stand in our workshop.</p>
            </div>
            <div className="ai-step">
              <div className="n">4</div>
              <h4>Install &amp; Support</h4>
              <p>We deliver, install on-site and stand by throughout the show.</p>
            </div>
          </RevealWrapper>
        </div>
      </section>

      <FooterCTA
        title="Exhibiting soon?"
        desc="Share your show, space and dates — we'll come back with a concept and a clear quote."
      >
        <a href="https://api.whatsapp.com/send/?phone=971509191055&text=Hi%20ZEV%2C%20I%27d%20like%20to%20discuss%20an%20expo%20stand." target="_blank" rel="noopener" className="btn btn-wa">
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
