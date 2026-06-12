import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const productLinks = [
  { to: '/products/camera-laptop', label: 'Camera & Laptop' },
  { to: '/products/furniture', label: 'Furniture' },
  { to: '/products/corporate-gifts', label: 'Corporate Gifts' },
  { to: '/products/paddle-board', label: 'Paddle Board' },
  { to: '/products/screen-extender', label: 'Laptop Screen Extender' },
  { to: '/products/tire-protection', label: 'ZEV Tire Protection' },
  { to: '/products/hospitality', label: 'Hospitality Equipment' },
  { to: '/products/safety', label: 'Safety' },
  { to: '/products/coffee-maker', label: 'Portable Coffee Maker' },
  { to: '/soundproof-booth', label: 'Soundproof Office Booth' },
];

const serviceLinks = [
  { to: '/expo-stand', label: 'Expo Stand Design & Build' },
  { to: '/catering', label: 'Catering Services' },
  { to: '/printing', label: 'Printing & Production' },
];

const WA_SVG = (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.5 14.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.06 2.88 1.21 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35z"/>
  </svg>
);

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [prodOpen, setProdOpen] = useState(false);
  const [svcOpen, setSvcOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const prodRef = useRef(null);
  const svcRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setProdOpen(false);
    setSvcOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  useEffect(() => {
    const handler = (e) => {
      if (prodRef.current && !prodRef.current.contains(e.target)) setProdOpen(false);
      if (svcRef.current && !svcRef.current.contains(e.target)) setSvcOpen(false);
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  const isActive = (path) => location.pathname === path;
  const isActivePrefix = (prefix) => location.pathname.startsWith(prefix);
  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <header className={`nav${scrolled ? ' scrolled' : ''}`}>
        <div className="wrap">
          <Link to="/" className="logo" aria-label="ZEV General Trading home">
            <span className="mark">Z</span>
            <span>ZEV<small>General Trading</small></span>
          </Link>

          <ul className={`nav-links${mobileOpen ? ' open' : ''}`} id="navLinks">
            <li><Link to="/" className={isActive('/') ? 'active' : ''} onClick={closeMobile}>Home</Link></li>
            <li><Link to="/about" className={isActive('/about') ? 'active' : ''} onClick={closeMobile}>About</Link></li>

            {/* AI Solutions */}
            <li>
              <Link
                to="/ai-solutions"
                className={`nav-ai${isActive('/ai-solutions') ? ' active' : ''}`}
                onClick={closeMobile}
              >
                AI Solutions <span className="ai-badge">New</span>
              </Link>
            </li>

            {/* Products dropdown */}
            <li
              className={`has-drop${prodOpen ? ' open' : ''}`}
              ref={prodRef}
              onMouseEnter={() => window.innerWidth > 1000 && setProdOpen(true)}
              onMouseLeave={() => window.innerWidth > 1000 && setProdOpen(false)}
            >
              <button
                type="button"
                aria-expanded={prodOpen}
                onClick={(e) => { e.stopPropagation(); setProdOpen(v => !v); setSvcOpen(false); }}
              >
                Products
                <svg className="caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
              </button>
              <div className="dropdown">
                {productLinks.map(l => (
                  <Link
                    key={l.to}
                    to={l.to}
                    onClick={closeMobile}
                    style={isActive(l.to) || isActivePrefix(l.to + '/') ? { color: 'var(--teal)', background: 'var(--sand-soft)' } : {}}
                  >
                    <span className="di"></span>{l.label}
                  </Link>
                ))}
              </div>
            </li>

            {/* Services dropdown */}
            <li
              className={`has-drop${svcOpen ? ' open' : ''}`}
              ref={svcRef}
              onMouseEnter={() => window.innerWidth > 1000 && setSvcOpen(true)}
              onMouseLeave={() => window.innerWidth > 1000 && setSvcOpen(false)}
            >
              <button
                type="button"
                aria-expanded={svcOpen}
                onClick={(e) => { e.stopPropagation(); setSvcOpen(v => !v); setProdOpen(false); }}
              >
                Services
                <svg className="caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
              </button>
              <div className="dropdown">
                {serviceLinks.map(l => (
                  <Link
                    key={l.to}
                    to={l.to}
                    onClick={closeMobile}
                    style={isActive(l.to) ? { color: 'var(--teal)', background: 'var(--sand-soft)' } : {}}
                  >
                    <span className="di"></span>{l.label}
                  </Link>
                ))}
              </div>
            </li>

            <li><Link to="/contact" className="nav-cta" onClick={closeMobile}>Contact Us</Link></li>
          </ul>

          <div className="nav-right">
            <button
              className={`burger${mobileOpen ? ' active' : ''}`}
              aria-label="Toggle menu"
              onClick={() => setMobileOpen(v => !v)}
            >
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </header>
      <div
        className={`nav-overlay${mobileOpen ? ' active' : ''}`}
        onClick={() => setMobileOpen(false)}
      />
    </>
  );
}
