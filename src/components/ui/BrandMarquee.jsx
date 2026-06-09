import { brands } from '../../data/products';

export default function BrandMarquee() {
  const doubled = [...brands, ...brands];
  return (
    <div className="marquee">
      <div className="marquee-track">
        {doubled.map((b, i) => (
          <div className="brand-card" key={b + i}>
            <span>{b}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
