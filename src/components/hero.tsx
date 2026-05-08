import type { PortfolioContent } from "@/src/content/portfolio";

type HeroProps = {
  content: PortfolioContent;
};

export function Hero({ content }: HeroProps) {
  return (
    <section className="hero-panel">
      <div className="hero-copy">
        <p className="eyebrow">{content.status}</p>
        <h1>{content.name}</h1>
        <h2 className="hero-title">{content.heroTitle}</h2>
        <p className="hero-intro">{content.intro}</p>
        <div className="hero-actions">
          {content.ctas.map((link, index) => (
            <a
              key={link.label}
              className={index === 0 ? "button button-primary" : "button button-secondary"}
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
      <div className="hero-frame" aria-hidden="true">
        <div className="frame-label">SECTOR // PORTFOLIO</div>
        <div className="frame-grid">
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
    </section>
  );
}
