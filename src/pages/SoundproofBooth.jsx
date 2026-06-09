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
import { boothGallery } from '../data/products';

export default function SoundproofBooth() {
  return (
    <>
      <TopBar />
      <Navbar />

      <PageBanner
        crumbs={[{ to: '/', label: 'Home' }, { to: '/products', label: 'Products' }, { label: 'Soundproof Office Booth' }]}
        eyebrow="Movable Silent Office Booth"
        title="A private, comfortable place creates productivity."
        subtitle="Powerful and portable. Four sizes compatible with more than 10 application scenarios — from focused solo work to lively six-person meetings."
      >
        <div style={{ marginTop: '26px', display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
          <Link to="/contact" className="btn btn-sand">Create It</Link>
          <a href="#features-sizes" className="btn btn-outline-l">Features &amp; Sizes</a>
        </div>
      </PageBanner>

      {/* INTRO */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="wrap">
          <RevealWrapper className="booth-row">
            <div className="booth-media">
              <ZevImage className="bimg" id="1497366754035-f200968a6e72" w={900} alt="Soundproof office booth">Soundproof booth — hero</ZevImage>
              <div className="bpill">SoundBox Office Booth</div>
            </div>
            <div className="booth-text">
              <span className="tag">Office Privacy</span>
              <h3>Peace and quiet, wherever your team needs it</h3>
              <p>With the rise of open-plan offices, the demand for privacy booths is growing rapidly. Our booths provide the peace and quiet your staff need for private phone calls or intense work sessions — fully customizable, and easy to relocate between departments.</p>
              <p>Choose fixed privacy booths or add wheels for mobility that lock into place when needed. Designed for easy assembly, our booths are built to serve you for a lifetime. We offer a comprehensive solution including design, manufacturing, and installation.</p>
              <p style={{ color: 'var(--ink)', fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}>Don't let noise be the greatest enemy on your path to success.</p>
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* BOOTH TYPES */}
      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="wrap">
          <RevealWrapper className="sec-head">
            <span className="eyebrow">The Range</span>
            <h2>Four sizes, ten-plus scenarios</h2>
            <p>From a single focused call to a full team huddle — there's a ZEV booth built for the moment.</p>
          </RevealWrapper>

          <RevealWrapper className="booth-row">
            <div className="booth-media">
              <ZevImage className="bimg" id="1431540015161-0bf868a2d407" w={900} alt="Meeting room booth">4 &amp; 6 person meeting booth</ZevImage>
              <div className="bpill">Largest</div>
            </div>
            <div className="booth-text">
              <span className="tag">Meeting Booth</span>
              <h3>4 &amp; 6 Person Meeting Booth</h3>
              <p>Whether it's a quick team huddle or a longer discussion, the Four-Person Meeting Pod has everything you need to get things done. The Six-Person Booth is perfect for spontaneous brainstorming — an open, comfortable workspace that encourages collaboration and creativity.</p>
              <div className="spec-row">
                <div className="sp"><strong>4–6</strong><small>People</small></div>
                <div className="sp"><strong>Acoustic</strong><small>Insulation</small></div>
                <div className="sp"><strong>Ventilated</strong><small>Airflow</small></div>
              </div>
            </div>
          </RevealWrapper>

          <RevealWrapper className="booth-row reverse">
            <div className="booth-media">
              <ZevImage className="bimg" id="1556761175-5973dc0f32e7" w={900} alt="Two person phone booth">2-person phone booth</ZevImage>
              <div className="bpill">Mid</div>
            </div>
            <div className="booth-text">
              <span className="tag">Phone Booth</span>
              <h3>2-Person Phone Booth</h3>
              <p>Whether you need a serious business discussion, a confidential meeting, or just a quiet chat, this booth is the ideal space — catering to your needs with maximum comfort and convenience.</p>
              <div className="spec-row">
                <div className="sp"><strong>2</strong><small>People</small></div>
                <div className="sp"><strong>Private</strong><small>Confidential</small></div>
                <div className="sp"><strong>Comfort</strong><small>Ergonomic</small></div>
              </div>
            </div>
          </RevealWrapper>

          <RevealWrapper className="booth-row">
            <div className="booth-media">
              <ZevImage className="bimg" id="1604328698692-f76ea9498e76" w={900} alt="Single person phone booth">1-person phone booth</ZevImage>
              <div className="bpill">Compact</div>
            </div>
            <div className="booth-text">
              <span className="tag">Phone Booth</span>
              <h3>1-Person Phone Booth</h3>
              <p>Whether you need to make an important business call or simply take a break from the hustle and bustle of your workplace, our soundproof phone booth has got you covered.</p>
              <div className="spec-row">
                <div className="sp"><strong>1</strong><small>Person</small></div>
                <div className="sp"><strong>Movable</strong><small>Wheels lock</small></div>
                <div className="sp"><strong>Quiet</strong><small>Focused</small></div>
              </div>
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* FEATURES & SIZES */}
      <section className="section" id="features-sizes" style={{ background: '#fff' }}>
        <div className="wrap">
          <RevealWrapper className="sec-head">
            <span className="eyebrow">Features &amp; Sizes</span>
            <h2>Designed for modern offices</h2>
            <p>ZEV Phone Pod is one of Dubai's leading acoustic booth design firms — specializing in support-space solutions and modular pod workstations for meetings, video sessions, and short phone calls.</p>
          </RevealWrapper>
          <RevealWrapper className="value-grid">
            <div className="value-card">
              <div className="vic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg></div>
              <h3>Superior Acoustics</h3>
              <p>Excellent sound insulation for private calls and focused work, addressing the interruptions common to open-plan offices and educational settings.</p>
            </div>
            <div className="value-card">
              <div className="vic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 7h-9M14 17H5"/><circle cx="17" cy="17" r="3"/><circle cx="7" cy="7" r="3"/></svg></div>
              <h3>Modular &amp; Movable</h3>
              <p>Fixed or fitted with locking wheels for easy relocation between departments. Simple assembly means it serves you for a lifetime.</p>
            </div>
            <div className="value-card">
              <div className="vic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a7 7 0 0 0-4 12.7V17a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2.3A7 7 0 0 0 12 2z"/><path d="M9 21h6"/></svg></div>
              <h3>Superior Ergonomics</h3>
              <p>Curated with ideal body working positions in mind, ensuring long-term comfort and productivity in a timeless, functional design.</p>
            </div>
            <div className="value-card">
              <div className="vic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v6m0 0 3-3m-3 3L9 5"/><path d="M4 12a8 8 0 0 0 16 0"/><path d="M2 16h20"/></svg></div>
              <h3>Eco-friendly</h3>
              <p>A flexible, eco-friendly, and affordable range of pods and booths — the perfect solution to the shared-space dilemma.</p>
            </div>
            <div className="value-card">
              <div className="vic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg></div>
              <h3>Four Sizes</h3>
              <p>From a 1-person phone booth to a 6-person meeting pod — choose the footprint that fits more than 10 application scenarios.</p>
            </div>
            <div className="value-card">
              <div className="vic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg></div>
              <h3>End-to-End Service</h3>
              <p>A comprehensive solution covering design, manufacturing, and installation — handled by our team from concept to commissioning.</p>
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* GALLERY */}
      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="wrap">
          <RevealWrapper className="sec-head">
            <span className="eyebrow">Gallery</span>
            <h2>Privacy in a sophisticated style</h2>
            <p>Multiple options that meet your needs for privacy, comfort, and design.</p>
          </RevealWrapper>
          <RevealWrapper>
            <Gallery images={boothGallery.map(g => g.p)} alts={boothGallery.map(g => g.t)} />
          </RevealWrapper>
        </div>
      </section>

      {/* STATS */}
      <section className="stats">
        <div className="wrap">
          <div className="stat"><div className="num">Quality</div><div className="label">Our Habit, Every Day</div></div>
          <div className="stat"><div className="num">Dubai</div><div className="label">Acoustic Design Firm</div></div>
          <div className="stat"><div className="num">10<span className="plus">+</span></div><div className="label">Application Scenarios</div></div>
          <div className="stat"><div className="num">A–Z</div><div className="label">Design to Installation</div></div>
        </div>
      </section>

      <FooterCTA
        title="Build your perfect quiet space."
        desc="You didn't come this far to stop. Tell us your office layout and we'll recommend the right booth configuration."
      >
        <Link to="/contact" className="btn btn-sand">Create It</Link>
        <a href="https://api.whatsapp.com/send/?phone=971509191055" target="_blank" rel="noopener" className="btn btn-outline-l">WhatsApp Us</a>
      </FooterCTA>

      <Footer />
      <FloatingButtons />
    </>
  );
}
