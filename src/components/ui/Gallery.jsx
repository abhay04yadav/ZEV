import { useState, useEffect } from 'react';
import ZevImage from './ZevImage';

export default function Gallery({ images, alts = [] }) {
  const [lightbox, setLightbox] = useState(null);
  const close = () => setLightbox(null);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') close(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = lightbox ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [lightbox]);

  return (
    <>
      <div className="gallery-grid">
        {images.map((id, i) => (
          <ZevImage
            key={id + i}
            id={id}
            w={600}
            alt={alts[i] || ''}
            tabIndex={0}
            role="button"
            aria-label={`View ${alts[i] || 'image'}`}
            onClick={() => setLightbox({ id, alt: alts[i] || '' })}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setLightbox({ id, alt: alts[i] || '' });
              }
            }}
          >
            {alts[i] || ''}
          </ZevImage>
        ))}
      </div>

      {lightbox && (
        <div className="lightbox open" onClick={(e) => { if (e.target === e.currentTarget) close(); }}>
          {/* lb-wrapper: flex column — close button sits above image, never overlaps it */}
          <div className="lb-wrapper">
            <div className="lb-bar">
              <span className="lb-caption">{lightbox.alt}</span>
              <button className="lb-close" type="button" aria-label="Close" onClick={close}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6 6 18M6 6l12 12"/>
                </svg>
              </button>
            </div>
            <img
              src={`https://images.unsplash.com/photo-${lightbox.id}?auto=format&fit=crop&fm=webp&w=1400&q=80`}
              alt={lightbox.alt}
              className="lb-img"
            />
          </div>
        </div>
      )}
    </>
  );
}
