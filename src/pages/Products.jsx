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
import PageBanner from '../components/ui/PageBanner';
import { cats } from '../data/products';

export default function Products() {
  return (
    <>
      <TopBar />
      <Navbar />

      <PageBanner
        crumbs={[{ to: '/', label: 'Home' }, { label: 'Products' }]}
        eyebrow="What We Supply"
        title="Comprehensive solutions, all under one roof."
        subtitle="Nine product categories spanning technology, furnishings, hospitality, safety, and corporate gifting — sourced and delivered for organizations across the UAE."
      />

      {/* PRODUCT GRID */}
      <section className="section products">
        <div className="wrap">
          <RevealWrapper className="prod-grid no-scroll cols-3">
            {cats.map(p => (
              <ProductCard key={p.id} {...p} desc={p.note} linkLabel="Enquire now" />
            ))}
          </RevealWrapper>
        </div>
      </section>

      {/* FEATURED: SOUNDPROOF BOOTH */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="wrap">
          <RevealWrapper className="booth-row">
            <div className="booth-media">
              <ZevImage className="bimg" id="1497366754035-f200968a6e72" w={900} alt="Soundproof office booth">Soundproof office booth</ZevImage>
              <div className="bpill">Featured</div>
            </div>
            <div className="booth-text">
              <span className="tag">Workspace</span>
              <h3>Movable Soundproof Office Booth</h3>
              <p>A private and comfortable place creates productivity. Powerful and portable — available in 4 sizes compatible with more than 10 application scenarios, from focused solo work to six-person meetings.</p>
              <div className="spec-row">
                <div className="sp"><strong>4</strong><small>Sizes</small></div>
                <div className="sp"><strong>10+</strong><small>Scenarios</small></div>
                <div className="sp"><strong>1–6</strong><small>People</small></div>
              </div>
              <div style={{ marginTop: '26px' }}>
                <Link to="/soundproof-booth" className="btn btn-primary">
                  Explore the Booth
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
              </div>
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

      <FooterCTA
        title="Need a tailored quote?"
        desc="Tell us what your organization needs and our team will put together a comprehensive supply proposal."
      >
        <a href="https://api.whatsapp.com/send/?phone=971509191055" target="_blank" rel="noopener" className="btn btn-wa">
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
