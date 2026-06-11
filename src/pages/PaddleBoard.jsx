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

const CDN = (w, h, file) =>
  `https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=${w},h=${h},fit=crop/mp83Oby8KKTL0rqW/${file}`;

const WaIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.06 2.88 1.21 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35zM12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.32l-.34-.2-3.57.94.95-3.48-.22-.36a9.42 9.42 0 0 1 14.64-11.6 9.36 9.36 0 0 1 2.76 6.67c0 5.2-4.23 9.42-9.42 9.42zM20.52 3.45A11.36 11.36 0 0 0 12.05.94C5.8.94.71 6.03.71 12.28c0 2 .52 3.95 1.52 5.67L.6 23.94l6.13-1.61a11.34 11.34 0 0 0 5.32 1.35h.01c6.25 0 11.34-5.09 11.34-11.34 0-3.03-1.18-5.88-3.32-8.02z"/></svg>
);

const StarRow = () => (
  <div className="pb-stars">
    {[...Array(5)].map((_, i) => (
      <svg key={i} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
    ))}
  </div>
);

const galleryImages = [
  CDN(900, 600, 'zev-fishing-board-1-Kg6DXL4EUW7QfQXf.jpg'),
  CDN(900, 600, 'zev-fishing-board-l07IYGVwABjWlsK2.jpg'),
  CDN(900, 600, 'whatsapp-image-2025-10-13-at-12.11.15-zQN4UTAXUqfx1Q5I.jpeg'),
  CDN(900, 600, 'whatsapp-image-2025-10-13-at-12.07.10-v1ZGLy3Gr3Sz3p7S.jpeg'),
  CDN(900, 600, 'whatsapp-image-2025-10-13-at-11.46.14-o2DNwBIXH4XiJeLh.jpeg'),
  CDN(900, 600, 'whatsapp_image_2025-10-13_at_12.06.25-removebg-preview-XDrt0p0lPb0mTM4k.png'),
  CDN(900, 600, 'screenshot_2025-10-13_124732-removebg-preview-purdwnsdmeSpigIj.png'),
  CDN(1440, 640, 'merged_document-tn3WL5H95rAhwsdz.jpg'),
];

const galleryAlts = [
  'ZEV fishing paddle board', 'ZEV fishing board on water', 'Paddle board product',
  'Stand-up paddle board', 'Paddle board UAE', 'Paddle board accessories',
  'Paddle board collection', 'ZEV paddle board range',
];

const faqs = [
  { q: 'What boards do you offer?', a: 'We have paddle boards, fishing boards suited for all skill levels.' },
  { q: 'Can I rent equipment?', a: 'Rental options are not available for paddle boards and kayaks, but you can try for free.' },
  { q: 'Where can I use the boards?', a: 'Our boards are perfect for the open sea — designed to give you stability regardless of the weather conditions, and fishing spots around the UAE.' },
  { q: 'Do you offer beginner lessons?', a: 'Yes, we provide beginner-friendly lessons to get you started safely, for free.' },
  { q: 'How do I book one?', a: 'Booking is easy through our website or by calling our customer support.' },
];

export default function PaddleBoard() {
  return (
    <>
      <TopBar />
      <Navbar />

      <PageBanner
        crumbs={[
          { to: '/', label: 'Home' },
          { to: '/products', label: 'Products' },
          { label: 'Paddle Board' },
        ]}
        eyebrow="Outdoors"
        title="Paddle Board"
      />

      {/* HERO */}
      <section className="pb-hero">
        <div
          className="pb-hero-bg"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1635997504434-b997d9f47c48?auto=format&fit=crop&w=1920&q=80)' }}
        >
          <div className="wrap">
            <RevealWrapper className="pb-hero-copy">
              <span className="eyebrow" style={{ color: 'rgba(255,255,255,.75)' }}>ZEV Water Sports</span>
              <h1>Paddle. Kayak. Fish.</h1>
              <p className="lead">Your go-to spot for paddle boards, kayaks, and fishing paddle boards in the UAE.</p>
              <p>Discover premium paddle boards, kayaks, and fishing equipment in Dubai and Abu Dhabi — your ultimate destination for water sports gear and SUP adventures.</p>
              <div className="hero-cta">
                <a href="#gallery" className="btn btn-primary">View Gallery</a>
                <a href="https://api.whatsapp.com/send/?phone=971509191055" target="_blank" rel="noopener" className="btn btn-wa">
                  <WaIcon />Enquire on WhatsApp
                </a>
              </div>
            </RevealWrapper>
          </div>
        </div>
      </section>

      {/* WATER ADVENTURES — 3 product type cards */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="wrap">
          <RevealWrapper className="sec-head">
            <span className="eyebrow">What We Offer</span>
            <h2>Water Adventures</h2>
          </RevealWrapper>
          <RevealWrapper className="pb-type-grid">
            <div className="pb-type-card">
              <div className="pb-type-img">
                <ZevImage
                  id={CDN(600, 400, 'zev-fishing-board-1-Kg6DXL4EUW7QfQXf.jpg')}
                  alt="Paddle Boards" className="ptimg"
                />
              </div>
              <h3>Paddle Boards</h3>
              <p>Stable and lightweight boards for all skill levels.</p>
            </div>
            <div className="pb-type-card">
              <div className="pb-type-img">
                <ZevImage
                  id={CDN(600, 400, 'whatsapp-image-2025-10-13-at-12.11.15-zQN4UTAXUqfx1Q5I.jpeg')}
                  alt="Kayaks" className="ptimg"
                />
              </div>
              <h3>Kayaks</h3>
              <p>Durable kayaks perfect for UAE sea.</p>
            </div>
            <div className="pb-type-card">
              <div className="pb-type-img">
                <ZevImage
                  id={CDN(600, 400, 'zev-fishing-board-l07IYGVwABjWlsK2.jpg')}
                  alt="Fishing Paddle Boards" className="ptimg"
                />
              </div>
              <h3>Fishing Paddle Boards</h3>
              <p>Extra stability, space and safety with full accessories.</p>
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* FEATURE SECTION — "Your Water Adventure Starts Here" */}
      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="wrap">
          <RevealWrapper className="pb-feat">
            <div className="pb-feat-img">
              <ZevImage
                id={CDN(1440, 640, 'merged_document-tn3WL5H95rAhwsdz.jpg')}
                alt="ZEV Paddle Board range" className="pfimg"
              />
            </div>
            <div className="pb-feat-text">
              <span className="eyebrow">Stand-Up &amp; Seating SUP</span>
              <h2>Your Water Adventure Starts Here</h2>
              <p>At ZEV, we specialize in Fishing paddle boards designed for every level of water enthusiast. Explore our collection of stand-up paddle boards perfect for Dubai beaches, Abu Dhabi coastline, and calm UAE waters.</p>
              <ul className="pb-feat-list">
                <li>Inflatable paddle boards — easy storage</li>
                <li>Rigid SUP boards — high performance</li>
                <li>All-around paddle boards for beginners</li>
                <li>Touring and racing SUP boards</li>
                <li>Complete paddle board packages with accessories</li>
              </ul>
              <div className="pb-stats">
                <div className="pb-stat">
                  <span className="pb-stat-num">150<span className="pb-stat-plus">+</span></span>
                  <span className="pb-stat-lbl">Trusted Reviews</span>
                </div>
                <div className="pb-stat">
                  <span className="pb-stat-num">15</span>
                  <span className="pb-stat-lbl">Top Rated</span>
                </div>
              </div>
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* PRODUCT SPEC — annotated board diagram */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="wrap">
          <RevealWrapper className="pb-spec">
            <div className="pb-spec-text">
              <h2>Your Water Adventure Starts Here — Stand-Up and Seating Paddle Boards (SUP)</h2>
              <p>At ZEV, we specialize in Fishing paddle boards, designed for every level of water enthusiast.</p>
              <p>Premium inflatable and rigid paddle boards for UAE waters. Explore our collection of stand-up paddle boards perfect for Dubai beaches, Abu Dhabi coastline, and calm UAE waters. Inflatable SUPs, touring boards, and racing paddle boards available.</p>
              <ul className="pb-check-list">
                <li>Inflatable paddle boards (easy storage)</li>
                <li>Rigid SUP boards (high performance)</li>
                <li>All-around paddle boards for beginners</li>
                <li>Touring and racing SUP boards</li>
                <li>Complete paddle board packages with accessories</li>
              </ul>
              <div className="pb-stats">
                <div className="pb-stat">
                  <span className="pb-stat-num">150<span className="pb-stat-plus">+</span></span>
                  <span className="pb-stat-lbl">Top Rated</span>
                </div>
                <div className="pb-stat">
                  <span className="pb-stat-num">15</span>
                  <span className="pb-stat-lbl">Trusted Reviews</span>
                </div>
              </div>
            </div>
            <div className="pb-spec-img">
              <ZevImage
                id={CDN(900, 600, 'screenshot_2025-10-13_124732-removebg-preview-purdwnsdmeSpigIj.png')}
                alt="ZEV Fishing Paddle Board 353 x 88 x 15 CM — annotated diagram"
                className="psimg"
              />
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* GALLERY */}
      <section className="section" id="gallery" style={{ background: '#fff' }}>
        <div className="wrap">
          <RevealWrapper className="sec-head">
            <span className="eyebrow">Gallery</span>
            <h2>A Closer Look</h2>
            <p>Paddle boards, kayaks, and fishing moments captured beautifully.</p>
          </RevealWrapper>
          <RevealWrapper>
            <Gallery images={galleryImages} alts={galleryAlts} />
          </RevealWrapper>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="wrap">
          <RevealWrapper className="sec-head">
            <span className="eyebrow">What Customers Say</span>
            <h2>Reviews</h2>
          </RevealWrapper>
          <RevealWrapper className="pb-reviews">
            <div className="pb-review-card">
              <StarRow />
              <p>"I found the perfect paddle board here, great quality and fast delivery. Loved using it at the lake!"</p>
              <div className="pb-reviewer">
                <img
                  src="https://images.unsplash.com/photo-1686845148978-f9a1d319dbbd?auto=format&fit=crop&w=48&h=48"
                  alt="Ali M."
                />
                <div>
                  <strong>Ali M.</strong>
                  <span>Dubai</span>
                </div>
              </div>
            </div>
            <div className="pb-review-card">
              <StarRow />
              <p>"Their Fishing paddle boards are sturdy and easy to use, made my fishing trip much more enjoyable and relaxing."</p>
              <div className="pb-reviewer">
                <img
                  src="https://images.unsplash.com/photo-1647036003624-7a44d24842c6?auto=format&fit=crop&w=48&h=48"
                  alt="Sara K."
                />
                <div>
                  <strong>Sara K.</strong>
                  <span>Abu Dhabi</span>
                </div>
              </div>
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* UAE LOCATIONS */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="wrap">
          <RevealWrapper className="sec-head">
            <span className="eyebrow">Where to Ride</span>
            <h2>Best Paddle Boarding &amp; Kayaking Locations in UAE</h2>
          </RevealWrapper>
          <RevealWrapper className="pb-loc-grid">
            <div className="pb-loc-card">
              <div className="pb-loc-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <h3>Dubai Beaches</h3>
              <p className="pb-loc-spots">Jumeirah Beach · Kite Beach · La Mer</p>
              <p>Perfect for paddle boarding and kayaking with calm waters. Ideal for beginners and experienced paddlers. Equipment rentals and lessons available. Popular spots for SUP yoga and sunset paddling.</p>
            </div>
            <div className="pb-loc-card">
              <div className="pb-loc-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              </div>
              <h3>Fishing Spots in Dubai</h3>
              <p className="pb-loc-spots">Dubai Marina · Jumeirah · Al Mamazar</p>
              <p>Prime fishing locations accessible by board. Catch species like kingfish, barracuda, and grouper. Beach fishing and kayak fishing opportunities. Equipment and bait available at local shops.</p>
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="wrap">
          <RevealWrapper className="sec-head">
            <span className="eyebrow">Questions</span>
            <h2>FAQs</h2>
          </RevealWrapper>
          <RevealWrapper className="faq-list">
            {faqs.map((faq, i) => (
              <div className="faq-item" key={i}>
                <h4>{faq.q}</h4>
                <p>{faq.a}</p>
              </div>
            ))}
          </RevealWrapper>
        </div>
      </section>

      <FooterCTA
        title="Ready to Start Your Water Sports Adventure?"
        desc="Contact us for expert advice on paddle boards, kayaks, and fishing equipment. Free consultations and equipment demos available."
      >
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
