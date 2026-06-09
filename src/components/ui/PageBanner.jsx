import { Link } from 'react-router-dom';

export default function PageBanner({ crumbs = [], eyebrow, title, subtitle, children }) {
  return (
    <section className="page-banner">
      <div className="wrap">
        {crumbs.length > 0 && (
          <div className="crumbs">
            {crumbs.map((c, i) => (
              <span key={i}>
                {i > 0 && <span className="sep">/</span>}
                {c.to ? <Link to={c.to}>{c.label}</Link> : <span className="cur">{c.label}</span>}
              </span>
            ))}
          </div>
        )}
        {eyebrow && (
          <span className="pb-accent"><span className="line"></span>{eyebrow}</span>
        )}
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}
