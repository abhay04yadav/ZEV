import { Link } from 'react-router-dom';
import TopBar from '../components/layout/TopBar';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import FloatingButtons from '../components/layout/FloatingButtons';
import RevealWrapper from '../components/ui/RevealWrapper';
import FooterCTA from '../components/ui/FooterCTA';
import PageBanner from '../components/ui/PageBanner';
import { screenExtenderProducts } from '../data/screenExtenderProducts';

const HERO_IMG =
  'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1440,h=756,fit=crop,f=jpeg/mp83Oby8KKTL0rqW/whatsapp-image-2025-07-31-at-17.57.50-Yg2y80LDG5urBR35.jpeg';

const WaIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.06 2.88 1.21 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35zM12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.32l-.34-.2-3.57.94.95-3.48-.22-.36a9.42 9.42 0 0 1 14.64-11.6 9.36 9.36 0 0 1 2.76 6.67c0 5.2-4.23 9.42-9.42 9.42zM20.52 3.45A11.36 11.36 0 0 0 12.05.94C5.8.94.71 6.03.71 12.28c0 2 .52 3.95 1.52 5.67L.6 23.94l6.13-1.61a11.34 11.34 0 0 0 5.32 1.35h.01c6.25 0 11.34-5.09 11.34-11.34 0-3.03-1.18-5.88-3.32-8.02z"/></svg>
);

export default function ScreenExtender() {
  return (
    <>
      <TopBar />
      <Navbar />

      <PageBanner
        crumbs={[
          { to: '/', label: 'Home' },
          { to: '/products', label: 'Products' },
          { label: 'Laptop Screen Extender' },
        ]}
        eyebrow="Technology"
        title="Laptop Screen Extender"
      />

      {/* HERO */}
      <section className="section se-hero-section" style={{ background: '#fff' }}>
        <div className="wrap">
          <RevealWrapper className="se-hero">
            <div className="se-hero-img">
              <img
                src={HERO_IMG}
                alt="ZEV Portable Laptop Screen Extender range"
                loading="eager"
                fetchPriority="high"
              />
            </div>
            <div className="se-hero-text">
              <span className="eyebrow">Portable Productivity</span>
              <h1>Portable Laptop Screen Extender for Dual Monitors</h1>
              <p className="lead">Boost your productivity with a portable laptop screen extender — offering dual or triple monitor solutions for professionals, students and gamers.</p>
              <p>Choose from our full range: compact 15.6" clip-on extenders, large 23.8" portable monitors, 2K professional screens and our powerful quad-screen setup. High resolution, seamless connectivity, no drivers required.</p>
              <div className="hero-cta">
                <a href="#products" className="btn btn-primary">Browse All Models</a>
                <a
                  href="https://api.whatsapp.com/send/?phone=971509191055"
                  target="_blank"
                  rel="noopener"
                  className="btn btn-wa"
                >
                  <WaIcon />Enquire on WhatsApp
                </a>
              </div>
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* WHY ZEV */}
      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="wrap">
          <RevealWrapper className="sec-head">
            <span className="eyebrow">Why ZEV</span>
            <h2>What sets this offer apart</h2>
          </RevealWrapper>
          <RevealWrapper className="value-grid">
            <div className="value-card">
              <div className="vic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2 4 5v6c0 5 3.4 8.5 8 10 4.6-1.5 8-5 8-10V5l-8-3z"/><path d="m9 12 2 2 4-4"/></svg>
              </div>
              <h3>Compact</h3>
              <p>Slim enough to slip into any laptop bag alongside your computer.</p>
            </div>
            <div className="value-card">
              <div className="vic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m12 6 0 6 4 2"/></svg>
              </div>
              <h3>Plug &amp; Play</h3>
              <p>No software, no configuration — connect and work instantly.</p>
            </div>
            <div className="value-card">
              <div className="vic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 7h-9M14 17H5"/><circle cx="17" cy="17" r="3"/><circle cx="7" cy="7" r="3"/></svg>
              </div>
              <h3>Giftable</h3>
              <p>Premium finish — ideal corporate gift or team kit item for mobile teams.</p>
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* PRODUCT STORE GRID */}
      <section className="section" id="products" style={{ background: '#fff' }}>
        <div className="wrap">
          <RevealWrapper className="sec-head">
            <span className="eyebrow">Our Range</span>
            <h2>Portable Screens &amp; Extenders</h2>
            <p>Select a model to learn more, request a quote, or enquire via WhatsApp.</p>
          </RevealWrapper>
          <RevealWrapper className="se-store-grid">
            {screenExtenderProducts.map((product) => (
              <Link
                key={product.slug}
                to={`/products/screen-extender/${product.slug}`}
                className="se-product-card"
              >
                <div className="se-card-img">
                  <img src={product.image} alt={product.name} loading="lazy" decoding="async" />
                  {product.comingSoon && <span className="se-badge">Coming Soon</span>}
                </div>
                <div className="se-card-body">
                  <h3>{product.name}</h3>
                  <p>{product.tagline}</p>
                  <span className="se-card-link">View Details &rarr;</span>
                </div>
              </Link>
            ))}
          </RevealWrapper>
        </div>
      </section>

      <FooterCTA
        title="Interested in the Laptop Screen Extender?"
        desc="Get a bulk quote for screen extenders for your entire workforce or as a corporate gift."
      >
        <a
          href="https://api.whatsapp.com/send/?phone=971509191055"
          target="_blank"
          rel="noopener"
          className="btn btn-wa"
        >
          <WaIcon />Chat on WhatsApp
        </a>
        <a href="tel:+971509191055" className="btn btn-sand">Call +971 50 919 1055</a>
      </FooterCTA>

      <Footer />
      <FloatingButtons />
    </>
  );
}
