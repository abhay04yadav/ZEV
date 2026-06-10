import { useState, useEffect, useCallback } from 'react';
import ZevImage from './ZevImage';

const ChevL = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m15 18-6-6 6-6"/>
  </svg>
);
const ChevR = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m9 18 6-6-6-6"/>
  </svg>
);
const CloseX = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6 6 18M6 6l12 12"/>
  </svg>
);

export default function Gallery({ images, alts = [] }) {
  const [idx, setIdx] = useState(null);
  const total = images.length;

  const close = useCallback(() => setIdx(null), []);
  const prev  = useCallback((e) => { e?.stopPropagation(); setIdx(i => (i - 1 + total) % total); }, [total]);
  const next  = useCallback((e) => { e?.stopPropagation(); setIdx(i => (i + 1) % total); }, [total]);

  useEffect(() => {
    if (idx === null) return;
    const onKey = (e) => {
      if (e.key === 'Escape')     close();
      if (e.key === 'ArrowLeft')  prev();
      if (e.key === 'ArrowRight') next();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [idx, close, prev, next]);

  // Scroll lock — cleanup always runs to prevent body staying locked
  useEffect(() => {
    document.body.style.overflow = idx !== null ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [idx]);

  const isOpen = idx !== null;
  const src = isOpen
    ? `https://images.unsplash.com/photo-${images[idx]}?auto=format&fit=crop&fm=webp&w=1400&q=82`
    : '';
  const alt = isOpen ? (alts[idx] || '') : '';

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
            onClick={() => setIdx(i)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setIdx(i); }
            }}
          >
            {alts[i] || ''}
          </ZevImage>
        ))}
      </div>

      {isOpen && (
        <div className="lb-backdrop" onClick={close} role="dialog" aria-modal="true" aria-label="Image viewer">

          {/* Close — fixed to top-right of viewport, always reachable regardless of image size */}
          <button className="lb-close" onClick={close} aria-label="Close">
            <CloseX />
          </button>

          {/* prev arrow · stage · next arrow */}
          <div className="lb-frame" onClick={(e) => e.stopPropagation()}>
            {total > 1 && (
              <button className="lb-arrow lb-prev" onClick={prev} aria-label="Previous image">
                <ChevL />
              </button>
            )}

            {/* Fixed-size stage — every image renders at the same dimensions */}
            <div className="lb-stage">
              <img src={src} alt={alt} className="lb-img" draggable={false} />
              {alt && <p className="lb-cap">{alt}</p>}
            </div>

            {total > 1 && (
              <button className="lb-arrow lb-next" onClick={next} aria-label="Next image">
                <ChevR />
              </button>
            )}
          </div>

          {total > 1 && (
            <div className="lb-dots" onClick={(e) => e.stopPropagation()}>
              {images.map((_, i) => (
                <button
                  key={i}
                  className={`lb-dot${i === idx ? ' active' : ''}`}
                  onClick={() => setIdx(i)}
                  aria-label={`Image ${i + 1} of ${total}`}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}
