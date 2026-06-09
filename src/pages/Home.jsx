import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import TopBar from '../components/layout/TopBar';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import FloatingButtons from '../components/layout/FloatingButtons';
import ZevImage from '../components/ui/ZevImage';
import RevealWrapper from '../components/ui/RevealWrapper';
import ProductCard from '../components/ui/ProductCard';
import BrandMarquee from '../components/ui/BrandMarquee';
import FooterCTA from '../components/ui/FooterCTA';
import { products } from '../data/products';

function StatCounter({ value, suffix, label }) {
  const numRef = useRef(null);
  const animated = useRef(false);

  useEffect(() => {
    if (isNaN(value)) return;
    const el = numRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || animated.current) return;
      animated.current = true;
      io.unobserve(el);
      const dur = 1400;
      let t0 = null;
      const step = (ts) => {
        if (!t0) t0 = ts;
        const p = Math.min((ts - t0) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(value * eased);
        if (p < 1) requestAnimationFrame(step);
        else el.textContent = value;
      };
      requestAnimationFrame(step);
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  if (isNaN(value)) {
    return (
      <div className="stat">
        <div className="num">{value}{suffix && <span className="plus">{suffix}</span>}</div>
        <div className="label">{label}</div>
      </div>
    );
  }

  return (
    <div className="stat">
      <div className="num">
        <span ref={numRef}>{value}</span>
        {suffix && <span className="plus">{suffix}</span>}
      </div>
      <div className="label">{label}</div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <TopBar />
      <Navbar />

      {/* HERO */}
      <section className="hero">
        <div className="wrap">
          <RevealWrapper className="hero-copy">
            <span className="hero-accent"><span className="line"></span>20+ Years of UAE Trading Excellence</span>
            <h1>Your trusted partner in <span className="hl">general trading</span> &amp; supply.</h1>
            <p className="lead">ZEV General Trading LLC delivers comprehensive products and solutions to ministries, federal agencies, government institutions, and leading enterprises across the Emirates.</p>
            <div className="tags">
              <span>Tech</span><span>Office Furnishings</span><span>Hospitality Equipment</span>
              <span>Exhibition &amp; Events</span><span>Safety</span><span>Corporate Gifts</span>
            </div>
            <div className="hero-cta">
              <Link to="/products" className="btn btn-primary">
                Explore Products
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
              <Link to="/contact" className="btn btn-ghost">Request a Quote</Link>
            </div>
          </RevealWrapper>

          <RevealWrapper className="hero-art">
            <div className="deco"></div>
            <ZevImage className="img-main" id="1524758631624-e2822e304c36" w={900} alt="Modern office workspace" priority>Office &amp; tech collage</ZevImage>
            <ZevImage className="img-sub" id="1496181133206-80ce9b88a853" w={700} alt="Laptop on a desk" priority>Product shot</ZevImage>
            <div className="badge">
              <span className="bnum">20<span style={{ color: 'var(--sand)' }}>+</span></span>
              <span className="btxt">Years serving the UAE market</span>
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="section products" id="products">
        <div className="wrap">
          <RevealWrapper className="sec-head">
            <span className="eyebrow">What We Supply</span>
            <h2>Our Product Categories</h2>
            <p>From cutting-edge technology to office furnishings and event packages — a complete supply partner under one roof.</p>
          </RevealWrapper>
          <RevealWrapper className="prod-grid">
            {products.map(p => <ProductCard key={p.id} {...p} />)}
          </RevealWrapper>
        </div>
      </section>

      {/* STATS */}
      <section className="stats">
        <div className="wrap">
          <StatCounter value={20} suffix="+" label="Years of Experience" />
          <StatCounter value="UAE" label="Government Accredited" />
          <StatCounter value={500} suffix="+" label="Clients Served" />
          <StatCounter value={9} label="Product Categories" />
        </div>
      </section>

      {/* ABOUT */}
      <section className="section" id="about" style={{ background: '#fff' }}>
        <div className="wrap">
          <RevealWrapper className="about-row">
            <div className="about-img">
              <ZevImage className="aimg" id="1522071820081-009f0129c71c" w={800} alt="ZEV team collaborating">Team / business meeting</ZevImage>
              <div className="tab">Est. 20+ Years</div>
            </div>
            <div className="about-text">
              <span className="eyebrow">First of All</span>
              <h2>Who We Are</h2>
              <p>ZEV General Trading LLC is a reputable and dynamic company with over twenty years of experience across various sectors. Together with our trusted partners, we have built a strong reputation and extensive expertise in the market.</p>
              <p>A member of the Sheikh Mohammed Bin Rashid Establishment and accredited by the Hamdan Innovation Establishment, we are recognized for our commitment to excellence, innovation, and sustainable business practices.</p>
              <div className="accred-badges">
                <div className="ab">
                  <span className="seal">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2 4 5v6c0 5 3.4 8.5 8 10 4.6-1.5 8-5 8-10V5l-8-3z"/><path d="m9 12 2 2 4-4"/></svg>
                  </span>
                  <div><small>Member of</small><strong>Sheikh Mohammed Est.</strong></div>
                </div>
                <div className="ab">
                  <span className="seal">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M8.21 13.89 7 23l5-3 5 3-1.21-9.12"/></svg>
                  </span>
                  <div><small>Accredited by</small><strong>Hamdan Innovation Est.</strong></div>
                </div>
              </div>
              <div style={{ marginTop: '26px' }}>
                <Link to="/about" className="btn btn-primary">
                  More About ZEV
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
              </div>
            </div>
          </RevealWrapper>

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
                  <div><h4>Comprehensive Services &amp; Supplies</h4><p>Tailored solutions for ministries, federal agencies, local government institutions, design &amp; decoration companies, marketing agencies, and event management firms.</p></div>
                </li>
                <li>
                  <span className="fi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg></span>
                  <div><h4>Extensive Expertise &amp; Experience</h4><p>Over twenty years across multiple sectors. Our professionals navigate complex challenges and continuously adapt to the latest market trends and technology.</p></div>
                </li>
                <li>
                  <span className="fi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v6m0 0 3-3m-3 3L9 5"/><path d="M4 12a8 8 0 0 0 16 0"/><path d="M2 16h20"/></svg></span>
                  <div><h4>Sustainable &amp; Innovative</h4><p>Recognized for a commitment to excellence, innovation, and sustainable business practices that add real value to the community.</p></div>
                </li>
              </ul>
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* BRANDS */}
      <section className="section brands">
        <div className="wrap">
          <RevealWrapper className="sec-head">
            <span className="eyebrow">Authorized Supply</span>
            <h2>Our Main Partners</h2>
            <p>We supply genuine products from the world's most trusted technology brands.</p>
          </RevealWrapper>
        </div>
        <RevealWrapper>
          <BrandMarquee />
        </RevealWrapper>
      </section>

      {/* CLIENTS */}
      <section className="section clients">
        <div className="wrap">
          <RevealWrapper className="sec-head">
            <span className="eyebrow">Trusted By</span>
            <h2>Our Partners &amp; Clients</h2>
            <p>Serving government bodies, federal agencies, and leading enterprises across the United Arab Emirates.</p>
          </RevealWrapper>
          <RevealWrapper className="logo-wall">
            <div className="logo-wall-panel">
              <div className="logo-wall-grid">
                <img src="/assets/partners-a.png" alt="Logos of UAE ministries, federal authorities and government bodies served by ZEV General Trading" loading="lazy" decoding="async" />
                <img src="/assets/partners-b.png" alt="Logos of leading UAE enterprises, banks, universities and interior firms served by ZEV General Trading" loading="lazy" decoding="async" />
              </div>
            </div>
            <p className="logo-wall-note">Among the government bodies, federal authorities and enterprises we proudly serve across the Emirates.</p>
          </RevealWrapper>
        </div>
      </section>

      {/* FOOTER CTA */}
      <FooterCTA
        title="Let's build your next supply partnership."
        desc="Whether you need technology, furnishings, hospitality equipment, or a full event package — our team is ready to deliver tailored solutions for your organization."
      >
        <a href="https://api.whatsapp.com/send/?phone=971509191055" target="_blank" rel="noopener" className="btn btn-wa">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.06 2.88 1.21 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35z"/></svg>
          Chat on WhatsApp
        </a>
        <a href="tel:+971509191055" className="btn btn-sand">Call +971 50 919 1055</a>
      </FooterCTA>

      <Footer />
      <FloatingButtons />
    </>
  );
}
