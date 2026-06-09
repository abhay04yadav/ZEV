import { Link } from 'react-router-dom';
import TopBar from '../components/layout/TopBar';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import FloatingButtons from '../components/layout/FloatingButtons';
import ZevImage from '../components/ui/ZevImage';
import RevealWrapper from '../components/ui/RevealWrapper';
import ProductCard from '../components/ui/ProductCard';
import FooterCTA from '../components/ui/FooterCTA';
import PageBanner from '../components/ui/PageBanner';
import { sectors } from '../data/products';

export default function About() {
  return (
    <>
      <TopBar />
      <Navbar />

      <PageBanner
        crumbs={[{ to: '/', label: 'Home' }, { label: 'About' }]}
        eyebrow="About ZEV General Trading"
        title="Two decades of trusted trading across the Emirates."
        subtitle="A reputable and dynamic company recognized for excellence, innovation, and sustainable business practices."
      />

      {/* WHO WE ARE */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="wrap">
          <RevealWrapper className="about-row">
            <div className="about-img">
              <ZevImage className="aimg" id="1522071820081-009f0129c71c" w={800} alt="ZEV team collaborating" priority>Team / business meeting</ZevImage>
              <div className="tab">Est. 20+ Years</div>
            </div>
            <div className="about-text">
              <span className="eyebrow">Who We Are</span>
              <h2>Built on reputation, driven by partnership</h2>
              <p>ZEV General Trading LLC is a reputable and dynamic company with over twenty years of experience in various sectors. Together with our trusted partners, we have built a strong reputation and extensive experience in the market.</p>
              <p>A member of the Sheikh Mohammed Bin Rashid Establishment and accredited by the Hamdan Innovation Establishment, we are recognized for our commitment to excellence, innovation, and sustainable business practices. We take pride in our valuable contributions to the business community.</p>
              <div className="accred-badges">
                <div className="ab">
                  <span className="seal"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2 4 5v6c0 5 3.4 8.5 8 10 4.6-1.5 8-5 8-10V5l-8-3z"/><path d="m9 12 2 2 4-4"/></svg></span>
                  <div><small>Member of</small><strong>Sheikh Mohammed Est.</strong></div>
                </div>
                <div className="ab">
                  <span className="seal"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M8.21 13.89 7 23l5-3 5 3-1.21-9.12"/></svg></span>
                  <div><small>Accredited by</small><strong>Hamdan Innovation Est.</strong></div>
                </div>
              </div>
              <div style={{ marginTop: '26px' }}>
                <Link to="/contact" className="btn btn-primary">Contact Us<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg></Link>
              </div>
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* STATS */}
      <section className="stats">
        <div className="wrap">
          <div className="stat"><div className="num">20<span className="plus">+</span></div><div className="label">Years of Experience</div></div>
          <div className="stat"><div className="num">UAE</div><div className="label">Government Accredited</div></div>
          <div className="stat"><div className="num">500<span className="plus">+</span></div><div className="label">Clients Served</div></div>
          <div className="stat"><div className="num">9</div><div className="label">Product Categories</div></div>
        </div>
      </section>

      {/* VISION / MISSION */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="wrap">
          <RevealWrapper className="sec-head">
            <span className="eyebrow">Our Direction</span>
            <h2>Vision &amp; Mission</h2>
            <p>A tailored approach to every business, grounded in gratitude and a commitment to giving back.</p>
          </RevealWrapper>
          <RevealWrapper className="value-grid">
            <div className="value-card">
              <div className="vic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg></div>
              <h3>Our Vision</h3>
              <p>Every business is unique and requires a tailored approach. We offer customized solutions designed to meet the specific needs of each client — striving to be the trusted partner they can rely on, with transparency, integrity, and professionalism that set us apart.</p>
            </div>
            <div className="value-card">
              <div className="vic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8"/><circle cx="12" cy="12" r="3"/></svg></div>
              <h3>Our Mission</h3>
              <p>Grateful for the support of the UAE — particularly the Sheikh Mohammed bin Rashid and Sheikh Hamdan bin Mohammed establishments — we are committed to giving back to our community and supporting fellow entrepreneurs and manufacturers looking to grow and succeed.</p>
            </div>
            <div className="value-card">
              <div className="vic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 7h-9M14 17H5M17 17a3 3 0 1 0 6 0 3 3 0 0 0-6 0zM1 7a3 3 0 1 0 6 0 3 3 0 0 0-6 0z"/></svg></div>
              <h3>Trusted Partner</h3>
              <p>We prioritize exceptional value and customer satisfaction, working closely with clients to understand their goals and deliver solutions that drive their success. Choose ZEV and experience the difference of a forward-thinking business partner.</p>
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* WHY CHOOSE ZEV */}
      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="wrap">
          <RevealWrapper className="about-row reverse">
            <div className="about-img">
              <ZevImage className="aimg" id="1573164713988-8665fc963095" w={800} alt="Business strategy meeting">Solutions / strategy</ZevImage>
              <div className="tab">Why ZEV</div>
            </div>
            <div className="about-text">
              <span className="eyebrow">The ZEV Advantage</span>
              <h2>Why Choose ZEV</h2>
              <ul className="feat-list">
                <li>
                  <span className="fi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg></span>
                  <div><h4>Comprehensive Services &amp; Supplies</h4><p>We specialize in providing comprehensive services and supplies to ministries, federal agencies, local government institutions, design and decoration companies, marketing agencies, and event management firms — delivering tailored solutions that meet their specific needs.</p></div>
                </li>
                <li>
                  <span className="fi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg></span>
                  <div><h4>Extensive Expertise &amp; Experience</h4><p>With over twenty years in the industry, we have developed extensive expertise across various sectors. Our professionals navigate complex challenges and continuously adapt to the latest market trends and technological advancements to provide cutting-edge solutions.</p></div>
                </li>
                <li>
                  <span className="fi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v6m0 0 3-3m-3 3L9 5"/><path d="M4 12a8 8 0 0 0 16 0"/><path d="M2 16h20"/></svg></span>
                  <div><h4>Digital Technology &amp; Sustainability</h4><p>We embrace the transformative power of digital technology and invest in advanced solutions to optimize our processes. Sustainability guides our practices — from responsible sourcing and eco-friendly packaging to energy-efficient operations.</p></div>
                </li>
              </ul>
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* DIVERSE SECTORS */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="wrap">
          <RevealWrapper className="sec-head">
            <span className="eyebrow">One Roof, Many Sectors</span>
            <h2>Diverse Sectors We Serve</h2>
            <p>A wide range of capabilities lets us cater to the diverse needs of our clients with comprehensive solutions under one roof.</p>
          </RevealWrapper>
          <RevealWrapper className="prod-grid no-scroll cols-3">
            {sectors.map(s => (
              <Link className="prod-card" to={s.href} key={s.name}>
                <ZevImage className="pimg" id={s.pic} w={600} alt={s.name}>{s.name}</ZevImage>
                <div className="pbody">
                  <h3>{s.name}</h3>
                  <p className="pdesc">{s.note}</p>
                </div>
              </Link>
            ))}
          </RevealWrapper>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="section principles">
        <div className="wrap">
          <RevealWrapper className="sec-head">
            <span className="eyebrow">Our Principles</span>
            <h2>Quality is our habit</h2>
            <p>We are dedicated to delivering exceptional quality and exceeding customer expectations — every day.</p>
          </RevealWrapper>
          <RevealWrapper className="princ-grid">
            <div className="princ"><div className="pn">01</div><div><h4>Sustainable Business Practices</h4><p>We prioritize sustainability in all aspects of our operations, ensuring a better future for generations to come.</p></div></div>
            <div className="princ"><div className="pn">02</div><div><h4>Innovation-driven Solutions</h4><p>We embrace innovation to provide cutting-edge solutions that drive business growth for our clients.</p></div></div>
            <div className="princ"><div className="pn">03</div><div><h4>Commitment to Excellence</h4><p>We've made quality our habit — it's not something we just strive for, it's a principle we live by.</p></div></div>
          </RevealWrapper>
        </div>
      </section>

      <FooterCTA
        title="Partner with a company you can trust."
        desc="We welcome entrepreneurs and manufacturers to reach out for assistance in marketing their products. Let's achieve greater success together."
      >
        <Link to="/contact" className="btn btn-sand">Get in Touch</Link>
        <Link to="/products" className="btn btn-outline-l">Browse Products</Link>
      </FooterCTA>

      <Footer />
      <FloatingButtons />
    </>
  );
}
