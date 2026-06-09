import { Link } from 'react-router-dom';
import ZevImage from './ZevImage';

export default function ProductCard({ cat, name, img, id, pic, href, desc, linkLabel = 'View details' }) {
  const to = href || `/products/${id}`;
  return (
    <Link className="prod-card" to={to}>
      <ZevImage className="pimg" id={pic} w={600} alt={name}>{img}</ZevImage>
      <div className="pbody">
        <div className="pcat">{cat}</div>
        <h3>{name}</h3>
        {desc && <p className="pdesc">{desc}</p>}
        <span className="plink">
          {linkLabel}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </span>
      </div>
    </Link>
  );
}
