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
];

const boothLinks = [
  { to: '/soundproof-booth', label: 'Soundproof Office Booth' },
  { to: '/soundproof-booth#features-sizes', label: 'Features & Sizes' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [prodOpen, setProdOpen] = useState(false);
  const [boothOpen, setBoothOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const prodRef = useRef(null);
  const boothRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setProdOpen(false);
    setBoothOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  useEffect(() => {
    const handler = (e) => {
      if (prodRef.current && !prodRef.current.contains(e.target)) setProdOpen(false);
      if (boothRef.current && !boothRef.current.contains(e.target)) setBoothOpen(false);
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  const isActive = (path) => location.pathname === path;
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
            <li><Link to="/" className={isActive('/') ? 'active' : ''}>Home</Link></li>
            <li><Link to="/about" className={isActive('/about') ? 'active' : ''}>About</Link></li>

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
                onClick={(e) => { e.stopPropagation(); setProdOpen(v => !v); setBoothOpen(false); }}
              >
                Products
                <svg className="caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
              </button>
              <div className="dropdown">
                {productLinks.map(l => (
                  <Link key={l.to} to={l.to} onClick={closeMobile}>
                    <span className="di"></span>{l.label}
                  </Link>
                ))}
              </div>
            </li>

            {/* Soundproof Booth dropdown */}
            <li
              className={`has-drop${boothOpen ? ' open' : ''}`}
              ref={boothRef}
              onMouseEnter={() => window.innerWidth > 1000 && setBoothOpen(true)}
              onMouseLeave={() => window.innerWidth > 1000 && setBoothOpen(false)}
            >
              <button
                type="button"
                aria-expanded={boothOpen}
                onClick={(e) => { e.stopPropagation(); setBoothOpen(v => !v); setProdOpen(false); }}
              >
                Soundproof Office Booth
                <svg className="caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
              </button>
              <div className="dropdown">
                {boothLinks.map(l => (
                  <Link key={l.to} to={l.to} onClick={closeMobile}>
                    <span className="di"></span>{l.label}
                  </Link>
                ))}
              </div>
            </li>

            <li><Link to="/contact" className="nav-cta">Contact Us</Link></li>
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
