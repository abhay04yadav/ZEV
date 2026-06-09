import { useParams, Link, Navigate } from 'react-router-dom';
import TopBar from '../components/layout/TopBar';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import FloatingButtons from '../components/layout/FloatingButtons';
import ZevImage from '../components/ui/ZevImage';
import RevealWrapper from '../components/ui/RevealWrapper';
import Gallery from '../components/ui/Gallery';
import ProductCard from '../components/ui/ProductCard';
import FooterCTA from '../components/ui/FooterCTA';
import PageBanner from '../components/ui/PageBanner';
import { productPages } from '../data/products';

const WaIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.06 2.88 1.21 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35zM12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.32l-.34-.2-3.57.94.95-3.48-.22-.36a9.42 9.42 0 0 1 14.64-11.6 9.36 9.36 0 0 1 2.76 6.67c0 5.2-4.23 9.42-9.42 9.42zM20.52 3.45A11.36 11.36 0 0 0 12.05.94C5.8.94.71 6.03.71 12.28c0 2 .52 3.95 1.52 5.67L.6 23.94l6.13-1.61a11.34 11.34 0 0 0 5.32 1.35h.01c6.25 0 11.34-5.09 11.34-11.34 0-3.03-1.18-5.88-3.32-8.02z"/></svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
);

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
);

function ValueIcon({ type }) {
  if (type === 'shield') return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2 4 5v6c0 5 3.4 8.5 8 10 4.6-1.5 8-5 8-10V5l-8-3z"/><path d="m9 12 2 2 4-4"/></svg>;
  if (type === 'clock') return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m12 6 0 6 4 2"/></svg>;
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 7h-9M14 17H5"/><circle cx="17" cy="17" r="3"/><circle cx="7" cy="7" r="3"/></svg>;
}

export default function ProductDetail() {
  const { slug } = useParams();
  const data = productPages[slug];

  if (!data) return <Navigate to="/products" replace />;

  const slugToName = {
    'camera-laptop': 'Camera & Laptop',
    'furniture': 'Furniture',
    'corporate-gifts': 'Corporate Gifts',
    'paddle-board': 'Paddle Board',
    'screen-extender': 'Laptop Screen Extender',
    'tire-protection': 'ZEV Tire Protection',
    'hospitality': 'Hospitality Equipment',
    'safety': 'Safety',
    'coffee-maker': 'Portable Coffee Maker',
  };

  return (
    <>
      <TopBar />
      <Navbar />

      <PageBanner
        crumbs={[
          { to: '/', label: 'Home' },
          { to: '/products', label: 'Products' },
          { label: slugToName[slug] || slug },
        ]}
        eyebrow={data.cat}
        title={slugToName[slug] || slug}
      />

      {/* PD HERO */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="wrap">
          <RevealWrapper className="pd-hero">
            <div className="pd-media">
              <ZevImage className="pimgL" id={data.pic} w={1000} alt={slugToName[slug]}>{slugToName[slug]}</ZevImage>
              <div className="pbadge">
                <span className="seal">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="m3.3 7 8.7 5 8.7-5M12 22V12"/></svg>
                </span>
                <div><small>ZEV</small><strong>{data.badge}</strong></div>
              </div>
            </div>
            <div className="pd-text">
              <span className="tag">{data.cat}</span>
              <h1>{data.title}</h1>
              {data.desc.map((p, i) => <p key={i}>{p}</p>)}
              <ul className="pd-feats">
                {data.feats.map((f, i) => (
                  <li key={i}>
                    <span className="ck"><CheckIcon /></span>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="pd-cta">
                <a href="https://api.whatsapp.com/send/?phone=971509191055" target="_blank" rel="noopener" className="btn btn-wa">
                  <WaIcon />Enquire on WhatsApp
                </a>
                <Link to="/contact" className="btn btn-ghost">Request a Quote <ArrowIcon /></Link>
              </div>
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* VALUE GRID */}
      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="wrap">
          <RevealWrapper className="sec-head">
            <span className="eyebrow">Why ZEV</span>
            <h2>What sets this offer apart</h2>
          </RevealWrapper>
          <RevealWrapper className="value-grid">
            {data.values.map((v, i) => (
              <div className="value-card" key={i}>
                <div className="vic"><ValueIcon type={v.icon} /></div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </RevealWrapper>
        </div>
      </section>

      {/* GALLERY */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="wrap">
          <RevealWrapper className="sec-head">
            <span className="eyebrow">Gallery</span>
            <h2>A closer look</h2>
          </RevealWrapper>
          <RevealWrapper>
            <Gallery images={data.gallery} alts={data.galleryAlts} />
          </RevealWrapper>
        </div>
      </section>

      {/* RELATED */}
      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="wrap">
          <RevealWrapper className="sec-head left" style={{ marginBottom: '34px' }}>
            <span className="eyebrow">Explore More</span>
            <h2>Related categories</h2>
          </RevealWrapper>
          <RevealWrapper className="prod-grid no-scroll cols-3">
            {data.related.map(r => (
              <ProductCard key={r.id} id={r.id} cat={r.cat} name={r.name} pic={r.pic} img={r.name} />
            ))}
          </RevealWrapper>
        </div>
      </section>

      <FooterCTA title={data.ctaTitle} desc={data.ctaDesc}>
        <a href="https://api.whatsapp.com/send/?phone=971509191055" target="_blank" rel="noopener" className="btn btn-wa">
          <WaIcon />Chat on WhatsApp
        </a>
        <a href="tel:+971509191055" className="btn btn-sand">Call +971 50 919 1055</a>
      </FooterCTA>

      <Footer />
      <FloatingButtons />
    </>
  );
}
