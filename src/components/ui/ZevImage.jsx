import { useEffect, useRef } from 'react';

export default function ZevImage({ id, w = 1000, alt = '', className = '', children, ...props }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || el.dataset.done) return;
    el.dataset.done = '1';
    const img = document.createElement('img');
    img.src = `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=75`;
    img.alt = alt;
    img.loading = 'lazy';
    img.decoding = 'async';
    const onReady = () => el.classList.add('loaded');
    img.addEventListener('load', onReady);
    img.addEventListener('error', onReady);
    if (img.complete) onReady();
    const span = el.querySelector('span');
    if (span) span.style.display = 'none';
    el.appendChild(img);
  }, [id, w, alt]);

  return (
    <div ref={ref} className={`ph${className ? ' ' + className : ''}`} data-img={id} data-w={w} data-alt={alt} {...props}>
      {children && <span>{children}</span>}
    </div>
  );
}
