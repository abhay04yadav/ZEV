import { useState } from 'react';

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

  const cls = `ph${className ? ' ' + className : ''}${loaded ? ' loaded' : ''}`;
  const imgProps = {
    alt,
    loading: priority ? 'eager' : 'lazy',
    decoding: 'async',
    fetchPriority: priority ? 'high' : 'auto',
    onLoad: () => setLoaded(true),
    onError: () => setLoaded(true),
  };

  // Support direct URLs (e.g. Zyrosite CDN, client-hosted images)
  if (id && id.startsWith('http')) {
    return (
      <div className={cls} {...props}>
        {children && !loaded && <span>{children}</span>}
        <img src={id} {...imgProps} />
      </div>
    );
  }

  // Unsplash CDN with srcset ladder
  const base = `https://images.unsplash.com/photo-${id}`;
  const q = 'auto=format&fit=crop&fm=webp&q=60';
  const srcSet = [
    `${base}?${q}&w=400 400w`,
    `${base}?${q}&w=700 700w`,
    `${base}?${q}&w=1000 1000w`,
    `${base}?${q}&w=1400 1400w`,
  ].join(', ');
  const src = `${base}?${q}&w=${Math.min(w, 1000)}`;
  const sizes = sizesProp || '(max-width:640px) 100vw, (max-width:960px) 50vw, 33vw';

  return (
    <div className={cls} data-img={id} {...props}>
      {children && !loaded && <span>{children}</span>}
      <img src={src} srcSet={srcSet} sizes={sizes} {...imgProps} />
    </div>
  );
}
