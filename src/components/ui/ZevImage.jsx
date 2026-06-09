import { useState } from 'react';

// sizes prop: override the default CSS display-size hint passed to srcset resolution.
// Pass context-appropriate values — e.g. "(max-width:880px) 100vw, 50vw" for hero images.
export default function ZevImage({
  id,
  w = 1000,
  alt = '',
  className = '',
  children,
  priority = false,
  sizes: sizesProp,
  ...props
}) {
  const [loaded, setLoaded] = useState(false);

  const base = `https://images.unsplash.com/photo-${id}`;
  // q=60 WebP is visually indistinguishable for photos but ~35% smaller than q=75
  const q = 'auto=format&fit=crop&fm=webp&q=60';

  // Fixed ladder — browser picks the closest size ≥ the needed viewport pixels.
  // Goes small enough for low-DPR mobile cards (400w) and large enough for
  // 2× retina desktops (1600w).
  const srcSet = [
    `${base}?${q}&w=400 400w`,
    `${base}?${q}&w=700 700w`,
    `${base}?${q}&w=1000 1000w`,
    `${base}?${q}&w=1400 1400w`,
  ].join(', ');

  // Fallback src — cap at 1000 so old non-srcset browsers don't load huge files
  const src = `${base}?${q}&w=${Math.min(w, 1000)}`;

  // Default layout hint — overridden per-call for context-specific images
  const sizes = sizesProp || '(max-width:640px) 100vw, (max-width:960px) 50vw, 33vw';

  return (
    <div
      className={`ph${className ? ' ' + className : ''}${loaded ? ' loaded' : ''}`}
      data-img={id}
      {...props}
    >
      {children && !loaded && <span>{children}</span>}
      <img
        src={src}
        srcSet={srcSet}
        sizes={sizes}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        fetchPriority={priority ? 'high' : 'auto'}
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(true)}
      />
    </div>
  );
}
