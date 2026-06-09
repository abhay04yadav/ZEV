import { useEffect, useRef } from 'react';

export default function RevealWrapper({ children, className = '', tag: Tag = 'div', ...props }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    document.documentElement.classList.add('js-anim');
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) { el.classList.add('in'); io.unobserve(el); } },
        { threshold: 0.08, rootMargin: '0px 0px -6% 0px' }
      );
      io.observe(el);
      return () => io.disconnect();
    } else {
      el.classList.add('in');
    }
  }, []);

  return (
    <Tag ref={ref} className={`reveal${className ? ' ' + className : ''}`} {...props}>
      {children}
    </Tag>
  );
}
