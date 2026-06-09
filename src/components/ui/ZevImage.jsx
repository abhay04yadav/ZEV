import { useState } from 'react';

export default function ZevImage({ id, w = 1000, alt = '', className = '', children, priority = false, ...props }) {
  const [loaded, setLoaded] = useState(false);

  const base = `https://images.unsplash.com/photo-${id}`;
  const q = 'auto=format&fit=crop&fm=webp&q=75';
  const half = Math.round(w * 0.5);
  const dbl  = Math.min(w * 2, 2400);

  const src    = `${base}?${q}&w=${w}`;
  const srcSet = `${base}?${q}&w=${half} ${half}w, ${base}?${q}&w=${w} ${w}w, ${base}?${q}&w=${dbl} ${dbl}w`;
  const sizes  = '(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw';

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
        decoding={priority ? 'sync' : 'async'}
        fetchPriority={priority ? 'high' : 'auto'}
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(true)}
      />
    </div>
  );
}
