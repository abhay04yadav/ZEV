export default function FooterCTA({ title, desc, children }) {
  return (
    <section className="foot-cta">
      <div className="wrap">
        <div>
          <h2>{title}</h2>
          <p>{desc}</p>
        </div>
        <div className="fc-actions">
          {children}
        </div>
      </div>
    </section>
  );
}
